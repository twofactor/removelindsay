import { Input } from "@chakra-ui/core";

export default function Form({ name, handleChange }) {
  return (
    <Input
      value={name}
      onChange={handleChange}
      placeholder="Your Full Name Goes Here"
    />
  );
}
