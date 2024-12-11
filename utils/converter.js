export function convertDate(isoValue) {
    const date = new Date(isoValue)

    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()

    return `${day}/${month}/${year}`
}

export function formatPrice(amount) {
    return new Intl.NumberFormat('vi-VN').format(amount) + ' VND'
}
