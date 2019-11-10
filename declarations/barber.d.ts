/** @noSelfInFile */

declare namespace WoWAPI {
    type FacialHairCustomizationGlobalType = "EARRINGS" | "FEATURES" | "HAIR" | "HORNS" | "MARKINGS" | "NORMAL" | "PIERCINGS" | "TUSKS";
    type FacialHairCustomizationType = "HORNS" | "NORMAL";
}

/**
 * Purchases currently selected customizations from the barber shop
 * @see https://wow.gamepedia.com/API_ApplyBarberShopStyle
 */
declare function ApplyBarberShopStyle(): void;

/**
 * Resets all customization categories to original styles
 * @see https://wow.gamepedia.com/API_BarberShopReset
 */
declare function BarberShopReset(): void;

/**
 * Exits the barber shop without applying selected customizations
 * @see https://wow.gamepedia.com/API_CancelBarberShop
 */
declare function CancelBarberShop(): void;

/**
 * Returns information about the current selection for a barber shop customization
 * @see https://wow.gamepedia.com/API_GetBarberShopStyleInfo
 * @tupleReturn
 */
declare function GetBarberShopStyleInfo(catId: number): [string, WoWAPI.Unknown, WoWAPI.Unknown, WoWAPI.Flag];

/**
 * Returns the total costs of the cosmetic changes
 * @see https://wow.gamepedia.com/API_GetBarberShopTotalCost
 */
declare function GetBarberShopTotalCost(): number;

/**
 * Returns the type of facial hair customization available to the character
 * @see https://wow.gamepedia.com/API_GetFacialHairCustomization
 */
declare function GetFacialHairCustomization(): WoWAPI.FacialHairCustomizationGlobalType;

/**
 * https://wow.gamepedia.com/API_GetHairCustomization
 * @see https://wow.gamepedia.com/API_GetHairCustomization
 */
declare function GetHairCustomization(): WoWAPI.FacialHairCustomizationType;

/**
 * Alters style selection in a particular customization category
 * @param catId Ascending index of the customization category that should be changed to the next/previous style
 * @param reverse 1 if the selection should be changed to the previous style, nil if to the next
 */
declare function SetNextBarberShopStyle(catId: number, reverse?: WoWAPI.Flag): void;
