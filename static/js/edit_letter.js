console.log('EDITPAGE')


let editLetter = (data) => {
    letter_id = document.querySelector('#letter_id').value;
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

    url = `/edit_letter_api/${letter_id}/`
    fetch(url, {
        method: 'PUT',
        headers: {
            'X-CSRFToken':csrftoken,
        },
        body: data,
    })
    .then(resp => resp.json())
    .then((data) => {
        console.log('DATA11: ', data)
        location.href = '/';
    })
}

let submitBtn = document.querySelector('#submitBtn');
submitBtn.addEventListener('click', () => {
    let name = document.querySelector('#name').value;
    let text = document.querySelector('#text').value;
    let image = document.querySelector('#image').files[0];

    let data = new FormData();
    data.append('name', name)
    data.append('text', text)
    data.append('image', image)

    editLetter(data)
})