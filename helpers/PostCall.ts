interface Params {
  data: unknown;
  url: string;
  type: string;
}

export const PostCall = async ({ data, url, type = "POST" }: Params) => {
  const response = await fetch(url, {
    method: type,
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const dataR = await response.json();
  return dataR
};
