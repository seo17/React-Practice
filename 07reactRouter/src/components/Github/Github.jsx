import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  // Fetch data from the loader set in the routes
  const data = useLoaderData();

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("https://api.github.com/users/seo17")
  //     .then((res) => res.json())
  //     .then((convertedRes) => {
  //       console.log(convertedRes);
  //       setData(convertedRes);
  //     });
  // }, []);
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl ">
      Github followers: {data.followers}
      <img src={data.avatar_url} width={300} alt="" />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/seo17");

  return response.json();
};
