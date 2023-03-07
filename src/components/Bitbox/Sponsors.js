import {
    GridItem,
    SimpleGrid,
    Grid,
    Image,
    Text,
    Flex,
    Link,
    Box,
    HStack,
    grid
    
  } from '@chakra-ui/react';
import React from 'react'
import '../../css/Sponsors.css'
export default function Sponsors() {
    return (
      <>
             <Box margin={'50px'} mt={{base: '-15vw', md:'3vw'}}>
        <Text fontSize={{base:'8vw', md:'6xl'}} align="center"  margin = 'auto' marginTop={'120px'} color='white'>
          Sponsors
        </Text>
        <Grid
          templateColumns="repeat(4, 0fr)"
          gap={0}
          alignContent={'center'}
          justifyContent={'center'}
          ml={{base:'auto',md:'310px'}}
          mr={{base:'auto',md:'310px'}}
          mt={{base:'10vw',md:'10vw'}}
          // w={'50vw'}
        >
          <GridItem
            w=""
            h=""
            bg="#161515"
            border={'1px solid white'}
            className='sponsor'
            display={'flex'}
            justifyContent={'center'}
            
          >
            <Image src= "/rosenfeld.webp" w={'60%'} h={'60%'} className='image' margin='auto' position={'relative'}/>
          </GridItem>
          <GridItem
            w="17vw"
            h="17vw"
            bg="#161515"
            border={'1px solid white'}
            className='sponsor'
            display={'flex'}
            justifyContent={'center'}
            
          >
            <Image src= "/logo-google.webp" w={'50%'} h={'50%'} className='image' margin='auto' position={'relative'}/>
          </GridItem><GridItem
            w="17vw"
            h="17vw"
            bg="#161515"
            border={'1px solid white'}
            className='sponsor'
            display={'flex'}
            justifyContent={'center'}
            
          >
            <Image src= "/logo-google.webp" w={'50%'} h={'50%'} className='image' margin='auto' position={'relative'}/>
          </GridItem><GridItem
            w="17vw"
            h="17vw"
            bg="#161515"
            border={'1px solid white'}
            className='sponsor'
            display={'flex'}
            justifyContent={'center'}
            
          >
            <Image src= "/logo-google.webp" w={'50%'} h={'50%'} className='image' margin='auto' position={'relative'}/>
          </GridItem><GridItem
            w="17vw"
            h="17vw"
            bg="#161515"
            border={'1px solid white'}
            className='sponsor'
            display={'flex'}
            justifyContent={'center'}
            
          >
            <Image src= "/logo-google.webp" w={'50%'} h={'50%'} className='image' margin='auto' position={'relative'}/>
          </GridItem><GridItem
            w="17vw"
            h="17vw"
            bg="#161515"
            border={'1px solid white'}
            className='sponsor'
            display={'flex'}
            justifyContent={'center'}
            
          >
            <Image src= "/logo-google.webp" w={'50%'} h={'50%'} className='image' margin='auto' position={'relative'}/>
          </GridItem><GridItem
            w="17vw"
            h="17vw"
            bg="#161515"
            border={'1px solid white'}
            className='sponsor'
            display={'flex'}
            justifyContent={'center'}
            
          >
            <Image src= "/logo-google.webp" w={'50%'} h={'50%'} className='image' margin='auto' position={'relative'}/>
          </GridItem><GridItem
            w="17vw"
            h="17vw"
            bg="#161515"
            border={'1px solid white'}
            className='sponsor'
            display={'flex'}
            justifyContent={'center'}
            
          >
            <Image src= "/logo-google.webp" w={'50%'} h={'50%'} className='image' margin='auto' position={'relative'}/>
          </GridItem><GridItem
            w="17vw"
            h="17vw"
            bg="#161515"
            border={'1px solid white'}
            className='sponsor'
            display={'flex'}
            justifyContent={'center'}
            
          >
            <Image src= "/logo-google.webp" w={'50%'} h={'50%'} className='image' margin='auto' position={'relative'}/>
          </GridItem><GridItem
            w="17vw"
            h="17vw"
            bg="#161515"
            border={'1px solid white'}
            className='sponsor'
            display={'flex'}
            justifyContent={'center'}
            
          >
            <Image src= "/logo-google.webp" w={'50%'} h={'50%'} className='image' margin='auto' position={'relative'}/>
          </GridItem><GridItem
            w="17vw"
            h="17vw"
            bg="#161515"
            border={'1px solid white'}
            className='sponsor'
            display={'flex'}
            justifyContent={'center'}
            
          >
            <Image src= "/logo-google.webp" w={'50%'} h={'50%'} className='image' margin='auto' position={'relative'}/>
          </GridItem><GridItem
            w="17vw"
            h="17vw"
            bg="#161515"
            border={'1px solid white'}
            className='sponsor'
            display={'flex'}
            justifyContent={'center'}
            
          >
            <Image src= "/logo-google.webp" w={'50%'} h={'50%'} className='image' margin='auto' position={'relative'}/>
          </GridItem><GridItem
            w="17vw"
            h="17vw"
            bg="#161515"
            border={'1px solid white'}
            className='sponsor'
            display={'flex'}
            justifyContent={'center'}
            
          >
            <Image src= "/logo-google.webp" w={'50%'} h={'50%'} className='image' margin='auto' position={'relative'}/>
          </GridItem><GridItem
            w="17vw"
            h="17vw"
            bg="#161515"
            border={'1px solid white'}
            className='sponsor'
            display={'flex'}
            justifyContent={'center'}
            
          >
            <Image src= "/logo-google.webp" w={'50%'} h={'50%'} className='image' margin='auto' position={'relative'}/>
          </GridItem><GridItem
            w="17vw"
            h="17vw"
            bg="#161515"
            border={'1px solid white'}
            className='sponsor'
            display={'flex'}
            justifyContent={'center'}
            
          >
            <Image src= "/logo-google.webp" w={'50%'} h={'50%'} className='image' margin='auto' position={'relative'}/>
            </GridItem><GridItem
            w="17vw"
            h="17vw"
            bg="#161515"
            border={'1px solid white'}
            className='sponsor last'
            display={'flex'}
            justifyContent={'center'}
            alignItems='center'

            
            
          >
            <Text fontSize={'2vw'}  color = 'white' margin = '2vw'textAlign='center' className  = 'space'>And there's space for you too </Text>
            <Text fontSize={'2vw'}  color = 'white' margin = '2vw'textAlign='center' className ='us' display={'none'} >Sponsor us</Text>
          </GridItem>
        </Grid>
      </Box>
         


      </>
    );
  }
  