import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  speed?: "default" | "slow";
  edgeFade?: boolean;
  className?: string;
};

export function Marquee({
  children,
  speed = "default",
  edgeFade = true,
  className
}: Props) {
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        edgeFade && "[mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]",
        className
      )}
    >
      <div
        className={cn(
          "marquee-track",
          speed === "slow" ? "animate-marquee-slow" : "animate-marquee"
        )}
        aria-hidden="false"
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
