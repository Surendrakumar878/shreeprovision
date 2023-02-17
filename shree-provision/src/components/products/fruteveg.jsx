import React, { useState } from "react";
import { Box, Button, Flex, Text, Image } from "@chakra-ui/react";

function Fruteveg( ) {
  const[data,setData]=useState([{ id:1, img:"https://www.bigbasket.com/media/uploads/p/s/10000150_19-fresho-onion.jpg",
  name:"Onion",
  price:"Rs 25",
  btn:"Add to cart"
  },
  { id:2, img:"https://www.bigbasket.com/media/uploads/p/s/10000150_19-fresho-onion.jpg",
  name:"Onion",
  price:"Rs 25",
  btn:"Add to cart"
  },
  { id:3, img:"https://www.bigbasket.com/media/uploads/p/s/10000150_19-fresho-onion.jpg",
  name:"Onion",
  price:"Rs 25",
  btn:"Add to cart"
  },
  { id:4, img:"https://www.bigbasket.com/media/uploads/p/s/10000150_19-fresho-onion.jpg",
  name:"Onion",
  price:"Rs 25",
  btn:"Add to cart"
  },
  { id:5, img:"https://www.bigbasket.com/media/uploads/p/s/10000150_19-fresho-onion.jpg",
  name:"Onion",
  price:"Rs 25",
  btn:"Add to cart"
  },
  ])
    return (
        <div>
            <Text fontSize={"25px"} textAlign="center" >Products</Text>
            <Flex w="95%" justifyContent={'space-between'} m='auto' gap="10px" border="1px solid teal" flexWrap={'wrap'}  >
                {data.map((cart) => (
                    <Box key={cart.id} border="1px solid red" w="24%" h="250px" display="flex" flexDirection={'column'} alignItems="center">

                        <Image src={cart.img} />
                        <Text>{cart.name}</Text>
                        <Text>{cart.price}</Text>
                        <Button bg="tomato">{cart.btn}</Button>
                    </Box>
                ))}

                {/* <Box border="1px solid red" w="24%" h="250px" display="flex" flexDirection={'column'} alignItems="center">
              <Image src="https://www.bigbasket.com/media/uploads/p/s/10000071_14-fresho-carrot-orange.jpg"/>
                <Text>Carrot</Text>
                <Text>Rs 40</Text>
                <Button bg="tomato">Add to cart</Button>
              </Box>
              <Box border="1px solid red" w="24%" h="250px" display="flex" flexDirection={'column'} alignItems="center">
              <Image src="https://www.bigbasket.com/media/uploads/p/s/40162469_7-fresho-potato-new-crop.jpg"/>
                <Text>Potato</Text>
                <Text>Rs 30</Text>
                <Button bg="tomato">Add to cart</Button>
              </Box>
              <Box border="1px solid red" w="24%" h="250px" display="flex" flexDirection={'column'} alignItems="center"> <Image src="https://www.bigbasket.com/media/uploads/p/s/10000201_15-fresho-tomato-hybrid.jpg"/>
                <Text>Tomato</Text>
                <Text>Rs 30</Text>
                <Button bg="tomato">Add to cart</Button></Box>
              <Box border="1px solid red" w="24%" h="250px" display="flex" flexDirection={'column'} alignItems="center"> <Image src="https://www.bigbasket.com/media/uploads/p/s/10000263_12-fresho-strawberry.jpg"/>
                <Text>Strawberry</Text>
                <Text>Rs 1000</Text>
                <Button bg="tomato">Add to cart</Button></Box>
              <Box border="1px solid red" w="24%" h="250px" display="flex" flexDirection={'column'} alignItems="center" > <Image src="https://www.bigbasket.com/media/uploads/p/s/40057966_3-fresho-tender-coconut-medium.jpg"/>
                <Text>Tender Coconut</Text>
                <Text>Rs 32</Text>
                <Button bg="tomato">Add to cart</Button></Box>
              <Box border="1px solid red" w="24%" h="250px" display="flex" flexDirection={'column'} alignItems="center"> <Image src="https://www.bigbasket.com/media/uploads/p/s/10000074_19-fresho-cauliflower.jpg"/>
                <Text>Cauliflower</Text>
                <Text>Rs 100</Text>
                <Button bg="tomato">Add to cart</Button></Box>
              <Box border="1px solid red" w="24%" h="250px" display="flex" flexDirection={'column'} alignItems="center"> <Image src="https://www.bigbasket.com/media/uploads/p/s/10000069_20-fresho-capsicum-green.jpg"/>
                <Text>Capsicum</Text>
                <Text>Rs 40</Text>
                <Button bg="tomato">Add to cart</Button></Box>
              <Box border="1px solid red" w="24%" h="250px" display="flex" flexDirection={'column'} alignItems="center"> <Image src="https://www.bigbasket.com/media/uploads/p/s/10000142_16-fresho-ladies-finger.jpg"/>
                <Text>Ladie's finger</Text>
                <Text>Rs 60</Text>
                <Button bg="tomato">Add to cart</Button></Box>
              <Box border="1px solid red" w="24%" h="250px" display="flex" flexDirection={'column'} alignItems="center"> <Image src="https://www.bigbasket.com/media/uploads/p/s/10000098_9-fresho-coriander-leaves.jpg"/>
                <Text>Coriander leaf</Text>
                <Text>Rs 25</Text>
                <Button bg="tomato">Add to cart</Button></Box>
              <Box border="1px solid red" w="24%" h="250px" display="flex" flexDirection={'column'} alignItems="center"> <Image src="https://www.bigbasket.com/media/uploads/p/s/10000033_25-fresho-banana-yelakki.jpg"/>
                <Text>Banana</Text>
                <Text>Rs 60</Text>
                <Button bg="tomato">Add to cart</Button></Box>
              <Box border="1px solid red" w="24%" h="250px" display="flex" flexDirection={'column'} alignItems="center"> <Image src="https://www.bigbasket.com/media/uploads/p/s/40089743_2-fresho-beans-haricot.jpg"/>
                <Text>Beans</Text>
                <Text>Rs 60</Text>
                <Button bg="tomato">Add to cart</Button></Box>     */}
            </Flex>
        </div>
    )
}
export default Fruteveg;