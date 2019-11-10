/** @noSelfInFile */

declare namespace WoWAPI {
    type CharacterTotemElementType = 1 | 2 | 3 | 4;
    type CharacterRestState = 0 | 1;
    type CharacterDeathkightRuneType = 0 | 1 | 2 | 3 | 4 | 5 | 6;
}

/**
 * Accepts a resurrection, returning the character to life
 * @description Most player-sponsored resurrection offers expire automatically after 60 seconds
 * @see https://wow.gamepedia.com/API_AcceptResurrect
 */
declare function AcceptResurrect(): void;

/**
 * Accept the durability loss / resurrection sickness when being resurrected by the spirit healer
 * @description Name is misleading: you no longer lose XP when you use the spirit healer. You're really accepting 25% durability penalty
 * and (if over level 10) resurrection sickness
 * @see https://wow.gamepedia.com/API_AcceptXPLoss
 */
declare function AcceptXPLoss(): void;

/**
 * Declines a resurrection offer
 * @see https://wow.gamepedia.com/API_DeclineResurrect
 */
declare function DeclineResurrect(): void;

/**
 * Destroys a totem/minion
 * @param slot The totem type to be destroyed, where Fire is 1, Earth is 2, Water is 3 and Air is 4.
 * @event PLAYER_TOTEM_UPDATE
 * @protected
 * @deprecated
 * @see https://wow.gamepedia.com/API_DestroyTotem
 */
declare function DestroyTotem(slot: WoWAPI.CharacterTotemElementType): void;

/**
 * Finds the subzone the player's Hearthstone is set to
 * @returns Returns the String name of the subzone the player's Hearthstone is set to, e.g. "Tarren Mill", "Crossroads", or "Brill".
 * @see https://wow.gamepedia.com/API_GetBindLocation
 */
declare function GetBindLocation(): string;

/**
 * Retrieves the number of combo points gained by a player
 * @param unitId Either "player" or "vehicle".
 * @param target Normally "target", but can be any valid UnitId
 * @deprecated Combo Points for rogues are now shared across all targets and they are no longer lost when switching targets. GetComboPoints
 * will return 0 if target is friendly or not found. Use UnitPower(unitId, 4) to get combo points without an enemy targeted
 * @see https://wow.gamepedia.com/API_GetComboPoints
 */
declare function GetComboPoints(unitId: WoWAPI.UnitId, target: WoWAPI.UnitId): number;

/**
 * Returns the integer of the title currently selected by the player
 * @see https://wow.gamepedia.com/API_GetCurrentTitle
 */
declare function GetCurrentTitle(): number;

/**
 * Gives information about the mirror bar. (Spirit release, exhaustion/fatigue, etc)
 * @param timerIndex timer index, from 1 to MIRRORTIMER_NUMTIMERS (3 as of 3.2). In general, the following correspondence holds:
 * 1 = Fatigue, 2 = Breath, 3 = Feign Death
 * @see https://wow.gamepedia.com/API_GetMirrorTimerInfo
 * @tupleReturn
 */
declare function GetMirrorTimerInfo(timerIndex: number): [string, number, number, number, WoWAPI.Flag, string];

/**
 * Returns the current value of a mirror timer (fatigue, breath, feign death etc).
 * @param timerIndex the first return value from GetMirrorTimerInfo, identifying the timer queried. Valid values include "EXHAUSTION", "BREATH"
 * and "FEIGNDEATH".
 * @returns current value of the timer. If the timer is not active, 0 is returned
 * @see https://wow.gamepedia.com/API_GetMirrorTimerProgress
 */
declare function GetMirrorTimerProgress(timerIndex: number): number;

/**
 * Returns an integer value of your held money
 * @returns The amount of money the player's character has, in copper
 * @see https://wow.gamepedia.com/API_GetMoney
 */
declare function GetMoney(): number;

/**
 * Gets the highest number in the Title index
 * @returns The last number in the TitleId index
 * @see https://wow.gamepedia.com/API_GetNumTitles
 */
declare function GetNumTitles(): number;

/**
 * Checks to see if the player has enabled PvP ("Permaflagged")
 * @returns 1 if the player has selected to be PvP flagged, 0 otherwise
 * @see https://wow.gamepedia.com/API_GetPVPDesired
 */
declare function GetPVPDesired(): WoWAPI.Flag;

/**
 * retrieve the ranged crit chance as a two-decimal float
 * @returns The players critical strike chance with the currently equipped range weapon as a floating point figure
 * @see https://wow.gamepedia.com/API_GetRangedCritChance
 */
declare function GetRangedCritChance(): number;

/**
 * Returns whether the player is in a rested (earning double XP for kills) or normal state
 * @see https://wow.gamepedia.com/API_GetRestState
 * @tupleReturn
 */
