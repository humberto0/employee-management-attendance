import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";

import { Stack } from "@chakra-ui/react";
import { useSidebarDrawer } from "src/contexts/SidebarDrawerContext";

import { Can } from "../Can";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  const { isOpen } = useSidebarDrawer();

  return (
    <Stack
      spacing={isOpen ? "12" : "4"}
      align={isOpen ? "flex-start" : "flex-end"}
    >
      <NavSection title="GERAL">
        <NavLink icon={RiDashboardLine} href="/dashboard">
          {isOpen && "Dashboard"}
        </NavLink>
        <NavLink icon={RiContactsLine} href="/users">
          {isOpen && "Usuários"}
        </NavLink>
      </NavSection>
      <Can permissions={["users.create"]}>
        <NavSection title="AUTOMAÇÃO">
          <NavLink icon={RiInputMethodLine} href="/create">
            {isOpen && "Formulários"}
          </NavLink>
          <NavLink icon={RiGitMergeLine} href="/automation">
            {isOpen && "Automação"}
          </NavLink>
        </NavSection>
      </Can>
    </Stack>
  );
}
