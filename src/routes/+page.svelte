<script>
	export let data;
	console.log(data);
	const { body } = data;
</script>

<h1>Welcome to this.me</h1>

<ul>
	{#each body as { name, bio, avartar, url }}
		<li>
			<p>name: {name}</p>
			<p>bio: {bio}</p>
			<p>webpage: {url}</p>
		</li>
	{/each}
</ul>
