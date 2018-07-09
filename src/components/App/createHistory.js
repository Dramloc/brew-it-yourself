// Export createHistory implementation matching environment: SSR or browser
if (typeof window === 'undefined') {
	module.exports = require('history/createMemoryHistory');
}
else {
	module.exports = require('history/createBrowserHistory');
}
