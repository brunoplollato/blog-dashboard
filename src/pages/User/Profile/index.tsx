import Breadcrumb from '../../../components/Breadcrumb';

function UserProfile() {
  return (
    <div className="w-full flex flex-col p-5 bg-gray-300">
      <Breadcrumb
        items={[
          { text: 'home', link: '/dashboard' },
          { text: 'user', link: '/user/profile' },
          { text: 'profile', link: '' },
        ]}
      />
      <h2 className="text-xl font-bold mb-5 flex">Profile</h2>
      <div className="flex gap-5">
        <div className="flex flex-col gap-5 w-full">
          <div className="bg-white border rounded-md p-4 border-slate-300 drop-shadow-sm">
            user profile
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
