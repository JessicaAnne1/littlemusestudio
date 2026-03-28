import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/little-muse-studio";

const IndependentPlayDevelopment = () => {
  return (
    <Layout>
      {/* SECTION 1 — Hero */}
      <section className="gradient-hero">
        <div className="container mx-auto px-6 py-20 md:py-28 text-center max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Independent Play &amp; Development
          </h1>
          <p className="font-body text-base italic text-muted-foreground leading-relaxed max-w-xl mx-auto mb-8">
            Supporting your child to become confident, capable, and
            self-directed in everyday life.
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

      {/* SECTION 2 — When Children Become Reliant on Constant Input */}
      <section className="container mx-auto px-6 py-10 max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-8">
          When Children Become Reliant on Constant Input
        </h2>
        <div className="space-y-5 font-body text-base text-muted-foreground leading-relaxed">
          <p>
            Many parents find themselves in a cycle of constant involvement.
            Entertaining. Prompting. Reminding. Stepping in before a challenge
            has time to unfold.
          </p>
          <p>Over time, this can lead to:</p>
        </div>
        <ul className="mt-5 card-lifted card-hover rounded-[15px] px-6 py-5 space-y-3">
          {[
            "Children relying on adults for direction",
            "Reduced confidence in trying things independently",
            "Frustration when things feel too hard",
            "A constant need for engagement or assistance",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              <span className="font-body text-sm text-foreground leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 font-body text-base text-foreground font-medium leading-relaxed">
          Not because children are incapable — but because they haven't yet
          been given the structure to build independence.
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
              Independent Play &amp; Development Coaching focuses on helping
              children develop the skills, confidence, and capacity to engage
              with the world more independently. This is not about withdrawing
              support. It is about providing the right kind of support — at the
              right time — so children can gradually take ownership. Together,
              we work on:
            </p>
          </div>
          <ul className="mt-5 card-lifted card-hover rounded-[15px] px-6 py-5 space-y-3">
            {[
              "Encouraging age-appropriate independence in daily tasks",
              "Reducing reliance on constant prompting and direction",
              "Building problem-solving and decision-making skills",
              "Creating opportunities for independent play and exploration",
              "Supporting children to follow through and complete tasks",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <span className="font-body text-sm text-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 font-body text-base text-foreground font-medium leading-relaxed">
            This allows children to develop confidence not from being told they
            can — but from experiencing that they can.
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
              Independence is not taught in isolation. It is built through the
              interaction of multiple pillars:
            </p>
          </div>
          <ul className="mt-5 card-lifted card-hover rounded-[15px] px-6 py-5 space-y-3">
            {[
              "Clear boundaries that define expectations",
              "Emotional safety that allows children to try and fail",
              "Resilience developed through challenge",
              "Agency created through choice and responsibility",
              "Accountability reinforced through natural consequences",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <span className="font-body text-sm text-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 font-body text-base text-foreground font-medium leading-relaxed">
            Together, these create an environment where independence can grow
            naturally over time.
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

      {/* SECTION 5 — Building Independence in Real Life */}
      <section className="container mx-auto px-6 py-10 max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
          Building Independence in Real Life
        </h2>
        <div className="space-y-5 font-body text-base text-muted-foreground leading-relaxed">
          <p>
            Independence is not something that happens all at once. It is
            developed through consistent, everyday opportunities. This may
            include:
          </p>
        </div>
        <ul className="mt-5 card-lifted card-hover rounded-[15px] px-6 py-5 space-y-3">
          {[
            "Allowing children to make decisions within clear limits",
            "Stepping back when they are capable of trying",
            "Supporting them to work through small challenges",
            "Creating routines that encourage ownership",
            "Reducing over-assistance in tasks they can learn to manage",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              <span className="font-body text-sm text-foreground leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 font-body text-base text-muted-foreground leading-relaxed">
          These small shifts build:
        </p>
        <ul className="mt-5 card-lifted card-hover rounded-[15px] px-6 py-5 space-y-3">
          {[
            "Confidence",
            "Capability",
            "Problem-solving skills",
            "A sense of responsibility",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              <span className="font-body text-sm text-foreground leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* SECTION 6 — How We Work Together */}
      <section>
        <div className="container mx-auto px-6 py-10 max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
            How We Work Together
          </h2>
          <div className="space-y-5 font-body text-base text-muted-foreground leading-relaxed">
            <p>
              We begin with a discovery call to understand your child's current
              level of independence, where support is needed, and what feels
              challenging day to day. From there, we develop a practical,
              tailored approach that fits your child's age, personality, and
              environment. This is hands-on, real-life coaching.
            </p>
            <p>You will leave with:</p>
          </div>
          <ul className="mt-5 card-lifted card-hover rounded-[15px] px-6 py-5 space-y-3">
            {[
              "Clear strategies for encouraging independence",
              "Tools to support follow-through and responsibility",
              "Language that supports guidance without over-directing",
              "A more balanced approach to involvement and autonomy",
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
              "Feel like they are constantly needing to step in",
              "Want their child to be more independent and capable",
              "Are navigating resistance to tasks or responsibilities",
              "Want to build confidence without pressure",
              "Value a structured development-focused approach",
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
            If you're ready to support your child in becoming more confident,
            capable, and independent, you can book a discovery call below.
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

export default IndependentPlayDevelopment;
