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
