const API_BASE_URL = import.meta.env.VITE_API_SERVER_URL;

export const createPerson = async (personData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/person`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(personData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message.join(", "));
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const createCompany = async (companyData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/companies`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(companyData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message.join(", "));
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
