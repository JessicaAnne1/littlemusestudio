import Layout from "@/components/Layout";
import { ShoppingBag } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Wooden Rainbow Stacker",
    price: "$34.00",
    category: "Montessori",
    color: "bg-eucalyptus-light",
  },
  {
    id: 2,
    name: "Silicone Teething Ring",
    price: "$12.00",
    category: "Baby Essentials",
    color: "bg-secondary",
  },
  {
    id: 3,
    name: "Sensory Fabric Squares Set",
    price: "$28.00",
    category: "Sensory Play",
    color: "bg-accent",
  },
  {
    id: 4,
    name: "Natural Wooden Rattle",
    price: "$18.00",
    category: "Baby Essentials",
    color: "bg-sand",
  },
  {
    id: 5,
    name: "Stacking Cups — Earth Tones",
    price: "$22.00",
    category: "Montessori",
    color: "bg-secondary",
  },
  {
    id: 6,
    name: "Organic Cotton Play Mat",
    price: "$65.00",
    category: "Sensory Play",
    color: "bg-eucalyptus-light",
  },
  {
    id: 7,
    name: "Treasure Basket Starter Set",
    price: "$42.00",
    category: "Sensory Play",
    color: "bg-accent",
  },
  {
    id: 8,
    name: "Wooden Shape Sorter",
    price: "$38.00",
    category: "Montessori",
    color: "bg-sand",
  },
];

const Shop = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="container mx-auto px-6 pt-16 pb-10 text-center">
        <p className="font-body text-xs uppercase tracking-[0.25em] text-primary mb-3">
          The Studio Edit
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
          Shop
        </h1>
        <p className="font-body text-base text-muted-foreground max-w-md mx-auto">
          Every piece is hand-picked for safety, beauty, and developmental value. 
          Designed for babies &amp; under-fives.
        </p>
      </section>

      {/* Product grid */}
      <section className="container mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <div
              key={product.id}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className={`${product.color} h-56 flex items-center justify-center relative`}>
                <span className="font-display text-7xl text-foreground/8 select-none group-hover:scale-110 transition-transform duration-500">
                  ✦
                </span>
                <button
                  className="absolute bottom-3 right-3 bg-background/80 backdrop-blur-sm border border-border rounded-full p-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                  aria-label={`Add ${product.name} to bag`}
                >
                  <ShoppingBag size={16} />
                </button>
              </div>
              <div className="p-5">
                <span className="font-body text-[10px] uppercase tracking-widest text-primary font-medium">
                  {product.category}
                </span>
                <h3 className="font-display text-base font-semibold text-foreground mt-1 mb-1 leading-snug">
                  {product.name}
                </h3>
                <p className="font-body text-sm text-muted-foreground">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Shop;
