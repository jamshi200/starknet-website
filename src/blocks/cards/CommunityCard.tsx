import {
  Box,
  HStack,
  Stack,
  Link,
  Divider,
  Image,
  Container,
  Flex,
  LinkBox,
} from "src/libs/chakra-ui";
import { Text } from "@ui/Typography/Text";

import NextLink from "next/link";
import { Heading } from "@ui/Typography/Heading";
import { CardGradientBorder } from "@ui/Card/CardGradientBorder";
import type { GetInvolvedBlock } from "@starknet-io/cms-data/src/pages";
import { getComputedLinkData } from "src/utils/utils";

type Props = GetInvolvedBlock & { locale: string };

export const CommunityCard = ({ link, description, title, locale }: Props) => {
  const { href, label } = getComputedLinkData(locale, link);

  return (
    <Container maxW="1104px">
      <LinkBox as={Link} href={href!} sx={{ textDecoration: "none!important" }}>
        <CardGradientBorder
          borderRadius={{ base: "24px", lg: "104px" }}
          padding="0"
        >
          <Box
            bg="card-bg"
            px={{ base: "24px", md: "48px" }}
            py="8"
            borderRadius={{ base: "24px", lg: "104px" }}
            // borderWidth="1px"
            // borderColor="card-br"
            boxShadow="none"
          >
            <Stack spacing="4" direction={{ base: "column", sm: "row" }}>
              <Flex
                direction={{ base: "column", md: "row" }}
                alignItems={{ base: "flex-start", md: "flex-start" }}
                gap={{ base: "24px", lg: "10" }}
              >
                <Image
                  src="/assets/cards/user-group.svg"
                  alt="icon"
                  boxSize={{ base: "72px" }}
                />

                <Divider orientation="vertical" />
                <Box mt={{ base: "-30px", md: 0 }}>
                  <HStack>
                    <Heading
                      color="heading-navy-fg"
                      mb="0"
                      variant="h4"
                      pb="2"
                    >
                      {title}
                    </Heading>
                  </HStack>
                  <Text variant="cardBody" color="muted">
                    {description}
                    <Link
                      ml="8px"
                      fontSize="16px"
                      as={NextLink}
                      variant="card"
                      href={href}
                      _hover={{ textDecoration: "underline!important" }}
                    >
                      {label} &rarr;
                    </Link>
                  </Text>
                </Box>
              </Flex>
            </Stack>
          </Box>
        </CardGradientBorder>
      </LinkBox>
    </Container>
  );
};
