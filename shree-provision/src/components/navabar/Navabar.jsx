import React from 'react'
import { Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Navabar = () => {
  return (
    <div>
     <Flex w="100%"  gap={20}>

<Link to="/" >home</Link>
<Link to="/login" >login</Link>
<Link to="/signup" >signup</Link>
<Link to="/" >home</Link>
<Link to="/" >home</Link>

     </Flex>

    </div>
  )
}

export default Navabar
