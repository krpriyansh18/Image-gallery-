(() => {
  const images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1468071174046-657d9d351a40?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1400&q=80",
    "https://hips.hearstapps.com/hmg-prod/images/west-virginia-gray-cottage-64dd6bb056057.jpg?crop=0.943xw%3A0.817xh%3B0.0224xw%2C0.0932xh&resize=980%3A%2A",
    "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1400&q=80",
  ];

  let currentIndex = 0;
  const previewImage = document.getElementById("previewImage");
  const thumbnailsContainer = document.querySelector(".thumbnails");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  // Initialize thumbnails elements
  images.forEach((src, idx) => {
    const thumb = document.createElement("img");
    thumb.src = src;
    thumb.alt = `Gallery image ${idx + 1}`;
    thumb.dataset.index = idx;
    if (idx === 0) thumb.classList.add("selected");
    thumbnailsContainer.appendChild(thumb);

    thumb.addEventListener("click", () => {
      if (currentIndex !== idx) {
        changeImage(idx);
      }
    });
  });

  // Change preview image with fade animation
  function changeImage(newIndex) {
    previewImage.classList.add("fade");
    setTimeout(() => {
      previewImage.src = images[newIndex];
      previewImage.classList.remove("fade");
      updateSelectedThumbnail(newIndex);
      currentIndex = newIndex;
    }, 500);
  }

  // Update selected thumbnail style
  function updateSelectedThumbnail(index) {
    const thumbs = thumbnailsContainer.querySelectorAll("img");
    thumbs.forEach((thumb) => thumb.classList.remove("selected"));
    thumbs[index].classList.add("selected");
  }

  // Buttons to navigate images
  prevBtn.addEventListener("click", () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    changeImage(newIndex);
  });

  nextBtn.addEventListener("click", () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    changeImage(newIndex);
  });

  // Initialize preview image source
  previewImage.src = images[0];
})();
