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

document.querySelector('#editForm').addEventListener('submit', function(e) {
    e.preventDefault()
    let name = document.querySelector('#id_name').value;
    let text = document.querySelector('#id_text').value;
    let image = document.querySelector('#id_image').files[0];

    let data = new FormData()

    if (name && text != '') {
        data.append('text', text)
        data.append('name', name)
    
        if (image != undefined) { // if no image don't supply it
            data.append('image', image)
        }
    
        editLetter(data)
    }
})


