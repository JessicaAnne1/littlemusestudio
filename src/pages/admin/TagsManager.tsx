import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";

const slugify = (text: string) =>
  text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-").trim();

const TagsManager = () => {
  const [name, setName] = useState("");
  const queryClient = useQueryClient();

  const { data: tags, isLoading } = useQuery({
    queryKey: ["blog-tags"],
    queryFn: async () => {
      const { data, error } = await supabase.from("blog_tags").select("*").order("name");
      if (error) throw error;
      return data;
    },
  });

  const addMutation = useMutation({
    mutationFn: async () => {
      const { error } = await supabase
        .from("blog_tags")
        .insert({ name: name.trim(), slug: slugify(name) });
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blog-tags"] });
      setName("");
      toast.success("Tag added");
    },
    onError: () => toast.error("Failed to add tag"),
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("blog_tags").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blog-tags"] });
      toast.success("Tag deleted");
    },
  });

  return (
    <div>
      <h1 className="font-display text-3xl font-semibold text-foreground mb-8">Tags</h1>

      <div className="flex gap-3 mb-8 max-w-md">
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="New tag name"
          onKeyDown={(e) => { if (e.key === "Enter") addMutation.mutate(); }}
        />
        <Button onClick={() => addMutation.mutate()} disabled={!name.trim()} className="rounded-full">
          Add
        </Button>
      </div>

      {isLoading ? (
        <p className="font-body text-muted-foreground">Loading...</p>
      ) : (
        <div className="flex flex-wrap gap-2 max-w-lg">
          {tags?.map((tag) => (
            <div
              key={tag.id}
              className="flex items-center gap-2 bg-card rounded-full border border-border px-3 py-1.5"
            >
              <span className="font-body text-sm text-foreground">{tag.name}</span>
              <button
                onClick={() => {
                  if (confirm("Delete this tag?")) deleteMutation.mutate(tag.id);
                }}
                className="text-muted-foreground hover:text-destructive transition-colors"
              >
                <Trash2 size={12} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TagsManager;
