// apiService.js

const BASE_URL = "http://localhost:3000"; // URL de tu backend Nest.js

export const createCompany = async (companyData) => {
  try {
    const response = await fetch(`${BASE_URL}/companies`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(companyData),
    });

    if (!response.ok) {
      throw new Error("Error al crear la empresa");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
