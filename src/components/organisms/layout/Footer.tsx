import { Box, useBreakpointValue, useColorModeValue } from "@chakra-ui/react";
import { css } from "@emotion/react";

export const Footer = () => {
    const breakpointValue = useBreakpointValue(["base", "sm", "md", "lg"])
    return (
        <Box
            as="footer"
            borderTop="1px solid"
            bg={useColorModeValue("gray.100", "gray.900")}
            color="gray.400"
            textAlign="center"
            py={4}
            top='100vh'
            w='100%'
            css={breakpointValue !== 'lg' ? Mobile : pc}
        >
            &copy; 2022 by gorone.
        </Box>
    );
};

const Mobile = css({
    position: 'sticky'
})

const pc = css({
    position: 'absolute'
})