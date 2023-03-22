import { GetProducts } from "@/components/shop/GetProducts";
import { Footer } from "@/components/commons/Footer";
import { Header } from "@/components/commons/Header";

export const Home = () => {
    return (
        <>
            <Header />
            <div>
                <h1>Accueil Pep's Design</h1>
                <h2 className="text-3xl font-bold underline text-primary">
                    Hello world!
                </h2>
                    <div>
                        <GetProducts />
                    </div>
            </div>
            <Footer />
        </>
    );
}