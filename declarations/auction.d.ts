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
    type AUCTION_TIMELEFT_SHORT = 0;

    /**
     * medium (30 minutes - 2 hours)
     */
    type AUCTION_TIMELEFT_MEDIUM = 1;

    /**
     * long (2 - 12 hours)
     */
    type AUCTION_TIMELEFT_LONG = 2;

    /**
     * very long (more than 12 hours)
     */
    type AUCTION_TIMELEFT_VERY_LONG = 3;

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

    type AUCTION_HOUSE_FILTER_CATEGORY_UNCATEGORIZED = 0;
    type AUCTION_HOUSE_FILTER_CATEGORY_EQUIPMENT = 1;
    type AUCTION_HOUSE_FILTER_CATEGORY_RARITY = 2;
    type AUCTION_HOUSE_FILTER_CATEGORY = AUCTION_HOUSE_FILTER_CATEGORY_UNCATEGORIZED |
        AUCTION_HOUSE_FILTER_CATEGORY_EQUIPMENT | AUCTION_HOUSE_FILTER_CATEGORY_RARITY;

    type AUCTION_HOUSE_FILTER_UNCOLLECTED_ONLY = 0;
    type AUCTION_HOUSE_FILTER_USABLE_ONLY = 1;
    type AUCTION_HOUSE_FILTER_UPGRADES_ONLY = 2;
    type AUCTION_HOUSE_FILTER_EXACT_MATCH = 3;
    type AUCTION_HOUSE_FILTER_POOR_QUALITY = 4;
    type AUCTION_HOUSE_FILTER_COMMON_QUALITY = 5;
    type AUCTION_HOUSE_FILTER_UNCOMMON_QUALITY = 6;
    type AUCTION_HOUSE_FILTER_RARE_QUALITY = 7;
    type AUCTION_HOUSE_FILTER_EPIC_QUALITY = 8;
    type AUCTION_HOUSE_FILTER_LEGENDARY_QUALITY = 9;
    type AUCTION_HOUSE_FILTER_ARTIFACT_QUALITY = 10;
    type AUCTION_HOUSE_FILTER = AUCTION_HOUSE_FILTER_UNCOLLECTED_ONLY |
        AUCTION_HOUSE_FILTER_USABLE_ONLY |
        AUCTION_HOUSE_FILTER_UPGRADES_ONLY |
        AUCTION_HOUSE_FILTER_EXACT_MATCH |
        AUCTION_HOUSE_FILTER_POOR_QUALITY |
        AUCTION_HOUSE_FILTER_COMMON_QUALITY |
        AUCTION_HOUSE_FILTER_UNCOMMON_QUALITY |
        AUCTION_HOUSE_FILTER_RARE_QUALITY |
        AUCTION_HOUSE_FILTER_EPIC_QUALITY |
        AUCTION_HOUSE_FILTER_LEGENDARY_QUALITY |
        AUCTION_HOUSE_FILTER_ARTIFACT_QUALITY;

    type AUCTION_HOUSE_SORT_ORDER_PRICE = 0;
    type AUCTION_HOUSE_SORT_ORDER_NAME = 1;
    type AUCTION_HOUSE_SORT_ORDER_LEVEL = 2;
    type AUCTION_HOUSE_SORT_ORDER_BID = 3;
    type AUCTION_HOUSE_SORT_ORDER_BUYOUT = 4;
    type AUCTION_HOUSE_SORT_ORDER = AUCTION_HOUSE_SORT_ORDER_PRICE | AUCTION_HOUSE_SORT_ORDER_NAME | AUCTION_HOUSE_SORT_ORDER_LEVEL |
        AUCTION_HOUSE_SORT_ORDER_BID | AUCTION_HOUSE_SORT_ORDER_BUYOUT;

    type ITEM_COMMODITY_STATUS_UNKNOWN = 0;
    type ITEM_COMMODITY_STATUS_ITEM = 1;
    type ITEM_COMMODITY_STATUS_COMMODITY = 2;
    type ITEM_COMMODITY_STATUS = ITEM_COMMODITY_STATUS_UNKNOWN | ITEM_COMMODITY_STATUS_ITEM | ITEM_COMMODITY_STATUS_COMMODITY;

    interface AuctionHouseBrowseQuery {
        searchString: string;
        sorts: AuctionHouseSortType[];
        minLevel?: number;
        maxLevel?: number;
        filters?: AUCTION_HOUSE_FILTER[];
        itemClassFilters?: AuctionHouseItemClassFilter[];
    }

    interface AuctionHouseFilterGroup {
        category: AUCTION_HOUSE_FILTER_CATEGORY;
        filters: AUCTION_HOUSE_FILTER[];
    }

    interface AuctionHouseItemClassFilter {
        classID: number;
        subClassID?: number;
        inventoryType?: number;
    }

    interface AuctionHouseSortType {
        sortOrder: AUCTION_HOUSE_SORT_ORDER;
        reverseSort: boolean;
    }

    interface BidInfo {
        auctionID: number;
        itemKey: ItemKey;
        itemLink?: ItemLink;
        timeLeft: AUCTION_TIMELEFT;
        bidAmount?: number;
        buyoutAmount?: number;
        bidder?: string;
    }

    interface BrowseResultInfo {
        itemKey: ItemKey;
        appearanceLink?: string;
        totalQuantity: number;
        minPrice: number;
        containsOwnerItem: boolean;
    }

    interface CommoditySearchResultInfo {
        itemID: number;
        quantity: number;
        unitPrice: number;
        auctionID: number;
        owners: string[];
        timeLeftSeconds?: number;
        numOwnerItems: number;
        containsOwnerItem: boolean;
        containsAccountItem: boolean;
    }

    interface ItemSearchResultInfo {
        itemKey: ItemKey;
        owners: string[];
        timeLeft: AUCTION_TIMELEFT;
        auctionID: number;
        quantity: number;
        itemLink: ItemLink;
        containsOwnerItem: boolean;
        containsAccountItem: boolean;
        containsSocketedItem: boolean;
        bidder?: string;
        minBid?: number;
        bidAmount?: number;
        buyoutAmount?: number;
        timeLeftSeconds?: number;
    }

    interface OwnedAutionInfo {
        auctionID: number;
        itemKey: ItemKey;
        itemLink: ItemLink;
        status: AUCTION_SALE_STATUS;
        quantity: number;
        timeLeftSeconds?: number;
        timeLeft: AUCTION_TIMELEFT;
        bidAmount?: number | null;
        buyoutAmount?: number;
        bidder?: string;
    }

    interface C_AuctionHouse {

        /**
         *
         * @param itemId
         * @param duration
         * @param quantity
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.CalculateCommodityDeposit
         */
        CalculateCommodityDeposit(itemId: number, duration: AUCTION_RUNTIME, quantity: number): number | null;

        /**
         *
         * @param table
         * @param duration
         * @param quantity
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.CalculateItemDeposit
         */
        CalculateItemDeposit(table: ItemLocationMixin, duration: AUCTION_RUNTIME, quantity: number): number | null;

        /**
         *
         * @param ownedAuctionId
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.CanCancelAuction
         */
        CanCancelAuction(ownedAuctionId: number): boolean;

        /**
         *
         * @param ownedAuctionId
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.CancelAuction
         */
        CancelAuction(ownedAuctionId: number): void;

        /**
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.CancelCommoditiesPurchase
         */
        CancelCommoditiesPurchase(): void;

        /**
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.CancelSell
         */
        CancelSell(): void;

        /**
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.CloseAuctionHouse
         */
        CloseAuctionHouse(): void;

        /**
         *
         * @param itemId
         * @param quantity
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.ConfirmCommoditiesPurchase
         */
        ConfirmCommoditiesPurchase(itemId: number, quantity: number): void;

        /**
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.FavoritesAreAvailable
         */
        FavoritesAreAvailable(): boolean;

        /**
         *
         * @param classId
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.GetAuctionItemSubClasses
         */
        GetAuctionItemSubClasses(classId: number): number[];

        /**
         *
         * @param item
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.GetAvailablePostCount
         */
        GetAvailablePostCount(item: ItemLocationMixin): number;

        /**
         *
         * @param bidIndex
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.GetBidInfo
         */
        GetBidInfo(bidIndex: number): BidInfo | null;

        /**
         *
         * @param bidTypeIndex
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.GetBidType
         */
        GetBidType(bidTypeIndex: number): ItemKey | null;

        /**
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.GetBrowseResults
         */
        GetBrowseResults(): BrowseResultInfo[];

        /**
         *
         * @param ownedAuctionID
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.GetCancelCost
         */
        GetCancelCost(ownedAuctionId: number): number;

        /**
         *
         * @param itemId
         * @param commoditySearchIndex
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.GetCommoditySearchResultInfo
         */
        GetCommoditySearchResultInfo(itemId: number, commoditySearchIndex: number): CommoditySearchResultInfo | null;

        /**
         *
         * @param itemID
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.GetCommoditySearchResultsQuantity
         */
        GetCommoditySearchResultsQuantity(itemID: number): number;

        /**
         *
         * @param itemKey
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.GetExtraBrowseInfo
         */
        GetExtraBrowseInfo(itemKey: ItemKey): number;

        /**
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.GetFilterGroups
         */
        GetFilterGroups(): AuctionHouseFilterGroup[];

        /**
         *
         * @param item
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.GetItemCommodityStatus
         */
        GetItemCommodityStatus(item: ItemLocationMixin): ITEM_COMMODITY_STATUS;

        /**
         *
         * @param item
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.GetItemKeyFromItem
         */
        GetItemKeyFromItem(item: ItemLocationMixin): ItemKey;

        /**
         *
         * @param itemKey
         * @param restrictQualityToFilter
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.GetItemKeyInfo
         */
        GetItemKeyInfo(itemKey: ItemKey, restrictQualityToFilter?: boolean): ItemKeyInfo | null;

        /**
         *
         * @param itemKey
         * @param itemSearchResultIndex
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.GetItemSearchResultInfo
         */
        GetItemSearchResultInfo(itemKey: ItemKey, itemSearchResultIndex: number): ItemSearchResultInfo | null;

        /**
         *
         * @param itemKey
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.GetItemSearchResultsQuantity
         */
        GetItemSearchResultsQuantity(itemKey: ItemKey): number;

        /**
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.GetMaxBidItemBid
         */
        GetMaxBidItemBid(): number | null;

        /**
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.GetMaxBidItemBuyout
         */
        GetMaxBidItemBuyout(): number | null;

        /**
         *
         * @param itemID
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.GetMaxCommoditySearchResultPrice
         */
        GetMaxCommoditySearchResultPrice(itemID: number): number | null;

        /**
         *
         * @param itemKey
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.GetMaxItemSearchResultBid
         */
        GetMaxItemSearchResultBid(itemKey: ItemKey): number | null;

        /**
         *
         * @param itemKey
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.GetMaxItemSearchResultBuyout
         */
        GetMaxItemSearchResultBuyout(itemKey: ItemKey): number | null;

        /**
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.GetMaxOwnedAuctionBid
         */
        GetMaxOwnedAuctionBid(): number | null;

        /**
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.GetMaxOwnedAuctionBuyout
         */
        GetMaxOwnedAuctionBuyout(): number | null;

        /**
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.GetNumBidTypes
         */
        GetNumBidTypes(): number;

        /**
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.GetNumBids
         */
        GetNumBids(): number;

        /**
         *
         * @param itemID
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.GetNumCommoditySearchResults
         */
        GetNumCommoditySearchResults(itemID: number): number;

        /**
         *
         * @param itemKey
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.GetNumItemSearchResults
         */
        GetNumItemSearchResults(itemKey: ItemKey): number;

        /**
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.GetNumOwnedAuctionTypes
         */
        GetNumOwnedAuctionTypes(): number;

        /**
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.GetNumOwnedAuctions
         */
        GetNumOwnedAuctions(): number;

        /**
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.GetNumReplicateItems
         */
        GetNumReplicateItems(): number;

        /**
         *
         * @param ownedAuctionIndex
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.GetOwnedAuctionInfo
         */
        GetOwnedAuctionInfo(ownedAuctionIndex: number): OwnedAutionInfo | null;

        /**
         *
         * @param ownedAuctionTypeIndex
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.GetOwnedAuctionType
         */
        GetOwnedAuctionType(ownedAuctionTypeIndex: number): ItemKey | null;

        /**
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.GetQuoteDurationRemaining
         */
        GetQuoteDurationRemaining(): number;

        /**
         *
         * @param index
         * @returns
         * - **creatureID**
         * - **displayID**
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.GetReplicateItemBattlePetInfo
         */
        GetReplicateItemBattlePetInfo(index: number): [number, number];

        /**
         *
         * @param index
         * @returns
         * - **name**
         * - **texture**
         * - **count**
         * - **qualityID**
         * - **usable**
         * - **level**
         * - **levelType**
         * - **minBid**
         * - **minIncrement**
         * - **buyoutPrice**
         * - **bidAmount**
         * - **highBidder**
         * - **bidderFullName**
         * - **owner**
         * - **ownerFullName**
         * - **saleStatus**
         * - **itemID**
         * - **hasAllInfo**
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.GetReplicateItemInfo
         */
        GetReplicateItemInfo(index: number): [string | null, number | null, number, number, boolean | null, number, string | null, number, number, number,
            number, string | null, string | null, string | null, string | null, number, number, boolean | null];

        /**
         *
         * @param index
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.GetReplicateItemLink
         */
        GetReplicateItemLink(index: number): string | null;

        /**
         *
         * @param index
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.GetReplicateItemTimeLeft
         */
        GetReplicateItemTimeLeft(index: number): number;

        /**
         *
         * @param timeLeftBand
         * @returns
         * - **timeLeftMinSeconds**
         * - **timeLeftMaxSeconds**
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.GetTimeLeftBandInfo
         */
        GetTimeLeftBandInfo(timeLeftBand: AUCTION_TIMELEFT): [number, number];

        /**
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.HasFavorites
         */
        HasFavorites(): boolean;

        /**
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.HasFullBidResults
         */
        HasFullBidResults(): boolean;

        /**
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.HasFullBrowseResults
         */
        HasFullBrowseResults(): boolean;

        /**
         *
         * @param itemID
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.HasFullCommoditySearchResults
         */
        HasFullCommoditySearchResults(itemID: number): boolean;

        /**
         *
         * @param itemKey
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.HasFullItemSearchResults
         */
        HasFullItemSearchResults(itemKey: ItemKey): boolean;

        /**
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.HasFullOwnedAuctionResults
         */
        HasFullOwnedAuctionResults(): boolean;

        /**
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.HasMaxFavorites
         */
        HasMaxFavorites(): boolean;

        /**
         *
         * @param itemKey
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.HasSearchResults
         */
        HasSearchResults(itemKey: ItemKey): boolean;

        /**
         *
         * @param itemKey
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.IsFavoriteItem
         */
        IsFavoriteItem(itemKey: ItemKey): boolean;

        /**
         *
         * @param item
         * @param displayError
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.IsSellItemValid
         */
        IsSellItemValid(item: ItemLocationMixin, displayError?: boolean): boolean;

        /**
         *
         * @param specificSearch
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.IsThrottledMessageSystemReady
         */
        IsThrottledMessageSystemReady(specificSearch?: boolean): boolean;

        /**
         *
         * @param itemID
         * @param itemLevel
         * @param itemSuffix
         * @param battlePetSpeciesID
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.MakeItemKey
         */
        MakeItemKey(itemID: number, itemLevel?: number, itemSuffix?: number, battlePetSpeciesID?: number): ItemKey;

        /**
         *
         * @param auctionID
         * @param bidAmount
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.PlaceBid
         */
        PlaceBid(auctionID: number, bidAmount: number): void;

        /**
         *
         * @param item
         * @param duration
         * @param quantity
         * @param unitPrice
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.PostCommodity
         */
        PostCommodity(item: ItemLocationMixin, duration: AUCTION_RUNTIME, quantity: number, unitPrice: number): void;

        /**
         *
         * @param item
         * @param duration
         * @param quantity
         * @param bid
         * @param buyout
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.PostItem
         */
        PostItem(item: ItemLocationMixin, duration: AUCTION_RUNTIME, quantity: number, bid?: number, buyout?: number): void;

        /**
         *
         * @param sorts
         * @param auctionIDs
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.QueryBids
         */
        QueryBids(sorts: AuctionHouseSortType[], auctionIDs: number[]): void;

        /**
         *
         * @param sorts
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.QueryOwnedAuctions
         */
        QueryOwnedAuctions(sorts: AuctionHouseSortType[]): void;

        /**
         *
         * @param itemID
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.RefreshCommoditySearchResults
         */
        RefreshCommoditySearchResults(itemID: number): void;

        /**
         *
         * @param itemKey
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.RefreshItemSearchResults
         */
        RefreshItemSearchResults(itemKey: ItemKey): void;

        /**
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.ReplicateItems
         */
        ReplicateItems(): void;

        /**
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.RequestMoreBrowseResults
         */
        RequestMoreBrowseResults(): void;

        /**
         *
         * @param itemID
         * @returns **hasFullResults**
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.RequestMoreCommoditySearchResults
         */
        RequestMoreCommoditySearchResults(itemID: number): boolean;

        /**
         *
         * @param itemKey
         * @returns **hasFullResults**
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.RequestMoreItemSearchResults
         */
        RequestMoreItemSearchResults(itemKey: ItemKey): boolean;

        /**
         *
         * @param sorts
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.SearchForFavorites
         */
        SearchForFavorites(sorts: AuctionHouseSortType[]): void;

        /**
         *
         * @param itemKeys
         * @param sorts
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.SearchForItemKeys
         */
        SearchForItemKeys(itemKeys: ItemKey[], sorts: AuctionHouseSortType[]): void;

        /**
         *
         * @param query
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.SendBrowseQuery
         */
        SendBrowseQuery(query: AuctionHouseBrowseQuery): void;

        /**
         *
         * @param itemKey
         * @param sorts
         * @param separateOwnerItems
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.SendSearchQuery
         */
        SendSearchQuery(itemKey: ItemKey, sorts: AuctionHouseSortType[], separateOwnerItems: boolean): void;

        /**
         *
         * @param itemKey
         * @param sorts
         * @param separateOwnerItems
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.SendSellSearchQuery
         */
        SendSellSearchQuery(itemKey: ItemKey, sorts: AuctionHouseSortType[], separateOwnerItems: boolean): void;

        /**
         *
         * @param itemKey
         * @param setFavorite
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.SetFavoriteItem
         */
        SetFavoriteItem(itemKey: ItemKey, setFavorite: boolean): void;

        /**
         *
         * @param itemID
         * @param quantity
         * @see https://wow.gamepedia.com/API_C_AuctionHouse.StartCommoditiesPurchase
         */
        StartCommoditiesPurchase(itemID: number, quantity: number): void;
    }
}

declare const C_AuctionHouse: WoWAPI.C_AuctionHouse;

/**
 * Retrieves the itemLink of one item in the current retrieved list of items from the Auction House
 *
 * @param type the type to query
 * @param index The index of the item in the list to retrieve info from (normally 1-50, inclusive)
 * @see https://wow.gamepedia.com/API_GetAuctionWowItemLink
 */
declare function GetAuctionWowItemLink(type: WoWAPI.AUCTION_TYPE, index: number): WoWAPI.AuctionLink;
