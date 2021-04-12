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
                        <img src="${mentor.image}" alt="mentor_photo">
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