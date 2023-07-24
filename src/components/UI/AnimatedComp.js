import { motion } from 'framer-motion';


const animations = {
  initial: { opacity: 0, x: 0 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 0 },
};

const AnimatedComp = ({ children, direction }) => {
  

  if (direction === 'prev') {
    animations.exit.x = 100;
    animations.initial.x = -100;
  } else if (direction === 'next') {
    animations.exit.x = -100;
    animations.initial.x = 100; // Set exit x value to 100 for "Next" animation
  }
  return (
    <motion.div
      variants={animations}
      initial='initial'
      animate='animate'
      exit='exit'
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedComp;
