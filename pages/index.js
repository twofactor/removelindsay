import Head from "next/head";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Container from "../components/ui/Container";
import CenteredColumn from "../components/ui/CenteredColumn";

import Form from "../components/Form";
import Letter from "../components/Letter";

export default function Home() {
  const [name, setName] = useState("");

  const handleChange = (event) => setName(event.target.value);

  return (
    <div className="container">
      <Container>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <CenteredColumn>
          <Form name={name} handleChange={handleChange} />

          {name && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
            >
              <Letter key="letter" name={name} />
            </motion.div>
          )}
        </CenteredColumn>
      </Container>
    </div>
  );
}
