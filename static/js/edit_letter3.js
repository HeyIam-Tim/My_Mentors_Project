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
        // location.href = '/';
    })
}

let submitBtn = document.querySelector('#submitBtn');
submitBtn.addEventListener('click', () => {
// submitBtn.addEventListener('submit', function(e){
    // e.preventDefault()
    let name = document.querySelector('#id_name').value;
    let text = document.querySelector('#id_text').value;
    // let image = document.querySelector('#id_image').files[0];
    // console.log('IMAAGEE: ', image)

    // let data = new FormData();
    // data.append('name', name)
    // data.append('text', text)
    // data.append('image', image)
    // console.log('APPENDEDFORM: ', data)

    let testHref = document.querySelector('a').src;
    let testImage = new File([''], `${testHref}`, {type:'image/jpeg'})
    

    // let editForm = document.querySelector('#editForm')
    // let data = new FormData(editForm);
    // data.append('image', testImage)
    // console.log('SENTDATA: ', data)


    let data = new FormData();
    data.append('name', name)
    data.append('text', text)
    // data.append('image', image)
    data.append('image', testImage)

    editLetter(data)

})

// let testHref = document.querySelector('a').innerHTML;
// let testImage = new File([''], `${testHref}`, {})
// console.log('testImage: ', testImage)

// document.querySelector('#btnLetter').addEventListener('click', ()=>{
//     let formLetter = document.forms['formLetter']
//     // var text = "";
//     // for (i = 0; i < formLetter.length ;i++) {
//     //   text += formLetter.elements[i].src;
//     //   console.log('TEXT: ', text)
//     // }
//     console.log('formLetter: ', formLetter.src)
// })


// let image = document.querySelector('#id_image').files
// document.querySelector('#id_image').files[0] = 
// console.log('CHANGEDIMAGE: ', image)


// let imageLetter = document.querySelector('#imageLetter').files
// console.log('imageLetter: ', imageLetter)

// let defaultImage = document.querySelector('#id_default_image').files;
// console.log('defaultImage: ', defaultImage)


// let editForm = document.querySelector('#editForm')
// console.log('EDITFORM: ', editForm)
// let formedit = new FormData(editForm);
// console.log('FormData: ', formedit)

