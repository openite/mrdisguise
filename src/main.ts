import {win, injectCss} from './lib/lib'
import html from './index.html?raw'
import css from "./styles/main.css?raw"

let windowTitle = window.document.title;

let popup = win(512,512, "about:blank");

popup.document.write(html)

injectCss(popup, css)

popup.document.getElementById("open").addEventListener("click", () => {win(512,512, "https://google.com");})

popup.document.getElementById("customWindowOpen").addEventListener("click", () => {
    let url = popup.document.getElementById("customWindow") as HTMLInputElement;
    if (url.value.startsWith("https://") || url.value.startsWith("http://")) {
        win(1080, 1080, url.value)
    } else {
        win(1080, 1080, "https://" + url.value)
    }
})
popup.document.title = windowTitle