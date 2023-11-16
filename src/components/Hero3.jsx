import styles from "../style";
import { discount, robot, backdoback, wp_contato, rosto } from "../assets";
import GetStarted from "./GetStarted";

const Hero3 = () => {
  return (
    <section id="home" 
    className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

        <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[50px] text-[50px] text-white ss:leading-[50.8px] leading-[50px]">
                Consultoria ativa: {" "}
                <span className="text-gradient ss:text-[40px]">Resultados significativos.</span>{" "}
              </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            {/*<GetStarted />*/}
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[58px] text-[52px] text-white ss:leading-[70.8px] leading-[75px] w-full">
            
        </h1>
        <p className={`${styles.paragraph} ${styles.justified} max-w-[700px] mt-5`}>
        A OptSec é composta por uma equipe dinâmica de auditores especialistas em segurança com um background sólido em ciência da computação. Nós somos mais do que consultores, somos solucionadores de problemas ativos.

        Nossa compreensão profunda de sistemas e seus pontos de vulnerabilidade nos permite identificar riscos e implementar soluções robustas de segurança. Nós não apenas aconselhamos, nós implementamos as mudanças necessárias, proporcionando segurança, confiabilidade e paz para seus clientes.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

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

export default Hero3;
