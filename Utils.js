export function capitalizeWords(text) {
    let arr = text.split(" ");
    arr = arr.map(element => {
        return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase();
    });
    return arr.join(" ");
}

export function search(products, text) {
    return products.filter(product => product.title.includes(text));
}
