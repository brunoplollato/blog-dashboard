import { useContext, useEffect } from 'react';
import Breadcrumb from '../../../components/Breadcrumb';
import {
  UserContext,
  UserDispatchContext,
} from '../../../contexts/UserContext';
import Input from '../../../components/Input';
import PageTitle from '../../../components/PageTitle';

function UserProfile() {
  const { user } = useContext(UserContext);
  const { setUser } = useContext(UserDispatchContext);

  const socialAccounts = (user && JSON?.parse(user?.socialAccounts)) || [];

  useEffect(() => {
    const fetchData = async () => {
      try {
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const renderSocialInputs = () => {
    const inputs = [];

    for (let i = 0; i < 4; i++) {
      const socialAccount = socialAccounts[i] || '';
      const labelText = socialAccount
        ? getCleanHostname(socialAccount)
        : 'Social';

      inputs.push(
        <p className="text-gray-600" key={i}>
          <Input
            type="text"
            name={`socialAccount-${i}`}
            id={`socialAccount-${i}`}
            hasLabel={true}
            labelFor={`socialAccount-${i}`}
            labelText={labelText as string}
            value={socialAccount}
            handleChange={handleInputChange}
            customClass="border rounded p-1 w-full"
          />
        </p>
      );
    }

    return inputs;
  };

  const getCleanHostname = (url: string) => {
    try {
      const parsedUrl = new URL(url);
      let hostname = parsedUrl.hostname.replace('www.', '');
      hostname = hostname.split('.com')[0];
      return hostname as string;
    } catch (error) {
      console.error('Invalid URL:', url);
      return null;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name.startsWith('socialAccount-')) {
      const index = parseInt(name.split('-')[1]);
      const newSocialAccounts = [...(JSON.parse(user?.socialAccounts) || [])];
      newSocialAccounts[index] = value;
      setUser((prevUser: User) => ({
        ...prevUser,
        socialAccounts: JSON.stringify(newSocialAccounts),
      }));
    } else {
      setUser((prevUser: User) => ({
        ...prevUser,
        [name]: value,
      }));
    }
  };

  return (
    <div className="w-full flex flex-col p-5 bg-gray-300">
      <Breadcrumb
        items={[
          { text: 'home', link: '/dashboard' },
          { text: 'user', link: '/user/profile' },
          { text: 'profile', link: '' },
        ]}
      />
      <PageTitle title={'Profile'} />
      <div className="flex gap-5">
        <div className="flex flex-col gap-5 w-full">
          <div className="bg-white border rounded-md p-4 border-slate-300 drop-shadow-sm">
            <div className="mb-4 text-center">
              <img
                src={user?.avatar}
                alt={`${user?.name}'s Avatar`}
                className="w-24 h-24 mx-auto rounded-full"
              />
              <h2 className="text-xl font-semibold mt-2">@{user?.name}</h2>
            </div>
            <div className="mb-8">
              <p className="text-md font-bold mb-2 text-gray-600">Bio </p>
              <textarea
                name="bio"
                value={user?.bio}
                // onChange={handleInputChange}
                className="w-full p-2 border rounded-lg h-[300px]"
              />
            </div>
            <div className="mb-2">
              <p className="text-gray-600">
                <Input
                  type="text"
                  name="site"
                  id="site"
                  hasLabel={true}
                  labelFor="site"
                  labelText="Website"
                  value={user?.site}
                  handleChange={handleInputChange}
                  customClass="border rounded p-1 w-full"
                />
              </p>
              {renderSocialInputs()}
              <p className="text-gray-600">
                <Input
                  type="text"
                  name="company"
                  id="company"
                  hasLabel={true}
                  labelFor="company"
                  labelText="Company"
                  value={user?.company}
                  handleChange={handleInputChange}
                  customClass="border rounded p-1 w-full"
                />
              </p>
              <p className="text-gray-600">
                <Input
                  type="text"
                  name="location"
                  id="location"
                  hasLabel={true}
                  labelFor="location"
                  labelText="Location"
                  value={user?.location}
                  handleChange={handleInputChange}
                  customClass="border rounded p-1 w-full"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
