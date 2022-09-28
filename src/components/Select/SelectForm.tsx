import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  InputGroup,
  SelectProps as ChakraSelectProps,
  Select as ChakraSelect,
  useColorModeValue,
} from "@chakra-ui/react";

interface SelectProps extends ChakraSelectProps {
  name: string;
  label?: string;
  error?: FieldError;
}
const SelectBase: ForwardRefRenderFunction<HTMLSelectElement, SelectProps> = (
  { name, label, error = null, ...rest },
  ref,
) => {
  const bg = useColorModeValue("light", "dark");
  return (
    <FormControl isInvalid={!!error}>
      {label && (
        <FormLabel htmlFor={name} id={name}>
          {label}
        </FormLabel>
      )}
      <InputGroup>
        <ChakraSelect
          id={name}
          name={name}
          focusBorderColor="green.500"
          bg="transparent"
          placeholder={label}
          ref={ref}
          borderColor={bg ? "gray.200" : "gray.900"}
          _hover={{
            bgColor: bg === "light" ? "gray.100" : "gray.700",
          }}
          size="lg"
          {...rest}
        />
      </InputGroup>

      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};
export const Select = forwardRef(SelectBase);
