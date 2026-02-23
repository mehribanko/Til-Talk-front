import {Link} from 'react-router-dom';
import {LangToggleButton} from "../button/LangToggleButton.tsx";
import {TilTalkLogo} from "../logo/TilTalkLogo.tsx";


interface MenuItem {
    label: string;
    path: string;
}
interface SidebarProps {
    items: MenuItem[];
    onSelect?: (item: string)  => void;
}

export const Sidebar = ({items, onSelect}: SidebarProps) => {

    return (

        <nav className="w-56 h-screen bg-white flex flex-col p-4 border-r border-gray-100">

            <div className="mb-6 pb-6 border-b border-gray-100">
                <TilTalkLogo size={32} />
            </div>

            {/* Nav items */}
            <div className="flex-1">
                <p className="text-xs text-gray-400 uppercase tracking-widest font-medium px-3 mb-2">Menu</p>

                {items.map((item) => (
                    <Link
                        key={item.label}
                        to={item.path}
                        onClick={() => onSelect?.(item)}
                        className="flex items-center gap-3 px-3 py-2.5 mb-1 rounded-lg text-sm font-medium text-gray-500 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                    >
                        {item.label}
                    </Link>
                ))}
            </div>

            <div className="border-t border-gray-100 pt-4 flex flex-col gap-2">
                <LangToggleButton/>
                <button className="text-gray-400 text-sm py-3 rounded-xl border border-gray-200 hover:bg-gray-50 hover:text-gray-600 transition-colors">
                    Guide
                </button>
            </div>
        </nav>
    )

}