import { useCallback } from "react";

import { Button, useColorModeValue } from "@chakra-ui/react";

interface PaginationItemProps {
  isCurrent?: boolean;
  number: number;
  onPageChange: (page: number) => void;
}

export function PaginationItem({
  number,
  isCurrent = false,
  onPageChange,
}: PaginationItemProps) {
  const bg = useColorModeValue("light", "dark");
  const PaginationNumber = useCallback(() => {
    return onPageChange(number);
  }, []);

  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="green"
        disabled
        _disabled={{
          bgColor: "green.500",
          cursor: "default",
        }}
      >
        {number}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bg={bg === "light" ? "white" : "gray.700"}
      _hover={{
        bg: "gray.400",
      }}
      onClick={PaginationNumber}
    >
      {number}
    </Button>
  );
}
