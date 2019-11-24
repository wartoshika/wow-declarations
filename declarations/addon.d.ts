/** @noSelfInFile */

/// <reference path="global.d.ts" />

declare namespace WoWAPI {
    /**
     * Addon is banned by the client
     */
    type ADDON_LOAD_REASON_BANNED = "BANNED";

    /**
     * The addon's file(s) are corrupt
     */
    type ADDON_LOAD_REASON_CORRUPT = "CORRUPT";

    /**
     * Addon's dependency is banned by the client
     */
    type ADDON_LOAD_REASON_DEP_BANNED = "DEP_BANNED";

    /**
     * The addon's dependency cannot load because its file(s) are corrupt
     */
    type ADDON_LOAD_REASON_DEP_CORRUPT = "DEP_CORRUPT";

    /**
     * The addon cannot load without its dependency enabled
     */
    type ADDON_LOAD_REASON_DEP_DISABLED = "DEP_DISABLED";

    /**
     * The addon cannot load if its dependency cannot load
     */
    type ADDON_LOAD_REASON_DEP_INCOMPATIBLE = "DEP_INCOMPATIBLE";

    /**
     * The addon's dependency is physically not there
     */
    type ADDON_LOAD_REASON_DEP_MISSING = "DEP_MISSING";

    /**
     * The addon's dependency must be loadable on demand too
     */
    type ADDON_LOAD_REASON_DEP_NOT_DEMAND_LOADED = "DEP_NOT_DEMAND_LOADED";

    /**
     * Addon is disabled on the character select screen
     */
    type ADDON_LOAD_REASON_DISABLED = "DISABLED";

    /**
     * The addon is too old.
     */
    type ADDON_LOAD_REASON_INCOMPATIBLE = "INCOMPATIBLE";

    /**
     * The addon is physically not there
     */
    type ADDON_LOAD_REASON_MISSING = "MISSING";

    /**
     * As of 1.8 only addons marked as LoadOnDemand can be loaded via this function
     */
    type ADDON_LOAD_REASON_NOT_DEMAND_LOADED = "NOT_DEMAND_LOADED";

    /**
     * Unknown, presumably the interface version in the .toc file is incorrect
     */
    type ADDON_LOAD_REASON_INTERFACE_VERSION = "INTERFACE_VERSION";

    /**
     * all possible load error reasons
     */
    type ADDON_LOAD_REASON = ADDON_LOAD_REASON_BANNED | ADDON_LOAD_REASON_CORRUPT | ADDON_LOAD_REASON_DEP_BANNED | ADDON_LOAD_REASON_DEP_CORRUPT |
        ADDON_LOAD_REASON_DEP_DISABLED | ADDON_LOAD_REASON_DEP_INCOMPATIBLE | ADDON_LOAD_REASON_DEP_MISSING |
        ADDON_LOAD_REASON_DEP_NOT_DEMAND_LOADED | ADDON_LOAD_REASON_DISABLED | ADDON_LOAD_REASON_INCOMPATIBLE | ADDON_LOAD_REASON_MISSING |
        ADDON_LOAD_REASON_NOT_DEMAND_LOADED | ADDON_LOAD_REASON_INTERFACE_VERSION;
}

/**
 * Disable an AddOn for subsequent sessions
 *
 * @param index The index of the AddOn to disable in the user's AddOn list, from 1 to GetNumAddOns().
 * @see https://wow.gamepedia.com/API_DisableAddOn
 */
declare function DisableAddOn(index: number): void;

/**
 * Disable an AddOn for subsequent sessions
 *
 * @param name The name of the AddOn to be disabled
 * @param character The name of the character (without realm) for whom to disable the addon. Defaults to the current character
 * @see https://wow.gamepedia.com/API_DisableAddOn
 */
declare function DisableAddOn(name: string, character?: string): void;

/**
 * Disable all AddOns for subsequent sessions
 *
 * @see https://wow.gamepedia.com/API_DisableAllAddOns
 */
declare function DisableAllAddOns(): void;

/**
 * Enable an AddOn for subsequent sessions
 *
 * @param indexOrName The index of the AddOn to enable in the user's AddOn list OR The name of the AddOn to be enabled
 * @see https://wow.gamepedia.com/API_EnableAddOn
 */
declare function EnableAddOn(indexOrName: number | string): void;

/**
 * Enable all AddOns for subsequent sessions
 *
 * @see https://wow.gamepedia.com/API_EnableAllAddOns
 */
