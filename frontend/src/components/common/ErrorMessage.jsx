export default function ErrorMessage({ error }) {
  return <p className="status error">Something went wrong: {error?.message ?? "unknown error"}</p>;
}
