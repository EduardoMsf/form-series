import { useSingularSeries } from "../hooks/useSngularSeries"
import { Result } from "./Result"


export const FormSeries = () => {

    const { calcularTermino } = useSingularSeries()

    const respHook = calcularTermino(1)
    return (
        <div>
            FormSeries Component
            <div>
                Resultado del hook:  {respHook}
           </div>
            <Result/>
        </div>
    )
}