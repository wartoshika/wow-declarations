/** @noSelfInFile */

/// <reference path="global.d.ts" />
/// <reference path="item.d.ts" />

declare namespace WoWAPI {

    type AUCTION_RUNTIME_12H = 1;
    type AUCTION_RUNTIME_24H = 2;
    type AUCTION_RUNTIME_48H = 3;
    type AUCTION_RUNTIME = AUCTION_RUNTIME_12H | AUCTION_RUNTIME_24H | AUCTION_RUNTIME_48H;

    type AUCTION_SALE_STATUS_UNSOLD = 0;
    type AUCTION_SALE_STATUS_SOLD = 1;
    type AUCTION_SALE_STATUS = AUCTION_SALE_STATUS_UNSOLD | AUCTION_SALE_STATUS_SOLD;

    /**
     * short (less than 30 minutes)
     */
    type AUCTION_TIMELEFT_SHORT = 1;

    /**
     * medium (30 minutes - 2 hours)
     */
    type AUCTION_TIMELEFT_MEDIUM = 2;

    /**
     * long (2 - 12 hours)
     */
    type AUCTION_TIMELEFT_LONG = 3;

    /**
     * very long (more than 12 hours)
     */
    type AUCTION_TIMELEFT_VERY_LONG = 4;

    /**
     * all currently known time left values
     */
    type AUCTION_TIMELEFT = AUCTION_TIMELEFT_SHORT | AUCTION_TIMELEFT_MEDIUM | AUCTION_TIMELEFT_LONG | AUCTION_TIMELEFT_VERY_LONG;

    /**
     * An item up for auction, the "Browse" tab in the dialog
     */
    type AUCTION_TYPE_LIST = "list";

    /**
     * An item the player has bid on, the "Bids" tab in the dialog
     */
    type AUCTION_TYPE_BIDDER = "bidder";

    /**
     * An item the player has up for auction, the "Auctions" tab in the dialog
     */
    type AUCTION_TYPE_OWNER = "owner";

    /**
     * the currently known auction types
     */
    type AUCTION_TYPE = AUCTION_TYPE_LIST | AUCTION_TYPE_BIDDER | AUCTION_TYPE_OWNER;

    /**
     * The itemLink of one item in the current retrieved list of items from the Auction House
     */
    type AuctionLink = Hyperlink;
}

/**
 * Returns the required deposit for the current selling item given the specified duration (1=12h, 2=24h, 3=48h).
 *
 * @param runTime The time to run the auction
 * @param stackSize the stack size
 * @param numStacks the amount of stacks to auction
 * @see https://wow.gamepedia.com/API_CalculateAuctionDeposit
 */
declare function CalculateAuctionDeposit(runTime: WoWAPI.AUCTION_RUNTIME, stackSize: number, numStacks: number): number;

/**
 * Returns 1 if auction can be canceled
 *
 * @param index the index of the auction
 * @see https://wow.gamepedia.com/API_CanCancelAuction
 */
declare function CanCancelAuction(index: number): WoWAPI.Flag;

/**
 * Stops the process of listing multiple stacks of an item on the auction house
 *
 * @see https://wow.gamepedia.com/API_CancelSell
 */
declare function CancelSell(): void;

/**
 * Determine if a new auction house query can be sent (via QueryAuctionItems())
 *
 * @returns canQuery, canQueryAll
 * @see https://wow.gamepedia.com/API_CanSendAuctionQuery
 * @tupleReturn
 */
declare function CanSendAuctionQuery(): [boolean, boolean];

/**
 * Cancel the specified auction (on the "owner" list).
 *
 * @param index the auction index to cancel
 * @see https://wow.gamepedia.com/API_CancelAuction
 */
declare function CancelAuction(index: number): WoWAPI.Unknown;

/**
 * In the Auction house, under 'auctions', 'create auction', there is an 'auction item' slot. This function lets you 'drop' your currently
 * 'picked up' item into it. AFAIK It works as long as the 'auction' window is up (the one you get by clicking on the auctioneer).
 *
 * @param args Unknown
 * @see https://wow.gamepedia.com/API_ClickAuctionSellItemButton
 */
