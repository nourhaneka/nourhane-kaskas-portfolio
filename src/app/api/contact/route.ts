import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const {
            name,
            email,
            selectedServices,
            projectDescription,
            timeline,
            sentAt,
        } = body;

        const { data, error } = await resend.emails.send({

            from: "Portfolio <onboarding@resend.dev>",
            to: ["nourhanemkaskas@gmail.com"],
            subject: "New Project Inquiry",
            html: `
        <h2>New Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Services:</strong> ${selectedServices.join(", ")}</p>
        <p><strong>Timeline:</strong> ${timeline}</p>
        <p><strong>Description:</strong></p>
        <p>${projectDescription}</p>
        <p><strong>Sent At:</strong> ${sentAt.time} (${sentAt.timezone})</p>
      `,

        });

        if (error) {
            console.error("Resend error:", error);
            return new Response(JSON.stringify({ error }), { status: 500 });
        }

        return new Response(JSON.stringify({ success: true, data }), {
            status: 200,
        });
    } catch (err) {
        console.error("Server error:", err);
        return new Response(JSON.stringify({ error: "Server error" }), {
            status: 500,
        });
    }
}