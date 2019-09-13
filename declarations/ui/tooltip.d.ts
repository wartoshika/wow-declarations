/// <reference path="ui.d.ts" />
/// <reference path="../auction.d.ts" />

declare interface GameTooltip {

    /**
     * Adds Line to tooltip with textLeft on left side of line and textRight on right side
     * @param textLeft string which will show on left
     * @param textRight string which will show on right
     * @param textLeftRed range 0 to 1 - red color value for left string
     * @param textLeftGreen range 0 to 1 - green color value for left string
     * @param textLeftBlue range 0 to 1 - blue color value for left string
     * @param textRightRed range 0 to 1 - red color value for right string
     * @param textRightGreen range 0 to 1 - green color value for right string
     * @param textRightBlue range 0 to 1 - blue color value for right string
     * @see http://wowwiki.wikia.com/wiki/API_GameTooltip_AddDoubleLine
     */
    // tslint:disable-next-line max-line-length
    AddDoubleLine(textLeft: string, textRight: string, textLeftRed: number, textLeftGreen: number, textLeftBlue: number, textRightRed: number, textRightGreen: number, textRightBlue: number): void;

    /**
     * Dynamically expands the size of a tooltip
     * @param leftString unknown
     * @param rightString unknown
     */
    AddFontStrings(leftString: WowUnknown, rightString: WowUnknown): WowUnknown;

    /**
     * Appends a line of text to tooltip
     * @param text text which will appear in new tooltip line
     * @param red range 0 to 1 - red color value for text string
     * @param green range 0 to 1 - green color value for text string
     * @param blue range 0 to 1 - blue color value for text string
     * @param wrapText 'true' to wrap text
     * @see http://wowwiki.wikia.com/wiki/API_GameTooltip_AddLine
     */
    AddLine(text: string, red?: number, green?: number, blue?: number, wrapText?: boolean): void;

    /**
     * Adds a texture (icon) to the beginning of the last line added by AddLine(), AddDoubleLine(), etc
     * @param texturePath the texture to add
     * @description There is a limit of 10 textures per tooltip (as seen in GameTooltipTemplate.xml)
     * @see http://wowwiki.wikia.com/wiki/API_GameTooltip_AddTexture
     */
    AddTexture(texturePath: WowTexturePath): void;

    /**
     * Append text to the end of the first line of the tooltip
     * @param text the text to add
     */
    AppendText(text: string): void;

    /**
     * Clear all 30 lines of tooltip (both left and right ones)
     * @see http://wowwiki.wikia.com/wiki/API_GameTooltip_ClearLines
     */
    ClearLines(): void;

    /**
     * Initiates fading out of the GameTooltip over the next few seconds
     * @see http://wowwiki.wikia.com/wiki/API_GameTooltip_FadeOut
     */
    FadeOut(): void;

    /**
     * Returns the current anchoring type
     */
    GetAnchorType(): WowPoint;

    /**
     * Returns the name and link of the item displayed on a GameTooltip
     * @returns **itemName, ItemLink**
     * - **itemName**: Plain text item name (e.g. "Broken Fang")
     * - **itemLink**: Formatted item link (e.g. "|cff9d9d9d|Hitem:7073:0:0:0:0:0:0:0|h[Broken Fang]|h|r")
     * @see http://wowwiki.wikia.com/wiki/API_GameTooltip_GetItem
     * @tupleReturn
     */
    GetItem(): [string, WowItemLink];

    /**
     * unknown
     */
    GetMinimumWidth(): WowUnknown;

    /**
     * Returns the name and link of the spell displayed on a GameTooltip
     * @returns **itemName, spellId**
     * - **spellName**: Plain text spell name (e.g. "Explosive Shot")
     * - **spellId**: Integer spell ID (e.g. "60053")
     * @see http://wowwiki.wikia.com/wiki/API_GameTooltip_GetSpell
     * @tupleReturn
     */
    GetSpell(): [string, number];

    /**
     * Returns owner frame, anchor
     *
     * @tupleReturn
     */
    GetOwner(): [WowUiObject, WowPoint];

