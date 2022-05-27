import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

export function Input({ name, label, ...props }: InputProps) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <ChakraInput
        name={name}
        id={name}
        type="email"
        bgColor="gray.900"
        focusBorderColor="pink.500"
        variant={"filled"}
        _hover={{ bg: "gray.900" }}
        size="lg"
        {...props}
      />
    </FormControl>
  );
}
