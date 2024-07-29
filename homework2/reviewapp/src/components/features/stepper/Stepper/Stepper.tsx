import { Button, Flex, Heading, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import { Fragment } from "react";
import { StepperSteps } from "./components/StepperSteps";
import { StepperProgressBar } from "./components/StepperProgressBar";
import { StepperButtons } from "./components/StepperButtons";

export const Stepper=()=>{
    const{isOpen,onOpen,onClose}=useDisclosure();
    return(

     <Flex marginLeft={{sm:"36px", lg:"0px"}}>
        <Button onClick={onOpen} variant="navbar" size={{base:"md",lg:"md",sm:"sm"}}>Show Picker</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay/>
            <ModalContent  backgroundColor="purple.300"alignItems="center" textColor="white">
                <ModalHeader >TV shows picker</ModalHeader>
                <ModalBody >
                    
                <StepperSteps />
                </ModalBody>
                <ModalFooter>
                <StepperProgressBar/>
                <StepperButtons onClose={onClose}/>
                </ModalFooter>
            </ModalContent>
           
        </Modal>
     </Flex>
    );
}