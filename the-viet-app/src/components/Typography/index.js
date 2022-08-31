const TypoComponent = ({ name, description, titleBdr, checkDescription }) => {
    return (
        <div className="section-title">
            <h2 className="title">{name}</h2>
            {titleBdr ? <div className="title-bdr">
                <div className="left-bdr" />
                <div className="right-bdr" />
            </div> : ''}
            {checkDescription ? <p>{description}</p> : ''}
        </div>
    )
}
export default TypoComponent;