export const sleep = (timeMS: number) => {
  return new Promise((resolve) => setTimeout(resolve, timeMS));
};
