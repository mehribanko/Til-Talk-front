import type {ReactNode} from "react";
import {Sidebar} from './sidebar/Sidebar';
import {SidebarMenuItems} from '.././common/constant/MenuData';

interface LayoutProps {
    children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="flex h-screen bg-gray-50">
            <Sidebar items={SidebarMenuItems} />
            <main className="flex-1 p-8">{children}</main>
        </div>
    );
};