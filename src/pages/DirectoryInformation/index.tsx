import { useState, useEffect } from 'react';
import { Radio } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';

const DirectoryInformation = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('subtab1');

  const tabs = [
    {
      key: 'subtab1',
      title: 'Харилцагч компани',
    },
    {
      key: 'subtab2',
      title: 'Нэмэлт хураамж тохиргоо',
    },
    {
      key: 'subtab3',
      title: 'Харилцагчдын дансны тооцоо',
    },
    {
      key: 'subtab4',
      title: 'Э/Х Тасалбар хүчингүй болгох',
    },
  ];

  useEffect(() => {
    navigate(activeTab);
  }, [navigate]);

  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
    navigate(tabKey);
  };

  return (
    <div className="bg-[#E7EDEE] p-6">
      <div className="px-6">
        {tabs.map((tab) => (
          <Radio.Button
            key={tab.key}
            type="primary"
            style={{
              fontSize: '12px',
              fontWeight: '500',
              backgroundColor: activeTab === tab.key ? '#E6F7FF' : 'white',
              color: activeTab === tab.key ? '#1890FF' : '#344054',
            }}
            onClick={() => handleTabChange(tab.key)}
          >
            {tab.title}
          </Radio.Button>
        ))}
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default DirectoryInformation;