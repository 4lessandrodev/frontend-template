const isGithub = location.hostname === '4lessandrodev.github.io';
const pathName = location.pathname;
const githubPrefix = '/frontend-template';

const routes = {
	home: '/home.html',
	login: '/index.html'
}

function redirectToDashboard() {
	if (isGithub) {
		if (pathName !== githubPrefix + routes.home)
			location.href = githubPrefix + routes.home;
		return;
	} 
	if(pathName !== routes.home) location.href = routes.home;
}

function redirectToLogin() {
	if (isGithub) {
		if (pathName !== githubPrefix + routes.login)
			location.href = githubPrefix + routes.login;
		return;
	}
	if(pathName !== routes.login) location.href = routes.login;
}

(function checkAuth() {
	const isAuthenticated = document.cookie.includes('user');
	(isAuthenticated) ? redirectToDashboard() : redirectToLogin();
})();
