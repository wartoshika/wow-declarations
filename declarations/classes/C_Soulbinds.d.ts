declare namespace WoWAPI {

    interface ConduitCollectionData {

        conduitID: number;
        conduitRank: number;
        conduitItemLevel: number;
        conduitType: Enum.SoulbindConduitType;
        conduitSpecSetID: number;
        conduitSpecIDs: number[];
        conduitSpecName: string | null;
        covenantID: Enum.CovenantType;
        conduitItemID: number;
    }

    interface SoulbindNode {

        ID: number;
        row: number;
        column: number;
        icon: number;
        spellID: number;
        playerConditionReason: string | null;
        conduitID: number;
        conduitRank: number;
        state: Enum.SoulbindNodeState;
        conduitType: Enum.SoulbindConduitType;
        parentNodeIDs: number[];
        failureRenownRequirement: number | null;
    }

    interface SoulbindData {

        ID: number;
        covenantID: Enum.CovenantType;
        name: string;
        description: string;
        textureKit: string;
        unlocked: boolean;
        cvarIndex: number;
        tree: SoulbindTree;
        modelSceneData: SoulbindModelSceneData;
        activationSoundKitID: number;
    }

    interface SoulbindTree {
        editable: boolean;
        nodes: SoulbindNode[];
    }

    interface SoulbindModelSceneData {
        creatureDisplayInfoID: number;
        modelSceneActorID: number;
    }
}

/**
 * Relates to Soulbinding and Conduits
 * @see https://wow.gamepedia.com/Soulbinding
 */
declare namespace C_Soulbinds {

    /**
     * Needs summary
     * @param soulbindID
     * @see https://wow.gamepedia.com/API_C_Soulbinds.ActivateSoulbind
     * @since 9.0.1 (2020-10-13)
     */
    function ActivateSoulbind(soulbindID: number): void;

    /**
     * Needs summary
     * @param soulbindID
     * @returns result and errorDescription
     * @see https://wow.gamepedia.com/API_C_Soulbinds.CanActivateSoulbind
     * @since 9.0.1 (2020-10-13)
     */
    function CanActivateSoulbind(soulbindID: number): [boolean, string?];

    /**
     * Needs summary
     * @see https://wow.gamepedia.com/API_C_Soulbinds.CanModifySoulbind
     * @since 9.0.1 (2020-10-13)
     */
    function CanModifySoulbind(): boolean;

    /**
     * Needs summary
     * @param soulbindID
     * @returns result and errorDescription
     * @see https://wow.gamepedia.com/API_C_Soulbinds.CanResetConduitsInSoulbind
     * @since 9.0.1 (2020-10-13)
     */
    function CanResetConduitsInSoulbind(soulbindID: number): [boolean, string?];

    /**
     * Needs summary
     * @see https://wow.gamepedia.com/API_C_Soulbinds.CanSwitchActiveSoulbindTreeBranch
     * @since 9.0.2 (2020-11-17)
     */
    function CanSwitchActiveSoulbindTreeBranch(): boolean;

    /**
     * Needs summary
     * @see https://wow.gamepedia.com/API_C_Soulbinds.CloseUI
     * @since 9.0.1 (2020-10-13)
     */
    function CloseUI(): boolean;

    /**
     * Needs summary
     * @param soulbindID
     * @see https://wow.gamepedia.com/API_C_Soulbinds.CommitPendingConduitsInSoulbind
     * @since 9.0.1 (2020-10-13)
     */
    function CommitPendingConduitsInSoulbind(soulbindID: number): void;

    /**
     * Needs summary
     * @param soulbindID
     * @param conduitID
     * @returns nodeId
     * @see https://wow.gamepedia.com/API_C_Soulbinds.FindNodeIDActuallyInstalled
     * @since 9.0.2 (2020-11-17)
     */
    function FindNodeIDActuallyInstalled(soulbindID: number, conduitID: number): number;

    /**
     * Needs summary
     * @param soulbindID
     * @param conduitID
     * @returns nodeId
     * @see https://wow.gamepedia.com/API_C_Soulbinds.FindNodeIDPendingInstall
     * @since 9.0.2 (2020-11-17)
     */
    function FindNodeIDAppearingInstalled(soulbindID: number, conduitID: number): number;

    /**
     * Needs summary
     * @param soulbindID
     * @param conduitID
     * @returns nodeId
     * @see https://wow.gamepedia.com/API_C_Soulbinds.FindNodeIDAppearingInstalled
     * @since 9.0.2 (2020-11-17)
     */
    function FindNodeIDPendingInstall(soulbindID: number, conduitID: number): number;

    /**
     * Needs summary
     * @param soulbindID
     * @param conduitID
     * @returns nodeId
     * @see https://wow.gamepedia.com/API_C_Soulbinds.FindNodeIDPendingUninstall
     * @since 9.0.2 (2020-11-17)
     */
    function FindNodeIDPendingUninstall(soulbindID: number, conduitID: number): number;

