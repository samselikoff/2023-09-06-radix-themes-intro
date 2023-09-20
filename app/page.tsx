"use client";

import {
  ArrowRightIcon,
  DotsHorizontalIcon,
  HamburgerMenuIcon,
} from "@radix-ui/react-icons";
import {
  Flex,
  Text,
  Button,
  Box,
  Avatar,
  Card,
  Heading,
  IconButton,
  Link,
  Separator,
  TextField,
  Dialog,
} from "@radix-ui/themes";
import { allPeople, email } from "./people";
import { ReactNode } from "react";

export default function MyApp() {
  return (
    <div>
      <header>
        <Flex align="center" justify="between" py="2" px="4">
          <Text as="p" weight="medium" color="gray">
            Acme
          </Text>

          <IconButton variant="ghost" color="gray">
            <HamburgerMenuIcon width="20" height="20" />
          </IconButton>
        </Flex>
      </header>

      <Separator size="4" />

      <Box py="6" px="4">
        <Box height="7">
          <Heading as="h3" size="6" mt="-1">
            Your team
          </Heading>
        </Box>
        <Text as="p" size="2" mb="5" color="gray">
          Invite and manage your team members.
        </Text>
        <Flex gap="3" mb="5">
          <Box grow="1">
            <TextField.Input size="2" placeholder="Email address" />
          </Box>
          <Button size="2">Invite</Button>
        </Flex>
        <Flex direction="column">
          {[4, 2, 12, 20, 16].map((number, i) => (
            <Box key={number}>
              <Flex gap="4" align="center">
                <Flex
                  gap="3"
                  align="center"
                  style={{ width: 200, whiteSpace: "nowrap" }}
                >
                  <Avatar
                    src={allPeople[number]?.image}
                    fallback={allPeople[number]?.name[0].toUpperCase()}
                  />
                  <Link size="2">{allPeople[number]?.name}</Link>
                </Flex>
                <Text size="2" color="gray">
                  {email(allPeople[number]?.name)}
                </Text>
                <Flex grow="1" justify="end">
                  <IconButton variant="ghost" highContrast>
                    <Modal>
                      <DotsHorizontalIcon width="16" height="16" />
                    </Modal>
                  </IconButton>
                </Flex>
              </Flex>
              {i !== 4 && (
                <Box style={{ marginTop: -1 }}>
                  <Separator size="4" my="3" />
                </Box>
              )}
            </Box>
          ))}
        </Flex>
      </Box>
    </div>
  );
}

function Modal({ children }: { children: ReactNode }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger>{children}</Dialog.Trigger>

      <Dialog.Content style={{ maxWidth: 450 }}>
        <Dialog.Title>Edit profile</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Make changes to your profile.
        </Dialog.Description>

        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Name
            </Text>
            <TextField.Input
              defaultValue="Freja Johnsen"
              placeholder="Enter your full name"
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Email
            </Text>
            <TextField.Input
              defaultValue="freja@example.com"
              placeholder="Enter your email"
            />
          </label>
        </Flex>

        <Flex gap="5" mt="4" justify="end">
          <Dialog.Close>
            <Button color="gray">Cancel</Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button>Save</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}
