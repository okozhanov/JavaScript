
goBack = document.getElementsByClassName('go_back')[0]
goBack.onclick = function () {
    window.location.href = 'user-details.html'
}


fetch(`https://jsonplaceholder.typicode.com/posts/${localStorage.getItem('post_id')}`)
    .then(value => value.json())
    .then(value => {

        const post = document.getElementsByClassName('post')[0]

        const post_main_info = document.createElement('div')
        post_main_info.classList.add('post_main_info')

        const header_1 = document.createElement('h1')
        const header_2 = document.createElement('h2')
        const paragraph = document.createElement('p')

        header_1.innerText = value.title
        header_2.innerHTML = `post ${value.id}, by user ${value.userId}`
        paragraph.innerText = value.body

        post_main_info.append(header_1, header_2)
        post.append(post_main_info, paragraph)

    })

fetch(`https://jsonplaceholder.typicode.com/posts/${localStorage.getItem('post_id')}/comments`)
    .then(value => value.json())
    .then(value => {

        const comments = document.getElementsByClassName('comments')[0]

        for (const thisComment of value) {

            const comment = document.createElement('div')
            const header_2 = document.createElement('h2')
            const header_4 = document.createElement('h4')
            const header_5 = document.createElement('h5')
            const paragraph = document.createElement('p')

            comment.classList.add('comment')

            header_2.innerText = thisComment.name
            header_4.innerHTML = `comment ${thisComment.id}, to the post ${thisComment.postId}`
            header_5.innerHTML = `by user ${thisComment.email}`
            paragraph.innerText = thisComment.body

            comment.append(header_2, paragraph, header_4, header_5)
            comments.appendChild(comment)
        }
    })