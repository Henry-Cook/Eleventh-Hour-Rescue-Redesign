import api from "./apiConfig";

export const getDonation = async (id) => {
  console.log("We made it to donations");
  try {
    const response = await api.get(`/donation/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createDonation = async (donation) => {
  try {
    const response = await api.post("/donation/new", donation);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteDonation = async (id) => {
  try {
    const response = await api.delete(`/donation/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
