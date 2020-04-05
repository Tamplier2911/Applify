// const getScrollPoss = () => {
//   const { scrollX, scrollY } = window;
//   const limit = document.body.offsetHeight - window.innerHeight;

//   const x = Math.floor(scrollX / (limit / 100));
//   const y = Math.floor(scrollY / (limit / 100));

//   return {
//     x: x ? x : 0,
//     y: y ? y : 0,
//   };
// };
// const [ScrollPosition, setScrollPosition] = useState(getScrollPoss());
// const { y } = ScrollPosition;

// useEffect(() => {
//   window.scrollTo(0, 1);
//   const handleScroll = () => setScrollPosition(getScrollPoss());
//   window.addEventListener("scroll", handleScroll);
//   return () => window.removeEventListener("scroll", handleScroll);
// }, []);
