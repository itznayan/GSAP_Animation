import { AnimatePresence, motion } from "framer-motion";

const Text = () => {
  const parentVariants = {
    initial: {},
    animate: {
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        // Optional: Animates back and forth
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    initial: { opacity: 0, x: -50, fontSize: 0 },
    animate: { opacity: 1, x: 0, fontSize: "10vw" },
  };
  return (
    <div>
      {" "}
      <AnimatePresence>
        <motion.div
          variants={parentVariants}
          initial="initial"
          animate="animate"
          style={{ display: "flex" }}
        >
          {"helloFriends".split("").map((item, index) => (
            <motion.div key={index} variants={childVariants}>
              <motion.h2
                variants={childVariants}
                transition={{ delay: 0.2 * index }}
              >
                {item}
              </motion.h2>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Text;
