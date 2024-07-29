import { IReview } from "@/typings/review";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ReviewDeleteButton } from "../ReviewDeleteButton/ReviewDeleteButton";
import { ReviewEditButton } from "../ReviewEditButton/ReviewEditButton";
import { fontSize } from "@/styles/theme/foundations/font";

export interface IReviewItemProps {
	review: IReview;
}

export const ReviewMenuButton = ({review} : IReviewItemProps) => {
   return (
      <Menu>
         <MenuButton>⋮</MenuButton>
         <MenuList minW={0} width="100px" fontSize={fontSize.xs} >
            <MenuItem padding="0">
               <ReviewEditButton editedReview={review} />
            </MenuItem>
            <MenuItem padding="0">
               <ReviewDeleteButton review={review} />
            </MenuItem>
         </MenuList>
      </Menu>
   );
};