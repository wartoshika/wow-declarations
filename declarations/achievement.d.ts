/** @noSelfInFile */

/// <reference path="global.d.ts" />
/// <reference path="unit.d.ts" />

declare namespace WoWAPI {
    /**
     * Achievement links are returned by GetAchievementLink().
     * @example |cffffff00|Hachievement:2186:00000000002FDDE9:1:12:19:8:4294967295:4294967295:4294967295:4294967295|h[The Immortal]|h|r
     */
    type AchievementLink = Hyperlink;
}

/**
 * Marks an achievement for tracking in the WatchFrame.
 *
 * @param achivementId ID of the achievement to add to tracking
 * @event TRACKED_ACHIEVEMENT_UPDATE
 */
declare function AddTrackedAchievement(achivementId: number): void;

/**
 * Returns whether account-wide achievements are hidden from other players
 *
 * @returns true if other players cannot view your account-level achievements; false otherwise
 */
declare function AreAccountAchievementsHidden(): boolean;

/**
 * Returns if the AchievementUI can be displayed
 *
 * @returns true if the achievement data is available (and hence the AchievementUI can be displayed), false otherwise
 */
declare function CanShowAchievementUI(): boolean;

/**
 * Returns the category number the requested achievement belongs to
 *
 * @param achivementId ID of the achievement to retrieve information for
 * @returns ID of the achievement's category.
 */
declare function GetAchievementCategory(achivementId: number): number;

/**
 * Returns information about the comparison unit's achievements
 *
 * @param achivementId ID of the achievement to retrieve information for
 * @see https://wow.gamepedia.com/API_GetAchievementComparisonInfo
 * @tupleReturn
 */
declare function GetAchievementComparisonInfo(achivementId: number): [boolean, number, number, number];

/**
 * Returns information about the given Achievement's specified criteria
 *
 * @param achivementId Achievement ID the queried criteria belongs to
 * @param criteriaIndex Index of the criteria to query, ascending from 1 up to GetAchievementNumCriteria(achievementID).
 * @see https://wow.gamepedia.com/API_GetAchievementCriteriaInfo
 * @tupleReturn
 */
// tslint:disable-next-line max-line-length
declare function GetAchievementCriteriaInfo(achivementId: number, criteriaIndex: number): [string, number, boolean, number, number, string, number, number, string, number, boolean];

/**
 * Returns information about the given Achievement's specified criteria
 *
 * @param achivementId Achievement ID the queried criteria belongs to
 * @param criteriaId Index of the criteria to query, ascending from 1 up to GetAchievementNumCriteria(achievementID).
 * @see https://wow.gamepedia.com/API_GetAchievementCriteriaInfoByID
 */
// tslint:disable-next-line max-line-length
declare function GetAchievementCriteriaInfoByID(achivementId: number, criteriaId: number): [string, number, boolean, number, string, number, number, string, number, boolean];

/**
 * Returns information about the given Achievement
 *
 * @param achivementId ID of the achievement to retrieve information for
 * @param index An offset into the achievement category, between 1 and GetCategoryNumAchievements(categoryID)
 * @see https://wow.gamepedia.com/API_GetAchievementInfo
 * @tupleReturn
 */
// tslint:disable-next-line max-line-length
declare function GetAchievementInfo(achivementId: number, index: number): [number, string, number, boolean, number, number, number, string, number, number, string, boolean, boolean, string];
// tslint:disable-next-line max-line-length
declare function GetAchievementInfo(categoryId: number, index: number): [number, string, number, boolean, number, number, number, string, number, number, string, boolean, boolean, string];

/**
 * Returns a achievementLink for the specified Achievement
 *
 * @param achivementId The ID of the Achievement
 * @see https://wow.gamepedia.com/API_GetAchievementLink
 */
declare function GetAchievementLink(achivementId: number): WoWAPI.AchievementLink;

/**
 * Returns the number of criteria for the given Achievement
 *
 * @param achivementId The ID of the Achievement
 * @see https://wow.gamepedia.com/API_GetAchievementNumCriteria
 */
declare function GetAchievementNumCriteria(achivementId: number): number;

/**
 * Returns information about the given Category
 *
 * @param categoryId The ID of the category to get the info for.
 * @see https://wow.gamepedia.com/API_GetCategoryInfo
 * @tupleReturn
 */
declare function GetCategoryInfo(categoryId: number): [string, number, number];

/**
 * Returns the list of Achievement categories
 *
 * @returns array containing achievement category IDs, in no particular order
 * @see https://wow.gamepedia.com/API_GetCategoryList
 */
declare function GetCategoryList(): number[];

/**
 * Returns the total, completed and incompleted number of achievements in a specific category
 *
 * @param categoryId Achievement category ID, as returned by GetCategoryList.
 * @param includeAll If true-equivalent, include all achievements, otherwise, only includes those currently visible
 * @see https://wow.gamepedia.com/API_GetCategoryNumAchievements
 * @tupleReturn
 */
declare function GetCategoryNumAchievements(categoryId: number, includeAll?: boolean): [number, number, number];

/**
 * Return the value of the requested Statistic from the comparison unit
 *
 * @param achivementId The ID of the Achievement
 * @returns The value of the requested Statistic from the comparison unit
 * @see https://wow.gamepedia.com/API_GetComparisonStatistic
 */
