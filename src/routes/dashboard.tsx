import { lazy } from "react";
const DashboardPage = lazy(() => import("../pages/WorkerRegister"));
const AreaRegisterPage = lazy(() => import("../pages/AreaRegister"));
const DirInformationPage = lazy(() => import("../pages/DirectoryInformation"));
const RecordPage = lazy(() => import("../pages/Record"));

//subtab components
// const CargoApproach = lazy(() => import("../pages/AreaRegister/cargoApproach"));
// const Balance = lazy(() => import("../pages/AreaRegister/balance"));
// const Arrived = lazy(() => import("../pages/AreaRegister/arrived"));

//DirectoryInformation
const CustomerCompanyPage = lazy(() => import("../pages/DirectoryInformation/customerCompany"));
const ExtraFee = lazy(() => import("../pages/DirectoryInformation/extraFee"));
const Account = lazy(() => import("../pages/DirectoryInformation/account"));
const CancelTicket = lazy(() => import("../pages/DirectoryInformation/cancelTicket"));

//Record
const Record = lazy(() => import("../pages/Record/Record"));

export const dashboardRoutes = [
  {
    key: "dashboard/Ажилчдын-бүртгэл",
    path: "Ажилчдын-бүртгэл",
    element: <DashboardPage />
  },
  {
    key: "dashboard/Талбайн-бүртгэл",
    path: "Талбайн-бүртгэл",
    element: <AreaRegisterPage />
  },
  {
    key: "dashboard/Лавлах-мэдээлэл",
    path: "Лавлах-мэдээлэл",
    element: <DirInformationPage />,
    children: [
      {
        key: "dashboard/Лавлах-мэдээлэл/subtab1",
        path: "subtab1",
        element: <CustomerCompanyPage />
      },
      {
        key: "dashboard/Лавлах-мэдээлэл/subtab2",
        path: "subtab2",
        element: <ExtraFee />
      },
      {
        key: "dashboard/Лавлах-мэдээлэл/subtab3",
        path: "subtab3",
        element: <Account />
      },
      {
        key: "dashboard/Лавлах-мэдээлэл/subtab4",
        path: "subtab4",
        element: <CancelTicket />
      }
    ]
  },
  {
    key: "dashboard/Тайлан",
    path: "Тайлан",
    element: <RecordPage />,
    children: [
      {
        key: "dashboard/Тайлан/subtab1",
        path: "subtab1",
        element: <Record />
      },
    ]
  }
];