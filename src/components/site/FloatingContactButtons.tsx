import { MessageCircle, Phone } from "lucide-react";

const buttons = [
  { label: "Gọi hotline", href: "tel:0866918366", icon: Phone },
  { label: "Chat Zalo", href: "https://zalo.me", icon: MessageCircle },
  { label: "Messenger", href: "https://facebook.com", icon: MessageCircle }
];

export function FloatingContactButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-30 grid gap-3" aria-label="Liên hệ nhanh">
      {buttons.map((button) => {
        const Icon = button.icon;

        return (
          <a
            key={button.label}
            href={button.href}
            className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-brand-green text-on-brand shadow-lg transition hover:bg-brand-green-hover"
            aria-label={button.label}
          >
            <Icon size={20} aria-hidden />
            <span className="pointer-events-none absolute right-14 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full bg-text-main px-3 py-1 text-xs text-on-brand group-hover:block">
              {button.label}
            </span>
          </a>
        );
      })}
    </div>
  );
}
