import { FiInbox } from 'react-icons/fi';

function Notifications() {
  return (
    <div className="relative cursor-pointer">
      <div className="bg-lime-400 h-4 w-4 rounded-full flex items-center justify-center text-xs text-center text-green-900 absolute bottom-4 left-2">
        3
      </div>
      <FiInbox className="h-5 w-5 text-slate-300" />
    </div>
  );
}

export default Notifications;
