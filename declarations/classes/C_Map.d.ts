declare namespace C_Map {

    /**
     * Needs summary
     * @see https://wow.gamepedia.com/API_C_Map.CloseWorldMapInteraction
     * @since 8.3.0 (2020-01-14)
     */
    function CloseWorldMapInteraction(): void;

    /**
     * Returns a map subzone name
     * @param areaId areaTableID.
     * @returns name
     * @see https://wow.gamepedia.com/API_C_Map.GetAreaInfo
     * @see https://wow.gamepedia.com/AreaTableID
     * @since 8.0.1 (2018-07-17)
     */
    function GetAreaInfo(areaId: number): string;

    /**
     * Returns the current UI map for the given unit. Only works for the player and party members
     * @param unitToken unitId
     * @returns uiMapID Returns the "lowest" UiMapID the unit is on. For example, if a unit is in
     * a microdungeon it will return that instead of the zone or continent map
     * @see https://wow.gamepedia.com/API_C_Map.GetBestMapForUnit
     * @since 8.0.1 (2018-07-17)
     */
    function GetBestMapForUnit(unitToken: WoWAPI.UnitId): number | null;

    /**
     * Returns the maps for a bounty
     * @param bountySetID from BountySet.db2
     * @returns mapIDs
     * @see https://wow.gamepedia.com/API_C_Map.GetBountySetMaps
     * @see https://wow.tools/dbc/?dbc=bountyset
     * @see https://wow.gamepedia.com/UiMapID
     * @since 8.1.0 (2018-12-11)
     */
    function GetBountySetMaps(bountySetID: number): number[];

    /**
     * Returns the world map id
     * @see https://wow.gamepedia.com/API_C_Map.GetFallbackWorldMapID
     * @since 8.0.1 (2018-07-17)
     */
    function GetFallbackWorldMapID(): number;

    /**
     * Returns the background atlas for a map
     * @see https://wow.gamepedia.com/API_C_Map.GetMapArtBackgroundAtlas
     * @since 8.0.1 (2018-07-17)
     */
    function GetFallbackWorldMapID(uiMapID: number): WoWAPI.AtlasID;

    /**
     * Returns the position for the "Click to Zoom In" hint text on flight maps
     * @see https://wow.gamepedia.com/API_C_Map.GetMapArtHelpTextPosition
     * @since 8.0.1 (2018-07-17)
     */
    function GetMapArtHelpTextPosition(uiMapID: number): Enum.MapCanvasPosition;

    /**
     * Returns the art for a (phased) map
     * @see https://wow.gamepedia.com/API_C_Map.GetMapArtID
     * @since 8.0.1 (2018-07-17)
     */
    function GetMapArtID(uiMapID: number): number;

    // next todo: GetMapArtLayers
}
