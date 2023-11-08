let btn = document.getElementById("btn");
let inp = document.getElementById("inp");
let main = document.getElementById("main");
let load = document.getElementById("loading");
btn.addEventListener("click", myfnc)
function myfnc() {
    main.innerHTML = ""
    if (inp.value == "") {
        alert("İstifadəçi adı daxil edin")
    } else {
        let api = `https://api.github.com/users/${inp.value}`
        fetch(api)
            .then((response) => response.json())
            .then((data) => {
                if (data.name === undefined && data.html_url === undefined) {
                    let div = document.createElement("div")
                    div.className = "container-main"
                    div.innerHTML = `
                   <p class="alert"> İstifadəçi adı tapılmadı !</p>
                    `
                    main.appendChild(div)
                } else {
                    main.innerHTML = ` <video autoplay muted src="./assets/image/free-github-2-8472016-6671431.mp4"></video>`
                    setTimeout(() => {
                        main.innerHTML = ''
                        let div = document.createElement("div")
                        div.className = "container-main"
                        div.innerHTML = `
                        <h2>Name : <span class="name">${data.name}</span></h2>
                        <p>Github adress: <a href="${data.html_url}" target="_blank">${data.html_url} </a></p>
                        <p>Followers : ${data.followers}</p>
                        <p>following : ${data.following}</p>
                        <img class="img" src="${data.avatar_url}" alt="photo">
                        `
                        main.appendChild(div)
                    }, 1500)
                }
            })
            .catch((err) => console.log(err))
        inp.value = ""
    }
}