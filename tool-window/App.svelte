<script>
	import events from 'libraries/events'
	import {sendToParent as send} from 'libraries/window-communication'

	async function processParentMessage({event, payload}) {
		console.log(event)
		console.log(payload)
	}

	if (!window.initialized) {
		window.initialized = true
		window.addEventListener('message', async ({data}) => processParentMessage(JSON.parse(data)))
	}
	send({event: events.CHILD_WINDOW_INITIALIZED})

	async function recorderButtonClick() {
		await send({event: events.RECORDER_BUTTON_CLICK})
	}
</script>

<header>
	<button id="recorder-button" on:click={async () => await recorderButtonClick()}>Start Recording</button>
</header>

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
		width: 100%;
	}

	#recorder-button {
		border-radius: 100%;
		height: 5rem;
		width: 5rem;
	}
</style>