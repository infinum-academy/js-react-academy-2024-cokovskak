import { swrKeys } from "@/fetchers/swrKeys";
import { IReview } from "@/typings/review";
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { Fragment } from "react";
import useSWRMutation from "swr/mutation";
import { mutate } from "swr";
import { editReview } from "@/fetchers/review";
import { ReviewForm } from "@/components/features/shows/ReviewForm/ReviewForm";
import { CloseIcon } from "@chakra-ui/icons";

export interface IReviewEditButton{
    editedReview:IReview
}
export const ReviewEditButton=({editedReview}:IReviewEditButton)=>{
    const {isOpen, onOpen, onClose} = useDisclosure();
   const {trigger}=useSWRMutation(swrKeys.reviews(`/${editedReview.id}`), editReview,{
    onSuccess:()=>{
        mutate(swrKeys.review(editedReview.show_id))
        onClose();
    }
   })
   const onEdit=async(review:IReview)=>{
    try{
        await trigger(review)
    }
    catch(error){}
   }
    return <Fragment>
        <Button marginBottom={5} onClick={onOpen}>Edit review</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay/>

            <ModalContent>
            <ModalCloseButton  gap={3}color="black"></ModalCloseButton>
            <ModalBody gap={3} margin={3}>
            <ReviewForm  index={editedReview.show_id} onAddReview={onEdit}/>
                </ModalBody>             
            </ModalContent>
        </Modal>
    </Fragment>

}