const app = document.getElementById("app")
const useState = React.useState



const Avatar = props => {
    const [enabled, setEnabled] = useState(true)

    const src = `https://randomuser.me/api/portraits/women/${props.id}.jpg`;

    const className = enabled ? "" : "disabled"

    return (
        <picture>
            <img onClick={() => {
                setEnabled(!enabled)
            }} className={className} src={src}></img>
            <em>{props.name}</em>
        </picture>
    )
};

ReactDOM.render(
    <div>
        <Avatar id={3} name="Ana"></Avatar>
        <Avatar id={8} name="Maria"></Avatar>
    </div>, app)


// app.querySelectorAll("img").forEach(img => {
//     img.addEventListener("click", () => {
//         img.classList.toggle("disabled")
//     })
// })