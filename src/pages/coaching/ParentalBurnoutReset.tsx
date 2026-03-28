import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/little-muse-studio";

const ParentalBurnoutReset = () => {
  return (
    <Layout>
      {/* SECTION 1 — Hero */}
      <section className="bg-card">
        <div className="container mx-auto px-6 py-20 md:py-28 text-center max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Parental Burnout &amp; Overwhelm Reset
          </h1>
          <p className="font-body text-base italic text-muted-foreground leading-relaxed max-w-xl mx-auto mb-8">
            Supporting you to reduce mental load, rebuild capacity, and parent
            with greater clarity and steadiness.
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

      {/* SECTION 2 — When It Starts to Feel Like Too Much */}
      <section className="container mx-auto px-6 py-20 max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-8">
          When It Starts to Feel Like Too Much
        </h2>
        <div className="space-y-5 font-body text-base text-muted-foreground leading-relaxed">
          <p>
            Parenting can become overwhelming quietly. It builds over time. The
            constant thinking. The planning. The remembering. The emotional load
            of holding everything together.
          </p>
          <p>And eventually, it can feel like:</p>
        </div>
        <ul className="mt-5 space-y-3">
          {[
            "There is no space to pause",
            "You are always one step behind",
            "Small things feel harder than they should",
            "Your patience is shorter than you want it to be",
            "You're carrying more than you can sustain",
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
          Not because you're doing something wrong — but because you've been
          carrying too much, for too long.
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
              Parental Burnout &amp; Overwhelm Reset Coaching focuses on
              supporting you — not just your child. Because the way you parent
              is directly shaped by your capacity. Together, we work on:
            </p>
          </div>
          <ul className="mt-5 space-y-3">
            {[
              "Reducing mental load and decision fatigue",
              "Simplifying routines and expectations",
              "Identifying what is necessary and what can be let go",
              "Rebuilding emotional capacity and steadiness",
              "Creating a more sustainable approach to daily life",
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
            This is not about doing more. It is about creating space, clarity,
            and structure so parenting feels more manageable.
          </p>
        </div>
      </section>

      {/* SECTION 4 — Grounded in a Clear Framework */}
      <section className="bg-card">
        <div className="container mx-auto px-6 py-20 max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Grounded in a Clear Framework
          </h2>
          <div className="space-y-5 font-body text-base text-muted-foreground leading-relaxed">
            <p>
              This work is grounded in the Parenting With Boundaries framework.
              Because parenting sustainably requires:
            </p>
          </div>
          <ul className="mt-5 space-y-3">
            {[
              "Boundaries — not just for children, but for yourself",
              "Emotional awareness — recognising when capacity is low",
              "Regulation — responding instead of reacting",
              "Clarity — knowing what matters and what doesn't",
              "Consistency — reducing the need for constant decision-making",
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
            When these are in place, parenting becomes less reactive and more
            steady.
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

      {/* SECTION 5 — Creating Space to Reset */}
      <section className="container mx-auto px-6 py-20 max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
          Creating Space to Reset
        </h2>
        <div className="space-y-5 font-body text-base text-muted-foreground leading-relaxed">
          <p>Burnout does not resolve through pushing through. It resolves through:</p>
        </div>
        <ul className="mt-5 space-y-3">
          {[
            "Reducing unnecessary pressure",
            "Creating systems that support you",
            "Allowing space to think more clearly",
            "Approaching parenting in a way that is sustainable over time",
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
          This is where small shifts make a significant difference.
        </p>
      </section>

      {/* SECTION 6 — How We Work Together */}
      <section className="bg-secondary">
        <div className="container mx-auto px-6 py-20 max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
            How We Work Together
          </h2>
          <div className="space-y-5 font-body text-base text-muted-foreground leading-relaxed">
            <p>
              We begin with a discovery call to understand what you're currently
              carrying, what feels most overwhelming, and where support is
              needed. From there, we take a practical, tailored approach. This
              is not theoretical.
            </p>
            <p>You will leave with:</p>
          </div>
          <ul className="mt-5 space-y-3">
            {[
              "Clearer priorities",
              "Simplified systems and routines",
              "Tools to reduce mental load",
              "A more grounded approach to parenting",
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
            This coaching is suited to parents who:
          </p>
          <ul className="space-y-3">
            {[
              "Feel overwhelmed by the day-to-day demands of parenting",
              "Are experiencing mental load and decision fatigue",
              "Notice increased reactivity or reduced patience",
              "Feel like they are constantly on",
              "Want a more sustainable and manageable approach",
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
            If you're feeling overwhelmed and ready to create a more
            sustainable, supported approach to parenting, you can book a
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

export default ParentalBurnoutReset;
