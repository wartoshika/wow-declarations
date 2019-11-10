/** @noSelfInFile */

declare namespace WoWAPI {
    type CursorInfoType = "item" | "spell" | "macro" | "mount" | "money" | "merchant" | "battlepet";
}

/**
 * Automatically equips the item currently held on the cursor
 * @see https://wow.gamepedia.com/API_AutoEquipCursorItem
 */
declare function AutoEquipCursorItem(): void;

/**
 * Clears the in-game cursor, returning the object held to its original position (equivalent to right-clicking while holding something on the cursor).
 * @see https://wow.gamepedia.com/API_ClearCursor
 */
declare function ClearCursor(): void;

/**
 * Determines if the item in the cursor can be equipped in the specified inventory slot. Always returns 1 for bank bag slots
 * @param inventorySlot Inventory slot to query
 * @returns 1 if the thing currently on the cursor can go into the specified slot, nil otherwise
 * @see https://wow.gamepedia.com/API_CursorCanGoInSlot
 */
declare function CursorCanGoInSlot(inventorySlot: WoWAPI.INVENTORY_SLOT_ID): WoWAPI.Flag;

/**
 * Returns 1 if the cursor currently holds an item, nil otherwise
 * @see https://wow.gamepedia.com/API_CursorHasItem
 */
declare function CursorHasItem(): boolean;

/**
 * Returns true if the cursor currently holds money
 */
declare function CursorHasMoney(): boolean;

/**
 * Returns true if the cursor currently holds a spell.
 */
declare function CursorHasSpell(): boolean;

/**
 * Destroys the item currently held by the cursor
 * @description This does not deselect the item, this destroys it. Use ClearCursor to drop an item from the cursor without destroying it.
 * @see https://wow.gamepedia.com/API_DeleteCursorItem
 */
declare function DeleteCursorItem(): void;

/**
 * Drops the money currently attached to your cursor back into your bag
 * @see https://wow.gamepedia.com/API_DropCursorMoney
 */
declare function DropCursorMoney(): void;

/**
 * Drops an item from the cursor onto the specified target. Can be used to initiate a trade session (though see Trade functions) or feeding pets
 * @param unit Unit to which you want to give the item on the cursor
 * @see https://wow.gamepedia.com/API_DropItemOnUnit
 */
declare function DropItemOnUnit(unit: WoWAPI.UnitId): void;

/**
 * Equips the currently picked up item to a specific inventory slot
 * @param inventorySlot The slot ID to place the item into. Use GetInventorySlotInfo(slotname) to resolve an inventory slot name to its ID
 * @see https://wow.gamepedia.com/API_EquipCursorItem
 */
declare function EquipCursorItem(inventorySlot: WoWAPI.INVENTORY_SLOT_ID): void;

/**
 * Returns information about what the mouse cursor is holding
 * @see https://wow.gamepedia.com/API_GetCursorInfo
 * @tupleReturn
 */
declare function GetCursorInfo(): [WoWAPI.CursorInfoType, ...WoWAPI.Unknown[]];

/**
 * @returns **item**
 * - **itemId**: Item ID of the item on the cursor
 * - **itemLink**: ItemLink of the item on the cursor
 * @tupleReturn
 */
declare function GetCursorInfo(): ["item", number, WoWAPI.ItemLink];

/**
 * @returns **spell**
 * - **spellIndex**: The index of the spell in the spell book
 * - **bookType**: The spell book id. Only works for player spells, so this always returns BOOKTYPE_SPELL
 * - **spellId**: Spell ID of the spell on the cursor
 * @tupleReturn
 */
declare function GetCursorInfo(): ["spell", number, string, number];

/**
 * @returns **macro**
 * - **index**: The index of the macro on the cursor
 * @tupleReturn
 */
declare function GetCursorInfo(): ["macro", number];

/**
 * @returns **money**
 * - **amount**: The amount of money in copper
 * @tupleReturn
 */
declare function GetCursorInfo(): ["money", number];

