declare namespace WoWAPI {
    interface ArdenwealdGardenData {
        active: number;
        ready: number;
        remainingSeconds: number;
    }
}

declare namespace C_ArdenwealdGardening {

    /**
     * unknown behaviour
     * @see https://wow.gamepedia.com/API_C_ArdenwealdGardening.GetGardenData
     * @since 9.0.2 (2020-11-17)
     */
    function GetGardenData(): WoWAPI.ArdenwealdGardenData;

    /**
     * unknown behaviour
     * @see https://wow.gamepedia.com/API_C_ArdenwealdGardening.IsGardenAccessible
     * @since 9.0.2 (2020-11-17)
     */
    function IsGardenAccessible(): boolean;
}
