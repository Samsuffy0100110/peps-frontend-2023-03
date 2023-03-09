import { Footer } from "@/components/partials/footer/Footer";
import { Header } from "@/components/partials/header/Header";

export function Home() {
    return (
        <>
            <Header />
            <div>
                <h1>Accueil Pep's Design</h1>
                <h2 className="text-3xl font-bold underline">
                    Hello world!
                </h2>
            </div>
            <Footer />
        </>
    );
}