declare function ClickAuctionSellItemButton(...args: WoWAPI.Unknown[]): WoWAPI.Unknown;

/**
 * Will close the AuctionFrame if opened
 *
 * @see https://wow.gamepedia.com/API_CloseAuctionHouse
 */
declare function CloseAuctionHouse(): void;

/**
 * Retrieves info about one Battle Pet in the current retrieved list of Battle Pets from the Auction House
 *
 * @param type the type to query
 * @param index The index of the item in the list to retrieve info from (normally 1-50, inclusive).
 * @returns creatureID, displayID
 * @see https://wow.gamepedia.com/API_GetAuctionItemBattlePetInfo
 * @since 5.0.4
 * @tupleReturn
 */
declare function GetAuctionItemBattlePetInfo(type: WoWAPI.AUCTION_TYPE, index: number): [number, number];

/**
 * Retrieves info about one item in the current retrieved list of items from the Auction House
 *
 * @param type the type to query
 * @param index The index of the item in the list to retrieve info from (normally 1-50, inclusive)
 * @returns name, texture, count, quality, canUse, level, levelColHeader, minBid, minIncrement, buyoutPrice,
 * bidAmount, highBidder, bidderFullName, owner, ownerFullName, saleStatus, itemId, hasAllInfo
 * @see https://wow.gamepedia.com/API_GetAuctionItemInfo
 * @tupleReturn
 */
// tslint:disable-next-line max-line-length
declare function GetAuctionItemInfo(type: WoWAPI.AUCTION_TYPE, index: number): [string, WoWAPI.TexturePath, number, WoWAPI.ITEM_QUALITY, boolean, number, string, number, number, number, number, boolean, string, string, string, WoWAPI.AUCTION_SALE_STATUS, number, WoWAPI.Unknown];

/**
 * Retrieves the itemLink of one item in the current retrieved list of items from the Auction House
 *
 * @param type the type to query
 * @param index The index of the item in the list to retrieve info from (normally 1-50, inclusive)
 * @see https://wow.gamepedia.com/API_GetAuctionWowItemLink
 */
declare function GetAuctionWowItemLink(type: WoWAPI.AUCTION_TYPE, index: number): WoWAPI.AuctionLink;

/**
 * Gets a list of the sub-classes for an Auction House item class
 *
 * @param categoryIndex Index of the major category to look into, ascending from 1 to #GetAuctionItemClasses
 * @see https://wow.gamepedia.com/API_GetAuctionItemSubClasses
 * @returns subClass1, subClass2, subClass3, ...
 * @tupleReturn
 */
declare function GetAuctionItemSubClasses(categoryIndex: number): [...string[]];

/**
 * Retrieves the time left for a item in the Auction House
 *
 * @param type the type to query
 * @param index The index of the item in the list to retrieve info from (normally 1-50, inclusive)
 * @see https://wow.gamepedia.com/API_GetAuctionItemTimeLeft
 */
declare function GetAuctionItemTimeLeft(type: WoWAPI.AUCTION_TYPE, index: number): WoWAPI.AUCTION_TIMELEFT;

/**
 * get information about the currently displayed auction item
 *
 * @returns name, texture, count, quality, canUse, price, pricePerUnit, stackCount, totalCount
 * @see https://wow.gamepedia.com/API_GetAuctionSellItemInfo
 * @tupleReturn
 */
declare function GetAuctionSellItemInfo(): [string, WoWAPI.TexturePath, number, WoWAPI.ITEM_QUALITY, number, number, number, number];

/**
 * Unknown
 *
 * @param args Unknown
 * @see https://wow.gamepedia.com/API_GetAuctionSort
 */
declare function GetAuctionSort(...args: WoWAPI.Unknown[]): WoWAPI.Unknown;

// @todo: write declarations for GetBidderAuctionItems and following
