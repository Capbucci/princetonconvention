export async function POST(request) {
  try {
    const data = await request.json();

    const { name, phone, event, pax, date } = data;

    // send to n8n
    const n8nResponse = await fetch(
      "https://n8n.testpad99.com/webhook/princeton-lander",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          phone,
          event,
          pax,
          date,
          source: "Princeton Landing Page",
          timestamp: new Date().toISOString()
        })
      }
    );

    return Response.json({
      success: true,
      message: "Lead registered successfully",
      n8n_status: n8nResponse.ok
    });

  } catch (error) {
    return Response.json(
      {
        success: false,
        message: "Server error",
        error: error.message
      },
      { status: 500 }
    );
  }
}
