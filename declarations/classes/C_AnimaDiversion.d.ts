declare namespace WoWAPI {

    interface AnimaDiversionNodeInfo {
        talentId: number;
        name: string;
        description: string;
        costs: AnimaDiversionCostInfo[];
        currencyId: number;
        icon: number;
        normalizedPosition: WoWAPI.Vector2D;
        state: Enum.AnimaDiversionNodeState;
    }

    interface AnimaDiversionCostInfo {
        currencyId: number;
        quantity: number;
    }
}

declare namespace C_AnimaDiversion {

    /**
     * Closes the AnimaDiversionFrame
     * @see https://wow.gamepedia.com/API_C_AnimaDiversion.CloseUI
     * @fires ANIMA_DIVERSION_CLOSE
     * @since 9.0.1 (2020-10-13)
     */
    function CloseUI(): void;

    /**
     * Returns all Anima Conductor nodes for the player's Covenant
     * Requires interacting with an Anima Conductor at least once since logging on; otherwise, returns nil.
     * Subsequent calls to C_UI.Reload() will not interrupt this function
     * @see https://wow.gamepedia.com/API_C_AnimaDiversion.GetAnimaDiversionNodes
     * @since 9.0.1 (2020-10-13)
     */
    function GetAnimaDiversionNodes(): WoWAPI.AnimaDiversionNodeInfo[];

    /**
     * Locates an Anima Conductor
     * @returns An Anima Conductor's location on the continent map only while interacting with it; otherwise nil
     * @see https://wow.gamepedia.com/API_C_AnimaDiversion.GetOriginPosition
     * @since 9.0.1 (2020-10-13)
     */
    function GetOriginPosition(): WoWAPI.Vector2D | null;

    /**
     * Needs summary
     * @returns progress
     * @see https://wow.gamepedia.com/API_C_AnimaDiversion.GetReinforceProgress
     * @since 9.0.1 (2020-10-13)
     */
    function GetReinforceProgress(): number;

    /**
     * Names the texture kit applied to the AnimaDiversionFrame
     * @returns Name of a texture kit if the player has interacted with an Anima Conductor at least once since logging on; otherwise, returns nil
     * @see https://wow.gamepedia.com/API_C_AnimaDiversion.GetTextureKit
     * @since 9.0.1 (2020-10-13)
     */
    function GetTextureKit(): string | null;

    /**
     * Attempts to open the AnimaDiversionFrame
     * - Triggers ANIMA_DIVERSION_OPEN only after interacting with an Anima Conductor at least once since logging on, regardless of subsequent
     *   calls to C_UI.Reload(); otherwise, this function silently fails
     * - Despite its name, this function is not used by the native UI when interacting with an Anima Conductor
     * - Calling this function after walking away from the Anima Conductor results in an incomplete UI because C_AnimaDiversion.GetOriginPosition() returns nil
     * - However, it is possible to close and reopen the frame with full functionality if the player has remained within range
     *   of the Anima Conductor since interacting with it
     * @see https://wow.gamepedia.com/API_C_AnimaDiversion.OpenAnimaDiversionUI
     * @fires ANIMA_DIVERSION_OPEN
     * @since 9.0.1 (2020-10-13)
     */
    function OpenAnimaDiversionUI(): void;

    /**
     * Needs summary
     * @param talentId
     * @param temporary
     * @see https://wow.gamepedia.com/API_C_AnimaDiversion.SelectAnimaNode
     * @since 9.0.1 (2020-10-13)
     */
    function SelectAnimaNode(talentId: number, temporary: boolean): void;
}
