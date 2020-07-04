
function waitPageLoading() {
    setTimeout(function () {
        const loadingPage = document.getElementById("loading-page");
        loadingPage.style.display = "none";

        const [container] = document.getElementsByClassName("container");
        container.style.display = "grid";

        const header = document.getElementById("main-header").firstElementChild;
        header.style.display = "flex";

    }, 3000);

}

waitPageLoading();
