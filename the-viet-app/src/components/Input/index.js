const InputComponent = ({placeholder, type,className, ...rest}) => <input className={`input-default ${className}`} placeholder={placeholder} type={type} {...rest} />
export default InputComponent;