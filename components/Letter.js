import { Textarea, Box, Button, Flex, Link } from "@chakra-ui/core";
import { useState, useEffect } from "react";

export default function Letter() {
  const [letter, setLetter] = useState();

  const buildGmailLink = (email, body, subject) =>
    `https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=${email}&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

  const buildMailTo = (email, body, subject) =>
    `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

  return (
    <>
      <Box borderWidth="1px" mb="8px">
        <Textarea borderWidth="0px" borderRadius="0px" />
      </Box>
      <Flex width="100%" flexDirection="row">
        <Link
          width="100%"
          target="_blank"
          href={buildGmailLink("david@dtbui.com", "Hi David", "Test Subject")}
        >
          <Button variantColor="red" width="100%" mr="4px">
            Send With Gmail
          </Button>
        </Link>
        <Button variantColor="blue" width="100%" ml="4px">
          Send With Default Mail App
        </Button>
      </Flex>
    </>
  );
}
