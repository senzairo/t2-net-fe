// app/api/splynx/customers/route.js
export async function GET() {
  try {
    const res = await fetch(`${process.env.SPLYNX_URL}/api/2.0/admin/customers/customers`, {
      headers: {
        Authorization: `Basic ${Buffer.from(process.env.SPLYNX_API_KEY + ':' + process.env.SPLYNX_API_SECRET).toString('base64')}`,
      },
    });

    if (!res.ok) {
      return new Response(JSON.stringify({ error: "Failed to fetch data from Splynx" }), { status: res.status });
    }

    const data = await res.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
