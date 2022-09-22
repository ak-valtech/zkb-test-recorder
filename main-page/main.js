import App from './App.svelte'

let div = document.getElementById('test-recorder')
if (!div) {
	div = document.createElement('div')
	div.id = 'test-recorder'
	div.style.display = 'none'
	document.body.appendChild(div)
}
div.innerHTML = ''

new App({
	target: div,
})

