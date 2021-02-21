declare namespace C_RaidLocks {

    /**
     * Needs summary
     * @param mapId
     * @param encounterId
     * @param difficultyId
     * @see https://wow.gamepedia.com/API_C_RaidLocks.IsEncounterComplete
     * @since 8.2.0 (2019-06-25)
     */
    function IsEncounterComplete(mapId: number, encounterId: number, difficultyId?: number): boolean;
}
