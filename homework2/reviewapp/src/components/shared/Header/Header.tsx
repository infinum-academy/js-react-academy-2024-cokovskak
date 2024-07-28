import { fontSize } from "@/styles/theme/foundations/font";
import { Flex, Heading,Image } from "@chakra-ui/react";

export const Header=() => {
	return (
		<Flex  justifyContent="space-between"  alignItems="center"  >
			 <Flex alignItems="center" marginLeft={12} >
               
                 <Image  width={{ base: "150px", md: "200px", sm: "150px" }} 
                    height={{ base: "24px", md: "32px", sm: "24px" }}  src="/assets/images/logo.png"/>
            </Flex>
		</Flex>
	);
}