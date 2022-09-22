let toolWindow

export async function createChildWindow() {
	toolWindow = window.open('', 'Test Recorder',
		'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width='
		+ screen.width + ',height=' + screen.height + ',top=0,left=0',
	)
	toolWindow.document.write(
		'<html><head>'
		+ '<link rel="stylesheet" href="http://localhost:8080/build/tool-window.css">'
		+ '</head><body>'
		+ '<script src="http://localhost:8080/build/tool-window.js"><\/script>'
		+ '</body></html>',
	)
}

export async function sendToChild(data) {
	toolWindow?.postMessage(JSON.stringify(data), '*')
}

export async function sendToParent(data) {
	window.opener.postMessage(JSON.stringify(data), '*')
}
