// Uncomment this line to use CSS modules
import './app.css';
import { CommonLayout, CommonRoutes, NxWelcome } from '@mycompany/shared-ui';
import { Mylib } from '@mycompany/mylib';

export function App() {
  console.log('Mylib loaded:', Mylib);

  const navItems = [
    { path: '/', label: 'Dashboard' },
    { path: '/users', label: 'Users' },
    { path: '/settings', label: 'Settings' },
  ];

  const customRoutes = [
    {
      path: "/",
      element: (
        <div>
          <NxWelcome title="@./admin-app - Admin Panel" />
        </div>
      )
    },
    {
      path: "/users",
      element: (
        <div>Users page - Admin app</div>
      )
    },
    {
      path: "/settings",
      element: (
        <div>Settings page - Admin app</div>
      )
    },
  ];

  return (
    <CommonLayout 
      title="Admin Panel" 
      navItems={navItems}
      backgroundColor="#f5f5f5"
      borderColor="#333"
    >
      <CommonRoutes routes={customRoutes} />
    </CommonLayout>
  );
}

export default App;
