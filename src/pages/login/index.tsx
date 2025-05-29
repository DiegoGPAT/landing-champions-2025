export const LoginPage = () => {
  return (
    <div className="w-full px-6 sm:px-10">
      <form className="my-4 mx-auto flex flex-col items-center max-w-[500px]">
        <h1 className="font-gobold italic text-center uppercase text-xl mb-8">
          Sobrin@, vive una final de champions de cine y gana con estos
          beneficios
        </h1>

        <select className="at-input w-[250px] mb-3" name="" id="">
          <option disabled selected>
            Tipo de documento
          </option>
          <option value={"DNI"}>DNI</option>
          <option value={"CE"}>CE</option>
          <option value={"PASAPORTE"}>PASAPORTE</option>
          <option value={"PTP"}>PTP</option>
        </select>
        <input
          placeholder="Número de documento"
          type="text"
          className="at-input w-[250px] mb-6"
        />

        <button className="at-button bg-[#FFC700] text-gray-800 text-sm mb-8">
          ACCEDE A TUS BENEFICIOS
        </button>

        <p className="font-medium text-sm ">
          *Exclusivo para clientes con cuenta web.
        </p>

        <hr className=" border-white w-[300px] my-8" />

        <h3 className="text-center font-gobold uppercase italic text-base mb-4">
          Recuerda que para acceder a los beneficios tienes que ser cliente AT
        </h3>

        <p className="text-center text-gray-200 mb-4">
          En caso no lo seas, dale clic al botón para poder registrarte.
        </p>

        <button className="at-button bg-[#FB3333] text-sm text-gray-100">
          REGÍSTRATE AQUÍ
        </button>
      </form>
    </div>
  );
};
