import { useEffect } from "react";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-image.jpg";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Heart, Star, BookOpen } from "lucide-react";

const categories = [
  {
    title: "Sensory Play",
    description: "Textured toys and discovery items for curious little hands.",
    icon: Star,
    bgClass: "bg-secondary",
    iconBgClass: "bg-secondary/40",
  },
  {
    title: "Montessori",
    description: "Thoughtfully designed learning tools for independent play.",
    icon: Leaf,
    bgClass: "bg-primary/30",
    iconBgClass: "bg-primary/20",
  },
  {
    title: "Baby Essentials",
    description: "Soft, safe, and beautifully crafted everyday items.",
    icon: Heart,
    bgClass: "bg-accent",
    iconBgClass: "bg-accent/40",
  },
  {
    title: "Resources",
    description: "Guides, stories, and printables for intentional family life.",
    icon: BookOpen,
    bgClass: "bg-card",
    iconBgClass: "bg-card/60",
  },
];

const KIT_DATA_UID = "d54a7dd261";
const KIT_SCRIPT_URL = "https://f.convertkit.com/ckjs/ck.5.js";
const KIT_FORM_HTML = `
<form action="https://app.kit.com/forms/9254149/subscriptions" class="seva-form formkit-form" method="post" data-sv-form="9254149" data-uid="d54a7dd261" data-format="inline" data-version="5">
  <div data-style="clean">
    <ul class="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
    <div data-element="fields" data-stacked="false" class="seva-fields formkit-fields">
      <div class="formkit-field">
        <input class="formkit-input" name="first_name" aria-label="First Name" placeholder="First Name" type="text">
      </div>
      <div class="formkit-field">
        <input class="formkit-input" name="email_address" aria-label="Email Address" placeholder="Email Address" required type="email">
      </div>
      <button data-element="submit" class="formkit-submit formkit-submit">
        <div class="formkit-spinner"><div></div><div></div><div></div></div>
        <span>Subscribe</span>
      </button>
    </div>
  </div>
</form>
`;

const Index = () => {
  useEffect(() => {
    if (document.querySelector(`script[data-uid="${KIT_DATA_UID}"]`)) return;
    const script = document.createElement("script");
    script.src = KIT_SCRIPT_URL;
    script.async = true;
    script.setAttribute("data-uid", KIT_DATA_UID);
    document.head.appendChild(script);
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Curated baby sensory toys on linen"
            className="w-full h-full object-cover"
            loading="lazy"
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
              A curated collection of play essentials, resources, and guides for 
              families who value slow living, purposeful play, and intentional parenting.
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
                className="inline-flex items-center gap-2 bg-card text-foreground px-6 py-3 rounded-full font-body text-sm font-medium hover:bg-muted transition-colors"
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
            Explore Our Collections
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              className={`${cat.bgClass} rounded-2xl p-8 text-center group hover:shadow-lg transition-shadow duration-300`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className={`mx-auto w-14 h-14 rounded-full ${cat.iconBgClass} flex items-center justify-center mb-5`}>
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
      <section className="bg-sand">
        <div className="container mx-auto px-6 py-20 text-center max-w-2xl">
          <p className="font-body text-xs uppercase tracking-[0.25em] text-primary mb-3">
            Our Philosophy
          </p>
          <h2 className="font-display text-3xl font-semibold text-foreground mb-6">
            Play With Purpose
          </h2>
          <p className="font-body text-base text-muted-foreground leading-relaxed mb-8">
            At Little Muse Studio, we believe the first five years shape everything. 
            We curate play essentials and create resources — guides, stories, and 
            printables — that support sensory development, creativity, and the joy 
            of discovery, all wrapped in an aesthetic that brings calm to your home.
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
            Join the Little Muse Community
          </h2>
          <p className="font-body text-sm text-muted-foreground mb-6">
            Get curated play ideas, new product drops &amp; journal entries straight to your inbox.
          </p>
          <div dangerouslySetInnerHTML={{ __html: KIT_FORM_HTML }} />
        </div>
      </section>
    </Layout>
  );
};

export default Index;
