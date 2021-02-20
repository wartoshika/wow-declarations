declare namespace C_SpellBook {

    /**
     * Needs summary
     * @see https://wow.gamepedia.com/API_C_SpellBook.ContainsAnyDisenchantSpell
     * @since 8.2.0 (2019-06-25)
     */
    function ContainsAnyDisenchantSpell(): boolean;

    /**
     * Needs summary
     * @param skillLineId
     * @see https://wow.gamepedia.com/API_C_SpellBook.GetSkillLineIndexByID
     * @since 9.0.1 (2020-10-13)
     */
    function GetSkillLineIndexByID(skillLineId: number): number | undefined;

    /**
     * Needs summary
     * @param spellId
     * @see https://wow.gamepedia.com/API_C_SpellBook.IsSpellDisabled
     * @since 8.2.5 (2019-09-24)
     */
    function IsSpellDisabled(spellId: number): boolean;
}
