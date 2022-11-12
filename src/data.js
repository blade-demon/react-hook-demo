import { useState, useEffect } from "react";

export const issueUrl =
  "https://run.mocky.io/v3/98b3aa11-54c3-42ca-8cc7-e2c68f42082f?mocky-delay=2000ms";

export const sidebarUrl =
  "https://run.mocky.io/v3/b3bcb9d2-d8e9-43c5-bfb7-0062c85be6f9?mocky-delay=1000ms";

export const commentsUrl =
  "https://run.mocky.io/v3/f3e4fb9b-736d-41c1-9a65-efca9f7dbcba?mocky-delay=3000ms";

export const useData = (url) => {
  const [state, setState] = useState();

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (await fetch(url)).json();

      setState(data);
    };

    dataFetch();
  }, [url]);

  return { data: state };
};
