export const getErrorMessage = error => {
  const {
    statusText,
    data: { message }
  } = error.response;
  return {
    header: statusText || "Attention!",
    content: message || error.message
  };
};

export const successfulResponse = res => {
  return res.data.status === "success";
};
