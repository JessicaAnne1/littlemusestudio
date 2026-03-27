import type { Handler } from "@netlify/functions";

const KIT_FORM_ID = "9253979";

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  let email: string | undefined;
  let firstName: string | undefined;

  try {
    const body = JSON.parse(event.body ?? "{}");
    email = body.email;
    firstName = body.first_name;
  } catch {
    return { statusCode: 400, body: JSON.stringify({ message: "Invalid JSON body." }) };
  }

  if (!email) {
    return { statusCode: 400, body: JSON.stringify({ message: "Email is required." }) };
  }

  const apiKey = process.env.VITE_KIT_API_KEY;
  if (!apiKey) {
    return { statusCode: 500, body: JSON.stringify({ message: "Server misconfiguration: missing API key." }) };
  }

  const kitBody: Record<string, string> = { email, api_key: apiKey };
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
    console.error("[Kit] subscription failed — status:", kitResponse.status, "body:", JSON.stringify(kitData));
  }

  return {
    statusCode: kitResponse.status,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(kitData),
  };
};
