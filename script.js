document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       ELEMENTS
    ====================================================== */

    const passwordScreen =
        document.getElementById("passwordScreen");

    const accessScreen =
        document.getElementById("accessScreen");

    const envelopeScreen =
        document.getElementById("envelopeScreen");

    const distanceScreen =
        document.getElementById("distanceScreen");

    const birthdayScreen =
        document.getElementById("birthdayScreen");

    const letterScreen =
        document.getElementById("letterScreen");

    const memoryIntroScreen =
        document.getElementById("memoryIntroScreen");

    const memoryScreen =
        document.getElementById("memoryScreen");

    const favouriteScreen =
        document.getElementById("favouriteScreen");

    const finalScreen =
        document.getElementById("finalScreen");

    const closingScreen =
        document.getElementById("closingScreen");


    /* PASSWORD */

    const passwordInput =
        document.getElementById("passwordInput");

    const unlockButton =
        document.getElementById("unlockButton");

    const wrongPassword =
        document.getElementById("wrongPassword");


    /* BUTTONS */

    const continueToEnvelope =
        document.getElementById("continueToEnvelope");

    const openGiftButton =
        document.getElementById("openGiftButton");

    const distanceNextButton =
        document.getElementById("distanceNextButton");

    const birthdayNextButton =
        document.getElementById("birthdayNextButton");

    const letterNextButton =
        document.getElementById("letterNextButton");

    const memoryStartButton =
        document.getElementById("memoryStartButton");

    const nextMemoryButton =
        document.getElementById("nextMemoryButton");

    const finalSurpriseButton =
        document.getElementById("finalSurpriseButton");

    const openFinalGiftButton =
        document.getElementById("openFinalGiftButton");


    /* OTHER */

    const envelope =
        document.getElementById("envelope");

    const distanceNumber =
        document.getElementById("distanceNumber");

    const memoryImage =
        document.getElementById("memoryImage");

    const memoryCaption =
        document.getElementById("memoryCaption");

    const memoryCounter =
        document.getElementById("memoryCounter");

    const memoryTinyText =
        document.getElementById("memoryTinyText");

    const memoryChoices =
        document.getElementById("memoryChoices");

    const favouriteResponse =
        document.getElementById("favouriteResponse");

    const giftBox =
        document.getElementById("giftBox");

    const psButton =
        document.getElementById("psButton");

    const psMessage =
        document.getElementById("psMessage");

    const birthdaySong =
        document.getElementById("birthdaySong");


    /* =====================================================
       SCREEN SWITCHING
    ====================================================== */

    function showScreen(screenToShow) {

        const screens = [
            passwordScreen,
            accessScreen,
            envelopeScreen,
            distanceScreen,
            birthdayScreen,
            letterScreen,
            memoryIntroScreen,
            memoryScreen,
            favouriteScreen,
            finalScreen,
            closingScreen
        ];

        screens.forEach(screen => {
            screen.classList.remove("active");
        });

        setTimeout(() => {
            screenToShow.classList.add("active");
        }, 40);
    }


    /* =====================================================
       PASSWORD
    ====================================================== */

    function checkPassword() {

        const enteredPassword =
            passwordInput.value.trim();

        if (enteredPassword === "2025") {

            wrongPassword.classList.remove("show");

            passwordInput.blur();

            showScreen(accessScreen);

        } else {

            wrongPassword.classList.add("show");

            passwordInput.value = "";

            passwordInput.focus();

            passwordInput.animate(
                [
                    {
                        transform: "translateX(0)"
                    },
                    {
                        transform: "translateX(-7px)"
                    },
                    {
                        transform: "translateX(7px)"
                    },
                    {
                        transform: "translateX(-5px)"
                    },
                    {
                        transform: "translateX(5px)"
                    },
                    {
                        transform: "translateX(0)"
                    }
                ],
                {
                    duration: 350
                }
            );
        }
    }


    unlockButton.addEventListener(
        "click",
        checkPassword
    );


    passwordInput.addEventListener(
        "keydown",
        event => {

            if (event.key === "Enter") {
                checkPassword();
            }

        }
    );


    /* =====================================================
       ACCESS → ENVELOPE
    ====================================================== */

    continueToEnvelope.addEventListener(
        "click",
        () => {

            showScreen(envelopeScreen);

        }
    );


    /* =====================================================
       MUSIC
       STARTS ONLY WHEN HE OPENS THE ENVELOPE
       NO LOOP
       NO VISIBLE MUSIC BUTTON
    ====================================================== */

    let musicStarted = false;

    function startMusic() {

        if (!birthdaySong) {
            return;
        }

        if (musicStarted) {
            return;
        }

        musicStarted = true;

        birthdaySong.volume = 0.30;

        birthdaySong.currentTime = 0;

        const playPromise =
            birthdaySong.play();

        if (playPromise !== undefined) {

            playPromise.catch(() => {

                /*
                    Browser may block autoplay,
                    but the website itself still works.
                */

            });

        }
    }


    /* =====================================================
       ENVELOPE → DISTANCE
    ====================================================== */

    openGiftButton.addEventListener(
        "click",
        () => {

            envelope.classList.add("open");

            /*
                This click is the user's interaction,
                so music can begin here.
            */

            startMusic();

            setTimeout(
                () => {

                    showScreen(distanceScreen);

                    startDistanceAnimation();

                },
                900
            );

        }
    );


    /* =====================================================
       DISTANCE COUNTER
    ====================================================== */

    let distanceAnimationStarted = false;

    function startDistanceAnimation() {

        if (distanceAnimationStarted) {
            return;
        }

        distanceAnimationStarted = true;

        const target = 3800;

        const duration = 2200;

        const startTime =
            performance.now();


        function updateDistance(currentTime) {

            const elapsed =
                currentTime - startTime;

            const progress =
                Math.min(
                    elapsed / duration,
                    1
                );

            const eased =
                1 - Math.pow(
                    1 - progress,
                    3
                );

            const currentValue =
                Math.floor(
                    target * eased
                );

            distanceNumber.textContent =
                currentValue.toLocaleString();


            if (progress < 1) {

                requestAnimationFrame(
                    updateDistance
                );

            } else {

                distanceNumber.textContent =
                    "3,800";

                setTimeout(
                    () => {

                        distanceNextButton.classList.remove(
                            "hidden"
                        );

                    },
                    500
                );
            }
        }


        requestAnimationFrame(
            updateDistance
        );
    }


    distanceNextButton.addEventListener(
        "click",
        () => {

            showScreen(birthdayScreen);

        }
    );


    /* =====================================================
       BIRTHDAY → LETTER
    ====================================================== */

    birthdayNextButton.addEventListener(
        "click",
        () => {

            showScreen(letterScreen);

        }
    );


    /* =====================================================
       LETTER → MEMORY INTRO
    ====================================================== */

    letterNextButton.addEventListener(
        "click",
        () => {

            showScreen(memoryIntroScreen);

        }
    );


    /* =====================================================
       MEMORY DATA
    ====================================================== */

    const memories = [

        {
            image: "photos/photo2.jpg",

            caption:
                "my favourite person ♡",

            tiny:
                "and somehow, I still get lucky enough to call you mine."
        },

        {
            image: "photos/photo3.jpg",

            caption:
                "that smile… my favourite ❤️",

            tiny:
                "I could probably look at this forever."
        },

        {
            image: "photos/photo4.jpg",

            caption:
                "one of my favourite memories of us ♡",

            tiny:
                "just one of those moments I wish I could pause."
        },

        {
            image: "photos/photo5.jpg",

            caption:
                "just us, and that's enough ❤️",

            tiny:
                "nothing fancy. Just my favourite kind of happy."
        },

        {
            image: "photos/photo6.jpg",

            caption:
                "a little piece of us 🫶🏻",

            tiny:
                "another memory I get to keep close."
        },

        {
            image: "photos/photo7.jpg",

            caption:
                "this moment still makes me smile ♡",

            tiny:
                "and I hope we make a thousand more like this."
        },

        {
            image: "photos/photo8.jpg",

            caption:
                "more memories, more reasons to love you ❤️",

            tiny:
                "and hopefully… only the beginning."
        }

    ];


    let currentMemory = 0;


    /* =====================================================
       MEMORY START
    ====================================================== */

    memoryStartButton.addEventListener(
        "click",
        () => {

            currentMemory = 0;

            showMemory(currentMemory);

            showScreen(memoryScreen);

        }
    );


    /* =====================================================
       SHOW MEMORY
    ====================================================== */

    function showMemory(index) {

        const memory =
            memories[index];

        memoryImage.style.opacity = "0";

        memoryImage.style.transform =
            "scale(0.98)";


        setTimeout(
            () => {

                memoryImage.src =
                    memory.image;

                memoryImage.alt =
                    `Memory ${index + 1}`;

                memoryCaption.textContent =
                    memory.caption;

                memoryTinyText.textContent =
                    memory.tiny;

                memoryCounter.textContent =
                    `${index + 1} / ${memories.length}`;


                memoryImage.style.opacity =
                    "1";

                memoryImage.style.transform =
                    "scale(1)";

            },
            250
        );


        if (
            index ===
            memories.length - 1
        ) {

            nextMemoryButton.textContent =
                "That's all… for now ♡";

        } else {

            nextMemoryButton.textContent =
                "Next memory ♡";

        }
    }


    /* =====================================================
       NEXT MEMORY
    ====================================================== */

    nextMemoryButton.addEventListener(
        "click",
        () => {

            if (
                currentMemory <
                memories.length - 1
            ) {

                currentMemory++;

                showMemory(
                    currentMemory
                );

            } else {

                showScreen(
                    favouriteScreen
                );

            }

        }
    );


    /* =====================================================
       FAVOURITE MEMORY
    ====================================================== */

    const choiceButtons =
        memoryChoices.querySelectorAll(
            "button"
        );


    choiceButtons.forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    choiceButtons.forEach(
                        btn => {

                            btn.style.opacity =
                                "0.45";

                        }
                    );


                    button.style.opacity =
                        "1";


                    favouriteResponse.classList.add(
                        "show"
                    );


                    button.animate(
                        [
                            {
                                transform:
                                    "scale(1)"
                            },
                            {
                                transform:
                                    "scale(1.12)"
                            },
                            {
                                transform:
                                    "scale(1)"
                            }
                        ],
                        {
                            duration: 400
                        }
                    );

                }
            );

        }
    );


    /* =====================================================
       FAVOURITE → FINAL SURPRISE
    ====================================================== */

    finalSurpriseButton.addEventListener(
        "click",
        () => {

            showScreen(finalScreen);

        }
    );


    /* =====================================================
       FINAL GIFT
    ====================================================== */

    openFinalGiftButton.addEventListener(
        "click",
        () => {

            giftBox.classList.add("opened");

            openFinalGiftButton.textContent =
                "♡";


            /*
                Give the gift-opening animation
                a moment to finish.
            */

            setTimeout(
                () => {

                    showScreen(closingScreen);

                    /*
                        The closing screen is now the
                        FINAL screen.

                        We begin gently fading the music
                        so that the music and website
                        finish together.
                    */

                    finishMusicWithWebsite();

                },
                1100
            );

        }
    );


    /* =====================================================
       MUSIC + WEBSITE END TOGETHER
    ====================================================== */

    function finishMusicWithWebsite() {

        if (!birthdaySong) {
            return;
        }

        /*
            If the song has already naturally ended,
            there is nothing left to fade.
        */

        if (
            birthdaySong.paused ||
            birthdaySong.ended
        ) {

            return;

        }


        /*
            Fade the music over 4 seconds.
        */

        const fadeDuration = 4000;

        const startingVolume =
            birthdaySong.volume;

        const startTime =
            performance.now();


        function fade(currentTime) {

            const elapsed =
                currentTime - startTime;

            const progress =
                Math.min(
                    elapsed / fadeDuration,
                    1
                );


            birthdaySong.volume =
                startingVolume *
                (1 - progress);


            if (progress < 1) {

                requestAnimationFrame(
                    fade
                );

            } else {

                birthdaySong.pause();

                birthdaySong.currentTime = 0;

                birthdaySong.volume =
                    startingVolume;

                /*
                    Website gently fades out after
                    the music has finished.
                */

                document.body.classList.add(
                    "music-ending"
                );

            }

        }


        requestAnimationFrame(
            fade
        );
    }


    /* =====================================================
       P.S.
    ====================================================== */

    psButton.addEventListener(
        "click",
        () => {

            psMessage.classList.toggle(
                "show"
            );

        }
    );


    /* =====================================================
       IMAGE FALLBACK
    ====================================================== */

    document
        .querySelectorAll("img")
        .forEach(
            img => {

                img.addEventListener(
                    "error",
                    () => {

                        img.style.background =
                            "#eaded3";

                        img.style.objectFit =
                            "contain";

                        img.alt =
                            "Photo could not be loaded";

                    }
                );

            }
        );

});