export default function(width: number, height: number, website: string): Window {
    let win = window.open(website, undefined, `width=${width},height=${height}`) as Window
    return win
}