import { useState, useEffect } from "react";

export const issueUrl =
  "https://run.mocky.io/v3/98b3aa11-54c3-42ca-8cc7-e2c68f42082f?mocky-delay=2000ms";

export const sidebarUrl =
  "https://run.mocky.io/v3/98b3aa11-54c3-42ca-8cc7-e2c68f42082f?mocky-delay=1000ms";

export const commentsUrl =
  "https://run.mocky.io/v3/98b3aa11-54c3-42ca-8cc7-e2c68f42082f?mocky-delay=3000ms";

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
