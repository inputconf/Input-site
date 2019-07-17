function lazyLoadImages() {
  const lazyImages = [].slice.call(document.querySelectorAll('img.lazy'));
  const lazyBackgrounds = [].slice.call(document.querySelectorAll('.lazy-background'));
  const lazyBackgroundsData = [].slice.call(document.querySelectorAll('[data-bg]'));

  if ('IntersectionObserver' in window) {

    let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.srcset = lazyImage.dataset.srcset;
          lazyImage.classList.remove('lazy');
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });
    lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });

    let lazyBackgroundObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          lazyBackgroundObserver.unobserve(entry.target);
        }
      });
    });
    lazyBackgrounds.forEach(function(lazyBackground) {
      lazyBackgroundObserver.observe(lazyBackground);
    });

    let lazyBackgroundDataObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let lazyBackgroundData = entry.target;
          lazyBackgroundData.style.backgroundImage = 'url(' + lazyBackgroundData.dataset.bg + ')';
          lazyBackgroundDataObserver.unobserve(lazyBackgroundData);
        }
      });
    });
    lazyBackgroundsData.forEach(function(lazyBackgroundData) {
      lazyBackgroundDataObserver.observe(lazyBackgroundData);
    });

  } else {

    // Fallback

    lazyImages.forEach(function(lazyImage) {
      lazyImage.src = lazyImage.dataset.src;
      lazyImage.srcset = lazyImage.dataset.srcset;
    });
    lazyBackgrounds.forEach(function(lazyBackground) {
      lazyBackground.classList.add('visible');
    });
    lazyBackgroundsData.forEach(function(lazyBackgroundData) {
      lazyBackgroundData.style.backgroundImage = 'url(' + lazyBackgroundData.dataset.bg + ')';
    });

  }
}

export default lazyLoadImages();
