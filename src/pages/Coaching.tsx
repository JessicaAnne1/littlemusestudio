import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Users, Brain, Heart } from "lucide-react";

const Coaching = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-card">
        <div className="container mx-auto px-6 py-20 md:py-28 text-center max-w-3xl">
          <p className="font-body text-xs uppercase tracking-[0.25em] text-primary mb-3">
            Guidance &amp; Support
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Coaching
          </h1>
          <p className="font-body text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
            One-on-one and group coaching for parents and professionals who want
            to live with more intention, navigate complexity with confidence, and
            build family life around what truly matters.
          </p>
        </div>
      </section>

      {/* What I Offer */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="font-body text-xs uppercase tracking-[0.25em] text-primary mb-3">
            How We Can Work Together
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
            Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              icon: Brain,
              title: "Intentional Parenting Coaching",
              description:
                "Personalised sessions designed to help you build structure, emotional regulation strategies, and purposeful routines that support your child's development — and your own wellbeing.",
              bgClass: "bg-primary/30",
              iconBgClass: "bg-primary/20",
            },
            {
              icon: Heart,
              title: "Neurodivergent Family Support",
              description:
                "Drawing from lived experience and professional training, I work with families navigating neurodivergence — helping you find frameworks that honour every family member's needs.",
              bgClass: "bg-secondary",
              iconBgClass: "bg-secondary/40",
            },
            {
              icon: Users,
              title: "Executive & Leadership Coaching",
              description:
                "For professionals and leaders within the crisis management space who want to sharpen their strategic thinking, communication, and resilience under pressure.",
              bgClass: "bg-accent",
              iconBgClass: "bg-accent/40",
            },
            {
              icon: Sparkles,
              title: "Holistic Wellbeing Sessions",
              description:
                "Integrating neuroscience coaching, positive psychology, and therapeutic arts to support your personal growth, clarity, and emotional awareness.",
              bgClass: "bg-card",
              iconBgClass: "bg-card/60",
            },
          ].map((service) => (
            <div
              key={service.title}
              className={`${service.bgClass} rounded-2xl p-8 group hover:shadow-lg transition-shadow duration-300`}
            >
              <div
                className={`w-14 h-14 rounded-full ${service.iconBgClass} flex items-center justify-center mb-5`}
              >
                <service.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* My Approach */}
      <section className="bg-sand">
        <div className="container mx-auto px-6 py-20 text-center max-w-2xl">
          <p className="font-body text-xs uppercase tracking-[0.25em] text-primary mb-3">
            My Approach
          </p>
          <h2 className="font-display text-3xl font-semibold text-foreground mb-6">
            Strategy Meets Heart
          </h2>
          <p className="font-body text-base text-muted-foreground leading-relaxed mb-4">
            My coaching style blends high-level strategic thinking with warmth,
            patience, and deep understanding. I draw on my background in crisis
            management, organisational frameworks, and my extensive certifications
            across neuroscience, positive psychology, and holistic wellbeing.
          </p>
          <p className="font-body text-base text-muted-foreground leading-relaxed mb-8">
            Every session is tailored to you — whether you're a parent seeking
            clarity, a professional navigating complexity, or someone ready
            to make meaningful change.
          </p>
          <Link
            to="/meet-the-founder"
            className="inline-flex items-center gap-2 text-primary font-body text-sm font-medium hover:underline underline-offset-4"
          >
            Learn more about my background <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-20">
        <div className="bg-secondary rounded-2xl p-10 md:p-14 text-center max-w-2xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-3">
            Ready to Get Started?
          </h2>
          <p className="font-body text-sm text-muted-foreground mb-6">
            I'd love to hear from you. Reach out to book a discovery call or to
            learn more about how we can work together.
          </p>
          <a
            href="mailto:hello@littlemusestudio.com"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-body text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Get In Touch <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Coaching;
