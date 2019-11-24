/** @noSelfInFile */

declare namespace WoWAPI {
    type CompanionType = "CRITTER" | "MOUNT";
    type MountType = 0x1 | 0x2 | 0x4 | 0x8 | 0x10;
}

/**
 * Summons the specified companion
 * @param type The type of companion to summon or dismiss: "CRITTER" or "MOUNT"
 * @param id The companion index to summon or dismiss, ascending from 1
 * @see https://wow.gamepedia.com/API_CallCompanion
 * @since 3.0.2
 */
declare function CallCompanion(type: WoWAPI.CompanionType, companionIndex: number): void;

/**
 * Dismisses a currently-summoned mount or non-combat pet
 * @param type type of companion to dismiss, either "MOUNT" or "CRITTER".
 * @see https://wow.gamepedia.com/API_DismissCompanion
 * @since 3.0.2
 */
declare function DismissCompanion(type: WoWAPI.CompanionType): void;

/**
 * Returns information about the companions you have
 * @param type Companion type to query: "CRITTER" or "MOUNT".
 * @param companionIndex Index of the slot to query. Starting at 1 and going up to GetNumCompanions("type").
 * @returns **
 * - **creatureID**: The NPC ID of the companion
 * - **creatureName**: The name of the companion
 * - **creatureSpellID**: The spell ID to cast the companion. This is not passed to CallCompanion, but can be used with, e.g., GetSpellInfo
 * - **icon**: The texture of the icon for the companion
 * - **issummoned**: 1 if the companion is summoned, nil if it's not
 * - **mountType**: Bitfield for air/ground/water mounts
 *  - 0x1: Ground
 *  - 0x2: Can fly
 *  - 0x4: ? (set for most mounts)
 *  - 0x8: Underwater
 *  - 0x10: Can jump (turtles cannot)
 * @deprecated use C_MountJournal.GetMountInfoByID()
 * @see https://wow.gamepedia.com/API_GetCompanionInfo
 * @since 3.0.2
 * @tupleReturn
 */
// tslint:disable-next-line max-line-length
declare function GetCompanionInfo(type: WoWAPI.CompanionType, companionIndex: number): [number, string, number, WoWAPI.TexturePath, WoWAPI.Flag, WoWAPI.MountType];

/**
 * Returns the number of companions you have
 * @param type Type of companions to count: "CRITTER", or "MOUNT".
 * @returns The number of companions of a specific type
 * @see https://wow.gamepedia.com/API_GetNumCompanions
 * @since 3.0.2
 */
declare function GetNumCompanions(type: WoWAPI.CompanionType): number;

/**
 * Places a companion onto the mouse cursor
 * @param type companion type, either "MOUNT" or "CRITTER"
 * @param companionIndex index of the companion of the specified type to place on the cursor, ascending from 1.
 * @protected NOCOMBAT
 * @see https://wow.gamepedia.com/API_PickupCompanion
 * @since 3.0.2
 */
declare function PickupCompanion(type: WoWAPI.CompanionType, companionIndex: number): void;

/**
 * Summons a random non-combat pet companion
 * @description This function is part of the companions API that was deprecated for battle-pets with the introduction of the Pet Journal.
 * Calling it will result in UI_ERROR_MESSAGE being fired
 * @deprecated Use C_PetJournal.SummonRandomPet instead
 * @since 3.3.3
 * @see https://wow.gamepedia.com/API_SummonRandomCritter
 */
declare function SummonRandomCritter(): void;
