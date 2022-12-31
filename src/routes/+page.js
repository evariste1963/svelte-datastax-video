export async function load({ fetch }) {
	const res = await fetch('http://127.0.0.1:5173/api/developers');
	if (res.ok) {
		const data = await res.json();

		console.log('js data  ', data);
		return data;
	}
}
