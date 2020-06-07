import Head from "next/head";
import { useState, useEffect } from "react";
import {
  Heading,
  Text,
  Box,
  Link,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  useColorMode,
} from "@chakra-ui/core";
import { motion } from "framer-motion";

import Container from "../components/ui/Container";
import CenteredColumn from "../components/ui/CenteredColumn";

import Form from "../components/Form";
import Letter from "../components/Letter";

export default function Home() {
  const [name, setName] = useState("");
  const [finalName, setFinalName] = useState("");
  const { colorMode, toggleColorMode } = useColorMode();

  const handleChange = (event) => setName(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();
    setFinalName(name);
    return false;
  };

  return (
    <div className="container">
      <Container>
        <Head>
          <title>Remove Comissioner Lindsay</title>
          <meta
            property="og:title"
            content="Email Petition To Remove Commissioner Lindsay"
          />
          <meta
            property="og:description"
            content="Help us hold this public official accountable and email the Garden
            Grove's leadership using this tool."
          />

          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta
            property="og:image"
            content="https://removelindsay.now.sh/ggnew.jpg"
          />
          <meta property="og:url" content="https://removelindsay.now.sh" />
          <meta name="twitter:card" content="summary" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <CenteredColumn>
          <>
            <Box height="12px"></Box>
            <Heading fontWeight="bold" as="h2" size="lg" marginBottom="12px">
              Email Petition To Remove Commissioner Lindsay
            </Heading>
            <a href="http://chng.it/tGF7fFs2" target="_blank">
              <Alert status="info">
                <AlertIcon />
                <AlertDescription>
                  Don't forget to sign our Change.org petition here:
                  <Link href="http://chng.it/tGF7fFs2" ml="8px" target="_blank">
                    http://chng.it/tGF7fFs2
                  </Link>
                </AlertDescription>
              </Alert>
            </a>
            <Text mt="12px" mb="12px">
              On June 3, 2020, Garden Grove Planning Commissioner Josh Lindsay
              broadcast a live-stream of a peaceful protest on multiple Facebook
              groups. During this stream, Commissioner Lindsay made several
              reprehensible comments about the protest.
            </Text>
            <Text mb="12px">
              Help us hold this public official accountable and email the Garden
              Grove's leadership using this tool.
            </Text>
            <Form
              name={name}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />

            {finalName && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 100 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
              >
                <Letter key="letter" name={finalName} />
              </motion.div>
            )}
          </>
        </CenteredColumn>
      </Container>
    </div>
  );
}
