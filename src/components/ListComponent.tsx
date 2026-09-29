import { type ListFormat } from "../types/ListFormat";

function ListComponent(props: ListFormat) {
    return <>
    <div className="col-sm-4">
          <h2>{props.title}</h2>
          <ul className="list-group">
            {props.items.map((item, index) => (
                <li className="list-group-item" key={`${item}-${index}`}>{item}</li>
            ))}
          </ul>
        </div>
    </>
}

export default ListComponent