import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const MeetTheFounder = () => {
  return (
    <Layout>
      <section className="container mx-auto px-6 pt-16 pb-10 text-center">
        <p className="font-body text-xs uppercase tracking-[0.25em] text-primary mb-3">
          The Heart Behind The Studio
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
          Meet The Founder
        </h1>
      </section>

      <section className="container mx-auto px-6 pb-20">
        <div className="max-w-3xl mx-auto">
          {/* Placeholder for founder image */}
          <div className="bg-secondary rounded-2xl h-80 flex items-center justify-center mb-10">
            <span className="font-display text-6xl text-foreground/10 select-none">✦</span>
          </div>

          <div className="space-y-6 font-body text-base text-muted-foreground leading-relaxed">
            <p>
              Welcome to Little Muse Studio — a space born from the belief that the 
              earliest years of childhood are worthy of beauty, intention, and care.
            </p>
            <p>
              As a mother, author, and family coach, I created this studio to bring 
              together everything I'm passionate about: purposeful play, thoughtful 
              resources, and the kind of gentle guidance that helps families thrive 
              — not just survive.
            </p>
            <p>
              Whether you're here for our curated play essentials, looking for 
              coaching support around family planning and routines, or simply 
              seeking inspiration for a slower, more intentional family life — 
              you're in the right place.
            </p>
            <p className="font-medium text-foreground">
              More coming soon — including coaching resources, my book, and guided 
              programmes designed to help families build strong foundations.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-body text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Explore The Shop <ArrowRight size={16} />
            </Link>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 bg-card text-foreground px-6 py-3 rounded-full font-body text-sm font-medium border border-border hover:bg-muted transition-colors"
            >
              Read The Journal
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MeetTheFounder;
