import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeSwitch } from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <Text>GameWatch</Text>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;

("ea88c1587d1c4f3992a5c7938c74bda5");
