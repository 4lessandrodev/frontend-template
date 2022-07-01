const form = document.querySelector('.form');
const errorMessage = form.querySelector('.error');
const successMessage = form.querySelector('.success');

const database = {
	user: {
		nick: 'admin',
		password: '123456'
	}
};

function redirectToDashboard() {
	if(location.pathname !== '/home.html') location.href = '/home.html';
}

function redirectToLogin() {
	if(location.pathname !== '/#') location.href = '/#';
}

(function checkAuth() {
	const isAuthenticated = document.cookie.includes('user');
	(isAuthenticated) ? redirectToDashboard() : redirectToLogin();
})();

function getNickAndPassword() {
	const passwordInput = form.querySelector("input[type=password]");
	const nickInput = form.querySelector("input[type=text]");

	const nick = nickInput.value;
	const password = passwordInput.value;

	return {
		nick,
		password
	};
}

function login() {
	const {
		user
	} = database;
	const {
		nick,
		password
	} = getNickAndPassword();
	return (nick !== user.nick || password !== user.password) ? showErrorMessage() : showSuccessMessage();
}

function showSuccessMessage(message = 'Success: connected') {
	successMessage && successMessage.classList.remove('hidden');
	successMessage.firstChild.innerText = message;
	return true;
}

function hideSuccessMessage() {
	successMessage && successMessage.classList.add('hidden');
}

function hideErrorMessage() {
	errorMessage && errorMessage.classList.add('hidden');
}

function showErrorMessage(message = 'Error: invalid credentials.') {
	errorMessage && errorMessage.classList.remove('hidden');
	errorMessage ? errorMessage.firstChild.innerText = message : false;
	return false;
}

function showLoading(event) {
	const loading = event.target.querySelector(".loading");
	loading && loading.classList.remove('hidden');
}

function hidesLoading(event) {
	const loading = event.target.querySelector(".loading");
	loading && loading.classList.add('hidden');
}

function getCookieExpiration() {
	const currentDate = new Date();
	currentDate.setHours(currentDate.getHours() + 1);
	return currentDate.toGMTString();
}

function handleSuccess() {
	const expiration = getCookieExpiration();
	document.cookie = `user=authenticated;Expires=${expiration}`;
	redirectToDashboard()
}

form && form.addEventListener('submit', function (event) {
	event.preventDefault();
	hideErrorMessage();
	hideSuccessMessage();
	showLoading(event);
	setTimeout(() => {
		const isSuccess = login(event.target);
		(isSuccess) && handleSuccess();
	}, 1000);
	setTimeout(() => hidesLoading(event), 1000);
});

