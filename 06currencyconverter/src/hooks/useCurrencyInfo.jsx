import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const host = "api.frankfurter.app";
    fetch(`https://${host}/latest?from=${currency}`)
      .then((resp) => resp.json())
      .then((convertedResp) => {
        setData(convertedResp.rates);
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
