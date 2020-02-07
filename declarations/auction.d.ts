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
 * Retrieves the itemLink of one item in the current retrieved list of items from the Auction House
 *
 * @param type the type to query
 * @param index The index of the item in the list to retrieve info from (normally 1-50, inclusive)
 * @see https://wow.gamepedia.com/API_GetAuctionWowItemLink
 */
declare function GetAuctionWowItemLink(type: WoWAPI.AUCTION_TYPE, index: number): WoWAPI.AuctionLink;