    /**
     * Needs summary
     * @returns soulbindID
     * @see https://wow.gamepedia.com/API_C_Soulbinds.GetActiveSoulbindID
     * @since 9.0.1 (2020-10-13)
     */
    function GetActiveSoulbindID(): number;

    /**
     * Needs summary
     * @returns charges
     * @see https://wow.gamepedia.com/API_C_Soulbinds.GetConduitCharges
     * @since 9.0.2 (2020-11-17)
     */
    function GetConduitCharges(): number;

    /**
     * Needs summary
     * @returns charges
     * @see https://wow.gamepedia.com/API_C_Soulbinds.GetConduitChargesCapacity
     * @since 9.0.2 (2020-11-17)
     */
    function GetConduitChargesCapacity(): number;

    /**
     * Needs summary
     * @see https://wow.gamepedia.com/API_C_Soulbinds.GetConduitCollection
     * @since 9.0.1 (2020-10-13)
     */
    function GetConduitCollection(): WoWAPI.ConduitCollectionData[];

    /**
     * Needs summary
     * @returns charges
     * @see https://wow.gamepedia.com/API_C_Soulbinds.GetConduitCollectionCount
     * @since 9.0.2 (2020-11-17)
     */
    function GetConduitCollectionCount(): number;

    /**
     * Needs summary
     * @param conduitID
     * @see https://wow.gamepedia.com/API_C_Soulbinds.GetConduitCollectionData
     * @since 9.0.1 (2020-10-13)
     */
    function GetConduitCollectionData(conduitID: number): WoWAPI.ConduitCollectionData | null;

    /**
     * Needs summary
     * @see https://wow.gamepedia.com/API_C_Soulbinds.GetConduitCollectionDataAtCursor
     * @since 9.0.1 (2020-10-13)
     */
    function GetConduitCollectionDataAtCursor(): WoWAPI.ConduitCollectionData | null;

    /**
     * Needs summary
     * @see https://wow.gamepedia.com/API_C_Soulbinds.GetConduitCollectionDataByVirtualID
     * @since 9.0.2 (2020-11-17)
     */
    function GetConduitCollectionDataByVirtualID(virtualID: number): WoWAPI.ConduitCollectionData | null;

    /**
     * Needs summary
     * @param nodeId
     * @see https://wow.gamepedia.com/API_C_Soulbinds.GetConduitDisplayed
     * @since 9.0.2 (2020-11-17)
     */
    function GetConduitDisplayed(nodeId: number): number;

    /**
     * Needs summary
     * @param conduitId
     * @param rank Returned from C_Soulbinds.GetConduitRankFromCollection()
     * @see https://wow.gamepedia.com/API_C_Soulbinds.GetConduitHyperlink
     * @since 9.0.1 (2020-10-13)
     */
    function GetConduitHyperlink(conduitId: number, rank: number): WoWAPI.Hyperlink;

    /**
     * Needs summary
     * @param nodeId
     * @returns conduitID
     * @see https://wow.gamepedia.com/API_C_Soulbinds.GetConduitIDPendingInstall
     * @since 9.0.2 (2020-11-17)
     */
    function GetConduitIDPendingInstall(nodeId: number): number;

    /**
     * Needs summary
     * @param conduitId
     * @param rank Returned from C_Soulbinds.GetConduitRankFromCollection()
     * @returns itemLevel
     * @see https://wow.gamepedia.com/API_C_Soulbinds.GetConduitItemLevel
     * @since 9.0.1 (2020-10-13)
     */
    function GetConduitItemLevel(conduitId: number, rank: number): number;

    /**
     * Needs summary
     * @param conduitId
     * @param rank Returned from C_Soulbinds.GetConduitRankFromCollection()
     * @returns itemLevel
     * @see https://wow.gamepedia.com/API_C_Soulbinds.GetConduitQuality
     * @since 9.0.1 (2020-10-13)
     */
    function GetConduitItemLevel(conduitId: number, rank: number): WoWAPI.ITEM_QUALITY;

    /**
     * Needs summary
     * @param conduitID
     * @returns conduitRank
     * @see https://wow.gamepedia.com/API_C_Soulbinds.GetConduitRankFromCollection
     * @since 9.0.2 (2020-11-17)
     */
    function GetConduitRankFromCollection(conduitID: number): number;

    /**
     * Needs summary
     * @param conduitId
     * @param rank Returned from C_Soulbinds.GetConduitRankFromCollection()
     * @returns spellId
     * @see https://wow.gamepedia.com/API_C_Soulbinds.GetConduitSpellID
     * @since 9.0.1 (2020-10-13)
     */
    function GetConduitSpellID(conduitId: number, rank: number): number;

