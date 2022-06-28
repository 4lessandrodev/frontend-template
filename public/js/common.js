const message = document.querySelectorAll('.message');


if (message.length > 0) {
	message.forEach(el => el.addEventListener('click', function (e) {
		el.ariaDisabled = 'true';
		el.hidden = true;
		el.classList.add('hidden');
	}));
}
