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

    /**
     * Needs summary
     * @param item
     * @see https://wow.gamepedia.com/API_C_Item.CanViewItemPowers
     * @since 8.1.0 (2018-12-11)
     */
    function CanViewItemPowers(item: ItemLocation.ItemLocationMixin): boolean;

    /**
     * Needs summary
     * @param item
     * @see https://wow.gamepedia.com/API_C_Item.DoesItemExist
     * @since 8.0.1 (2018-07-17)
     */
    function DoesItemExist(item: ItemLocation.ItemLocationMixin): boolean;

    /**
     * Needs summary
     * @param itemInfo
     * @see https://wow.gamepedia.com/API_C_Item.DoesItemExistByID
     * @since 8.0.1 (2018-07-17)
     */
    function DoesItemExistByID(itemInfo: WoWAPI.Hyperlink | string | number): boolean;

    /**
     * Needs summary
     * @param item
     * @see https://wow.gamepedia.com/API_C_Item.DoesItemMatchBonusTreeReplacement
     * @since 9.0.1 (2020-10-13)
     */
    function DoesItemMatchBonusTreeReplacement(item: ItemLocation.ItemLocationMixin): boolean;

    /**
     * Needs summary
     * @param item
     * @see https://wow.gamepedia.com/API_C_Item.GetCurrentItemLevel
     * @since 9.0.1 (2020-10-13)
     */
    function GetCurrentItemLevel(item: ItemLocation.ItemLocationMixin): number | null;

    /**
     * Needs summary
     * @param item
     * @see https://wow.gamepedia.com/API_C_Item.GetItemGUID
     * @since 8.0.1 (2018-07-17)
     */
    function GetItemGUID(item: ItemLocation.ItemLocationMixin): string;

    /**
     * Needs summary
     * @param item
     * @see https://wow.gamepedia.com/API_C_Item.GetItemIcon
     * @since 8.0.1 (2018-07-17)
     */
    function GetItemIcon(item: ItemLocation.ItemLocationMixin): number | null;

    /**
     * Needs summary
     * @param itemInfo
     * @see https://wow.gamepedia.com/API_C_Item.GetItemIconByID
     * @since 8.0.1 (2018-07-17)
     */
    function GetItemIconByID(itemInfo: WoWAPI.Hyperlink | string | number): number | null;

    /**
     * Needs summary
     * @param item
     * @see https://wow.gamepedia.com/API_C_Item.GetItemID
     * @since 8.0.1 (2018-07-17)
     */
    function GetItemID(item: ItemLocation.ItemLocationMixin): number;

    /**
     * Needs summary
     * @param item
     * @see https://wow.gamepedia.com/API_C_Item.GetItemInventoryType
     * @since 8.0.1 (2018-07-17)
     */
    function GetItemInventoryType(item: ItemLocation.ItemLocationMixin): Enum.InventoryType | null;

    /**
     * Needs summary
     * @param itemInfo
     * @see https://wow.gamepedia.com/API_C_Item.GetItemInventoryTypeByID
     * @since 8.0.1 (2018-07-17)
     */
    function GetItemInventoryTypeByID(itemInfo: WoWAPI.Hyperlink | string | number): Enum.InventoryType | null;

    /**
     * Needs summary
     * @param item
     * @see https://wow.gamepedia.com/API_C_Item.GetItemLink
     * @since 8.0.1 (2018-07-17)
     */
    function GetItemLink(item: ItemLocation.ItemLocationMixin): WoWAPI.Hyperlink | null;

    /**
     * Needs summary
     * @param item
     * @see https://wow.gamepedia.com/API_C_Item.GetItemName
     * @since 8.0.1 (2018-07-17)
     */
    function GetItemName(item: ItemLocation.ItemLocationMixin): string | null;

    /**
     * Needs summary
     * @param itemInfo
     * @see https://wow.gamepedia.com/API_C_Item.GetItemNameByID
     * @since 8.0.1 (2018-07-17)
     */
    function GetItemNameByID(itemInfo: WoWAPI.Hyperlink | string | number): string | null;

    /**
     * Needs summary
     * @param item
     * @see https://wow.gamepedia.com/API_C_Item.GetItemQuality
     * @since 8.0.1 (2018-07-17)
     */
    function GetItemQuality(item: ItemLocation.ItemLocationMixin): Enum.ItemQuality | null;

    /**
     * Needs summary
     * @param itemInfo
     * @see https://wow.gamepedia.com/API_C_Item.GetItemQualityByID
     * @since 8.0.1 (2018-07-17)
     */
    function GetItemQualityByID(itemInfo: WoWAPI.Hyperlink | string | number): Enum.ItemQuality | null;

    /**
     * Needs summary
     * @param item
     * @see https://wow.gamepedia.com/API_C_Item.GetStackCount
     * @since 8.3.0 (2020-01-14)
     */
    function GetStackCount(item: ItemLocation.ItemLocationMixin): number;

    /**
     * Needs summary
     * @param item
     * @returns Whether or not the item is soul- or accountbound
     * @see https://wow.gamepedia.com/API_C_Item.IsBound
     * @since 8.0.1 (2018-07-17)
     */
    function IsBound(item: ItemLocation.ItemLocationMixin): boolean;

    /**
     * Needs summary
     * @param item
     * @see https://wow.gamepedia.com/API_C_Item.IsItemDataCached
     * @since 8.0.1 (2018-07-17)
     */
    function IsItemDataCached(item: ItemLocation.ItemLocationMixin): boolean;

    /**
     * Needs summary
     * @param itemInfo
     * @see https://wow.gamepedia.com/API_C_Item.IsItemDataCachedByID
     * @since 8.0.1 (2018-07-17)
     */
    function IsItemDataCachedByID(itemInfo: WoWAPI.Hyperlink | string | number): boolean;

    /**
     * Needs summary
     * @param itemInfo
     * @see https://wow.gamepedia.com/API_C_Item.IsItemKeystoneByID
     * @since 9.0.1 (2020-10-13)
     */
    function IsItemKeystoneByID(itemInfo: WoWAPI.Hyperlink | string | number): boolean;

    /**
     * Needs summary
     * @param item
     * @see https://wow.gamepedia.com/API_C_Item.IsItemDataCached
     * @since 8.0.1 (2018-07-17)
     */
    function IsLocked(item: ItemLocation.ItemLocationMixin): boolean;

    /**
     * Needs summary
     * @param item
     * @see https://wow.gamepedia.com/API_C_Item.IsLocked
     * @since 8.0.1 (2018-07-17)
     */
    function LockItem(item: ItemLocation.ItemLocationMixin): void;

    /**
     * Needs summary
     * @param itemGuid
     * @see https://wow.gamepedia.com/API_C_Item.LockItemByGUID
     * @since 8.0.1 (2018-07-17)
     */
    function LockItemByGUID(itemGuid: string): void;

    /**
     * Needs summary
     * @param item
     * @see https://wow.gamepedia.com/API_C_Item.RequestLoadItemData
     * @since 8.0.1 (2018-07-17)
     */
    function RequestLoadItemData(item: ItemLocation.ItemLocationMixin): void;

    /**
     * Needs summary
     * @param itemInfo
     * @see https://wow.gamepedia.com/API_C_Item.RequestLoadItemDataByID
     * @since 8.0.1 (2018-07-17)
     */
    function RequestLoadItemDataByID(itemInfo: WoWAPI.Hyperlink | string | number): void;

    /**
     * Needs summary
     * @param item
     * @see https://wow.gamepedia.com/API_C_Item.UnlockItem
     * @since 8.0.1 (2018-07-17)
     */
    function UnlockItem(item: ItemLocation.ItemLocationMixin): void;

    /**
     * Needs summary
     * @param itemGuid
     * @see https://wow.gamepedia.com/API_C_Item.UnlockItemByGUID
     * @since 8.3.0 (2020-01-14)
     */
    function UnlockItemByGUID(itemGuid: string): void;

}
