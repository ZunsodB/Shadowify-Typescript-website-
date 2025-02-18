import React from 'react';
import { LoginForm, ProFormText, ProFormCheckbox } from '@ant-design/pro-components';
import { useUser } from '../../context/UserContext';
import { UserRole } from '../../types/UserRole';
import { useNavigate } from 'react-router-dom';

const users = [
  { username: 'admin', password: 'admin', role: UserRole.Admin },
  { username: 'user', password: 'user', role: UserRole.User },
];

const Login: React.FC = () => {
  const { login } = useUser();
  const navigate = useNavigate();

  const handleLogin = async (values: { username: string; password: string }) => {
    const { username, password } = values;
    
    // Find the user based on username and password
    const foundUser = users.find(
      (user) => user.username === username && user.password === password
    );

    if (foundUser) {
      login(foundUser.role);
      
      // Navigate
      if (foundUser.role === UserRole.Admin) {
        navigate('/dashboard-admin');
      } else {
        navigate('/dashboard-cashier');
      }
      
      console.log('Logged in as:', foundUser.role);
    } else {
      console.log('Not registered');
    }
  };

  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#f0f2f5' }}>
      <LoginForm
        title="Shadowify"
        subTitle="Тавтай морил! Системд нэвтрэх мэдээллээ оруулна уу :)"
        onFinish={handleLogin}
      >
        <ProFormText
          name="username"
          style={{border: 'none',}}
          placeholder="Нэвтрэх нэр"
          rules={[{ required: true, message: 'Нэвтрэх нэр оруулна уу!' }]}
        />
        <ProFormText.Password
          name="password"
          placeholder="Нууц үг"
          rules={[{ required: true, message: 'Нууц үг оруулна уу!' }]}
        />
        <ProFormCheckbox name="remember">Remember me</ProFormCheckbox>
      </LoginForm>
    </div>
  );
};

export default Login;