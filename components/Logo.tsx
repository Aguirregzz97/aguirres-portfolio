import { Text } from "@chakra-ui/layout";
import Image from "next/image";
import Link from "next/link";
import styled from "@emotion/styled";
import footPrintImgDark from "./../public/img/footprint-dark.png";
import footPrintImgLight from "./../public/img/footprint.png";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover img {
    transform: rotate(20deg);
  }
`;

const Logo: React.FC = () => {
  const { colorMode } = useColorMode();
  const footPrintImg =
    colorMode === "dark" ? footPrintImgDark : footPrintImgLight;
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={footPrintImg} width={20} height={20} alt="logo" />
          <Text
            color={useColorModeValue("gray.800", "whiteAlpha.900")}
            fontFamily="M PLUS Rounded 1c"
            fontWeight="bold"
            ml={3}
          >
            Andres Aguirre
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;
