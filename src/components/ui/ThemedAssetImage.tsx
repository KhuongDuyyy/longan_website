import Image from "next/image";
import type { ReactElement, SVGProps } from "react";

type ThemedAssetImageProps = {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
};

type AssetSvgProps = SVGProps<SVGSVGElement> & {
  title?: string;
};

type AssetSvg = (props: AssetSvgProps) => ReactElement;

const color = (name: string) => `var(--color-${name})`;

function SvgTitle({ title }: { title?: string }) {
  return title ? <title>{title}</title> : null;
}

function FreshLonganSvg({ title, ...props }: AssetSvgProps) {
  return (
    <svg width="900" height="900" viewBox="0 0 900 900" fill="none" xmlns="http://www.w3.org/2000/svg" role={title ? "img" : undefined} aria-hidden={title ? undefined : true} preserveAspectRatio="xMidYMid slice" {...props}>
      <SvgTitle title={title} />
      <rect width="900" height="900" rx="48" fill={color("neutral-soft")} />
      <circle cx="680" cy="160" r="170" fill={color("brand-green-light")} />
      <circle cx="240" cy="720" r="230" fill={color("brand-cream")} />
      <path d="M245 277C352 172 550 168 657 281C733 362 734 500 657 579C548 692 352 690 244 579C168 501 169 352 245 277Z" fill={color("longan-stem")} />
      <ellipse cx="450" cy="420" rx="286" ry="216" fill={color("longan-shell")} />
      <g>
        <circle cx="326" cy="355" r="82" fill={color("longan-gold-dark")} />
        <circle cx="431" cy="318" r="88" fill={color("longan-gold")} />
        <circle cx="534" cy="369" r="83" fill={color("longan-gold-muted")} />
        <circle cx="291" cy="468" r="90" fill={color("longan-amber-light")} />
        <circle cx="420" cy="462" r="96" fill={color("longan-cream")} />
        <circle cx="563" cy="493" r="94" fill={color("longan-amber-soft")} />
        <circle cx="397" cy="594" r="85" fill={color("longan-amber")} />
        <circle cx="524" cy="604" r="82" fill={color("longan-honey")} />
      </g>
      <g opacity="0.55">
        <circle cx="302" cy="328" r="24" fill={color("brand-cream")} />
        <circle cx="404" cy="291" r="25" fill={color("brand-cream")} />
        <circle cx="259" cy="440" r="24" fill={color("brand-cream")} />
        <circle cx="390" cy="430" r="28" fill={color("brand-cream")} />
        <circle cx="538" cy="467" r="27" fill={color("brand-cream")} />
      </g>
      <path d="M388 215C429 142 504 106 604 108C593 187 532 247 431 265" stroke={color("brand-green-dark")} strokeWidth="26" strokeLinecap="round" />
      <path d="M475 151C520 95 590 74 677 88C662 154 610 203 535 220" fill={color("brand-green")} />
      <path d="M217 642C336 708 525 718 682 634" stroke={color("border-soft")} strokeWidth="28" strokeLinecap="round" />
    </svg>
  );
}

function LonganBunchSvg({ title, ...props }: AssetSvgProps) {
  return (
    <svg width="900" height="900" viewBox="0 0 900 900" fill="none" xmlns="http://www.w3.org/2000/svg" role={title ? "img" : undefined} aria-hidden={title ? undefined : true} preserveAspectRatio="xMidYMid slice" {...props}>
      <SvgTitle title={title} />
      <rect width="900" height="900" rx="48" fill={color("brand-cream")} />
      <path d="M448 104C435 258 359 342 248 417" stroke={color("brand-green-dark")} strokeWidth="24" strokeLinecap="round" />
      <path d="M442 106C468 269 553 354 685 438" stroke={color("brand-green-dark")} strokeWidth="22" strokeLinecap="round" />
      <path d="M425 139C368 83 289 67 194 98C217 171 281 221 378 227" fill={color("brand-green")} />
      <path d="M485 150C543 91 626 76 721 108C696 181 628 232 530 235" fill={color("brand-green")} />
      <g>
        <circle cx="305" cy="356" r="65" fill={color("longan-gold")} />
        <circle cx="400" cy="335" r="69" fill={color("longan-gold-deep")} />
        <circle cx="503" cy="359" r="67" fill={color("longan-cream")} />
        <circle cx="595" cy="410" r="65" fill={color("longan-gold-muted")} />
        <circle cx="242" cy="472" r="68" fill={color("longan-gold-soft")} />
        <circle cx="352" cy="483" r="72" fill={color("longan-gold-dark")} />
        <circle cx="462" cy="494" r="74" fill={color("longan-gold-light")} />
        <circle cx="572" cy="534" r="70" fill={color("longan-amber")} />
        <circle cx="310" cy="617" r="70" fill={color("longan-cream")} />
        <circle cx="430" cy="640" r="74" fill={color("longan-gold")} />
        <circle cx="553" cy="661" r="70" fill={color("longan-amber-light")} />
      </g>
      <g opacity="0.5">
        <circle cx="284" cy="332" r="18" fill={color("brand-cream")} />
        <circle cx="382" cy="310" r="18" fill={color("brand-cream")} />
        <circle cx="219" cy="446" r="18" fill={color("brand-cream")} />
        <circle cx="436" cy="465" r="20" fill={color("brand-cream")} />
        <circle cx="284" cy="589" r="18" fill={color("brand-cream")} />
      </g>
    </svg>
  );
}

