fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
        const users = document.getElementsByClassName('users')

        for (const thisUser of value) {
            const user = document.createElement('div')
            const user_body = document.createElement('div')
            user.classList.add('user')
            user.setAttribute('id', `user_${thisUser.id}`)
            user_body.classList.add('user_body')

            const header2 = document.createElement('h2')
            const header3 = document.createElement('h3')
            const paragraph = document.createElement('p')
            const user_button = document.createElement('div')
            user_button.classList.add('user_button')

            header2.innerHTML = `${thisUser.name}<br>(${thisUser.username}, ${thisUser.id})`
            header3.innerText = thisUser.email
            paragraph.innerHTML = `Address:<br>
            ${thisUser.address.street}, ${thisUser.address.suite}, ${thisUser.address.city}, ${thisUser.address.zipcode}<br>
            Geo:<br>
            ${thisUser.address.geo.lat}, ${thisUser.address.geo.lng}<br><br>
            ${thisUser.phone}<br>
            ${thisUser.website}<br><br>
            Company<br>
            ${thisUser.company.name}, ${thisUser.company.catchPhrase}, ${thisUser.company.name}`
            user_button.innerHTML = `<h5>VIEW POSTS</h5>`

            user_body.append(header2, header3, paragraph)
            user.append(user_body, user_button)
            users[0].appendChild(user)
        }
    })

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(value => {
        const posts = document.getElementsByClassName('posts')[0]

        const user_buttons = document.getElementsByClassName('user_button')

        for (let i = 0; i < user_buttons.length; i++) {
            const user_button = user_buttons[i];

            user_button.onclick = function () {

                user_button.style.background = '#847a07'
                user_button.style.color = '#fff'

                posts.innerHTML = ''

                for (let j = 0; j < value.length; j++) {
                    const thisPost = value[j];

                    if (thisPost.userId === i + 1) {
                        const header_2_post = document.createElement('h2')
                        const header_3_post = document.createElement('h3')
                        const paragraph_post = document.createElement('p')

                        header_2_post.innerText = thisPost.title
                        header_3_post.innerHTML = `post ${thisPost.id}, by user ${thisPost.userId}`
                        paragraph_post.innerText = thisPost.body

                        const post_button = document.createElement('div')
                        post_button.innerHTML = `<h5>SHOW COMMENTS</h5>`
                        post_button.classList.add('post_button')
                        post_button.setAttribute('id', `button_${thisPost.id}`)

                        const post_body = document.createElement('div')
                        post_body.classList.add('post_body')

                        const post = document.createElement('div')
                        post.classList.add('post')
                        post.setAttribute('id', `post_${thisPost.id}`)

                        post_body.append(header_2_post, header_3_post, paragraph_post)
                        post.append(post_body, post_button)
                        posts.appendChild(post)

                        fetch('https://jsonplaceholder.typicode.com/comments')
                            .then(value => value.json())
                            .then(value => {

                                const post_buttons = document.getElementsByClassName('post_button')
                                const comments = document.getElementsByClassName('comments')[0]

                                for (let i = 0; i < post_buttons.length; i++) {
                                    const post_button = post_buttons[i]

                                    post_button.onclick = function () {

                                        post_button.style.background = '#41651a'
                                        post_button.style.color = '#fff'

                                        comments.innerHTML = ''

                                        for (const thisComment of value) {
                                            if (thisComment.postId === i + 1) {
                                                const comment = document.createElement('div')
                                                comment.classList.add('comment')

                                                const header_2_comment = document.createElement('h2')
                                                const header_3_comment = document.createElement('h3')
                                                const header_4_comment = document.createElement('h4')
                                                const paragraph_comment = document.createElement('p')

                                                header_2_comment.innerText = thisComment.name
                                                header_3_comment.innerHTML = `by user ${thisComment.email}`
                                                header_4_comment.innerHTML = `post ${thisComment.postId}, comment ${thisComment.id}`
                                                paragraph_comment.innerText = thisComment.body

                                                comment.append(header_2_comment, header_3_comment, header_4_comment, paragraph_comment)
                                                comments.appendChild(comment)
                                            }
                                        }
                                    }
                                }
                            })
                    }
                }
            }
        }
    })

