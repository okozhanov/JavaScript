
goBack = document.getElementsByClassName('go_back')[0]
goBack.onclick = function () {
    window.location.href = 'index.html'
}


fetch(`https://jsonplaceholder.typicode.com/users/${localStorage.getItem('user_id')}`)
    .then(value => value.json())
    .then(value => {

        const user = document.getElementsByClassName('user')[0]

        const user_body = document.createElement('div')
        user_body.classList.add('user_body')
        const user_main_info = document.createElement('div')
        user_main_info.classList.add('user_main_info')

        const header2 = document.createElement('h2')
        const header3 = document.createElement('h3')
        const paragraph = document.createElement('p')
        const user_button_posts = document.createElement('div')

        user_button_posts.classList.add('user_button_posts')

        header2.innerHTML = `${value.name}<br>(${value.username}, ${value.id})`
        header3.innerText = value.email
        paragraph.innerHTML = `Address:<br>
            ${value.address.street}, ${value.address.suite}, ${value.address.city}, ${value.address.zipcode}<br>
            Geo:<br>
            ${value.address.geo.lat}, ${value.address.geo.lng}<br><br>
            ${value.phone}<br>
            ${value.website}<br><br>
            Company<br>
            ${value.company.name}, ${value.company.catchPhrase}, ${value.company.name}`
        user_button_posts.innerHTML = `<h5>SHOW POSTS</h5>`

        user_main_info.append(header2, header3)
        user_body.append(user_main_info, paragraph)
        user.append(user_body, user_button_posts)

        user_button_posts.onclick = function () {

            const posts = document.getElementsByClassName('posts')[0]
            posts.innerHTML = ''

            user_button_posts.style.background = '#fff'
            user_button_posts.style.boxSizing = 'border-box'
            user_button_posts.style.border = '5px solid #62952e'
            user_button_posts.style.color = '#62952e'

            fetch(`https://jsonplaceholder.typicode.com/users/${localStorage.getItem('user_id')}/posts`)
                .then(value => value.json())
                .then(value => {

                    for (const thisPost of value) {

                        const post = document.createElement('div')
                        const header_3 = document.createElement('h3')
                        const post_button = document.createElement('div')

                        post.classList.add('post')

                        header_3.innerText = thisPost.title
                        post_button.innerHTML = `<h4>SHOW DETAILS</h4>`
                        post_button.classList.add('post_button')

                        post.append(header_3, post_button)
                        posts.appendChild(post)

                        post_button.onclick = function () {
                            localStorage.setItem('post_id', thisPost.id)
                            window.location.href = 'post-details.html'
                        }
                    }
                })
        }

    })
