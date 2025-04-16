// Check if 2 obkects are depp copy of each other.

function checkDeepCopy(obj1, obj2) {
    if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
        return true;
    }
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
        return false;
    }
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (keys1 in obj1) {
        if (!checkDeepCopy(obj1[keys1], obj2[keys1])) {
            return false;
        }
    }
    return true;
}

console.log(checkDeepCopy({ a: 1, b: { c: 3 } }, { a: 1, b: 2, c: 3 }));