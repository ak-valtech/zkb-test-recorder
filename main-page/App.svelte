<script>
	import {onMount} from 'svelte'

	import events from 'libraries/events'
	import {createChildWindow, send} from 'libraries/window-communication'
	import {parentState as state} from 'stores/state'

	async function processChildMessage({event}) {
		switch (event) {
			case events.CHILD_WINDOW_INITIALIZED:
				$state.test = 1
				break
		}
	}

	onMount(async () => {
		await createChildWindow()
		window.addEventListener('message', async ({data}) => processChildMessage(JSON.parse(data)))
	})
</script>
