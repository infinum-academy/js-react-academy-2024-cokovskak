import { Button, Heading, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import { Fragment } from "react";
import { StepperSteps } from "./components/StepperSteps";
import { StepperProgressBar } from "./components/StepperProgressBar";
import { StepperButtons } from "./components/StepperButtons";

export const Stepper=()=>{
    const{isOpen,onOpen,onClose}=useDisclosure();
    return(

     <Fragment>
        <Button onClick={onOpen} variant="navbar" size={{base:"md",lg:"md",sm:"sm"}}>Show Picker</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>Choose a TV show</ModalHeader>
                <ModalBody>
                    
                <StepperSteps />
                </ModalBody>
                <ModalFooter>
                <StepperProgressBar/>
                <StepperButtons/>
                </ModalFooter>
            </ModalContent>
           
        </Modal>
     </Fragment>
    );
}