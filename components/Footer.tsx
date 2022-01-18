import {
  Text,
  HStack,
  Flex,
  Icon,
  ButtonGroup,
  IconButton,
  Grid,
  Box,
  Spacer,
} from "@chakra-ui/react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding={3}
        // bg="blackAlpha.900"
        bg="red"
        color="white"
      >
        {/* Linkのアンダーラインを消したい */}
 
          <Box colSpan={4} justifyContent="center">
            <Text fontSize="lg">Copyright © Tomo Finance 2022</Text>
          </Box>

          <ButtonGroup variant="ghost" color="gray.600">
            <IconButton
              as="a"
              href="#"
              aria-label="LinkedIn"
              icon={<FaLinkedin fontSize="20px" />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="GitHub"
              icon={<FaGithub fontSize="20px" />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="Twitter"
              icon={<FaTwitter fontSize="20px" />}
            />
          </ButtonGroup>

      </Flex>
    </footer>
  );
}

export default Footer;
