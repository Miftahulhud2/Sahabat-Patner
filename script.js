// toggle class active
const navbarNav = document.querySelector('.navbar-nav')

// ketika humberger-menu di clik
document.querySelector('#hamburger-menu').onclick = () => {
	navbarNav.classList.toggle('active')
}

// klik diluar side bar untuk menghilangkan menu
const hamburger = document.querySelector('#hamburger-menu')

document.addEventListener('click', function (e) {
	if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
		navbarNav.classList.remove('active')
	}
})


// klik buttons box galeri
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

next.addEventListener('click', function(){
	let items = document.querySelectorAll('.item');
	document.querySelector('.box').appendChild(items[0]);
})
prev.addEventListener('click', function(){
	let items = document.querySelectorAll('.item');
	document.querySelector('.box').prepend(items[items.length - 1]);
})