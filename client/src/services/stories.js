import api from "./apiConfig";

export const getStories = async id => {
  try {
    const response = await api.get('/stories');
    return response.data
  } catch (error) {
    throw error
  }
};

export const getStory = async (id, story)  => {
  try {
    const response = await api.get(`/story/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const updateStory = async (id, story) => {
  try {
    const response = await api.put(`/story/${id}`, story)
    console.log(response.data)
    return response.data;
   
  } catch (error) {
    throw error 
  }
} 