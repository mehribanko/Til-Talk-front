import {Sidebar} from './sidebar/Sidebar';

interface LayoutProps {
    children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="flex h-screen bg-gray-50">
            <Sidebar items={['Home', 'Support', 'Stats']} />
            <main className="flex-1 p-8">{children}</main>
        </div>
    );
};