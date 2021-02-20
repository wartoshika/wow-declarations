declare namespace WoWAPI {

    interface CovenantPreviewInfo {

        textureKit: string;
        transmogSetID: number;
        mountID: number;
        covenantName: string;
        covenantZone: string;
        description: string;
        covenantCrest: string;
        covenantAbilities: CovenantAbilityInfo[];
        fromPlayerChoice: boolean;
        covenantSoulbinds: CovenantSoulbindInfo[];
        featureInfo: CovenantFeatureInfo;
    }
}

declare namespace C_CovenantPreview {

    /**
     * Needs summary
     * @see https://wow.gamepedia.com/API_C_CovenantPreview.CloseFromUI
     * @since 9.0.1 (2020-10-13)
     */
    function CloseFromUI(): void;

    /**
     * Needs summary
     * @param playerChoiceResponseID
     * @see https://wow.gamepedia.com/API_C_CovenantPreview.GetCovenantInfoForPlayerChoiceResponseID
     * @since 9.0.1 (2020-10-13)
     */
    function GetCovenantInfoForPlayerChoiceResponseID(playerChoiceResponseID: number): WoWAPI.CovenantPreviewInfo;
}
