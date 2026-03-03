import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { format } from "date-fns";

const BlogPostsList = () => {
  const queryClient = useQueryClient();

  const { data: posts, isLoading } = useQuery({
    queryKey: ["admin-blog-posts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*, blog_categories(name)")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("blog_posts").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-blog-posts"] });
      toast.success("Post deleted");
    },
    onError: () => toast.error("Failed to delete post"),
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-display text-3xl font-semibold text-foreground">Blog Posts</h1>
        <Button asChild className="rounded-full">
          <Link to="/admin/posts/new">
            <Plus size={18} className="mr-2" /> New Post
          </Link>
        </Button>
      </div>

      {isLoading ? (
        <p className="font-body text-muted-foreground">Loading posts...</p>
      ) : !posts?.length ? (
        <div className="text-center py-16">
          <p className="font-body text-muted-foreground mb-4">No blog posts yet.</p>
          <Button asChild variant="outline" className="rounded-full">
            <Link to="/admin/posts/new">Create Your First Post</Link>
          </Button>
        </div>
      ) : (
        <div className="space-y-3">
          {posts.map((post) => (
            <div
              key={post.id}
              className="flex items-center justify-between bg-card rounded-xl border border-border p-4"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-display text-base font-semibold text-foreground truncate">
                    {post.title}
                  </h3>
                  <Badge
                    variant={post.status === "published" ? "default" : "secondary"}
                    className="text-[10px]"
                  >
                    {post.status}
                  </Badge>
                </div>
                <div className="flex items-center gap-3 font-body text-xs text-muted-foreground">
                  {(post as any).blog_categories?.name && (
                    <span>{(post as any).blog_categories.name}</span>
                  )}
                  <span>{format(new Date(post.created_at), "MMM d, yyyy")}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 ml-4">
                <Button variant="ghost" size="icon" asChild>
                  <Link to={`/admin/posts/${post.id}`}>
                    <Edit size={16} />
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    if (confirm("Delete this post?")) deleteMutation.mutate(post.id);
                  }}
                >
                  <Trash2 size={16} className="text-destructive" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogPostsList;
