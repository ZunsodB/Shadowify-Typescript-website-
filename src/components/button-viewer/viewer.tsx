import type Employee from "../../types/employee";
import { Modal } from "antd";
const handleView = (record: Employee) => {
    Modal.info({
        title: 'Ажилтны мэдээлэл',
        content: (
          <div>
            <p>Овог: {record.lastname}</p>
            <p>Нэр: {record.firstname}</p>
            <p>Үүрэг: {record.role}</p>
            <p>Регистрийн дугаар: {record.registerNumber}</p>
            <p>Утас: {record.phone}</p>
            <p>Имэйл: {record.email}</p>
          </div>
        ),
        width: 500,
    });
}
export default handleView;