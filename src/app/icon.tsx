import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          background: "#3A2D2D",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 0,
        }}
      >
        {/* Gold top bar */}
        <div
          style={{
            width: 18,
            height: 2,
            background: "#C9A15D",
            borderRadius: 1,
            marginBottom: 3,
          }}
        />
        {/* C monogram */}
        <div
          style={{
            fontFamily: "Georgia, serif",
            fontSize: 16,
            fontWeight: 700,
            color: "#C9A15D",
            lineHeight: 1,
            letterSpacing: "0.04em",
          }}
        >
          C
        </div>
      </div>
    ),
    { ...size }
  );
}
