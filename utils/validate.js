export function checkImage(img) {
    return img.includes('http') ? img : `data:image/png;base64,${img}`
}
