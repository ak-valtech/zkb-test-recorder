export default {
	'name': 'Page Load Test 01',
	'description': 'Test the page load.',
	'steps': [
		{
			'type': 'goto-url',
			'url': 'https://www-02.zkb.ch/de/private.html',
			'timeout': 5000,
		},
		{
			'type': 'validate-aa-call',
			'events': [],
			'evars': [],
			'properties': [],
			'timeout': 5000,
		},
	],
}
