'use strict';

const openNav = () => {
    document.getElementById("navbar").style.display = 'block';
    document.getElementById("burger").style.display = 'none';
};

const closeNav = () => {
    document.getElementById("navbar").style.display = 'none';
    document.getElementById("burger").style.display = 'block';
}