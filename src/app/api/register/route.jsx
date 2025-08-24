import registerUser from "@/app/actions/auth/registerUser";


export async function POST(req) {
  try {
    const payload = await req.json(); 
    const result = await registerUser(payload);
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
