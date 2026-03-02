import Layout from "@/components/Layout";

const AffiliateDisclosure = () => {
  return (
    <Layout>
      <section className="container mx-auto px-6 py-16 max-w-2xl">
        <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-8">
          Affiliate Disclosure
        </h1>

        <div className="font-body text-sm text-muted-foreground leading-relaxed space-y-5">
          <p>
            Little Muse Studio is a participant in the Amazon Services LLC Associates Program 
            (and the Amazon Associates Program applicable in Australia), affiliate advertising 
            programs designed to provide a means for sites to earn advertising fees by advertising 
            and linking to Amazon.com.au and affiliated sites.
          </p>

          <p>
            <strong className="text-foreground">As an Amazon Associate I earn from qualifying purchases.</strong>
          </p>

          <p>
            This means that when you click on certain product links on this site and make a 
            purchase, Little Muse Studio may receive a small commission at no additional cost to you. 
            We only recommend products we genuinely believe in and that align with our values of 
            intentional, safe, and beautiful play for little ones.
          </p>

          <p>
            Affiliate links on this site are clearly identified with an "Affiliate link" badge 
            or similar labelling so you always know when a link is an affiliate link.
          </p>

          <p>
            Product prices and availability are sourced from Amazon at the time of linking and are 
            subject to change. We do our best to keep information current, but please verify details 
            on Amazon before purchasing.
          </p>

          <p>
            Your support through these links helps us continue curating quality content and 
            products — thank you!
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default AffiliateDisclosure;
