/** @noSelfInFile */

/// <reference path="global.d.ts" />
/// <reference path="enums.d.ts" />

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
 * @see https://wow.gamepedia.com/API_IsTrialAccount
 */
declare function IsTrialAccount(): boolean;

/**
 * Returns the cap on trial character level, money and profession skill for Starter Edition accounts
 * @returns
 * 1. rLevel number - character level cap, currently 20
 * 2. rMoney number - max amount of money in copper, currently 10000000
 * 3. profCap number - profession level cap, currently 0
 * @see https://wow.gamepedia.com/API_GetRestrictedAccountData
 */
declare function GetRestrictedAccountData(): [number, number, number];

/**
 * unknown
 */
declare function GetSecondsUntilParentalControlsKick(): WoWAPI.Unknown;

/**
 * Returns if the account has been secured with Blizzard Mobile Authenticator
 * @returns accountSecured
 * @since 7.3.5 (2018-01-16)
 */
declare function IsAccountSecured(): boolean;

/**
 * Returns if the account has trial account restrictions
 */
declare function IsRestrictedAccount(): WoWAPI.Unknown;

/**
 * unknown behaviour
 * @since 6.1.0 (2015-02-24)
 * @see https://wow.gamepedia.com/API_IsVeteranTrialAccount
 */
declare function IsVeteranTrialAccount(): boolean;

/**
 * Indicates the player's account has reached a daily curfew of 90 minutes, imposed on children and any non-confirmed adults in China to comply with local law
 * @returns 1 if the account is "unhealthy", nil if not. See details below for clarification. Always returns nil outside China.
 * @see https://wow.gamepedia.com/API_NoPlayTime
 */
declare function NoPlayTime(): WoWAPI.Flag;

/**
 * unknown behaviour
 * @since 9.0.1 (2020-10-13)
 */
declare function SendSubscriptionInterstitialResponse(): Enum.SubscriptionInterstitialResponseType;
