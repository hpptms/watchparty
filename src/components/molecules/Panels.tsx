import { FC } from "react";
import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react"

export type data = {
    data: {
        url: string,
        alt: string,
        head: string,
        texts: Array<string | JSX.Element>
    }
}

export const Panels: FC<data> = ({ data }) => {

    return (

        <AccordionItem>
            <AccordionButton>
                <Box flex='1' textAlign='left' width='full'>
                    <Card
                        direction={{ base: 'column', sm: 'row' }}
                        overflow='hidden'
                        variant='outline'
                    >
                        <Image
                            objectFit='cover'
                            maxW={{ base: '100%', sm: '200px' }}
                            src={data.url}
                            alt={data.alt}
                        />
                        <Stack>
                            <CardBody>
                                <Heading fontSize={['sm', 'md', 'lg', 'xl']}>{data.head}</Heading>
                            </CardBody>
                        </Stack>
                    </Card>
                    <AccordionIcon />
                </Box>
            </AccordionButton>
            <AccordionPanel pb={4}>
                {data.texts.map((text: any, index) =>
                    <Text key={index} fontSize={['sm', 'md', 'lg', 'xl']}>{text}</Text>
                )}
            </AccordionPanel>
        </AccordionItem>
    )


}