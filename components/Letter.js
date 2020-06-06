import {
  Textarea,
  Box,
  Button,
  Flex,
  Link,
  Text,
  Input,
  useClipboard,
  useToast,
} from "@chakra-ui/core";
import { useState, useEffect } from "react";
import { generateLetter } from "./LetterContents";

const buildGmailLink = (email, body, subject) =>
  `https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=${email}&su=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

const buildMailTo = (email, body, subject) =>
  `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

const emailsComma =
  "stevej@ggcity.org, georgeb@ggcity.org, joneill@ggcity.org, thuhan@ggcity.org, phatb@ggcity.org, stephaniek@ggcity.org, kimn@ggcity.org, cityclerk@ggcity.org";
const emailsSemiColon =
  "stevej@ggcity.org;georgeb@ggcity.org;joneill@ggcity.org;thuhan@ggcity.org;phatb@ggcity.org;stephaniek@ggcity.org;kimn@ggcity.org;cityclerk@ggcity.org";
const subjectLine =
  "Re: Behavior Unbecoming of a Public Official from City Planning Commissioner, Josh Lindsay of District 1 ";

export default function Letter({ name }) {
  //hooks
  const [emailAddresses, setEmailAddresses] = useState(emailsComma);
  const [subject, setSubject] = useState(subjectLine);
  const [letter, setLetter] = useState(generateLetter(name));

  //handle toasts
  const toast = useToast();

  //handle copy and paste
  const copyEmails = useClipboard(emailAddresses);
  const handleCopyEmails = (e) => {
    copyEmails.onCopy();
    toast({
      title: "Email Addresses copied to clipboard",
      status: "info",
      duration: 1500,
      isClosable: false,
    });
  };

  const copySubject = useClipboard(subject);
  const handleCopySubject = (e) => {
    copySubject.onCopy();
    toast({
      title: "Subject copied to clipboard",
      status: "info",
      duration: 1500,
      isClosable: false,
    });
  };

  const copyLetter = useClipboard(letter);
  const handleCopyLetter = (e) => {
    copyLetter.onCopy();
    toast({
      title: "Letter copied to clipboard",
      status: "info",
      duration: 1500,
      isClosable: false,
    });
  };

  //effects
  useEffect(() => {
    setLetter(generateLetter(name));
  }, [name]);

  return (
    <>
      <Box borderRadius="8px" padding="12px" backgroundColor="gray.100">
        <Flex
          borderRadius="8px"
          backgroundColor="white"
          width="100%"
          flexDirection={["column", "column", "row", "row"]}
          mb="12px"
        >
          <Text fontWeight="bold" padding="8px" paddingLeft="16px">
            To:
          </Text>
          <Textarea
            paddingLeft={["12px", "12px", "2px", "2px"]}
            borderRadius="8px"
            borderWidth="0px"
            resize="none"
            minHeight={["100px", "80px", "80px", "80px"]}
            value={emailAddresses}
          ></Textarea>
          <Button
            size="xs"
            variantColor="gray"
            fontWeight="bold"
            onClick={handleCopyEmails}
            margin="8px"
            pl="12px"
            pr="12px"
          >
            Copy Emails
          </Button>
        </Flex>
        <Flex
          borderRadius="8px"
          backgroundColor="white"
          width="100%"
          flexDirection={["column", "column", "row", "row"]}
          mb="12px"
        >
          <Text fontWeight="bold" padding="8px" paddingLeft="16px">
            Subject:
          </Text>
          <Textarea
            paddingLeft={["12px", "12px", "2px", "2px"]}
            borderRadius="8px"
            borderWidth="0px"
            resize="none"
            minHeight={["80px", "80px", "62px", "62px"]}
            value={subject}
          ></Textarea>
          <Button
            size="xs"
            variantColor="gray"
            fontWeight="bold"
            margin="8px"
            pl="16px"
            pr="16px"
            onClick={handleCopySubject}
          >
            Copy Subject
          </Button>
        </Flex>
        <Flex
          borderRadius="8px"
          backgroundColor="white"
          width="100%"
          flexDirection={["column", "column", "row", "row"]}
          mb="12px"
        >
          <Textarea
            value={letter}
            resize="none"
            borderWidth="0px"
            borderRadius="8px"
            minHeight={["240px", "200px", "160px", "140px"]}
          />
          <Button
            size="xs"
            variantColor="gray"
            fontWeight="bold"
            margin="8px"
            pl="16px"
            pr="16px"
            onClick={handleCopyLetter}
          >
            Copy Letter
          </Button>
        </Flex>
        <Flex width="100%" flexDirection={["column", "column", "row", "row"]}>
          <Link
            width="100%"
            target="_blank"
            href={buildGmailLink(emailsSemiColon, letter, subject)}
          >
            <Button
              fontWeight="bold"
              variantColor="red"
              borderRadius="8px"
              width="100%"
              mr={["0px", "0px", "8px", "8px"]}
              mb="8px"
            >
              Send With Gmail
            </Button>
          </Link>
          <Link
            width="100%"
            target="_blank"
            href={buildMailTo(emailsSemiColon, letter, subject)}
          >
            <Button
              fontWeight="bold"
              variantColor="blue"
              borderRadius="8px"
              width="100%"
              ml={["0px", "0px", "8px", "8px"]}
            >
              Send With Mail App
            </Button>
          </Link>
        </Flex>
      </Box>
      <Box height="48px"></Box>
    </>
  );
}
