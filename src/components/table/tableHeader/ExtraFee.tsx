import React, { useState } from "react";
import { Input, DatePicker, Button } from "antd";
import { RefreshCCW01 } from "untitledui-js-base";
import AddUser from "../../button-add/add";
import extraFee from '../../../types/extraFee';
import { PlusOutlined } from '@ant-design/icons';
const { Search } = Input;
const { RangePicker } = DatePicker;

interface DirInformationHeaderProps {
  onAddUser: (user: extraFee) => void;
  users: extraFee[];
}

const DirInformationHeader: React.FC<DirInformationHeaderProps> = ({ onAddUser, users }) => {
  const [open, setOpen] = useState(false);

  return (
      <div className="flex justify-between items-center mx-2 pb-2">
        <div className="flex gap-4 items-center">
          <h3 className="text-md font-medium">Нийт ({users.length})</h3>
          <RangePicker className="custom-range-picker w-[290px]" placeholder={['Jan 6, 2024', 'Jan 13, 2025']} />
        </div>
        <div className="flex gap-4 items-center">
          <Search placeholder="Хайх чингэлэгийн дугаар оруул" className="custom-searc w-[320px]" 
          />
          <Button
            icon={<RefreshCCW01 className="p-1 mt-1 transform scale-x-[-1]"/>} 
            className="flex items-center justify-center"
            style={{
              width: "50px",
              height: "32px",
            }}
          />
          <Button type="primary" 
                  icon={<PlusOutlined />} 
                  onClick={() => setOpen(true)}
          >
                  <span className="font-semibold text-[12px]">Шинэ</span>
          </Button>
          <AddUser
            open={open}
            onSave={(user: extraFee) => {
              onAddUser(user);
              setOpen(false); 
            }}
            onCancel={() => setOpen(false)}
          />
        </div>
      </div>
  );
};

export default DirInformationHeader;