const { initFetchMessageBinding, initPromiseSettingBinding } = require('./handlers');

function initBindings() {
	initPromiseSettingBinding();
	initFetchMessageBinding();
}

initBindings();
