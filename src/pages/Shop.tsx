import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ShoppingBag, Loader2 } from "lucide-react";
import { storefrontApiRequest, STOREFRONT_PRODUCTS_QUERY, type ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

const Shop = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const addItem = useCartStore(state => state.addItem);
  const isLoading = useCartStore(state => state.isLoading);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await storefrontApiRequest(STOREFRONT_PRODUCTS_QUERY, { first: 20 });
        if (data?.data?.products?.edges) {
          setProducts(data.data.products.edges);
        }
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = async (product: ShopifyProduct, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const variant = product.node.variants.edges[0]?.node;
    if (!variant) return;

    await addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || [],
    });
    toast.success("Added to bag", { description: product.node.title, position: "top-center" });
  };

  return (
    <Layout>
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

      <section className="container mx-auto px-6 pb-20">
        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-20">
            <ShoppingBag className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="font-display text-xl text-foreground mb-2">No products yet</p>
            <p className="font-body text-muted-foreground">Products are coming soon — check back shortly!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, i) => {
              const image = product.node.images.edges[0]?.node;
              const price = product.node.priceRange.minVariantPrice;

              return (
                <Link
                  to={`/product/${product.node.handle}`}
                  key={product.node.id}
                  className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow duration-300 animate-fade-in"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <div className="aspect-square flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: '#FAF7F2' }}>
                    {image ? (
                      <img
                        src={image.url}
                        alt={image.altText || product.node.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <span className="font-display text-7xl text-foreground/8 select-none">✦</span>
                    )}
                    <button
                      onClick={(e) => handleAddToCart(product, e)}
                      disabled={isLoading}
                      className="absolute bottom-3 right-3 bg-background/80 backdrop-blur-sm border border-border rounded-full p-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                      aria-label={`Add ${product.node.title} to bag`}
                    >
                      {isLoading ? <Loader2 size={16} className="animate-spin" /> : <ShoppingBag size={16} />}
                    </button>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-base font-semibold text-foreground mt-1 mb-1 leading-snug">
                      {product.node.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground">
                      {price.currencyCode} {parseFloat(price.amount).toFixed(2)}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Shop;
