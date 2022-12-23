export default {
	'name': 'Video Test 01',
	'description': 'Test the second video.',
	'steps': [
		{
			'type': 'goto-url',
			'url': 'https://www-02.zkb.ch/de/wta_testbereich/komponenten/video.html',
			'timeout': 5000,
		},
		{
			'type': 'validate-aa-call',
			'events': [],
			'evars': [],
			'properties': [],
			'timeout': 5000,
		},
		{
			'type': 'click-element',
			'selector': 'video',
			'elementIndex': 1,
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
