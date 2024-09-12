export const exerciseoptions = {
  method: "GET",

  params: { limit: "10" },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchdata = async (url, exerciseoptions) => {
  const response = await fetch(url, exerciseoptions);
  const data = await response.json();
  return data;
};
