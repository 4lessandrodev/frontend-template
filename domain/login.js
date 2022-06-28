const form = document.querySelector('.form');

const database = {
	user: { nick: 'admin', password: '123456' }
};


if (form) form.addEventListener('submit', function (event) {
	const { user } = database;
	event.preventDefault();
	const passwordInput = form.querySelector("input[type=password]");
	const nickInput = form.querySelector("input[type=text]");

	const nick = nickInput.value;
	const password = passwordInput.value;
	const errorMessage = form.querySelector('.error');
	const successMessage = form.querySelector('.success');

	if ((nick !== user.nick || password !== user.password) && form) {
		if (errorMessage) {
			if (successMessage) successMessage.classList.add('hidden');
			errorMessage.classList.remove('hidden');
			errorMessage.firstChild.innerText = 'Error: invalid credentials.';
		}
	} else {
		if (successMessage) {
			successMessage.classList.remove('hidden');
			successMessage.firstChild.innerText = 'Success: connected';
			if (errorMessage) errorMessage.classList.add('hidden');
			form.reset();
		}
	}
});
