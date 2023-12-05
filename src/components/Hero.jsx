import styles from "../style";
import { discount, robot, backdoback, logo } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" 
    style={{ 
      height: '900px', 
      width: '900px', 
      backgroundPosition: 'center', 
      backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat' 
  }}
    className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> de Desconto{" "}
            <span className="text-white">no primeiro</span> Contrato.
          </p>
        </div>

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
       

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
