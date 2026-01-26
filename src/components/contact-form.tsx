"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Schema = z.object({
  name: z.string().min(2, "Your name is too short."),
  email: z.string().email("Enter a valid email."),
  message: z.string().min(10, "Tell me a bit more about the project."),
});

type FormValues = z.infer<typeof Schema>;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(Schema),
    defaultValues: { name: "", email: "", message: "" },
  });

  async function onSubmit(values: FormValues) {
    try {
      setStatus("sending");
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        setStatus("error");
        return;
      }

      setStatus("sent");
      reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-white/80">
            Name
          </Label>
          <Input
            id="name"
            placeholder="Your name"
            className="border-white/10 bg-white/5 text-white placeholder:text-white/30"
            {...register("name")}
          />
          {errors.name ? (
            <p className="text-xs text-red-400">{errors.name.message}</p>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-white/80">
            Email
          </Label>
          <Input
            id="email"
            placeholder="your@email.com"
            className="border-white/10 bg-white/5 text-white placeholder:text-white/30"
            {...register("email")}
          />
          {errors.email ? (
            <p className="text-xs text-red-400">{errors.email.message}</p>
          ) : null}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-white/80">
          Message
        </Label>
        <Textarea
          id="message"
          placeholder="Tell me about the collaboration, timeline, and what you need..."
          className="min-h-35 border-white/10 bg-white/5 text-white placeholder:text-white/30"
          {...register("message")}
        />
        {errors.message ? (
          <p className="text-xs text-red-400">{errors.message.message}</p>
        ) : null}
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Button type="submit" disabled={status === "sending"} className="gap-2">
          {status === "sending" ? "Sending..." : "Send Message"}
        </Button>

        {status === "sent" ? (
          <span className="text-sm text-emerald-400">
            Message sent successfully ✅
          </span>
        ) : null}

        {status === "error" ? (
          <span className="text-sm text-red-400">
            Something went wrong. Try again.
          </span>
        ) : null}
      </div>
    </form>
  );
}