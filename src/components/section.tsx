import { cn } from "@/lib/utils";
import Reveal from "@/components/reveal";

export default function Section({
  id,
  title,
  subtitle,
  children,
  className,
}: {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("mx-auto max-w-6xl px-4 py-14", className)}>
      <Reveal>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              {title}
            </h2>
            {subtitle ? (
              <p className="mt-2 max-w-2xl text-sm text-white/65 md:text-base">
                {subtitle}
              </p>
            ) : null}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.05} className="mt-7">
        {children}
      </Reveal>
    </section>
  );
}
