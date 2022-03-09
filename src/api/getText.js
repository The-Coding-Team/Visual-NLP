const BASE_URL = "http://192.168.77.82:105/";
export const getTextAPI = async (payload) => {
  const res = await fetch(`${BASE_URL}/api/get-text`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const json = await res.json();
  return json;
  //   const res = await fetch(`${BASE_URL}/api/get-text`);
  //   console.log(res);
};
