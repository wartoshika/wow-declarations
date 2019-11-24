/** @noSelfInFile */

declare namespace WoWAPI {
    type BattlefieldStatusType = "queued" | "confirm" | "active" | "none" | "error";
    type BattlefieldTeamSize = 0 | 2 | 3 | 5;
    type BattlefieldType = "ARENA" | "BATTLEGROUND" | "WARGAME";
    type BattlefieldWinType = null | 0 | 1 | 255;
    type BattlefieldUiStateType = 0 | 1 | 2;
    type BattlefieldFaction = null | undefined | void | 0 | 1;
}

/**
 * Acccept the area Spirit Healer's resurrection in battlegrounds
 * @see https://wow.gamepedia.com/API_AcceptAreaSpiritHeal
 */
declare function AcceptAreaSpiritHeal(): void;

/**
 * Confirms entry into a Battleground you are queued for that is ready
 * @param index The battlefield in queue to enter
 * @param accept Whether or not to accept entry to the battlefield
 * @protected HARDWARE_EVENT
 * @see https://wow.gamepedia.com/API_AcceptBattlefieldPort
 */
declare function AcceptBattlefieldPort(index: number, accept: boolean): void;

/**
 * Cancels the area Spirit Healer's resurrection in battlegrounds
 * @see https://wow.gamepedia.com/API_CancelAreaSpiritHeal
 */
declare function CancelAreaSpiritHeal(): void;

/**
 * Returns, whether the player can join a battlefield as group or not
 * @return returns true, if the player can join the battlefield as group
 * @see https://wow.gamepedia.com/API_CanJoinBattlefieldAsGroup
 */
declare function CanJoinBattlefieldAsGroup(): boolean;

/**
 * Gets the time left until the next resurrection cast.
 * @return Seconds until the Spirit Guide casts its next Area Resurrection. Returns 0 if player is not dead
 * @see https://wow.gamepedia.com/API_GetAreaSpiritHealerTime
 */
declare function GetAreaSpiritHealerTime(): number;

/**
 * Get estimated wait time for a Battlefield's availability
 * @returns Milliseconds until Battlefield opening is available (estimated)
 * @see https://wow.gamepedia.com/API_GetBattlefieldEstimatedWaitTime
 */
declare function GetBattlefieldEstimatedWaitTime(): number;

/**
 * Used to position the flag icon on the world map and the battlefield minimap
 * @param index Index to get the flag position from
 * @see https://wow.gamepedia.com/API_GetBattlefieldFlagPosition
 * @tupleReturn
 */
declare function GetBattlefieldFlagPosition(index: number): [number, number, string];

/**
 * Get shutdown timer for the battlefield instance
 * @returns the number of milliseconds before the Battlefield will close after a battle is finished. This is 0 before the battle is finished
 * @see https://wow.gamepedia.com/API_GetBattlefieldInstanceExpiration
 */
declare function GetBattlefieldInstanceExpiration(): number;

/**
 * Returns the time passed since the battleground started
 * @returns miliseconds passed since the battle started
 * @see https://wow.gamepedia.com/API_GetBattlefieldInstanceRunTime
 */
declare function GetBattlefieldInstanceRunTime(): number;

/**
 * Returns the remaining seconds of a battlefield port
 * @param index Index of queue to get the expiration from
 * @returns Remaining time of battlefield port in seconds
 * @see https://wow.gamepedia.com/API_GetBattlefieldPortExpiration
 */
declare function GetBattlefieldPortExpiration(index: number): number;

/**
 * Returns information about a player's score in battlegrounds
 * @param playerIndex The characters index in battlegrounds, going from 1 to GetNumBattlefieldScores().
 * @see https://wow.gamepedia.com/API_GetBattlefieldScore
 * @tupleReturn
 */
declare function GetBattlefieldScore(playerIndex: number): [string, number, number, number, number, number, string, string, string, number, number, string];

/**
 * Get data from the custom battlefield scoreboard columns
 * @param playerIndex Player you want to grab the data for
 * @param columnIndex Column you want to grab the data from
 * @description Used to retrieve data from battleground specific scoreboard columns like flag captures in Warsong Gulch.
 * If you want to make sure you have the most recent data you will have to call RequestBattlefieldScoreData and then wait for UPDATE_BATTLEFIELD_SCORE
 * @see https://wow.gamepedia.com/API_GetBattlefieldStatData
 */
declare function GetBattlefieldStatData(playerIndex: number, columnIndex: number): WoWAPI.Unknown;

/**
 * Get list of battleground specific columns on the scoreboard
 * @param columnIndex Column to get data for
 * @see https://wow.gamepedia.com/API_GetBattlefieldStatInfo
 * @tupleReturn
 */
declare function GetBattlefieldStatInfo(columnIndex: number): [string, string, string];

/**
 * Get the status of the arena, battleground, or wargame that the player is either queued for or inside
 * @param battlefieldIndex Index of the battlefield you wish to view, in the range of 1 to GetMaxBattlefieldID()
 * @see https://wow.gamepedia.com/API_GetBattlefieldStatus
 * @tupleReturn
 */
