import { useState } from "react";
import FormConverter from "../components/Converter/FormConverter";
import Result from "../components/Converter/Result";

const Converter = () => {

    const [result, setResult] = useState('');
    const [isShow, setIsShow] = useState(true)

    return (
        <div>
            <h1>Convertisseur $/BTC</h1>
            <FormConverter result={result} setResult={setResult} />
            <Result result={result} />
            <div
                style={{
                    marginTop: "80px"
                }}
            >
                {
                    isShow ?
                        <h2>Titre</h2>
                        :
                        <h3>Titre plus petit</h3>
                }
                {
                    isShow && <h2>SousTitre</h2>
                }
                <button
                    onClick={() => setIsShow(!isShow)}
                >
                    Cacher le titre
                </button>
            </div>
        </div>
    );
};
export default Converter;