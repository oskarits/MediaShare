const main = document.getElementsByClassName('image');
const myRequest = new Request('images.json');

fetch(myRequest)
.then(function(response) {
    return response.json();
}).then((images) => {
    for (let i = 0; i < images.length; i++) {
        const img = document.createElement('img');
        const imgPath = './img/original/' + `${images[i].mediaUrl}`;
        img.src = imgPath;
        // img.alt = `${images[i].mediaTitle}`;

        // const caption = document.createElement('figcaption');
        // caption.innerHTML = `${images[i].mediaTitle}`;

        // const figure = document.createElement('figure');
        // const title = document.createElement('h3');
        // title.innerHTML = `${images[i].mediaTitle}`;

        // figure.appendChild(img);
        // figure.appendChild(caption);
        // figure.appendChild(title);

        main.appendChild(img);
    };


        // 
    
});
