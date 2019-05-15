'use strict';

let open = false;

const decide = () => {
  if (open == true) {
    closeNav();
  } else {
    openNav();
  };
};

const openNav = () => {
    document.getElementById("navbar").style.display = 'flex';
    document.getElementById("navbar").style.opacity = '1';
    // document.getElementById("burger").style.display = 'none';
    // document.getElementById("closeBtn").style.display = 'inline-block';
    document.getElementById("first").classList.toggle("first-animate");
    document.getElementById("second").classList.toggle("second-animate");
    document.getElementById("third").classList.toggle("third-animate");
    open = true;
};

const closeNav = () => {
    document.getElementById("navbar").style.display = 'none';
    // document.getElementById("closeBtn").style.display = 'none';
    // document.getElementById("burger").style.display = 'inline-block';
    document.getElementById("navbar").classList.toggle("navbar-reverse");
    open = false;
}
