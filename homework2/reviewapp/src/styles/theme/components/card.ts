import { createMultiStyleConfigHelpers, useMultiStyleConfig } from "@chakra-ui/react";
import { cardAnatomy} from "@chakra-ui/anatomy";

const {defineMultiStyleConfig} = createMultiStyleConfigHelpers(cardAnatomy.keys)
const Card = defineMultiStyleConfig({
    sizes:{
        sm:{
            container:{
                overflow:"hidden",
               
                borderRadius:"24px",
            },
            body:{
                padding: "15px",
            }
        },
        lg:{
            container:{
                
               
                overflow:"hidden",
                marginBottom:"20px",
                marginTop:"40px",
                borderRadius:"24px",
            },
            body:{
                
                padding:"15px",
                paddingLeft:"15px",
               
            }
        }
    },
    variants:{
        primary: {
            
            body:{
                color: "purple.200",
                
            }
        }
    }
    
})

export default Card;