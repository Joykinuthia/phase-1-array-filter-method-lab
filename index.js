// Code your solution here

function findMatching(drivers, name) {
    return drivers.filter (drivers => drivers.toLowerCase()===name.toLowerCase());
}

function fuzzyMatch(drivers, letters) {
    return drivers.filter (drivers => drivers.toLowerCase().startsWith(letters.toLowerCase()));
}

function matchName(drivers, string) {
    return drivers.filter (drivers =>drivers.name===string);
}