console.log('letters')

let createLetter = (name, image, text) => {
// let createLetter = (letter) => {

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
            // 'Content-Type':'multipart/form-data',
            'X-CSRFToken':csrftoken,
        },
        body: JSON.stringify({'name': name, 'image': image, 'text': text,})
        // body: JSON.stringify(letter)
    })
    .then(resp => resp.json())
    .then(data => {
        console.log('DATA', data)
    })
}


// let letterForm = document.querySelector('#letterForm');
let clickcklick = document.querySelector('#clickcklick');
// let data = new FormData(letterForm)
// console.log('DATATATAA :', data)

// letterForm.addEventListener('submit', function(event) {
clickcklick.addEventListener('click', function() {
    let name = document.querySelector('#name').value;
    let text = document.querySelector('#text').value;
    let image = document.querySelector('#image').value;
    // let imagefile = document.querySelector('#image').files[0];
    // let image = setValue(imagefile);
    // inputElement.onchange = function(event) {
    //     var image = inputElement.files;
    //     //TODO do something with fileList.  
    //     console.log('NAME: ', name, 'IMAGE: ', image, 'TEXT: ', text)
    //  }
    // let image = document.querySelector('#image').value;
    // let text = document.querySelector('#text').value;
    // console.log('NAME: ', name, 'IMAGE: ', image, 'TEXT: ', text)

    createLetter(name, image, text)
    // createLetter(image)

    // event.preventDefault();
    // let letterForm = document.querySelector('#letterForm');
// 
    // let letter = new FormData(letterForm);
    // let letter = new FormData({});
    // console.log('LETTER: ', letter)
    // createLetter(letter)

})

