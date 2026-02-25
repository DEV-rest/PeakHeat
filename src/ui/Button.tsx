import React from "react";

type Intent = "primary" | "secondary";

interface ButtonProps {
  href?: string;
  intent?: Intent;
  className?: string;
  children?: React.ReactNode;
}

function classNames(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export default function Button({ href, intent = "primary", className, children }: ButtonProps) {
  const base = "inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition";
  const intents: Record<Intent, string> = {
    primary: "bg-yellow-500 text-black-600 hover:bg-red-600 hover:text-yellow-500",
    secondary: "border border-white/20 bg-white/5 text-white hover:bg-white/10",
  };

  const cls = classNames(base, intents[intent], className);

  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={cls}>
      {children}
    </button>
  );
}
