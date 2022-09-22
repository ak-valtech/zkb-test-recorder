<script>
	import {onMount} from 'svelte'

	import events from 'libraries/events'
	import {createChildWindow, sendToChild as send} from 'libraries/window-communication'

	async function processChildMessage({event}) {
		console.log(event)
		switch (event) {
			case events.CHILD_WINDOW_INITIALIZED:
				await send({ event: events.STATE_SYNC, payload: null})
				break
		}
	}

	onMount(async () => {
		await createChildWindow()
		window.addEventListener('message', async ({data}) => processChildMessage(JSON.parse(data)))
	})
</script>
