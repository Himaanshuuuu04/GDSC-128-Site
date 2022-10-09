import React from 'react';
import { Box, Flex, Button, Stack, Image, Text,Link } from '@chakra-ui/react';
export default function Nav() {
  return (
    <>
      <Box px={4} pb={3} zIndex={1}>
        
        <Flex p={5} justifyContent={'space-between'}>
          <Flex fontSize={40} color="white">
            <Stack direction={'row'} spacing="35px">
           
              <Image borderRadius="full" boxSize="7vw" src="/image 2.png" />
              <Link href="/" style={{ textDecoration: 'none' }}>
              <Text pt={'1.5vw'} fontSize="2.5vw" fontWeight={'semibold'}   color='white'>
                GDSC JIIT 128
              </Text></Link>
            </Stack>
          </Flex>

          <Flex alignItems={'center'} justifyContent="space-between">
            <Stack direction={'row'} spacing={7} justifyContent="space-between">
              <Button
                color="white"
                variant="link"
                fontSize={'1.5vw'}
                fontWeight={'normal'}
                p={'3vw'}
              >
                <Link href="/events" style={{ textDecoration: 'none' }}>Events</Link>
              </Button>

              <Button
              
              
                color="white"
                variant="link"
                fontSize={'1.5vw'}
                fontWeight={'normal'}
                p={'3vw'}
              >
                <Link href="/teams" style={{ textDecoration: 'none' }}>Team</Link>
               
              </Button>
            

              <Button
                color="white"
                variant="link"
                fontSize={'1.5vw'}
                fontWeight={'normal'}
                p={'2.55vw'}
              >
                <Link href="/" style={{ textDecoration: 'none' }}>Login</Link>
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
