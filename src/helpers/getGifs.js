export const getGifts = async (category) => {
  try {
    const busqueda = category;
    const key = "1";
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
        busqueda
      )}&api_key=${key}&limit=10`
    );
    if (!resp.ok) {
      throw new Error("HTTP status " + resp.status);
    }
    const { data } = await resp.json();
    console.log(data);

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });
    return gifs;
  } catch (e) {
    console.log(e);
  }
};