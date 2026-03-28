import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/little-muse-studio";

const pillars = [
  {
    title: "Boundaries",
    description: "Clear, kind expectations that define behaviour, respect, and safety.",
  },
  {
    title: "Safety",
    description:
      "A foundation of emotional, psychological, and physical safety that allows children to feel, express, and grow within a secure environment.",
  },
  {
    title: "Full Emotional Range",
    description:
      "Children are supported to experience and express all emotions — without shame, suppression, or entitlement.",
  },
  {
    title: "Self-Regulation",
    description:
      "The ability to understand, manage, and move through emotions is taught, modelled, and developed over time.",
  },
  {
    title: "Resilience",
    description:
      "Children build strength through challenge, not avoidance — learning to navigate discomfort with support.",
  },
  {
    title: "Agency",
    description:
      "Children are given voice, choice, and ownership — developing confidence and decision-making capability.",
  },
  {
    title: "Natural Consequences & Accountability",
    description:
      "Actions have outcomes. Children learn responsibility through cause and effect, not punishment.",
  },
  {
    title: "Kindness",
    description:
      "The tone in which everything is delivered — calm, respectful, and consistent, even when boundaries are firm.",
  },
];

const frameworkLayers = [
  {
    title: "Cornerstone",
    description:
      "The emotional centre of your family. This is what your family stands for — the values, beliefs, and shared understanding that guide how you relate to one another.",
  },
  {
    title: "Foundations",
    description:
      "The expectations that shape daily life. This includes boundaries, values, agreements, and the standards that create consistency, safety, and respect within the home.",
  },
  {
    title: "Systems",
    description:
      "The way your family operates day to day. This includes routines, rhythms, responsibilities, emotional tools, repair processes, and regular check-ins that keep everything working in practice.",
  },
];

