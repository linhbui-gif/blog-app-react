
const CounterUpContainer = () => {
    return (
        <div className="counterup_aera d-flex flex-wrap pt-100 pb-100">
            <div className="counterup_text  mb-lm-30px">
                <h3 className="counterup">1.200</h3>
                <p>
                    <i className="las la-user" />
                </p>
                <p>Người dùng</p>
            </div>
            <div className="counterup_text  mb-lm-30px">
                <h3 className="counterup">8.245</h3>
                <p>
                    <i className="las la-ambulance" />
                </p>
                <p>Download</p>
            </div>
            <div className="counterup_text ">
                <h3 className="counterup">865</h3>
                <p>
                    <i className="lab la-firefox" />
                </p>
                <p>Đánh giá</p>
            </div>
            <div className="counterup_text ">
                <h3 className="counterup">210</h3>
                <p>
                    <i className="lab la-github-alt" />
                </p>
                <p>Đối tác</p>
            </div>
        </div>
    )
}
export default CounterUpContainer;