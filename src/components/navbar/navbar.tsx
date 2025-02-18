import { Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Logo from "../../assets/image/Logo(shadowify).png";
import { UseCurrentTime } from "../../utils/Time&Date/timeUtils";
import { UseCurrentDate } from "../../utils/Time&Date/dateUtils";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import menuData from "../../layout/dashboard/menu";
import { useEffect, useState } from "react";


const Navbar: React.FC = () => {
  const { userStatus, logout } = useUser();
  const [selectedPath, setSelectedPath] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(()=>{
    if(selectedPath) navigate(selectedPath);
  }, [selectedPath, navigate]);

  //Admin, cashier эсэхт тулгуурлан анхны path-г тохируулна
  useEffect(() => {
    if (userStatus === "admin") {
      setSelectedPath("Ажилчдын-бүртгэл");
    }else 
    if (userStatus === "user") {
      setSelectedPath("Лавлах-мэдээлэл");
    }
  }, [userStatus]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleMenuClick = (path: string) => {
    setSelectedPath(path);
  };

  const userMenu = (
    <div className="bg-white shadow-md rounded-lg p-2 w-40">
      <button className="block w-full text-left p-2 hover:bg-gray-100">Profile</button>
      <button className="block w-full text-left p-2 hover:bg-gray-100"
        onClick={handleLogout}>Logout</button>
    </div>
  );

  const renderMenuItems = () => {
    return menuData.map((item) => (
      <button
        key={item.path}
        className={`relative text-sm mr-10 font-semibold ${
          selectedPath === item.path
            ? "text-white after:content-[''] after:absolute after:bottom-[-27px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-0 after:h-0 after:border-l-8 after:border-r-8 after:border-b-8 after:border-l-transparent after:border-r-transparent after:border-b-[#E7EDEE]"
            : "text-[#B3B3B3] hover:text-gray-200"
        }`}
        onClick={() => handleMenuClick(`${item.path}`)}
      >
        {item.name}
      </button>
    ));
  };
  
  
  
  

  if (userStatus === "admin") {
    return (
      <div className="flex items-center justify-between font-semibold bg-[#0077F4] w-full p-4 h-[72px]">
        <div className="flex flex-row gap-4 text-white items-center">
          <img src={Logo} alt="logo" className="relative h-20 mb-2" />
          <button
            className="relative text-sm mr-10 font-semibold text-white after:content-[''] after:absolute after:bottom-[-27px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-0 after:h-0 after:border-l-8 after:border-r-8 after:border-b-8 after:border-l-transparent after:border-r-transparent after:border-b-[#E7EDEE]"
          >
            Ажилчдын бүртгэл
          </button>
        </div>
        <div className="flex flex-row text-white font-light text-sm gap-4 items-center">
          <p><UseCurrentDate/></p>
          <p><UseCurrentTime/></p>
          <div className="flex items-center text-white gap-3 cursor-pointer mr-3">
            <div className="bg-[#69C0FF] text-white w-[32px] h-[32px] flex items-center justify-center rounded-full font-bold">
              BD
            </div>
            <Dropdown overlay={userMenu} trigger={["click"]}>
              <div className="flex flex-col">
                <span className="text-white text-xs font-medium">Munkhjin</span>
                <span className="text-white text-xs font-light">Админ</span>
              </div>
            </Dropdown>
            <DownOutlined/>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-between font-semibold bg-[#0077F4] w-full p-4 h-[72px]">
        <div className="flex flex-row gap-4 text-white items-center">
          <img src={Logo} alt="logo" className="relative h-20 mb-2" />
          {renderMenuItems()}
        </div>
        <div className="flex flex-row text-white font-light text-sm gap-4 items-center">
          <p><UseCurrentDate/></p>
          <p><UseCurrentTime/></p>
          <div className="flex items-center text-white gap-3 cursor-pointer mr-3">
            <div className="bg-[#69C0FF] text-white w-[32px] h-[32px] flex items-center justify-center rounded-full font-bold">
              BD
            </div>
            <Dropdown overlay={userMenu} trigger={["click"]}>
              <div className="flex flex-col">
                <span className="text-white text-xs font-medium">Munguu</span>
                <span className="text-white text-xs font-light">Санхүү</span>
              </div>
            </Dropdown>
            <DownOutlined/>
          </div>
        </div>
      </div>
    );
  }
};

export default Navbar;