    /**
     * Returns unit name, unit id
     *
     * @tupleReturn
     */
    GetUnit(): [string, WowUnitId];

    /**
     * unknown
     * @param unit unknown
     */
    IsUnit(unit: WowUnitId): boolean;

    /**
     * Return the number of text lines which comprise a tooltip object
     * @see http://wowwiki.wikia.com/wiki/API_GameTooltip_NumLines
     */
    NumLines(): number;

    /**
     * Shows the tooltip for the specified action button
     * @param slot id of the action button to load the tooltip for
     * @see http://wowwiki.wikia.com/wiki/API_GameTooltip_SetAction
     */
    SetAction(slot: ActionBarSlotId): void;

    /**
     * unknown
     * @param type unknown
     * @param index unknown
     * @param offset unknown
     */
    SetAuctionCompareItem(type: AUCTION_TYPE, index: number, offset: number): WowUnknown;

    /**
     * Shows the tooltip for the specified auction item
     * @param type unknown
     * @param index unknown
     */
    SetAuctionItem(type: AUCTION_TYPE, index: number): WowUnknown;

    /**
     * Sets the GameTooltip to the item that is in the sell frame of the auction window
     * @see http://wowwiki.wikia.com/wiki/API_GameTooltip_SetAuctionSellItem
     */
    SetAuctionSellItem(): void;

    /**
     * unknown
     * @param id unknown
     */
    SetBackpackToken(id: WowUnknown): WowUnknown;

    /**
     * Sets the GameTooltip to contain text information about the specified item,
     * as well as returning whether the item is "cooling down" and the cost to repair the item (which may be 0 (or nil?) if non-applicable).
     * @param bag the ID of the bag
     * @param slot the ID of the slot
     * @returns **hasCooldown, repairCost**
     * - **hasCooldown**: if the item currently has a cooldown
     * - **repairCost**: the cost to repair the item, may be 0 or nil if the item cannot be repaired
     * @see http://wowwiki.wikia.com/wiki/API_GameTooltip_SetBagItem
     * @tupleReturn
     */
    SetBagItem(bag: WOW_CONTAINER_ID, slot: number): [boolean, number];

    /**
     * unknown
     */
    SetBuybackItem(): WowUnknown;

    /**
     * Shows the tooltip for the specified token type
     * @param tokenId id of the token type to load the tooltip for
     * @see http://wowwiki.wikia.com/wiki/API_GameTooltip_SetCurrencyToken
     */
    SetCurrencyToken(tokenId: number): void;

    /**
     * Displays the frame stack of the mouse cursor's current position on the tooltip.
     * This is not intended to be used in typical addons, but is part of the Blizzard_DebugTools "builtin addon" inspired by DevTools
     * @param showHidden If true, includes in the display those frames which are currently hidden
     * @see http://wowwiki.wikia.com/wiki/API_GameTooltip_SetFrameStack
     */
    SetFrameStack(showHidden?: boolean): void;

    /**
     * unknown
     * @param glyphId unknown
     */
    SetGlyph(glyphId: WowUnknown): WowUnknown;

    /**
     * Shows the tooltip for the specified guild bank item
     * @param tabId the tab id
     * @param slot the slot id
     */
    SetGuildBankItem(tabId: WOW_CONTAINER_ID_BANK, slot: number): void;

    /**
     * Changes the item which is displayed in the tooltip according to the passed argument
     * @param itemIdentifier Representing an in-game item, enchant or spell or A clickable string of an in-game item
     * @see http://wowwiki.wikia.com/wiki/API_GameTooltip_SetHyperlink
     */
    SetHyperlink(itemIdentifier: string | WowItemLink): void;

    /**
     * unknown
     * @param args unknown
     */
    SetHyperlinkCompareItem(...args: WowUnknown[]): WowUnknown;

    /**
     * Shows the tooltip for the specified mail inbox item
     * @param index The index of the message to get information from
     * @param attachmentIndex The index of the attachment to get information from. In the range of [1,ATTACHMENTS_MAX_RECEIVE(16)]
     * @see http://wowwiki.wikia.com/wiki/API_GameTooltip_SetInboxItem
     */
    SetInboxItem(index: number, attachmentIndex: number): WowUnknown;