// tslint:disable-next-line max-line-length
declare function GetBattlefieldStatus(battlefieldIndex: number): [WoWAPI.BattlefieldStatusType, string, WoWAPI.BattlefieldTeamSize, number, WoWAPI.Unknown, WoWAPI.BattlefieldType, WoWAPI.Unknown, WoWAPI.UnitRoleType];

/**
 * Get time this player's been in the queue in milliseconds
 * @param battlegroundQueuePosition The queue position
 * @see https://wow.gamepedia.com/API_GetBattlefieldTimeWaited
 */
declare function GetBattlefieldTimeWaited(battlegroundQueuePosition: number): number;

/**
 * Get the winner of the battlefield
 * @returns Faction/team that has won the battlefield. Results are: nil if nobody has won, 0 for Horde, 1 for Alliance and 255
 * for a draw in a battleground, 0 for Green Team and 1 for Yellow in an arena
 * @see https://wow.gamepedia.com/API_GetBattlefieldWinner
 */
declare function GetBattlefieldWinner(): WoWAPI.BattlefieldWinType;

/**
 * Returns information about a battleground type
 * @param battlegroundTypeIndex battleground type index, 1 to GetNumBattlegroundTypes().
 * @see https://wow.gamepedia.com/API_GetBattlegroundInfo
 * @tupleReturn
 */
declare function GetBattlegroundInfo(battlegroundTypeIndex: number): [string, WoWAPI.Flag, WoWAPI.Flag, WoWAPI.Flag, number, string];

/**
 * Returns the max number of battlefields you can queue for
 * @returns Max number of Battlefields
 * @see https://wow.gamepedia.com/API_GetMaxBattlefieldID
 * @since 4.3.0
 */
declare function GetMaxBattlefieldID(): number;

/**
 * Appears to return the number of scores in the battleground/field scoreboard
 * @see https://wow.gamepedia.com/API_GetNumBattlefieldScores
 */
declare function GetNumBattlefieldScores(): WoWAPI.Unknown;

/**
 * Appears to return the number of columns in the battleground/field scoreboard, other than the common ones (Killing Blows, Kills, Deaths, Bonus Honour):
 * @returns Number of columns available for the battleground (2 for Warsong Gulch and Arathi Basin, 7 for Alterac Valley)
 * @see https://wow.gamepedia.com/API_GetNumBattlefieldStats
 */
declare function GetNumBattlefieldStats(): number;

/**
 * Returns the number of world state UI elements. These are displayed in the WorldStateFrame at the top center of the screen
 * @see https://wow.gamepedia.com/API_GetNumWorldStateUI
 */
declare function GetNumWorldStateUI(): number;

/**
 * Get score and flag status within a battlefield
 * @param worldUiStateIndex between 1 and GetNumWorldStateUI().
 * @see https://wow.gamepedia.com/API_GetWorldStateUIInfo
 * @tupleReturn
 */
// tslint:disable-next-line max-line-length
declare function GetWorldStateUIInfo(worldUiStateIndex: number): [number, WoWAPI.BattlefieldUiStateType, boolean, string, string, string, string, string, string, number, number, number];

/**
 * Queues the player, or the player's group, for a battlefield instance
 * @param battlefieldIndex Which battlefield instance to queue for (0 for first available), or which arena bracket to queue for
 * @param asGroup If true-equivalent, the player's group is queued for the battlefield, otherwise, only the player is queued
 * @param isRated If true-equivalent, and queueing for an arena bracket, the group is queued for a rated match as opposed to a skirmish
 * @deprecated
 * @protected Protected functions can only be called from a secure execution path.
 */
declare function JoinBattlefield(battlefieldIndex: number, asGroup?: boolean, isRated?: boolean): void;

/**
 * Leaves the current battlefield
 * @description Leaves the current battlefield the player is inside, pre-2.0.1 this would only leave the battlefield if it had been won or
 * lost this was changed in 2.0.1 to exit you from the battlefield regardless if it was finished or not and will give you deserter.
 * @see https://wow.gamepedia.com/API_LeaveBattlefield
 */
declare function LeaveBattlefield(): void;

/**
 * Requests the lastest battlefield score data from the server
 * @event UPDATE_BATTLEFIELD_SCORE
 * @see https://wow.gamepedia.com/API_RequestBattlefieldScoreData
 */
declare function RequestBattlefieldScoreData(): void;

/**
 * Requests information about the available instances of a particular battleground
 * @param instanceIndex Index of the battleground type to request instance information for; valid indices start from 1 and go up to GetNumBattlegroundTypes().
 * @event PVPQUEUE_ANYWHERE_SHOW
 * @description Calling JoinBattlefield after calling this function, but before PVPQUEUE_ANYWHERE_SHOW, will fail silently; you must wait for
 * the instance list to become available before you can queue for an instance.
 * @see https://wow.gamepedia.com/API_RequestBattlegroundInstanceInfo
 */
declare function RequestBattlegroundInstanceInfo(instanceIndex: number): void;

/**
 * Set the faction to show on the battlefield scoreboard
 * @param faction nil = All, 0 = Horde, 1 = Alliance
 * @see https://wow.gamepedia.com/API_SetBattlefieldScoreFaction
 */
declare function SetBattlefieldScoreFaction(faction?: WoWAPI.BattlefieldFaction): void;
