declare namespace C_Item {

    /**
     * Needs summary
     * @param item
     * @see https://wow.gamepedia.com/API_C_Item.IsItemConduit
     * @since 9.0.2 (2020-11-17)
     */
    function IsItemConduit(item: ItemLocation.ItemLocationMixin): boolean;

    /**
     * Needs summary
     * @param itemInfo
     * @see https://wow.gamepedia.com/API_C_Item.IsAnimaItemByID
     * @since 9.0.2 (2020-11-17)
     */
    function IsAnimaItemByID(itemInfo: string): boolean;
}
