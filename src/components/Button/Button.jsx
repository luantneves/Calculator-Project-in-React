import './Button.css';

export default props => {
    return(
        <button className={`button
            ${props.double ? 'double' : ''}
            ${props.triple ? 'triple' : ''}
            ${props.operation ? 'operation' : ''}
         `}
         onClick={e => props.click && props.click(props.label)}>
            {props.label}
        </button>
    )
}