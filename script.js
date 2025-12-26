function toggleBlog(entry) {
    const content = entry.querySelector(".blog-content");
    content.style.display =
      content.style.display === "block" ? "none" : "block";
  }
  