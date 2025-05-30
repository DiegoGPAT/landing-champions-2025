import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { ChampionService } from "../../services";
import type { IFormLogin } from "./types";
import { useTransition } from "react";
import { toast } from "sonner";

export const LoginPage = () => {
  const navigate = useNavigate(); // 2. Inicializa
  const [isPending, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IFormLogin>();

  const documentType = watch("documentType");

  const onSubmit: SubmitHandler<IFormLogin> = (data) => {
    startTransition(async () => {
      try {
        const resp = await ChampionService.register({
          num_doc: data.documentNumber,
          type_doc: data.documentType,
        });
        toast.success(resp.message);
        navigate("/benefits");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.log(error);
        toast.error(error.message || "Ocurrio un error");
      }
    });
  };

  const validateDocumentNumber = (value: string) => {
    const length = value.length;
    if (documentType === "DNI" && length !== 8) {
      return "El DNI debe tener 8 dígitos";
    }
    if (documentType === "CE" && (length < 9 || length > 12)) {
      return "El CE debe tener entre 9 y 12 caracteres";
    }
    if (documentType === "PASAPORTE" && (length < 6 || length > 9)) {
      return "El pasaporte debe tener entre 6 y 9 caracteres";
    }
    if (documentType === "PTP" && length !== 9) {
      return "El PTP debe tener 9 caracteres";
    }
    return true;
  };

  return (
    <div className="w-full px-6 sm:px-10">
      <form
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
        className="my-4 mx-auto flex flex-col items-center max-w-[450px]"
      >
        <h1 className="font-gobold italic text-center uppercase text-xl mb-8">
          Sobrin@, vive una final de champions de cine y gana con estos
          beneficios
        </h1>

        <div className="mb-3">
          <select
            {...register("documentType", {
              required: "Este campo es requerido",
            })}
            className="at-input w-[250px] "
          >
            <option value={""} disabled selected>
              Tipo de documento
            </option>
            <option value={"DNI"}>DNI</option>
            <option value={"CE"}>CE</option>
            <option value={"PASAPORTE"}>PASAPORTE</option>
            <option value={"PTP"}>PTP</option>
          </select>
          <small className="block mt-1 text-xs">
            {errors.documentType?.message}
          </small>
        </div>

        <div className="mb-6">
          <input
            placeholder="Número de documento"
            type="text"
            className="at-input w-[250px]"
            {...register("documentNumber", {
              required: "Este campo es requerido",
              validate: validateDocumentNumber,
            })}
          />
          <small className="block mt-1 text-xs">
            {errors.documentNumber?.message}
          </small>
        </div>

        <button
          disabled={isPending}
          className="at-button bg-[#FFC700] text-gray-800 text-sm mb-8"
        >
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

        <a
          href="https://www.apuestatotal.com/registro/"
          className="at-button bg-[#FB3333] text-sm text-gray-100"
        >
          REGÍSTRATE AQUÍ
        </a>
      </form>
    </div>
  );
};
