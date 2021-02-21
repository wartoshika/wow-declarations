declare namespace C_AchivementInfo {

    /**
     * Returns any reward item for an achievement
     * @param achivementId
     * @returns rewardItemID
     * @see https://wow.gamepedia.com/API_C_AchievementInfo.GetRewardItemID
     * @since 8.1.0 (2018-12-11)
     */
    function GetRewardItemID(achivementId: number): number | null;

    /**
     * Returns the next achievement in a series
     * @param achivementId
     * @returns supercedingAchievements Only returns the next ID in a series even though it's in a table
     * @see https://wow.gamepedia.com/API_C_AchievementInfo.GetSupercedingAchievements
     * @since 8.1.0 (2018-12-11)
     */
    function GetSupercedingAchievements(achivementId: number): number[];

    /**
     * Needs summary
     * @param achivementId
     * @returns isValidAchievement
     * @see https://wow.gamepedia.com/API_C_AchievementInfo.IsValidAchievement
     * @since 9.0.1 (2020-10-13)
     */
    function IsValidAchievement(achivementId: number): boolean;

    /**
     * Sets a portrait texture for the unit being achievement compared
     * @param textureObject
     * @see https://wow.gamepedia.com/API_C_AchievementInfo.IsValidAchievement
     * @since 8.0.1 (2018-07-17)
     */
    function IsValidAchievement(textureObject: WoWAPI.Texture): void;
}
