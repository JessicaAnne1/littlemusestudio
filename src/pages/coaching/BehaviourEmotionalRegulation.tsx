import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/little-muse-studio";

const BehaviourEmotionalRegulation = () => {
  return (
    <Layout>
      {/* SECTION 1 — Hero */}
      <section className="gradient-hero">
        <div className="container mx-auto px-6 py-20 md:py-28 text-center max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Behaviour &amp; Emotional Regulation
          </h1>
          <p className="font-body text-base italic text-muted-foreground leading-relaxed max-w-xl mx-auto mb-8">
            Understanding behaviour, supporting emotional development, and
            responding with clarity and consistency.
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

      {/* SECTION 2 — When Behaviour Feels Constant and Unpredictable */}
      <section className="container mx-auto px-6 py-10 max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-8">
          When Behaviour Feels Constant and Unpredictable
        </h2>
        <div className="space-y-5 font-body text-base text-muted-foreground leading-relaxed">
          <p>
            For many parents, behaviour can feel like the hardest part of
            parenting. Outbursts. Resistance. Big emotions that seem to come out
            of nowhere. Moments where nothing you say seems to land.
          </p>
          <p>It can leave you feeling:</p>
        </div>
        <ul className="mt-5 card-lifted card-hover rounded-[15px] px-6 py-5 space-y-3">
          {[
            "Unsure how to respond in the moment",
            "Caught between being too firm or too flexible",
            "Emotionally drained by repeated patterns",
            "Questioning whether you're getting it right",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              <span className="font-body text-sm text-foreground leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 font-body text-base text-foreground font-medium leading-relaxed">
          What often gets labelled as behaviour is rarely just behaviour. It is
          communication.
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
              Behaviour &amp; Emotional Regulation Coaching focuses on helping
              you understand what is driving behaviour — and how to respond in a
              way that supports both emotional development and clear boundaries.
              Together, we work on:
            </p>
          </div>
          <ul className="mt-5 card-lifted card-hover rounded-[15px] px-6 py-5 space-y-3">
            {[
              "Understanding the underlying drivers of behaviour",
              "Responding to emotions without reinforcing unhelpful patterns",
              "Setting and holding boundaries with consistency",
              "Supporting children to develop regulation skills over time",
              "Reducing repeated cycles of escalation and reaction",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <span className="font-body text-sm text-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 font-body text-base text-foreground font-medium leading-relaxed">
            This is not about controlling behaviour. It is about guiding
            development.
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
              Behaviour is understood through the interaction of several key
              pillars:
            </p>
          </div>
          <ul className="mt-5 card-lifted card-hover rounded-[15px] px-6 py-5 space-y-3">
            {[
              "Emotional range — allowing feelings without suppression",
              "Self-regulation — building the ability to move through emotions",
              "Safety — creating an environment where expression is supported",
              "Boundaries — providing structure and clarity",
              "Accountability — reinforcing responsibility over time",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <span className="font-body text-sm text-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 font-body text-base text-foreground font-medium leading-relaxed">
            This creates a balanced approach where children are both supported
            and guided.
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

      {/* SECTION 5 — Moving Beyond Reaction */}
      <section className="container mx-auto px-6 py-10 max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
          Moving Beyond Reaction
        </h2>
        <div className="space-y-5 font-body text-base text-muted-foreground leading-relaxed">
          <p>
            Without structure, behaviour often becomes a cycle: reaction,
            escalation, correction, repetition. With clarity and consistency,
            that cycle begins to change.
          </p>
          <p>You are able to:</p>
        </div>
        <ul className="mt-5 card-lifted card-hover rounded-[15px] px-6 py-5 space-y-3">
          {[
            "Recognise what is happening earlier",
            "Respond in a more grounded way",
            "Reduce escalation over time",
            "Guide behaviour with greater confidence",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              <span className="font-body text-sm text-foreground leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 font-body text-base text-foreground font-medium leading-relaxed">
          This creates a more predictable and manageable dynamic within the
          home.
        </p>
      </section>

      {/* SECTION 6 — How We Work Together */}
      <section>
        <div className="container mx-auto px-6 py-10 max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
            How We Work Together
          </h2>
          <div className="space-y-5 font-body text-base text-muted-foreground leading-relaxed">
            <p>
              We begin with a discovery call to understand the behaviours you're
              navigating, the patterns you're seeing, and what feels most
              challenging. From there, we develop a clear, practical approach
              tailored to your child and your family. This is applied coaching —
              focused on real-life situations.
            </p>
            <p>You will leave with:</p>
          </div>
          <ul className="mt-5 card-lifted card-hover rounded-[15px] px-6 py-5 space-y-3">
            {[
              "Clear ways to respond in the moment",
              "Language that supports both emotion and structure",
              "Strategies to reduce escalation",
              "A more consistent and confident approach",
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
              "Are navigating ongoing behavioural challenges",
              "Feel overwhelmed by emotional outbursts or resistance",
              "Want to respond with more clarity and confidence",
              "Are seeking a balanced approach between support and structure",
              "Value long-term development over short-term control",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <span className="font-body text-sm text-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTION 8 — Important Scope of Support */}
      <section className="container mx-auto px-6 py-10 max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
          Important Scope of Support
        </h2>
        <p className="font-body text-base text-muted-foreground leading-relaxed">
          This coaching provides practical strategies and guidance for
          supporting behaviour and emotional development within the home. It
          does not replace psychological, medical, or allied health care. Where
          relevant, it works alongside existing professional support to help
          create consistency and clarity in day-to-day parenting.
        </p>
      </section>

      {/* SECTION 9 — Final CTA */}
      <section className="container mx-auto px-6 py-10">
        <div className="gradient-cta rounded-[15px] p-10 md:p-14 text-center max-w-3xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Book a Discovery Call
          </h2>
          <p className="font-body text-base text-muted-foreground leading-relaxed mb-8">
            If you're looking for a more grounded, structured way to understand
            and respond to behaviour, you can book a discovery call below.
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

      {/* SECTION 10 — While You're Here */}
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

export default BehaviourEmotionalRegulation;