declare function GetRestState(): [WoWAPI.CharacterRestState, string, number];

/**
 * Gets the cooldown information about a Death Knight's Rune
 * @param runeId A number between 1 and 6 denoting which rune to be queried
 * @see https://wow.gamepedia.com/API_GetRuneCooldown
 * @tupleReturn
 */
declare function GetRuneCooldown(runeId: WoWAPI.CharacterDeathkightRuneType): [number, number, boolean];

/**
 * Gets the name of the title associated with a title index
 * @param titleId Title ID to return the name of
 * @since 2.0.1
 * @see https://wow.gamepedia.com/API_GetTitleName
 * @tupleReturn
 */
declare function GetTitleName(titleId: number): [string, boolean];

/**
 * Returns the number of XP gained from killing mobs until "player" goes from rest state to normal state
 * @returns Number (if player is "rested"), null (if player is "normal")
 * @see https://wow.gamepedia.com/API_GetXPExhaustion
 */
declare function GetXPExhaustion(): number | null;

/**
 * Checks whether you have full control over your character (i.e. you are not feared, etc)
 * @see https://wow.gamepedia.com/API_HasFullControl
 */
declare function HasFullControl(): boolean;

/**
 * Returns whether or not, and how, your character can self-resurrect
 * @returns the type of self-resurrect available to your character (known values are "Use Soulstone", "Reincarnate", and "Twisting Nether")
 * or nil if none are available
 * @see https://wow.gamepedia.com/API_HasSoulstone
 */
declare function HasSoulstone(): string | null;

/**
 * Checks if the character is currently falling
 * @returns true if the character is currently falling, false otherwise
 * @see https://wow.gamepedia.com/API_IsFalling
 */
declare function IsFalling(): boolean;

/**
 * Checks whether the player is currently flying
 * @returns true if the character is currently flying, false otherwise
 * @since 2.0.1
 * @see https://wow.gamepedia.com/API_IsFlying
 */
declare function IsFlying(): boolean;

/**
 * Checks if the character's current location is classified as being a flyable area
 * @returns true if the area is classified as flyable, false otherwise
 * @see https://wow.gamepedia.com/API_IsFlyableArea
 */
declare function IsFlyableArea(): boolean;

/**
 * Returns whether the player's character is currently indoors. Most mounts are not usable indoors
 * @returns true if the character is currently indoors, false otherwise
 * @see https://wow.gamepedia.com/API_IsIndoors
 */
declare function IsIndoors(): boolean;

/**
 * Checks to see if the player is mounted or not
 * @returns true if the character is currently mounted, false otherwise
 * @see https://wow.gamepedia.com/API_IsMounted
 */
declare function IsMounted(): boolean;

/**
 * Returns whether the player's character is currently outdoors
 * @returns true if the character is currently outdoors, false otherwise.
 * @see https://wow.gamepedia.com/API_IsOutdoors
 */
declare function IsOutdoors(): boolean;

/**
 * Returns whether the player's character is currently outside of the map
 * @returns 1 if the player's character is currently outside of the map, nil otherwise
 * @description Players may end up outside of a map's bounds (and therefore dead) both as a consequence of geometry errors and normal world
 * design: for instance, falling off the Eye of the Storm, or being dropped off the top of Icecrown Citadel by the Lich King's val'kyrs
 * @see https://wow.gamepedia.com/API_IsOutOfBounds
 */
declare function IsOutOfBounds(): boolean;

/**
 * Checks to see if Player is resting
 * @returns Whether the player is resting
 * @see https://wow.gamepedia.com/API_IsResting
 */
declare function IsResting(): boolean;

/**
 * Checks to see if Player is stealthed
 * @returns true if stealthed, otherwise false
 * @see  https://wow.gamepedia.com/API_IsStealthed
 */
declare function IsStealthed(): boolean;

/**
 * Returns whether the player character is swimming
 * @returns 1 if the player is swimming, nil otherwise.
 * @see https://wow.gamepedia.com/API_IsSwimming
 */
declare function IsSwimming(): boolean;

/**
 * Generates an error message saying you cannot do that while dead
 * @event UI_ERROR_MESSAGE
 * @see https://wow.gamepedia.com/API_NotWhileDeadError
 */
declare function NotWhileDeadError(): void;

/**
 * Resurrects when the player is standing near its corpse
 * @see https://wow.gamepedia.com/API_RetrieveCorpse
 */
declare function RetrieveCorpse(): void;

/**
 * Changes your character's displayed title
 * @param titleId ID of the title you want to set. The identifiers are global and therefore do not depend on which titles you have learned.
 * Invalid or unlearned values clear your title. See TitleId for a list
 * @requires HARDWARE_EVENT
 * @see https://wow.gamepedia.com/API_SetCurrentTitle
 */
declare function SetCurrentTitle(titleId: number): void;
