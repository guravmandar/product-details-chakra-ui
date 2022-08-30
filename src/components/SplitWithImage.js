import {Box, Container, Flex, Image, SimpleGrid, Text, useColorModeValue,} from '@chakra-ui/react';
import ProductDetails from "./ProductDetails.js"

const SplitWithImage = ({product}) => {
    return (
        <Container maxW={'7xl'} zIndex={10} position={'relative'} py={12}>
            <SimpleGrid columns={{base: 1, md: 2}} spacing={10}>
                <Flex>
                    <Image rounded={'md'} alt={'feature image'}
                        src={'https://www.esprit.de/dw/image/v2/BDSS_PRD/on/demandware.static/-/Sites-esprit-master/default/dwf713f12a/images/20/992/992EE2K306_450_20.jpg?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'}
                        objectFit={'cover'}
                    />
                </Flex>
                <Box>
                    <Text
                        fontSize={{base: '16px', lg: '18px'}}
                        color={'black'}
                        fontWeight={'500'}
                        textTransform={'uppercase'}
                        mb={'4'}>
                        {product.name}
                    </Text>
                    <Text
                        fontSize={{base: '16px', lg: '18px'}}
                        color={useColorModeValue('yellow.500', 'yellow.300')}
                        fontWeight={'500'}
                        textTransform={'uppercase'}
                        mb={'4'}>
                        {product.price}
                    </Text>
                    <ProductDetails key={product._id} product={product}/>
                </Box>
            </SimpleGrid>
        </Container>
    );
}

export default SplitWithImage;
