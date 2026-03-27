import { useState } from "react";

async function subscribeToKit(email: string, firstName?: string): Promise<void> {
  const body: Record<string, string> = { email };
  if (firstName) body.first_name = firstName;

  const response = await fetch("/api/subscribe", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data?.message ?? "Subscription failed. Please try again.");
  }
}

interface NewsletterSignupProps {
  compact?: boolean;
}

const NewsletterSignup = ({ compact = false }: NewsletterSignupProps) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      await subscribeToKit(email, compact ? undefined : firstName || undefined);
      setStatus("success");
      setEmail("");
      setFirstName("");
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <p className="font-body text-sm text-foreground">
        You're in! Check your inbox for a little something from us. ✨
      </p>
    );
  }

  if (compact) {
    return (
      <form onSubmit={handleSubmit} className="flex gap-2 w-full">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className="flex-1 min-w-0 bg-background border border-border rounded-full px-4 py-2 font-body text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-primary text-primary-foreground px-4 py-2 rounded-full font-body text-xs font-medium hover:opacity-90 transition-opacity disabled:opacity-60 whitespace-nowrap"
        >
          {status === "loading" ? "..." : "Subscribe"}
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First name"
          className="flex-1 bg-background border border-border rounded-full px-5 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        />
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className="flex-1 bg-background border border-border rounded-full px-5 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-body text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-60"
      >
        {status === "loading" ? "Subscribing..." : "Subscribe"}
      </button>
      {status === "error" && (
        <p className="font-body text-xs text-destructive text-center">{errorMessage}</p>
      )}
    </form>
  );
};

export default NewsletterSignup;
