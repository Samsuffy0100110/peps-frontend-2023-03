import { SideBar } from '@/admin/components/sideBar/SideBar';
import style from './AdminMain.module.scss';

export function AdminMain() {

    return (
        <div>
            <h1>Bienvenue sur l'interface d'administration</h1>
            <SideBar />
        </div>
    );
}