import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const BlogPost = () => {
  const { slug } = useParams();

  const { data: post, isLoading } = useQuery({
    queryKey: ["blog-post-public", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*, blog_categories(name)")
        .eq("slug", slug!)
        .eq("status", "published")
        .single();
      if (error) throw error;
      return data;
    },
  });

  const { data: postTags } = useQuery({
    queryKey: ["blog-post-tags-public", post?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_post_tags")
        .select("tag_id, blog_tags(name, slug)")
        .eq("post_id", post!.id);
      if (error) throw error;
      return data;
    },
    enabled: !!post?.id,
  });

  if (isLoading) {
    return (
      <Layout>
        <div className="container mx-auto px-6 py-20 text-center">
          <p className="font-body text-muted-foreground">Loading...</p>
        </div>
      </Layout>
    );
  }

  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="font-display text-3xl font-semibold text-foreground mb-4">Post Not Found</h1>
          <Link to="/blog" className="font-body text-primary hover:underline">← Back to Journal</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Helmet>
        <title>{post.meta_title || post.title} | Little Muse Studio</title>
        <meta name="description" content={post.meta_description || post.excerpt || ""} />
      </Helmet>

      <article className="container mx-auto px-6 py-16 max-w-3xl">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft size={14} /> Back to Journal
        </Link>

        {post.featured_image_url && (
          <div className="rounded-2xl overflow-hidden mb-8">
            <img
              src={post.featured_image_url}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        )}

        <div className="flex items-center gap-3 mb-4">
          {(post as any).blog_categories?.name && (
            <Badge variant="secondary" className="font-body text-[10px] uppercase tracking-widest">
              {(post as any).blog_categories.name}
            </Badge>
          )}
          <span className="font-body text-xs text-muted-foreground">
            {format(new Date(post.published_at || post.created_at), "MMMM d, yyyy")}
          </span>
        </div>

        <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4 leading-tight">
          {post.title}
        </h1>

        {post.excerpt && (
          <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
            {post.excerpt}
          </p>
        )}

        <div
          className="prose prose-sm max-w-none font-body text-foreground leading-relaxed
            prose-headings:font-display prose-headings:text-foreground
            prose-a:text-primary prose-blockquote:border-primary/30
            prose-strong:text-foreground"
          dangerouslySetInnerHTML={{ __html: post.content || "" }}
        />

        {postTags && postTags.length > 0 && (
          <div className="mt-10 pt-6 border-t border-border flex flex-wrap gap-2">
            {postTags.map((pt: any) => (
              <Badge key={pt.tag_id} variant="outline" className="font-body text-xs">
                {pt.blog_tags?.name}
              </Badge>
            ))}
          </div>
        )}
      </article>
    </Layout>
  );
};

export default BlogPost;
