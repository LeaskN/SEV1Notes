const body = document.querySelector('body');

fetch(`https://dog.ceo/api/breeds/image/random/50`)
    .then(res => res.json())
    // .then(res => console.log(res))
    .then(res => {
        let imgArr = res.message
        for(let i = 0; i < imgArr.length; i++){
            let current = imgArr[i];

            const img = document.createElement('img');
            const cardTop = document.createElement('div');
            const commentArea = document.createElement('div');
            const card = document.createElement('div');
            
            img.src = current;
            img.className = 'img';
            card.className = 'card';
            cardTop.className = 'cardTop';
            commentArea.className = 'commentArea';

            card.appendChild(cardTop);
            card.appendChild(img);
            card.appendChild(commentArea);
            
            body.appendChild(card);
        }
    })
    .catch(err => console.log(err))