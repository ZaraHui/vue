export default {
	get (STORAGE_KEY) {
		return  JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]' );
	},
	save (STORAGE_KEY, items) {
		window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
	}
};