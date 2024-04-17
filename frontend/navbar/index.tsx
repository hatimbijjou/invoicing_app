import { House, Paperclip, UsersThree } from "@phosphor-icons/react";
import { Power } from "@phosphor-icons/react/dist/ssr";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.clear()
    navigate('/account-login')
  }

  return (
    <div className="w-fit p-4 bg-zinc-700 text-white">
      <div className="flex flex-col h-full items-center justify-between">
        <div className="flex flex-col gap-8 items-center">
          <div className="text-center font-bold text-2xl select-none">INVOICER</div>

          <div className="flex flex-col w-full p-4 rounded items-center cursor-pointer hover:bg-white/10 select-none" onClick={() => navigate('/')}>
            <House size={32}/>
            <div className="text-xs uppercase">home</div>
          </div>
          <div className="flex flex-col w-full p-4 rounded items-center cursor-pointer hover:bg-white/10 select-none" onClick={() => navigate('manage-invoices')}>
            <Paperclip size={32}/>
            <div className="text-xs uppercase">my invoices</div>
          </div>
          <div className="flex flex-col w-full p-4 rounded items-center cursor-pointer hover:bg-white/10 select-none" onClick={() => navigate('manage-clients')}>
            <UsersThree size={32}/>
            <div className="text-xs uppercase">my clients</div>
          </div>
        </div>
        <div onClick={logout} className="flex flex-col w-full p-4 rounded items-center cursor-pointer hover:bg-white/10 select-none">
          <Power size={32}/>
          <div className="text-xs uppercase">log out</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
