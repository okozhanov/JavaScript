


fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {

        const users = document.getElementsByClassName('users')[0]

        for (const this_user of value) {

            const user = document.createElement('div')
            const header_2 = document.createElement('h2')
            const header_3 = document.createElement('h3')
            const user_button = document.createElement('div')

            user.classList.add('user')
            user.setAttribute('id', `user_${this_user.id}`)
            user_button.classList.add('user_button')
            user_button.setAttribute('id', `user_button_${this_user.id}`)

            header_2.innerText = this_user.name
            header_3.innerHTML = `user #${this_user.id}`
            user_button.innerHTML = '<h4>SHOW DETAILS</h4>'

            user.append(header_2, header_3, user_button)
            users.appendChild(user)

            user_button.onclick = function () {
                localStorage.setItem('user_id', this_user.id)
                window.location.href = 'user-details.html'
            }
        }

    })