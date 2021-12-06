$(document).ready(function() {
    if (document.documentElement.clientWidth > 1100) {
        let controller = new ScrollMagic.Controller();
        let titleAnimations = new TimelineMax()
            .fromTo('.problem__title--line', 2, {
                'clip-path': 'polygon(0 0, 0 0, 0 100%, 0 100%)'
            }, {
                'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                ease: Linear.easeNone
            })

        .fromTo('.problem__title--logo', 2, {
                opacity: 0
            }, {
                opacity: 1,
                ease: Linear.easeNone
            })
            //----------------------------------------------------//

        let bgAnimations = new TimelineMax()
            .fromTo('.problem__bg-1', 2, {
                opacity: 1
            }, {
                opacity: 1,
                ease: Linear.easeNone
            })

        .fromTo('.problem__bg-2', 2, {
                opacity: 0
            }, {
                opacity: 1,
                ease: Linear.easeNone
            })
            //----------------------------------------------------//

        let boxLineAnimations1 = new TimelineMax()
            .fromTo('.problem__box-1 .line', 2, {
                'clip-path': 'polygon(0 0, 0 0, 0 100%, 0 100%)'
            }, {
                'clip-path': 'polygon(0 0, 0 0, 0 100%, 0 100%)',
                ease: Linear.easeNone
            })

        .fromTo('.problem__box-1 .line', 2, {
            'clip-path': 'polygon(0 0, 0 0, 0 100%, 0 100%)'
        }, {
            'clip-path': 'polygon(0 0, 0 0, 0 100%, 0 100%)',
            ease: Linear.easeNone
        })

        .fromTo('.problem__box-1 .line', 2, {
                'clip-path': 'polygon(0 0, 0 0, 0 100%, 0 100%)'
            }, {
                'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                ease: Linear.easeNone
            })
            //----------------------------------------------------//

        let boxTitleAnimations1 = new TimelineMax()
            .fromTo('.problem__box-1 .problem__box-title-text', 2, {
                opacity: 0,
                'transform': 'translate(100px, 0)'
            }, {
                opacity: 0,
                'transform': 'translate(100px, 0)',
                ease: Linear.easeNone
            })

        .fromTo('.problem__box-1 .problem__box-title-text', 2, {
            opacity: 0,
            'transform': 'translate(100px, 0)'
        }, {
            opacity: 0,
            'transform': 'translate(100px, 0)',
            ease: Linear.easeNone
        })

        .fromTo('.problem__box-1 .problem__box-title-text', 2, {
                opacity: 0,
                'transform': 'translate(100px, 0)'
            }, {
                opacity: 1,
                'transform': 'translate(0, 0)',
                ease: Linear.easeNone
            })
            //----------------------------------------------------//

        let boxDescriptionAnimations1 = new TimelineMax()
            .fromTo('.problem__box-1 .problem__description--2', 2, {
                opacity: 0,
                'transform': 'translate(100px, 0)'
            }, {
                opacity: 0,
                'transform': 'translate(100px, 0)',
                ease: Linear.easeNone
            })

        .fromTo('.problem__box-1 .problem__description--2', 2, {
            opacity: 0,
            'transform': 'translate(100px, 0)'
        }, {
            opacity: 0,
            'transform': 'translate(100px, 0)',
            ease: Linear.easeNone
        })

        .fromTo('.problem__box-1 .problem__description--2', 2, {
                opacity: 0,
                'transform': 'translate(100px, 0)'
            }, {
                opacity: 1,
                'transform': 'translate(0, 0)',
                ease: Linear.easeNone
            })
            //----------------------------------------------------//

        let boxLinkAnimations1 = new TimelineMax()
            .fromTo('.problem__box-1 .problem__link', 2, {
                opacity: 1
            }, {
                opacity: 1,
                ease: Linear.easeNone
            })

        .fromTo('.problem__box-1 .problem__link', 2, {
            opacity: 1
        }, {
            opacity: 1,
            ease: Linear.easeNone
        })

        .fromTo('.problem__box-1 .problem__link', 2, {
                opacity: 1
            }, {
                opacity: 0,
                ease: Linear.easeNone
            })
            //----------------------------------------------------//





        let boxLineAnimations2 = new TimelineMax()
            .fromTo('.problem__box-2 .line', 2, {
                'clip-path': 'polygon(0 0, 0 0, 0 100%, 0 100%)'
            }, {
                'clip-path': 'polygon(0 0, 0 0, 0 100%, 0 100%)',
                ease: Linear.easeNone
            })

        .fromTo('.problem__box-2 .line', 2, {
            'clip-path': 'polygon(0 0, 0 0, 0 100%, 0 100%)'
        }, {
            'clip-path': 'polygon(0 0, 0 0, 0 100%, 0 100%)',
            ease: Linear.easeNone
        })

        .fromTo('.problem__box-2 .line', 2, {
            'clip-path': 'polygon(0 0, 0 0, 0 100%, 0 100%)'
        }, {
            'clip-path': 'polygon(0 0, 0 0, 0 100%, 0 100%)',
            ease: Linear.easeNone
        })

        .fromTo('.problem__box-2 .line', 2, {
                'clip-path': 'polygon(0 0, 0 0, 0 100%, 0 100%)'
            }, {
                'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                ease: Linear.easeNone
            })
            //----------------------------------------------------//

        let boxTitleAnimations2 = new TimelineMax()
            .fromTo('.problem__box-2 .problem__box-title-text', 2, {
                opacity: 0,
                'transform': 'translate(100px, 0)'
            }, {
                opacity: 0,
                'transform': 'translate(100px, 0)',
                ease: Linear.easeNone
            })

        .fromTo('.problem__box-2 .problem__box-title-text', 2, {
            opacity: 0,
            'transform': 'translate(100px, 0)'
        }, {
            opacity: 0,
            'transform': 'translate(100px, 0)',
            ease: Linear.easeNone
        })

        .fromTo('.problem__box-2 .problem__box-title-text', 2, {
            opacity: 0,
            'transform': 'translate(100px, 0)'
        }, {
            opacity: 0,
            'transform': 'translate(100px, 0)',
            ease: Linear.easeNone
        })

        .fromTo('.problem__box-2 .problem__box-title-text', 2, {
                opacity: 0,
                'transform': 'translate(100px, 0)'
            }, {
                opacity: 1,
                'transform': 'translate(0, 0)',
                ease: Linear.easeNone
            })
            //----------------------------------------------------//

        let boxDescriptionAnimations2 = new TimelineMax()
            .fromTo('.problem__box-2 .problem__description--2', 2, {
                opacity: 0,
                'transform': 'translate(100px, 0)'
            }, {
                opacity: 0,
                'transform': 'translate(100px, 0)',
                ease: Linear.easeNone
            })

        .fromTo('.problem__box-2 .problem__description--2', 2, {
            opacity: 0,
            'transform': 'translate(100px, 0)'
        }, {
            opacity: 0,
            'transform': 'translate(100px, 0)',
            ease: Linear.easeNone
        })

        .fromTo('.problem__box-2 .problem__description--2', 2, {
            opacity: 0,
            'transform': 'translate(100px, 0)'
        }, {
            opacity: 0,
            'transform': 'translate(100px, 0)',
            ease: Linear.easeNone
        })

        .fromTo('.problem__box-2 .problem__description--2', 2, {
                opacity: 0,
                'transform': 'translate(100px, 0)'
            }, {
                opacity: 1,
                'transform': 'translate(0, 0)',
                ease: Linear.easeNone
            })
            //----------------------------------------------------//

        let boxLinkAnimations2 = new TimelineMax()
            .fromTo('.problem__box-2 .problem__link', 2, {
                opacity: 1
            }, {
                opacity: 1,
                ease: Linear.easeNone
            })

        .fromTo('.problem__box-2 .problem__link', 2, {
            opacity: 1
        }, {
            opacity: 1,
            ease: Linear.easeNone
        })

        .fromTo('.problem__box-2 .problem__link', 2, {
            opacity: 1
        }, {
            opacity: 1,
            ease: Linear.easeNone
        })

        .fromTo('.problem__box-2 .problem__link', 2, {
                opacity: 1
            }, {
                opacity: 0,
                ease: Linear.easeNone
            })
            //----------------------------------------------------//





        let boxLineAnimations3 = new TimelineMax()
            .fromTo('.problem__box-3 .line', 2, {
                'clip-path': 'polygon(0 0, 0 0, 0 100%, 0 100%)'
            }, {
                'clip-path': 'polygon(0 0, 0 0, 0 100%, 0 100%)',
                ease: Linear.easeNone
            })

        .fromTo('.problem__box-3 .line', 2, {
            'clip-path': 'polygon(0 0, 0 0, 0 100%, 0 100%)'
        }, {
            'clip-path': 'polygon(0 0, 0 0, 0 100%, 0 100%)',
            ease: Linear.easeNone
        })

        .fromTo('.problem__box-3 .line', 2, {
            'clip-path': 'polygon(0 0, 0 0, 0 100%, 0 100%)'
        }, {
            'clip-path': 'polygon(0 0, 0 0, 0 100%, 0 100%)',
            ease: Linear.easeNone
        })

        .fromTo('.problem__box-3 .line', 2, {
            'clip-path': 'polygon(0 0, 0 0, 0 100%, 0 100%)'
        }, {
            'clip-path': 'polygon(0 0, 0 0, 0 100%, 0 100%)',
            ease: Linear.easeNone
        })

        .fromTo('.problem__box-3 .line', 2, {
                'clip-path': 'polygon(0 0, 0 0, 0 100%, 0 100%)'
            }, {
                'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                ease: Linear.easeNone
            })
            //----------------------------------------------------//

        let boxTitleAnimations3 = new TimelineMax()
            .fromTo('.problem__box-3 .problem__box-title-text', 2, {
                opacity: 0,
                'transform': 'translate(100px, 0)'
            }, {
                opacity: 0,
                'transform': 'translate(100px, 0)',
                ease: Linear.easeNone
            })

        .fromTo('.problem__box-3 .problem__box-title-text', 2, {
            opacity: 0,
            'transform': 'translate(100px, 0)'
        }, {
            opacity: 0,
            'transform': 'translate(100px, 0)',
            ease: Linear.easeNone
        })

        .fromTo('.problem__box-3 .problem__box-title-text', 2, {
            opacity: 0,
            'transform': 'translate(100px, 0)'
        }, {
            opacity: 0,
            'transform': 'translate(100px, 0)',
            ease: Linear.easeNone
        })

        .fromTo('.problem__box-3 .problem__box-title-text', 2, {
            opacity: 0,
            'transform': 'translate(100px, 0)'
        }, {
            opacity: 0,
            'transform': 'translate(100px, 0)',
            ease: Linear.easeNone
        })

        .fromTo('.problem__box-3 .problem__box-title-text', 2, {
                opacity: 0,
                'transform': 'translate(100px, 0)'
            }, {
                opacity: 1,
                'transform': 'translate(0, 0)',
                ease: Linear.easeNone
            })
            //----------------------------------------------------//

        let boxDescriptionAnimations3 = new TimelineMax()
            .fromTo('.problem__box-3 .problem__description--2', 2, {
                opacity: 0,
                'transform': 'translate(100px, 0)'
            }, {
                opacity: 0,
                'transform': 'translate(100px, 0)',
                ease: Linear.easeNone
            })

        .fromTo('.problem__box-3 .problem__description--2', 2, {
            opacity: 0,
            'transform': 'translate(100px, 0)'
        }, {
            opacity: 0,
            'transform': 'translate(100px, 0)',
            ease: Linear.easeNone
        })

        .fromTo('.problem__box-3 .problem__description--2', 2, {
            opacity: 0,
            'transform': 'translate(100px, 0)'
        }, {
            opacity: 0,
            'transform': 'translate(100px, 0)',
            ease: Linear.easeNone
        })

        .fromTo('.problem__box-3 .problem__description--2', 2, {
            opacity: 0,
            'transform': 'translate(100px, 0)'
        }, {
            opacity: 0,
            'transform': 'translate(100px, 0)',
            ease: Linear.easeNone
        })

        .fromTo('.problem__box-3 .problem__description--2', 2, {
                opacity: 0,
                'transform': 'translate(100px, 0)'
            }, {
                opacity: 1,
                'transform': 'translate(0, 0)',
                ease: Linear.easeNone
            })
            //----------------------------------------------------//

        let boxLinkAnimations3 = new TimelineMax()
            .fromTo('.problem__box-3 .problem__link', 2, {
                opacity: 1
            }, {
                opacity: 1,
                ease: Linear.easeNone
            })

        .fromTo('.problem__box-3 .problem__link', 2, {
            opacity: 1
        }, {
            opacity: 1,
            ease: Linear.easeNone
        })

        .fromTo('.problem__box-3 .problem__link', 2, {
            opacity: 1
        }, {
            opacity: 1,
            ease: Linear.easeNone
        })

        .fromTo('.problem__box-3 .problem__link', 2, {
            opacity: 1
        }, {
            opacity: 1,
            ease: Linear.easeNone
        })

        .fromTo('.problem__box-3 .problem__link', 2, {
                opacity: 1
            }, {
                opacity: 0,
                ease: Linear.easeNone
            })
            //----------------------------------------------------//

        let imgAnimations1 = new TimelineMax()
            .fromTo('.problem__img-1', 2, {
                opacity: 1
            }, {
                opacity: 1,
                ease: Linear.easeNone
            })

        .fromTo('.problem__img-1', 2, {
            opacity: 1
        }, {
            opacity: 1,
            ease: Linear.easeNone
        })

        .fromTo('.problem__img-1', 2, {
            opacity: 1
        }, {
            opacity: 1,
            ease: Linear.easeNone
        })

        .fromTo('.problem__img-1', 2, {
            opacity: 1
        }, {
            opacity: 1,
            ease: Linear.easeNone
        })

        .fromTo('.problem__img-1', 2, {
            opacity: 1
        }, {
            opacity: 1,
            ease: Linear.easeNone
        })

        .fromTo('.problem__img-1', 4, {
                opacity: 1
            }, {
                opacity: 0,
                ease: Linear.easeNone
            })
            //----------------------------------------------------//




        let imgAnimations2 = new TimelineMax()
            .fromTo('.problem__img-2', 2, {
                opacity: 0
            }, {
                opacity: 0,
                ease: Linear.easeNone
            })

        .fromTo('.problem__img-2', 2, {
            opacity: 0
        }, {
            opacity: 0,
            ease: Linear.easeNone
        })

        .fromTo('.problem__img-2', 2, {
            opacity: 0
        }, {
            opacity: 0,
            ease: Linear.easeNone
        })

        .fromTo('.problem__img-2', 2, {
            opacity: 0
        }, {
            opacity: 0,
            ease: Linear.easeNone
        })

        .fromTo('.problem__img-2', 2, {
            opacity: 0
        }, {
            opacity: 0,
            ease: Linear.easeNone
        })

        .fromTo('.problem__img-2', 4, {
            opacity: 0
        }, {
            opacity: 1,
            ease: Linear.easeNone
        })

        //----------------------------------------------------//


        new ScrollMagic.Scene({
                triggerElement: '.problem',
                triggerHook: 'onLeave',
                duration: '200%',
            })
            .setPin('.problem')
            .setTween([
                titleAnimations,
                bgAnimations,
                boxLineAnimations1,
                boxTitleAnimations1,
                boxDescriptionAnimations1,
                boxLinkAnimations1,
                boxLineAnimations2,
                boxTitleAnimations2,
                boxDescriptionAnimations2,
                boxLinkAnimations2,
                boxLineAnimations3,
                boxTitleAnimations3,
                boxDescriptionAnimations3,
                boxLinkAnimations3,
                imgAnimations1,
                imgAnimations2
            ])
            .addTo(controller);

        document.querySelector(".scrollmagic-pin-spacer") ? document.querySelector(".scrollmagic-pin-spacer").setAttribute("id", "problem") : null;
    } else {
        document.querySelector(".problem") ? document.querySelector(".problem").setAttribute("id", "problem") : null;
    }
})