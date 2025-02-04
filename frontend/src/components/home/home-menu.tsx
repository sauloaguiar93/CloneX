import { faHouse, faXmark, faUser } from "@fortawesome/free-solid-svg-icons";
import { Logo } from "../ui/logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SearchInput } from "../ui/search-input";
import { NavItem } from "../nav/nav-item";
import { NavLogout } from "../nav/nav-logout";

type Props = {
    closeAction: () => void;
}


export const HomeMenu = ({ closeAction }: Props) => {
    return (
        <div className="lg:hidden fixed inset-0 p-6 bg-black">
            <div className="flex justify-between items-center">
                <Logo size="32" />
                <div className="cursor-pointer flex justify-center items-center size-12 rounded-full border-2 border-gray-900" onClick={closeAction}>
                    <FontAwesomeIcon icon={faXmark} className="size-6" />
                </div>
            </div>

            <div className="my-6">
                <SearchInput />
            </div>

            <div className="flex flex-col gap-6">
                <NavItem href="/home" icon={faHouse} label="Página Inicial"/>
                <NavItem href="/profile" icon={faUser} label="Meu Perfil"/>
                <NavLogout />
            </div>
        </div>
    );
}