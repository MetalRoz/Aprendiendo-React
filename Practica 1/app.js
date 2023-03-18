const app = document.getElementById("app")

const h = React.createElement;

const Avatar = params => {
    const src = `https://randomuser.me/api/portraits/women/${params.id}.jpg`;

    return h('img', {src})
};

ReactDOM.render(h(Avatar, {id: 1}), app)


// const Avatar = params => {
//     const src = `https://randomuser.me/api/portraits/women/${params.id}.jpg`

//     return `
//     <picture>
//     <img src="${src}">
//     <em>${params.name}</em>
//     </picture>
//     `
// }

// app.innerHTML += Avatar ({ id: 5, name: "Andrea" })
// app.innerHTML += Avatar ({ id: 3, name: "Paula" })

// app.querySelectorAll("img").forEach(img => {
//     img.addEventListener("click", () => {
//         img.classList.toggle("disabled")
//     })
// })