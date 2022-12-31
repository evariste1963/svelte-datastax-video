//from youtube video: https://www.youtube.com/watch?v=qlmDj7q2x0c

import { SECRET_API_KEY } from '$env/static/private';

export const GET = async ({ request, url }) => {
	// const authHeader = request.headers.get('Authorisation');

	// if (authHeader !== 'Myauthheader') {
	// 	return new Response(JSON.stringify({ message: 'invalid credentials' }), { status: 401 });
	// }
	const limit = Number(url.searchParams.get('limit') ?? '10');
	const skip = Number(url.searchParams.get('skip') ?? '0');
	const res = await fetch(`https://dummyjson.com/posts?limit=${limit}&skip=${skip}`);
	const data = await res.json();
	return new Response(JSON.stringify(data), { status: 200 });
};

export const POST = async ({ request }) => {
	const authHeader = request.headers.get('Authorisation');
	const body = await request.json();

	if (authHeader !== 'Myauthheader') {
		return new Response(JSON.stringify({ message: 'invalid credentials' }), { status: 401 });
	}
	return new Response(JSON.stringify({ message: 'success', key: SECRET_API_KEY }), {
		status: 201
	});
};
