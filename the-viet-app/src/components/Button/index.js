const ButtonComponent = ({link,name,icon,iconClass,buttonType,className, ...rest}) =>
    buttonType == true ?
        <a href={link} className={`btn ${className}`}>{name} {icon ? <i className={`${iconClass}`}></i> : ''} </a> :
        <button className={`btn ${className}`}>{name}{icon ? <i className={`${iconClass}`}></i> : ''} </button>
export default ButtonComponent;