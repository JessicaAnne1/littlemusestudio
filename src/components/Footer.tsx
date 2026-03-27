import { Link } from "react-router-dom";

const KIT_FOOTER_FORM_HTML = `
<form action="https://app.kit.com/forms/9254149/subscriptions" class="seva-form formkit-form" method="post" data-sv-form="9254149" data-uid="d54a7dd261" data-format="inline" data-version="5">
  <div data-style="clean">
    <ul class="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
    <div data-element="fields" data-stacked="false" class="seva-fields formkit-fields">
      <div class="formkit-field">
        <input class="formkit-input" name="email_address" aria-label="Email Address" placeholder="Email Address" required type="email">
      </div>
      <button data-element="submit" class="formkit-submit formkit-submit">
        <div class="formkit-spinner"><div></div><div></div><div></div></div>
        <span>Subscribe</span>
      </button>
    </div>
  </div>
</form>
`;

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
              <Link to="/meet-the-founder" className="font-body text-sm text-foreground hover:text-primary transition-colors">Meet The Founder</Link>
              <Link to="/blog" className="font-body text-sm text-foreground hover:text-primary transition-colors">Journal</Link>
              <Link to="/coaching" className="font-body text-sm text-foreground hover:text-primary transition-colors">Coaching</Link>
              <Link to="/shop" className="font-body text-sm text-foreground hover:text-primary transition-colors">Shop</Link>
            </div>
          </div>

          <div>
            <h4 className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Connect
            </h4>
            <div className="flex flex-col gap-2">
              <a href="https://au.pinterest.com/littlemusestudio_au/" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-foreground hover:text-primary transition-colors">Pinterest</a>
              <a href="https://www.instagram.com/little.muse.studio.au/" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-foreground hover:text-primary transition-colors">Instagram</a>
            </div>
          </div>

          <div>
            <h4 className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Stay in the Loop
            </h4>
            <div dangerouslySetInnerHTML={{ __html: KIT_FOOTER_FORM_HTML }} />
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
