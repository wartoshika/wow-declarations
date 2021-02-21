declare namespace C_NewItems {

    /**
     * Clears the new item flag on all items in the player's inventory
     * @see https://wow.gamepedia.com/API_C_NewItems.ClearAll
     * @since 5.4.0 (2013-09-10)
     */
    function GetItemHyperlink(): void;

    /**
     * Returns whether an inventory slot holds a newly-acquired item
     * @param bagId BagID of the container
     * @param slotIndex ID of the inventory slot within the container
     * @returns Returns true if the inventory slot holds a newly-acquired item; otherwise false (empty slot or a non-new item).
     * @see https://wow.gamepedia.com/API_C_NewItems.IsNewItem
     * @since 5.4.0 (2013-09-10)
     */
    function IsNewItem(bagId: WoWAPI.CONTAINER_ID, slotIndex: number): boolean;

    /**
     * Clears the "new item" flag
     * @param bagId container slot id
     * @param slotIndex slot within the bag to clear the "new item" flag for
     * @see https://wow.gamepedia.com/API_C_NewItems.RemoveNewItem
     * @since 5.4.0 (2013-09-10)
     */
    function RemoveNewItem(bagId: WoWAPI.CONTAINER_ID, slotIndex: number): void;
}
