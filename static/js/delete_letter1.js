console.log('DELETE')


let deleteLetter = (letter_id) => {
    url = `/edit_letter_api/${letter_id}/`
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

    fetch(url, {
        method: 'DELETE',
        headers: {
            'X-CSRFToken':csrftoken,
        },
    })
    .then(resp => resp.json())
    .then((data) => {
        console.log('deletedata: ', data)
        location.href = '/';
    })
}

let deleteBtn = document.querySelector('#delete');
deleteBtn.addEventListener('click', () => {
    letter_id = document.querySelector('#letter_id').value;
    deleteLetter(letter_id)
})





