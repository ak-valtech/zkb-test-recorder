import App from './App.svelte'
import events from '../share-libs/events'
import {log} from '../share-libs/log.js'
import {sendToParent} from './libs/parent-window.js'

import pageLoad01 from './sample-tests/page-load-01'
import videoTest01 from './sample-tests/video-01'

function setTestCases() {
	log('Setting Test Cases')
	window.localStorage.setItem('testCases', JSON.stringify([pageLoad01, videoTest01]))
}

async function processParentMessage({event, payload}) {
	log(event)
}

(async () => {
	setTestCases()

	document.body.innerHTML = ''

	if (!window.recorderInitialized) {
		window.recorderInitialized = true
		window.addEventListener('message', async ({data}) => processParentMessage(JSON.parse(data)))
	}

	new App({target: document.body})
	await sendToParent({event: events.CHILD_WINDOW_INITIALIZED})
})()