    /**
     * This function sets a tooltip widget to display information for the given unit's given inventory slot
     * @param unit the unit whose inventory should be searched
     * @param slot the inventory slot number to search
     * @param nameOnly unknown argument
     * @returns **hasItem, hasCooldown, repairCost**
     * - **hasItem**: is there an item at the given slot
     * - **hasCooldown**: unknown
     * - **repairCost**: cost of repairing item
     * @see http://wowwiki.wikia.com/wiki/API_GameTooltip_SetInventoryItem
     * @tupleReturn
     */
    SetInventoryItem(unit: WowUnitId, slot: number, nameOnly?: WowUnknown): [boolean, boolean, number];

    /**
     * Sets the GameTooltip to show a loot item
     * @param lootIndex The index of the loot item to show (from 1 to GetNumLootItems())
     * @see http://wowwiki.wikia.com/wiki/API_GameTooltip_SetLootItem
     */
    SetLootItem(lootIndex: number): void;

    /**
     * Shows the tooltip for the specified loot roll item
     * @param rollId the roll id for the item
     */
    SetLootRollItem(rollId: number): void;

    /**
     * unknown
     * @param slot unknown
     * @param offset unknown
     */
    SetMerchantCompareItem(slot: number, offset?: number): WowUnknown;

    /**
     * unknown
     * @param args unknown
     */
    SetMerchantItem(...args: WowUnknown[]): WowUnknown;

    /**
     * unknown
     * @param width unknown
     */
    SetMinimumWidth(width: number): void;

    /**
     * Moves the game tooltip to a location based on the "owner" frame
     * @param owner Owner frame, which defines the element where the tooltip is centered on.
     * A pointer to the frame is required, not the frame name itself (use _G['MyFrame'] to get the pointer from the frame name)
     * @param anchor a string that describes the anchor point as it would be set via the SetPoint() function
     * @param offsetX offset horizontal
     * @param offsetY offset vertical
     * @description This will set the owner for tooltip:IsOwned(frame). For instance, first call GameTooltip:SetOwner(UIParent).
     * Then GameTooltip:IsOwned(UIParent) will return 1.
     * @see http://wowwiki.wikia.com/wiki/API_GameTooltip_SetOwner
     */
    SetOwner(owner: WowUiObject, anchor: WowPoint, offsetX?: number, offsetY?: number): void;

    /**
     * Sets the amount of padding on the righthand side of the GameTooltip
     * @param amount The amount of padding (black space) to put on the right hand side of the tooltip
     * @see http://wowwiki.wikia.com/wiki/API_GameTooltip_SetPadding
     */
    SetPadding(amount: number): void;

    /**
     * Shows the tooltip for the specified pet action
     * @param slot the pet action slot id
     */
    SetPetAction(slot: number): WowUnknown;

    /**
     * unknown
     * @param args unknown
     */
    SetQuestItem(...args: WowUnknown[]): WowUnknown;

    /**
     * unknown
     * @param args unknown
     */
    SetQuestLogItem(...args: WowUnknown[]): WowUnknown;

    /**
     * Shows the tooltip for the spell reward of the currently selected quest
     * @param args unknown
     */
    SetQuestLogRewardSpell(...args: WowUnknown[]): WowUnknown;

    /**
     * unknown
     * @param args unknown
     */
    SetQuestRewardSpell(...args: WowUnknown[]): WowUnknown;

    /**
     * unknown
     * @param args unknown
     */
    SetSendMailItem(...args: WowUnknown[]): WowUnknown;

    /**
     * Shows the tooltip for the specified shapeshift form
     * @param slot the slot id
     */
    SetShapeshift(slot: number): WowUnknown;

    /**
     * Shows the tooltip for the specified spell
     * @param spellBookId the id of the spell on the tab from the spellbook - not the same as SpellId
     * @param bookType Either BOOKTYPE_SPELL ("spell") or BOOKTYPE_PET ("pet")
     * @see http://wowwiki.wikia.com/wiki/API_GameTooltip_SetSpell
     */
    SetSpell(spellBookId: number, bookType: "pet" | "spell"): void;

