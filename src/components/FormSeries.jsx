import { useSingularSeries } from "../hooks/useSngularSeries"
import { Result } from "./Result"


export const FormSeries = () => {

    const [] = useSingularSeries()
    return (
        <div>
            FormSeries Component
            <Result/>
        </div>
    )
}