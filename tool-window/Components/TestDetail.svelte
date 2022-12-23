<script>
	export let test

	let executingStep
</script>

<div>
	<div class="header">
		<button>Play</button>
		<h4>{test.name}</h4>
	</div>

	<ol>
		{#each test.steps as step}
			<li>
				<h5>{step.type}</h5>
				{#if step.url}<a href={step.url}>{step.url}</a> {/if}
				{#if step.selector}<span>{step.selector}</span> {/if}
				{#if step.elementIndex}<span>({step.elementIndex})</span> {/if}
			</li>
		{/each}
	</ol>
</div>

<style>
	.header {
		display: flex;
		justify-content: space-around;
	}

	ul {
		list-style: none;
		padding: 0;
	}

	li {
		padding: 0.25rem;
	}

	li:nth-child(2n+1) {
		background: lightgrey;
	}

	li.succes {
		background: lightgreen;
	}

	li.error {
		background: lightcoral;
	}

	li.executing {
		background: yellow;
	}

	h4, h5 {
		margin: 0;
		padding: 0;
	}

	h5 {
		font-variant: all-small-caps;
	}

	a, span {
		font-size: x-small;
	}
</style>
