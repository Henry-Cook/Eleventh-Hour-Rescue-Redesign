import api from "./apiConfig";

export const getStories = async id => {
  try {
    const response = await api.get('/stories');
    console.log(response.data)
    return response.data
  } catch (error) {
    throw error
  }
};

export const getStory = async (id, story)  => {
  try {
    const response = await api.get(`/story/${id}`);
    console.log(response.data)
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const createStory = async () => {
  try {
    const response = await api.post('/story/new');
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const updateStory = async (id, story) => {
  try {
    const response = await api.put(`/story/${id}`)
    return response.data;
  } catch (error) {
    throw error 
  }
}

export const deleteStory = async id => {
  try {
    const response = await api.delete(`/story/${id}`)
    return response.data
  } catch (error) {
    throw error 
  }
}

// // module.exports = {
//   getStories,
//   getStory,
//   createStory,
//   updateStory,
//   deleteStory,
// };