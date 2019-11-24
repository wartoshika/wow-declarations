/** @noSelfInFile */

/// <reference path="global.d.ts" />
/// <reference path="item.d.ts" />
/// <reference path="ui/ui.d.ts" />
/// <reference path="unit.d.ts" />

declare namespace WoWAPI {

    type CONTAINER_ID_BACKPACK = 0;
    type CONTAINER_ID_BAG_1 = 1;
    type CONTAINER_ID_BAG_2 = 2;
    type CONTAINER_ID_BAG_3 = 3;
    type CONTAINER_ID_BAG_4 = 4;
    type CONTAINER_ID_BANK_GLOBAL = -1;
    type CONTAINER_ID_BANK_BAG_1 = 5;
    type CONTAINER_ID_BANK_BAG_2 = 6;
    type CONTAINER_ID_BANK_BAG_3 = 7;
    type CONTAINER_ID_BANK_BAG_4 = 8;
    type CONTAINER_ID_BANK_BAG_5 = 9;
    type CONTAINER_ID_BANK_BAG_6 = 10;
    type CONTAINER_ID_BANK_BAG_7 = 11;
    type CONTAINER_ID_REAGENTBANK = -3;
    type CONTAINER_ID_BANK_BAG_WRAPPER = -4;

    type CONTAINER_ID_BANK = CONTAINER_ID_BANK_GLOBAL | CONTAINER_ID_BANK_BAG_1 | CONTAINER_ID_BANK_BAG_2 | CONTAINER_ID_BANK_BAG_3 |
        CONTAINER_ID_BANK_BAG_4 | CONTAINER_ID_BANK_BAG_5 | CONTAINER_ID_BANK_BAG_6 | CONTAINER_ID_BANK_BAG_7 | CONTAINER_ID_REAGENTBANK |
        CONTAINER_ID_BANK_BAG_WRAPPER;
    type CONTAINER_ID_BAG = CONTAINER_ID_BACKPACK | CONTAINER_ID_BAG_1 | CONTAINER_ID_BAG_2 | CONTAINER_ID_BAG_3 |
        CONTAINER_ID_BAG_4;
    type CONTAINER_ID = CONTAINER_ID_BAG | CONTAINER_ID_BANK;

    type BAG_TYPE_UNSPECIFIED = 0;
    type BAG_TYPE_QUIVER = 1;
    type BAG_TYPE_AMMO_POUCH = 2;
    type BAG_TYPE_SOUL_BAG = 4;
    type BAG_TYPE_LEATHERWORKING_BAG = 8;
    type BAG_TYPE_INSCRIPTION_BAG = 16;
    type BAG_TYPE_HERB_BAG = 32;
    type BAG_TYPE_ENCHANTING_BAG = 64;
    type BAG_TYPE_ENGINEERING_BAG = 128;
    type BAG_TYPE_KEYRING = 256;
    type BAG_TYPE_GEM_BAG = 512;
    type BAG_TYPE_MINING = 1024;
    type BAG_TYPE_UNKNOWN = 2048;
    type BAG_TYPE_VANTY_PETS = 4096;

    type INVENTORY_SLOT_CONTAINER_1 = 20;
    type INVENTORY_SLOT_CONTAINER_2 = 21;
    type INVENTORY_SLOT_CONTAINER_3 = 22;
    type INVENTORY_SLOT_CONTAINER_4 = 23;

    type INVENTORY_SLOT_CONTAINER = INVENTORY_SLOT_CONTAINER_1 | INVENTORY_SLOT_CONTAINER_2 |
        INVENTORY_SLOT_CONTAINER_3 | INVENTORY_SLOT_CONTAINER_4;

    type INVENTORY_SLOT_ID_CONTAINERS = INVENTORY_SLOT_CONTAINER_1 | INVENTORY_SLOT_CONTAINER_2 |
        INVENTORY_SLOT_CONTAINER_3 | INVENTORY_SLOT_CONTAINER_4;
    type INVENTORY_SLOT_ID = INVSLOT_AMMO | INVSLOT_HEAD | INVSLOT_NECK | INVSLOT_SHOULDER | INVSLOT_BODY | INVSLOT_CHEST |
        INVSLOT_WAIST | INVSLOT_LEGS | INVSLOT_FEET | INVSLOT_WRIST | INVSLOT_HAND | INVSLOT_FINGER1 | INVSLOT_FINGER2 |
        INVSLOT_TRINKET1 | INVSLOT_TRINKET2 | INVSLOT_BACK | INVSLOT_MAINHAND | INVSLOT_OFFHAND | INVSLOT_RANGED | INVSLOT_TABARD |
        INVENTORY_SLOT_ID_CONTAINERS;

