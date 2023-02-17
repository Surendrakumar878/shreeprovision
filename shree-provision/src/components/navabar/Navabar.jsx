import React from 'react'

import { Flex, Box, Text, Image, Input, Button } from '@chakra-ui/react'
import { FaCaretDown, FaIdCard, FaSearch } from "react-icons/fa" 
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'
// import { FaCaretDown } from 'react-icons/fa'


const Navabar = () => {
  return (
    <div>

      <Box pl="50px" pr="50px" display="flex" justifyContent={'Space-between'} alignItems="center">
        <Image w="15%" src="shreelogo.png"/>
        <Flex gap={'35px'} alignItems="center" >
          <Input w="100%" placeholder='Search'/>
          <Link to="/">
           <Text>Home</Text>
          
          </Link>
          <Link to="/product" > <Text>Products</Text></Link>
         <Link  to="/login" >

         <Button>Signup/Login</Button>
         </Link> 
          <Text>Cart</Text>
        </Flex>
      </Box>
        {/* <Box w="100%"  border={'1px solid red'}>
          <Box w="70%" border={'1px solid black'} display="Flex" alignItems={'center'}>
            
              <Image w="20%" h="100px" src="https://png.pngtree.com/element_pic/00/16/07/115783931601b5c.jpg"/>
              <Box display={'flex'} alignItems="center" bg="green" borderRadius={'5px'} ml="10px" border={'1px solid red'} w="70%"> <Input placeholder='Search' backgroundColor={"white"} /><FaSearch fontSize={"25px"} /></Box>
            
          </Box>
          <Box border={'1px solid teal'} display="flex">
            <Box border={'1px solid tomato'} w="20%" textAlign={'center'} bg="green.300" fontSize={'18px'} fontWeight={'bold'}>SHOP BY CATAGORY</Box>
            <Box>Offer</Box>
          </Box>
        </Box> */}
       

    </div>
  )
}

export default Navabar
