export const load = ({ params, fetch }) => {
	const fetchPost = async (id) => {
		const res = await fetch(`/api/hunterbyte/${id}`);
		const data = await res.json();
		return data;
	};

	return {
		post: fetchPost(params.postId)
	};
};
