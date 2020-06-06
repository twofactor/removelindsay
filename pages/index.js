import Head from "next/head";
import { useState, useEffect } from "react";

import Container from "../components/ui/Container";
import CenteredColumn from "../components/ui/CenteredColumn";

import Form from "../components/Form";
import Letter from "../components/Letter";

export default function Home() {
  const [name, setName] = useState("");

  const handleChange = (event) => setName(event.target.value);

  const buildGmailLink = ({ email, body, subject }) =>
    `https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=${email}&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

  const buildMailTo = ({ email, body, subject }) =>
    `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

  return (
    <div className="container">
      <Container>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <CenteredColumn>
          <Form name={name} handleChange={handleChange} />
          {name && <Letter name={name} />}
        </CenteredColumn>
      </Container>
    </div>
  );
}
