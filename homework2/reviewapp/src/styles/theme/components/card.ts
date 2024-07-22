import { createMultiStyleConfigHelpers, useMultiStyleConfig } from "@chakra-ui/react";
import { cardAnatomy} from "@chakra-ui/anatomy";

const {defineMultiStyleConfig} = createMultiStyleConfigHelpers(cardAnatomy.keys)
const Card = defineMultiStyleConfig({
    variants:{
        smallCard: {
            container:{
                overflow:"hidden",
                width:"240px" ,
                borderRadius:"24px",
            },
            body:{
                color: "purple2",
                padding: "15px",
               
            }
        }
    }
    
})

export default Card;