declare function GetComparisonStatistic(achivementId: number): string;

/**
 * Returns the ID of a filtered achievement, resulting from a call to SetAchievementSearchString.
 *
 * @param index The index of the filtered achievement to return the ID of, between 1 and GetNumFilteredAchievements().
 * @returns The ID of an achievement.
 * @see https://wow.gamepedia.com/API_GetFilteredAchievementID
 * @since 7.0.3
 */
declare function GetFilteredAchievementID(index: number): number;

/**
 * Return the next achievement in a chain
 *
 * @param achivementId The ID of the Achievement
 * @returns The ID of the next Achievement in chain or nil
 * @see https://wow.gamepedia.com/API_GetNextAchievement
 */
declare function GetNextAchievement(achivementId: number): number | null;

/**
 * Returns the number of completed achievements for the comparison player
 *
 * @param achivementId ID of the achievement to retrieve information for
 * @see https://wow.gamepedia.com/API_GetNumComparisonCompletedAchievements
 */
declare function GetNumComparisonCompletedAchievements(achivementId: number): [number, number];

/**
 * Return the total number of Achievements, and number completed
 *
 * @see https://wow.gamepedia.com/API_GetNumCompletedAchievements
 * @tupleReturn
 */
declare function GetNumCompletedAchievements(): [number, number];

/**
 * Returns the number of achievements that match the search string specified calling SetAchievementSearchString
 *
 * @returns The number of achievements that match the search string
 * @see https://wow.gamepedia.com/API_GetNumFilteredAchievements
 * @since 7.0.3
 */
declare function GetNumFilteredAchievements(): number;

/**
 * Return the previous achievement in a chain
 *
 * @param achivementId The ID of the Achievement
 * @returns The ID of the previous Achievement in chain or nil
 * @see https://wow.gamepedia.com/API_GetPreviousAchievement
 */
declare function GetPreviousAchievement(achivementId: number): number | null;

/**
 * Return the value of the requested Statistic
 *
 * @param achievementId The ID of the Achievement
 * @returns The value of the requested Statistic
 * @see https://wow.gamepedia.com/API_GetStatistic
 */
declare function GetStatistic(achievementId: number): WoWAPI.UnknownStringKeyTable;

/**
 * Returns a table of achievement categories
 *
 * @returns list of all the categories
 * @see https://wow.gamepedia.com/API_GetStatisticsCategoryList
 */
declare function GetStatisticsCategoryList(): WoWAPI.UnknownNumberKeyTable;

/**
 * Returns the total number of Achievement Points earned
 *
 * @returns Total points earned
 * @see https://wow.gamepedia.com/API_GetTotalAchievementPoints
 */
declare function GetTotalAchievementPoints(): number;

/**
 * Returns a list of (up to 10) currently tracked achievements
 *
 * @returns achievementId(s) of achievements you are currently tracking
 * @see https://wow.gamepedia.com/API_GetTrackedAchievements
 * @since 3.0.2
 * @tupleReturn
 */
declare function GetTrackedAchievements(): [number, number, number, number, number, number, number, number, number, number];

/**
 * Returns the total number of tracked achievements
 *
 * @returns number of achievements you are currently tracking, up to 10.
 * @see https://wow.gamepedia.com/API_GetNumTrackedAchievements
 * @since 3.1.0
 */
declare function GetNumTrackedAchievements(): number;

/**
 * Indicates whether the specified achievement is eligible to be completed
 *
 * @param achievementId ID of the achievement to query
 * @see https://wow.gamepedia.com/API_IsAchievementEligible
 * @since 4.0.1
 */
declare function IsAchievementEligible(achievementId: number): WoWAPI.Unknown;

/**
 * Un-marks an achievement for tracking in the WatchFrame
 *
 * @param achievementId ID of the achievement to add to tracking
 * @see https://wow.gamepedia.com/API_RemoveTrackedAchievement
 * @event TRACKED_ACHIEVEMENT_UPDATE
 * @since 3.1.0
 */
declare function RemoveTrackedAchievement(achievementId: number): void;

/**
 * Sets the unit to be compared to.
 *
 * @param unit unit to query, e.g. "target"
 * @returns Returns true/false depending on whether the unit is valid
 * @see https://wow.gamepedia.com/API_SetAchievementComparisonUnit
 * @event INSPECT_ACHIEVEMENT_READY
 */
declare function SetAchievementComparisonUnit(unit: WoWAPI.UnitId): boolean;

/**
 * Starts a search for achievements containing the specified text
 *
 * @param searchText Text to search for in the achievements
 * @returns true if the search is finished, false otherwise
 * @event ACHIEVEMENT_SEARCH_UPDATED
 * @see https://wow.gamepedia.com/API_SetAchievementSearchString
 * @since 7.0.3
 */
declare function SetAchievementSearchString(searchText: string): boolean;

/**
 * Sets whether account-wide achievements are shown to other players
 *
 * @param show true to allow other players to view all achievements your account has achieved, false to only allow viewing achievements
 * for individual characters
 * @see https://wow.gamepedia.com/API_ShowAccountAchievements
 * @since 5.0.4
 */
declare function ShowAccountAchievements(show: boolean): void;
