/** @noSelfInFile */

declare type QUEST_FREQUENCY_NORMAL = 1;
declare type QUEST_FREQUENCY_DAILY = 2;
declare type QUEST_FREQUENCY_WEEKLY = 3;
declare type QUEST_FREQUENCY = QUEST_FREQUENCY_NORMAL | QUEST_FREQUENCY_DAILY | QUEST_FREQUENCY_WEEKLY;

declare type GOSSIP_TYPE_BANKER = "banker";
declare type GOSSIP_TYPE_BATTLEMASTER = "battlemaster";
declare type GOSSIP_TYPE_BINDER = "binder";
declare type GOSSIP_TYPE_GOSSIP = "gossip";
declare type GOSSIP_TYPE_HEALER = "healer";
declare type GOSSIP_TYPE_PETITION = "petition";
declare type GOSSIP_TYPE_TABARD = "tabard";
declare type GOSSIP_TYPE_TAXI = "taxi";
declare type GOSSIP_TYPE_TRAINER = "trainer";
declare type GOSSIP_TYPE_UNLEARN = "unlearn";
declare type GOSSIP_TYPE_VENDOR = "vendor";
declare type GOSSIP_TYPE_WORKORDER = "workorder";

/**
 * all currently known gossip types
 */
declare type GOSSIP_TYPE = GOSSIP_TYPE_BANKER | GOSSIP_TYPE_BATTLEMASTER | GOSSIP_TYPE_BINDER | GOSSIP_TYPE_GOSSIP | GOSSIP_TYPE_HEALER |
    GOSSIP_TYPE_PETITION | GOSSIP_TYPE_TABARD | GOSSIP_TYPE_TAXI | GOSSIP_TYPE_TRAINER | GOSSIP_TYPE_UNLEARN | GOSSIP_TYPE_VENDOR |
    GOSSIP_TYPE_WORKORDER;

/**
 * Dismiss the gossip dialog
 *
 * @see https://wow.gamepedia.com/API_CloseGossip
 */
declare function CloseGossip(): void;

/**
 * Returns whether the gossip text must be displayed
 *
 * @returns 1 if the client should display the gossip text for this NPC, nil if it is okay to skip directly to the only interaction option available
 * @see https://wow.gamepedia.com/API_ForceGossip
 */
declare function ForceGossip(): WoWAPI.Flag;

/**
 * Get the list of active quests from an NPC.
 *
 * @returns title1, level1, isLowLevel1, isComplete1, isLegendary1, isIgnored1, title2, level2, isLowLevel2, isComplete2, isLegendary2, isIgnored2
 * @see https://wow.gamepedia.com/API_GetGossipActiveQuests
 * @description The number of returned values per quest has increased again to 6
 * @tupleReturn
 */
declare function GetGossipActiveQuests(): [string, string, boolean, boolean, boolean];

/**
 * Returns a list of available quests from an NPC
 *
 * @returns title1, level1, isTrivial1, frequency1, isRepeatable1, isLegendary1, isIgnored1 ...
 * @see https://wow.gamepedia.com/API_GetGossipAvailableQuests
 * @tupleReturn
 */
declare function GetGossipAvailableQuests(): [string, number, boolean, QUEST_FREQUENCY, boolean, boolean, boolean];

/**
 * Get the available gossip items on an NPC (possibly stuff like the BWL and MC orbs too).
 *
 * @returns title1, gossip1, ...
 * @see https://wow.gamepedia.com/API_GetGossipOptions
 * @tupleReturn
 */
declare function GetGossipOptions(): [string, GOSSIP_TYPE];

/**
 * Get the gossip text
 *
 * @returns The text of the gossip
 * @see https://wow.gamepedia.com/API_GetGossipText
 */
declare function GetGossipText(): string;

/**
 * Returns the number of active quests that you should eventually turn in to this NPC
 *
 * @returns Number of quests you're on that should be turned in to the NPC you're gossiping with
 * @see https://wow.gamepedia.com/API_GetNumGossipActiveQuests
 */
declare function GetNumGossipActiveQuests(): number;

/**
 * Returns the number of quests (that you are not already on) offered by this NPC
 *
 * @returns Number of quests you can pick up from this NPC
 * @see https://wow.gamepedia.com/API_GetNumGossipAvailableQuests
 */
declare function GetNumGossipAvailableQuests(): number;

/**
 * Returns the number of conversation options available with this NPC
 *
 * @returns Number of conversation options you can select
 * @see https://wow.gamepedia.com/API_GetNumGossipOptions
 */
declare function GetNumGossipOptions(): number;

/**
 * Selects an active quest from a gossip list
 *
 * @param gossipIndex Index of the active quest to select, from 1 to GetNumGossipActiveQuests(); order corresponds to the order of return
 * values from GetGossipActiveQuests().
 * @event QUEST_PROGRESS
 * @see https://wow.gamepedia.com/API_SelectGossipActiveQuest
 */
declare function SelectGossipActiveQuest(gossipIndex: number): void;

/**
 * Selects an available quest from a gossip list.
 *
 * @param gossipIndex Index of the available quest to select, from 1 to GetNumGossipAvailableQuests(); order corresponds to the order of return
 * values from GetGossipAvailableQuests().
 * @event QUEST_PROGRESS
 * @see https://wow.gamepedia.com/API_SelectGossipAvailableQuest
 */
declare function SelectGossipAvailableQuest(gossipIndex: number): void;

/**
 * Selects a gossip (conversation) option
 *
 * @param gossipIndex Index of the gossip option to select, from 1 to GetNumGossipOptions(); order corresponds to the order of return values from
 * GetGossipOptions().
 * @see https://wow.gamepedia.com/API_SelectGossipOption
 */
declare function SelectGossipOption(gossipIndex: number): void;
