declare namespace WoWAPI {

    interface CovenantSanctumFeatureInfo {

        garrTalentTreeID: number;
        featureType: number;
        uiOrder: number;
    }

    interface CovenantSanctumRenownLevelInfo {

        level: number;
        locked: boolean;
        isMilestone: boolean;
        isCapstone: boolean;
    }

    interface CovenantSanctumRenownRewardInfo {
        uiOrder: number;
        itemID: number | null;
        spellID: number | null;
        mountID: number | null;
        transmogID: number | null;
        transmogSetID: number | null;
        titleMaskID: number | null;
        garrFollowerID: number | null;
        transmogIllusionSourceID: number | null;
        icon: number | null;
        name: string | null;
        description: string | null;
        toastDescription: string | null;
    }
}

declare namespace C_CovenantSanctumUI {

    /**
     * Needs summary
     * @see https://wow.gamepedia.com/API_C_CovenantSanctumUI.CanAccessReservoir
     * @since 9.0.2 (2020-11-17)
     */
    function CanAccessReservoir(): boolean;

    /**
     * Needs summary
     * @see https://wow.gamepedia.com/API_C_CovenantSanctumUI.CanDepositAnima
     * @since 9.0.2 (2020-11-17)
     */
    function CanDepositAnima(): boolean;

    /**
     * Needs summary
     * @see https://wow.gamepedia.com/API_C_CovenantSanctumUI.DepositAnima
     * @protected
     * @since 9.0.1 (2020-10-13)
     */
    function DepositAnima(): boolean;

    /**
     * Needs summary.
     * @see https://wow.gamepedia.com/API_C_CovenantSanctumUI.EndInteraction
     * @since 9.0.1 (2020-10-13)
     */
    function EndInteraction(): void;

    /**
     * Needs summary
     * @see https://wow.gamepedia.com/API_C_CovenantSanctumUI.GetAnimaInfo
     * @returns currencyId, maxDisplayableValue
     * @since 9.0.1 (2020-10-13)
     */
    function GetAnimaInfo(): [number, number];

    /**
     * Needs summary
     * @see https://wow.gamepedia.com/API_C_CovenantSanctumUI.GetCurrentTalentTreeID
     * @since 9.0.2 (2020-11-17)
     */
    function GetCurrentTalentTreeID(): number | null;

    /**
     * Needs summary
     * @see https://wow.gamepedia.com/API_C_CovenantSanctumUI.GetFeatures
     * @since 9.0.1 (2020-10-13)
     */
    function GetFeatures(): WoWAPI.CovenantSanctumFeatureInfo[];

    /**
     * Needs summary
     * @see https://wow.gamepedia.com/API_C_CovenantSanctumUI.GetRenownLevel
     * @since 9.0.1 (2020-10-13)
     */
    function GetRenownLevel(): number;

    /**
     * Needs summary
     * @see https://wow.gamepedia.com/API_C_CovenantSanctumUI.GetRenownLevels
     * @since 9.0.2 (2020-11-17)
     */
    function GetRenownLevels(covenantId: Enum.CovenantType): WoWAPI.CovenantSanctumRenownLevelInfo[];

    /**
     * Needs summary
     * @see https://wow.gamepedia.com/API_C_CovenantSanctumUI.GetRenownRewardsForLevel
     * @since 9.0.1 (2020-10-13)
     */
    function GetRenownRewardsForLevel(covenantId: Enum.CovenantType, renownLevel: number): WoWAPI.CovenantSanctumRenownRewardInfo[];

    /**
     * Needs summary
     * @see https://wow.gamepedia.com/API_C_CovenantSanctumUI.GetSanctumType
     * @since 9.0.1 (2020-10-13)
     */
    function GetSanctumType(): Enum.GarrTalentFeatureSubtype;

    /**
     * Needs summary
     * @returns currencyIds
     * @see https://wow.gamepedia.com/API_C_CovenantSanctumUI.GetSoulCurrencies
     * @since 9.0.1 (2020-10-13)
     */
    function GetSoulCurrencies(): number[];
}
