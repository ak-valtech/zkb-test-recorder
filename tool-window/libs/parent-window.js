export async function sendToParent(data) {
	window?.opener?.postMessage(JSON.stringify(data), '*')
}
