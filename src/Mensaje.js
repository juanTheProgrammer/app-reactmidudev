const Mensaje = (props) => {      // Construyendo un modulo
    console.log(props)
    return <h1 style={{ color: props.color }}>{props.message}
    </h1>
}
export default Mensaje