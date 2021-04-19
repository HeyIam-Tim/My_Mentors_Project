console.log('letters')

let createLetter = (data) => {
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
            'X-CSRFToken':csrftoken,
        },
        body: data
    })
    .then(resp => resp.json())
    .then(data => {
        console.log('DATA', data)
        location.href = '/';
    })
}


let submitBtn = document.querySelector('#submitBtn');

submitBtn.addEventListener('click', () => {
    // let name = document.querySelector('#name').value;
    // let text = document.querySelector('#text').value;
    // let image = document.querySelector('#image').files[0];
    let name = document.querySelector('#id_name').value;
    let text = document.querySelector('#id_text').value;
    let image = document.querySelector('#id_image').files[0];

    let data = new FormData();
    data.append('image', image)
    data.append('name', name)
    data.append('text', text)

    createLetter(data)
})

