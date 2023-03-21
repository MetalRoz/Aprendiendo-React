const app = document.getElementById("app")
const useState = React.useState



const Avatar = ({ id, name = "persona", size }) => {
    const [enabled, setEnabled] = useState(true)

    const src = `https://randomuser.me/api/portraits/women/${id}.jpg`;

    const imgClassName = enabled ? "" : "disabled"

    let pictureClassName = ""

    if (size === "small") {
        pictureClassName = "is-small"
    }
    else if (size === "large") {
        pictureClassName = "is-large"
    }

    return (
        <picture className={pictureClassName}>
            {
                id ? (
                    <img onClick={() => {
                        setEnabled(!enabled)
                    }} className={imgClassName} src={src}></img>
                ) : <i>sin imagen</i>
            }

            <em>{enabled ? name : "Desactivada"}</em>
        </picture>
    )
};

function Contador() {
    const [contadorValor, contadorAct] = useState(0)
    const [numeroVeces, vecesAct] = useState(0)

    // let contadorState = useState(0)
    // let contadorValor = contadorState[0]
    // let contadorMod = contadorState[1]
    return (
        <div>
            <span>{contadorValor}</span>
            <button onClick={() =>{
                contadorAct(contadorValor + 1)
                vecesAct(numeroVeces + 1)
            }}>Incrementar +</button>

            <button onClick={() =>{
                contadorAct(contadorValor - 1)
                vecesAct(numeroVeces + 1)
            }}>Decrementar</button>
            <p>Número de clicks: {numeroVeces}</p>
        </div>
    )
}

ReactDOM.render(
    <div>
        <Contador></Contador>
    </div>, app
    // <div>
    //     <Avatar id={3} name="Ana" size="small"></Avatar>
    //     <Avatar id={8} name="Maria"></Avatar>
    //     <Avatar id={4} name="Sara" size="large"></Avatar>
    // </div>, app
)


// app.querySelectorAll("img").forEach(img => {
//     img.addEventListener("click", () => {
//         img.classList.toggle("disabled")
//     })
// })