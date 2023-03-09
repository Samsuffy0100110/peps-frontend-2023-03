import Footer from "../components/common/footer/Footer";
import Header from "../components/common/header/Header";

export default function Home() {
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
