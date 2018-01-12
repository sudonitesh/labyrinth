/*jshint esversion: 6 */
const backgroundAudio = [
    {
        filename: "audio/music/bensound.com/epic1.mp3",
        backgroundSongName: "Epic",
        author: "bensound.com",
        legalNotice: "Music by bensound.com",
        link: "http://bensound.com/",
    },
    {
        filename: "audio/music/bensound.com/happiness.mp3",
        backgroundSongName: "Happiness",
        author: "bensound.com",
        legalNotice: "Music by bensound.com",
        link: "http://bensound.com/",
    },
    {
        filename: "audio/music/Drumplo.m4a",
        backgroundSongName: "Drumplo",
        author: "Samyak Jain",
        legalNotice: "Created by Samyak Jain",
        link: "https://github.com/samyakbvs",
    },
    {
        filename: "audio/background/yashkumarverma.github.io/mousePlay.mp3",
        backgroundSongName: "Mouse Play",
        author: "Yash Kumar Verma",
        legalNotice: "Created by Yash Kumar Verma",
        link: "https://github.com/yashkumarverma/",
    },
    {
        filename: "audio/background/yashkumarverma.github.io/pinballGame.mp3",
        backgroundSongName: "Pinball Mess",
        author: "Yash Kumar Verma",
        legalNotice: "Created by Yash Kumar Verma",
        link: "https://github.com/yashkumarverma/",
    },
    {
        filename: "audio/music/bensound.com/relaxing1.mp3",
        backgroundSongName: "Relaxing",
        author: "bensound.com",
        legalNotice: "Music by bensound.com",
        link: "http://bensound.com/",
    },
    {
        filename: "audio/background/abishekvashok/guitar_background.mp3",
        backgroundSongName: "Guitar classics",
        author: "Abishek V Ashok",
        legalNotice: "Music by Abishek V Ashok",
    },
    {
        filename: "audio/music/ownsound.mp3",
        backgroundSongName: "NoPro",
        author: "Saarthak Chaturvedi",
        legalNotice: "Music by Saarthak Chaturvedi",
        link: "http://github.com/saarthakchats",
    },

];
/*
creativeCommonsLicense[0] = Attribution 4.0 International
creativeCommonsLicense[1] = Attribution-NoDerivatives 4.0 International
creativeCommonsLicense[2] = Attribution-ShareAlike 4.0 International
creativeCommonsLicense[3] = Attribution-NonCommercial 4.0 International
creativeCommonsLicense[4] = Attribution-NonCommercial-NoDerivatives 4.0 International
creativeCommonsLicense[5] = Attribution-NonCommercial-ShareAlike 4.0 International
*/
const creativeCommonsLicense = [
'<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.',
'<a rel="license" href="http://creativecommons.org/licenses/by-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nd/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nd/4.0/">Creative Commons Attribution-NoDerivatives 4.0 International License</a>.',
'<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.',
'<a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial 4.0 International License</a>.',
'<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>.',
'<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.',
];
var backgroundNum = Math.floor(Math.random() * backgroundAudio.length);
var backgroundPlay = new Audio(backgroundAudio[backgroundNum].filename);
var audioPlay = null;
$(document).ready(function () {
    startBackgroundAudio();
});

function updateLegalBackground() {
    $("#legalNotice").html(backgroundAudio[backgroundNum].legalNotice);
    $("#backgroundSongName").html(backgroundAudio[backgroundNum].backgroundSongName);
    $("#legalNotice").attr("href", backgroundAudio[backgroundNum].link);
    $("#backgroundSongAuthor").html(backgroundAudio[backgroundNum].author);
}

function startBackgroundAudio() {
    updateLegalBackground();
    console.log(backgroundPlay);
    backgroundPlay.play();
}

function nextBackgroundAudio() {
    backgroundPlay.pause();
    if (backgroundNum !== backgroundAudio.length - 1) {
        backgroundNum = backgroundNum + 1;
    }
    updateLegalBackground();
    backgroundPlay = new Audio(backgroundAudio[backgroundNum].filename);
    console.log(backgroundPlay);
    backgroundPlay.play();
}

function previousBackgroundAudio() {
    backgroundPlay.pause();
    if (backgroundNum !== 0) {
        backgroundNum = backgroundNum - 1;
    }
    updateLegalBackground();
    backgroundPlay = new Audio(backgroundAudio[backgroundNum].filename);
    console.log(backgroundPlay);
    backgroundPlay.play();
}

function stopBackgroundAudio() {
    backgroundPlay.pause();
}

function setVolume() {
    if (audioPlay !== null) {
        audioPlay.volume = document.getElementById("volume1").value;
    }
    backgroundPlay.volume = document.getElementById("volume1").value;
}

function stopAudio() {
    if (audioPlay !== null) {
        audioPlay.pause();
    }
}

function playAudio(audio, licenseNum) {
    audioPlay = new Audio("audio/" + audio);
    console.log(audioPlay);
    audioPlay.play();
    $("tileLicense").html(creativeCommonsLicense[licenseNum]);
}
