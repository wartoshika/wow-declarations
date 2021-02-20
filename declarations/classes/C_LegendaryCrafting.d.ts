declare namespace C_LegendaryCrafting {

    /**
     * Needs summary
     * @see https://wow.gamepedia.com/API_C_LegendaryCrafting.CloseRuneforgeInteraction
     * @since 9.0.1 (2020-10-13)
     */
    function CloseRuneforgeInteraction(): void;

    /**
     * Needs summary
     * @param unknown
     * @see https://wow.gamepedia.com/API_C_LegendaryCrafting.CraftRuneforgeLegendary
     * @since 9.0.1 (2020-10-13)
     */
    function CraftRuneforgeLegendary(...unknown: WoWAPI.UnknownTable[]): WoWAPI.Unknown;

    /**
     * Needs summary
     * @param baseItem
     * @see https://wow.gamepedia.com/API_C_LegendaryCrafting.GetRuneforgeItemPreviewInfo
     * @since 9.0.1 (2020-10-13)
     */
    function GetRuneforgeItemPreviewInfo(baseItem: ItemLocation.ItemLocationMixin): WoWAPI.Unknown;

    /**
     * Needs summary
     * @param baseItem
     * @param runeforgePowerID
     * @param modifiers
     * @see https://wow.gamepedia.com/API_C_LegendaryCrafting.GetRuneforgeItemPreviewInfo
     * @since 9.0.1 (2020-10-13)
     */
    function GetRuneforgeItemPreviewInfo(baseItem: ItemLocation.ItemLocationMixin, runeforgePowerID: number, modifiers: number[]): WoWAPI.Unknown;

    /**
     * Needs summary
     * @param baseItem
     * @see https://wow.gamepedia.com/API_C_LegendaryCrafting.GetRuneforgeLegendaryCost
     * @since 9.0.1 (2020-10-13)
     */
    function GetRuneforgeLegendaryCost(baseItem: ItemLocation.ItemLocationMixin): WoWAPI.Unknown;

    /**
     * Needs summary
     * @returns spellId
     * @see https://wow.gamepedia.com/API_C_LegendaryCrafting.GetRuneforgeLegendaryCraftSpellID
     * @since 9.0.1 (2020-10-13)
     */
    function GetRuneforgeLegendaryCraftSpellID(): number;

    /**
     * Needs summary
     * @returns currencies
     * @see https://wow.gamepedia.com/API_C_LegendaryCrafting.GetRuneforgeLegendaryCurrencies
     * @since 9.0.1 (2020-10-13)
     */
    function GetRuneforgeLegendaryCurrencies(): number[];

    /**
     * Needs summary
     * @param runeforgeLegendary
     * @param upgradeItem
     * @see https://wow.gamepedia.com/API_C_LegendaryCrafting.GetRuneforgeLegendaryUpgradeCost
     * @since 9.0.1 (2020-10-13)
     */
    function GetRuneforgeLegendaryUpgradeCost(runeforgeLegendary: ItemLocation.ItemLocationMixin, upgradeItem: ItemLocation.ItemLocationMixin): WoWAPI.Unknown;

    /**
     * Needs summary
     * @param baseItem
     * @param powerId
     * @param addedModifierIndex
     * @param modifiers
     * @returns name and description
     * @see https://wow.gamepedia.com/API_C_LegendaryCrafting.GetRuneforgeModifierInfo
     * @since 9.0.1 (2020-10-13)
     */
    function GetRuneforgeModifierInfo(
        baseItem: ItemLocation.ItemLocationMixin,
        powerId: number | null,
        addedModifierIndex: number,
        modifiers: number[]
    ): [string, string];

    /**
     * Needs summary
     * @returns modifiedReagentItemIDs
     * @see https://wow.gamepedia.com/API_C_LegendaryCrafting.GetRuneforgeModifiers
     * @since 9.0.1 (2020-10-13)
     */
    function GetRuneforgeModifiers(): number[];

    /**
     * Needs summary
     * @returns runeforgePowerINfo
     * @see https://wow.gamepedia.com/API_C_LegendaryCrafting.GetRuneforgePowerInfo
     * @since 9.0.1 (2020-10-13)
     */
    function GetRuneforgePowerInfo(runeforgePowerID: number): WoWAPI.Unknown;

    /**
     * Needs summary
     * @returns specRuneforgePowerIDs and otherSpecRuneforgePowerIDs
     * @see https://wow.gamepedia.com/API_C_LegendaryCrafting.GetRuneforgePowers
     * @since 9.0.1 (2020-10-13)
     */
    function GetRuneforgePowers(): [number[], number[]];

    /**
     * Needs summary
     * @param baseItem
     * @param filter
     * @returns specRuneforgePowerIDs and otherSpecRuneforgePowerIDs
     * @see https://wow.gamepedia.com/API_C_LegendaryCrafting.GetRuneforgePowers
     * @since 9.0.1 (2020-10-13)
     */
    function GetRuneforgePowers(baseItem: ItemLocation.ItemLocationMixin, filter: Enum.RuneforgePowerFilter): [number[], number[]];

    /**
     * Needs summary
     * @returns runeforgePowerIDs
     * @see https://wow.gamepedia.com/API_C_LegendaryCrafting.GetRuneforgePowersByClassAndSpec
     * @since 9.0.1 (2020-10-13)
     */
    function GetRuneforgePowersByClassAndSpec(): number[];

    /**
     * Needs summary
     * @param classID
     * @param specId
     * @param filter
     * @returns runeforgePowerIDs
     * @see https://wow.gamepedia.com/API_C_LegendaryCrafting.GetRuneforgePowersByClassAndSpec
     * @since 9.0.1 (2020-10-13)
     */
    function GetRuneforgePowersByClassAndSpec(classID: WoWAPI.CLASS_ID, specId: number, filter: Enum.RuneforgePowerFilter): number[];

    /**
     * Needs summary
     * @param runeforgePowerID
     * @see https://wow.gamepedia.com/API_C_LegendaryCrafting.GetRuneforgePowerSlots
     * @since 9.0.1 (2020-10-13)
     */
    function GetRuneforgePowerSlots(runeforgePowerID: number): string[];

    /**
     * Needs summary
     * @param item
     * @see https://wow.gamepedia.com/API_C_LegendaryCrafting.IsRuneforgeLegendary
     * @since 9.0.1 (2020-10-13)
     */
    function IsRuneforgeLegendary(item: ItemLocation.ItemLocationMixin): boolean;

    /**
     * Needs summary
     * @param runeforgeLegendary
     * @see https://wow.gamepedia.com/API_C_LegendaryCrafting.IsRuneforgeLegendaryMaxLevel
     * @since 9.0.1 (2020-10-13)
     */
    function IsRuneforgeLegendaryMaxLevel(runeforgeLegendary: ItemLocation.ItemLocationMixin): boolean;

    /**
     * Needs summary
     * @param runeforgeLegendary
     * @param upgradeItem
     * @see https://wow.gamepedia.com/API_C_LegendaryCrafting.IsUpgradeItemValidForRuneforgeLegendary
     * @since 9.0.1 (2020-10-13)
     */
    function IsUpgradeItemValidForRuneforgeLegendary(runeforgeLegendary: ItemLocation.ItemLocationMixin, upgradeItem: ItemLocation.ItemLocationMixin): boolean;

    /**
     * Needs summary
     * @param baseItem
     * @see https://wow.gamepedia.com/API_C_LegendaryCrafting.IsValidRuneforgeBaseItem
     * @since 9.0.1 (2020-10-13)
     */
    function IsValidRuneforgeBaseItem(baseItem: ItemLocation.ItemLocationMixin): boolean;

    /**
     * Needs summary
     * @param baseItem
     * @param runeforgePowerId
     * @param modifiers
     * @returns runeforgeLegendaryCraftDescription
     * @see https://wow.gamepedia.com/API_C_LegendaryCrafting.MakeRuneforgeCraftDescription
     * @since 9.0.1 (2020-10-13)
     */
    function MakeRuneforgeCraftDescription(baseItem: ItemLocation.ItemLocationMixin, runeforgePowerId: number, modifiers: number[]): WoWAPI.Unknown;

    /**
     * Needs summary.
     * @param runeforgeLegendary
     * @param upgradeItem
     * @see https://wow.gamepedia.com/API_C_LegendaryCrafting.UpgradeRuneforgeLegendary
     * @since 9.0.1 (2020-10-13)
     */
    function UpgradeRuneforgeLegendary(runeforgeLegendary: ItemLocation.ItemLocationMixin, upgradeItem: ItemLocation.ItemLocationMixin): void;
}
