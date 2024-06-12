import styles from "./style";
import {  Navbar, Billing, CardDeal, Business, Clients, CTA, Stats, Footer, Testimonials, Hero, Services, Hero2, Eemails, Hero3, Lgservicos, Business2, CardDeal2, Roadmap, Devmap, Devmap2 } from "./components";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

const Home = () => (
  <div className='bg-custom-gradient w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar/>
      </div>    
    </div>
    <div className={`bg-custom-image bg-no-repeat bg-cover bg-center ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero/>
      </div>
    </div>
    <div className={`bg-custom-gradient bg-no-repeat bg-cover bg-center ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Business/>
      </div>
    </div>
    <div className={`bg-custom-gradient bg-no-repeat bg-cover bg-center ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <CardDeal/>
      </div>
    </div>
    <div className={`bg-custom-gradient bg-no-repeat bg-center ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        {/*<Testimonials/>*/}
       
        <CTA/>
        <Footer/>
      </div>
    </div>
  </div>
)

const Servicos = () => (
  <div className='bg-primary w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar/>
      </div>    
    </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Business2/>
          <Roadmap/>
          <div style={{ marginTop: '5rem' }}></div>
          <Footer/>
          
        </div>
  </div>
  </div>

)

const Aboutus = () => (
  <div className='bg-primary w-full overflow-hidden'>
  <div className={`${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
      <Navbar/>
      <Devmap/>
      <Devmap2/>

      <Footer/>

  <div>
  </div>
  </div>
  </div>
  </div>
)

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/services" element={<Servicos />} />
      <Route path="/aboutus" element={<Aboutus />} />
    </Routes>
  </BrowserRouter>
)

export default App
