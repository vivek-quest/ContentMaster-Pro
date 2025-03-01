import { NavLink } from 'react-router-dom';
import { RiDashboardLine, RiFileTextLine, RiImageLine, RiLineChartLine, RiSettings4Line } from 'react-icons/ri';
import { trackEvent } from '../services/questSdk';

export function Sidebar() {
  const handleNavClick = (route) => {
    trackEvent('navigation_click', { route });
  };

  return (
    <div className="w-64 bg-white shadow-lg">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800">CMS</h1>
      </div>
      <nav className="mt-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 ${
              isActive ? 'bg-gray-100' : ''
            }`
          }
          onClick={() => handleNavClick('dashboard')}
        >
          <RiDashboardLine className="mr-3" />
          Dashboard
        </NavLink>
        <NavLink
          to="/posts"
          className={({ isActive }) =>
            `flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 ${
              isActive ? 'bg-gray-100' : ''
            }`
          }
          onClick={() => handleNavClick('posts')}
        >
          <RiFileTextLine className="mr-3" />
          Posts
        </NavLink>
        <NavLink
          to="/media"
          className={({ isActive }) =>
            `flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 ${
              isActive ? 'bg-gray-100' : ''
            }`
          }
          onClick={() => handleNavClick('media')}
        >
          <RiImageLine className="mr-3" />
          Media
        </NavLink>
        <NavLink
          to="/analytics"
          className={({ isActive }) =>
            `flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 ${
              isActive ? 'bg-gray-100' : ''
            }`
          }
          onClick={() => handleNavClick('analytics')}
        >
          <RiLineChartLine className="mr-3" />
          Analytics
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 ${
              isActive ? 'bg-gray-100' : ''
            }`
          }
          onClick={() => handleNavClick('settings')}
        >
          <RiSettings4Line className="mr-3" />
          Settings
        </NavLink>
      </nav>
    </div>
  );
}