import React, { useRef } from "react";
import { useParallax } from "react-scroll-parallax";

const Home = () => {
  const target = useRef(null);
  const train = useParallax({
    speed: 300,
    targetElement: target.current,
  });
  const cloud = useParallax({
    speed: 100,
    targetElement: target.current,
  });
  return (
    <div
      ref={target}
      style={{
        backgroundImage: "url('/Scene.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "3000px",
        overflowX: "hidden",
      }}
      className="h-screen"
    >
      <div ref={target} className="fixed top-10 left-40 w-[120px] h-[120px]">
        <img src="/Sun.png" alt="" />
      </div>
      <div
        ref={train.ref}
        className="train absolute top-[10vh] left-[30vw] h-[350px] w-[700px]"
      >
        <img src="/Train.png" alt="" />
      </div>
      <div ref={cloud.ref} className="cloud absolute h-[200] w-[1000]">
        <img src="/Cloud.png" alt="" />
      </div>
    </div>
  );
};

export default Home;
