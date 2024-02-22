// Navbar
function NavFunction() {
  var x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}
// see more
function myFunction() {
  var dots = document.getElementById('dotsprofile');
  var moreText = document.getElementById('moreprofile');
  var btnText = document.getElementById('myBtnprofile');

  if (dots.style.display === 'none') {
    dots.style.display = 'inline';
    btnText.innerHTML = 'Read more';
    moreText.style.display = 'none';
  } else {
    dots.style.display = 'none';
    btnText.innerHTML = 'Read less';
    moreText.style.display = 'inline';
  }
}
function aFunction() {
  var dots = document.getElementById('dots');
  var moreText = document.getElementById('more');
  var btnText = document.getElementById('myBtn');

  if (dots.style.display === 'none') {
    dots.style.display = 'inline';
    btnText.innerHTML = 'Read more';
    moreText.style.display = 'none';
  } else {
    dots.style.display = 'none';
    btnText.innerHTML = 'Read less';
    moreText.style.display = 'inline';
  }
}

// dark mode

function darktheme() {
  document.body.classList.toggle('darktheme');
  // swap the icon
  if (document.body.classList.contains('darktheme')) {
    document.getElementById('moon-logo-icon-png-svg').src = 'img/sun-logo-icon-png-svg.png';
  } else {
    document.getElementById('moon-logo-icon-png-svg').src = 'img/moon-logo-icon-png-svg.png';
  }
}
