fadeInOnScroll('.fade-test3', 'fade-test-transition3', '.fade-test-wrapper3');
fadeInOnScroll('.fade-test4', 'fade-test-transition4', '.fade-test-wrapper4');

function fadeInOnScroll(className, addedClass, wrapperName) {
    const page_nav = document.querySelector(className);
    page_nav.classList.remove(addedClass);

    // Create the observer, same as before:
    const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        page_nav.classList.add(addedClass);
        return;
        }

        page_nav.classList.remove(addedClass);
    });
    });

    observer.observe(document.querySelector(wrapperName));
}