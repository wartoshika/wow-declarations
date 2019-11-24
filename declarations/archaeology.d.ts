/** @noSelfInFile */

/// <reference path="global.d.ts" />
/// <reference path="ui/ui.d.ts" />

declare namespace WoWAPI {
    type ARCHAELOLOGY_RARITY_COMMON = 0;
    type ARCHAELOLOGY_RARITY_RARE = 1;
    type ARCHAELOLOGY_RARITY = ARCHAELOLOGY_RARITY_COMMON | ARCHAELOLOGY_RARITY_RARE;

    type ARCHAELOLOGY_BRANCH_DWARF = 1;
    type ARCHAELOLOGY_BRANCH_DRAENEI = 2;
    type ARCHAELOLOGY_BRANCH_FOSSIL = 3;
    type ARCHAELOLOGY_BRANCH_NIGHT_ELF = 4;
    type ARCHAELOLOGY_BRANCH_NERUBIAN = 5;
    type ARCHAELOLOGY_BRANCH_ORC = 6;
    type ARCHAELOLOGY_BRANCH_TOL_VIR = 7;
    type ARCHAELOLOGY_BRANCH_TROLL = 8;
    type ARCHAELOLOGY_BRANCH_VRYKUL = 27;
    type ARCHAELOLOGY_BRANCH_MANTID = 29;
    type ARCHAELOLOGY_BRANCH_PANDAREN = 229;
    type ARCHAELOLOGY_BRANCH_MOGU = 231;
    type ARCHAELOLOGY_BRANCH_ARAKKOA = 315;
    type ARCHAELOLOGY_BRANCH_DRAENOR_CLANS = 350;
    type ARCHAELOLOGY_BRANCH_OGRE = 382;
    type ARCHAELOLOGY_BRANCH_HIGHBORNE = 404;
    type ARCHAELOLOGY_BRANCH_HIGHMOUNTAIN_TAUREN = 406;
    type ARCHAELOLOGY_BRANCH_DEMONIC = 408;

    /**
     * all currently known branches
     */
    type ARCHAELOLOGY_BRANCH = ARCHAELOLOGY_BRANCH_DWARF | ARCHAELOLOGY_BRANCH_DRAENEI | ARCHAELOLOGY_BRANCH_FOSSIL |
        ARCHAELOLOGY_BRANCH_NIGHT_ELF | ARCHAELOLOGY_BRANCH_NERUBIAN | ARCHAELOLOGY_BRANCH_ORC | ARCHAELOLOGY_BRANCH_TOL_VIR |
        ARCHAELOLOGY_BRANCH_TROLL | ARCHAELOLOGY_BRANCH_VRYKUL | ARCHAELOLOGY_BRANCH_MANTID | ARCHAELOLOGY_BRANCH_PANDAREN |
        ARCHAELOLOGY_BRANCH_MOGU | ARCHAELOLOGY_BRANCH_ARAKKOA | ARCHAELOLOGY_BRANCH_DRAENOR_CLANS | ARCHAELOLOGY_BRANCH_OGRE |
        ARCHAELOLOGY_BRANCH_HIGHBORNE | ARCHAELOLOGY_BRANCH_HIGHMOUNTAIN_TAUREN | ARCHAELOLOGY_BRANCH_DEMONIC;

}

/**
 * Returns how many digsites are in a zone like Azsuna or Elwynn Forest
 *
 * @returns the number of digsites the player can use  [Survey] on in a zone. The player must actually be in a zone that can be surveyed
 * @see https://wow.gamepedia.com/API_ArchaeologyMapUpdateAll
 * @since 5.4.0
 */
declare function ArchaeologyMapUpdateAll(): number;

/**
 * Unknown
 *
 * @param index Unknown
 * @see https://wow.gamepedia.com/API_ArchaeologyGetIconInfo
 * @since 4.0.0
 */
declare function ArchaeologyGetIconInfo(index: WoWAPI.Unknown): WoWAPI.Unknown;

/**
 * Returns 1 if item could be added to the selected artifact
 *
 * @param itemId Unknown
 * @see https://wow.gamepedia.com/API_CanItemBeSocketedToArtifact
 * @since 4.0.0
 */
declare function CanItemBeSocketedToArtifact(itemId: number): WoWAPI.Flag;

/**
 * Returns whether the player is currently on a digsite
 *
 * @returns true if the player is currently on a digsite (and can use  [Survey]), false otherwise
 * @see https://wow.gamepedia.com/API_CanScanResearchSite
 * @since 5.4.0
 */
declare function CanScanResearchSite(): boolean;

/**
 * Return true if artifact can be solved
 *
 * @see https://wow.gamepedia.com/API_CanSolveArtifact
 * @since 4.0.0
 */
declare function CanSolveArtifact(): boolean;

/**
 * Unknown
 *
 * @see https://wow.gamepedia.com/API_CloseResearch
 * @since 4.0.0
 */
declare function CloseResearch(): WoWAPI.Unknown;

/**
 * Returns the information for a specific race's active artifact
 *
 * @param raceIndex Index of the race to pick the artifact from
 * @returns artifactName, artifactDescription, artifactRarity, artifactIcon, hoverDescription, keystoneCount, bgTexture
 * @see https://wow.gamepedia.com/API_GetActiveArtifactByRace
 * @since 4.0.0
 * @tupleReturn
 */
// tslint:disable-next-line max-line-length
declare function GetActiveArtifactByRace(raceIndex: number): [string, string, WoWAPI.ARCHAELOLOGY_RARITY, WoWAPI.TexturePath, string, number, WoWAPI.TexturePath];

