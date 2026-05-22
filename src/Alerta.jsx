function Alerta(props) {
    // Aqui usamos props.texto, enviada pelo componente App
    return (

        <div className="alert alert-warning" role="alert">
            { props.texto }
            className={`text-center ${ props.tipo}`}

        </div>





    );
}

export default Alerta;