/**
 * @returns **mount**
 * - **useless_index**: this index is not useful since no other API receives it as a parameter
 * - **C_MountJournal index**: index in the C_MountJournal (used by C_MountJournal API functions). These indexes varies with game locale
 * @tupleReturn
 */
declare function GetCursorInfo(): ["mount", number, number];

/**
 * @returns **merchant**
 * - **index**: The index of the merchant item
 * @tupleReturn
 */
declare function GetCursorInfo(): ["merchant", number];

/**
 * @returns **battlepet**
 * - **petGUID**: GUID of a battle pet in your collection
 * @tupleReturn
 */
declare function GetCursorInfo(): ["battlepet", WoWAPI.Guid];

/**
 * Returns the amount of copper held on the cursor
 * @see https://wow.gamepedia.com/API_GetCursorMoney
 * @tupleReturn
 */
declare function GetCursorMoney(): number;

/**
 * Returns the cursor's position on the screen
 * @returns **position**
 * - x coordinate unaffected by UI scale; 0 at the left edge of the screen.
 * - y coordinate unaffected by UI scale; 0 at the bottom edge of the screen.
 * @description Returns scale-independent coordinates similar to Cursor:GetCenter() if 'Cursor' was a valid frame not affected by scaling.
 * Assuming UIParent spans the entire screen, you can convert these coordinates to UIParent offsets by dividing by its effective scale.
 * The following snippet positions a small texture at the cursor's location.
 * @see https://wow.gamepedia.com/API_GetCursorPosition
 * @tupleReturn
 */
declare function GetCursorPosition(): [number, number];

/**
 * Takes the cursor out of repair mode
 * @see https://wow.gamepedia.com/API_HideRepairCursor
 */
declare function HideRepairCursor(): void;

/**
 * Lets you know if your cursor is in repair mode. When your cursor is in repair mode, you can click on equipped items as well as items in your
 * inventory to repair them
 * @see https://wow.gamepedia.com/API_InRepairMode
 */
declare function InRepairMode(): boolean;

/**
 * Pick up an action for drag-and-drop
 * @param actionSlot The action slot to pick the action up from
 * @description If the slot is empty, nothing happens, otherwise the action from the slot is placed on the cursor, and the slot is filled with
 * whatever action was currently being drag-and-dropped (The slot is emptied if the cursor was empty). If you wish to empty the cursor without
 * putting the item into another slot, try ClearCursor.
 * @requires NO_COMBAT
 * @see https://wow.gamepedia.com/API_PickupAction
 */
declare function PickupAction(actionSlot: ActionBarSlotId): void;

/**
 * Picks up the bag from the specified slot, placing it in the cursor
 * @param inventorySlot the slot containing the bag
 * @description Valid slot numbers are 20-23, numbered from left to right starting after the backpack. inventoryID ,the result of
 * ContainerIDtoInventoryID(BagID), can help to compute the slot number and bag numbers can be viewed in the InventorySlotID page
 * @see https://wow.gamepedia.com/API_PickupBagFromSlot
 */
declare function PickupBagFromSlot(inventorySlot: WoWAPI.INVENTORY_SLOT_CONTAINER): void;

/**
 * Wildcard function usually called when a player left clicks on a slot in their bags. Functionality includes picking up the item from a specific
 * bag slot, putting the item into a specific bag slot, and applying enchants (including poisons and sharpening stones) to the item in a specific
 * bag slot, except if one of the Modifier Keys is pressed
 * @param bagId id of the bag the slot is located in
 * @param slot slot inside the bag (top left slot is 1, slot to the right of it is 2)
 * @description The function behaves differently depending on what is currently on the cursor
 * - If the cursor currently has nothing, calling this will pick up an item from your backpack
 * - If the cursor currently contains an item (check with CursorHasItem()), calling this will place the item currently on the cursor into the
 * specified bag slot. If there is already an item in that bag slot, the two items will be exchanged
 * - If the cursor is set to a spell (typically enchanting and poisons, check with SpellIsTargeting()), calling this specifies that you want to
 * cast the spell on the item in that bag slot
 * - Trying to pickup the same item twice in the same "time tick" does not work (client seems to flag the item as "locked" and waits for the server
 * to sync). This is only a problem if you might move a single item multiple times (i.e., if you are changing your character's equipped armor, you
 * are not likely to move a single piece of armor more than once). If you might move an object multiple times in rapid succession, you can check the
 * item's 'locked' flag by calling GetContainerItemInfo. If you want to do this, you should leverage OnUpdate to help you. Avoid constantly checking
 * the lock status inside a tight loop. If you do, you risk getting into a race condition. Once the repeat loop starts running, the client will not
 * get any communication from the server until it finishes. However, it will not finish until the server tells it that the item is unlocked.
 * Here is some sample code that illustrates the problem
 * @see https://wow.gamepedia.com/API_PickupContainerItem
 */
