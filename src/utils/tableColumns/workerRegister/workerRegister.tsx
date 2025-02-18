import { ProColumns } from '@ant-design/pro-components';
import { Tag, Button, Space } from 'antd';
import { EyeOutlined, EditOutlined } from '@ant-design/icons';
import { FiMinusCircle } from 'react-icons/fi';
import type Employee from '../../../types/employee';
import handleView from '../../../components/button-viewer/viewer';

const getRoleColor = (role: string): string => {
  const colorMap: Record<string, string> = {
    'Тээврийн менежер': 'blue',
    'Кассир': 'orange',
    'Санхүү': 'pink',
  };
  return colorMap[role] || 'default'; // Default fallback color
};

export const getEmployeeColumns = (
  handleEdit: (record: Employee) => void,
  handleDelete: (record: Employee) => void
): ProColumns<Employee>[] => [
  {
    title: 'Овог',
    dataIndex: 'lastname',
    width: 100,
    sorter: true,
    showSorterTooltip: false,
  },
  {
    title: 'Нэр',
    dataIndex: 'firstname',
    width: 100,
    sorter: true,
    showSorterTooltip: false,
  },
  {
    title: 'Үүрэг',
    dataIndex: 'role',
    sorter: true,
    showSorterTooltip: false,
    width: 150,
    align: 'center',
    render: (_, record) => (
      <Tag color={getRoleColor(record.role)} style={{ border: 'none' }}>
        {record.role}
      </Tag>
    ),
  },
  {
    title: 'Регистрийн дугаар',
    dataIndex: 'registerNumber',
    width: 150,
    sorter: true,
    showSorterTooltip: false,
  },
  {
    title: 'Нас',
    dataIndex: 'age',
    width: 80,
    sorter: true,
    showSorterTooltip: false,
  },
  {
    title: 'Хүйс',
    dataIndex: 'gender',
    width: 80,
    sorter: true,
    showSorterTooltip: false,
  },
  {
    title: 'Утас',
    dataIndex: 'phone',
    width: 120,
    sorter: true,
    showSorterTooltip: false,
  },
  {
    title: 'Имэйл',
    dataIndex: 'email',
    width: 180,
    sorter: true,
    showSorterTooltip: false,
  },
  {
    title: 'Бүртгэсэн огноо',
    dataIndex: 'registeredDate',
    width: 160,
    sorter: true,
    showSorterTooltip: false,
  },
  {
    title: 'Бүртгэсэн ажилтан',
    dataIndex: 'registeredBy',
    width: 160,
    sorter: true,
    showSorterTooltip: false,
  },
  {
    title: 'Үйлдэл',
    width: 150,
    key: 'action',
    render: (_, record) => (
      <Space size="small">
        <Button
          type="text"
          icon={<EyeOutlined />}
          onClick={() => handleView(record)} // Open the view modal
          title="Харах"
          className="custom-button1"
        />
        <Button
          type="text"
          icon={<EditOutlined />}
          onClick={() => handleEdit(record)} // Trigger edit functionality
          title="Засах"
          className="custom-button1"
        />
        <Button
          type="text"
          icon={<FiMinusCircle color="red" />}
          danger
          onClick={() => handleDelete(record)} // Trigger delete functionality
          title="Устгах"
          className="custom-button1"
        />
      </Space>
    ),
  },
];
