declare namespace WoWAPI {

    interface DungeonEntranceMapInfo {

        /**
         * Possible values listed at wow.tools
         */
        areaPoiID: number;
        position: Vector2D;
        name: string;
        description: string;
        /**
         * AtlasID used as Texture:SetAtlas(atlasName)
         */
        atlasName: string;
        /**
         * Possible values listed at wow.tools
         */
        journalInstanceID: number;
    }

    interface EncounterJournalMapEncounterInfo {

        encointerID: number;
        mapX: number;
        mapY: number;
    }

    interface EncounterJournalSectionInfo {

        spellID: number;
        /**
         * Section title, e.g. "Stage One: The Final Assault", "Mutated Corruption", "Impale"
         */
        title: string;
        /**
         * Description text, e.g. "A Mutated Corruption appears shortly after assaulting a platform"
         */
        description: string | null;
        /**
         * Section depth, i.e. the number of ancestors it has before reaching a sibling of the root section for the encounter
         * (0 for the root section and its siblings, 1 for their children, 2 for their children's children...).
         */
        headerType: number;
        /**
         * Path to a texture to display as an icon next to the section title, or "" if no static icon should be shown.
         */
        abilityIcon: number;
        /**
         * Model ID to display as an icon next to the section title, or 0 if no model-based icon should be shown
         */
        creatureDisplayID: number;
        uiModelSceneID: number;
        /**
         * Section ID of the next section on the same depth as this one, nil if none
         */
        siblingSectionID: number | null;
        /**
         * Section ID of the first child section of this section, nil if none
         */
        firstChildSectionID: number | null;
        /**
         * true if this section should be hidden because it does not apply to the current DifficultyID}, false otherwise.
         */
        filteredByDifficulty: boolean;
        /**
         * hyperlink to this section, e.g. " |cff66bbff|Hjournal:2:4102:4|h[Cataclysm]|h|r"
         */
        link: Hyperlink;
        /**
         * True if the section should be expanded by default, false if it should be collapsed by default
         */
        startsOpen: boolean;
    }

    type ENCOUNTER_JOURNAL_FLAG_TANK_ALERT = 0;
    type ENCOUNTER_JOURNAL_FLAG_DAMAGE_DEALER_ALERT = 1;
    type ENCOUNTER_JOURNAL_FLAG_HEALER_ALERT = 2;
    type ENCOUNTER_JOURNAL_FLAG_HEROIC_DIFFICULTY = 3;
    type ENCOUNTER_JOURNAL_FLAG_DEADLY = 4;
    type ENCOUNTER_JOURNAL_FLAG_IMPORTANT = 5;
    type ENCOUNTER_JOURNAL_FLAG_INTERUPTIBLE = 6;
    type ENCOUNTER_JOURNAL_FLAG_MAGIC_EFFECT = 7;
    type ENCOUNTER_JOURNAL_FLAG_CURSE_EFFECT = 8;
    type ENCOUNTER_JOURNAL_FLAG_POISON_EFFECT = 9;
    type ENCOUNTER_JOURNAL_FLAG_DISEASE_EFFECT = 10;
    type ENCOUNTER_JOURNAL_FLAG_ENRAGE = 11;
    type ENCOUNTER_JOURNAL_FLAG_MYTHIC_DIFFICULTY = 12;
    type ENCOUNTER_JOURNAL_FLAG =
        ENCOUNTER_JOURNAL_FLAG_TANK_ALERT
        | ENCOUNTER_JOURNAL_FLAG_DAMAGE_DEALER_ALERT
        | ENCOUNTER_JOURNAL_FLAG_HEALER_ALERT
        |
        ENCOUNTER_JOURNAL_FLAG_HEROIC_DIFFICULTY
        | ENCOUNTER_JOURNAL_FLAG_DEADLY
        | ENCOUNTER_JOURNAL_FLAG_IMPORTANT
        | ENCOUNTER_JOURNAL_FLAG_INTERUPTIBLE
        |
        ENCOUNTER_JOURNAL_FLAG_MAGIC_EFFECT
        | ENCOUNTER_JOURNAL_FLAG_CURSE_EFFECT
        | ENCOUNTER_JOURNAL_FLAG_POISON_EFFECT
        | ENCOUNTER_JOURNAL_FLAG_DISEASE_EFFECT
        |
        ENCOUNTER_JOURNAL_FLAG_ENRAGE
        | ENCOUNTER_JOURNAL_FLAG_MYTHIC_DIFFICULTY;
}

declare namespace C_EncounterJournal {

    /**
     * Returns the instance entrances for a map
     * @param uiMapId
     * @see https://wow.gamepedia.com/API_C_EncounterJournal.GetDungeonEntrancesForMap
     * @since 8.0.1 (2018-07-17)
     */
    function GetDungeonEntrancesForMap(uiMapId: number): WoWAPI.DungeonEntranceMapInfo[];

    /**
     * Returns boss pin locations for an instance map
     * @param uiMapId
     * @see https://wow.gamepedia.com/API_C_EncounterJournal.GetEncountersOnMap
     * @since 8.0.1 (2018-07-17)
     */
    function GetEncountersOnMap(uiMapId: number): WoWAPI.EncounterJournalMapEncounterInfo[];

    /**
     * Returns the icon flags for a section, such as Magic Effect and Heroic Difficulty
     * @param sectionID
     * @returns Flag IDs to display for this section.
     *  - Refer to the ENCOUNTER_JOURNAL_SECTION_FLAG globals for the flag titles.
     *  - For convenience there is EncounterJournal_SetFlagIcon() which sets the texture coords for interface/encounterjournal/ui-ej-icons.blp
     * @see https://wow.gamepedia.com/API_C_EncounterJournal.GetSectionIconFlags
     * @since 7.3.5 (2018-01-16)
     */
    function GetSectionIconFlags(sectionID: number): WoWAPI.ENCOUNTER_JOURNAL_FLAG[];

    /**
     * Returns information about an entry in the Abilities section of the Encounter Journal
     * @param sectionId
     * @returns encounterJournalSectionInfo
     * @see https://wow.gamepedia.com/API_C_EncounterJournal.GetSectionInfo
     * @since 7.3.5 (2018-01-16)
     */
    function GetSectionInfo(sectionId: number): WoWAPI.EncounterJournalSectionInfo;

    /**
     * Returns whether an instance has a loot table in the journal
     * @param instanceId if omitted, uses the currently selected instance per EJ_SelectInstance
     * @see https://wow.gamepedia.com/API_C_EncounterJournal.InstanceHasLoot
     * @since 8.1.0 (2018-12-11)
     */
    function InstanceHasLoot(instanceId?: number): boolean;

    /**
     * Returns if a boss encounter has been completed
     * @param journalEncounterID
     * @see https://wow.gamepedia.com/API_C_EncounterJournal.IsEncounterComplete
     * @since 8.1.5 (2019-03-12)
     */
    function IsEncounterComplete(journalEncounterID: number): boolean;

    /**
     * Needs summary
     * @param level
     * @see https://wow.gamepedia.com/API_C_EncounterJournal.SetPreviewMythicPlusLevel
     * @since 8.2.0 (2019-06-25)
     */
    function SetPreviewMythicPlusLevel(level: number): void;

    /**
     * Needs summary
     * @param tier
     * @see https://wow.gamepedia.com/API_C_EncounterJournal.SetPreviewPvpTier
     * @since 8.2.0 (2019-06-25)
     */
    function SetPreviewPvpTier(tier: number): void;
}
