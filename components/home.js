const createArticle = (image, title, texts) => {
    let text = '';
    for (let t of texts) {
      text += `<p>${t}</p>`;
    }
  
    return `<img src="${image}" alt="${title}">
                  <h3 class="card-title">${title}</h3>
                  <p>${text}</p>
                  <p><button>View</button></p>`;
  };
  