import { ReactNode } from "react";
import { FieldError } from "react-hook-form";

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputGroup,
  InputLeftElement,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
  icon?: ReactNode;
}

export function Input({
  name,
  label,
  error = null,
  icon,
  ...rest
}: InputProps) {
  return (
    <FormControl isInvalid={!!error}>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <InputGroup>
        {icon && (
          <InputLeftElement pointerEvents="visibleStroke" children={icon} />
        )}
        <ChakraInput
          id={name}
          name={name}
          focusBorderColor="green.500"
          bg="transparent"
          variant="filled"
          borderColor="white"
          _hover={{
            bgColor: "gray.700",
          }}
          size="lg"
          {...rest}
        />
      </InputGroup>

      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
}
