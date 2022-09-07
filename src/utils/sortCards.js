export default function sortCards(cardStatus, objArr) {
    return objArr.filter(obj => {
        return obj.type === cardStatus;
    });
}
