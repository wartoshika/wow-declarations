/**
 * @see https://wow.gamepedia.com/Adventure_Guide
 */
declare namespace C_AdventureJournal {

    /**
     * @see https://wow.gamepedia.com/API_C_AdventureJournal.ActivateEntry
     * @since 6.2.0
     */
    function ActivateEntry(index: WoWAPI.Unknown): WoWAPI.Unknown;

    /**
     * @see https://wow.gamepedia.com/API_C_AdventureJournal.CanBeShown
     * @since 6.2.0
     */
    function CanBeShown(...args: WoWAPI.UnknownTable[]): WoWAPI.Unknown;

    /**
     * @see https://wow.gamepedia.com/API_C_AdventureJournal.GetNumAvailableSuggestions
     * @since 6.2.0
     */
    function GetNumAvailableSuggestions(...args: WoWAPI.UnknownTable[]): WoWAPI.Unknown;

    /**
     * @see https://wow.gamepedia.com/API_C_AdventureJournal.GetPrimaryOffset
     * @since 6.2.0
     */
    function GetPrimaryOffset(...args: WoWAPI.UnknownTable[]): WoWAPI.Unknown;

    /**
     * @see https://wow.gamepedia.com/API_C_AdventureJournal.GetReward
     * @since 6.2.0
     */
    function GetReward(...args: WoWAPI.UnknownTable[]): WoWAPI.Unknown;

    /**
     * @see https://wow.gamepedia.com/API_C_AdventureJournal.GetSuggestions
     * @since 6.2.0
     */
    function GetSuggestions(...args: WoWAPI.UnknownTable[]): WoWAPI.Unknown;

    /**
     * @see https://wow.gamepedia.com/API_C_AdventureJournal.SetPrimaryOffset
     * @since 6.2.0
     */
    function SetPrimaryOffset(...args: WoWAPI.UnknownTable[]): WoWAPI.Unknown;

    /**
     * @see https://wow.gamepedia.com/API_C_AdventureJournal.UpdateSuggestions
     * @since 6.2.0
     */
    function UpdateSuggestions(...args: WoWAPI.UnknownTable[]): WoWAPI.Unknown;
}
