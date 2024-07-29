import { Button, Flex } from "@chakra-ui/react";
import { useContext } from "react"
import { StepperContext } from "./StepperContextProvider";

interface IStepperButtonProps{
    onClose:()=>void;
}
export const StepperButtons=({ onClose }: IStepperButtonProps)=>{

    const{currentStep,setCurrentStep,selectedShowsList,totalSteps}=useContext(StepperContext);
    const lastStep=currentStep===totalSteps;
    return(
        <Flex>
            {lastStep ? (<Button  onClick={onClose} >Close</Button>):
            
             (
           <Flex>  <Button onClick={()=>setCurrentStep(currentStep-1)}>
            Previous
            </Button>

            <Button onClick={()=>setCurrentStep(currentStep+1)}>
                Next
            </Button> </Flex>)}
        </Flex>
    );
}