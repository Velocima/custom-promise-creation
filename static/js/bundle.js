(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"./helpers":2}],2:[function(require,module,exports){
let shouldPromiseFullfill = true;

function createPromise() {
	return new Promise(resolvePromise);
}

function resolvePromise(res, rej) {
	console.log('Promise pending. Begining to resolve the promise...');
	if (shouldPromiseFullfill) {
		console.log('Promise will fullfill...');
		res({ message: 'Success! Promise has resolved successfully.' });
	} else {
		console.log('Promise will reject...');
		rej({ message: 'Failed! Promise has been rejected.' });
	}
}

async function getPromiseData() {
	let message;
	try {
		const response = await createPromise();
		console.log('getPromiseData recieved message: ', response.message);
		message = response.message;
	} catch (err) {
		console.error(err);
		message = err.message;
	}
	return message;
}

function updatePromiseCompletion() {
	let span = document.querySelector('span');
	shouldPromiseFullfill = !shouldPromiseFullfill;
	span.textContent = shouldPromiseFullfill ? 'succeed' : 'reject';
}

function appendMessage(message) {
	let list = document.querySelector('ul');
	let newLi = document.createElement('li');
	newLi.textContent = message;
	list.append(newLi);
}

module.exports = { createPromise, updatePromiseCompletion, appendMessage, getPromiseData };

},{}],3:[function(require,module,exports){
const { initFetchMessageBinding, initPromiseSettingBinding } = require('./handlers');

function initBindings() {
	initPromiseSettingBinding();
	initFetchMessageBinding();
}

initBindings();

},{"./handlers":1}]},{},[3]);