function DriedLonganSvg({ title, ...props }: AssetSvgProps) {
  return (
    <svg width="900" height="900" viewBox="0 0 900 900" fill="none" xmlns="http://www.w3.org/2000/svg" role={title ? "img" : undefined} aria-hidden={title ? undefined : true} preserveAspectRatio="xMidYMid slice" {...props}>
      <SvgTitle title={title} />
      <rect width="900" height="900" rx="48" fill={color("neutral-soft")} />
      <rect x="265" y="132" width="370" height="626" rx="48" fill={color("brand-green")} />
      <path d="M314 244C314 222 332 204 354 204H546C568 204 586 222 586 244V650C586 672 568 690 546 690H354C332 690 314 672 314 650V244Z" fill={color("brand-cream")} />
      <rect x="358" y="282" width="184" height="74" rx="24" fill={color("brand-green-dark")} />
      <text x="450" y="329" fontFamily="Arial, sans-serif" fontSize="38" fontWeight="700" fill={color("surface")} textAnchor="middle">
        Nhãn sấy
      </text>
      <circle cx="402" cy="466" r="56" fill={color("dried-longan")} />
      <circle cx="496" cy="472" r="59" fill={color("dried-longan-light")} />
      <circle cx="447" cy="546" r="58" fill={color("dried-longan-dark")} />
      <path d="M352 623H548" stroke={color("brand-yellow")} strokeWidth="22" strokeLinecap="round" />
      <path d="M362 172H538" stroke={color("brand-green-light")} strokeWidth="18" strokeLinecap="round" />
    </svg>
  );
}

function DriedBowlSvg({ title, ...props }: AssetSvgProps) {
  return (
    <svg width="900" height="900" viewBox="0 0 900 900" fill="none" xmlns="http://www.w3.org/2000/svg" role={title ? "img" : undefined} aria-hidden={title ? undefined : true} preserveAspectRatio="xMidYMid slice" {...props}>
      <SvgTitle title={title} />
      <rect width="900" height="900" rx="48" fill={color("brand-cream")} />
      <circle cx="450" cy="405" r="234" fill={color("brand-green-light")} />
      <path d="M199 494C220 654 313 753 451 753C588 753 682 654 703 494H199Z" fill={color("surface")} stroke={color("border-soft")} strokeWidth="24" />
      <ellipse cx="451" cy="493" rx="254" ry="94" fill={color("brand-yellow")} />
      <g>
        <circle cx="320" cy="424" r="54" fill={color("dried-longan-deep")} />
        <circle cx="414" cy="381" r="58" fill={color("dried-longan-warm")} />
        <circle cx="520" cy="409" r="55" fill={color("dried-longan-muted")} />
        <circle cx="588" cy="476" r="54" fill={color("dried-longan-light")} />
        <circle cx="383" cy="493" r="57" fill={color("dried-longan-soft")} />
        <circle cx="489" cy="511" r="61" fill={color("dried-longan-rich")} />
      </g>
      <path d="M286 698C376 731 524 731 615 699" stroke={color("border-soft")} strokeWidth="22" strokeLinecap="round" />
    </svg>
  );
}

