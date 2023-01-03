import { SECRET_API_KEY } from '$env/static/private';

export const GET = ({ request }) => {
	//const authHeader = request.headers.get('Authorisation');

	// if (authHeader !== 'Myauthheader') {
	// 	return new Response(JSON.stringify({ message: 'invalid credentials' }), { status: 401 });
	// }
	return new Response(
		JSON.stringify({
			body: [
				{
					id: 1,
					name: 'evariste galois',
					bio: 'founder of this.me',
					url: 'https://github.com/evariste1963'
				},
				{
					id: 2,
					name: 'Reuben',
					bio: 'developer at this.me',
					url: 'https://github.com/evariste1963'
				}
			]
		}),
		{ status: 200 }
	);
};
