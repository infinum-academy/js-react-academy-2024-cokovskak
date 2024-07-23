import {defineStyleConfig } from "@chakra-ui/react";


const RegisterForm = defineStyleConfig({
    
    baseStyle:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "24px",
        bg: "purple2",
        margin: "auto",
        marginTop:"150px",
        width: "500px",
        height: "600px",
        padding:"20px",
        gap:"30px",
        position: "relative",

    }
})

export default RegisterForm;