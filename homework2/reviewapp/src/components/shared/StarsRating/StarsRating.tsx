import { Box } from "@chakra-ui/react";
import {StarIcon} from "@chakra-ui/icons"
import React from "react";

interface IStarsRatingProps {
    selected: boolean;
    onChange: (selected: boolean) => void;
  }
  
  export default function StarIconComponent({ selected, onChange }: IStarsRatingProps) {
    return (
      <Box onClick={() => onChange(!selected)} cursor="pointer" flexDirection="row" alignItems="center">
        <StarIcon boxSize={6} color={selected ? 'yellow.500' : 'gray.300'} />
      </Box>
    );
  }