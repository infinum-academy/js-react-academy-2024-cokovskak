import { useContext } from "react"
import { StepperContext } from "./StepperContextProvider"
import { Flex } from "@chakra-ui/react";
import { ShowCard } from "@/components/shared/ShowCard/ShowCard";

export const StepperResults=()=>{
    const{selectedShowsList}=useContext(StepperContext);
    return(
        <Flex direction="column">
           
        </Flex>
    )
}