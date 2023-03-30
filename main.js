let api = 'https://jsonplaceholder.typicode.com/users'
let btn = document.getElementById('btn1')

async function buscar() {
    const response = await fetch(api)
    const data = await response.json()
    localStorage.setItem('users', JSON.stringify(data))
}
buscar()

btn.addEventListener('click', function (e) {
    e.preventDefault()
    const users= JSON.parse(localStorage.getItem('users'))
    let email=document.querySelector('#email').value
    let user=document.querySelector('#user').value
    users.forEach(element => {
        if ((element.email==email)&&(element.username==user)) {
            location.href= './welcome.html'
        }
        else{
            document.querySelector('.error-container').classList.remove('remove')  
        }
    });
})
