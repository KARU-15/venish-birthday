document.addEventListener("DOMContentLoaded", function () {


    /* =====================================
       ELEMENTS
    ===================================== */

    const envelope =
        document.getElementById("envelope");

    const openButton =
        document.getElementById("openButton");

    const openingScreen =
        document.getElementById("openingScreen");

    const birthdayReveal =
        document.getElementById("birthdayReveal");

    const letterSection =
        document.getElementById("letterSection");

    const memoriesSection =
        document.getElementById("memoriesSection");

    const finalSection =
        document.getElementById("finalSection");


    const nextButton =
        document.getElementById("nextButton");

    const memoriesButton =
        document.getElementById("memoriesButton");

    const finalButton =
        document.getElementById("finalButton");


    const birthdaySong =
        document.getElementById("birthdaySong");

    const musicButton =
        document.getElementById("musicButton");


    const giftBox =
        document.getElementById("giftBox");

    const giftHint =
        document.querySelector(".gift-hint");

    const finalMessage =
        document.getElementById("finalMessage");


    /* =====================================
       MEMORY ELEMENTS
    ===================================== */

    const memoryPhoto =
        document.getElementById("memoryPhoto");

    const memoryCaption =
        document.getElementById("memoryCaption");

    const memoryCounter =
        document.getElementById("memoryCounter");

    const memoryCard =
        document.getElementById("singleMemoryCard");

    const memoryNextButton =
        document.getElementById("memoryNextButton");

    const memoriesFinished =
        document.getElementById("memoriesFinished");


    /* =====================================
       MEMORY PHOTOS + CAPTIONS
    ===================================== */

    const memories = [

        {
            photo: "photos/photo2.jpg",

            caption:
                "my favourite person ♡"
        },

        {
            photo: "photos/photo3.jpg",

            caption:
                "that smile… my favourite ❤️"
        },

        {
            photo: "photos/photo4.jpg",

            caption:
                "one of my favourite memories of us ♡"
        },

        {
            photo: "photos/photo5.jpg",

            caption:
                "just us, and that's enough ❤️"
        },

        {
            photo: "photos/photo6.jpg",

            caption:
                "a little piece of us 🫶🏻"
        },

        {
            photo: "photos/photo7.jpg",

            caption:
                "this moment still makes me smile ♡"
        },

        {
            photo: "photos/photo8.jpg",

            caption:
                "more memories, more reasons to love you ❤️"
        }

    ];


    let currentMemory = 0;

    let envelopeOpened = false;

    let musicPlaying = false;



    /* =====================================
       MUSIC
    ===================================== */

    function playMusic() {

        if (!birthdaySong) {

            console.log(
                "Audio element missing"
            );

            return;

        }


        birthdaySong.volume = 0.25;


        birthdaySong.play()
            .then(function () {

                musicPlaying = true;

                musicButton.textContent =
                    "🔊 Music On";

            })
            .catch(function (error) {

                console.log(
                    "Music error:",
                    error
                );

            });

    }



    function pauseMusic() {

        if (!birthdaySong) {
            return;
        }


        birthdaySong.pause();

        musicPlaying = false;

        musicButton.textContent =
            "🔇 Music Off";

    }



    /* =====================================
       MUSIC BUTTON
    ===================================== */

    musicButton.addEventListener(
        "click",
        function () {

            if (musicPlaying) {

                pauseMusic();

            } else {

                playMusic();

            }

        }
    );



    /* =====================================
       OPEN ENVELOPE
    ===================================== */

    function openEnvelope() {


        if (envelopeOpened) {
            return;
        }


        envelopeOpened = true;


        envelope.classList.add(
            "open"
        );


        /* Start music because the user
           has just interacted */

        playMusic();



        setTimeout(
            function () {


                openingScreen.style.opacity =
                    "0";


                setTimeout(
                    function () {


                        openingScreen.style.display =
                            "none";


                        birthdayReveal
                            .classList
                            .remove(
                                "hidden-section"
                            );


                        birthdayReveal.style.display =
                            "flex";


                        birthdayReveal.style.opacity =
                            "1";


                        window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        });


                    },
                    900
                );


            },
            1200
        );

    }



    envelope.addEventListener(
        "click",
        openEnvelope
    );


    openButton.addEventListener(
        "click",
        openEnvelope
    );



    /* =====================================
       BIRTHDAY → LETTER
    ===================================== */

    nextButton.addEventListener(
        "click",
        function () {


            birthdayReveal.style.display =
                "none";


            letterSection
                .classList
                .remove(
                    "hidden-section"
                );


            letterSection.style.display =
                "flex";


            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });


        }
    );



    /* =====================================
       LETTER → MEMORIES
    ===================================== */

    memoriesButton.addEventListener(
        "click",
        function () {


            letterSection.style.display =
                "none";


            memoriesSection
                .classList
                .remove(
                    "hidden-section"
                );


            memoriesSection.style.display =
                "flex";


            currentMemory = 0;


            memoryCard.style.display =
                "block";


            memoriesFinished.style.display =
                "none";


            memoryNextButton.style.display =
                "block";


            memoryCounter.style.display =
                "block";


            showMemory(
                currentMemory
            );


            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });


        }
    );



    /* =====================================
       SHOW MEMORY
    ===================================== */

    function showMemory(index) {


        memoryCard.classList.remove(
            "show-memory"
        );


        setTimeout(
            function () {


                memoryPhoto.src =
                    memories[index].photo;


                memoryPhoto.alt =
                    "Memory " +
                    (index + 1);


                memoryCaption.textContent =
                    memories[index].caption;


                memoryCounter.textContent =
                    (index + 1) +
                    " / " +
                    memories.length;


                memoryCard.classList.add(
                    "show-memory"
                );


            },
            300
        );

    }



    /* =====================================
       NEXT MEMORY
    ===================================== */

    memoryNextButton.addEventListener(
        "click",
        function () {


            if (
                currentMemory <
                memories.length - 1
            ) {


                currentMemory++;


                showMemory(
                    currentMemory
                );


            } else {


                memoryCard.classList.remove(
                    "show-memory"
                );


                memoryNextButton.style.display =
                    "none";


                memoryCounter.style.display =
                    "none";


                setTimeout(
                    function () {


                        memoryCard.style.display =
                            "none";


                        memoriesFinished.style.display =
                            "block";


                    },
                    600
                );

            }

        }
    );



    /* =====================================
       MEMORIES → FINAL
    ===================================== */

    finalButton.addEventListener(
        "click",
        function () {


            memoriesSection.style.display =
                "none";


            finalSection
                .classList
                .remove(
                    "hidden-section"
                );


            finalSection.style.display =
                "flex";


            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });


        }
    );



    /* =====================================
       FINAL GIFT
    ===================================== */

    giftBox.addEventListener(
        "click",
        function () {


            giftBox.style.transform =
                "scale(1.12)";


            setTimeout(
                function () {


                    giftBox.style.display =
                        "none";


                    giftHint.style.display =
                        "none";


                    finalMessage
                        .classList
                        .remove(
                            "hidden-message"
                        );


                    finalMessage.style.display =
                        "block";


                },
                450
            );

        }
    );


});