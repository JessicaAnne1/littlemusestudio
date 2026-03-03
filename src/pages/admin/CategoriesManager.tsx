import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";

const slugify = (text: string) =>
  text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-").trim();

const CategoriesManager = () => {
  const [name, setName] = useState("");
  const queryClient = useQueryClient();

  const { data: categories, isLoading } = useQuery({
    queryKey: ["blog-categories"],
    queryFn: async () => {
      const { data, error } = await supabase.from("blog_categories").select("*").order("name");
      if (error) throw error;
      return data;
    },
  });

  const addMutation = useMutation({
    mutationFn: async () => {
      const { error } = await supabase
        .from("blog_categories")
        .insert({ name: name.trim(), slug: slugify(name) });
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blog-categories"] });
      setName("");
      toast.success("Category added");
    },
    onError: () => toast.error("Failed to add category"),
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("blog_categories").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blog-categories"] });
      toast.success("Category deleted");
    },
  });

  return (
    <div>
      <h1 className="font-display text-3xl font-semibold text-foreground mb-8">Categories</h1>

      <div className="flex gap-3 mb-8 max-w-md">
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="New category name"
          onKeyDown={(e) => { if (e.key === "Enter") addMutation.mutate(); }}
        />
        <Button onClick={() => addMutation.mutate()} disabled={!name.trim()} className="rounded-full">
          Add
        </Button>
      </div>

      {isLoading ? (
        <p className="font-body text-muted-foreground">Loading...</p>
      ) : (
        <div className="space-y-2 max-w-md">
          {categories?.map((cat) => (
            <div
              key={cat.id}
              className="flex items-center justify-between bg-card rounded-xl border border-border px-4 py-3"
            >
              <span className="font-body text-sm text-foreground">{cat.name}</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  if (confirm("Delete this category?")) deleteMutation.mutate(cat.id);
                }}
              >
                <Trash2 size={14} className="text-destructive" />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoriesManager;
