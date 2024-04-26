import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const lorems = [
  " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci earum ab placeat laudantium, numquam itaque dolore saepe obcaecati quae incidunt vero sunt quasi aliquam dolores. Quia optio recusandae tempore nulla. ",
  " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci earum ab placeat laudantium, numquam itaque dolore saepe obcaecati quae incidunt vero sunt quasi aliquam dolores. Quia optio recusandae tempore nulla. ",
  " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci earum ab placeat laudantium, numquam itaque dolore saepe obcaecati quae incidunt vero sunt quasi aliquam dolores. Quia optio recusandae tempore nulla. ",
  " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci earum ab placeat laudantium, numquam itaque dolore saepe obcaecati quae incidunt vero sunt quasi aliquam dolores. Quia optio recusandae tempore nulla. ",
  " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci earum ab placeat laudantium, numquam itaque dolore saepe obcaecati quae incidunt vero sunt quasi aliquam dolores. Quia optio recusandae tempore nulla. ",
  " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci earum ab placeat laudantium, numquam itaque dolore saepe obcaecati quae incidunt vero sunt quasi aliquam dolores. Quia optio recusandae tempore nulla. ",
  " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci earum ab placeat laudantium, numquam itaque dolore saepe obcaecati quae incidunt vero sunt quasi aliquam dolores. Quia optio recusandae tempore nulla. ",
  " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci earum ab placeat laudantium, numquam itaque dolore saepe obcaecati quae incidunt vero sunt quasi aliquam dolores. Quia optio recusandae tempore nulla. ",
  " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci earum ab placeat laudantium, numquam itaque dolore saepe obcaecati quae incidunt vero sunt quasi aliquam dolores. Quia optio recusandae tempore nulla. ",
];

const Parallax = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  return (
    <div className="min-h-screen w-screen overflow-hidden bg-black">
      <div className="">
        <div
          ref={ref}
          className="parallax grid h-screen w-screen place-items-center"
        >
          <motion.h1
            className="relative z-10 font-mono text-8xl font-bold text-white"
            style={{ y: textY }}
          >
            Parallax
          </motion.h1>
          <div
            className="absolute inset-0 z-20 bg-cover bg-bottom"
            style={{ backgroundImage: "url(./images/image-bottom.png)" }}
          />
          <motion.div
            className="absolute inset-0 z-0 bg-cover bg-bottom"
            style={{
              backgroundImage: "url(./images/image-full.png)",
              y: backgroundY,
            }}
          />
        </div>
        <div className="texts relative z-10 bg-slate-900">
          {lorems.map((text, index) => (
            <p key={index} className="mb-5 text-2xl font-bold text-slate-300">
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Parallax;
