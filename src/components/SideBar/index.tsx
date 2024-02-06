import { GearSix, HouseLine, SignOut, Trash, User } from "@phosphor-icons/react";
import { ReactNode } from "react";

interface SideBarProps {
    children : ReactNode;
}

export function SideBar({ children } :SideBarProps){
    return(
        <div>
            <div className="max-w-56 w-full border-r-2 border-r-black-light fixed top-0 bottom-0 hidden md:block">
                <div className="flex flex-col items-center">
                    <img src="/logo.svg" alt="logo" className="mt-12"/>

                    <hr className="border-2 border-black-light w-28 mt-10" />

                    <ul>
                        <li className="flex items-center justify-center mt-10 text-white gap-3 px-5 py-4 bg-[#242424] border border-black-light rounded-xl">
                        <HouseLine size={24} />

                        <span>Home</span>
                        </li>
                        <li className="flex items-center justify-center mt-10 text-[#525252] gap-3 px-5 py-4">
                        <Trash size={24} />

                        <span>Lixeira</span>
                        </li>
                        <li className="flex items-center justify-center mt-10 text-[#525252] gap-3 px-5 py-4 ">
                        <User size={24} />

                        <span>Perfil</span>
                        </li>

                    </ul>
                    <hr className="border-2 border-black-light w-28 mt-24"/>

                    <ul>
                        <li className="flex items-center justify-center mt-10 text-[#525252] gap-3 px-5 py-4">
                            <GearSix size={24} />

                            <span>Configuração</span>
                        </li>
                        <li className="flex items-center justify-center mt-10 text-[#C0293D] gap-3 px-5 py-4">
                            <SignOut size={24} className="rotate-180"/>

                            <span>Sair</span>
                        </li>
                    </ul>
                </div>
            </div>


            <div className="pl-10 md:pl-60">{children}</div>
        </div>
    )
}