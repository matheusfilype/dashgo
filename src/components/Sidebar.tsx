import { Box, Link, Stack, Icon, Text } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            GERAL
          </Text>
          <Stack spacing={4} mt="8" align={"stretch"}>
            <Link display="flex" alignItems="center">
              <Icon as={RiDashboardLine} fontSize="20" />
              <Text fontWeight="medium" ml="4">
                Dashboard
              </Text>
            </Link>

            <Link display="flex" alignItems="center">
              <Icon as={RiContactsLine} fontSize="20" />
              <Text fontWeight="medium" ml="4">
                Usuários
              </Text>
            </Link>
          </Stack>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
        </Box>

        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            AUTOMAÇÃO
          </Text>
          <Stack spacing={4} mt="8" align={"stretch"}>
            <Link display="flex" alignItems="center">
              <Icon as={RiInputMethodLine} fontSize="20" />
              <Text fontWeight="medium" ml="4">
                Formulários
              </Text>
            </Link>

            <Link display="flex" alignItems="center">
              <Icon as={RiGitMergeLine} fontSize="20" />
              <Text fontWeight="medium" ml="4">
                Automação
              </Text>
            </Link>
          </Stack>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
        </Box>
      </Stack>
    </Box>
  );
}
