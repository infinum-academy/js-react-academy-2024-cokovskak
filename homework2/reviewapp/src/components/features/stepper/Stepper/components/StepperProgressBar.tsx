import { useContext } from "react";
import { StepperContext } from "./StepperContextProvider"
import { Progress } from "@chakra-ui/react";

export const StepperProgressBar=()=>{
    const{currentStep,totalSteps}=useContext(StepperContext);
    return <Progress value={(currentStep/totalSteps)*100}/>

   
}