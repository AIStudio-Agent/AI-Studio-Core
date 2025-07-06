import { motion } from "framer-motion";

const HowItWorks = () => {
  const cards = [
    {
      title: "01. Smart Prompt Router",
      description:
        "Enter your task. We’ll understand your intent and run the best tools in the right order.",
      image: "/smart-prompter-router-flow.png",
    },
    {
      title: "02. Tool Discovery via Search",
      description:
        "Got a problem in mind? Just use the Search Bar to find top-rated tools built to solve exactly that.",
      image: "/tool-discovery-flow.png",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-20 w-full bg-white dark:bg-[#1E2117] relative transition-colors"
    >
      {/* Grid background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, #00B39F 1px, transparent 1px), linear-gradient(to bottom, #00B39F 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-24 relative z-10">
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white font-['Space_Grotesk'] text-center leading-none mb-0">
            How it <span className="text-teal-400">Works?</span>
          </h2>
          <p className="text-[1.125rem] leading-tight text-neutral-700 dark:text-neutral-300 text-center mt-0">
            Search or Prompt. Either way, iotastudio.ai finds the tools — so you don’t have to.
          </p>

          <div className="w-full flex flex-col gap-6 mt-6">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={{
                  rest: { height: "auto" },
                  hover: { height: "auto" },
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <motion.div
                  variants={{
                    rest: { scale: 1 },
                    hover: {
                      scale: 1.02,
                      boxShadow: "0 8px 24px rgba(0, 179, 159, 0.25)",
                    },
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="relative rounded-xl bg-[#F3F4F6] dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 p-6 md:p-8 flex flex-col md:flex-row gap-6 overflow-hidden transition-colors"
                >
                  {/* Text */}
                  <div className="w-full md:w-1/2">
                    <h3 className="text-2xl md:text-3xl font-bold text-teal-400">
                      {card.title}
                    </h3>
                    <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 mt-2">
                      {card.description}
                    </p>
                  </div>

                  {/* Image */}
                  <motion.div
                    className="w-full md:w-1/2 hidden md:flex justify-end items-center"
                    variants={{
                      rest: { opacity: 0, x: 50, height: 0 },
                      hover: { opacity: 1, x: 0, height: "auto" },
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <motion.img
                      src={card.image}
                      alt={card.title}
                      className="rounded-xl w-full max-w-[320px] shadow-md"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
