declare namespace ItemLocation {

    /**
     * ItemLocationMixin objects can only be created for items in your equipment or inventory
     * @see https://wow.gamepedia.com/ItemLocationMixin
     * @since 8.0.1 (2018-07-17)
     */
    interface ItemLocationMixin {

        /**
         * clears the slot into
         * @see https://www.townlong-yak.com/framexml/live/go/ItemLocationMixin:Clear
         * @since 8.0.1 (2018-07-17)
         */
        Clear(): void;

        /**
         * updates bag and slot id with new values
         * @param bagId bag there the item is located in
         * @param slotIndex slot index where the item is located
         * @see https://www.townlong-yak.com/framexml/live/go/ItemLocationMixin:SetBagAndSlot
         * @since 8.0.1 (2018-07-17)
         */
        SetBagAndSlot(bagId: WoWAPI.CONTAINER_ID_BAG, slotIndex: number): void;

        /**
         * gets bag and slot id
         * @see https://www.townlong-yak.com/framexml/live/go/ItemLocationMixin:GetBagAndSlot
         * @since 8.0.1 (2018-07-17)
         */
        GetBagAndSlot(): [WoWAPI.CONTAINER_ID_BAG, number];

        /**
         * updates slot indexes by given equpiment slot index
         * @param equipmentSlotIndex equipment slot index where the item is located in
         * @see https://www.townlong-yak.com/framexml/live/go/ItemLocationMixin:SetEquipmentSlot
         * @since 8.0.1 (2018-07-17)
         */
        SetEquipmentSlot(equipmentSlotIndex: WoWAPI.INVENTORY_SLOT_ID): void;

        /**
         * gets the equipment slot representation of the bag and slot index
         * @see https://www.townlong-yak.com/framexml/live/go/ItemLocationMixin:GetEquipmentSlot
         * @since 8.0.1 (2018-07-17)
         */
        GetEquipmentSlot(): WoWAPI.INVENTORY_SLOT_ID;

        /**
         * tests if the contents of this item location is an equipment slot
         * @see https://www.townlong-yak.com/framexml/live/go/ItemLocationMixin:IsEquipmentSlot
         * @since 8.0.1 (2018-07-17)
         */
        IsEquipmentSlot(): boolean;

        /**
         * tests if the contents of this item location is bagId and slotIndex
         * @see https://www.townlong-yak.com/framexml/live/go/ItemLocationMixin:IsBagAndSlot
         * @since 8.0.1 (2018-07-17)
         */
        IsBagAndSlot(): boolean;

        /**
         * tests if the contents are not empty
         * @see https://www.townlong-yak.com/framexml/live/go/ItemLocationMixin:HasAnyLocation
         * @since 8.0.1 (2018-07-17)
         */
        HasAnyLocation(): boolean;

        /**
         * unknown
         * @see https://www.townlong-yak.com/framexml/live/go/ItemLocationMixin:IsValid
         * @since 8.0.1 (2018-07-17)
         */
        IsValid(): boolean;

        /**
         * tests if the contents are equal to the given bagId and slotIndex
         * @param badId
         * @param slotIndex
         * @see https://www.townlong-yak.com/framexml/live/go/ItemLocationMixin:IsEqualToBagAndSlot
         * @since 8.0.1 (2018-07-17)
         */
        IsEqualToBagAndSlot(badId: WoWAPI.CONTAINER_ID_BAG, slotIndex: number): boolean;

        /**
         * tests if the contents are equal to the given equipment slot
         * @param equipmentSlot
         * @see https://www.townlong-yak.com/framexml/live/go/ItemLocationMixin:IsEqualToEquipmentSlot
         * @since 8.0.1 (2018-07-17)
         */
        IsEqualToEquipmentSlot(equipmentSlot: WoWAPI.INVENTORY_SLOT_ID): boolean;

        /**
         * tests if this item location is equal to the given other item location
         * @param other
         * @see https://www.townlong-yak.com/framexml/live/go/ItemLocationMixin:IsEqualTo
         * @since 8.0.1 (2018-07-17)
         */
        IsEqualTo(other: ItemLocationMixin): boolean;
    }

    /**
     * Creates an empty object
     * @see https://www.townlong-yak.com/framexml/9.0.1/ObjectAPI/ItemLocation.lua#4
     * @since 8.0.1 (2018-07-17)
     */
    function CreateEmpty(): ItemLocationMixin;

    /**
     * Creates an object from a bagID and slotIndex
     * @param bagId bag there the item is located in
     * @param slotIndex slot index where the item is located
     * @see https://www.townlong-yak.com/framexml/9.0.1/ObjectAPI/ItemLocation.lua#9
     * @since 8.0.1 (2018-07-17)
     */
    function CreateFromBagAndSlot(bagId: WoWAPI.CONTAINER_ID_BAG, slotIndex: number): ItemLocationMixin;

    /**
     * Creates an object from an inventorySlotId
     * @param equipmentSlotIndex equipment slot index where the item is located in
     * @see https://www.townlong-yak.com/framexml/9.0.1/ObjectAPI/ItemLocation.lua#15
     * @since 8.0.1 (2018-07-17)
     */
    function CreateFromEquipmentSlot(equipmentSlotIndex: WoWAPI.INVENTORY_SLOT_ID): ItemLocationMixin;
}
