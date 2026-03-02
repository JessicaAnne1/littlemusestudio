import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "Why Sensory Play Matters in the First Year",
    excerpt:
      "Discover how textured toys and open-ended materials support your baby's brain development from day one.",
    category: "Sensory Play",
    date: "Feb 24, 2026",
    color: "bg-secondary",
  },
  {
    id: 2,
    title: "5 Montessori Shelf Ideas for Tiny Spaces",
    excerpt:
      "You don't need a playroom — just a thoughtful corner. Here are our favourite small-space setups.",
    category: "Montessori",
    date: "Feb 18, 2026",
    color: "bg-eucalyptus-light",
  },
  {
    id: 3,
    title: "The Art of Intentional Play",
    excerpt:
      "Less is more. How to curate a toy collection that sparks curiosity instead of overwhelm.",
    category: "Philosophy",
    date: "Feb 10, 2026",
    color: "bg-accent",
  },
  {
    id: 4,
    title: "Our Favourite Natural Teethers — Tried & Tested",
    excerpt:
      "We put 12 popular teethers to the test. Here's what our little ones actually loved.",
    category: "Product Reviews",
    date: "Jan 30, 2026",
    color: "bg-sand",
  },
  {
    id: 5,
    title: "Creating a Calm Play Space at Home",
    excerpt:
      "Soft lighting, neutral tones, and open-ended toys — how to design a space that invites focus.",
    category: "Home",
    date: "Jan 22, 2026",
    color: "bg-secondary",
  },
  {
    id: 6,
    title: "A Beginner's Guide to Treasure Baskets",
    excerpt:
      "One of Montessori's simplest ideas and a baby favourite. Here's how to build your first one.",
    category: "Sensory Play",
    date: "Jan 15, 2026",
    color: "bg-eucalyptus-light",
  },
];

const Blog = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="container mx-auto px-6 pt-16 pb-10 text-center">
        <p className="font-body text-xs uppercase tracking-[0.25em] text-primary mb-3">
          The Journal
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
          Stories &amp; Ideas
        </h1>
        <p className="font-body text-base text-muted-foreground max-w-md mx-auto">
          Intentional play inspiration, product guides, and the Little Muse approach to early childhood.
        </p>
      </section>

      {/* Blog grid */}
      <section className="container mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <article
              key={post.id}
              className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow duration-300 animate-fade-in flex flex-col"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={`${post.color} h-48 flex items-center justify-center`}>
                <span className="font-display text-6xl text-foreground/10 select-none">
                  ✦
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-body text-[10px] uppercase tracking-widest text-primary font-medium">
                    {post.category}
                  </span>
                  <span className="font-body text-[10px] text-muted-foreground">
                    {post.date}
                  </span>
                </div>
                <h2 className="font-display text-lg font-semibold text-foreground mb-2 leading-snug">
                  {post.title}
                </h2>
                <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1">
                  {post.excerpt}
                </p>
                <Link
                  to="#"
                  className="mt-4 font-body text-sm text-primary font-medium hover:underline underline-offset-4"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
