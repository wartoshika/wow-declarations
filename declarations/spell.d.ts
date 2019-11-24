/** @noSelfInFile */

declare const BOOKTYPE_SPELL = "spell";
declare const BOOKTYPE_PET = "pet";

declare namespace WoWAPI {
    type BookType = typeof BOOKTYPE_SPELL | typeof BOOKTYPE_PET;
}

/**
 * Retrieves the spell name and spell rank for a spell in the player's spell book.
 *
 * @see https://wow.gamepedia.com/API_GetSpellBookItemName
 * @since 4.0.1
 * @returns spellName, spellSubName
 * @tupleReturn
 */
declare function GetSpellBookItemName(spellId: number, type: WoWAPI.BookType): [string, string];

/**
 * Retrieves the cooldown data of the spell specified.
 *
 * @see https://wow.gamepedia.com/API_GetSpellCooldown
 * @returns start, duration, enabled, modRate
 * @tupleReturn
 */
declare function GetSpellCooldown(spellId: number, type: WoWAPI.BookType): [number, number, WoWAPI.Flag, number];

/**
 * Returns the icon of the specified spell.
 *
 * @see https://wow.gamepedia.com/API_GetSpellTexture
 */
declare function GetSpellTexture(spellId: number, type: WoWAPI.BookType): WoWAPI.TexturePath;
