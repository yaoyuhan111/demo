// 函数用于播放或暂停背景音乐
function playMusic() {
    // 获取具有 id 为 "backgroundMusic" 的音频元素
    var audio = document.getElementById("backgroundMusic");

    // 检查音频是否处于暂停状态
    if (audio.paused) {
        // 如果音频暂停，则播放音频
        audio.play();
    } else {
        // 如果音频正在播放，则暂停音频
        audio.pause();
    }
}
