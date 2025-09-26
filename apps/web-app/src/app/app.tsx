import './app.css';
import { CommonLayout, CommonRoutes, NxWelcome, ComponentsDemo } from '@mycompany/shared-ui';

export function App() {
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/components', label: 'Components Demo' },
  ];

  const customRoutes = [
    {
      path: "/",
      element: (
        <div>
          <NxWelcome title="@./web-app" />
        </div>
      )
    },
    {
      path: "/about",
      element: (
        <div>About page - Web app</div>
      )
    },
    {
      path: "/dashboard",
      element: (
        <div>Dashboard page - Web app</div>
      )
    },
    {
      path: "/components",
      element: <ComponentsDemo />
    }
  ];

  return (
    <CommonLayout 
      title="Web Application" 
      navItems={navItems}
      backgroundColor="#f0f8ff"
      borderColor="#007acc"
    >
      <CommonRoutes routes={customRoutes} />
    </CommonLayout>
  );
}

export default App;
