import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { ArrowLeft, Save, Eye, Upload, X } from "lucide-react";
import RichTextEditor from "@/components/admin/RichTextEditor";

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();

const BlogPostEditor = () => {
  const { id } = useParams();
  const isNew = id === "new";
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { user } = useAuth();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [categoryId, setCategoryId] = useState<string>("");
  const [status, setStatus] = useState("draft");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [featuredImageUrl, setFeaturedImageUrl] = useState("");
  const [selectedTagIds, setSelectedTagIds] = useState<string[]>([]);
  const [newTagName, setNewTagName] = useState("");
  const [uploading, setUploading] = useState(false);

  // Fetch categories
  const { data: categories } = useQuery({
    queryKey: ["blog-categories"],
    queryFn: async () => {
      const { data, error } = await supabase.from("blog_categories").select("*").order("name");
      if (error) throw error;
      return data;
    },
  });

  // Fetch tags
  const { data: tags, refetch: refetchTags } = useQuery({
    queryKey: ["blog-tags"],
    queryFn: async () => {
      const { data, error } = await supabase.from("blog_tags").select("*").order("name");
      if (error) throw error;
      return data;
    },
  });

  // Fetch existing post
  const { data: existingPost } = useQuery({
    queryKey: ["blog-post", id],
    queryFn: async () => {
      if (isNew) return null;
      const { data, error } = await supabase.from("blog_posts").select("*").eq("id", id!).single();
      if (error) throw error;
      return data;
    },
    enabled: !isNew,
  });

  // Fetch existing post tags
  const { data: existingPostTags } = useQuery({
    queryKey: ["blog-post-tags", id],
    queryFn: async () => {
      if (isNew) return [];
      const { data, error } = await supabase.from("blog_post_tags").select("tag_id").eq("post_id", id!);
      if (error) throw error;
      return data.map((t) => t.tag_id);
    },
    enabled: !isNew,
  });

  useEffect(() => {
    if (existingPost) {
      setTitle(existingPost.title);
      setSlug(existingPost.slug);
      setExcerpt(existingPost.excerpt || "");
      setContent(existingPost.content || "");
      setCategoryId(existingPost.category_id || "");
      setStatus(existingPost.status);
      setMetaTitle(existingPost.meta_title || "");
      setMetaDescription(existingPost.meta_description || "");
      setFeaturedImageUrl(existingPost.featured_image_url || "");
    }
  }, [existingPost]);

  useEffect(() => {
    if (existingPostTags) setSelectedTagIds(existingPostTags);
  }, [existingPostTags]);

  // Auto-generate slug from title for new posts
  useEffect(() => {
    if (isNew && title) setSlug(slugify(title));
  }, [title, isNew]);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const ext = file.name.split(".").pop();
    const path = `${Date.now()}.${ext}`;
    const { error } = await supabase.storage.from("blog-images").upload(path, file);
    if (error) {
      toast.error("Failed to upload image");
      setUploading(false);
      return;
    }
    const { data: urlData } = supabase.storage.from("blog-images").getPublicUrl(path);
    setFeaturedImageUrl(urlData.publicUrl);
    setUploading(false);
    toast.success("Image uploaded");
  };

  const addTag = async () => {
    if (!newTagName.trim()) return;
    const tagSlug = slugify(newTagName);
    // Check if tag exists
    const existing = tags?.find((t) => t.slug === tagSlug);
    if (existing) {
      if (!selectedTagIds.includes(existing.id)) {
        setSelectedTagIds([...selectedTagIds, existing.id]);
      }
      setNewTagName("");
      return;
    }
    const { data, error } = await supabase
      .from("blog_tags")
      .insert({ name: newTagName.trim(), slug: tagSlug })
      .select()
      .single();
    if (error) {
      toast.error("Failed to create tag");
      return;
    }
    setSelectedTagIds([...selectedTagIds, data.id]);
    setNewTagName("");
    refetchTags();
  };

  const saveMutation = useMutation({
    mutationFn: async () => {
      if (!user) throw new Error("Not authenticated");
      const postData = {
        title,
        slug,
        excerpt,
        content,
        category_id: categoryId || null,
        status,
        meta_title: metaTitle || title,
        meta_description: metaDescription || excerpt,
        featured_image_url: featuredImageUrl || null,
        published_at: status === "published" ? new Date().toISOString() : null,
        author_id: user.id,
      };

      let postId = id;
      if (isNew) {
        const { data, error } = await supabase.from("blog_posts").insert(postData).select().single();
        if (error) throw error;
        postId = data.id;
      } else {
        const { error } = await supabase.from("blog_posts").update(postData).eq("id", id!);
        if (error) throw error;
      }

      // Update tags — delete existing then insert new
      await supabase.from("blog_post_tags").delete().eq("post_id", postId!);
      if (selectedTagIds.length > 0) {
        const tagRows = selectedTagIds.map((tagId) => ({ post_id: postId!, tag_id: tagId }));
        await supabase.from("blog_post_tags").insert(tagRows);
      }

      return postId;
    },
    onSuccess: (postId) => {
      queryClient.invalidateQueries({ queryKey: ["admin-blog-posts"] });
      queryClient.invalidateQueries({ queryKey: ["blog-post", postId] });
      toast.success(isNew ? "Post created!" : "Post saved!");
      if (isNew) navigate(`/admin/posts/${postId}`);
    },
    onError: (err: any) => toast.error(err.message || "Failed to save"),
  });

  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" size="icon" onClick={() => navigate("/admin")}>
          <ArrowLeft size={20} />
        </Button>
        <h1 className="font-display text-2xl font-semibold text-foreground flex-1">
          {isNew ? "New Post" : "Edit Post"}
        </h1>
        <Button
          variant="outline"
          className="rounded-full"
          onClick={() => window.open(`/blog/${slug}`, "_blank")}
          disabled={isNew}
        >
          <Eye size={16} className="mr-2" /> Preview
        </Button>
        <Button
          className="rounded-full"
          onClick={() => saveMutation.mutate()}
          disabled={saveMutation.isPending || !title.trim()}
        >
          <Save size={16} className="mr-2" />
          {saveMutation.isPending ? "Saving..." : "Save"}
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Editor */}
        <div className="lg:col-span-2 space-y-6">
          <div className="space-y-2">
            <Label className="font-body">Title</Label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Your post title"
              className="font-display text-lg"
            />
          </div>

          <div className="space-y-2">
            <Label className="font-body">Slug</Label>
            <Input
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              placeholder="url-friendly-slug"
              className="font-body text-sm"
            />
          </div>

          <div className="space-y-2">
            <Label className="font-body">Excerpt</Label>
            <Textarea
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="Brief summary for previews and SEO..."
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label className="font-body">Content</Label>
            <RichTextEditor content={content} onChange={setContent} />
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Status */}
          <div className="space-y-2">
            <Label className="font-body">Status</Label>
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="published">Published</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Category */}
          <div className="space-y-2">
            <Label className="font-body">Category</Label>
            <Select value={categoryId} onValueChange={setCategoryId}>
              <SelectTrigger><SelectValue placeholder="Select category" /></SelectTrigger>
              <SelectContent>
                {categories?.map((cat) => (
                  <SelectItem key={cat.id} value={cat.id}>{cat.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Tags */}
          <div className="space-y-2">
            <Label className="font-body">Tags</Label>
            <div className="flex flex-wrap gap-2 mb-2">
              {selectedTagIds.map((tagId) => {
                const tag = tags?.find((t) => t.id === tagId);
                if (!tag) return null;
                return (
                  <Badge key={tagId} variant="secondary" className="gap-1">
                    {tag.name}
                    <button onClick={() => setSelectedTagIds(selectedTagIds.filter((id) => id !== tagId))}>
                      <X size={12} />
                    </button>
                  </Badge>
                );
              })}
            </div>
            <div className="flex gap-2">
              <Input
                value={newTagName}
                onChange={(e) => setNewTagName(e.target.value)}
                placeholder="Add tag..."
                className="text-sm"
                onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addTag(); } }}
              />
              <Button variant="outline" size="sm" onClick={addTag}>Add</Button>
            </div>
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-2">
                {tags
                  .filter((t) => !selectedTagIds.includes(t.id))
                  .slice(0, 10)
                  .map((tag) => (
                    <button
                      key={tag.id}
                      onClick={() => setSelectedTagIds([...selectedTagIds, tag.id])}
                      className="font-body text-[11px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      + {tag.name}
                    </button>
                  ))}
              </div>
            )}
          </div>

          {/* Featured Image */}
          <div className="space-y-2">
            <Label className="font-body">Featured Image</Label>
            {featuredImageUrl && (
              <div className="relative rounded-lg overflow-hidden mb-2">
                <img src={featuredImageUrl} alt="Featured" className="w-full h-40 object-cover" />
                <button
                  onClick={() => setFeaturedImageUrl("")}
                  className="absolute top-2 right-2 bg-background/80 rounded-full p-1"
                >
                  <X size={14} />
                </button>
              </div>
            )}
            <label className="flex items-center gap-2 cursor-pointer bg-muted/50 border border-dashed border-border rounded-lg p-4 hover:bg-muted transition-colors">
              <Upload size={18} className="text-muted-foreground" />
              <span className="font-body text-sm text-muted-foreground">
                {uploading ? "Uploading..." : "Upload image"}
              </span>
              <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
            </label>
          </div>

          {/* SEO */}
          <div className="space-y-3 bg-card rounded-xl border border-border p-4">
            <h3 className="font-display text-sm font-semibold text-foreground">SEO Settings</h3>
            <div className="space-y-2">
              <Label className="font-body text-xs">Meta Title</Label>
              <Input
                value={metaTitle}
                onChange={(e) => setMetaTitle(e.target.value)}
                placeholder={title || "Page title for search engines"}
                className="text-sm"
              />
              <p className="font-body text-[10px] text-muted-foreground">
                {(metaTitle || title).length}/60 characters
              </p>
            </div>
            <div className="space-y-2">
              <Label className="font-body text-xs">Meta Description</Label>
              <Textarea
                value={metaDescription}
                onChange={(e) => setMetaDescription(e.target.value)}
                placeholder={excerpt || "Brief description for search results"}
                rows={3}
                className="text-sm"
              />
              <p className="font-body text-[10px] text-muted-foreground">
                {(metaDescription || excerpt).length}/160 characters
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostEditor;
