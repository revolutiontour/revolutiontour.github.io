import { Space } from "antd"
import { NotFoundIcon } from "../../shared/icons"

export const List404 = ({msg}) => {
    return (
        <>
        <div className="d-flex flex-column justify-content-center align-items-center h-75">
            <div className="mb-5">
        <NotFoundIcon/>
            </div>
            <h4 className="text-center">Tidak ada list {msg},<br/>
Silahkan tambah data {msg}</h4>
        </div>
        </>
    )
}