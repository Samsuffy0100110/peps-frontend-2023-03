import { Footer } from "@/components/commons/footer/Footer";
import { Header } from "@/components/commons/header/Header";
import style from "./Home.module.scss";

export function Home() {
    return (
        <>
            <Header />
            <div>
                <h1>Accueil Pep's Design</h1>
                <h2 className="text-3xl font-bold underline text-primary">
                    Hello world!
                </h2>
            </div>
            <Footer />
        </>
    );
}