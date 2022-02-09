import { Space } from "antd"
import { NotFoundIcon } from "../../shared/icons"

export const List404 = () => {
    return (
        <>
        <div className="d-flex flex-column justify-content-center align-items-center h-75">
            <div className="mb-5">
        <NotFoundIcon/>
            </div>
            <h4 className="text-center">Tidak ada list Jadwal,<br/>
Silahkan tambah data Jadwal Tour</h4>
        </div>
        </>
    )
}