/** @noSelfInFile */

/// <reference path="global.d.ts" />

declare namespace WoWAPI {
    type ARENA_TEAM_GREEN = 0;
    type ARENA_TEAM_GOLD = 1;
    type ARENA_TEAM = ARENA_TEAM_GREEN | ARENA_TEAM_GOLD;

    type ARENA_ID_2VS2 = 4;
    type ARENA_ID_3VS3 = 5;
    type ARENA_ID = ARENA_ID_2VS2 | ARENA_ID_3VS3;
}

/**
 * Returns information regarding an Arena team
 *
 * @param index Which team to get information on, 0 is Green team and 1 is Gold Team
 * @returns teamName, oldTeamRating, newTeamRating, teamRating
 * @see https://wow.gamepedia.com/API_GetBattlefieldTeamInfo
 * @tupleReturn
 */
declare function GetBattlefieldTeamInfo(index: WoWAPI.ARENA_TEAM): [string, number, number, number];

/**
 * Returns the current arena season. Returns 0 when there is no active season
 *
 * @returns Current arena season
 * @see https://wow.gamepedia.com/API_GetCurrentArenaSeason
 */
declare function GetCurrentArenaSeason(): number;

/**
 * Gets the previous Arena season
 *
 * @see https://wow.gamepedia.com/API_GetPreviousArenaSeason
 */
declare function GetPreviousArenaSeason(): WoWAPI.Unknown;

/**
 * Used for checking if the player is inside an arena or if it's a rated match. If you are in waiting room and/or countdown is going on, it will return false
 *
 * @returns isArena, isRegistered
 * @see https://wow.gamepedia.com/API_IsActiveBattlefieldArena
 * @tupleReturn
 */
declare function IsActiveBattlefieldArena(): [boolean, boolean];

/**
 * Returns a value based on whether the player is the arena team captain
 *
 * @param index The team index
 * @see https://wow.gamepedia.com/API_IsArenaTeamCaptain
 */
declare function IsArenaTeamCaptain(index: WoWAPI.ARENA_TEAM): boolean;

/**
 * Returns true if you are a member of an arena team.
 *
 * @see https://wow.gamepedia.com/API_IsInArenaTeam
 */
declare function IsInArenaTeam(): boolean;

/**
 * Queue for a arena either solo or as a group
 *
 * @param arenaId The arena id
 * @param joinAsGroup Unknown
 * @see https://wow.gamepedia.com/API_JoinSkirmish
 */
declare function JoinSkirmish(arenaId: WoWAPI.ARENA_ID, joinAsGroup?: boolean): void;
