import style from "./Home.module.scss";

export function Home() {
    return (
        <div className={style.home}>
            <h1>Accueil Pep's Design</h1>
            <h2 className="text-3xl font-bold underline">
                Hello world!
            </h2>
        </div>
    );
}