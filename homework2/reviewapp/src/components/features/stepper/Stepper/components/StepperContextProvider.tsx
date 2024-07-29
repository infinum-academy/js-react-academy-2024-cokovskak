"use client";

import { authFetcher } from "@/fetchers/fetcher";
import { IListShows } from "@/fetchers/shows";
import { swrKeys } from "@/fetchers/swrKeys";
import { IShow } from "@/typings/show";
import { Box } from "@chakra-ui/react";
import { createContext, ReactNode, useEffect, useState } from "react";
import useSWR from "swr";

interface IStepperContext {
    currentStep: number;
    setCurrentStep: (newStep: number) => void;
    showsList: IShow[];
    selectedShowsList: IShow[];
    setSelectedShows: (newShowsList: IShow[]) => void;
    totalSteps: number;


}

interface IStepperContextProvider {
    children: ReactNode;
}

export const StepperContext = createContext<IStepperContext>({} as IStepperContext)

export  const StepperContextProvider=({children}: IStepperContextProvider)=>{
    const [currentStep,setCurrentStep]=useState(0);
    const [selectedShowsList,setSelectedShows]=useState<IShow[]>([]);
	const { data } = useSWR(swrKeys.all_shows, authFetcher<IListShows>);
    const showsList=data?.shows;
    const [totalSteps]=useState(5);
    useEffect(() => {
        console.log("currentStep in provider:", currentStep);
        console.log("totalSteps in provider:", totalSteps);
    }, [currentStep, totalSteps]);

    if(!showsList){
        return  <Box color="error">There was an error...</Box>;
    }
    return (
        <StepperContext.Provider value={{
            currentStep,
            setCurrentStep,
            showsList,
            selectedShowsList,
            setSelectedShows,
            totalSteps
        }}>
            {children}
        </StepperContext.Provider>
    );
}