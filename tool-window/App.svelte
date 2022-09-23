<script>
	import events from 'libraries/events'
	import {send} from 'libraries/window-communication'
	import {state as state} from 'stores/state'

	async function processParentMessage({event, payload}) {
		console.log(event)
		console.log(payload)
	}

	if (!window.recorderInitialized) {
		window.recorderInitialized = true
		window.addEventListener('message', async ({data}) => processParentMessage(JSON.parse(data)))
	}
	send({event: events.CHILD_WINDOW_INITIALIZED, payloadType: state})

	async function recorderButtonClick() {
		await send({event: events.RECORDER_BUTTON_CLICK})
	}
</script>

<header>
	<button id="recorder-button" on:click={async () => await recorderButtonClick()}>Start Recording</button>
</header>

{$state.test}
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