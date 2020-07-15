let userName = prompt("Please Enter A Name:")


fetch("https://api.github.com/users/${userName}")
.then(response=> response.json())
.then(data =>
    {
        console.log(data)
        document.getElementById('name').innerText = data.login
        document.getElementById('html').innerText = data.html_url
        document.getElementById('Repos').innerText = data.repos_url
        document.getElementById('avatar').innerText = data.avatar_url
    })
.catch(err => console.log(err))