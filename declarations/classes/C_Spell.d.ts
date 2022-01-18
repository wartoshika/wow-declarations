/// <reference path="../atlas.d.ts" />

declare namespace C_Spell {

    /**
     * unknown behaviour
     * @param spellId
     * @returns rarityBorderAtlas
     * @see https://wow.gamepedia.com/API_C_Spell.GetMawPowerBorderAtlasBySpellID
     * @since 9.0.2 (2020-11-17)
     */
    function GetMawPowerBorderAtlasBySpellID(spellId: number): WoWAPI.AtlasID;

    /**
     * Needs summary
     * @param spellId
     * @see https://wow.gamepedia.com/API_C_Spell.DoesSpellExist
     * @since 8.0.1 (2018-07-17)
     */
    function DoesSpellExist(spellId: number): boolean;

    /**
     * Needs summary
     * @param spellId
     * @see https://wow.gamepedia.com/API_C_Spell.IsSpellDataCached
     * @since 8.0.1 (2018-07-17)
     */
    function IsSpellDataCached(spellId: number): boolean;

    /**
     * Asynchronously downloads spell information to the game client, making the full details available for subsequent calls to GetSpellInfo(spellId).
     * @param spellId
     * @fires SPELL_DATA_LOAD_RESULT
     * @see https://wow.gamepedia.com/API_C_Spell.RequestLoadSpellData
     * @since 8.0.1 (2018-07-17)
     */
    function RequestLoadSpellData(spellId: number): boolean;
}
