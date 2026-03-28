import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/little-muse-studio";

const pillars = [
  "Boundaries",
  "Safety",
  "Full Emotional Range",
  "Self-Regulation",
  "Resilience",
  "Agency",
  "Natural Consequences & Accountability",
  "Kindness",
];

const services = [
  {
    title: "Intentional Parenting Coaching",
    outcome: "Build calm, consistent parenting with clear boundaries and practical structure.",
    bullets: [
      "Reduce daily overwhelm and reactivity",
      "Strengthen connection while maintaining leadership",
      "Create clarity in how you respond to behaviour",
    ],
    href: "/coaching/intentional-parenting",
    bg: "bg-sage",
  },
  {
    title: "Neurodivergent Family Support",
    outcome: "Practical, supportive strategies for navigating neurodivergent family life.",
    bullets: [
      "Create sensory-aware routines and environments",
      "Reduce friction, overwhelm, and daily stress points",
      "Support your child with tools that work in real life",
    ],
    href: "/coaching/neurodivergent-family-support",
    bg: "bg-accent",
  },
  {
    title: "Family Vision & Planning",
    outcome: "Design a clear, aligned, and intentional family structure.",
    bullets: [
      "Define your family's values and emotional centre",
      "Establish boundaries and shared expectations",
      "Build routines, roles, and rhythms that support daily life",
    ],
    href: "/coaching/family-vision-planning",
    bg: "bg-sage",
  },
  {
    title: "Independent Play & Development",
    outcome: "Support your child to become confident, capable, and self-led.",
    bullets: [
      "Encourage independence through age-appropriate responsibility",
      "Reduce reliance on constant prompting and direction",
      "Build problem-solving skills and initiative",
    ],
    href: "/coaching/independent-play-development",
    bg: "bg-accent",
  },
  {
    title: "Behaviour & Emotional Regulation",
    outcome: "Understand behaviour and support emotional development with clarity.",
    bullets: [
      "Respond to behaviour with intention, not reaction",
      "Support emotional expression without losing structure",
      "Build regulation skills over time",
    ],
    href: "/coaching/behaviour-emotional-regulation",
    bg: "bg-sage",
  },
  {
    title: "Parental Burnout & Overwhelm Reset",
    outcome: "Support for parents who are carrying too much, for too long.",
    bullets: [
      "Reduce mental load and daily pressure",
      "Simplify routines and expectations",
      "Rebuild capacity, clarity, and confidence",
    ],
    href: "/coaching/parental-burnout-reset",
    bg: "bg-accent",
  },
];

const safeties = [
  {
    title: "Emotional Safety",
    description:
      "Children need to know their feelings are welcome — that they can express a full range of emotions without fear of rejection, ridicule, or dismissal. Emotional safety creates the foundation for honest communication and secure attachment.",
  },
  {
    title: "Psychological Safety",
    description:
      "A child who feels psychologically safe knows that mistakes are part of learning, that they won't be shamed for getting things wrong, and that their identity is unconditionally valued. It is the bedrock of confidence and resilience.",
  },
  {
    title: "Physical Safety",
    description:
      "Beyond the absence of harm, physical safety means a child's environment, routines, and sensory experience are predictable and manageable — giving their nervous system space to regulate rather than remain in a constant state of alert.",
  },
];

