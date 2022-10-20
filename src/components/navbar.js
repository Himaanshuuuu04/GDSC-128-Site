import React from 'react';
import { Box, Flex, Button, Stack, Image, Text, Link } from '@chakra-ui/react';
import { StyleConfig } from '@chakra-ui/react';

export default function Nav() {
  return (
    <>
      <Box px={4} pb={1} pt={0} mt={0} zIndex={1}>
        <Flex p={'1%'} justifyContent={'space-between'}>
          <Flex fontSize={40} color="white">
            <Stack direction={'row'} spacing={{ base: '15px', md: '35px' }}>
              <Image borderRadius="full" boxSize="7vw" src="/image 2.png" />
              <Link href="/" style={{ textDecoration: 'none' }}>
                <Text
                  // pt={'1.5vw'}
                  fontSize="2vw"
                  fontWeight={'semibold'}
                  color="white"
                  pl={0}
                  pt = {'1.8vw'}
                  style={{ textDecoration: 'none' }}
                  fontFamily={'Gilroy-Bold'}
                  _hover={{   bgGradient:"linear-gradient(99.23deg, #EA4335 2.35%, #4285F4 39.86%, #0F9D58 66.07%, #FBBC04 94.29%)", bgClip:"text"}}
                >
                  GDSC JIIT 128
                </Text>
              </Link>
            </Stack>
          </Flex>

          <Flex alignItems={'center'} justifyContent="space-between">
            <Stack
              direction={'row'}
              spacing={{ base: 3, md: 7 }}
              justifyContent="space-between"
            >
              <Button
                color="white"
                variant="link"
                fontSize={'1.6vw'}
                fontWeight={'normal'}
                p={{ base: '1px', md: '20px' }}
                style={{ textDecoration: 'none' }}
              >
                <Link href="/events" fontFamily={'Gilroy-Medium'} style={{ textDecoration: 'none' }} >
                  Events
                </Link>
              </Button>

              <Button
                color="white"
                variant="link"
                fontSize={'1.6vw'}
                fontWeight={'normal'}
                // p={'3vw'}
                p={{ base: '1px', md: '20px' }}
                style={{ textDecoration: 'none' }}
                _hover={{color: 'grey.200' }}
              
              >
                <Link href="/teams" fontFamily={'Gilroy-Medium'} style={{ textDecoration: 'none' }}>
                  Team
                </Link>
              </Button>

              <Button
                color="white"
                variant="link"
                fontSize={'1.6vw'}
                fontWeight={'normal'}
                // p={'2.55vw'}
                p={{ base: '1px', md: '20px' }}
                style={{ textDecoration: 'none' }}
              >
                <Link href="/login"  fontFamily={'Gilroy-Medium'} style={{ textDecoration: 'none' }} >
                  Login
                </Link>
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
