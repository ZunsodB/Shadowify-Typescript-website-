import { ProTable } from '@ant-design/pro-components';
import { useState, useEffect } from 'react';
import type extraFee from '../../types/extraFee';
import extraFeeData from '../../assets/Data/extraFee.json';
import { getextraFeeColumns } from '../../utils/tableColumns/DirInformation/extraFee'; 
import TableHeader from '../../components/table/tableHeader/ExtraFee';
import Footer from '../../components/table/tableFooter/footer';
const ExtraFee: React.FC = () => {
  const [data, setData] = useState<extraFee[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      setData(extraFeeData);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleAddUser = (newUser: extraFee) => {
    console.log(newUser)
  };

  const handleEdit = (record: extraFee) => {
    console.log('Edit:', record);
  };

  const handleDelete = (record: extraFee) => {
    console.log(record)
  };

  const columns = getextraFeeColumns(handleEdit, handleDelete);

  return (
    <div className="m-6 p-6 bg-white rounded-lg">
            <TableHeader onAddUser={handleAddUser} users={data} />
            <ProTable
                dataSource={data}
                columns={columns}
                search={false}
                options={false}
                rowKey="key"
                loading={loading}
                pagination={false}
                className="mt-4"
            />
            <Footer/>
    </div>
  );
};

export default ExtraFee;