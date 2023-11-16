import styles from "../style";
import { discount, robot, backdoback, gamingBackground2 } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" 
    style={{ 
      
      backgroundImage: `url(${gamingBackground2})`, 
      backgroundPosition: 'center', 
      backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat' 
  }}
    className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

        <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[50px] text-[52px] text-white ss:leading-[70.8px] leading-[50px]">
                Promovendo a {" "} <br></br>
                <span className="text-gradient ss:text-[50px]">Segurança e eficiência</span>{" "}
              </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            {/*<GetStarted />*/}
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[58px] text-[52px] text-white ss:leading-[80.8px] leading-[75px] w-full">
            da Sua Empresa.
        </h1>
        <p className={`${styles.paragraph} ${styles.justified} max-w-[700px] mt-5`}>
        Na OptSec, desafiamos a estagnação e impulsionamos a transformação digital segura da sua empresa. Vamos além da consultoria, auxiliando na implementação prática de inovações. Com a OptSec, a transformação não é só planejada, é vivenciada, permitindo que sua empresa prospere na era digital.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>

      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
