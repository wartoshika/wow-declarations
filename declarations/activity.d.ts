/** @noSelfInFile */

/// <reference path="global.d.ts" />

/**
 * Accept the challenge to a duel.
 *
 * @see https://wow.gamepedia.com/API_AcceptDuel
 */
declare function AcceptDuel(): void;

/**
 * Toggles auto-attacking of the player's current target
 *
 * @see https://wow.gamepedia.com/API_AttackTarget
 * @private PROTECTED
 */
declare function AttackTarget(): void;

/**
 * Forfeits the current duel, or declines an invitation to duel
 *
 * @see https://wow.gamepedia.com/API_CancelDuel
 */
declare function CancelDuel(): void;

/**
 * Cancels the logout timer (from camping or quitting).
 *
 * @see https://wow.gamepedia.com/API_CancelLogout
 * @private PROTECTED
 */
declare function CancelLogout(): void;

/**
 * Rejects a summon request
 *
 * @see https://wow.gamepedia.com/API_CancelSummon
 */
declare function CancelSummon(): void;

/**
 * Accepts a summon request (only works during the two minutes the summon is available).
 *
 * @see https://wow.gamepedia.com/API_ConfirmSummon
 */
declare function ConfirmSummon(): void;

/**
 * The player stops descending (while flying or swimming).
 *
 * @see https://wow.gamepedia.com/API_DescendStop
 * @private PROTECTED
 */
declare function DescendStop(): void;

/**
 * Dismounts the player if the player was mounted
 *
 * @see https://wow.gamepedia.com/API_Dismount
 * @since 2.0.3
 */
declare function Dismount(): void;

/**
 * Instantly quits the game, bypassing the usual 20 seconds countdown
 *
 * @see https://wow.gamepedia.com/API_ForceQuit
 * @private PROTECTED
 */
declare function ForceQuit(): void;

/**
 * Returns which type of weapon the player currently has unsheathed, if any
 *
 * @returns 1=None, 2=Melee, 3=Ranged
 * @see https://wow.gamepedia.com/API_GetSheathState
 * @since 4.3.0
 */
declare function GetSheathState(): 1 | 2 | 3;

/**
 * Returns the amount of time left on your PVP flag
 *
 * @returns Amount of time (in milliseconds) until your PVP flag wears off.
 * @see https://wow.gamepedia.com/API_GetPVPTimer
 */
declare function GetPVPTimer(): number;

/**
 * Returns the name of the area you're being summoned to
 *
 * @see https://wow.gamepedia.com/API_GetSummonConfirmAreaName
 */
declare function GetSummonConfirmAreaName(): WoWAPI.Unknown;

/**
 * Get the name of the unit which initiated the players summon
 *
 * @returns Name of the player summoning you, or nil if no summon is currently pending
 * @see https://wow.gamepedia.com/API_GetSummonConfirmSummoner
 */
declare function GetSummonConfirmSummoner(): string;

/**
 * Returns the amount of time left before the pending summon expires
 *
 * @see https://wow.gamepedia.com/API_GetSummonConfirmTimeLeft
 */
declare function GetSummonConfirmTimeLeft(): WoWAPI.Unknown;

/**
 * Logs the player character out of the game.
 *
 * @see https://wow.gamepedia.com/API_Logout
 * @event PLAYER_CAMPING
 * @private PROTECTED
 */
declare function Logout(): void;

/**
 * Quits the game.
 *
 * @see https://wow.gamepedia.com/API_Quit
 * @event PLAYER_QUITING
 * @private PROTECTED
 */
declare function Quit(): void;

/**
 * Performs a random roll between two numbers
 *
 * @param low lowest number (default 1)
 * @param high highest number (default 100)
 * @description Yield: <Your name> rolls. <number> (1-10)
 * @see https://wow.gamepedia.com/API_RandomRoll
 */
declare function RandomRoll(low?: number, high?: number): void;

/**
 * Used to toggle PVP on or Off
 *
 * @param flag 0 or 1; 0 Toggles PVP off, 1 Toggles PVP on.
 * @see https://wow.gamepedia.com/API_SetPVP
 */
declare function SetPVP(flag: WoWAPI.Flag | null): void;

/**
 * The player sits, stands, or begins to descend (while swimming or flying)
 *
 * @see https://wow.gamepedia.com/API_SitStandOrDescendStart
 * @since 2.1.0
 * @private PROTECTED
 */
declare function SitStandOrDescendStart(): void;

/**
 * Invites the specified player to a duel
 *
 * @param playerName The name of the player you wish to duel
 * @see https://wow.gamepedia.com/API_StartDuel
 */
declare function StartDuel(playerName: string): void;

/**
 * Toggles PvP setting on or off
 *
 * @see https://wow.gamepedia.com/API_TogglePVP
 */
declare function TogglePVP(): void;

/**
 * Toggles sheathed or unsheathed weapons
 *
 * @see https://wow.gamepedia.com/API_ToggleSheath
 * @event UNIT_MODEL_CHANGED
 */
declare function ToggleSheath(): void;

/**
 * Use an active soulstone to resurrect yourself after death. Also works for Shamans with Reincarnation available
 *
 * @see https://wow.gamepedia.com/API_UseSoulstone
 */
declare function UseSoulstone(): void;
