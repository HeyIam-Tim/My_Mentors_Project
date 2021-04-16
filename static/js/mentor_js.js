console.log('hello there')

let mentorsArray = () => {
    let mentor_list = document.querySelector('#mentor_list')   
    url = '/mentor_list/'
    fetch(url)
    .then((resp) => {
        resp.json().then((data) => {

            all_mentor = ''

            for (mentor of data) {
               mentorStuff = `
               <div class="card">
                    <div class="flex fd-row jc-fs">
                        <div class="mentor_image">
                            <img src="/static/${mentor.image}" alt="mentor_photo">
                        </div>
                        <div class="name_link">
                            <h3>${mentor.mentor_name}</h3>
                            <div class="flex fd-row jc-fs">
                                <a href="${mentor.twitter_link}" target="_blank"><i class="fab fa-twitter fa-2x"></i></a>
                                <a href="${mentor.youtube_link}" target="_blank"><i class="fab fa-youtube fa-2x"></i></a>
                                <a href="" class="button">View</a>
                            </div>
                        </div>
                    </div>
                </div>
            ` 
            all_mentor += mentorStuff
            }

            mentor_list.innerHTML = all_mentor
        })
    })
}

mentorsArray()


let letterArray = () => {
    let ty_letters = document.querySelector('#ty_letters');
    url = '/letter_list/'
    fetch(url)
    .then(resp => resp.json())
    .then((data) => {
        console.log('DATA', data)

        for (letter of data) {
            eachLetter = `
            <div class="card">
                <div class="flex fd-row jc-fs">
                    <div class="mentor_image">
                        <img src="/static/${letter.image}" alt="mentor_photo">
                    </div>
                    <div class="name_link">
                        <h3>${letter.name}</h3>
                        <p>${letter.text}</p>
                        <div class="flex fd-row jc-fs">
                            <a href="/edit_letter/${letter.id}" id="update" class="button">Edit</a>
                            <a href="/delete_letter/${letter.id}" id="del" class="button">Delete</a>
                        </div>
                    </div>
                </div>
            </div>
            `
            ty_letters.innerHTML += eachLetter
        }
    })
}

letterArray()


