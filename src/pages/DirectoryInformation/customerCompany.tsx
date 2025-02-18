import { ProTable } from '@ant-design/pro-components';
import { useState, useEffect } from 'react';
import type CustomerCompany from '../../types/customerCompany';
import CustomerCompanyData from '../../assets/Data/customerCompany.json';
import { getCustomerCompanyColumns } from '../../utils/tableColumns/DirInformation/customerCompany'; 
import TableHeader from '../../components/table/tableHeader/DirInformation';
import Footer from '../../components/table/tableFooter/footer';
const CustomerCompanyPage: React.FC = () => {
  const [data, setData] = useState<CustomerCompany[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      setData(CustomerCompanyData);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleAddUser = (newUser: CustomerCompany) => {
    console.log(newUser)
  };

  const handleEdit = (record: CustomerCompany) => {
    console.log('Edit:', record);
  };

  const handleDelete = (record: CustomerCompany) => {
    console.log(record)
  };

  const columns = getCustomerCompanyColumns(handleEdit, handleDelete);

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

export default CustomerCompanyPage;