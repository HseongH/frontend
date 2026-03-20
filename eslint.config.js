import config from 'eslint-config-xo';
import eslintPluginAstro from 'eslint-plugin-astro';
import {defineConfig} from 'eslint/config';
import globals from 'globals';

export default defineConfig([
	config,
	...eslintPluginAstro.configs.recommended,
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	}
]);
