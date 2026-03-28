import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import founderPhoto from "@/assets/founder-photo.jpg";

const MeetTheFounder = () => {
  return (
    <Layout>
      <section className="gradient-hero">
        <div className="container mx-auto px-6 pt-20 pb-16 text-center max-w-2xl">
          <p className="font-body text-xs uppercase tracking-[0.25em] text-primary mb-4">
            The Heart Behind The Studio
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Meet The Founder
          </h1>
          <p className="font-body text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Strategist, mother, and intentional parenting advocate — Jessica O'Donnell brings together professional expertise and lived experience to support families who want to parent with purpose.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 pb-20">
        <div className="max-w-3xl mx-auto">
          {/* Founder photo + intro text side by side */}
          <div className="flex flex-col md:flex-row gap-8 mb-10">
            <div className="md:w-2/5 flex-shrink-0">
              <img
                src={founderPhoto}
                alt="Jessica — founder of Little Muse Studio"
                className="w-full h-auto object-cover rounded-[15px] card-hover"
              />
            </div>
            <div className="md:w-2/3 space-y-6 font-body text-base text-muted-foreground leading-relaxed">
              <p>
                Welcome to Little Muse Studio — a space born from the belief that the
                earliest years of childhood are worthy of beauty, intention, and care.
              </p>
              <p>
                I'm Jessica O'Donnell — a strategist and crisis manager by trade,
                but a mother first and always. My career has taken me through
                boardrooms and high-pressure situations, working with large-scale
                clients on everything from business strategy and organisational
                frameworks to guiding executives and organisations through
                significant crises. I'm also the founder of IntraWork, a management
                consulting firm, and work under my own name in executive leadership
                coaching within the crisis management space. Alongside this,
                I offer coaching for parents, families, and individuals through
                Little Muse Studio — bringing together strategy, lived experience,
                and heart.
                But beyond anything and everything else, I am a mum — and intentional
                parenting sits at the very centre of who I am.
              </p>
            </div>
          </div>

          <div className="space-y-6 font-body text-base text-muted-foreground leading-relaxed">
            <h2 className="font-display text-2xl font-semibold text-foreground pt-4">
              Where Strategy Meets Heart
            </h2>

            <p>
              A significant amount of my lived experience comes from raising a
              beautiful neurodivergent child who is now a thriving young adult. That
              journey — along with years of professional training — shaped my
              deep commitment to supporting families with compassion, structure,
              and understanding.
            </p>

            <p>
              I bring a unique blend of high-level business strategy and
              a deeply personal understanding of family life. My background in
              frameworks, implementation, and navigating complexity allows me to
              curate resources and products with the same intentionality
              and clarity that drives successful organisations — only with a
              whole lot more warmth, patience, and heart.
            </p>

            <h2 className="font-display text-2xl font-semibold text-foreground pt-4">
              Certifications &amp; Training
            </h2>

            <p>
              Outside of my professional degrees and training, I hold
              certifications across a broad range of disciplines that
              inform the resources and products I create:
            </p>

            <ul className="mt-3 card-lifted rounded-[15px] px-6 py-5 space-y-2">
              <li className="flex items-start gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /><span className="font-body text-sm text-foreground leading-relaxed">Certified Life Coach</span></li>
              <li className="flex items-start gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /><span className="font-body text-sm text-foreground leading-relaxed">Certified Neuroscience Coach</span></li>
              <li className="flex items-start gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /><span className="font-body text-sm text-foreground leading-relaxed">Certified Positive Psychology Coach</span></li>
              <li className="flex items-start gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /><span className="font-body text-sm text-foreground leading-relaxed">Certified ADHD Coach</span></li>
              <li className="flex items-start gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /><span className="font-body text-sm text-foreground leading-relaxed">Certified Autism Coach</span></li>
              <li className="flex items-start gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /><span className="font-body text-sm text-foreground leading-relaxed">Certified Positive Parenting Coach</span></li>
            </ul>

            <h2 className="font-display text-2xl font-semibold text-foreground pt-4">
              Accreditation
            </h2>

            <p>My certifications are held and accredited with:</p>

            <ul className="mt-3 card-lifted rounded-[15px] px-6 py-5 space-y-2">
              <li className="flex items-start gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /><span className="font-body text-sm text-foreground leading-relaxed">International Practitioners of Holistic Medicine</span></li>
              <li className="flex items-start gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /><span className="font-body text-sm text-foreground leading-relaxed">Complementary Medicine Association</span></li>
              <li className="flex items-start gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /><span className="font-body text-sm text-foreground leading-relaxed">International Compliance Assurance for Holistic Practitioners</span></li>
            </ul>

            <h2 className="font-display text-2xl font-semibold text-foreground pt-4">
              What Drives This Work
            </h2>

            <p>
              Intentional parenting, to me, means creating supportive frameworks
              for emotional regulation, purposeful play, and understanding each
              child's uniqueness — then encouraging that to flow and flourish
              through different ways of living and learning.
            </p>

            <p>
              I'm currently authoring my first book, centred on understanding
              boundaries within intentional parenting — exploring how families
              can build structure that supports strong emotional regulation,
              emotional awareness, and frustration tolerance, while allowing
              every emotion to be felt and navigated safely.
            </p>

            <p>
              The goal is always the same — a wonderful, open, thriving family
              unit where children learn, develop, and thrive through the methods
              that work best for them.
            </p>

            <p className="font-medium text-foreground">
              Whether you're here for beautifully curated products, downloadable
              resources, enrichment activities, coaching support, or tools to
              support your intentional parenting journey — everything in this
              space has been thoughtfully selected to help you on your way. I'm
              so glad you're here.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              to="/coaching"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-[15px] font-body text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Explore Coaching <ArrowRight size={16} />
            </Link>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 border border-primary text-primary bg-transparent px-6 py-3 rounded-[15px] font-body text-sm font-medium hover:bg-primary/5 transition-colors"
            >
              Browse The Shop
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MeetTheFounder;
