import * as React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
// import { ColorModeSwitcher } from "./ColorModeSwitcher";
// import { Logo } from "./Logo";
import Budget from "./pages/Budget";

export const App = () => {
  const theme = extendTheme({
    styles: {
      global: {
        // styles for the `body`
        body: {
          bg: "#FCFCFC",
          color: "#001233",
          fontFamily: "cs",
        },
        // styles for the `a`
        // a: {
        //   color: "teal.500",
        //   _hover: {
        //     textDecoration: "underline",
        //   },
        // },
      },
    },
    fonts: {
      cs: "CircularStd",
      csMedium: "CircularStd Medium",
      csBold: "CircularStd Bold",
      csBlack: "CircularStd black",
    },
  });
  return (
    <ChakraProvider theme={theme}>
      {/* <ColorModeSwitcher> */}
      <Budget />
      {/* </ColorModeSwitcher> */}
    </ChakraProvider>
  );
};
