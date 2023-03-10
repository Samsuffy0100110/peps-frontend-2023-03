import { SideBar } from '@/admin/components/SideBar';

export function AdminDashboard() {
    return (
        <>
            <SideBar />
            <main className="flex-1 bg-tertiary p-8">
                <h1 className="text-3xl text-center text-secondary">Admin</h1>
            </main>
        </>
    );
}