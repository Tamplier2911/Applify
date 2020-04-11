const sidenavMotions = (delay) => ({
  left: {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        x: { duration: 0.8 },
        default: { duration: 2 },
        delay: delay,
        type: "spring",
        stiffness: 20,
      },
    },
    hidden: { opacity: 0, x: -300 },
  },
  right: {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        x: { duration: 0.8 },
        default: { duration: 2 },
        delay: delay,
        type: "spring",
        stiffness: 20,
      },
    },
    hidden: { opacity: 0, x: 300 },
  },
});

export default sidenavMotions;
