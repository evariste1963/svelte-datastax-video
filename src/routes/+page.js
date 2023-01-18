export async function load({ fetch }) {
	const res = await fetch('http://localhost:5173/api/developers');
	if (res.ok) {
		const data = await res.json();

		return data;
	}
}
