import { fontSize } from "@/styles/theme/foundations/font";
import { Flex, Heading,Image } from "@chakra-ui/react";

export const Header=() => {
	return (
		<Flex width="80%" justifyContent="space-between"  alignItems="center">
			 <Flex alignItems="center" marginLeft={12} marginTop={10} >
               
                 <Image width="200px" height="32px" src="/assets/images/logo.png"/>
            </Flex>
		</Flex>
	);
}