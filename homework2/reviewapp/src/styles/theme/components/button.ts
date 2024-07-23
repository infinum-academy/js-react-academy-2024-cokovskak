import { defineStyleConfig } from "@chakra-ui/react";

const Button=defineStyleConfig({

    baseStyle:{
        borderRadius: "full"
    },
    sizes:{
        md:{
                w:"144px",
                h: "52px"
        }
    },
    variants:{
        main:{
            color: "purple2",
            backgroundColor: "white",
            
        },
        navbar:{
            color: "white",
            backgroundColor: "transparent",
            _active: {
                backgroundColor: "purple2",
              },
             
        }
       

    },
    defaultProps:{
        variant: "main",
        size: "md"
    }
})

export default Button;