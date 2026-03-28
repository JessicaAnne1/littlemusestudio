import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-image.jpg";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import NewsletterSignup from "@/components/NewsletterSignup";

const offerings = [
  {
    label: "Coaching",
    title: "Parenting With Boundaries",
    description: "A structured, practical framework for raising emotionally secure, independent, and capable children.",
    href: "/coaching",
    bg: "gradient-cta",
  },
  {
    label: "Digital Downloads",
    title: "Resources for Real Family Life",
    description: "Printable planners, workbooks, and guides designed to support intentional parenting at home.",
    href: "/shop",
    bg: "gradient-card",
  },
  {
    label: "Shop",
    title: "Montessori & Play Essentials",
    description: "Curated Montessori-inspired toys, sensory play items, and beautiful products for curious little ones.",
    href: "/shop",
    bg: "gradient-cta",
  },
  {
    label: "The Journal",
    title: "Stories, Ideas & Inspiration",
    description: "Practical articles on Montessori play, emotional development, and building family rhythms that work.",
    href: "/blog",
    bg: "gradient-card",
  },
  {
    label: "Books & Guides",
    title: "The Parenting With Boundaries Book",
    description: "Jessica's framework in full — a deep dive into raising emotionally secure, boundaried, and thriving children.",
    href: "/coaching/parenting-with-boundaries",
    bg: "gradient-cta",
  },
  {
    label: "The Framework",
    title: "The 8 Pillars Program",
    description: "A guided experience through the full Parenting With Boundaries framework — from boundaries to belonging.",
    href: "/coaching/parenting-with-boundaries",
    bg: "gradient-card",
  },
];

const pillars = [
  "Boundaries",
  "Safety",
  "Full Emotional Range",
  "Self-Regulation",
  "Resilience",
  "Agency",
  "Natural Consequences",
  "Kindness",
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Intentional parenting — Little Muse Studio"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </div>
        <div className="relative container mx-auto px-6 py-24 md:py-36 lg:py-44">
          <div className="max-w-lg animate-fade-in">
            <p className="font-body text-xs uppercase tracking-[0.25em] text-foreground/70 mb-4">
              Intentional parenting · Montessori play · Family resources
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
              Raising children with clarity, boundaries, and intention.
            </h1>
            <p className="font-body text-base text-foreground/80 leading-relaxed mb-8 max-w-md">
              Coaching, resources, and Montessori-inspired tools for families who want to parent with purpose — and raise the adults their children will become.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/coaching"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-[15px] font-body text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Explore Coaching <ArrowRight size={16} />
              </Link>
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 bg-card text-foreground px-6 py-3 rounded-[15px] font-body text-sm font-medium hover:bg-muted transition-colors"
              >
                Browse the Shop
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="font-body text-xs uppercase tracking-[0.25em] text-primary mb-3">
            Everything in one place
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
            How Little Muse Studio Can Help
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map((item) => (
            <Link
              key={item.title}
              to={item.href}
              className={`${item.bg} card-hover rounded-[15px] p-8 flex flex-col group`}
            >
              <p className="font-body text-xs uppercase tracking-[0.25em] text-foreground font-medium mb-3">
                {item.label}
              </p>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1">
                {item.description}
              </p>
              <span className="inline-flex items-center gap-1.5 text-primary font-body text-sm font-medium mt-6 group-hover:underline underline-offset-4">
                Learn more <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section style={{background: "linear-gradient(to bottom, transparent, hsl(206 22% 77% / 0.25) 30%, hsl(206 22% 77% / 0.25) 70%, transparent)"}} className="py-16">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <p className="font-body text-xs uppercase tracking-[0.25em] text-foreground/70 mb-3">
            The Philosophy
          </p>
          <h2 className="font-display text-3xl font-semibold text-foreground mb-6">
            Parenting With Boundaries
          </h2>
          <p className="font-body text-base text-foreground/70 leading-relaxed mb-6">
            We don't parent for the moment. We parent for the adult our child will become. The Parenting With Boundaries framework is built around eight core pillars that support emotional safety, resilience, accountability, and independence — giving children the structure they need to truly flourish.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {pillars.map((pillar) => (
              <div key={pillar} className="card-lifted rounded-[15px] py-3 px-4 text-center">
                <p className="font-display text-xs font-semibold text-foreground leading-snug">
                  {pillar}
                </p>
              </div>
            ))}
          </div>
          <Link
            to="/coaching/parenting-with-boundaries"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-[15px] font-body text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Explore the Framework <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container mx-auto px-6 py-16">
        <div className="gradient-cta rounded-[15px] p-10 md:p-14 text-center max-w-3xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-3">
            Join the Little Muse Community
          </h2>
          <p className="font-body text-sm text-muted-foreground mb-6">
            Intentional parenting ideas, new resources, and journal entries — straight to your inbox.
          </p>
          <NewsletterSignup />
        </div>
      </section>
    </Layout>
  );
};

export default Index;
