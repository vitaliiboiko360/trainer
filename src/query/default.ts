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