declare function PickupContainerItem(bagId: WoWAPI.CONTAINER_ID, slot: number): void;

/**
 * "Picks up" an item from the player's worn inventory. This appears to be a kind of catch-all "pick up/activate" function
 * @param inventorySlot the slot ID of the worn inventory slot
 * @description
 * - If the cursor is empty, then it will attempt to pick up the item in the slotId
 * - If the cursor has an item, then it will attempt to equip the item to the slotId and place the previous slotId item (if any) where the
 * item on cursor orginated
 * - If the cursor is in repair or spell-casting mode, it will attempt the action on the slotId
 * - You can use GetInventorySlotInfo to get the slotId
 */
declare function PickupInventoryItem(inventorySlot: WoWAPI.INVENTORY_SLOT_ID): void;

/**
 * Place the item on the cursor
 * @param itemIdentifier
 * - **itemId**: The numeric ID of the item. ie. 12345
 * - **itemString**: The full item ID in string format, e.g. "item:12345:0:0:0:0:0:0:0"
 * - **itemName**: The Name of the Item, ex: "Hearthstone"
 * - **itemLink**: The itemLink, when Shift-Clicking items
 * @see https://wow.gamepedia.com/API_PickupItem
 */
declare function PickupItem(itemIdentifier: number | string | WoWAPI.ItemLink): void;

/**
 * Pick up a macro from the macro frame and place it on the cursor
 * @param macroNameOrId the name of the macro or the position of the macro in the macro frame
 * @requires NO_COMBAT
 * @see https://wow.gamepedia.com/API_PickupMacro
 */
declare function PickupMacro(macroNameOrId: number | string): void;

/**
 * Places the specified merchant item on the cursor
 * @param merchantIndex The index of the item in the merchant's inventory
 * @description Interesting thing is this function can be used to drop an item to the merchant as well. This will happen if the cursor
 * already holds an item from player's bag
 * @see https://wow.gamepedia.com/API_PickupMerchantItem
 */
declare function PickupMerchantItem(merchantIndex: number): void;

/**
 * Pick up a pet action for drag-and-drop
 * @param petActionSlot The pet action slot to pick the action up from (1-10).
 * @description If the slot is empty, nothing happens, otherwise the action from the slot is placed on the cursor, and the slot is filled with
 * whatever action was currently being drag-and-dropped (The slot is emptied if the cursor was empty). Be very careful about picking up the pet
 * control actions (Attack/Follow/Stay/Aggressive/Defensive/Passive), because if you lose them, there's no way to get them back
 * @requires NO_COMBAT
 * @see https://wow.gamepedia.com/API_PickupPetAction
 */
declare function PickupPetAction(petActionSlot: number): void;

/**
 * Picks up an amount of money from the player's bags, placing it on the cursor
 * @param copper The amount of money, in copper, to place on the cursor
 * @see https://wow.gamepedia.com/API_PickupPlayerMoney
 */
declare function PickupPlayerMoney(copper: number): void;

/**
 * Puts the specified spell onto the mouse cursor
 * @param spell ID of the spell to pick up
 * @requires NO_COMBAT
 * @see https://wow.gamepedia.com/API_PickupSpell
 */
