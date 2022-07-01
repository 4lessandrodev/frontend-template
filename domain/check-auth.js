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
