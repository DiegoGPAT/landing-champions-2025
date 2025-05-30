const CHAMPIONS_API_URL = import.meta.env.VITE_CHAMPIONS_API_URL;

export const register = async (form: { num_doc: string; type_doc: string }) => {
  try {
    const response = await fetch(`${CHAMPIONS_API_URL}/v1/customers/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("API error response:", errorBody);
      throw new Error(
        response.status == 400 ? "Error de validación" : errorBody
      );
    }

    const json = await response.json();

    return json;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Error al registrar usuario:", error);
    throw new Error(error?.message || "Ocurrió un error inesperado.");
  }
};
