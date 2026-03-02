import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-image.jpg";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Heart, Star } from "lucide-react";

const categories = [
  {
    title: "Sensory Play",
    description: "Textured toys and discovery items for curious little hands.",
    icon: Star,
    color: "bg-secondary",
  },
  {
    title: "Montessori",
    description: "Thoughtfully designed learning tools for independent play.",
    icon: Leaf,
    color: "bg-eucalyptus-light",
  },
  {
    title: "Baby Essentials",
    description: "Soft, safe, and beautifully crafted everyday items.",
    icon: Heart,
    color: "bg-accent",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Curated baby sensory toys on linen"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
        </div>
        <div className="relative container mx-auto px-6 py-24 md:py-36 lg:py-44">
          <div className="max-w-lg animate-fade-in">
            <p className="font-body text-xs uppercase tracking-[0.25em] text-primary mb-4">
              Intentional play for little ones
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
              Where curiosity meets beauty
            </h1>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-8 max-w-md">
              Curated Montessori &amp; sensory products designed for babies and under-fives. 
              Soft, safe, and thoughtfully chosen.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-body text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Shop Collection <ArrowRight size={16} />
              </Link>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 bg-card text-foreground px-6 py-3 rounded-full font-body text-sm font-medium border border-border hover:bg-muted transition-colors"
              >
                Read the Journal
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="font-body text-xs uppercase tracking-[0.25em] text-primary mb-3">
            The Studio Edit
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
            Explore our collections
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              className={`${cat.color} rounded-2xl p-8 text-center group hover:shadow-lg transition-shadow duration-300`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="mx-auto w-14 h-14 rounded-full bg-background/60 flex items-center justify-center mb-5">
                <cat.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {cat.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {cat.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About strip */}
      <section className="bg-card">
        <div className="container mx-auto px-6 py-20 text-center max-w-2xl">
          <p className="font-body text-xs uppercase tracking-[0.25em] text-primary mb-3">
            Our Philosophy
          </p>
          <h2 className="font-display text-3xl font-semibold text-foreground mb-6">
            Play with purpose
          </h2>
          <p className="font-body text-base text-muted-foreground leading-relaxed mb-8">
            At Little Muse Studio, we believe that the first five years shape everything. 
            Every product we curate supports sensory development, creativity, and the 
            joy of discovery — wrapped in an aesthetic that brings calm to your home.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-primary font-body text-sm font-medium hover:underline underline-offset-4"
          >
            Read our stories <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container mx-auto px-6 py-20">
        <div className="bg-eucalyptus-light rounded-2xl p-10 md:p-14 text-center max-w-2xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-3">
            Join the Little Muse community
          </h2>
          <p className="font-body text-sm text-muted-foreground mb-6">
            Get curated play ideas, new product drops &amp; journal entries straight to your inbox.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-background border border-border rounded-full px-5 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <button
              type="submit"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-body text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
