/** @noSelfInFile */

declare namespace WoWAPI {
    interface C_BlackMarket {

        /**
         * Notifies the server that the Black Market UI was closed
         * @event BLACK_MARKET_CLOSE
         * @see https://wow.gamepedia.com/API_C_BlackMarket.Close
         * @since 5.0.4
         */
        Close(): void;

        /**
         * Returns information about a specific black market auction
         * @param marketId black market auction ID
         * @description These functions will only return information when the black market UI is open (according to the server,
         * i.e. BLACK_MARKET_OPEN has fired, and BLACK_MARKET_CLOSE has not fired since)
         * @since 5.0.4
         * @see https://wow.gamepedia.com/API_C_BlackMarket.GetItemInfoByID
         * @tupleReturn
         */
        // tslint:disable-next-line max-line-length
        GetItemInfoByID(marketId: number): [string, TexturePath, number, string, number, string, string, number, number, number, boolean, number, number, ItemLink, number];

        /**
         * Returns information about a specific black market auction
         * @description These functions will only return information when the black market UI is open (according to the server,
         * i.e. BLACK_MARKET_OPEN has fired, and BLACK_MARKET_CLOSE has not fired since)
         * @since 5.0.4
         * @see https://wow.gamepedia.com/API_C_BlackMarket.GetItemInfoByID
         * @tupleReturn
         */
        GetHotItem(): [string, TexturePath, number, string, number, string, string, number, number, number, boolean, number, number, ItemLink, number];

        /**
         * Returns information about a specific black market auction
         * @param index black market auction index, ascending from 1 to C_BlackMarket.GetNumItems()
         * @description These functions will only return information when the black market UI is open (according to the server,
         * i.e. BLACK_MARKET_OPEN has fired, and BLACK_MARKET_CLOSE has not fired since)
         * @since 5.0.4
         * @see https://wow.gamepedia.com/API_C_BlackMarket.GetItemInfoByID
         * @tupleReturn
         */
        // tslint:disable-next-line max-line-length
        GetItemInfoByIndex(index: number): [string, TexturePath, number, string, number, string, string, number, number, number, boolean, number, number, ItemLink, number];

        /**
         * Returns the number of auctions on the Black Market Auction House
         * @returns number of auctions on the black market
         * @since 5.0.4
         * @see https://wow.gamepedia.com/API_C_BlackMarket.GetNumItems
         */
        GetNumItems(): number;

        /**
         * Places a bid on a black market auction
         * @param marketId black market auction ID (not line index!) to bid on.
         * @param bid bid amount, in copper
         * @since 5.0.4
         * @see https://wow.gamepedia.com/API_C_BlackMarket.ItemPlaceBid
         * @requires HARDWARE_EVENT
         */
        ItemPlaceBid(marketId: number, bid: number): void;

        /**
         * Requests updated black market auction information from the server
         * @event BLACK_MARKET_ITEM_UPDATE
         * @description The black market UI must be open according to the server (i.e. BLACK_MARKET_OPEN has fired, and BLACK_MARKET_CLOSE
         * has not fired since) in order for this function to have any effect
         * @see https://wow.gamepedia.com/API_C_BlackMarket.RequestItems
         * @since 5.0.4
         */
        RequestItems(): void;
    }
}

declare const C_BlackMarket: WoWAPI.C_BlackMarket;
