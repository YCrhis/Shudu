interface Params {
  data: unknown;
  url: string;
}

export const PostCall = async ({ data, url }: Params) => {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const dataR = await response.json();
  return dataR
};
