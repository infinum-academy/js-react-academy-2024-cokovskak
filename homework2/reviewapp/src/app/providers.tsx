'use client'

import { StepperContextProvider } from '@/components/features/stepper/Stepper/components/StepperContextProvider'
import theme from '@/styles/theme/theme'
import { ChakraProvider } from '@chakra-ui/react'

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}><StepperContextProvider>{children}
    </StepperContextProvider></ChakraProvider>
}