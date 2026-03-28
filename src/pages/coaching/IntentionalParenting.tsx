import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/little-muse-studio";

const IntentionalParenting = () => {
  return (
    <Layout>
      {/* SECTION 1 — Hero */}
      <section className="bg-card">
        <div className="container mx-auto px-6 py-20 md:py-28 text-center max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Intentional Parenting Coaching
          </h1>
          <p className="font-body text-base italic text-muted-foreground leading-relaxed max-w-xl mx-auto mb-8">
            A clear, structured approach to parenting with calm, consistency,
            and confidence.
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

      {/* SECTION 2 — When Parenting Starts to Feel Unclear */}
      <section className="container mx-auto px-6 py-20 max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-8">
          When Parenting Starts to Feel Unclear
        </h2>
        <div className="space-y-5 font-body text-base text-muted-foreground leading-relaxed">
          <p>
            Many parents find themselves caught between two extremes. Trying to
            be calm and responsive, while also needing structure. Wanting to
            support emotions, but unsure where boundaries sit. Responding in the
            moment, then questioning it afterwards. Over time, this creates
            inconsistency.
          </p>
          <p>And with inconsistency comes:</p>
        </div>
        <ul className="mt-5 space-y-3">
          {[
            "Repeated behaviour patterns",
            "Increased emotional reactions",
            "A sense of overwhelm or second-guessing",
            "Children testing limits because they're unclear",
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
          This isn't a failure of parenting. It's a lack of structure.
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
              Intentional Parenting Coaching helps you bring clarity back into
              your parenting. Not through rigid rules or surface-level strategies
              — but through a structured, grounded approach that allows you to
              respond with confidence and consistency.
            </p>
            <p>Together, we focus on:</p>
          </div>
          <ul className="mt-5 space-y-3">
            {[
              "Setting clear, kind boundaries that are actually upheld",
              "Responding to behaviour with intention, not reaction",
              "Supporting emotional expression without losing structure",
              "Creating routines and expectations that reduce daily friction",
              "Building consistency so your child knows what to expect",
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
            This creates a parenting approach that feels calm, steady, and
            sustainable.
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
              A structured approach built on eight core pillars that guide how
              boundaries are set, how emotions are supported, and how children
              develop independence and accountability over time. Rather than
              reacting moment to moment, you begin to:
            </p>
          </div>
          <ul className="mt-5 space-y-3">
            {[
              "Understand why behaviour is happening",
              "Respond in a way that aligns with your values",
              "Create an environment that supports long-term development",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <span className="font-body text-base text-muted-foreground leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <blockquote className="mt-10 border-l-4 border-primary pl-6">
            <p className="font-display text-lg text-foreground leading-relaxed italic">
              "We don't parent for the moment. We parent for the adult our child
              will become — ensuring that the wounds they carry into adulthood
              are not the ones we failed to address in ourselves."
            </p>
          </blockquote>
          <div className="mt-8">
            <Link
              to="/coaching/parenting-with-boundaries"
              className="inline-flex items-center gap-2 text-primary font-body text-sm font-medium hover:underline underline-offset-4"
            >
              Learn more about the framework <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5 — How We Work Together */}
      <section className="container mx-auto px-6 py-20 max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
          How We Work Together
        </h2>
        <div className="space-y-5 font-body text-base text-muted-foreground leading-relaxed">
          <p>
            We begin with a discovery call. This is a space to understand what's
            currently happening in your home, where things feel difficult, and
            what you're wanting to shift. From there, we determine the most
            appropriate way to support you. Coaching is practical and tailored
            to your family — focused on real-life application, not theory.
          </p>
          <p>You will leave each session with:</p>
        </div>
        <ul className="mt-5 space-y-3">
          {[
            "Clear direction",
            "Practical tools",
            "Language you can use immediately",
            "A stronger sense of confidence in your approach",
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

      {/* SECTION 6 — Who This Is For */}
      <section className="bg-secondary">
        <div className="container mx-auto px-6 py-20 max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Who This Is For
          </h2>
          <p className="font-body text-base text-muted-foreground leading-relaxed mb-5">
            This coaching is suited to parents who:
          </p>
          <ul className="space-y-3">
            {[
              "Feel inconsistent in how they respond to behaviour",
              "Are navigating boundaries, routines, or emotional challenges",
              "Want to move away from reactive parenting",
              "Are seeking a more structured, intentional approach",
              "Value calm, respectful, and development-focused parenting",
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

      {/* SECTION 7 — Final CTA */}
      <section className="bg-card">
        <div className="container mx-auto px-6 py-20 text-center max-w-2xl">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Book a Discovery Call
          </h2>
          <p className="font-body text-base text-muted-foreground leading-relaxed mb-8">
            If you're ready to approach parenting with more clarity, structure,
            and calm, you can book a discovery call below.
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

      {/* SECTION 8 — While You're Here */}
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

export default IntentionalParenting;
