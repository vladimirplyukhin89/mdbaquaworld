export const scrollToHash = location => {
  const hash = location.hash.slice(1);
  let element;
  if (hash.length > 0) {
    element = document.getElementById(hash);
  }

  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
