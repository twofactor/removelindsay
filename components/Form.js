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
    </>
  );
}
