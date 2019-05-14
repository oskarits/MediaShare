'use strict';

const openNav = () => {
    document.getElementById("navbar").style.display = 'flex';
    document.getElementById("navbar").style.opacity = '1';
    document.getElementById("burger").style.display = 'none';
    document.getElementById("closeBtn").style.display = 'inline-block';
    const reverseClass = document.getElementById("navbar");

    reverseClass.classList.add('reverse');
};

const closeNav = () => {
    document.getElementById("navbar").style.display = 'none';
    document.getElementById("closeBtn").style.display = 'none';
    document.getElementById("burger").style.display = 'inline-block';
    document.getElementById("navbar").style.opacity = '0';

    
}
