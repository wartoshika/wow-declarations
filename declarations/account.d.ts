/** @noSelfInFile */

/// <reference path="global.d.ts" />

/**
 * Returns the highest expansion id the current account has been flagged for.
 */
declare function GetAccountExpansionLevel(): EXPANSION_CLASSIC | EXPANSION_BURNING_CRUSADE | EXPANSION_WRATH_OF_THE_LICH_KING | EXPANSION_CATACLYSM |
    EXPANSION_MISTS_OF_PANDARIA | EXPANSION_WARLORDS_OF_DRAENOR | EXPANSION_LEGION | EXPANSION_BATTLE_FOR_AZEROTH;

/**
 * Returns the time spent logged in in current billing unit. This function is to limit players from playing the game for too long
 * @return Amount of time left in seconds to play as rested. See details below for clarification. Returns nil for EU and US accounts
 */
declare function GetBillingTimeRested(): number;

/**
 * Returns whether the player is using a trial (free-to-play) account
 */
declare function IsTrialAccount(): boolean;
