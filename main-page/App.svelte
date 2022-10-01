<script>
	import {onMount} from 'svelte'
	import {state} from 'stores/state'

	import events from 'libraries/events'
	import {createChildWindow} from 'libraries/window-communication'

	async function processChildMessage({event}) {
		switch (event) {
			case events.CHILD_WINDOW_INITIALIZED:
				break
		}
	}

	onMount(async () => {
		await createChildWindow()
		window.addEventListener('message', async ({data}) => processChildMessage(JSON.parse(data)))

		console.log(state)
		$state = {test: 1}
	})
</script>
