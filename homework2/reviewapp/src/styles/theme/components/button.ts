import { defineStyleConfig } from "@chakra-ui/react";

const Button=defineStyleConfig({

    baseStyle:{
        borderRadius: "full"
    },
    sizes:{
        md:{
                w:"144px",
                h: "52px"
        },
        sm:{
            w:"72px",
            h: "26px"
        }
    },
    variants:{
        main:{
            color: "purple.200",
            backgroundColor: "white",
            
        },
        navbar:{
            color: "white",
            backgroundColor: "transparent",
            _active: {
                backgroundColor: "purple.200" ,
              },
             
        }
       

    },
    defaultProps:{
        variant: "main",
        size: "md"
    }
})

export default Button;