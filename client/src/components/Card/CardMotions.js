const cardMotions = {
  201: "bounceInLeft",
  202: "flipInY",
  203: "flipInY",
  204: "bounceInRight",
};

// const cardMotionsForFramer = {
//   201: {
//     visible: {
//       opacity: 1,
//       x: 0,
//       y: 0,
//       transition: { duration: 1.2, delay: 0.1, type: "spring", stiffness: 20 },
//     },
//     hidden: { opacity: 0, x: -500 },
//   },
//   202: {
//     visible: {
//       opacity: 1,
//       x: 0,
//       y: 0,
//       transition: { duration: 1.2, delay: 0.1, type: "spring", stiffness: 20 },
//     },
//     hidden: { opacity: 0, y: -300 },
//   },
//   203: {
//     visible: {
//       opacity: 1,
//       x: 0,
//       y: 0,
//       transition: { duration: 1.2, delay: 0.1, type: "spring", stiffness: 20 },
//     },
//     hidden: { opacity: 0, y: 500 },
//   },
//   204: {
//     visible: {
//       opacity: 1,
//       x: 0,
//       y: 0,
//       transition: { duration: 1.2, delay: 0.1, type: "spring", stiffness: 20 },
//     },
//     hidden: { opacity: 0, x: 500 },
//   },
// };

/* <CardContainer
  val={id}
  cl={{ left: gradient[0], right: gradient[1] }}
  initial="hidden"
  animate="visible"
  variants={cardMotions[id]}
></CardContainer>;  */

export default cardMotions;
