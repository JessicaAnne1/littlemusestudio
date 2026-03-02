import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">
              Little Muse Studio
            </h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-xs">
              Curated sensory play &amp; Montessori-inspired products for little ones. 
              Intentional, beautiful, and made for curious minds.
            </p>
          </div>

          <div>
            <h4 className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Explore
            </h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="font-body text-sm text-foreground hover:text-primary transition-colors">Home</Link>
              <Link to="/blog" className="font-body text-sm text-foreground hover:text-primary transition-colors">Blog</Link>
              <Link to="/shop" className="font-body text-sm text-foreground hover:text-primary transition-colors">Shop</Link>
            </div>
          </div>

          <div>
            <h4 className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Connect
            </h4>
            <div className="flex flex-col gap-2">
              <a href="#" className="font-body text-sm text-foreground hover:text-primary transition-colors">Pinterest</a>
              <a href="#" className="font-body text-sm text-foreground hover:text-primary transition-colors">Instagram</a>
              <a href="mailto:hello@littlemusestudio.com" className="font-body text-sm text-foreground hover:text-primary transition-colors">hello@littlemusestudio.com</a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-body text-xs text-muted-foreground">
              © {new Date().getFullYear()} Little Muse Studio. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link to="/privacy-policy" className="font-body text-xs text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/affiliate-disclosure" className="font-body text-xs text-muted-foreground hover:text-primary transition-colors">
                Affiliate Disclosure
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