function GiftComboSvg({ title, ...props }: AssetSvgProps) {
  return (
    <svg width="900" height="900" viewBox="0 0 900 900" fill="none" xmlns="http://www.w3.org/2000/svg" role={title ? "img" : undefined} aria-hidden={title ? undefined : true} preserveAspectRatio="xMidYMid slice" {...props}>
      <SvgTitle title={title} />
      <rect width="900" height="900" rx="48" fill={color("neutral-soft")} />
      <circle cx="229" cy="214" r="139" fill={color("brand-green-light")} />
      <circle cx="690" cy="677" r="171" fill={color("brand-cream")} />
      <rect x="226" y="319" width="448" height="310" rx="34" fill={color("surface")} stroke={color("border-soft")} strokeWidth="18" />
      <rect x="226" y="319" width="448" height="82" rx="34" fill={color("brand-green")} />
      <rect x="413" y="319" width="74" height="310" fill={color("brand-yellow")} />
      <rect x="286" y="459" width="108" height="112" rx="22" fill={color("longan-gold")} />
      <rect x="507" y="459" width="106" height="112" rx="22" fill={color("dried-longan")} />
      <circle cx="340" cy="515" r="34" fill={color("longan-cream")} />
      <circle cx="560" cy="515" r="34" fill={color("dried-longan-light")} />
      <path d="M451 319C401 261 351 253 318 289C366 303 405 322 451 359C496 322 535 303 582 289C550 253 500 261 451 319Z" fill={color("brand-yellow")} />
      <path d="M282 676H618" stroke={color("brand-green-dark")} strokeWidth="24" strokeLinecap="round" />
    </svg>
  );
}

function FarmStorySvg({ title, ...props }: AssetSvgProps) {
  return (
    <svg width="1200" height="800" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg" role={title ? "img" : undefined} aria-hidden={title ? undefined : true} preserveAspectRatio="xMidYMid slice" {...props}>
      <SvgTitle title={title} />
      <rect width="1200" height="800" rx="40" fill={color("brand-green-light")} />
      <path d="M0 575C150 510 317 507 500 573C712 649 950 648 1200 558V800H0V575Z" fill={color("brand-green")} />
      <path d="M0 620C173 562 337 565 492 626C704 708 940 702 1200 612V800H0V620Z" fill={color("brand-green-dark")} />
      <circle cx="944" cy="152" r="68" fill={color("brand-yellow")} />
      <g stroke={color("brand-green-dark")} strokeWidth="20" strokeLinecap="round">
        <path d="M256 545V333" />
        <path d="M399 560V300" />
        <path d="M548 548V344" />
        <path d="M696 558V314" />
        <path d="M836 543V350" />
      </g>
      <g fill={color("longan-cream")}>
        <circle cx="257" cy="300" r="82" />
        <circle cx="400" cy="264" r="92" />
        <circle cx="548" cy="311" r="84" />
        <circle cx="697" cy="281" r="88" />
        <circle cx="836" cy="318" r="78" />
      </g>
    </svg>
  );
}

function FarmGallerySvg({ title, ...props }: AssetSvgProps) {
  return (
    <svg width="900" height="650" viewBox="0 0 900 650" fill="none" xmlns="http://www.w3.org/2000/svg" role={title ? "img" : undefined} aria-hidden={title ? undefined : true} preserveAspectRatio="xMidYMid slice" {...props}>
      <SvgTitle title={title} />
      <rect width="900" height="650" rx="36" fill={color("brand-cream")} />
      <path d="M0 431C123 379 265 376 416 438C589 508 739 497 900 430V650H0V431Z" fill={color("brand-green-light")} />
      <path d="M0 490C126 446 264 450 420 508C589 571 746 560 900 496V650H0V490Z" fill={color("brand-green")} />
      <circle cx="726" cy="124" r="56" fill={color("brand-yellow")} />
      <rect x="179" y="262" width="540" height="222" rx="34" fill={color("surface")} stroke={color("border-soft")} strokeWidth="18" />
      <circle cx="334" cy="362" r="56" fill={color("longan-gold")} />
      <circle cx="447" cy="352" r="58" fill={color("longan-cream")} />
      <circle cx="563" cy="371" r="56" fill={color("longan-gold-dark")} />
    </svg>
  );
}

const assetMap: Record<string, AssetSvg> = {
  "/assets/fresh-longan.svg": FreshLonganSvg,
  "/assets/longan-bunch.svg": LonganBunchSvg,
  "/assets/dried-longan.svg": DriedLonganSvg,
  "/assets/dried-bowl.svg": DriedBowlSvg,
  "/assets/gift-combo.svg": GiftComboSvg,
  "/assets/farm-story.svg": FarmStorySvg,
  "/assets/farm-gallery.svg": FarmGallerySvg
};

export function ThemedAssetImage({ src, alt, className, width = 900, height = 900, priority, sizes }: ThemedAssetImageProps) {
  const Asset = assetMap[src];

  if (Asset) {
    return <Asset title={alt} className={className} />;
  }

  return <Image src={src} alt={alt} width={width} height={height} priority={priority} sizes={sizes} className={className} />;
}
