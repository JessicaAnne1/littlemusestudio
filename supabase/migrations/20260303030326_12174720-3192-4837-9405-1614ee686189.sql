
-- Fix overly permissive policies on blog_categories
DROP POLICY "Authenticated users can manage categories" ON public.blog_categories;

CREATE POLICY "Authenticated users can insert categories"
  ON public.blog_categories FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update categories"
  ON public.blog_categories FOR UPDATE
  TO authenticated
  USING (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can delete categories"
  ON public.blog_categories FOR DELETE
  TO authenticated
  USING (auth.uid() IS NOT NULL);

-- Fix overly permissive policies on blog_tags
DROP POLICY "Authenticated users can manage tags" ON public.blog_tags;

CREATE POLICY "Authenticated users can insert tags"
  ON public.blog_tags FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update tags"
  ON public.blog_tags FOR UPDATE
  TO authenticated
  USING (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can delete tags"
  ON public.blog_tags FOR DELETE
  TO authenticated
  USING (auth.uid() IS NOT NULL);

-- Fix overly permissive policies on blog_post_tags
DROP POLICY "Authenticated users can manage post tags" ON public.blog_post_tags;

CREATE POLICY "Authenticated users can insert post tags"
  ON public.blog_post_tags FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete post tags"
  ON public.blog_post_tags FOR DELETE
  TO authenticated
  USING (auth.uid() IS NOT NULL);
