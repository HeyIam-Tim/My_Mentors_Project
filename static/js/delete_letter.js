console.log('DELETE')


document.querySelector('#delete').addEventListener('click', () => {
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
})


