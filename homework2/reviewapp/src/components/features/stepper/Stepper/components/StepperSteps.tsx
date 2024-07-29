import { useContext } from "react";
import { StepperResults } from "./StepperResults";
import { StepperStep } from "./StepperStep";
import { StepperContext } from "./StepperContextProvider";
export const StepperSteps = () => {
    const { currentStep, totalSteps} = useContext(StepperContext);
   

    
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