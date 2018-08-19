declare type ITEM_QUALITY_GENERIC = -1;
declare type ITEM_QUALITY_POOR = 0;
declare type ITEM_QUALITY_COMMON = 1;
declare type ITEM_QUALITY_UNCOMMON = 2;
declare type ITEM_QUALITY_RARE = 3;
declare type ITEM_QUALITY_EPIC = 4;
declare type ITEM_QUALITY_LEGENDARY = 5;
declare type ITEM_QUALITY_ARTIFACT = 6;
declare type ITEM_QUALITY_HEIRLOOM = 7;

/**
 * all currently known item qualities
 */
declare type ITEM_QUALITY = ITEM_QUALITY_GENERIC | ITEM_QUALITY_POOR | ITEM_QUALITY_COMMON | ITEM_QUALITY_UNCOMMON |
    ITEM_QUALITY_RARE | ITEM_QUALITY_EPIC | ITEM_QUALITY_LEGENDARY | ITEM_QUALITY_ARTIFACT | ITEM_QUALITY_HEIRLOOM;

/**
 * a clickable ingame item link
 */
declare type ItemLink = Hyperlink;