import {  extendTheme } from "@chakra-ui/react";
import { fonts, fontSize } from "./foundations/font";
import { colors } from "./foundations/color";
import Card from "./components/card";
import Button from "./components/button";
import RegisterForm from "./components/registerform";

   
const theme=extendTheme({
   components: {Card,Button,RegisterForm},
   fonts,
   fontSize,
   colors,

})
export default theme;