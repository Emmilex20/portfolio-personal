import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((t) => (
        <Card
          key={t.name + t.title}
          className="rounded-3xl border-white/10 bg-white/5 p-6"
        >
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 border border-white/10 bg-white/5">
              <AvatarFallback className="bg-white/5 text-white/80">
                {t.initials}
              </AvatarFallback>
            </Avatar>

            <div>
              <div className="text-sm font-semibold">{t.name}</div>
              <div className="text-xs text-white/60">
                {t.title}
                {t.company ? ` • ${t.company}` : ""}
              </div>
            </div>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-white/75">
            “{t.quote}”
          </p>
        </Card>
      ))}
    </div>
  );
}
