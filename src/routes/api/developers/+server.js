import { SECRET_API_KEY } from '$env/static/private';

export const GET = ({ request }) => {
	const authHeader = request.headers.get('Authorisation');
	console.log(SECRET_API_KEY);
	if (authHeader !== 'Myauthheader') {
		return new Response(JSON.stringify({ message: 'invalid credentials' }), { status: 401 });
	}
	return new Response(JSON.stringify({ message: 'hello' }), { status: 200 });
};
