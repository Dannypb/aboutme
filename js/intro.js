document.addEventListener("DOMContentLoaded", () => {
    const intro = document.getElementById("intro");
    const mainPage = document.getElementById("main-page");
    const progressBar = document.getElementById("loading-progress");
    const percentage = document.getElementById("loading-percent");
    const skipButton = document.getElementById("skip-intro");

    const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    const duration = reducedMotion ? 1200 : 6500;
    const startTime = performance.now();

    let finished = false;
    let animationFrame;

    function finishIntro() {
        if (finished) return;

        finished = true;
        cancelAnimationFrame(animationFrame);

        progressBar.style.width = "100%";
        percentage.textContent = "100";

        intro.classList.add("finished");
        mainPage.classList.add("visible");

        setTimeout(() => {
            intro.remove();
        }, 1200);
    }

    function updateLoading(currentTime) {
        if (finished) return;

        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Curva de carga progresiva
        const easedProgress = 1 - Math.pow(1 - progress, 2);

        const value = Math.floor(easedProgress * 100);

        progressBar.style.width = `${value}%`;
        percentage.textContent = String(value).padStart(2, "0");

        if (progress < 1) {
            animationFrame = requestAnimationFrame(updateLoading);
        } else {
            finishIntro();
        }
    }

    skipButton.addEventListener("click", finishIntro);

    animationFrame = requestAnimationFrame(updateLoading);
});