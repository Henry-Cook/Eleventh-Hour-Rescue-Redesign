import api from "./apiConfig";
import updateSelection from "../components/form/Form";
// export const getStory = async (id, story)  => {
//   try {
//     const response = await api.get(`/story/${id}`);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// }

export const createDonation = async (donation) => {
  try {
    const response = await api.post("/donation/new", donation);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// export const deleteStory = async (id) => {
//   try {
//     const response = await api.delete(`/story/${id}`);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };
