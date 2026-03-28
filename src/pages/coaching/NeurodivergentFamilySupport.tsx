import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/little-muse-studio";

const NeurodivergentFamilySupport = () => {
  return (
    <Layout>
      {/* SECTION 1 — Hero */}
      <section className="gradient-hero">
        <div className="container mx-auto px-6 py-20 md:py-28 text-center max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Neurodivergent Family Support
          </h1>
          <p className="font-body text-base italic text-muted-foreground leading-relaxed max-w-xl mx-auto mb-8">
            Practical, structured support for families navigating neurodivergent
            needs with clarity, consistency, and care.
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

      {/* SECTION 2 — When Traditional Approaches Don't Fit */}
      <section className="container mx-auto px-6 py-10 max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-8">
          When Traditional Approaches Don't Fit
        </h2>
        <div className="space-y-5 font-body text-base text-muted-foreground leading-relaxed">
          <p>
            For many families, standard parenting advice simply doesn't apply.
            What works for one child may not work for another. What feels
            manageable one day can feel overwhelming the next. And what is often
            labelled as behaviour is frequently something deeper — sensory,
            emotional, or neurological.
          </p>
          <p>This can leave parents feeling:</p>
        </div>
        <ul className="mt-5 card-lifted card-hover rounded-[15px] px-6 py-5 space-y-3">
          {[
            "Uncertain about how to respond",
            "Caught between being too flexible or too firm",
            "Overwhelmed by conflicting advice",
            "Exhausted from constant adjustment",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              <span className="font-body text-sm text-foreground leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 font-body text-base text-foreground font-medium leading-relaxed">
          The goal is not to force a child into a rigid system. It is to create
          a structure that supports how they experience the world.
        </p>
      </section>

      {/* SECTION 3 — What This Coaching Supports */}
      <section>
        <div className="container mx-auto px-6 py-10 max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
            What This Coaching Supports
          </h2>
          <div className="space-y-5 font-body text-base text-muted-foreground leading-relaxed">
            <p>
              Neurodivergent Family Support focuses on building a home
              environment that reduces friction, supports regulation, and creates
              predictability — while still maintaining clear, consistent
              boundaries. Together, we work on:
            </p>
          </div>
          <ul className="mt-5 card-lifted card-hover rounded-[15px] px-6 py-5 space-y-3">
            {[
              "Creating routines that support your child's needs and capacity",
              "Identifying and reducing common overwhelm triggers",
              "Adapting expectations in a way that remains structured and supportive",
              "Supporting emotional regulation through practical repeatable tools",
              "Building consistency so your child knows what to expect",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <span className="font-body text-sm text-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 font-body text-base text-foreground font-medium leading-relaxed">
            This is not about removing boundaries. It is about applying them in
            a way that is appropriate, sustainable, and effective for your child.
          </p>
        </div>
      </section>

      {/* SECTION 4 — Grounded in a Clear Framework */}
      <section>
        <div className="container mx-auto px-6 py-10 max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Grounded in a Clear Framework
          </h2>
          <div className="space-y-5 font-body text-base text-muted-foreground leading-relaxed">
            <p>
              This work is grounded in the Parenting With Boundaries framework.
              The same core principles apply — boundaries, safety, emotional
              range, regulation, resilience, agency, accountability, and
              kindness — but they are adapted to meet your child where they are.
              This creates a balance between:
            </p>
          </div>
          <ul className="mt-5 card-lifted card-hover rounded-[15px] px-6 py-5 space-y-3">
            {[
              "Flexibility and structure",
              "Support and expectation",
              "Understanding and consistency",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <span className="font-body text-sm text-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 font-body text-base text-foreground font-medium leading-relaxed">
            So that your child is both supported and guided as they grow.
          </p>
          <div className="mt-6">
            <Link
              to="/coaching/parenting-with-boundaries"
              className="inline-flex items-center gap-2 text-primary font-body text-sm font-medium hover:underline underline-offset-4"
            >
              Learn more about the framework <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5 — Working Alongside Your Support Network */}
      <section className="container mx-auto px-6 py-10 max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
          Working Alongside Your Support Network
        </h2>
        <div className="space-y-5 font-body text-base text-muted-foreground leading-relaxed">
          <p>
            This coaching is designed to complement — not replace — professional
            support. It provides practical tools and strategies for home life,
            helping to create consistency across your child's environment. Where
            relevant, this may sit alongside: psychology, occupational therapy,
            speech therapy, other allied health support.
          </p>
          <p>
            The focus here is on what happens day to day within your home — how
            routines are structured, how boundaries are held, and how your child
            is supported in real-life moments.
          </p>
        </div>
      </section>

      {/* SECTION 6 — How We Work Together */}
      <section>
        <div className="container mx-auto px-6 py-10 max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
            How We Work Together
          </h2>
          <div className="space-y-5 font-body text-base text-muted-foreground leading-relaxed">
            <p>
              We begin with a discovery call. This is a space to understand your
              child's needs, your current challenges, and what feels most
              difficult at home. From there, we determine the most appropriate
              way to support you. Coaching is practical, flexible, and tailored
              — focused on real-life application rather than theory.
            </p>
            <p>You will leave with:</p>
          </div>
          <ul className="mt-5 card-lifted card-hover rounded-[15px] px-6 py-5 space-y-3">
            {[
              "Clear strategies you can implement immediately",
              "Tools to support regulation and transitions",
              "A more consistent approach across your home",
              "Greater confidence in how you respond",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <span className="font-body text-sm text-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTION 7 — Who This Is For */}
      <section>
        <div className="container mx-auto px-6 py-10 max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Who This Is For
          </h2>
          <p className="font-body text-base text-muted-foreground leading-relaxed mb-5">
            This coaching is suited to parents who:
          </p>
          <ul className="mt-5 card-lifted card-hover rounded-[15px] px-6 py-5 space-y-3">
            {[
              "Are raising a neurodivergent child and need practical support",
              "Feel overwhelmed by day-to-day dynamics at home",
              "Are navigating sensory needs, regulation challenges, or transitions",
              "Want to create more predictability and calm",
              "Are seeking structured support that works alongside existing care",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <span className="font-body text-sm text-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTION 8 — Final CTA */}
      <section className="container mx-auto px-6 py-10">
        <div className="gradient-cta rounded-[15px] p-10 md:p-14 text-center max-w-3xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Book a Discovery Call
          </h2>
          <p className="font-body text-base text-muted-foreground leading-relaxed mb-8">
            If you're looking for practical, supportive ways to navigate your
            family's needs with more clarity and consistency, you can book a
            discovery call below.
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

export default NeurodivergentFamilySupport;
