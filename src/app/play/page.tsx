export const metadata = {
  title: "29Black - Redirecting...",
  other: {
    "http-equiv": "refresh",
  },
};

export default function PlayPage() {
  const target = "https://m-traff.net/ultimate-2025";

  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content={`0;url=${target}`} />
      </head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.location.replace("${target}");`,
          }}
        />
        <p style={{ color: "white", textAlign: "center", marginTop: "2rem" }}>
          Redirecting...
        </p>
      </body>
    </html>
  );
}
