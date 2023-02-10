/**
 * @description Inject Css!
 */
export default function injectCss(win: Window, css: string): boolean {
    let styleTag = win.document.createElement('style');
    styleTag.innerHTML = css;

    win.document.head.appendChild(styleTag);
    return true;
}

