<script>
	import {onMount} from 'svelte'
	import TestListItem from './Components/TestListItem.svelte'
	import TestDetail from './Components/TestDetail.svelte'

	let tests = []
	let selectedTest

	onMount(async () => {
		const storedTests = window.localStorage.getItem('testCases')
		if (storedTests) {
			tests = JSON.parse(storedTests)
			selectedTest = tests[0] || null
		}
	})
</script>

<div class="test-section">
	<ul class="test-list">
		{#each tests as test}
			<li class:selected={selectedTest === test} on:click={() => {selectedTest = test}}>
				<TestListItem {test}/>
			</li>
		{/each}
	</ul>
	{#if selectedTest}
		<div class="test-details">
			<TestDetail test={selectedTest}/>
		</div>
	{/if}
</div>

<style>
	:global(html, body) {
		margin: 0;
		padding: 0;
	}

	.test-section {
		display: flex;
		width: 100%;
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		width: 100%;
	}

	li:nth-child(2n+1) {
		background: lightgray;
	}

	li:hover {
		background: lightyellow;
	}

	li.selected {
		background: yellow;
	}

	.test-list {
		flex-grow: 1;
	}

	.test-details {
		box-shadow: grey 0 0 8px;
		flex-basis: 40rem;
		flex-grow: 3;
		padding: 0.5rem;
	}
</style>
