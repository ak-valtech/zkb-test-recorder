import {writable} from 'svelte/store'
import {send} from 'libraries/window-communication'
import events from 'libraries/events'

export const state = writable({})

state.subscribe(async v => {
	return send({event: events.STATE_SYNC, payload: v})
})

if (!window?.recorder?.stateSync) {
	window.recorder = window.recorder || {}
	window.recorder.stateSync = true
	window.addEventListener('message', async ({data}) => {
		if (data.event !== events.STATE_SYNC) return
		state.set(data.payload)
	})
}
