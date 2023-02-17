
import Routes from "./routes/Routes";
import Navabar from "./components/navabar/Navabar";
import Footer from "./components/footer/Footer";
import Landing from "./components/landing_page/Landing";
import Fruteveg from "./components/products/fruteveg";
import { useState } from "react";


function App() {
  const[landingData, setLandingData]=useState([{ id:1,image:'https://www.bigbasket.com/media/uploads/banner_images/YXHP144_hp_fom_m_bbpl-staples_460_050223_Bangalore.jpg'},
  { id:1,image:'https://www.bigbasket.com/media/uploads/banner_images/YXHP144_hp_fom_m_bbpl-staples_460_050223_Bangalore.jpg'},
  { id:1,image:'https://www.bigbasket.com/media/uploads/banner_images/YXHP144_hp_fom_m_bbpl-staples_460_050223_Bangalore.jpg'}])

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
    <div >

      <Routes/>
      <Navabar />
      <Landing obj_data={landingData} />
      <Fruteveg obj_data={data}/>
      <Footer />

    </div>
  );
}

export default App;
