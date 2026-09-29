import { type ListFormat } from "../types/ListFormat";

function TudnivaloCard(props: ListFormat) {
    return <>
        <div className="row">
            <div className="col-sm-12 mb-3">
                <div className="card">
                    <div className="card-header">{props.title}</div>

                    <div className="card-body">
                        <ul>
                            {props.items.map((item, index) => (
                                <li key={`${item}-${index}`}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default TudnivaloCard