    /**
     * Shows the tooltip for the specified talent
     * @param tabIndex the index of the talent tab
     * @param talentIndex the index of the talent on the tab
     * @see http://wowwiki.wikia.com/wiki/API_GameTooltip_SetTalent
     */
    SetTalent(tabIndex: number, talentIndex: number): WowUnknown;

    /**
     * Sets the text of the tooltip
     * @param text The text of the new tooltip. Variable can be used inplace of a string
     * @param red number range 0 to 1 - red color value for text string
     * @param green number range 0 to 1 - green color value for text string
     * @param blue number range 0 to 1 - blue color value for text string
     * @param alpha number range 0 to 1 - specifies the opacity of text. Default is 1
     * @param textWrap 'true' to wrap the text string to fit the tooltip box. Default is 'false'
     * @see http://wowwiki.wikia.com/wiki/API_GameTooltip_SetText
     */
    SetText(text: string, red?: number, green?: number, blue?: number, alpha?: number, textWrap?: boolean): void;

    /**
     * unknown
     * @param args unknown
     */
    SetTracking(...args: WowUnknown[]): WowUnknown;

    /**
     * unknown
     * @param args unknown
     */
    SetTradePlayerItem(...args: WowUnknown[]): WowUnknown;

    /**
     * This method opens the tooltip window when you hover over objects in the tradeskill window
     * @param tradeItemIndex The index of the selected item in the recipe list
     * @param reagentIndex Index of the selected reagent
     * @see http://wowwiki.wikia.com/wiki/API_GameTooltip_SetTradeSkillItem
     */
    SetTradeSkillItem(tradeItemIndex: number, reagentIndex?: number): void;

    /**
     * unknown
     * @param args unknown
     */
    SetTradeTargetItem(...args: WowUnknown[]): WowUnknown;

    /**
     * unknown
     * @param args unknown
     */
    SetTrainerService(...args: WowUnknown[]): WowUnknown;

    /**
     * Sets the UnitID for the tooltip
     * @param unitId the unit id
     * @see http://wowwiki.wikia.com/wiki/API_GameTooltip_SetUnit
     */
    SetUnit(unitId: WowUnitId): void;

    /**
     * shows the tooltip for a unit's aura
     * @param unitId the unitId of the unit whose aura is to be shown
     * @param auraIndex the index of the aura to be shown
     * @param filter same as UnitAura(...) "HARMFUL" for debuffs, "HELP" for buffs, "RAID" for raid specific, etc
     * @see http://wowwiki.wikia.com/wiki/API_GameTooltip_SetUnitAura
     */
    SetUnitAura(unitId: WowUnitId, auraIndex: number, filter?: WowBuffFilterType): WowUnknown;

    /**
     * Shows the tooltip for a unit's buff
     * @param unitId the unitId of the unit whose buff is to be shown
     * @param buffIndex the index of the buff to be shown
     * @param filter same as UnitAura(...) "HARMFUL" for debuffs, "HELP" for buffs, "RAID" for raid specific, etc
     * @see http://wowwiki.wikia.com/wiki/API_GameTooltip_SetUnitBuff
     */
    SetUnitBuff(unitId: WowUnitId, buffIndex: number, filter?: WowBuffFilterType): WowUnknown;

    /**
     * shows the tooltip for a unit's debuff
     * @param unitId the unitId of the unit whose debuff is to be shown
     * @param buffIndex the index of the debuff to be shown
     * @param filter same as UnitAura(...) "HARMFUL" for debuffs, "HELP" for buffs, "RAID" for raid specific, etc
     * @see http://wowwiki.wikia.com/wiki/API_GameTooltip_SetUnitAura
     */
    SetUnitDebuff(unitId: WowUnitId, buffIndex: number, filter?: WowBuffFilterType): WowUnknown;

    /**
     * shows the configured tooltip
     */
    Show(): void;
}

declare const GameTooltip: GameTooltip;
