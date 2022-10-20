import events from 'libraries/events'
import {send} from 'libraries/window-communication'
import {writable} from 'svelte/store'

export const state = writable({})

state.subscribe(async value => {
	return send({event: events.PUSH_STATE, payload: value})
})

if (!window?.recorder?.stateSync) {
	window.recorder = window.recorder || {}
	window.recorder.stateSync = true
	window.addEventListener('message', async ({data}) => {
		const {event, payload} = JSON.parse(data)
		if (event === events.PUSH_STATE) {
			// if (window.recorder.state)
			// 	window.recorder.state =
		}
	})
}
