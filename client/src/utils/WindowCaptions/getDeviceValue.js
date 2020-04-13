const getDeviceValue = (width) =>
  width <= 425
    ? "phone"
    : width >= 426 && width <= 720
    ? "tablet"
    : width >= 721
    ? "desktop"
    : "desktop";

export default getDeviceValue;
