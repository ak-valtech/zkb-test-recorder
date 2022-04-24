<script>
	import {fade} from 'svelte/transition';

	export let title = '';
	export let left = false;
</script>

{#if !!title}
	<div class={'container' + (left ? ' left' : ' right')} transition:fade>
		<div></div>
		<div>
			<div class="controls">
				<button on:click={() => left =! left}>{left ? '→' : '←'}</button>
				<span>{title}</span>
				<button on:click={() => title = ''}>X</button>
			</div>
			<slot></slot>
		</div>
	</div>
{/if}

<style>
	.hidden {
		display: none;
	}

	.container {
		background: white;
		height: 100vh;
		position: fixed;
		top: 0;
		width: 39.9rem;
	}

	.container.left {
		left: 0;
		border-right: 0.1rem black solid;
	}

	.container.right {
		right: 0;
		border-left: 0.1rem black solid;
	}

	.controls {
		align-items: center;
		background: lightgrey;
		border-bottom: 1px dashed grey;
		display: flex;
		height: 2rem;
		justify-content: space-between;
		padding: 0.25rem 1rem;
	}

	.controls > button {
		margin: 0;
	}

	.left > .controls {
		flex-direction: row-reverse;
	}
</style>