import dbConnect from "@/lib/dbConnect";
import ContactForm from "@/models/ContactForm";

export async function POST(request) {
  await dbConnect();

  const body = await request.json();

  if (!body.name || !body.email || !body.message) {
    return new Response(
      JSON.stringify({ success: false, error: "Invalid data" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  const submitFormData = await ContactForm.create({
    name: body.name,
    email: body.email,
    message: body.message,
  });

  return new Response(JSON.stringify({ success: true, data: submitFormData }), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
