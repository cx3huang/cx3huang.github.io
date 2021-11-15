fadeInOnScroll('.fade-test', 'fade-test-transition', '.fade-test-wrapper');
fadeInOnScroll('.fade-test2', 'fade-test-transition2', '.fade-test-wrapper2');

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