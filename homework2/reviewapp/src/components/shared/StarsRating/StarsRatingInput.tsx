import { Box, Flex } from "@chakra-ui/react";
import {StarIcon} from "@chakra-ui/icons"
import React from "react";

interface IStarsRatingProps {
    value:number;
    onChange?: (rating: number) => void;
  }
  
  export default function StarsRatingInput({ value, onChange }: IStarsRatingProps) {
    return (
      <Flex marginBottom={3} direction={"row"} gap="6px">
      {Array.from(Array(5)).map((_, index) => (
        <StarIcon
          key={index + 1}
          w="24px"
          h="24px"
          color={index + 1<= value ? 'gold' : 'primary.100'}
    
          onClick={() => onChange?.(index + 1)}
          _hover={{
            cursor: 'pointer',
            transform: 'scale(1.05)',
          }}
        />
      ))}
    </Flex>
    );
  }
  