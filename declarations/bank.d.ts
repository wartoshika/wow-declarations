/** @noSelfInFile */

/**
 * Map a bank item button or bag to an inventory slot button for use in inventory functions
 * @param buttodId bank item/bag ID.
 * @param isBag 1 if buttonID is a bag, nil otherwise. Same result as ContainerIDToInventoryID, except this one only works for
 * bank bags and is more awkward to use
 * @see https://wow.gamepedia.com/API_BankButtonIDToInvSlotID
 */
declare function BankButtonIDToInvSlotID(buttodId: number, isBag: WoWAPI.Flag): WoWAPI.INVENTORY_SLOT_ID;

/**
 * Will Close the Bank Frame if opened
 * @see https://wow.gamepedia.com/API_CloseBankFrame
 */
declare function CloseBankFrame(): void;

/**
 * Returns the price of a particular bank slot
 * @param numSlot Number of slots already purchased
 * @return Price of the next bank slot in copper
 * @see https://wow.gamepedia.com/API_GetBankSlotCost
 */
declare function GetBankSlotCost(numSlot: number): number;

/**
 * Returns information about the number of purchased bank bag slots
 * @see https://wow.gamepedia.com/API_GetNumBankSlots
 * @tupleReturn
 */
declare function GetNumBankSlots(): [number, WoWAPI.Flag];