/**
 * Returns the localized name for Archaeology
 *
 * @returns Localized name of the Archaeology secondary skill
 * @see https://wow.gamepedia.com/API_GetArchaeologyInfo
 * @since 4.0.0
 */
declare function GetArchaeologyInfo(): string;

/**
 * Returns the information for a specific race used in Archaeology
 *
 * @param raceIndex Index of the race to query, between 1 and GetNumArchaeologyRaces().
 * @returns raceName, raceTexture, raceItemID, numFragmentsCollected, numFragmentsRequired, maxFragments
 * @see https://wow.gamepedia.com/API_GetArchaeologyRaceInfo
 * @since 4.0.0
 * @tupleReturn
 */
declare function GetArchaeologyRaceInfo(raceIndex: number): [string, WoWAPI.TexturePath, number, number, number, number];

/**
 * Returns information about a branch of Archaeology
 *
 * @param branchId ID of the research branch (race) to query.
 * @returns raceName, raceTextureID, raceItemID, numFragmentsCollected, numFragmentsRequired, maxFragments
 * @see https://wow.gamepedia.com/API_GetArchaeologyRaceInfoByID
 * @since 5.4.0
 * @tupleReturn
 */
declare function GetArchaeologyRaceInfoByID(branchId: WoWAPI.ARCHAELOLOGY_BRANCH): [string, WoWAPI.TexturePath, number, number, number, number];

/**
 * Returns the information for a specific race's artifact
 *
 * @param raceIndex Index of the race to pick the artifact from
 * @param artifactIndex Index of the artifact
 * @returns artifactName, artifactDescription, artifactRarity, artifactIcon, hoverDescription, keystoneCount, bgTexture, firstCompletionTime, completionCount
 * @see https://wow.gamepedia.com/API_GetArtifactInfoByRace
 * @since 4.0.0
 * @tupleReturn
 */
// tslint:disable-next-line max-line-length
declare function GetArtifactInfoByRace(raceIndex: number, artifactIndex: number): [string, string, WoWAPI.ARCHAELOLOGY_RARITY, WoWAPI.TexturePath, string, number, WoWAPI.TexturePath, number, number];

/**
 * Returns the number of Archaeology races in the game
 *
 * @returns The number of Archaeology races in the game
 * @see https://wow.gamepedia.com/API_GetNumArchaeologyRaces
 * @since 4.0.0
 */
declare function GetNumArchaeologyRaces(): number;

/**
 * Returns the amount of artifacts the player has acquired from the provided race.
 *
 * @param raceIndex Index of the race to be selected.
 * @returns Number of artifacts for that race
 * @see https://wow.gamepedia.com/API_GetNumArtifactsByRace
 * @since 4.0.0
 */
declare function GetNumArtifactsByRace(raceIndex: number): number;

/**
 * Returns the information for the selected race's current archaeology artifact
 *
 * @returns artifactName, artifactDescription, artifactRarity, artifactIcon, hoverDescription, keystoneCount, bgTexture, spellId
 * @see https://wow.gamepedia.com/API_GetSelectedArtifactInfo
 * @since 4.0.0
 * @tupleReturn
 */
declare function GetSelectedArtifactInfo(): [string, string, WoWAPI.ARCHAELOLOGY_RARITY, WoWAPI.TexturePath, string, number, WoWAPI.TexturePath, number];

/**
 * Returns information about current used fragments for the selected artifact
 *
 * @returns numFragmentsCollected, numFragmentsAdded, numFragmentsRequired
 * @see https://wow.gamepedia.com/API_GetArtifactProgress
 * @since 4.0.0
 * @tupleReturn
 */
declare function GetArtifactProgress(): [number, number, number];

/**
 * Unknown
 *
 * @param args Unknown
 * @see https://wow.gamepedia.com/API_IsArtifactCompletionHistoryAvailable
 * @since 4.0.0
 */
declare function IsArtifactCompletionHistoryAvailable(...args: WoWAPI.Unknown[]): WoWAPI.Unknown;

/**
 * Returns if there is a keystone in the artifact
 *
 * @param keystoneIndex Unknown
 * @see https://wow.gamepedia.com/API_ItemAddedToArtifact
 * @since 4.0.0
 */
declare function ItemAddedToArtifact(keystoneIndex: WoWAPI.Unknown): WoWAPI.Unknown;

/**
 * Set the artifact-pointer to raceIndex
 *
 * @param raceIndex Index of the race to select
 * @see https://wow.gamepedia.com/API_SetSelectedArtifact
 * @since 4.0.0
 */
declare function SetSelectedArtifact(raceIndex: number): void;

/**
 * Remove a Keystone from the selected artifact
 *
 * @returns True if the keystone is successfully removed
 * @see https://wow.gamepedia.com/API_RemoveItemFromArtifact
 * @since 4.0.0
 */
declare function RemoveItemFromArtifact(): boolean;

/**
 * Queries the server for archeology data. RESEARCH_ARTIFACT_HISTORY_READY is fired when data is available
 *
 * @event RESEARCH_ARTIFACT_HISTORY_READY
 * @see https://wow.gamepedia.com/API_RequestArtifactCompletionHistory
 * @since 4.0.0
 */
declare function RequestArtifactCompletionHistory(): void;

/**
 * Socked a Keystone to the selected artifact
 *
 * @returns True if the keystone is successfully added
 * @see https://wow.gamepedia.com/API_SocketItemToArtifact
 * @since 4.0.0
 */
declare function SocketItemToArtifact(): boolean;

/**
 * Solve the selected artifact
 *
 * @see https://wow.gamepedia.com/API_SolveArtifact
 * @since 4.0.0
 */
declare function SolveArtifact(): WoWAPI.Unknown;
