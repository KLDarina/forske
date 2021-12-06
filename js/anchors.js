import { workflowFunc } from "./package.js";
import {
    closeMenu
} from "./popup.js";

$(document).on("scroll", {
    passive: true
}, onScroll);



function anchorLink(elem, value, bool) {
    if (bool) {
        $(elem).on("click", function(e) {
            e.preventDefault();
            let anchor = $(this).attr('href');
            closeMenu();
            setTimeout(() => {
                $('html, body').stop().animate({
                    scrollTop: $(anchor).offset().top - value
                }, 800);
            }, 500);
        });
    } else {
        $(elem).click(function() {
            $(document).off("scroll");

            let navLink = $(this).attr("href"),
                dest = $(navLink).offset().top - value;
            $('html,body').stop().animate({
                scrollTop: dest
            }, 800, function() {
                $(document).on("scroll", {
                    passive: true
                }, onScroll);
            });

            $(elem).each(function() {
                $(this).removeClass('active');
            })
            $(this).addClass('active');

            return false;
        });
    }

}

if (document.documentElement.clientWidth > 767) {
    anchorLink('.header__navigation a', 200, false);
    anchorLink('.forske__button', 200, false);
    anchorLink('.what-we-do__nav a', 200, false);
} else {
    anchorLink('.forske__button', 100, false);
    anchorLink('.what-we-do__nav a', 100, false);
    anchorLink('a.scroll-to-mob', 100, true);
}


function onScrollElem(elem, value, elemWrap) {
    let scrollPos = $(elemWrap).scrollTop() + value;
    $(elem).each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (elem === ".what-we-do__nav a") {
            console.log(refElement.offset().top - value, scrollPos);
            if (refElement.offset().top - value <= scrollPos) {
                $(elem).removeClass("active");
                currLink.addClass("active");
            } else {
                currLink.removeClass("active");
            }
            return;
        }
        if (refElement.position().top <= scrollPos) {
            if (refElement.attr('id') === "workflow") {
                workflowFunc();
            }
            $(elem).removeClass("active");
            currLink.addClass("active");
        } else {
            currLink.removeClass("active");
        }
    });
}

function onScroll() {
    if (document.documentElement.clientWidth > 767) {
        onScrollElem('.header__navigation a', 800, document);
        onScrollElem('.forske__button', 800, document);
        onScrollElem('.what-we-do__nav a', 200, document);
    } else {
        onScrollElem('.forske__button', 200, document);
        onScrollElem('.scroll-to-mob', 200, document);
        onScrollElem('.what-we-do__nav a', 200, document);
    }

}