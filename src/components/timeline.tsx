import { Card } from "@/components/ui/card";
import { timeline } from "@/data/timeline";

export default function Timeline() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {timeline.map((item) => (
        <Card
          key={item.year + item.title}
          className="rounded-3xl border-white/10 bg-white/5 p-6"
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="text-sm font-semibold">{item.title}</div>
              <div className="mt-1 text-sm text-white/65">{item.subtitle}</div>
            </div>

            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              {item.year}
            </span>
          </div>

          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {item.details.map((d) => (
              <li key={d} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-400/80" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  );
}
