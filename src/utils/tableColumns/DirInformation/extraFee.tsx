import { ProColumns } from '@ant-design/pro-components';
import { Button, Space } from 'antd';
import { EyeOutlined, EditOutlined } from '@ant-design/icons';
import { FiMinusCircle } from 'react-icons/fi';
import type extraFee from '../../../types/extraFee';

export const getextraFeeColumns = (
  handleEdit: (record: extraFee) => void,
  handleDelete: (record: extraFee) => void
): ProColumns<extraFee>[] => [
  {
    title: 'Ангилал код',
    dataIndex: 'categoryCode',
    key: 'categoryCode', 
    width: 150,
    sorter: true,
    showSorterTooltip: false,
  },
  {
    title: 'Хураамжийн код',
    dataIndex: 'feeCode',
    key: 'feeCode', 
    width: 150,
    sorter: true,
    showSorterTooltip: false,
  },
  {
    title: 'Хураамжийн нэр',
    dataIndex: 'feeName',
    key: 'feeName', 
    width: 300,
    sorter: true,
    showSorterTooltip: false,
  },
  {
    title: 'Хэмжих нэгж',
    dataIndex: 'unit',
    key: 'unit', 
    width: 200,
    sorter: true,
    showSorterTooltip: false,
  },
  {
    title: 'Хураамжийн дүн',
    dataIndex: 'amount',
    key: 'amount', 
    width: 200,
    sorter: true,
    showSorterTooltip: false,
  },
  {
    title: 'Үйлдэл',
    width: 40,
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