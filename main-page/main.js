import App from './App.svelte'

const div = document.createElement('div')
div.style.display = 'none'
document.body.appendChild(div)

new App({
	target: div,
})

