import { Flex, Grid, GridItem } from '@chakra-ui/react'
import React, { useState } from 'react'
import Landing from '../../components/landing_page/Landing'
import Fruteveg from '../../components/products/fruteveg'

const Home = () => {
  const[landingData, setLandingData]=useState([{ id:1,image:'https://www.bigbasket.com/media/uploads/banner_images/YXHP144_hp_fom_m_bbpl-staples_460_050223_Bangalore.jpg'},
  { id:1,image:'https://www.bigbasket.com/media/uploads/banner_images/YXHP144_hp_fom_m_bbpl-staples_460_050223_Bangalore.jpg'},
  { id:1,image:'https://www.bigbasket.com/media/uploads/banner_images/YXHP144_hp_fom_m_bbpl-staples_460_050223_Bangalore.jpg'}])

  

  return (

        <>
         <Landing obj_data={landingData} />
      {/* <Fruteveg obj_data={data}/> */}
        </>



  )
}

export default Home
