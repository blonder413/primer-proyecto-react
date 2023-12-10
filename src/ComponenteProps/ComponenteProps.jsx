import './ComponentesProps.css'
import PropTypes from 'prop-types'

export const ComponenteProps = ({titulo = "título por defecto", subtitulo}) => {
    return(
        <>
            <h1>{titulo}</h1>
            <h2>{subtitulo}</h2>
        </>
    )
}

ComponenteProps.propTypes = {
    titulo: PropTypes.string.isRequired,
    subtitulo: PropTypes.number.isRequired
}

ComponenteProps.defaultProps = {
    titulo: "curso de react",
    subtitulo: 413
}