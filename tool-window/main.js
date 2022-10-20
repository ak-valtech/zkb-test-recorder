import App from './App.svelte'
import events from 'libraries/events'
import {log} from 'libraries/log'
import {sendToParent} from 'libraries/window-communication'

document.body.innerHTML = ''

window.send = sendToParent
const send = window.send

async function processParentMessage({event, payload}) {
	console.log(event)
}

if (!window.recorderInitialized) {
	window.recorderInitialized = true
	window.addEventListener('message', async ({data}) => processParentMessage(JSON.parse(data)))
}
send({event: events.CHILD_WINDOW_INITIALIZED})

new App({target: document.body})
