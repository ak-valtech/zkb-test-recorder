export let toolWindow

export async function sendToChild(data) {
	if (!toolWindow) {
		toolWindow = await createChildWindow()
	}
	toolWindow?.postMessage(JSON.stringify(data), '*')
}

export async function createChildWindow() {
	toolWindow = window.open(
		'http://localhost:8080/tool-window.html',
		'Test Recorder',
		'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,'
		+ 'width=' + screen.width + ',height=' + screen.height + ',top=0,left=0',
	)
}