    /**
     * all currently known bag types
     */
    type BAG_TYPE = BAG_TYPE_UNSPECIFIED | BAG_TYPE_QUIVER | BAG_TYPE_AMMO_POUCH | BAG_TYPE_SOUL_BAG | BAG_TYPE_LEATHERWORKING_BAG |
        BAG_TYPE_INSCRIPTION_BAG | BAG_TYPE_HERB_BAG | BAG_TYPE_ENCHANTING_BAG | BAG_TYPE_ENGINEERING_BAG | BAG_TYPE_KEYRING | BAG_TYPE_GEM_BAG |
        BAG_TYPE_MINING | BAG_TYPE_UNKNOWN | BAG_TYPE_VANTY_PETS;

}

/**
 * convert a bagId to an inventoryId
 *
 * @param bagId number of the bag ( between 1 and NUM_BAG_SLOTS + NUM_BANKBAGSLOTS ) to get the inventoryID for
 * @returns the bag's inventory ID used in functions like PutItemInBag(inventoryId) and GetInventoryWowItemLink("player",inventoryId)
 * @see https://wow.gamepedia.com/API_ContainerIDToInventoryID
 */
declare function ContainerIDToInventoryID(bagId: WoWAPI.CONTAINER_ID): number;

/**
 * bagName will contain the name of the specified bag if the bag number is 0-4 otherwise it will be nil, unless when the bank is opened,
 * in which case GetBagName(-1) (for the bank) is nil and GetBagName(6) will give the name of the first bank bag, GetBagName(7) the name of
 * the second bank bag, etc ...
 *
 * @param bagId number of the bag the item is in, 0 is your backpack, 1-4 are the four additional bags, numbered right to left.
 * Actually, for this method, this parameter is valid as API_ContainerIDToInventoryID
 * @returns the name of the specified bag (example "Green Woolen Bag")
 * @see https://wow.gamepedia.com/API_GetBagName
 */
declare function GetBagName(bagId: WoWAPI.CONTAINER_ID): string;

/**
 * Returns cooldown information for an item in your inventory
 *
 * @param bagId number of the bag the item is in, 0 is your backpack, 1-4 are the four additional bags
 * @param slot slot number of the bag item you want the info for
 * @returns startTime, duration, isEnabled
 * @see https://wow.gamepedia.com/API_GetContainerItemCooldown
 * @tupleReturn
 */
declare function GetContainerItemCooldown(bagId: WoWAPI.CONTAINER_ID, slot: number): [number, number, WoWAPI.Flag];

/**
 * Returns current and maximum durability of an item in the character's bags
 *
 * @param bagId Index of the bag slot the bag storing the item is in
 * @param slot Index of the bag slot containing the item to query durability of
 * @returns current, maximum
 * @see https://wow.gamepedia.com/API_GetContainerItemDurability
 * @tupleReturn
 */
declare function GetContainerItemDurability(bagId: WoWAPI.CONTAINER_ID, slot: number): [number, number];

/**
 * Returns the item id of the item in a particular container slot.
 *
 * @param bagId Index of the bag to query
 * @param slot Index of the slot within the bag to query; ascending from 1.
 * @returns item ID of the item held in the container slot, nil if there is no item in the container slot
 * @see https://wow.gamepedia.com/API_GetContainerItemID
 */
declare function GetContainerItemID(bagId: WoWAPI.CONTAINER_ID, slot: number): number | null;

/**
 * Get information about a specific item in your container
 *
 * @param bagId number of the bag the item is in, e.g. 0 for your backpack
 * @param slot index of the slot inside the bag to look up
 * @returns texture, itemCount, locked, quality, readable, lootable, itemLink, isFiltered, noValue, itemID
 * @see https://wow.gamepedia.com/API_GetContainerItemInfo
 * @tupleReturn
 */
// tslint:disable-next-line max-line-length
declare function GetContainerItemInfo(bagId: WoWAPI.CONTAINER_ID, slot: number): [WoWAPI.TexturePath, number, boolean, WoWAPI.ITEM_QUALITY, boolean, boolean, WoWAPI.ItemLink, boolean, boolean, number];

/**
 * Returns a link of the object located in the specified slot of a specified bag
 *
 * @param bagId number of the bag the item is in, e.g. 0 for your backpack
 * @param slot Slot index within the specified bag, ascending from 1. Slot 1 is typically the leftmost topmost slot
 * @returns a chat link for the object in the specified bag slot; nil if there is no such object. This is typically, but not always an WoWAPI.ItemLink.
 * @see https://wow.gamepedia.com/API_GetContainerWowItemLink
 */
declare function GetContainerWowItemLink(bagId: WoWAPI.CONTAINER_ID, slot: number): WoWAPI.ItemLink;

/**
 * Returns the total number of slots in the bag specified by the index
 *
 * @param bagId the slot containing the bag, e.g. 0 for backpack, etc
 * @returns the number of slots in the specified bag, or 0 if there is no bag in the given slot
 * @see https://wow.gamepedia.com/API_GetContainerNumSlots
 */
declare function GetContainerNumSlots(bagId: WoWAPI.CONTAINER_ID): number;

/**
 * Returns whether the item in the slot is a quest item
 *
 * @param bagId Index of the bag to query
 * @param slot Index of the slot within the bag (ascending from 1) to query
 * @returns isQuestItem, questId, isActive
 * @see https://wow.gamepedia.com/API_GetContainerItemQuestInfo
 * @tupleReturn
 */
