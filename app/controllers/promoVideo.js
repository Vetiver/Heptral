module.exports = function(scope){

    scope.playVideo = function () {
        var video = document.getElementById("video1").firstChild.firstChild;
        video.play();
    };

    scope.popupLeave = function () {
        var video = document.getElementById("video1").firstChild.firstChild;
        video.pause();
        video.currentTime = 0;
    };
    window.onsuspend = function(){
        let video = document.getElementById("video1").firstChild.firstChild;
        video.pause();
        video.currentTime = 0;
    };
};

