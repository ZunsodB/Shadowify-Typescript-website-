import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
const DashboardLayout: React.FC = () => {
    return (
        <div className="bg-[#E7EDEE] h-screen">
            <header>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default DashboardLayout;
