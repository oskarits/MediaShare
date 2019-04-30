'use strict';

const openNav = () => {
    document.getElementById("navbar").style.height = 'auto';
    document.getElementById("navbar").style.display = 'flex';
    document.getElementById("burger").style.display = 'none';
    document.getElementById("closeBtn").style.display = 'inline-block';
    
};

const closeNav = () => {
    document.getElementById("navbar").style.height = '0px';
    document.getElementById("navbar").style.display = 'none';
    document.getElementById("closeBtn").style.display = 'none';
    document.getElementById("burger").style.display = 'inline-block';
    

}
