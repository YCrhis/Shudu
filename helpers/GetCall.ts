interface Params {
  url: string;
}

export const GetCall = async ({ url }: Params) => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const dataR = await response.json();
  return dataR;
};
