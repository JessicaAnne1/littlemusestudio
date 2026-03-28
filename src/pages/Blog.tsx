import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";

const colorCycle = ["bg-secondary", "bg-accent", "bg-primary/20", "bg-card", "bg-secondary", "bg-accent"];

const Blog = () => {
  const { data: posts, isLoading } = useQuery({
    queryKey: ["public-blog-posts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*, blog_categories(name)")
        .eq("status", "published")
        .order("published_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  return (
    <Layout>
      {/* Header */}
      <section className="gradient-hero"><div className="container mx-auto px-6 pt-16 pb-10 text-center">
        <p className="font-body text-xs uppercase tracking-[0.25em] text-primary mb-3">
          The Journal
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
          Stories &amp; Ideas
        </h1>
        <p className="font-body text-base text-muted-foreground max-w-md mx-auto">
          Intentional play inspiration, product guides, and the Little Muse approach to early childhood.
        </p>
      </div></section>

      {/* Blog grid */}
      <section className="container mx-auto px-6 pb-20">
        {isLoading ? (
          <p className="text-center font-body text-muted-foreground py-12">Loading posts...</p>
        ) : !posts?.length ? (
          <p className="text-center font-body text-muted-foreground py-12">
            No posts yet — check back soon!
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <article
                key={post.id}
                className="gradient-card card-hover rounded-[15px] overflow-hidden border border-border animate-fade-in flex flex-col"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={`${post.featured_image_url ? "" : colorCycle[i % colorCycle.length]} h-48 flex items-center justify-center overflow-hidden`}>
                  {post.featured_image_url ? (
                    <img src={post.featured_image_url} alt={post.title} className="w-full h-full object-cover" />
                  ) : (
                    <span className="font-display text-6xl text-foreground/10 select-none">✦</span>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    {(post as any).blog_categories?.name && (
                      <span className="font-body text-[10px] uppercase tracking-widest text-primary font-medium">
                        {(post as any).blog_categories.name}
                      </span>
                    )}
                    <span className="font-body text-[10px] text-muted-foreground">
                      {format(new Date(post.published_at || post.created_at), "MMM d, yyyy")}
                    </span>
                  </div>
                  <h2 className="font-display text-lg font-semibold text-foreground mb-2 leading-snug">
                    {post.title}
                  </h2>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="mt-4 font-body text-sm text-primary font-medium hover:underline underline-offset-4"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Blog;
