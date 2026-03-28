import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/little-muse-studio";

const frameworkLayers = [
  {
    title: "Cornerstone",
    description:
      "The emotional centre of your family. This defines what matters most — the shared understanding that guides how you relate, respond, and support one another.",
  },
  {
    title: "Foundations",
    description:
      "The expectations that shape behaviour and daily interaction. This includes your family's values, boundaries, and agreements — providing clarity, consistency, and a sense of stability for everyone.",
  },
  {
    title: "Systems",
    description:
      "The way your family operates in practice. This includes routines, responsibilities, emotional tools, and regular check-ins that ensure everything works day to day.",
  },
];

const FamilyVisionPlanning = () => {
  return (
    <Layout>
      {/* SECTION 1 — Hero */}
      <section className="bg-card">
        <div className="container mx-auto px-6 py-20 md:py-28 text-center max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Family Vision &amp; Planning
          </h1>
          <p className="font-body text-base italic text-muted-foreground leading-relaxed max-w-xl mx-auto mb-8">
            A structured approach to creating a clear, aligned, and intentional
            family life.
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-[15px] font-body text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Book a Discovery Call <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* SECTION 2 — When Family Life Feels Reactive */}
      <section className="container mx-auto px-6 py-20 max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-8">
          When Family Life Feels Reactive
        </h2>
        <div className="space-y-5 font-body text-base text-muted-foreground leading-relaxed">
          <p>
            Many families move through daily life without a clear structure.
            Decisions are made in the moment. Expectations shift depending on
            the day. Routines exist, but they're inconsistent or difficult to
            maintain.
          </p>
          <p>Over time, this can lead to:</p>
        </div>
        <ul className="mt-5 space-y-3">
          {[
            "Misalignment between parents and children",
            "Repeated friction around the same issues",
            "Lack of clarity around values and expectations",
            "A constant sense of reacting rather than leading",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              <span className="font-body text-base text-muted-foreground leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-8 font-body text-base text-foreground font-medium leading-relaxed">
          Not because something is wrong — but because nothing has been clearly
          designed.
        </p>
      </section>

      {/* SECTION 3 — What This Coaching Supports */}
      <section className="bg-secondary">
        <div className="container mx-auto px-6 py-20 max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
            What This Coaching Supports
          </h2>
          <div className="space-y-5 font-body text-base text-muted-foreground leading-relaxed">
            <p>
              Family Vision &amp; Planning Coaching helps you step out of
              reactive parenting and into a more intentional, structured
              approach to family life. Together, we build a clear framework that
              reflects your values, supports your children, and creates
              consistency in how your household operates.
            </p>
            <p>This includes:</p>
          </div>
          <ul className="mt-5 space-y-3">
            {[
              "Defining the emotional centre of your family",
              "Identifying shared values and individual needs",
              "Establishing clear boundaries and expectations",
              "Creating routines and rhythms that work in real life",
              "Building systems that reduce daily decision fatigue",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <span className="font-body text-base text-muted-foreground leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-8 font-body text-base text-foreground font-medium leading-relaxed">
            The goal is not to control every moment. It is to create enough
            clarity that everyday life becomes easier to navigate.
          </p>
        </div>
      </section>

      {/* SECTION 4 — The Family Framework */}
      <section className="bg-card">
        <div className="container mx-auto px-6 py-20 max-w-4xl">
          <div className="mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              The Family Framework
            </h2>
            <p className="font-body text-base text-muted-foreground leading-relaxed max-w-2xl">
              This work is guided by a structured family framework that brings
              everything together in a practical, usable way.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {frameworkLayers.map((layer) => (
              <div key={layer.title} className="bg-background rounded-[15px] p-7">
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                  {layer.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {layer.description}
                </p>
              </div>
            ))}
          </div>
          <p className="font-body text-base text-muted-foreground leading-relaxed mb-6">
            Each layer works together to create a family environment that feels
            structured, predictable, and supportive — without becoming rigid or
            overwhelming.
          </p>
          <Link
            to="/coaching/parenting-with-boundaries"
            className="inline-flex items-center gap-2 text-primary font-body text-sm font-medium hover:underline underline-offset-4"
          >
            Learn more about the framework <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* SECTION 5 — A Collaborative Approach */}
      <section className="container mx-auto px-6 py-20 max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
          A Collaborative Approach
        </h2>
        <div className="space-y-5 font-body text-base text-muted-foreground leading-relaxed">
          <p>
            Children are gradually involved in this process in an
            age-appropriate way. They are not simply told what to do. They are
            guided to understand expectations, contribute to conversations, and
            take ownership over time. Parents hold the structure. Children grow
            within it.
          </p>
          <p>This creates:</p>
        </div>
        <ul className="mt-5 space-y-3">
          {[
            "Shared understanding instead of resistance",
            "Responsibility instead of avoidance",
            "Consistency instead of repeated correction",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              <span className="font-body text-base text-muted-foreground leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* SECTION 6 — How We Work Together */}
      <section className="bg-secondary">
        <div className="container mx-auto px-6 py-20 max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
            How We Work Together
          </h2>
          <div className="space-y-5 font-body text-base text-muted-foreground leading-relaxed">
            <p>
              We begin with a discovery call to understand your current family
              dynamics, challenges, and goals. From there, we work together to
              build a structure that fits your family — not a generic model.
              This is practical, applied work.
            </p>
            <p>You will leave with:</p>
          </div>
          <ul className="mt-5 space-y-3">
            {[
              "A clear family structure you can refer back to",
              "Defined values and expectations",
              "Routines and systems that reduce friction",
              "A more aligned and predictable home environment",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <span className="font-body text-base text-muted-foreground leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTION 7 — Who This Is For */}
      <section className="bg-card">
        <div className="container mx-auto px-6 py-20 max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Who This Is For
          </h2>
          <p className="font-body text-base text-muted-foreground leading-relaxed mb-5">
            This coaching is suited to families who:
          </p>
          <ul className="space-y-3">
            {[
              "Feel like they are constantly reacting rather than leading",
              "Want more alignment across the household",
              "Are navigating repeated challenges or conflict",
              "Want to establish clear values, expectations, and routines",
              "Are looking for a structured long-term approach to family life",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <span className="font-body text-base text-muted-foreground leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTION 8 — Final CTA */}
      <section className="bg-secondary">
        <div className="container mx-auto px-6 py-20 text-center max-w-2xl">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Book a Discovery Call
          </h2>
          <p className="font-body text-base text-muted-foreground leading-relaxed mb-8">
            If you're ready to create a more intentional, aligned, and
            structured family environment, you can book a discovery call below.
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-[15px] font-body text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Book a Discovery Call <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* SECTION 9 — While You're Here */}
      <section className="container mx-auto px-6 py-20 text-center max-w-2xl">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
          While You're Here
        </h2>
        <p className="font-body text-base text-muted-foreground leading-relaxed mb-8">
          Explore practical tools and resources to support your family at home.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-[15px] font-body text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Browse the Shop <ArrowRight size={16} />
          </Link>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-[15px] font-body text-sm font-medium hover:bg-primary/5 transition-colors"
          >
            Read the Journal <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default FamilyVisionPlanning;
