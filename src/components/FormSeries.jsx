import { useSingularSeries } from "../hooks/useSngularSeries"
import { Result } from "./Result"


export const FormSeries = () => {

    const {termino } = useSingularSeries();


    //  const handleClick = () => {
    //     calcularTermino();
    // };


    return (
        <div>
            FormSeries Component
             {/* <button onClick={handleClick}>Actualizar Número</button> */}
            <div>Número actual: n</div>
            <div>Término calculado: {termino}</div>
            <Result/>
        </div>
    )
}