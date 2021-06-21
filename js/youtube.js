let tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//youtube js Library API function
function onYouTubeIframeAPIReady() {
  //<div id = "player"></div>
  new YT.Player('player', {
    videoId: 'u3ybWiEUaUU', //최초 재생할 유튜브 영상 아이디
    playerVars : {
      autoplay : true,
      loop : true,
      playlist : 'u3ybWiEUaUU' // 반복 재생할 유튜브 영상 ID 목록
    },
    events : {
      onReady : function(event){
        event.target.mute(); //음소거
      }
    }
  });
}

