// Uncomment this line to use CSS modules
// import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import { Ui } from '@./ui'; // Import from the shared UI library

import { Route, Routes, Link } from 'react-router-dom';

export function App() {
  return (
    <div>
      <nav
        style={{
          padding: '1rem',
          borderBottom: '2px solid #333',
          backgroundColor: '#f5f5f5',
        }}
      >
        <h2 style={{ margin: 0, marginBottom: '1rem' }}>Admin Panel</h2>
        <Link to="/" style={{ marginRight: '1rem' }}>
          Dashboard
        </Link>
        <Link to="/users" style={{ marginRight: '1rem' }}>
          Users
        </Link>
        <Link to="/settings" style={{ marginRight: '1rem' }}>
          Settings
        </Link>
      </nav>

      <div style={{ padding: '1rem' }}>
        <NxWelcome title="@./admin-app - Admin Panel" />
        <Ui /> {/* Use the shared UI component */}
      </div>

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
