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
        },
        hugeCard:{
            container:{
                width: "1053px",
                height:"609px",
                overflow:"hidden",
                marginBottom:"20px"
        
            },
            body:{
                color: "purple2",
                padding:"15px",
                paddingLeft:"15px",
                borderRadius:"24px",
                        

            }
        }
    }
    
})

export default Card;