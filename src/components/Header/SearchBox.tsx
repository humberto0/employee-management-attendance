import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { RiSearchLine } from "react-icons/ri";

import { Box, Flex, Icon, useColorModeValue, useToast } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useSidebarDrawer } from "src/contexts/SidebarDrawerContext";
import { apiAuth } from "src/services/apiAuthClient";
import * as yup from "yup";

import { useDebounce } from "../../services/hooks/useDebounce";
import { datePages } from "../../utils/datePages";
import { Input } from "../Form/Input";
import { NavLink } from "../Sidebar/NavLink";
type SearchFormData = {
  search: string;
};
type SearchPage = {
  title: string;
  description: string;
  link: string;
  date: string[];
};

const searchFormSchema = yup.object().shape({
  search: yup.string(),
});
export function SearchBox() {
  const { isOpen } = useSidebarDrawer();
  const router = useRouter();
  const bg = useColorModeValue("light", "dark");
  const [searchPage, setSearchPage] = useState<SearchPage | undefined>(
    undefined,
  );
  const { handleSubmit, formState, register } = useForm({
    resolver: yupResolver(searchFormSchema),
  });

  const { errors }: any = formState;

  const handleCreateUser: SubmitHandler<SearchFormData> = async values => {
    if (values.search !== "") {
      const resultSearch = datePages.filter(
        item =>
          String(item.date.filter(item => item.includes(values.search))) !== "",
      );
      console.log(resultSearch);
      if (resultSearch.length > 0) {
        setSearchPage(resultSearch[0]);
      } else {
        setSearchPage({
          title: "Resultado não encontrado",
          description: "page not found",
          link: "",
          date: [],
        });
      }
    } else {
      setSearchPage(undefined);
    }
  };
  return (
    <Flex position="relative" flex="1" alignSelf="center" maxW={400}>
      <Flex
        as="form"
        flex="1"
        py="4"
        px="8"
        maxW={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg={bg === "light" ? "gray.100" : "gray.900"}
        borderRadius="full"
        onChange={useDebounce(handleSubmit(handleCreateUser), 1000)}
      >
        <Input
          name="search"
          {...register("search")}
          error={errors.search}
          color="gray.50"
          variant="unstyled"
          px="4"
          mr="4"
          placeholder="Buscar na plataforma"
          _placeholder={{ color: "gray.400" }}
        />
        <Icon as={RiSearchLine} fontSize="20" />
      </Flex>
      {!!searchPage && (
        <Box
          bg={bg === "light" ? "gray.100" : "gray.700"}
          w="full"
          flex="1"
          borderRadius="5"
          position="absolute"
          top={12}
          marginTop={5}
          px="8"
          py="4"
        >
          {searchPage?.title === "Resultado não encontrado" ? (
            "Resultado não encontrado"
          ) : (
            <NavLink
              // eslint-disable-next-line react-perf/jsx-no-new-function-as-prop
              onClick={() => setSearchPage(undefined)}
              href={searchPage?.link ?? "/"}
            >
              {searchPage?.title}
            </NavLink>
          )}
        </Box>
      )}
    </Flex>
  );
}
