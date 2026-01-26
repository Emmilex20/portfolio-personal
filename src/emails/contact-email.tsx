export function ContactEmail(props: {
  name: string;
  email: string;
  message: string;
}) {
  const { name, email, message } = props;

  return (
    <div style={{ fontFamily: "Inter, system-ui, Arial", lineHeight: 1.5 }}>
      <h2 style={{ margin: 0 }}>New Collaboration Message</h2>
      <p style={{ color: "#555" }}>
        Someone sent a message from your portfolio contact form.
      </p>

      <div
        style={{
          marginTop: 16,
          padding: 16,
          borderRadius: 12,
          border: "1px solid #eee",
          background: "#fafafa",
        }}
      >
        <p style={{ margin: 0 }}>
          <strong>Name:</strong> {name}
        </p>
        <p style={{ margin: "8px 0 0 0" }}>
          <strong>Email:</strong> {email}
        </p>
      </div>

      <div
        style={{
          marginTop: 16,
          padding: 16,
          borderRadius: 12,
          border: "1px solid #eee",
          background: "white",
        }}
      >
        <p style={{ margin: 0, whiteSpace: "pre-wrap" }}>{message}</p>
      </div>

      <p style={{ marginTop: 18, color: "#777", fontSize: 12 }}>
        Sent from your portfolio contact form.
      </p>
    </div>
  );
}