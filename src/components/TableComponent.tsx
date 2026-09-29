import { type ListFormat } from "../types/ListFormat";

function TableComponent(props: ListFormat) {
    return <>
    <div className="col-sm-12 mb-3">
          <h2>{props.title}</h2>
          <table className="table table-bordered">
            <tbody>
            <tr>
                {props.items.map((item, index) => (
                    <td key={`${item}-${index}`}>{item}</td>
                ))}
            </tr>
            </tbody>
          </table>
        </div>
    </>
}

export default TableComponent