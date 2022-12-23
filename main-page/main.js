import App from './App.svelte'
import events from '../share-libs/events'
import {createChildWindow, sendToChild} from './libs/tool-window'
import {log} from '../share-libs/log'

async function processChildMessage({event, payload}) {
	log('Child Message Received -', event)
	switch (event) {
		case events.CHILD_WINDOW_INITIALIZED:
			await sendToChild({event: events.PUSH_STATE})
			break

		case events.PUSH_STATE:
			break
		case events.REQUEST_STATE:
			await sendToChild({event: events.PUSH_STATE})
			break
	}
}

(async () => {
	let div = document.getElementById('test-recorder')
	if (!div) {
		div = document.createElement('div')
		div.id = 'test-recorder'
		div.style.display = 'none'
		document.body.appendChild(div)
	}

	if (!window.recorderInitialized) {
		window.recorderInitialized = true
		window.addEventListener('message', async ({data}) => processChildMessage(JSON.parse(data)))
		await createChildWindow()
	}

	new App({target: div})
})()
