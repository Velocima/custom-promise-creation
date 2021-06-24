const { getPromiseData, updatePromiseCompletion, appendMessage } = require('./helpers');

function initPromiseSettingBinding() {
	let button = document.querySelector('.promise-setting');
	button.addEventListener('click', updatePromiseCompletion);
}

async function handleFetchMessage() {
	const message = await getPromiseData();
	appendMessage(message);
}

function initFetchMessageBinding() {
	let button = document.querySelector('.fetch-promise');
	button.addEventListener('click', handleFetchMessage);
}

module.exports = { initPromiseSettingBinding, initFetchMessageBinding };
