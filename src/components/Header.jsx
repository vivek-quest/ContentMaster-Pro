import { RiNotification3Line, RiUserLine } from 'react-icons/ri';
import { trackEvent } from '../services/questSdk';

export function Header() {
  const handleProfileClick = () => {
    trackEvent('profile_click', {});
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <h2 className="text-xl font-semibold text-gray-800">Welcome back, Admin</h2>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <RiNotification3Line className="w-6 h-6 text-gray-600" />
          </button>
          <button 
            className="p-2 hover:bg-gray-100 rounded-full"
            onClick={handleProfileClick}
          >
            <RiUserLine className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
}