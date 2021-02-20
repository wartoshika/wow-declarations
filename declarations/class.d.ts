declare namespace WoWAPI {
    type CLASSES = "WARRIOR" | "DEATHKNIGHT" | "PALADIN" | "MONK" | "PRIEST" | "SHAMAN" | "DRUID" |
        "ROGUE" | "MAGE" | "WARLOCK" | "HUNTER" | "DEMONHUNTER";

    type CLASS_WARRIOR = 1;
    type CLASS_PALADIN = 2;
    type CLASS_HUNTER = 3;
    type CLASS_ROGUE = 4;
    type CLASS_PRIEST = 5;
    type CLASS_DEATH_KNIGHT = 6;
    type CLASS_SHAMAN = 7;
    type CLASS_MAGE = 8;
    type CLASS_WARLOCK = 9;
    type CLASS_MONK = 10;
    type CLASS_DRUID = 11;
    type CLASS_DEMON_HUNTER = 12;

    type CLASS_ID = CLASS_WARRIOR | CLASS_PALADIN | CLASS_HUNTER | CLASS_ROGUE | CLASS_PRIEST | CLASS_DEATH_KNIGHT | CLASS_SHAMAN |
        CLASS_MAGE | CLASS_WARLOCK | CLASS_MONK | CLASS_DRUID | CLASS_DEMON_HUNTER;
}

/**
 * Returns the color value associated with a given class
 * @param englishClass  the localization-independent name of the class, e.g., 'WARLOCK'. See ClassId for the list of acceptable arguments
 * @returns r,g,b,hex
 * - **rPerc, gPerc, bPerc**: Number - the value, between 0 and 1, associated with the red, green, and blue - respectively - coordinate in the RGB space
 * - **argbHex**: the ARGB hex code of the color, e.g., 'ff8788ee' for 'WARLOCK'.
 * @tupleReturn
 * @see https://wow.gamepedia.com/API_GetClassColor
 */
declare function GetClassColor(englishClass: WoWAPI.CLASSES): [number, number, number, string];
