console.log('Mentor Detail')

let pk_mentor = document.querySelector('#pk_mentor').value;

let mentorDetail = (pk_mentor) => {
    url = `/mentor_api/${pk_mentor}/`
    fetch(url)
    .then(resp => resp.json())
    .then((data) => {
        console.log('MENTOR: ', data)
        let mentor = data
        let card_text_container = `
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
                            <a href="/" style="padding: 3px 13px; margin-bottom:3px" id="backbtn" class="button">Back</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text_body">
                ${mentor.text_body}
            </div>
            <br>
        `
        document.querySelector('#card_text_container').innerHTML = card_text_container
    })
}


mentorDetail(pk_mentor)


let courseList = (pk_mentor) => {
    url = `/course_api/${pk_mentor}/`
    fetch(url)
    .then(resp => resp.json())
    .then((data) => {
        console.log('COURSE_LIST: ', data)

        for(course of data) {
            let  var_course = `
                <div class="course
                    <a href="${course.link}" target="_blank">
                        <img src="${course.thumbnail}" alt="course_image">  
                    </a>
                    <div class="text_body">
                        ${course.description}
                        <br><br>
                        The link:  <a href="/${course.link}/" target="_blank">${course.link}</a>
                        <br>
                    </div
                </div>
            `
            document.querySelector('#course_container').innerHTML += var_course
        }
    })
}


courseList(pk_mentor)


