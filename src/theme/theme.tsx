import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: (props:any) => ({
      "html, body": {
        fontSize: "sm",
        color: props.colorMode === "dark" ? "gray.200" : "gray.600",
        lineHeight: "tall",
        padding: 0,
        margin: 0
      },
      a: {
        color: props.colorMode === "dark" ? "white" : "gray.600",
        textDecoration: "underline"
      }
    })
  }
});
