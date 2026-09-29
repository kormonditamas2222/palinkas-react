import { type ImageFormat } from "../types/ImageFormat";

function ImageComponent(props: ImageFormat) {
    return <>
        <div className="col-sm-3 col-md-6 col-lg-3 mb-3 h-100">
            <h2>{props.title}</h2>
            <img src={props.source} className="img-fluid" alt={props.title} />
            <p className="mt-2">
                {props.description}
            </p>
        </div>
    </>
}

export default ImageComponent