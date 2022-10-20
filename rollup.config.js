import alias from '@rollup/plugin-alias'
import commonjs from '@rollup/plugin-commonjs'
import css from 'rollup-plugin-css-only'
import livereload from 'rollup-plugin-livereload'
import resolve from '@rollup/plugin-node-resolve'
import svelte from 'rollup-plugin-svelte'
import {terser} from 'rollup-plugin-terser'
import childProcess from 'child_process'

const production = !process.env.ROLLUP_WATCH

function serve() {
	let server

	function toExit() { if (server) server.kill(0) }

	return {
		writeBundle() {
			if (server) return
			server = childProcess.spawn('npm', ['run', 'start', '--', '--dev'], {
				stdio: ['ignore', 'inherit', 'inherit'],
				shell: true,
			})

			process.on('SIGTERM', toExit)
			process.on('exit', toExit)
		},
	}
}

export default [
	{
		input: 'main-page/main.js',
		output: {
			sourcemap: true,
			format: 'iife',
			file: 'public/build/main-page.js',
		},
		plugins: [
			alias({
				entries: [
					{find: 'components', replacement: '../components'},
					{find: 'libraries', replacement: '../libraries'},
					{find: 'stores', replacement: '../stores'},
				],
			}),
			svelte({compilerOptions: {dev: !production}}),
			resolve({
				browser: true,
				dedupe: ['svelte'],
			}),
			commonjs(),
			!production && serve(),
			!production && livereload('public'),
			production && terser(),
		],
		watch: {
			clearScreen: true,
		},
	},
	{
		input: 'tool-window/main.js',
		output: {
			sourcemap: true,
			format: 'iife',
			file: 'public/build/tool-window.js',
		},
		plugins: [
			alias({
				entries: [
					{find: 'components', replacement: '../components'},
					{find: 'libraries', replacement: '../libraries'},
					{find: 'stores', replacement: '../stores'},
				],
			}),
			svelte({compilerOptions: {dev: !production}}),
			css({output: 'tool-window.css'}),
			resolve({
				browser: true,
				dedupe: ['svelte'],
			}),
			commonjs(),
			production && terser(),
		],
		watch: {
			clearScreen: true,
		},
	},
]
