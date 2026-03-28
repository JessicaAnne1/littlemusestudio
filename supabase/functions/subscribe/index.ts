import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const KIT_FORM_ID = "9253979";

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ message: "Method Not Allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  let email: string | undefined;
  let firstName: string | undefined;

  try {
    const body = await req.json();
    email = body.email;
    firstName = body.first_name;
  } catch {
    return new Response(
      JSON.stringify({ message: "Invalid JSON body." }),
      { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  if (!email) {
    return new Response(
      JSON.stringify({ message: "Email is required." }),
      { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  const apiSecret = Deno.env.get("KIT_API_SECRET");
  if (!apiSecret) {
    return new Response(
      JSON.stringify({ message: "Server misconfiguration: missing API secret." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  const kitBody: Record<string, string> = { email, api_secret: apiSecret };
  if (firstName) kitBody.first_name = firstName;

  const kitResponse = await fetch(
    `https://api.convertkit.com/v3/forms/${KIT_FORM_ID}/subscribe`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(kitBody),
    }
  );

  const kitData = await kitResponse.json().catch(() => ({}));

  if (!kitResponse.ok) {
    console.error("[Kit] subscription failed:", kitResponse.status, JSON.stringify(kitData));
  }

  return new Response(JSON.stringify(kitData), {
    status: kitResponse.status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
});
