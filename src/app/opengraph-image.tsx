import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          padding: 64,
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #070A12 0%, #0B1022 50%, #0A0720 100%)",
          color: "white",
          fontFamily: "Inter, system-ui",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 56, fontWeight: 700 }}>Emmanuel Agina</div>
          <div style={{ fontSize: 26, opacity: 0.8 }}>
            Frontend Developer • Next.js • UI Systems
          </div>
          <div
            style={{
              marginTop: 18,
              fontSize: 18,
              opacity: 0.75,
              maxWidth: 720,
              lineHeight: 1.35,
            }}
          >
            Premium UI. Clean UX. Collaboration-ready engineering.
          </div>
        </div>

        <div
          style={{
            width: 360,
            height: 360,
            borderRadius: 48,
            background:
              "radial-gradient(circle at top, rgba(59,130,246,0.55), rgba(168,85,247,0.25), transparent 70%)",
            filter: "blur(0px)",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}