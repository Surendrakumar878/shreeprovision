import React from 'react'
import { Box, Flex, Text, Image } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'

const Footer = () => {
  return (
    <>
      <Box border={'1px solid red'} w="100%" m="auto" h="500px" mt="50px">
        <Flex gap={'20px'}>
          <Box  w='25%'>
            <Text pl="30px" color={'teal'}>bigbasket</Text>
               <UnorderedList listStyleType='none' ml="30px" lineHeight={'40px'}>
                <ListItem>
                About Us</ListItem>
                <ListItem>In News</ListItem>
                <ListItem>Green bigbasket</ListItem>
                <ListItem>Privacy Policy</ListItem>
                <ListItem>Affiliate</ListItem>
                <ListItem>Terms and Conditions</ListItem>
                <ListItem>Careers At bigbasket</ListItem>
                <ListItem>bb Blog</ListItem>
               </UnorderedList>
          </Box>

          <Box  w='22%'>
            <Text pl="16px" color={'teal'}>Help</Text>
               <UnorderedList listStyleType='none' lineHeight={'35px'}>
                <ListItem>FAQs</ListItem>
                <ListItem>Contact Us</ListItem>
                <ListItem>bb Wallet FAQs</ListItem>
                <ListItem>bb Wallet T&Cs</ListItem>
                <ListItem>Vendor Connect</ListItem>
               </UnorderedList>
          </Box>

          <Box w='22%'>
          <Text pl="16px" pb="16px" color={'teal'}>Download Our Appx</Text>
            <UnorderedList listStyleType='none'>
              
              <ListItem > <Image mb={'15px'}src="https://www.bbassets.com/static/v2633/custPage/build/content/img/Google-App-store-icon.png"/>  </ListItem>
              <ListItem> <Image src="https://www.bbassets.com/static/v2633/custPage/build/content/img/Apple-App-store-icon.png"/></ListItem>
            </UnorderedList>
          </Box>
          <Box>
           <Text pl="16px" pb="16px" color={'teal'}>Get Social With Us</Text>
          <Box display="flex" fontSize={'35px'} color="tomato" gap={'5'}>
          <FaFacebook/>
           <FaPinterest /> 
           <FaInstagram />
           <FaTwitter />
          </Box>
          </Box>
        </Flex>
        
      </Box>
    </>
  )
}

export default Footer;
