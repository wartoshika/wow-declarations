/** @noSelfInFile */

declare namespace WoWAPI {
    type BuffFilterType = "HELPFUL" | "HARMFUL" | "PLAYER" | "RAID" | "CANCELABLE" | "NOT_CANCELABLE";
    type BuffWeaponHandType = 1 | 2;
    type DebuffType = "Magic" | "Disease" | "Poison" | "Curse" | "";
}

/**
 * Removes a specific buff from the unit
 * @param unitId Unit to cancel the buff from, must be under the player's control
 * @param spellName Name of the buff to cancel
 * @param spellRank Spell rank
 * @requires NO_COMBAT
 * @see https://wow.gamepedia.com/API_CancelUnitBuff
 */
declare function CancelUnitBuff(unitId: WoWAPI.UnitId, spellName: string, spellRank?: string): void;

/**
 * Removes a specific buff from the unit
 * @param unitId Unit to cancel the buff from, must be under the player's control
 * @param buffIndex index of the buff to cancel, ascending from 1.
 * @param filter any of combination of "HELPFUL|HARMFUL|PLAYER|RAID|CANCELABLE|NOT_CANCELABLE".
 * @requires NO_COMBAT
 * @see https://wow.gamepedia.com/API_CancelUnitBuff
 */
declare function CancelUnitBuff(unitId: WoWAPI.UnitId, buffIndex: number, filter?: WoWAPI.BuffFilterType & string): void;

/**
 * Cancels a druid's shapeshift buff
 * @deprecated
 * @protected
 * @see https://wow.gamepedia.com/API_CancelShapeshiftForm
 */
declare function CancelShapeshiftForm(): void;

/**
 * Removes temporary item buffs, such as Rogue poisons, Shaman weapon buffs, and sharpening stones from either the Main Hand or Off Hand equipment slots
 * @param weaponHand 1 for Main Hand, 2 for Off Hand
 * @deprecated
 * @protected
 * @see https://wow.gamepedia.com/API_CancelItemTempEnchantment
 */
declare function CancelItemTempEnchantment(weaponHand: WoWAPI.BuffWeaponHandType): void;

/**
 * Returns information about the player's current temporary enchants, such as fishing lures or sharpening stones and weightstones produced by blacksmiths
 * @see https://wow.gamepedia.com/API_GetWeaponEnchantInfo
 * @tupleReturn
 */
declare function GetWeaponEnchantInfo(): [boolean, number, number, number, boolean, number, number, number];

/**
 * Returns information about a buff or debuff on the specified unit
 * @param unitId unit whose auras to query
 * @param index index (from 1 to 40)
 * @param filter list of filters, separated by spaces or pipes. "HELPFUL" by default
 * @see https://wow.gamepedia.com/API_UnitAura
 * @tupleReturn
 */
// tslint:disable-next-line max-line-length
declare function UnitAura(unitId: WoWAPI.UnitId, index: number, filter?: WoWAPI.BuffFilterType & string): [string, WoWAPI.TexturePath, number, WoWAPI.DebuffType, number, number, WoWAPI.UnitId, boolean, boolean, number, boolean, boolean, boolean, boolean, number];

/**
 * Retrieve info about a certain buff on a certain unit
 * @param unitId unit whose buffs to query
 * @param index index (from 1 to 40)
 * @param filter list of filters, separated by spaces or pipes ("|"). "HELPFUL" by default
 * @see https://wow.gamepedia.com/API_UnitBuff
 * @tupleReturn
 */
// tslint:disable-next-line max-line-length
declare function UnitBuff(unitId: WoWAPI.UnitId, index: number, filter?: WoWAPI.BuffFilterType & string): [string, WoWAPI.TexturePath, number, WoWAPI.DebuffType, number, number, WoWAPI.UnitId, boolean, boolean, number, boolean, boolean, boolean, number, number, number, number];

/**
 * Retrieve info about a specified debuff on a certain unit
 * @param unitId unit whose buffs to query
 * @param index index (from 1 to 40)
 * @param filter list of filters, separated by spaces or pipes ("|"). "HELPFUL" by default
 * @see https://wow.gamepedia.com/API_UnitBuff
 * @tupleReturn
 */
// tslint:disable-next-line max-line-length
declare function UnitDebuff(unitId: WoWAPI.UnitId, index: number, filter?: WoWAPI.BuffFilterType & string): [string, WoWAPI.TexturePath, number, WoWAPI.DebuffType, number, number, WoWAPI.UnitId, boolean, boolean, number, boolean, boolean, boolean, number, number, number, number];
