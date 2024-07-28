import { Button, Flex } from "@chakra-ui/react";
import { useContext } from "react"
import { StepperContext } from "./StepperContextProvider";

export const StepperButtons=()=>{

    const{currentStep,setCurrentStep}=useContext(StepperContext);
    return(
        <Flex>
            <Button onClick={()=>setCurrentStep(currentStep-1)}>
            Previous
            </Button>
            <Button onClick={()=>setCurrentStep(currentStep+1)}>
                Next
            </Button>
        </Flex>
    );
}