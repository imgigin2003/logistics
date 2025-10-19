export const createPageUrl = (pageName) => {
  if (pageName === "Home") return "/";
  if (pageName === "Review") return "/review";
  return `/${pageName.toLowerCase()}`;
};
