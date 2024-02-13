import { useSingularSeries } from "../hooks/useSngularSeries"
import { Result } from "./Result"
import { calcularTermino } from '../shared/logicSeries';


export const FormSeries = () => {
    
    // const exp = calcularTermino(1)
    const val = calcularTermino(3)

    return (
        <div>
            FormSeries Component
            <div>
            </div>
            <Result/>
        </div>
    )
}