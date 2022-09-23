let toolWindow

export async function createChildWindow() {
	toolWindow = window.open(
		'',
		'Test Recorder',
		'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,'
		+ 'width=' + screen.width + ',height=' + screen.height + ',top=0,left=0',
	)

	const css = toolWindow.document.createElement('link')
	css.rel = 'stylesheet'
	css.href = 'http://localhost:8080/build/tool-window.css'
	toolWindow.document.head.appendChild(css)

	const script = toolWindow.document.createElement('script')
	script.src = 'http://localhost:8080/build/tool-window.js'
	toolWindow.document.body.appendChild(script)
}

async function sendToChild(data) { toolWindow?.postMessage(JSON.stringify(data), '*') }

async function sendToParent(data) { window?.opener?.postMessage(JSON.stringify(data), '*') }

export const send = toolWindow ? sendToChild : sendToParent
