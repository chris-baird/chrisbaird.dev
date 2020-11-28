export const getTechnologies = async () => {
  try {
    const response = await fetch("/api/technologies");
    const technolgies = await response.json();
    return technolgies;
  } catch (error) {
    throw error;
  }
};
export const getMessages = async (token) => {
  try {
    const response = await fetch("/api/messages/?secret_token=" + token);
    const messages = await response.json();
    return messages;
  } catch (error) {
    throw error;
  }
};
export const deleteDatabaseMessageById = async (id) => {
  try {
    const response = await fetch("/api/messages/" + id, {
      method: "DELETE",
    });
    const deletedMessage = await response.json();
    return deletedMessage;
  } catch (error) {
    throw error;
  }
};
