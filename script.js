'use strict';

const uah = document.querySelector('#uah'),
      usd = document.querySelector('#usd');

uah.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', './current.json');
    request.setRequestHeader('Content-type', 'aplication/json, charset=utf-8');

    request.send();

    request.addEventListener('load', () => {
        if(request.status === 200) {
            const data = JSON.parse(request.response);
            usd.value = (+uah.value / data.current.usd).toFixed(2);
        } else {
            usd.value = 'Что то рошло не так!';
        }
    })

});
