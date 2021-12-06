$(document).on("scroll", {
    passive: true
}, onScrollAnimation);

function onScrollAnimationBlock(elem, value, func) {
    let scrollPos = $(document).scrollTop() + value;
    if ($(elem).position().top <= scrollPos) {
        func();
    }
}

function packageAnimation() {
    setTimeout(() => {
        document.querySelector(".package__visual").classList.add("slide-fwd-top");
        setTimeout(() => {
            document.querySelector(".package__visual .top").classList.add("slide-top");
            setTimeout(() => {
                document.querySelector(".package__visual > div").classList.add("tracking-in-expand-fwd-bottom");
                document.querySelector(".package__visual .decor").classList.add("scale-up-center");
            }, 500);
        }, 1500);
    }, 1000);

}

function onScrollAnimation() {
    workflowFunc();
}

function workflowFunc() {
    if (document.documentElement.clientWidth > 767) {
        onScrollAnimationBlock('#workflow', 800, packageAnimation);
    } else {
        onScrollAnimationBlock('#workflow', 200, packageAnimation);
    }

}

export { workflowFunc };