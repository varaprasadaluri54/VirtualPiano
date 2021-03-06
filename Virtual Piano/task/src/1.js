const keys = {"KeyA": "audio/A.mp3", 'KeyS': "audio/S.mp3",
    'KeyD': "audio/D.mp3", 'KeyF': "audio/F.mp3",
    'KeyG': "audio/G.mp3", 'KeyH': "audio/H.mp3",
    'KeyJ': "audio/J.mp3", 'KeyW': "audio/W.mp3",
    'KeyE': "audio/E.mp3", 'KeyT': "audio/T.mp3",
    'KeyY': "audio/Y.mp3", 'KeyU': "audio/U.mp3",}

document.addEventListener("keypress", (e) => {
    if (e.code in keys) {
        new Audio(keys[e.code]).play()
    }
});