export default function sortCards(cardStatus, objArr) {
    if (Array.isArray(objArr)) {
        return objArr.filter(obj => {
            return obj.type === cardStatus;
        });
    }
    else {
        return undefined;
    }
}
