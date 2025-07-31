interface ValidateQuestionsCodeReturnType {
  isValid: boolean;
  error?: "string";
  message?: "string";
}

export function ValidateQuestionsCode(texto: string) {
  if (!texto) {
    return { isValid: false, error: "The content is empty." };
  }

  try {
    const data = JSON.parse(texto);

    if (!Array.isArray(data)) {
      return { isValid: false, error: "The content should be an array." };
    }

    for (let i = 0; i < data.length; i++) {
      const item = data[i];

      // Verifica que sea un objeto
      if (typeof item !== "object" || item === null || Array.isArray(item)) {
        return { isValid: false, error: `The element ${i} is not an object.` };
      }

      // Claves obligatorias
      if (!("question" in item) || !("answer" in item)) {
        return {
          isValid: false,
          error: `The element ${i} is missing a required key. It should have "question" and "answer" properties.`,
        };
      }

      // Claves permitidas
      const clavesPermitidas = ["question", "answer", "category", "confidence"];
      const claves = Object.keys(item);

      for (const clave of claves) {
        if (!clavesPermitidas.includes(clave)) {
          return {
            isValid: false,
            error: `key is not valid  "${clave}" in the element ${i}.`,
          };
        }
      }
    }

    return { isValid: true, mensaje: "the format is valid." };
  } catch (e) {
    return { isValid: false, error: "the format is not valid." };
  }
}
