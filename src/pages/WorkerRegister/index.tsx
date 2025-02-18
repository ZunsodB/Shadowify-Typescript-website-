import Footer from "../../components/table/tableFooter/footer";
import Table from "../../components/table/index"
import TableHeader from "../../components/table/tableHeader/header";
import { useState, useEffect } from "react";
import Employee from "../../types/employee";
import { getEmployeeColumns } from "../../utils/tableColumns/workerRegister/workerRegister";
import { Modal } from "antd";

const Dashboard: React.FC = () => {
    const [data, setData] = useState<Employee[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, [data]);

    const handleAddUser = (newUser: Employee) => {
        const maxKey = Math.max(...data.map(item => parseInt(item.key)));
        const newKey = (maxKey + 1).toString();
        
        const userWithKey = {
          ...newUser,
          key: newKey,
          registeredDate: new Date().toISOString().split('T')[0].replace(/-/g, '/'),
          registeredBy: "Админ"
        };
    
        setData(prevData => [...prevData, userWithKey]);
      };

    const handleEdit = (record: Employee) => {
        console.log('Edit: ', record);
    };

    const handleDelete = (record: Employee) => {
        Modal.confirm({
            title: 'Устгах уу?',
            content: `${record.firstname} хэрэглэгчийг устгахдаа итгэлтэй байна уу?`,
            okText: 'Тийм',
            cancelText: 'Үгүй',
            onOk: () => {
                console.log('Removed: ', record)
            },
        });
    };

    const columns = getEmployeeColumns(handleEdit, handleDelete);

    return (
        <div className="m-6 p-6 bg-white rounded-lg">
            <TableHeader onAddUser={handleAddUser} users={data} />
            <Table
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

export default Dashboard;