export const sleep = (timeMS: number) => {
  return new Promise((resolve) => setTimeout(resolve, timeMS));
};

export const refreshPage = () => {
  window.location.reload();
};
