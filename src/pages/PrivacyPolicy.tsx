import Layout from "@/components/Layout";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <section className="container mx-auto px-6 py-16 max-w-2xl">
        <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-8">
          Privacy Policy
        </h1>

        <div className="font-body text-sm text-muted-foreground leading-relaxed space-y-5">
          <p className="text-xs uppercase tracking-widest text-primary">
            Last updated: {new Date().toLocaleDateString("en-AU", { month: "long", year: "numeric" })}
          </p>

          <h2 className="font-display text-lg font-semibold text-foreground pt-2">
            Who we are
          </h2>
          <p>
            Little Muse Studio ("we", "us", "our") operates the website littlemusestudio.com. 
            This page informs you of our policies regarding the collection, use, and disclosure 
            of personal information when you use our site.
          </p>

          <h2 className="font-display text-lg font-semibold text-foreground pt-2">
            Information we collect
          </h2>
          <p>
            We may collect personal information you voluntarily provide, such as your email address 
            when subscribing to our newsletter. We do not sell or share your personal information 
            with third parties for their marketing purposes.
          </p>

          <h2 className="font-display text-lg font-semibold text-foreground pt-2">
            Cookies &amp; analytics
          </h2>
          <p>
            Our site may use cookies and similar tracking technologies to improve your browsing 
            experience and analyse site traffic. You can control cookie settings through your 
            browser preferences.
          </p>

          <h2 className="font-display text-lg font-semibold text-foreground pt-2">
            Affiliate links
          </h2>
          <p>
            This site contains affiliate links to Amazon and other retailers. When you click these 
            links and make a purchase, we may earn a commission. Please see our{" "}
            <a href="/affiliate-disclosure" className="text-primary hover:underline underline-offset-4">
              Affiliate Disclosure
            </a>{" "}
            for full details.
          </p>

          <h2 className="font-display text-lg font-semibold text-foreground pt-2">
            Third-party services
          </h2>
          <p>
            We use third-party services such as Shopify for our online store and Amazon Associates 
            for affiliate links. These services have their own privacy policies governing how they 
            handle your data.
          </p>

          <h2 className="font-display text-lg font-semibold text-foreground pt-2">
            Your rights
          </h2>
          <p>
            Under the Australian Privacy Act 1988, you have the right to access, correct, or 
            delete personal information we hold about you. To exercise these rights, contact us 
            at hello@littlemusestudio.com.
          </p>

          <h2 className="font-display text-lg font-semibold text-foreground pt-2">
            Changes to this policy
          </h2>
          <p>
            We may update this privacy policy from time to time. Any changes will be posted on 
            this page with an updated revision date.
          </p>

          <h2 className="font-display text-lg font-semibold text-foreground pt-2">
            Contact
          </h2>
          <p>
            If you have questions about this privacy policy, please contact us at{" "}
            <a href="mailto:hello@littlemusestudio.com" className="text-primary hover:underline underline-offset-4">
              hello@littlemusestudio.com
            </a>.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
