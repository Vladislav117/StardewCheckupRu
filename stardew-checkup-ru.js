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

function translateRelStatus(status) {
    status = status.toLowerCase();
    if (status === "unmet") return "Незнакомец";
    if (status === "friendly") return "Друг";
    if (status === "married") return "Жена/муж";
    if (status === "dating") return "Встречается";
    return status;
}

function translateRecipe(id) {
    id = id.replace(" ", "").replace("\'", "");
    return translate(id + "_Name");
}
