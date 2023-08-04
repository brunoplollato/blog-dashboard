import logo from '../assets/images/logo.svg';

function Logo() {
  return (
    <div className="flex gap-4">
      <img src={logo} alt="logo" />
      <p className="text-indigo-700 font-bold text-xl uppercase">Limitless</p>
    </div>
  );
}

export default Logo;
