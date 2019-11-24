/** @noSelfInFile */

declare namespace WoWAPI {
    type QuestType = "required" | "reward" | "choice";
    type QuestState = "OFFER" | "COMPLETE";
}

/**
 * Abandons the quest specified by SetAbandonQuest
 * @see https://wow.gamepedia.com/API_AbandonQuest
 */
declare function AbandonQuest(): void;

/**
 * Accepts the currently offered quest
 * @description You can call this function once the QUEST_DETAIL event fires
 * @see https://wow.gamepedia.com/API_AcceptQuest
 */
declare function AcceptQuest(): void;

/**
 * Acknowledges that the currently-offered auto-accept quest has been accepted by the player
 * - Quests flagged for auto-accept are forced into the player's quest log immediately, rendering accepting the quest a mere formality
 * - Calling this function allows the server to keep track of whether it should keep trying to get you to accept the quest via autoquest popups
 * - You'll acknowledge the last quest for which the QUEST_DETAIL event fired
 * @since 5.0.4
 * @see https://wow.gamepedia.com/API_AcknowledgeAutoAcceptQuest
 */
declare function AcknowledgeAutoAcceptQuest(): void;

/**
 * Adds a popup notification to the objectives tracker, showing that a quest is available or completed
 * @param questId the quest id
 * @param type popup type, one of "OFFER" or "COMPLETE"
 * @see https://wow.gamepedia.com/API_AddAutoQuestPopUp
 */
declare function AddAutoQuestPopUp(questId: number, type: WoWAPI.QuestState): void;

/**
 * Adds a quest to the list of quests being watched with an optional time to watch it
 * @param questIndex The index of the quest in the quest log
 * @param watchTime The amount of time to watch the quest in seconds
 * @see https://wow.gamepedia.com/API_AddQuestWatch
 */
declare function AddQuestWatch(questIndex: number, watchTime: number): void;

/**
 * Unknown
 * @param questId the quest id
 */
declare function AddWorldQuestWatch(questId: number): WoWAPI.Unknown;

/**
 * Returns whether the player can abandon a specific quest
 * @param questId quest ID of the quest to query, e.g. 5944 for N [60G] In Dreams
 * @returns 1 if the player is currently on the specified quest and can abandon it, nil otherwise
 * @see https://wow.gamepedia.com/API_CanAbandonQuest
 */
declare function CanAbandonQuest(questId: number): WoWAPI.Flag;

/**
 * Unknown
 */
declare function ClearAutoAcceptQuestSound(): WoWAPI.Unknown;

/**
 * Closes the shown quest
 */
declare function CloseQuest(): WoWAPI.Unknown;

/**
 * Collapses the quest header
 * @param questId The quest ID of the header you wish to collapse - 0 to collapse all quest headers
 * @see https://wow.gamepedia.com/API_CollapseQuestHeader
 */
declare function CollapseQuestHeader(questId: number): void;

/**
 * Advances the quest completion dialog to the reward selection step
 * - Unlike the name would suggest, this does not finalize the completion of a quest. Instead it is called when you press the continue button,
 * and is used to continue from the progress dialog to the completion dialog
 * - If you're interested in hooking the function called when completing a quest, check out QuestRewardCompleteButton_OnClick
 * (in FrameXML\QuestFrame.lua) instead
 * @see https://wow.gamepedia.com/API_CompleteQuest
 */
declare function CompleteQuest(): void;

/**
 * Accept an escort quest being started by a player nearby
 * - Can be used after the QUEST_ACCEPT_CONFIRM event has fired
 * @see https://wow.gamepedia.com/API_ConfirmAcceptQuest
 */
declare function ConfirmAcceptQuest(): void;

/**
 * Declines the currently offered quest.
 * - You can call this function once the QUEST_DETAIL event fires
 * @see https://wow.gamepedia.com/API_DeclineQuest
 */
declare function DeclineQuest(): void;

/**
 * Expands the quest header
 * - Expands the first quest header (questID = 1 is always yields a header if you have quests) if it was collapsed; if not, does nothing.
 * Also fires a QUEST_LOG_UPDATE event so be careful when calling this while processing a QUEST_LOG_UPDATE event
 * @param questId The index of the header you wish to expand. - 0 to expand all quest headers
 * @see https://wow.gamepedia.com/API_ExpandQuestHeader
 */
declare function ExpandQuestHeader(questId: number): void;

/**
 * Unknown
 */
declare function GetAbandonQuestItems(): WoWAPI.Unknown;

/**
 * Returns the name of a quest that will be abandoned if AbandonQuest is called
 * - The FrameXML-provided quest log calls SetAbandonQuest whenever a quest entry is selected, so this function will usually return the name of
 * the currently selected quest
 * @returns Name of the quest that will be abandoned
 * @see https://wow.gamepedia.com/API_GetAbandonQuestName
 */
declare function GetAbandonQuestName(): string;

/**
 * Returns true if a quest is possible to complete
 * @see https://wow.gamepedia.com/API_IsQuestCompletable
 */
declare function IsQuestCompletable(): boolean;

/**
 * Returns the number of items nessecary to complete a particular quest
 * @see https://wow.gamepedia.com/API_GetNumQuestItems
 */
declare function GetNumQuestItems(): number;
