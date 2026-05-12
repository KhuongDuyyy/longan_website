import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonTone = "primary" | "secondary" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

const toneClass: Record<ButtonTone, string> = {
  primary: "bg-brand-green text-on-brand hover:bg-brand-green-hover border border-brand-green",
  secondary: "bg-surface text-brand-green hover:bg-brand-green hover:text-on-brand border-2 border-brand-green",
  ghost: "bg-clear text-text-main hover:text-brand-green border border-clear",
  danger: "bg-surface text-danger-red hover:bg-brand-cream border border-border-soft"
};

const sizeClass: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-8 py-3 text-sm"
};

type CommonProps = {
  tone?: ButtonTone;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
};

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;
type ButtonLinkProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function Button({ tone = "primary", size = "md", className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-60",
        toneClass[tone],
        sizeClass[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({ tone = "primary", size = "md", className, children, href, ...props }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors",
        toneClass[tone],
        sizeClass[size],
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
