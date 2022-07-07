const container = document.querySelector('.grid_container')
const searchBtn = document.querySelector('button')
const searchUser = document.querySelector('input')


function showUser(user){
    const div = document.createElement('div')
    div.classList.add('user')
    const name = user.name
    const p_name = document.createElement('p')
    p_name.textContent = name
    div.append(p_name)
    const p_email = document.createElement('p')
    p_email.textContent = `email:${user.email}`
    div.append(p_email)
    const p_address = document.createElement('p')
    p_address.textContent = `Address: ${user.address.city}, ${user.address.street}, ${user.address.suite}, zipcode:${user.address.zipcode}`
    div.append(p_address)
    const p_contact = document.createElement('p')
    p_contact.textContent = `Contact: ${user.phone} or visit my website: ${user.website}`
    div.append(p_contact)
    const p_work = document.createElement('p')
    p_work.textContent = `Company name: ${user.company.name}, title: ${user.company.catchPhrase}`
    div.append(p_work)
    container.append(div)
}


async function fetchUsers(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    users.forEach(user=>{
        showUser(user)
    })


    searchBtn.addEventListener('click', function(ev){
        ev.preventDefault()

        let displayUsers = []
        users.forEach(user=>{
            console.log(user)
            if(user.name.toUpperCase().includes((searchUser.value).toUpperCase())){
                displayUsers.push(user)
            }
        })

        console.log(displayUsers)

        if(displayUsers.length !== 0){
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }

            displayUsers.forEach(user=>{
                showUser(user)
            })
        }
    })

}

fetchUsers()




