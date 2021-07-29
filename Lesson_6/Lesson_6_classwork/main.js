

fetch('https://jsonplaceholder.typicode.com/posts')
.then(value => value.json())
.then(value => {
    const posts = document.getElementsByClassName('posts')[0]

    for (const thisPost of value) {

        const header_2_post = document.createElement('h2')
        const header_3_post = document.createElement('h3')
        const paragraph_post = document.createElement('p')

        header_2_post.innerText = thisPost.title
        header_3_post.innerHTML = `post ${thisPost.id}, by user ${thisPost.userId}`
        paragraph_post.innerText = thisPost.body

        const button = document.createElement('div')
        button.innerHTML = `<h5>SHOW COMMENTS</h5>`
        button.classList.add('comments_button')
        button.setAttribute('id', `button_${thisPost.id}`)

        const post_body = document.createElement('div')
        post_body.classList.add('post_body')

        const post = document.createElement('div')
        post.classList.add('post')
        post.setAttribute('id', `post_${thisPost.id}`)

        post_body.append(header_2_post, header_3_post, paragraph_post)
        post.append(post_body, button)
        posts.appendChild(post)
    }
})

fetch('https://jsonplaceholder.typicode.com/comments')
.then(value => value.json())
.then(value => {

    const buttons = document.getElementsByClassName('comments_button')
    const comments = document.getElementsByClassName('comments')[0]

    for (let i = 0; i < buttons.length; i++) {
        let button = buttons[i]

        button.onclick = function () {

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