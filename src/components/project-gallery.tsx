import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function ProjectGallery({
  images,
}: {
  images: Array<{ src: string; alt: string }>;
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((img) => (
        <Card
          key={img.src}
          className="overflow-hidden rounded-3xl border-white/10 bg-white/5"
        >
          <div className="relative aspect-4/3 w-full">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={false}
            />
          </div>
          <div className="p-4">
            <p className="text-sm text-white/70">{img.alt}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}
