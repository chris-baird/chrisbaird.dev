export const getTechnologies = async () => {
  try {
    const response = await fetch("/api/technologies");
    const technolgies = await response.json();
    return technolgies;
  } catch (error) {
    throw error;
  }
};
export const getMessages = async () => {
  try {
    const response = await fetch("/api/messages");
    const messages = await response.json();
    return messages;
  } catch (error) {
    throw error;
  }
};
