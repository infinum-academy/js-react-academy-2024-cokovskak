import { useContext } from "react";
import { StepperContext } from "./StepperContextProvider";
import { Box, Flex,Image,Text } from "@chakra-ui/react";

export const StepperStep=()=>{
    const {showsList, currentStep, totalSteps, setSelectedShows} = useContext(StepperContext);
    const currentShows=[];
    const total=showsList.length;
    const subShows=totalSteps;
    for(let i=0;i<total;i+=subShows){
        const arr=showsList.slice(i,i+subShows);
        currentShows.push(arr);
    }
    
    
    return (
        <Flex direction='column' gap={5} width='300px'>
            {currentShows[currentStep]?.map((show) => (
                <Box key={show.id}>
                    <Text>{show.title}</Text>
                    <Image alt={show.title} src={show.image_url} />
                </Box>
            ))}
        </Flex>
    );
}