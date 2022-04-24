<script>
	import {onMount} from 'svelte';
	import Sidebar from './components/Sidebar.svelte';

	let bottom = false;

	function togglePosition(bottom) {
		const container = document.getElementById('test-recorder-app');
		container.classList.remove(bottom ? 'top' : 'bottom');
		container.classList.add(bottom ? 'bottom' : 'top');
	}

	let sidebar = 'Test';
	let sidebarLeft = false;

	onMount(async () => {
		const container = document.getElementById('test-recorder-app');
		container.classList.add('top');
	});
</script>

<main class={sidebar ? (sidebarLeft ? 'sidebarLeft' : 'sidebarRight') : ''}>
	<button on:click={() => { bottom = !bottom; togglePosition(bottom) } }>{bottom ? '↑' : '↓'}</button>
	<button on:click={() => sidebar = 'Test'}>Test</button>
	<Sidebar bind:title={sidebar} bind:left={sidebarLeft}></Sidebar>
</main>


<style>
	:global(#test-recorder-app) {
		background: white;
		left: 0;
		position: fixed;
		width: 100vw;
	}

	:global(#test-recorder-app.top) {
		border-bottom: 0.1rem black solid;
		top: 0;
	}

	:global(#test-recorder-app.bottom) {
		border-top: 0.1rem black solid;
		bottom: 0;
	}

	main {
		align-items: center;
		display: flex;
		height: 100%;
	}

	main.sidebarLeft {
		padding-left: 40rem;
	}

	main.sidebarRight {
		padding-right: 40rem;
	}

	main > button {
		margin: 0;
		padding: 0.5rem;
		border-left: 1px solid lightgrey;
		border-right: 1px solid lightgrey;
	}

	main > button:hover {
		background: whitesmoke;
	}
</style>