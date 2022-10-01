<script>
	import {state} from 'stores/state'

	async function recorderButtonClick() {
	}
</script>

<header>
	<button id="recorder-button" on:click={async () => await recorderButtonClick()}>Start Recording</button>
</header>
{JSON.stringify($state)}

<style>
	:global(:root) {
		--menu-background: black;
		--menu-color: whitesmoke;
	}

	:global(html, body) {
		margin: 0;
		padding: 0;
	}

	header {
		align-items: center;
		background: var(--menu-background);
		color: var(--menu-color);
		display: flex;
		padding: .5rem;
		width: 100%;
	}

	#recorder-button {
		border-radius: 100%;
		height: 5rem;
		width: 5rem;
	}

	#recorder-button:hover {
		background: rgb(255, 200, 200);
	}
</style>