    /**
     * Needs summary
     * @param nodeId
     * @returns conduitID
     * @see https://wow.gamepedia.com/API_C_Soulbinds.GetInstalledConduitID
     * @since 9.0.2 (2020-11-17)
     */
    function GetInstalledConduitID(nodeId: number): number;

    /**
     * Needs summary
     * @param nodeId
     * @returns conduitID
     * @see https://wow.gamepedia.com/API_C_Soulbinds.GetNode
     * @since 9.0.1 (2020-10-13)
     */
    function GetNode(nodeId: number): WoWAPI.SoulbindNode;

    /**
     * Needs summary
     * @param soulbindID
     * @see https://wow.gamepedia.com/API_C_Soulbinds.GetSoulbindData
     * @since 9.0.1 (2020-10-13)
     */
    function GetSoulbindData(soulbindID: number): WoWAPI.SoulbindData;

    /**
     * Needs summary
     * @returns count
     * @see https://wow.gamepedia.com/API_C_Soulbinds.GetTotalConduitChargesPending
     * @since 9.0.2 (2020-11-17)
     */
    function GetTotalConduitChargesPending(): number;

    /**
     * Needs summary
     * @param soulbindID
     * @returns count
     * @see https://wow.gamepedia.com/API_C_Soulbinds.GetTotalConduitChargesPendingInSoulbind
     * @since 9.0.2 (2020-11-17)
     */
    function GetTotalConduitChargesPendingInSoulbind(soulbindID: number): number;

    /**
     * Needs summary
     * @param treeId
     * @see https://wow.gamepedia.com/API_C_Soulbinds.GetTree
     * @since 9.0.1 (2020-10-13)
     */
    function GetTree(treeId: number): WoWAPI.SoulbindTree;

    /**
     * Needs summary
     * @param soulbindID
     * @see https://wow.gamepedia.com/API_C_Soulbinds.HasAnyInstalledConduitInSoulbind
     * @since 9.0.1 (2020-10-13)
     */
    function HasAnyInstalledConduitInSoulbind(soulbindID: number): boolean;

    /**
     * Needs summary
     * @see https://wow.gamepedia.com/API_C_Soulbinds.HasAnyPendingConduits
     * @since 9.0.1 (2020-10-13)
     */
    function HasAnyPendingConduits(): boolean;

    /**
     * Needs summary
     * @param soulbindID
     * @see https://wow.gamepedia.com/API_C_Soulbinds.HasPendingConduitsInSoulbind
     * @since 9.0.1 (2020-10-13)
     */
    function HasPendingConduitsInSoulbind(soulbindID: number): boolean;

    /**
     * Needs summary
     * @param nodeId
     * @see https://wow.gamepedia.com/API_C_Soulbinds.IsConduitInstalled
     * @since 9.0.1 (2020-10-13)
     */
    function IsConduitInstalled(nodeId: number): boolean;

    /**
     * Needs summary
     * @param soulbindID
     * @param conduitID
     * @see https://wow.gamepedia.com/API_C_Soulbinds.IsConduitInstalledInSoulbind
     * @since 9.0.1 (2020-10-13)
     */
    function IsConduitInstalledInSoulbind(soulbindID: number, conduitID: number): boolean;

    /**
     * Needs summary
     * @param itemInfo
     * @see https://wow.gamepedia.com/API_C_Soulbinds.IsItemConduitByItemInfo
     * @since 9.0.1 (2020-10-13)
     */
    function IsItemConduitByItemInfo(itemInfo: string): boolean;

    /**
     * Needs summary
     * @param nodeId
     * @see https://wow.gamepedia.com/API_C_Soulbinds.IsNodePendingModify
     * @since 9.0.2 (2020-11-17)
     */
    function IsNodePendingModify(nodeId: number): boolean;

    /**
     * Needs summary
     * @param soulbindID
     * @see https://wow.gamepedia.com/API_C_Soulbinds.IsUnselectedConduitPendingInSoulbind
     * @since 9.0.1 (2020-10-13)
     */
    function IsUnselectedConduitPendingInSoulbind(soulbindID: number): boolean;

    /**
     * Needs summary
     * @param nodeId
     * @param conduitId
     * @param type
     * @see https://wow.gamepedia.com/API_C_Soulbinds.ModifyNode
     * @since 9.0.2 (2020-11-17)
     */
    function ModifyNode(nodeId: number, conduitId: number, type: Enum.SoulbindConduitTransactionType): WoWAPI.Unknown;

    /**
     * Needs summary
     * @param nodeID
     * @see https://wow.gamepedia.com/API_C_Soulbinds.SelectNode
     * @since 9.0.1 (2020-10-13)
     */
    function SelectNode(nodeID: number): void;

    /**
     * Needs summary
     * @param nodeID
     * @see https://wow.gamepedia.com/API_C_Soulbinds.UnmodifyNode
     * @since 9.0.2 (2020-11-17)
     */
    function UnmodifyNode(nodeID: number): void;
}
