import App from './App.svelte'
import events from 'libraries/events'
import {log} from 'libraries/log'
import {sendToChild} from 'libraries/window-communication'

let div = document.getElementById('test-recorder')
if (!div) {
	div = document.createElement('div')
	div.id = 'test-recorder'
	div.style.display = 'none'
	document.body.appendChild(div)
}

window.send = sendToChild
const send = window.send

async function processChildMessage({event, payload}) {
	switch (event) {
		case events.CHILD_WINDOW_INITIALIZED:
			log('child window initialized')
			await send({event: events.PUSH_STATE})
			break

		case events.EXECUTE_SCRIPT:
			if (payload.script) {
				new Function(payload.script)()
			}
			break

		case events.PUSH_STATE:
			log('received state')
			break
		case events.REQUEST_STATE:
			await send({event: events.PUSH_STATE})
			break
	}
}

if (!window.recorderInitialized) {
	window.recorderInitialized = true
	window.addEventListener('message', async ({data}) => processChildMessage(JSON.parse(data)))
}

new App({target: div})

