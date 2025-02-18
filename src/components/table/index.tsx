import { ProTable } from '@ant-design/pro-components';
import { Modal } from 'antd';
import { useState, useEffect } from 'react';
import type Employee from '../../types/employee';
import EmployeeData from '../../assets/Data/Employee.json';
import { getEmployeeColumns } from '../../utils/tableColumns/workerRegister/workerRegister'; 

const EmployeeTable: React.FC = () => {
  const [data, setData] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      setData(EmployeeData);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleEdit = (record: Employee) => {
    console.log('Edit:', record);
  };

  const handleDelete = (record: Employee) => {
    Modal.confirm({
      title: 'Устгах уу?',
      content: `${record.firstname} хэрэглэгчийг устгахдаа итгэлтэй байна уу?`,
      okText: 'Тийм',
      cancelText: 'Үгүй',
      onOk: () => {
        setData(data.filter((item) => item.key !== record.key));
      },
    });
  };

  const columns = getEmployeeColumns(handleEdit, handleDelete);

  return (
    <div className="bg-white">
      <ProTable<Employee>
        dataSource={data}
        columns={columns}
        search={false}
        options={false}
        rowKey="key"
        loading={loading}
        pagination={false}
        className="mt-4"
      />
    </div>
  );
};

export default EmployeeTable;