declare function PickupSpell(spellId: number): void;

/**
 * Attaches a pet in your stable to your cursor. 1 for the pet in the slot on the left, and 2 for the pet in the slot on the right
 * @param slotDirection 1 for left, 2 for right
 * @see https://wow.gamepedia.com/API_PickupStablePet
 */
declare function PickupStablePet(slotDirection: 1 | 2): void;

/**
 * Picks up an amount of money from the player's trading offer, placing it on the cursor
 * @param copper amount of money, in copper, to pick up
 * @see https://wow.gamepedia.com/API_PickupTradeMoney
 */
declare function PickupTradeMoney(copper: number): void;

/**
 * Place the drag-and-drop item as an action
 * @param actionSlot The action slot to place the action into.
 * @see https://wow.gamepedia.com/API_PlaceAction
 */
declare function PlaceAction(actionSlot: number): void;

/**
 * Places the item currently on the cursor into the player's backpack otherwise it has no effect. If there is already a partial stack of the
 * item in the backpack, it will attempt to stack them together
 * @see https://wow.gamepedia.com/API_PutItemInBackpack
 */
declare function PutItemInBackpack(): void;

/**
 * Puts the item on the cursor into the specified bag slot on the main bar, if it's a bag. Otherwise, attempts to place the item inside the bag
 * in that slot. Note that to place an item in the backpack, you must use PutItemInBackpack
 * @param slotId Inventory slot id containing the bag in which you wish to put the item. Values 20 to 23 correspond to the player's bag slots,
 * right-to-left from the first bag after the backpack
 * @see https://wow.gamepedia.com/API_PutItemInBag
 */
declare function PutItemInBag(slotId: number): void;

/**
 * Resets mouse cursor
 * @description Function resets mouse cursor into its default shape, if it has been previously altered by SetCursor(cursor).
 * Calling ResetCursor() is equivalent to calling SetCursor(nil)
 * @see https://wow.gamepedia.com/API_ResetCursor
 */
declare function ResetCursor(): void;

/**
 * Changes the current cursor graphic
 * @param cursor cursor to switch to; either a built-in cursor identifier (like "ATTACK_CURSOR"), path to a cursor texture
 * (e.g. "Interface/Cursor/Taxi"), or nil to reset to a default cursor
 * @description If the cursor is hovering over WorldFrame, the SetCursor function will have no effect - cursor is locked to reflect what
 * the player is currently pointing at. If called with an invalid argument, the cursor is replaced by a black square
 * @see https://wow.gamepedia.com/API_SetCursor
 */
declare function SetCursor(cursor: string | WoWAPI.TexturePath | null): boolean;

/**
 * unknown
 * @param index unknown
 * @param slot unknown
 */
declare function ShowContainerSellCursor(index: number, slot: number): WoWAPI.Unknown;

/**
 * Change the cursor to the magnifying glass inventory inspection cursor
 * @see https://wow.gamepedia.com/API_ShowInspectCursor
 */
declare function ShowInspectCursor(): void;

/**
 * unknown
 * @param args unknown
 */
declare function ShowInventorySellCursor(...args: WoWAPI.Unknown[]): WoWAPI.Unknown;

/**
 * Puts the cursor in repair mode
 * @see https://wow.gamepedia.com/API_ShowRepairCursor
 */
declare function ShowRepairCursor(): void;

/**
 * Picks up part of a stack of items from a container, placing them on the cursor
 * @param bagId id of the bag the slot is located in
 * @param slot slot inside the bag (top left slot is 1, slot to the right of it is 2)
 * @param count Quantity to pick up
 * @description This function always puts the requested item(s) on the cursor (unlike PickupContainerItem() which can pick up items,
 * place items, or cast spells on items based on what's already on the cursor). Passing a larger count than is in the requested bag and slot
 * will pick up nothing
 * @see https://wow.gamepedia.com/API_SplitContainerItem
 */
declare function SplitContainerItem(bagId: WoWAPI.CONTAINER_ID, slot: number, count: number): void;