const ParentingWithBoundaries = () => {
  return (
    <Layout>
      {/* SECTION 1 — Hero */}
      <section className="gradient-hero">
        <div className="container mx-auto px-6 py-20 md:py-28 text-center max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Parenting With Boundaries
          </h1>
          <p className="font-body text-base italic text-muted-foreground leading-relaxed max-w-xl mx-auto mb-8">
            A structured approach to raising capable, emotionally secure, and
            independent children.
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

      {/* SECTION 2 — Intro */}
      <section className="container mx-auto px-6 py-10 max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-8 text-center">
          Raising Children With Clarity, Confidence, and Calm
        </h2>
        <div className="space-y-5 font-body text-base text-muted-foreground leading-relaxed">
          <p>Parenting today can feel overwhelming.</p>
          <p>
            There is no shortage of advice — but much of it sits at the
            extremes. Be softer. Be firmer. Do more. Do less.
          </p>
          <p>
            And somewhere in the middle, many parents are left asking: what
            actually works — and how do I stay consistent when it matters most?
          </p>
          <p>
            This framework was created to answer that. Not as a set of rules,
            and not as a rigid philosophy — but as a clear, grounded approach to
            raising children who are capable, emotionally secure, and able to
            navigate the world with confidence.
          </p>
          <p>
            Because parenting is not about managing behaviour in the moment. It
            is about something far more important.
          </p>
        </div>
        <blockquote className="mt-10 gradient-card card-hover rounded-[15px] px-8 py-8 border-l-4 border-primary">
          <p className="font-display text-lg text-foreground leading-relaxed italic">
            "We don't parent for the moment. We parent for the adult our child
            will become — ensuring that the wounds they carry into adulthood are
            not the ones we failed to address in ourselves."
          </p>
        </blockquote>
      </section>

      {/* SECTION 3 — Framework Intro */}
      <section>
        <div className="container mx-auto px-6 py-10 max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
            A Framework Designed for Real Families
          </h2>
          <div className="space-y-5 font-body text-base text-muted-foreground leading-relaxed text-left">
            <p>
              The Parenting With Boundaries framework is built on eight core
              pillars. Together, they create a structure that is both firm and
              kind — one that supports emotional safety while building
              resilience, independence, and accountability over time.
            </p>
            <p>
              This is not about perfection. It is about consistency, clarity,
              and the ability to respond with intention — even in the messy,
              everyday moments of family life.
            </p>
            <p>Each pillar works together as part of a whole system. A system that helps you:</p>
          </div>
          <ul className="mt-5 card-lifted card-hover rounded-[15px] px-6 py-5 space-y-3 text-left">
            {[
              "Set clear boundaries without guilt",
              "Support emotional expression without losing structure",
              "Guide behaviour without punishment",
              "Raise children who take ownership, not avoidance",
              "Create a home environment that feels calm, predictable, and safe",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <span className="font-body text-sm text-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 font-body text-base text-foreground font-medium leading-relaxed">
            This is not reactive parenting. This is intentional, structured,
            future-focused parenting.
          </p>
        </div>
      </section>

      {/* SECTION 4 — The Eight Pillars */}
      <section className="container mx-auto px-6 py-10 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            The Eight Pillars of Intentional Parenting
          </h2>
          <p className="font-body text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            At the centre of this work are eight core pillars. They are simple
            in language, but powerful in practice — each one shaping how
            children experience safety, boundaries, responsibility, and growth
            within the family.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="gradient-card card-hover rounded-[15px] p-6 flex flex-col items-center justify-center text-center min-h-[96px]">
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {pillar.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5 — How the Pillars Work Together */}
      <section>
        <div className="container mx-auto px-6 py-10 max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
            How the Pillars Work Together
          </h2>
          <div className="space-y-5 font-body text-base text-muted-foreground leading-relaxed text-left">
            <p>
              When these pillars are applied consistently, something shifts.
              Parenting becomes clearer. Responses become more intentional. The
              home environment becomes more predictable and calm.
            </p>
          </div>
          <ul className="mt-6 card-lifted card-hover rounded-[15px] px-6 py-5 space-y-3 text-left">
            {[
              "Understand expectations",
              "Take responsibility for their actions",
              "Regulate themselves over time",
              "Develop confidence and independence",
              "Feel safe — even when boundaries are upheld",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <span className="font-body text-sm text-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 font-body text-base text-foreground font-medium">
            This is not about controlling behaviour. It is about building
            capability.
          </p>
        </div>
      </section>

      {/* SECTION 6 — The Family Framework */}
      <section>
        <div className="container mx-auto px-6 py-10 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Bringing the Framework Into Everyday Life
            </h2>
            <p className="font-body text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Understanding the pillars is one part of the process. Applying
              them within your home — consistently, calmly, and in a way that
              works for your family — is where real change happens. This is
              where the Family Framework comes in.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {frameworkLayers.map((layer) => (
              <div key={layer.title} className="card-lifted card-hover rounded-[15px] p-6 flex flex-col">
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                  {layer.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {layer.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — The 8 Pillars Program */}
      <section className="container mx-auto px-6 py-10 max-w-3xl text-center">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
          The 8 Pillars Program
        </h2>
        <div className="space-y-5 font-body text-base text-muted-foreground leading-relaxed text-left">
          <p>
            The 8 Pillars Program is a guided way to learn, understand, and
            apply this framework within your own home. It is designed for
            parents who want more than surface-level strategies — and are ready
            to build something consistent, calm, and sustainable over time.
          </p>
          <p>Through this process, you will:</p>
        </div>
        <ul className="mt-5 card-lifted card-hover rounded-[15px] px-6 py-5 space-y-3 text-left">
          {[
            "Understand how each pillar applies to your family",
            "Learn how to set and hold boundaries with clarity",
            "Support your child's emotional development without losing structure",
            "Create routines and systems that reduce daily friction",
            "Build a family environment that feels calm, predictable, and connected",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              <span className="font-body text-sm text-foreground leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 font-body text-base text-foreground font-medium leading-relaxed">
          This is not about doing more. It is about doing things differently —
          with intention, clarity, and consistency.
        </p>
      </section>

      {/* SECTION 8 — Final CTA */}
      <section className="container mx-auto px-6 py-10">
        <div className="gradient-cta rounded-[15px] p-10 md:p-14 text-center max-w-3xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Start With a Conversation
          </h2>
          <p className="font-body text-base text-muted-foreground leading-relaxed mb-8">
            Every family is different. If you're unsure where to begin, or want
            to explore whether this approach is right for you, you can start
            with a discovery call. From there, we can determine the most
            appropriate way to support you.
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
      <section className="gradient-accent py-10">
        <div className="container mx-auto px-6 text-center max-w-2xl mx-auto">
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
        </div>
      </section>
    </Layout>
  );
};

export default ParentingWithBoundaries;
