import GananciaAumentadaImg from "../../assets/images/ganancia-aumentada.png";
import ApuestaGratisMobileImg from "../../assets/images/apuesta-gratis-mobile.png";
import ApuestaGratisImg from "../../assets/images/apuesta-gratis.png";
import CincuentaGirosMobileImg from "../../assets/images/50giros-mobile.jpeg";
import CincuentaGirosImg from "../../assets/images/50giros.png";
import { isMobileDevice } from "../../utils";

export const BenefitsPage = () => {
  const isMobile = isMobileDevice();

  return (
    <div className="w-full py-4 px-6 sm:px-10 ">
      <div className="max-w-[600px] mx-auto ">
        <div className="flex flex-col items-center mb-8">
          <h1 className="font-gobold italic text-center text-xl mb-4">
            ¡SOBRIN@! HEMOS RECIBIDO TU INFORMACIÓN CON ÉXITO.
          </h1>
          <p className="font-rubik text-center">
            En aproximadamente 15 minutos tendrás los siguientes beneficios
            asignados a tu cuenta:
          </p>
        </div>

        <div className="flex flex-col items-center mb-10">
          <h2 className="font-gobold italic text-center text-lg mb-6">
            1. GANANCIA AUMENTADA.
          </h2>
          <p className="font-rubik text-center mb-4">
            Una de tus jugadas podrá tener 25% más de ganancia. Para usarlo,
            debes activar la promoción en el cupón de apuestas.
          </p>
          <p className="font-rubik text-center text-sm mb-4">
            *Solo aplica al evento Inter vs PSG. No aplica para apuestas con
            bono
          </p>
          <div className="grid grid-cols-2 px-6 py-4">
            <div className="flex  items-center ">
              <h4 className="text-left font-gobold italic uppercase text-wrap">
                GANANCIA ADICIONAL <br /> MÁXIMA: S/200
              </h4>
            </div>
            <div>
              <img
                src={GananciaAumentadaImg}
                className="at-shadow-img rounded-md"
                alt="ganancia aumentada"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mb-10">
          <h2 className="font-gobold italic text-center text-lg mb-6">
            2. APUESTA GRATIS DE S/20 PARA JUGAR LA FINAL.
          </h2>
          <p className="text-center mb-6">
            Lo pódras encontrar en tu sección de{" "}
            <span className="font-semibold">“Mis bonos y torneos”</span> listo
            para activar:
          </p>
          <img
            src={isMobile ? ApuestaGratisMobileImg : ApuestaGratisImg}
            className="at-shadow-img rounded-md"
            alt="apuesta gratis"
          />
        </div>

        <div className="flex flex-col mb-10">
          <h2 className="font-gobold italic text-center text-lg mb-6">
            3. 50 GIROS GRATIS PARA LOS JUEGOS DE PRAGMATIC PLAY.
          </h2>
          <p className="font-rubik text-center mb-6">
            Lo podrás encontrar en tu sección de{" "}
            <span className="font-semibold">“Mis bonos y torneos”</span> listo
            para activar:
          </p>

          <img
            src={isMobile ? CincuentaGirosMobileImg : CincuentaGirosImg}
            className="at-shadow-img rounded-md"
            alt="50 giros"
          />
        </div>
      </div>
    </div>
  );
};
