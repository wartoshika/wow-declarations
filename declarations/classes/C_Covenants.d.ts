declare namespace WoWAPI {

    interface CovenantData {

        ID: number;
        textureKit: string;
        celebrationSoundKit: number;
        animaChannelSelectSoundKit: number;
        animaChannelActiveSoundKit: number;
        animaGemsFullSoundKit: number;
        animaNewGemSoundKit: number;
        animaReinforceSelectSoundKit: number;
        upgradeTabSelectSoundKitID: number;
        reservoirFullSoundKitID: number;
        beginResearchSoundKitID: number;
        renownFanfareSoundKitID: number;
        name: string;
        soulbindIDs: number[];
    }

    interface CovenantAbilityInfo {

        spellId: number;
        type: Enum.CovenantAbilityType;
    }

    interface CovenantSoulbindInfo {

        spellID: number;
        uiTextureKit: string;
        name: string;
        description: string;
        sortOrder: number;
    }

    interface CovenantFeatureInfo {

        name: string;
        description: string;
        texture: number;
    }

}

declare namespace C_Covenants {

    /**
     * Returns the CovenantID of the chosen covenant
     * - Only applies to joining a Covenant at maximum level or during N [50] The Threads of Fate
     * - Returns 0 while loading addons until info is available, before PLAYER_LOGIN and immediately after /reload
     * @see https://wow.gamepedia.com/API_C_Covenants.GetActiveCovenantID
     * @since 9.0.1 (2020-10-13)
     */
    function GetActiveCovenantID(): Enum.CovenantType;

    /**
     * Needs summary
     * @param covenantId
     * @see https://wow.gamepedia.com/API_C_Covenants.GetCovenantData
     * @since 9.0.1 (2020-10-13)
     */
    function GetCovenantData(covenantId: Enum.CovenantType): WoWAPI.CovenantData | null;

    /**
     * Needs summary.
     * @see https://wow.gamepedia.com/API_C_Covenants.GetCovenantIDs
     * @since 9.0.1 (2020-10-13)
     */
    function GetCovenantIDs(): Enum.CovenantType[];

}
