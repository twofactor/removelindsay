import { Input, Text, Box, Button } from "@chakra-ui/core";

export default function Form({ name, handleChange }) {
  return (
    <>
      <Text mb="12px">blabh blabh blhb</Text>
      <Text mb="12px">Blah blabh blabh</Text>
      <Text fontWeight="bold" mb="12px">
        As a Garden Grove resident, you can type in your full name here to get
        started.
      </Text>
      <Input
        value={name}
        onChange={handleChange}
        placeholder="Your Full Name Goes Here"
        mb="12px"
      />
      <Text mb="12px">
        After you're done typing out your name, we've provided a letter for you
        that you can use as a starting point in your email to Garden Grove city
        coucil.
      </Text>
      <Text mb="12px">
        You can copy and paste it into your own email client. In addition, you
        also can click on the buttons below to open either Gmail or your default
        email client with contents magically prefilled in. If you'd like to edit
        the email further, you can edit it in your email client.
      </Text>
      <Text fontWeight="bold" mb="12px">
        Clicking the button won't send the email, you still have to click send
        in your email client yourself.
      </Text>
    </>
  );
}
