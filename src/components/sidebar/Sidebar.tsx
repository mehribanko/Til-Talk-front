import {Link} from 'react-router-dom';


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

        <nav className="w-56 h-screen bg-white flex flex-col p-4 shadow-sm">
            {/* Logo */}
            <div className="text-purple-600 font-bold text-xl mb-8">◆ til-talk</div>

            {/* Nav items */}
            <div className="flex-1">
                {items.map((item) => (
                    <Link
                        key={item.label}
                        to={item.path}
                        onClick={() => onSelect?.(item)}
                        className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-purple-50 text-gray-700"
                    >
                        {item.label}
                    </Link>
                ))}
            </div>

            <button className="bg-purple-600 text-white py-3 rounded-xl">
                Guide
            </button>
        </nav>
    )

}