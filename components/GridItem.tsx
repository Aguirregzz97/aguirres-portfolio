import { Box, LinkBox, LinkOverlay, Text } from "@chakra-ui/layout";
import { Global } from "@emotion/react";
import { thru } from "lodash";
import Image from "next/image";
import NextLink from "next/link";

type GridItemProps = {
  href: string;
  title: string;
  thumbnail: string;
};

export const GridItem: React.FC<GridItemProps> = ({
  children,
  href,
  title,
  thumbnail,
}) => {
  return (
    <Box w="100%" align="center">
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt="grid-item-thumbnail"
          className="grid-item-thumbnail"
          placeholder="blur"
          loading="lazy"
        />
        <LinkOverlay href={href} target="_blank">
          <Text mt={2}>{title}</Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </Box>
  );
};

type WorkGridItemProps = {
  id: string;
  title: string;
  thumbnail: StaticImageData;
};

export const WorkGridItem: React.FC<WorkGridItemProps> = ({
  children,
  id,
  title,
  thumbnail,
}) => {
  return (
    <Box w="100%" align="center">
      <NextLink href={`/works/${id}`}>
        <LinkBox cursor="pointer">
          <Image
            src={thumbnail}
            alt={title}
            className="grid-item-thumbnail"
            placeholder="blur"
          />
          <LinkOverlay href={`/works/${id}`}>
            <Text mt={2} fontSize={20}>
              {title}
            </Text>
          </LinkOverlay>
          <Text fontSize={14}>{children}</Text>
        </LinkBox>
      </NextLink>
    </Box>
  );
};

export const GridItemSyle: React.FC = () => {
  return (
    <Global
      styles={`
        .grid-item-thumbnail {
          border-radius: 12px;
        }
      `}
    />
  );
};
