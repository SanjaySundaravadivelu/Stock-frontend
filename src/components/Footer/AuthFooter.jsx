/*eslint-disable*/
import React from "react";
import { Flex, Link, List, ListItem, Text, Icon } from "@chakra-ui/react";
import { FaApple, FaLinkedin, FaGoogle } from "react-icons/fa";

export default function AuthFooter(props) {
  return (
    <Flex
      flexDirection={{
        base: "column",
      }}
      alignItems={{
        base: "center",
      }}
      justifyContent="space-between"
      pb="20px"
      fontSize="sm"
    >
      <Text
        color="white"
        textAlign={{
          base: "center",
        }}
        mb={{ base: "20px" }}
      >
        <Text as="span" mx="2px">
          {document.documentElement.dir === "rtl"
            ? " مصنوع من ❤️ بواسطة"
            : "Made by "}
        </Text>
        <Link href="https://www.simmmple.com" target="_blank">
          {document.documentElement.dir === "rtl"
            ? " توقيت الإبداعية"
            : "Sanjay S "}
        </Link>
        <br />
        <Link href="https://www.creative-tim.com" target="_blank">
          {document.documentElement.dir === "rtl"
            ? "سيممبل "
            : " At the moment, I'm unable to add new users as I don't have the resources to purchase additional data. I appreciate your understanding and hope to be able to accommodate new users in the future."}
        </Link>
      </Text>
      <List display="flex">
        <ListItem
          me={{
            base: "20px",
          }}
        >
          <Text color="white">Mail to : </Text>
        </ListItem>
        <ListItem
          me={{
            base: "20px",
          }}
        >
          <Link
            color="white"
            fontSize="sm"
            href="mailto:sanjay.sundaravadivel@gmail.com"
          >
            {document.documentElement.dir === "rtl"
              ? "سيممبل"
              : "sanjay.sundaravadivel@gmail.com"}
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: "20px",
          }}
        >
          <Text color="white">for more info</Text>
        </ListItem>
        <ListItem>
          <Link color="white" href="https://www.creative-tim.com/license">
            <Icon
              color="white"
              as={FaLinkedin}
              w="30px"
              h="30px"
              _hover={{ filter: "brightness(120%)" }}
            />
          </Link>
        </ListItem>
      </List>
    </Flex>
  );
}
