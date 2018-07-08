import { readJson } from 'preact-cli/lib/lib/webpack/webpack-base-config';
import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import prerender from 'preact-cli/lib/lib/webpack/prerender';

function renderHTMLPlugin(config) {
	const { cwd, dest, isProd, src } = config;

	const htmlWebpackConfig = values => {
		let { url } = values;
		// Cached SSR
		let ssr;

		function render({ url }) {
			if (ssr) {
				// already prerendered
				return ssr;
			}
			// Prerender app
			const body = prerender({ cwd, dest, src }, { url });
			// Retrieve preact-helmet state after prerender
			const entry = resolve(dest, './ssr-build/ssr-bundle.js');
			const m = require(entry);
			const head = m.rewind();
			ssr = { head, body };
			return ssr;
		}

		return {
			filename: resolve(dest, url.substring(1), 'index.html'),
			template: `!!ejs-loader!${config.template}`,
			minify: isProd && {
				collapseWhitespace: true,
				removeScriptTypeAttributes: true,
				removeRedundantAttributes: true,
				removeStyleLinkTypeAttributes: true,
				removeComments: true
			},
			favicon: 'assets/favicon.ico',
			manifest: config.manifest,
			inject: true,
			compile: true,
			preload: config.preload === true,
			excludeAssets: [/(bundle|polyfills)(\..*)?\.js$/],
			config,
			// app prerender
			body() {
				if (!config.prerender) {
					return '';
				}
				return render({ url }).body;
			},
			// <title> tag prerender
			title() {
				if (!config.prerender) {
					return `<title>${config.manifest.name}</title>`;
				}
				return render({ url }).head.title.toString();
			},
			// <link> tags prerender
			link() {
				if (!config.prerender) {
					return '';
				}
				return render({ url }).head.link.toString();
			},
			// <meta> tags prerender
			meta() {
				if (!config.prerender) {
					return '';
				}
				return render({ url }).head.meta.toString();
			}
		};
	};

	const pages = readJson(resolve(cwd, config.prerenderUrls || '')) || [{ url: '/' }];

	return pages.map(htmlWebpackConfig).map(conf => new HtmlWebpackPlugin(conf));
}

function replacePlugins(name, replacements) {
	let index = 0;
	return plugin => {
		if (plugin && plugin.constructor && plugin.constructor.name === name) {
			return replacements[index++];
		}
		return plugin;
	};
}

export default (config, env, helpers) => {
	const plugins = renderHTMLPlugin(env);
	config.plugins = config.plugins.map(replacePlugins('HtmlWebpackPlugin', plugins));
};
