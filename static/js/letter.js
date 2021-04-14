console.log('letters')

let createLetter = (name, image, text) => {


    // get csrf token
    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    const csrftoken = getCookie('csrftoken');



    url = '/letter_list/'
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            'X-CSRFToken':csrftoken,
        },
        body: JSON.stringify({'name': name, 'image': image, 'text': text,})
    })
    .then(resp => resp.json())
    .then(data => {
        console.log('DATA', data)
    })
}


let letterButton = document.querySelector('#clickMe');

letterButton.addEventListener('click', function() {
    let name = document.querySelector('#name').value;
    let image = document.querySelector('#image').value;
    let text = document.querySelector('#text').value;
    console.log('NAME: ', name, 'IMAGE: ', image, 'TEXT: ', text)

    // createLetter(name, image, text)
    createLetter(name, text)
})

