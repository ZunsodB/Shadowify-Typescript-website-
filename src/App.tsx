import { BrowserRouter } from 'react-router-dom'
import MainRoutes from './routes'
import { ConfigProvider } from 'antd'
import mnMN from 'antd/es/locale/mn_MN'
import { UserProvider } from './context/UserContext'
export default function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <ConfigProvider
          locale={mnMN}
          theme={{
            token: {
              fontFamily: "Inter, sans-serif",
              colorPrimary: "#0077F4",
            },
            components: {},
          }}
        >
        <div className=''>
          <MainRoutes/>
        </div>
        </ConfigProvider>
      </BrowserRouter>
    </UserProvider>
  )
}
