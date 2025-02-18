import React from "react";
import { Dropdown, Space, DatePicker, Button, Menu } from "antd";
import { DownOutlined } from '@ant-design/icons';
import Record from '../../../types/record';

const { RangePicker } = DatePicker;

interface RecordHeaderProps {
  users: Record[];
}

const RecordHeader: React.FC<RecordHeaderProps> = ({ users }) => {
  const menuProps = (
    <Menu>
      <Menu.Item key="1">Ачилт</Menu.Item>
      <Menu.Item key="2">Сунгалт авто гаралтаар</Menu.Item>
      <Menu.Item key="3">Олголт</Menu.Item>
      <Menu.Item key="4">Сунгалт олголтоор</Menu.Item>
      <Menu.Item key="5">Ведомость</Menu.Item>
      <Menu.Item key="6">Автог аралт</Menu.Item>
      <Menu.Item key="7">Машин оролт</Menu.Item>
      <Menu.Item key="8">Бусад</Menu.Item>
      <Menu.Item key="9">Машин хадгаламж</Menu.Item>
      <Menu.Item key="10">Вагон оролт</Menu.Item>
    </Menu>
  );

  return (
    <div className="flex justify-between items-center mx-2 pb-2">
      <div className="flex gap-4 items-center">
        <h3 className="text-md font-medium">Нийт ({users.length})</h3>
        <RangePicker className="custom-range-picker w-[290px]" placeholder={['Jan 6, 2024', 'Jan 13, 2025']} />
      </div>
      <div className="flex gap-4 items-center">
        <Dropdown overlay={menuProps}>
          <Button className="w-50">
            <Space>
              Бүгд
              <DownOutlined/>
            </Space>
          </Button>
        </Dropdown>
      </div>
    </div>
  );
};

export default RecordHeader;
