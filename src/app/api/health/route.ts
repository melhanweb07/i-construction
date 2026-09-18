export async function GET() {
  // Database health checks are disabled while the frontend is hosted without a backend.
  return Response.json({ ok: true, database: "disabled" });
}
