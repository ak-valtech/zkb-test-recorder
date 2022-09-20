<script>
	import {onMount} from 'svelte'

	let toolWindow
	onMount(async () => {
		toolWindow = window.open('', 'Title', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=780,height=200,top=' + (screen.height - 400) + ',left=' + (screen.width - 840))
		toolWindow.document.body.innerHTML = ''
		toolWindow.document.write(
			'<html><head>'
			+ '<script src="http://localhost:8080/build/tool-window.js"><\/script>'
			+ '<script src="http://localhost:35729/livereload.js?snipver=1"><\/script>'
			+ '<link href="http://localhost:8080/build/tool-window.css">'
			+ '</head><body></body></html>'
		)
	})
</script>
