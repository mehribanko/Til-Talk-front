
interface SidebarProps {
    items: string[];
    onSelect?: (item: string)  => void;
}

export const Sidebar = ({items, onSelect}: SidebarProps) => {

    return (

        <div>
            {items.map(item => {

            })}
        </div>
    )

}