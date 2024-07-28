import { useContext } from "react";
import { StepperContext } from "./StepperContextProvider"
import { StepperResults } from "./StepperResults";
import { StepperStep } from "./StepperStep";
export const StepperSteps = () => {
    const { currentStep, totalSteps } = useContext(StepperContext);

    
    if(currentStep < totalSteps) {
        console.log("Total "+totalSteps)
        console.log("Step "+currentStep)
        return <StepperStep />
    } else {
        console.log("Total"+totalSteps)
        console.log("Step"+currentStep)
        return <StepperResults />
    }
}