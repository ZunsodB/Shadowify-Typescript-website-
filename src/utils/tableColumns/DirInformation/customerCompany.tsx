import { ProColumns } from '@ant-design/pro-components';
import { Button, Space, Switch } from 'antd';
import { EyeOutlined, EditOutlined } from '@ant-design/icons';
import { FiMinusCircle } from 'react-icons/fi';
import type CustomerCompany from '../../../types/customerCompany';

export const getCustomerCompanyColumns = (
  handleEdit: (record: CustomerCompany) => void,
  handleDelete: (record: CustomerCompany) => void
): ProColumns<CustomerCompany>[] => [
  {
    title: 'Товчлол',
    dataIndex: 'abbreviation',
    width: 200  ,
    sorter: true,
    showSorterTooltip: false,
  },
  {
    title: 'Компанийн нэр',
    dataIndex: 'companyName',
    width: 200,
    sorter: true,
    showSorterTooltip: false,
  },
  {
    title: 'Зууч эсэх',
    dataIndex: 'isBroker',
    width: 200,
    sorter: true,
    showSorterTooltip: false,
    render: (isBroker, record) => (
        <Switch 
          checked={isBroker}
        />
    ),
  },
  {
    title: 'Данс',
    dataIndex: 'account',
    width: 200,
    sorter: true,
    showSorterTooltip: false,
  },
  {
    title: 'Харилцагч дугаар',
    dataIndex: 'clientNumber',
    width: 200,
    sorter: true,
    showSorterTooltip: false,
  },
  {
    title: 'Үйлдэл',
    width: 50,
    key: 'action',
    render: (_, record) => (
      <Space size="small">
        <Button
          type="text"
          icon={<EyeOutlined />}
          title="Харах"
          className="custom-button1"
        />
        <Button
          type="text"
          icon={<EditOutlined />}
          onClick={() => handleEdit(record)}
          title="Засах"
          className="custom-button1"
        />
        <Button
          type="text"
          icon={<FiMinusCircle color="red" />}
          danger
          onClick={() => handleDelete(record)}
          title="Устгах"
          className="custom-button1"
        />
      </Space>
    ),
  },
];
