import logo from '../assets/logo.png';

function Header() {
  return (
    <header className="bg-growlio-header flex items-center py-5">
      
      <img src={logo} alt="GrowBit Logo"className="w-[300px] h-[70px] object-contain ml-4"/>
      

    </header>
  );
}

export default Header;
