const tabs = document.querySelectorAll("[data-tab-target]");
const tabContent = document.querySelectorAll("[data-tab-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelectorAll(tab.dataset.tabTarget);
    tabContent.forEach((remove) => {
      remove.classList.remove("active");
    });
    target.forEach((targets) => {
      targets.classList.add("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
  });
});
