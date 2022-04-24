import App from './App.svelte'

const div = document.createElement('div')
div.id = 'test-recorder-app'
document.body.appendChild(div)

new App({
	target: div
})

