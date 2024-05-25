import React from "react";

const Card = ({ userName = " HC ", jobRole = " Position, State " }) => {
  const imgSource =
    "https://media.istockphoto.com/id/1347490270/photo/happy-skier-taking-a-selfie-on-the-mountains-young-man-having-fun-skiing-downhill-in-winter.jpg?s=1024x1024&w=is&k=20&c=8peL54kWTtjzSqD1ESO6nwvfNSdqTe6r1UGlGI8RqFs=";

  return (
    <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
      <img
        className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto object-cover"
        src={imgSource}
        alt=""
        width="384"
        height="512"
      />
      <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p className="text-lg font-medium">
            “Tailwind CSS is the only framework that I've seen scale on large
            teams. It’s easy to customize, adapts to any design, and the build
            size is tiny.”
          </p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-400">{userName}</div>
          <div className="text-slate-700 dark:text-slate-500">{jobRole}</div>
        </figcaption>
      </div>
    </figure>
  );
};

export default Card;