declare function EnableAllAddOns(): void;

/**
 * Get the required dependencies for an AddOn
 *
 * @param indexOrName The index of the AddOn in the user's AddOn list. Note that you cannot access Blizzard-provided AddOns through this mechanism.
 * OR The name of the AddOn to be queries. You can access Blizzard-provided AddOns through this mechanism
 * @returns Name of an addon the specified addon lists as a required dependency
 * @see https://wow.gamepedia.com/API_GetAddOnDependencies
 * @tupleReturn
 */
declare function GetAddOnDependencies(indexOrName: number | string): [...string[]];

/**
 * Unknown
 *
 * @param character Unknown
 * @param addonIndex Unknown
 * @see https://wow.gamepedia.com/API_GetAddOnEnableState
 */
declare function GetAddOnEnableState(character: WoWAPI.Unknown, addonIndex: WoWAPI.Unknown): WoWAPI.Unknown;

/**
 * Get information about an AddOn
 *
 * @param indexOrName The index of the AddOn in the user's AddOn list. Note that you cannot access Blizzard-provided AddOns through this
 * mechanism OR The name of the AddOn to be queried. You can access Blizzard-provided AddOns through this mechanism
 * @returns name, title, notes, loadable, reason, security, newVersion
 * @see https://wow.gamepedia.com/API_GetAddOnInfo
 * @tupleReturn
 */
declare function GetAddOnInfo(indexOrName: number | string): [string, string, string, boolean, WoWAPI.ADDON_LOAD_REASON, string, boolean];

/**
 * get addon metadata from the toc file
 *
 * @param addonNameOrIndex Addon name to look up metadata for
 * @param field Field name. May be Title, Notes, Author, Version, or anything starting with X-
 * @returns The value of the field, nil if not defined.
 * @see https://wow.gamepedia.com/API_GetAddOnMetadata
 */
declare function GetAddOnMetadata(addonNameOrIndex: string | number, field: string): string | null;

/**
 * Returns a list of optional dependencies
 *
 * @param indexOrName The index of the AddOn in the user's AddOn list. Note that you cannot access Blizzard-provided AddOns through this mechanism.
 * OR The name of the AddOn to be queries. You can access Blizzard-provided AddOns through this mechanism
 * @see https://wow.gamepedia.com/API_GetAddOnOptionalDependencies
 * @tupleReturn
 */
declare function GetAddOnOptionalDependencies(indexOrName: number | string): [...string[]];

/**
 * Get the number of user supplied AddOns
 *
 * @see https://wow.gamepedia.com/API_GetNumAddOns
 */
declare function GetNumAddOns(): number;

/**
 * Returns whether an addon has been loaded
 *
 * @param indexOrName The index of the addon in the user's addon list. You cannot query Blizzard-provided AddOns using this parameter OR
 * The name of the addon to be queried. You can query Blizzard-provided addon using this parameter
 * @returns loaded, finished
 * @see https://wow.gamepedia.com/API_IsAddOnLoaded
 * @tupleReturn
 */
declare function IsAddOnLoaded(indexOrName: number | string): [WoWAPI.Flag, WoWAPI.Flag];

/**
 * Determine if an AddOn is loaded on demand (via .toc file dependencies or LoadAddOn) rather than at startup
 *
 * @param indexOrName The index of the AddOn in the user's AddOn list. Note that you cannot access Blizzard-provided AddOns through this mechanism.
 * OR The name of the AddOn to be queries. You can access Blizzard-provided AddOns through this mechanism
 * @returns Indicates if the AddOn is loaded on demand, 1 if it is, nil if it is loaded on startup
 * @see https://wow.gamepedia.com/API_IsAddOnLoadOnDemand
 */
declare function IsAddOnLoadOnDemand(indexOrName: number | string): WoWAPI.Flag;

/**
 * Request the loading of an On-Demand AddOn
 *
 * @param indexOrName The index of the AddOn in the user's AddOn list. Note that you cannot access Blizzard-provided AddOns through this mechanism.
 * OR The name of the AddOn to be queries. You can access Blizzard-provided AddOns through this mechanism
 * @returns loaded, reason
 * @see https://wow.gamepedia.com/API_LoadAddOn
 * @tupleReturn
 */
declare function LoadAddOn(indexOrName: number | string): [WoWAPI.Flag, WoWAPI.ADDON_LOAD_REASON];
