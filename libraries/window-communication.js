import events from 'libraries/events'

let toolWindow

export async function sendToChild(data) {
	toolWindow?.postMessage(JSON.stringify(data), '*')
}

export async function sendToParent(data) {
	window?.opener?.postMessage(JSON.stringify(data), '*')
}

export async function createChildWindow() {
	toolWindow = window.open(
		'http://localhost:8080/tool-window.html',
		'Test Recorder',
		'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,'
		+ 'width=' + screen.width + ',height=' + screen.height + ',top=0,left=0',
	)
}

export async function send(data) {
	await window?.send(data)
}

export async function executeScript(script) {
	await send({event: events.EXECUTE_SCRIPT, payload: {script, args: Array.from(arguments)?.slice(1)}})
}