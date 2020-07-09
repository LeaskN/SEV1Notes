fetch(`https://dog.ceo/api/breeds/image/random/50`)
    .then(res => {
        return res.json();
    })
    .then(res => {
        let pictures = res.message;
        for (let i = 0; i < pictures.length; i++) {
            const element = pictures[i];
            
            const body = document.querySelector('body');

            const newImg = document.createElement('img');

            newImg.src = element;

            body.appendChild(newImg);
        }   
    })
    .catch(err => {
        console.log(err)
    });