function translate(key) {
    if (ru[key] !== undefined) return ru[key];
    return key;
}

function translateSeason(season) {
    season = season.toLowerCase();
    if (season === "spring") return "Весна";
    if (season === "summer") return "Лето";
    if (season === "fall") return "Осень";
    if (season === "winter") return "Зима";
    return season;
}

function translateMonsterHuntingCategory(id) {
    return translate("AdventureGuild_KillList_" + id.replace(" ", ""));
}

function translateMonster(id) {
    return id;
}

function translateCharacter(id) {
    return translate(id);
}
