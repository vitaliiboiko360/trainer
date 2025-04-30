const getResponse = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Network response was not ok`);
  }
  return response;
};

export async function queryJson(url) {
  return (await getResponse(url)).json();
}

export const LIST_TEXT_JSON_KEY = 'list_of_texts';
export const LIST_TEXT_JSON_URL = '/api/lessons/list_of_texts';

export async function queryListOfTextJson() {
  return (await getResponse(LIST_TEXT_JSON_URL)).json();
}
