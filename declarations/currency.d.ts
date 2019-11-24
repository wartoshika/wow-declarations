/** @noSelfInFile */

declare namespace WoWAPI {
    type CurrencyLink = Hyperlink;
}

/**
 * Breaks down an amount of money into gold/silver/copper, inserts separator strings, and returns the resulting string
 *
 * @param amount the amount of money in copper (for example, the return value from GetMoney)
 * @param separator a string to insert between the formatted amounts of currency, if there is more than one type
 * @returns a (presumably localized) string suitable for printing or displaying
 * @see https://wow.gamepedia.com/API_GetCoinText
 * @since 3.0.2
 */
declare function GetCoinText(amount: number, separator: string): string;

/**
 * Breaks down an amount of money into gold/silver/copper, inserts appropriate "|T" texture strings for coin icons, and returns the resulting string
 *
 * @param amount the amount of money in copper (for example, the return value from GetMoney)
 * @param fontHeight the height of the coin icon; if not specified, defaults to 14
 * @returns a string suitable for printing or displaying
 * @see https://wow.gamepedia.com/API_GetCoinTextureString
 * @since 3.0.2
 */
declare function GetCoinTextureString(amount: number, fontHeight?: number): string;

/**
 * Retrieve Information about a currency at index including it's amount
 *
 * @param currencyId ID of the currency to retrieve
 * @returns name, currentAmount, texture, earnedThisWeek, weeklyMax, totalMax, isDiscovered, rarity
 * @see https://wow.gamepedia.com/API_GetCurrencyInfo
 * @since 3.0.2
 * @tupleReturn
 */
declare function GetCurrencyInfo(currencyId: number): [string, number, WoWAPI.TexturePath, number, number, number, boolean, WoWAPI.ITEM_QUALITY];

/**
 * Retrieve Information about a currency at index including it's amount
 *
 * @param currencyId The full currencyLink as found with GetCurrencyLink() or GetCurrencyListLink(). OR A fragment of the currencyLink string
 * for the item, e.g. "currency:396" for Valor Points.
 * @returns name, currentAmount, texture, earnedThisWeek, weeklyMax, totalMax, isDiscovered, rarity
 * @see https://wow.gamepedia.com/API_GetCurrencyInfo
 * @since 3.0.2
 * @tupleReturn
 */
// tslint:disable-next-line unified-signatures max-line-length
declare function GetCurrencyInfo(currencyLinkOrString: WoWAPI.CurrencyLink | string): [string, number, WoWAPI.TexturePath, number, number, number, boolean, WoWAPI.ITEM_QUALITY];

/**
 * Get the currencyLink for the specified currencyID
 *
 * @param currencyId currency index - see table at GetCurrencyInfo for a list
 * @param currencyAmount currency amount
 * @returns The currency link (similar to itemLink) for the specified index (e.g. "|cffa335ee|Hcurrency:396:0|h[Valor Points]|h|r" for Valor
 * Points) or nil if the index is for a header
 * @see https://wow.gamepedia.com/API_GetCurrencyLink
 * @since 3.0.2
 */
declare function GetCurrencyLink(currencyId: number, currencyAmount: number): WoWAPI.CurrencyLink;

/**
 * Returns the number of entries in the currency list.
 *
 * @returns number of entries in the player's currency list
 * @see https://wow.gamepedia.com/API_GetCurrencyListSize
 * @since 3.0.2
 */
declare function GetCurrencyListSize(): number;

/**
 * Returns information about an entry in the currency list
 *
 * @param currencyIndex index, ascending from 1 to GetCurrencyListSize().
 * @returns name, isHeader, isExpanded, isUnused, isWatched, count, icon, maximum, hasWeeklyLimit, currentWeeklyAmount, unknown, itemID
 * @see https://wow.gamepedia.com/API_GetCurrencyListInfo
 * @since 3.0.2
 * @tupleReturn
 */
// tslint:disable-next-line max-line-length
declare function GetCurrencyListInfo(currencyIndex: number): [string, boolean, boolean, boolean, boolean, number, WoWAPI.TexturePath, number, number, number, WoWAPI.Unknown, number];

/**
 * Alters the expanded state of a currency list header.
 *
 * @param currencyHeaderIndex Index of the header in the currency list to expand/collapse.
 * @param expanded 0 to set to collapsed state; 1 to set to expanded state
 * @see https://wow.gamepedia.com/API_ExpandCurrencyList
 * @since 3.0.2
 */
declare function ExpandCurrencyList(currencyHeaderIndex: number, expanded: WoWAPI.Flag): void;

/**
 * Marks/unmarks a currency as unused
 *
 * @param currencyIndex Index of the currency in the currency list to alter unused status of.
 * @param unused 1 to mark the currency as unused; 0 to mark the currency as used
 * @see https://wow.gamepedia.com/API_SetCurrencyUnused
 * @since 3.0.2
 */
declare function SetCurrencyUnused(currencyIndex: number, unused: WoWAPI.Flag): void;

/**
 * Returns the number of currencies currently watched on the player's backpack
 *
 * @returns the number of watched currencies
 * @see https://wow.gamepedia.com/API_GetNumWatchedTokens
 * @since 3.0.2
 */
declare function GetNumWatchedTokens(): number;

/**
 * Returns information about a currency item currently being shown as part of the backpack
 *
 * @param watchedIndex Index, ascending from 1 to GetNumWatchedTokens().
 * @returns name, count, icon, currencyID
 * @see https://wow.gamepedia.com/API_GetBackpackCurrencyInfo
 * @since 3.0.2
 * @tupleReturn
 */
declare function GetBackpackCurrencyInfo(watchedIndex: number): [string, number, WoWAPI.TexturePath, number];

/**
 * Alters the backpack tracking state of a currency
 *
 * @param currencyIndex Index of the currency in the currency list to alter tracking of
 * @param track 1 to track; 0 to clear tracking
 * @see https://wow.gamepedia.com/API_SetCurrencyBackpack
 * @since 3.0.2
 */
declare function SetCurrencyBackpack(currencyIndex: number, track: WoWAPI.Flag): void;
