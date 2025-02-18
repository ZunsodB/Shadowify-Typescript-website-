import React from "react";
import { Modal, Form, Input, Select, Button } from "antd";

const { Option } = Select;

interface AddUserProps {
  open: boolean;
  onCancel: () => void;
}

const AddUser: React.FC<AddUserProps> = ({ open, onCancel }) => {
  const [form] = Form.useForm();

  return (
    <Modal
      title={<div className="modal-title mb-5">Системд нэвтрэх бүртгэл үүсгэх</div>}
      open={open}
      onCancel={onCancel}
      footer={null}
    >
      <Form form={form} layout="vertical">
        <div style={{ display: "flex", gap: "20px"}}>
          <Form.Item
            name="lastName"
            label="Овог"
            rules={[{ required: true, message: "Овог оруулна уу" }]}
            style={{ flex: 1, }}
          >
            <Input className="custom-input" />
          </Form.Item>
          <Form.Item
            name="firstName"
            label="Нэр"
            rules={[{ required: true, message: "Нэр оруулна уу" }]}
            style={{ flex: 1 }}
          >
            <Input className="custom-input" />
          </Form.Item>
        </div>

        <div style={{ display: "flex", gap: "20px" }}>
          <Form.Item
            name="role"
            label="Үүрэг"
            rules={[{ required: true, message: "Үүрэг сонгоно уу" }]}
            style={{ flex: 1 }}
          >
            <Select>
              <Option value="Тээврийн менежер">Тээврийн менежер</Option>
              <Option value="Кассир">Кассир</Option>
              <Option value="Санхүү">Санхүү</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="regNumber"
            label="Регистрийн дугаар"
            rules={[
              { required: true, message: "Регистрийн дугаар оруулна уу" },
            ]}
            style={{ flex: 1 }}
          >
            <Input className="custom-input" />
          </Form.Item>
        </div>

        <div style={{ display: "flex", gap: "20px" }}>
          <Form.Item
            name="age"
            label="Нас"
            rules={[{ required: true, message: " Нас оруулна уу" }]}
            style={{ flex: 1 }}
          >
            <Input className="custom-input" />
          </Form.Item>
          <Form.Item
            name="gender"
            label="Хүйс"
            rules={[{ required: true, message: "Хүйс сонгоно уу" }]}
            style={{ flex: 1 }}
          > 
            <Select>
              <Option value="Эр">Эр</Option>
              <Option value="Эм">Эм</Option>
            </Select>
          </Form.Item>
        </div>

        <div style={{ display: "flex", gap: "20px" }}>
          <Form.Item
            name="email"
            label="Имэйл"
            rules={[
              {
                required: true,
                type: "email",
                message: " Уг мэйл-ээр нэвтрэх эрх үүснэ.",
              },
            ]}
            style={{ flex: 1, }}
          >
            <Input className="custom-input"/>
          </Form.Item>
          <Form.Item
            name="phone"
            label="Утас"
            rules={[{ required: true, message: "Утасны дугаар оруулна уу" }]}
            style={{ flex: 1 }}
          >
            <Input className="custom-input" />
          </Form.Item>
        </div>
        <div className="w-1/2 pr-[10px]">
          <Form.Item
            name="password"
            label="Cистемд нэвтрэх нууц үг"
            rules={[{ message: "Нууц үгээ оруулна уу", required: true }]}
          >
            <Input.Password className="custom-password-input"/>
          </Form.Item>
        </div>
        <div
          style={{ display: "flex", justifyContent: "flex-end", gap: "20px", }}
        >
          <Button onClick={onCancel}>Болих</Button>
          <Button type="primary" className="custom-button">
            Хадгалах
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default AddUser;