const CalendlyButton = ({ label = "Book a Discovery Call", className = "" }: { label?: string; className?: string }) => (
  <a
    href={CALENDLY_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-[15px] font-body text-sm font-medium hover:opacity-90 transition-opacity ${className}`}
  >
    {label} <ArrowRight size={16} />
  </a>
);

const Coaching = () => {
  return (
    <Layout>
      {/* SECTION 1 — Hero */}
      <section className="gradient-hero">
        <div className="container mx-auto px-6 py-20 md:py-28 text-center max-w-3xl">
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-foreground mb-6">
            Parenting With Clarity, Boundaries, And Intention.
          </h1>
          <p className="font-body text-base italic text-muted-foreground leading-relaxed max-w-xl mx-auto mb-8">
            A structured, practical approach to raising capable, emotionally
            secure, and independent children.
          </p>
          <CalendlyButton />
        </div>
      </section>

      {/* SECTION 2 — The Parenting With Boundaries Framework */}
      <section className="container mx-auto px-6 py-20 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            The Parenting With Boundaries Framework
          </h2>
          <p className="font-body text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            A structured approach built around eight core pillars that support
            emotional safety, resilience, accountability, and independence.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {pillars.map((pillar) => (
            <div
              key={pillar}
              className="card-lifted card-hover rounded-[15px] h-24 flex items-center justify-center px-4 text-center"
            >
              <p className="font-display text-sm font-semibold text-foreground leading-snug">
                {pillar}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/coaching/parenting-with-boundaries"
            className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-[15px] font-body text-sm font-medium hover:bg-primary/5 transition-colors"
          >
            Explore the full framework <ArrowRight size={16} />
          </Link>
          <CalendlyButton />
        </div>
      </section>

      {/* SECTION 3 — Targeted Coaching Support */}
      <section>
        <div className="container mx-auto px-6 py-20 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Targeted Coaching Support
            </h2>
            <p className="font-body text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              If you're navigating a specific challenge or need more focused
              support, we can work together in a way that's tailored to your
              family.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className={`${service.bg} card-hover rounded-[15px] p-7 flex flex-col opacity-90`}
              >
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                  {service.outcome}
                </p>
                <ul className="space-y-2 mb-6 flex-1">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-foreground/40 flex-shrink-0" />
                      <span className="font-body text-sm text-muted-foreground leading-relaxed">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-2">
                  <Link
                    to={service.href}
                    className="inline-flex items-center gap-1.5 text-foreground underline underline-offset-4 font-body text-sm font-medium hover:opacity-70 transition-opacity"
                  >
                    Learn more <ArrowRight size={13} />
                  </Link>
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-foreground underline underline-offset-4 font-body text-sm font-medium hover:opacity-70 transition-opacity"
                  >
                    Book a Discovery Call <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — A Structured Approach to Parenting */}
      <section className="container mx-auto px-6 py-20 max-w-4xl">
        <div className="text-center mb-12">
          <p className="font-body text-xs uppercase tracking-[0.25em] text-primary mb-3">
            The Foundation
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
            A Structured Approach to Parenting
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {safeties.map((safety) => (
            <div key={safety.title} className="card-lifted card-hover rounded-[15px] p-7">
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                {safety.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {safety.description}
              </p>
            </div>
          ))}
        </div>

        <blockquote className="border-l-4 border-primary pl-6 max-w-2xl mx-auto">
          <p className="font-display text-lg text-foreground leading-relaxed italic">
            "We don't parent for the moment. We parent for the adult our child
            will become — ensuring that the wounds they carry into adulthood are
            not the ones we failed to address in ourselves."
          </p>
        </blockquote>
      </section>

      {/* SECTION 5 — Resources to Support You at Home */}
      <section>
        <div className="container mx-auto px-6 py-20 text-center max-w-2xl">
          <p className="font-body text-xs uppercase tracking-[0.25em] text-primary mb-3">
            Resources
          </p>
          <h2 className="font-display text-3xl font-semibold text-foreground mb-5">
            Resources to Support You at Home
          </h2>
          <p className="font-body text-base text-muted-foreground leading-relaxed mb-8">
            Alongside coaching, there are practical tools and resources designed
            to support you and your family at home. From printable planners and
            routine guides to ebooks on independence and emotional development —
            everything is created with real family life in mind.
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
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-[15px] font-body text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Read the Journal <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6 — Final CTA */}
      <section className="container mx-auto px-6 py-20">
        <div className="gradient-cta rounded-[15px] p-10 md:p-14 text-center max-w-3xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-3">
            Ready to Get Started?
          </h2>
          <p className="font-body text-sm text-muted-foreground mb-6">
            If you're ready to approach parenting with more clarity, structure,
            and calm, you can book a discovery call below.
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-transparent text-foreground border border-foreground px-6 py-3 rounded-[15px] font-body text-sm font-medium hover:bg-foreground/5 transition-colors"
          >
            Book a Discovery Call <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Coaching;
