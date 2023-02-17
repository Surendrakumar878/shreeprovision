import React from 'react'
import { Flex,Box, Image,Text } from '@chakra-ui/react';

function Landing({obj_data}) {
  console.log(obj_data);
  return (

    <div>
        {/* <Box >
          <Image src={props.image}/>
        </Box> */}
        <Flex w="95%" justifyContent={'space-between'} m='auto' mt={'30px'} mb={'30px'}>
        {obj_data.map((img)=>(
           <Box key={img.id}>
           <Image src={img.image}/>
         </Box>
        ))}
       
            {/* <Image w="15%"  src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250123_01.png"/>
            <Image w="15%" src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250123_02.png"/>
            <Image w="15%" src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250123_03.png"/>
            <Image w="15%" src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250123_04.png"/>
            <Image w="15%" src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250123_05.png"/> */}
            {/* <Image w="15%" src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250123_06.png"/> */}
        </Flex>

        <Box mt={'30px'}>
          <Text textAlign={'center'} fontSize="25px">Snacks Store</Text>
          <Flex w="95%"  borderTop={'1px solid gray'} m="auto" p="12px" justifyContent={'space-between'} >
           
            <Image w='24%' border={'1px solid gray'} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/d41ad35e-4a83-4974-bede-c406abf599a0/hp_chai-Daily-Food-Essential-Storefront_m_480_250123_1.jpg"/>
            <Image w='24%' border={'1px solid gray'} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/d41ad35e-4a83-4974-bede-c406abf599a0/hp_morning-Daily-Food-Essential-Storefront_m_480_250123_2.jpg"/>
            <Image w='24%' border={'1px solid gray'} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/d41ad35e-4a83-4974-bede-c406abf599a0/hp_satisfy-Daily-Food-Essential-Storefront_m_480_250123_3.jpg"/>
            <Image w='24%' border={'1px solid gray'} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/d41ad35e-4a83-4974-bede-c406abf599a0/hp_sweet-Daily-Food-Essential-Storefront_m_480_250123_4.jpg"/>
           
          </Flex>
        </Box>

        <Box mt={'15px'}>
          <Text textAlign={'center'} fontSize="25px">Cleaning & Household</Text>
          <Flex w="95%"  borderTop={'1px solid gray'} m="auto" p="12px" justifyContent={'space-between'} >
           
            <Image w='24%' border={'1px solid gray'} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/bbc18af5-9781-476f-b98a-199d33655f37/hp_cleaners-disfec_cleaningStorefront_m_480_250123_01.jpg"/>
            <Image w='24%' border={'1px solid gray'} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/bbc18af5-9781-476f-b98a-199d33655f37/hp_fresheners-repellem-cleaningStorefront_m_480_250123_02.jpg"/>
            <Image w='24%' border={'1px solid gray'} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/bbc18af5-9781-476f-b98a-199d33655f37/hp_detergebts-favric-cleaningStorefront_m_480_250123_03.jpg"/>
            <Image w='24%' border={'1px solid gray'} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/bbc18af5-9781-476f-b98a-199d33655f37/hp_disposable-cleaningStorefront_m_480_250123_4.jpg"/>
           
          </Flex>
        </Box>

        <Box mt={'15px'}>
          <Text textAlign={'center'} fontSize="25px">Beauty and Hygiene</Text>
          <Flex w="95%"  borderTop={'1px solid gray'} m="auto" p="12px" justifyContent={'space-between'} >
            <Image w='16%' border={'1px solid gray'} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/91e86597-b2d2-4bda-93fd-15f9bf8ebc34/hp_b&h_makeup_m_250123_275x184_05.jpg"/>
            <Image w='16%' border={'1px solid gray'} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/91e86597-b2d2-4bda-93fd-15f9bf8ebc34/hp_b&h_scentful_m_250123_560x378_01.jpg"/>
            <Image w='16%' border={'1px solid gray'} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/91e86597-b2d2-4bda-93fd-15f9bf8ebc34/hp_b&h_min-30_m_250123_275x184_02.jpg"/>
            <Image w='16%' border={'1px solid gray'} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/91e86597-b2d2-4bda-93fd-15f9bf8ebc34/hp_b&h_shaving_m_250123_275x184_04.jpg"/>
            <Image w='16%' border={'1px solid gray'} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/91e86597-b2d2-4bda-93fd-15f9bf8ebc34/hp_under-199_m_250123_275x184_03.jpg"/>
            <Image w='16%' border={'1px solid gray'} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/91e86597-b2d2-4bda-93fd-15f9bf8ebc34/hp_skin-care_m_250123_275x184_03.jpg"/>
          </Flex>
        </Box>

        <Box mt={'15px'}>
          <Text textAlign={'center'} fontSize="25px">Brand Store</Text>
          <Flex w="95%"  borderTop={'1px solid gray'} m="auto" p="12px" justifyContent={'space-between'} >
            <Image w='16%' border={'1px solid gray'} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/dae30b65-7d03-4c40-b2ac-79e99f7f62b2/hp_amul-brandStorefront_m_480_251022_01.jpg"/>
            <Image w='16%' border={'1px solid gray'} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/dae30b65-7d03-4c40-b2ac-79e99f7f62b2/hp_dettol-brandStorefront_m_480_251022_02.jpg"/>
            <Image w='16%' border={'1px solid gray'} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/dae30b65-7d03-4c40-b2ac-79e99f7f62b2/hp_harpic-brandStorefront_m_480_091122_03.jpg"/>
            <Image w='16%' border={'1px solid gray'} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/dae30b65-7d03-4c40-b2ac-79e99f7f62b2/hp_lindberg-brandStorefront_m_480_251022_04.jpg"/>
            <Image w='16%' border={'1px solid gray'} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/dae30b65-7d03-4c40-b2ac-79e99f7f62b2/hp_Tasties-brandStorefront_m_480_251022_05.jpg"/>
            <Image w='16%' border={'1px solid gray'} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/dae30b65-7d03-4c40-b2ac-79e99f7f62b2/hp_durex-brandStorefront_m_480_251022_06.jpg"/>
          </Flex>
        </Box>

        <Box mt={'15px'}>
          <Text textAlign={'center'} fontSize="25px">Home and Kitchen</Text>
          <Flex w="95%"  borderTop={'1px solid gray'} m="auto" p="12px" justifyContent={'space-between'} >
            <Image w='16%' border={'1px solid gray'} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/a8a18257-1389-4fa4-9532-ffc26e9bcfdf/hp_GMStorefront(BC)_m_250123_1.jpg"/>
            <Image w='16%' border={'1px solid gray'} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/a8a18257-1389-4fa4-9532-ffc26e9bcfdf/hp_GMStorefront(BC)_m_250123_2.jpg"/>
            <Image w='16%' border={'1px solid gray'} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/a8a18257-1389-4fa4-9532-ffc26e9bcfdf/hp_GMStorefront(BC)_m_250123_3.jpg"/>
            <Image w='16%' border={'1px solid gray'} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/a8a18257-1389-4fa4-9532-ffc26e9bcfdf/hp_GMStorefront(BC)_m_250123_4.jpg"/>
            <Image w='16%' border={'1px solid gray'} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/a8a18257-1389-4fa4-9532-ffc26e9bcfdf/hp_GMStorefront(BC)_m_250123_5.jpg"/>
            <Image w='16%' border={'1px solid gray'} src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6b247e93-cfa2-4559-88a8-777a2a2e76d0/a8a18257-1389-4fa4-9532-ffc26e9bcfdf/hp_GMStorefront(BC)_m_250123_6.jpg"/>
          </Flex>
        </Box>
    </div>
  )
}
export default Landing;
