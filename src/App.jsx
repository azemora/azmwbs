import styles from "./style";
import {  Navbar, Billing, CardDeal, Business, Clients, CTA, Stats, Footer, Testimonials, Hero, Services, Hero2, Eemails, Hero3, Lgservicos, Business2, CardDeal2 } from "./components";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

const Home = () => (
  <div className='bg-custom-gradient w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar/>
      </div>    
    </div>
    <div className={`gradientStart ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero/>
      </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats/>
        <Business/>
        <CardDeal/>
        {/*<Testimonials/>*/}
        <Clients/>
        <CTA/>
        <Footer/>
      </div>
    </div>
  </div>
)

const Contact = () => (
  <div className='bg-primary w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar/>
        <Eemails/>
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
          <Hero2/>
          <Business/>
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
      <Hero3/>
      <Testimonials/>
      <Footer/>

  <div>
    <h1>Contact Page</h1>
    <p>Welcome to our About us</p>
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
      <Route path="/contato" element={<Contact />} />
      <Route path="/aboutus" element={<Aboutus />} />
    </Routes>
  </BrowserRouter>
)

export default App
