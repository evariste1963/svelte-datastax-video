<script>
	export let data;
</script>

<div>
	{#each data.posts as posts}
		<h1>{posts.title}</h1>
		<p>{posts.body}</p>
	{/each}
</div>
