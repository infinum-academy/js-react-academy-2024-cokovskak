import { useContext } from "react";
import { StepperContext } from "./StepperContextProvider"
import { StepperResults } from "./StepperResults";
import { StepperStep } from "./StepperStep";

export const StepperSteps=()=>{
    const{currentStep,totalSteps}=useContext(StepperContext);
  
    if(currentStep<totalSteps){
        console.log("StepperStep")
        return <StepperStep/>
    }
    else{
        console.log("Step is"+currentStep)
        console.log(totalSteps)
        return <StepperResults/>
    }

}