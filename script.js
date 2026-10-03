/* Small, dependency-free interactions with keyboard and screen-reader support. */
"use strict";

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-navigation");
const searchInput = document.querySelector("#article-search");
const articleCards = Array.from(document.querySelectorAll(".article-card"));
const searchStatus = document.querySelector("#search-status");
const noResults = document.querySelector("#no-results");

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  navigation.classList.toggle("is-open", !isExpanded);
});

navigation.addEventListener("click", (event) => {
  if (event.target.closest("a") && window.matchMedia("(max-width: 760px)").matches) {
    navigation.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLocaleLowerCase();
  let visibleCount = 0;

  articleCards.forEach((card) => {
    const searchableText = `${card.dataset.search} ${card.innerText}`.toLocaleLowerCase();
    const matches = searchableText.includes(query);
    card.hidden = !matches;
    if (matches) visibleCount += 1;
  });

  noResults.hidden = visibleCount !== 0;
  searchStatus.textContent = query
    ? `${visibleCount} ${visibleCount === 1 ? "article" : "articles"} found.`
    : "Showing all articles.";
});
