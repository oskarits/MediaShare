// const image = document.getElementById('image');

// fetch('./uploads/', options)
//     .then(response => {
//         return response.json();
//     }).then(json => {
//         console.log(json);
// //         image.src = './uploads/' + json.file.filename;
// //     });


const main = document.getElementById('imageFeed');

fetch('./uploads')
.then(function(response) {
    return response.json();
    
}).then((images) => {
    for (let i = 0; i < images.length; i++) {
        const img = document.createElement('img');
        const imgPath = './uploads' + `${images[i]}`;
        img.src = imgPath;
    
        const imageCard = document.createElement('div');
        imageCard.setAttribute('class', 'imageCard');
        
        const image = document.createElement('div');
        image.setAttribute('class', 'image');

        image.appendChild(img)
        imageCard.appendChild(image);


        main.appendChild(imageCard);
        
    };
    console.log(response);
    
});