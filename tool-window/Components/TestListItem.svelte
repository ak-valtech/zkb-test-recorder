<script>
	export let test
</script>

<div class="root">
	<h4>{test.name}</h4>
</div>

<style>
	.root {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.25rem 2rem;
	}

	h4 {
		margin: 0;
		padding: 0;
	}
</style>
