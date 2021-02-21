/**
 * Clears the encounter journal search results
 * @see https://wow.gamepedia.com/API_EJ_ClearSearch
 * @since 4.2.0 (2011-06-28)
 */
declare function EJ_ClearSearch(): void;

/**
 * Ends any active encounter journal search and clears any results from EJ_GetSearchResult
 * @see https://wow.gamepedia.com/API_EJ_EndSearch
 * @since 7.0.3 (2016-07-19)
 */
declare function EJ_EndSearch(): void;

/**
 * Returns the currently selected content tuning ID for BFA instances per EJ_SelectInstance.
 * Used in the FrameXML for GameTooltip:SetHyperlink when hovering over inline spell hyperlinks in the overview tab
 * @see https://wow.gamepedia.com/API_EJ_GetContentTuningID
 * @since 8.0.1 (2018-07-17)
 */
declare function EJ_GetContentTuningID(): number;

/**
 * Returns encounter boss info
 * @param index creature index, up to nine for encounters with multiple bosses
 * @param encounterId if omitted this will default to the currently viewed encounter
 * @returns id, name, description, displayInfo, iconImage, uiModelSceneID
 * @see https://wow.gamepedia.com/API_EJ_GetCreatureInfo
 * @since 4.2.0 (2011-06-28)
 */
declare function EJ_GetCreatureInfo(index: number, encounterId?: number): [number, string, string, number, number, number];

/**
 * Returns the currently active encounter journal tier index
 * @returns index the current tier index
 * @see https://wow.gamepedia.com/API_EJ_GetCurrentTier
 * @since 5.0.4 (2012-08-28)
 */
declare function EJ_GetCurrentTier(): number;

/**
 * Returns the currently viewed difficulty in the journal
 * @see https://wow.gamepedia.com/API_EJ_GetDifficulty
 * @since 4.3.0 (2011-11-29)
 */
declare function EJ_GetDifficulty(): number;

/**
 * Returns encounter info from the journal
 * @param encounterID
 * @returns name, description, bossId, rootSectionId, link, journalInstanceId, dungeonEncounterId, instanceId
 * @see https://wow.gamepedia.com/API_EJ_GetEncounterInfo
 * @since 4.2.0 (2011-06-28)
 */
declare function EJ_GetEncounterInfo(encounterID: number): [string, string, number, number, WoWAPI.Hyperlink, number, number, number];

/**
 * Returns encounter info from the journal
 * @param index
 * @param instanceId if omitted, this will default to the currently selected instance per EJ_SelectInstance
 * @returns name, description, bossId, rootSectionId, link, journalInstanceId, dungeonEncounterId, instanceId
 * @see https://wow.gamepedia.com/API_EJ_GetEncounterInfoByIndex
 * @since 4.2.0 (2011-06-28)
 */
declare function EJ_GetEncounterInfoByIndex(index: number, instanceId?: number): [string, string, number, number, string, number, number, number];

// next todo: EJ_GetInstanceByIndex
