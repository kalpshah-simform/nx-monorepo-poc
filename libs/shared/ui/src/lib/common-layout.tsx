import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export interface NavItem {
  path: string;
  label: string;
}

export interface CommonLayoutProps {
  title: string;
  navItems: NavItem[];
  children?: React.ReactNode;
  backgroundColor?: string;
  borderColor?: string;
}

export function CommonLayout({ 
  title, 
  navItems, 
  children,
  backgroundColor = '#f5f5f5',
  borderColor = '#ccc'
}: CommonLayoutProps) {
  return (
    <div>
      <nav
        style={{
          padding: '1rem',
          borderBottom: `2px solid ${borderColor}`,
          backgroundColor,
        }}
      >
        <h2 style={{ margin: 0, marginBottom: '1rem', color: '#333' }}>
          {title}
        </h2>
        <div>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              style={{
                marginRight: '1rem',
                textDecoration: 'none',
                color: '#007acc',
                fontWeight: '500',
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      <div style={{ padding: '1rem' }}>
        {children}
        <Outlet />
      </div>
    </div>
  );
}

export default CommonLayout;