import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Flex,
    HStack,
    Link,
    useColorModeValue,
} from '@chakra-ui/react';

const SimpleNav = ({category, subCategory}) => {
    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <HStack spacing={8} alignItems={'center'}>
                        <Box>
                            <Link href={'#'}>Back</Link>
                        </Box>
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <BreadcrumbLink href='#'>{category}</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                <BreadcrumbLink href='#'>{subCategory}</BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </HStack>
                </Flex>
            </Box>
        </>
    );
}

export default SimpleNav;