declare function GetContainerItemQuestInfo(bagId: WoWAPI.CONTAINER_ID, slot: number): [WoWAPI.Flag, number | null, WoWAPI.Flag];

/**
 * Returns the total number of free slots in the bag an the type of items that can go into it specified by the index
 *
 * @param bagId the slot containing the bag, e.g. 0 for backpack, etc.
 * @returns numberOfFreeSlots, BagType
 * @see https://wow.gamepedia.com/API_GetContainerNumFreeSlots
 * @tupleReturn
 */
declare function GetContainerNumFreeSlots(bagId: WoWAPI.CONTAINER_ID): [number, WoWAPI.BAG_TYPE];

/**
 * Open all bag frames
 *
 * @param frame The frame that is responsible for opening the bags. Doesn't affect the operation of this function but sets an internal
 * variable that affects other container frame functions. Can be nil
 * @see https://wow.gamepedia.com/API_OpenAllBags
 */
declare function OpenAllBags(frame?: WoWAPI.Frame): void;

/**
 * Closes all open bags
 *
 * @see https://wow.gamepedia.com/API_CloseAllBags
 */
declare function CloseAllBags(): void;

/**
 * Picks up the bag from the specified slot, placing it in the cursor
 *
 * @param inventorySlotId the slot containing the bag.
 * @see https://wow.gamepedia.com/API_PickupBagFromSlot
 */
declare function PickupBagFromSlot(inventorySlotId: WoWAPI.INVENTORY_SLOT_ID_CONTAINERS): void;

/**
 * The function behaves differently depending on what is currently on the cursor:
 * - If the cursor currently has nothing, calling this will pick up an item from your backpack.
 * - If the cursor currently contains an item (check with CursorHasItem()), calling this will place the item currently on the cursor
 * into the specified bag slot. If there is already an item in that bag slot, the two items will be exchanged.
 * - If the cursor is set to a spell (typically enchanting and poisons, check with SpellIsTargeting()), calling this specifies that
 * you want to cast the spell on the item in that bag slot.
 *
 * @param bagId id of the bag the slot is located in.
 * @param slot slot inside the bag (top left slot is 1, slot to the right of it is 2).
 * @event ITEM_LOCK_CHANGED
 * @see https://wow.gamepedia.com/API_PickupContainerItem
 */
declare function PickupContainerItem(bagId: WoWAPI.CONTAINER_ID, slot: number): void;

/**
 * Places the item currently on the cursor into the player's backpack otherwise it has no effect. If there is already a partial stack of
 * the item in the backpack, it will attempt to stack them together
 *
 * @see https://wow.gamepedia.com/API_PutItemInBackpack
 */
declare function PutItemInBackpack(): void;

/**
 * Puts the item on the cursor into the specified bag slot on the main bar, if it's a bag. Otherwise, attempts to place the item inside the
 * bag in that slot. Note that to place an item in the backpack, you must use PutItemInBackpack.
 *
 * @param inventorySlotId Inventory slot id containing the bag in which you wish to put the item. Values 20 to 23 correspond to the player's
 * bag slots, right-to-left from the first bag after the backpack
 * @see https://wow.gamepedia.com/API_PutItemInBag
 */
declare function PutItemInBag(inventorySlotId: WoWAPI.INVENTORY_SLOT_ID_CONTAINERS): void;

/**
 * Picks up part of a stack of items from a container, placing them on the cursor
 *
 * @param bagId id of the bag the slot is located in
 * @param slot slot inside the bag (top left slot is 1, slot to the right of it is 2).
 * @param count Quantity to pick up
 * @see https://wow.gamepedia.com/API_SplitContainerItem
 */
declare function SplitContainerItem(bagId: WoWAPI.CONTAINER_ID, slot: number, count: number): void;

/**
 * Toggles your backpage open/closed
 *
 * @see https://wow.gamepedia.com/API_ToggleBackpack
 */
declare function ToggleBackpack(): void;

/**
 * Opens or closes the specified bag
 *
 * @param bagId the bagId you want to toggle open or close
 */
declare function ToggleBag(bagId: WoWAPI.CONTAINER_ID): void;

/**
 * Use an item from a container. If Merchant window is open, this will sell the item
 *
 * @param bagId The bag id, where the item to use is located
 * @param slot The slot in the bag, where the item to use is located
 * @param target unit the item should be used on. If omitted, defaults to "target" if a the item must target someone.
 * @param reagentBankAccessible This indicates, for cases where no target is given, if the item reagent bank is accessible (so bank frame
 * is shown and switched to the reagent bank tab).
 * @see https://wow.gamepedia.com/API_UseContainerItem
 * @protected PROTECTED (situational)
 */
declare function UseContainerItem(bagId: WoWAPI.CONTAINER_ID, slot: number, target?: WoWAPI.UnitId, reagentBankAccessible?: boolean): void;
