declare namespace WoWAPI {
    type CLASSES = "WARRIOR" | "DEATHKNIGHT" | "PALADIN" | "MONK" | "PRIEST" | "SHAMAN" | "DRUID" |
        "ROGUE" | "MAGE" | "WARLOCK" | "HUNTER" | "DEMONHUNTER";
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
