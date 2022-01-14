const accordionItems = document.querySelectorAll(".question__item");

accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector(".question__header");

  accordionHeader.addEventListener("click", () => {
    const openItem = document.querySelector(".accordion-open");

    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
    toggleItem(item);
  });
});

const toggleItem = (item) => {
  const accordionContent = item.querySelector(".question__content");

  if (item.classList.contains("accordion-open")) {
    accordionContent.removeAttribute("style");
    item.classList.remove("accordion-open");
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + "px";
    item.classList.add("accordion-open");
  }
};
