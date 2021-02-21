declare namespace WoWAPI {

    interface ItemInteractionFrameInfo {

        textureKit: string;
        openSoundKitID: number;
        closeSoundKitID: number;
        titleText: string;
        tutorialText: string;
        buttonText: string;
        frameType: Enum.ItemInteractionFrameType;
        description: string | null;
        cost: number | null;
        currencyTypeId: number | null;
        dropInSlotSoundKitId: number | null;
    }
}

declare namespace C_ItemInteraction {

    /**
     * Needs summary
     * @see https://wow.gamepedia.com/API_C_ItemInteraction.ClearPendingItem
     * @since 8.3.0 (2020-01-14)
     */
    function ClearPendingItem(): void;

    /**
     * Needs summary
     * @see https://wow.gamepedia.com/API_C_ItemInteraction.CloseUI
     * @since 8.3.0 (2020-01-14)
     */
    function CloseUI(): void;

    /**
     * Needs summary
     * @see https://wow.gamepedia.com/API_C_ItemInteraction.GetItemInteractionInfo
     * @since 8.3.0 (2020-01-14)
     */
    function GetItemInteractionInfo(): WoWAPI.ItemInteractionFrameInfo | null;

    /**
     * Needs summary
     * @see https://wow.gamepedia.com/API_C_ItemInteraction.GetItemInteractionSpellId
     * @since 8.3.0 (2020-01-14)
     */
    function GetItemInteractionSpellId(): number;

    /**
     * Needs summary
     * @see https://wow.gamepedia.com/API_C_ItemInteraction.InitializeFrame
     * @since 8.3.0 (2020-01-14)
     */
    function InitializeFrame(): void;

    /**
     * Needs summary
     * @see https://wow.gamepedia.com/API_C_ItemInteraction.PerformItemInteraction
     * @since 8.3.0 (2020-01-14)
     */
    function PerformItemInteraction(): void;

    /**
     * Needs summary
     * @see https://wow.gamepedia.com/API_C_ItemInteraction.Reset
     * @since 8.3.0 (2020-01-14)
     */
    function Reset(): void;

    /**
     * Needs summary
     * @returns success
     * @see https://wow.gamepedia.com/API_C_ItemInteraction.SetPendingItem
     * @since 8.3.0 (2020-01-14)
     */
    function SetPendingItem(item?: ItemLocation.ItemLocationMixin): boolean;

}
