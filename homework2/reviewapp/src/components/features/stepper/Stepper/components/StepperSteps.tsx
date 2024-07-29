import { useContext } from "react";
import { StepperResults } from "./StepperResults";
import { StepperStep } from "./StepperStep";
import { StepperContext } from "./StepperContextProvider";
import { StepperProgressBar } from "./StepperProgressBar";
export const StepperSteps = () => {
    const { currentStep, totalSteps} = useContext(StepperContext);
   

    
    if(currentStep < totalSteps) {
        console.log("Total "+totalSteps)
        console.log("Step "+currentStep)
        return <>
        <StepperStep />
        <StepperProgressBar/>
        </>
    } else {
        
        return <StepperResults />
    }
}