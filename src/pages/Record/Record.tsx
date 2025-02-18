import { ProTable } from '@ant-design/pro-components';
import { useState, useEffect } from 'react';
import type Record from '../../types/record';
import RecordData from '../../assets/Data/record.json';
import { getRecordColumns } from '../../utils/tableColumns/Record/index';
import Footer from '../../components/table/tableFooter/footer';
import Header from '../../components/table/tableHeader/Record'
const RecordInfo: React.FC = () => {
  const [data, setData] = useState<Record[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      setData(RecordData);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const columns = getRecordColumns();

  return (
    <div className="m-6 p-6 bg-white rounded-lg">
      <Header users={data}/>
      <ProTable
        dataSource={data}
        columns={columns}
        search={false}
        options={false}
        rowKey="key"
        loading={loading}
        pagination={false}
        className="mt-4"
        scroll={{ x: 'max-content' }} 
      />
      <Footer />
    </div>
  );
};

export default RecordInfo;