/** @noSelfInFile */

declare const AUTOCOMPLETE_FLAG_NONE = 0x00000000;
declare const AUTOCOMPLETE_FLAG_IN_GROUP = 0x00000001;
declare const AUTOCOMPLETE_FLAG_IN_GUILD = 0x00000002;
declare const AUTOCOMPLETE_FLAG_FRIEND = 0x00000004;
declare const AUTOCOMPLETE_FLAG_INTERACTED_WITH = 0x00000010;
declare const AUTOCOMPLETE_FLAG_ONLINE = 0x00000020;
declare const AUTOCOMPLETE_FLAG_ALL = 0xffffffff;

declare type WowChatTypeInfoBody = { r: number, g: number, b: number, id: string, sticky: boolean };

declare type WowChatTypeInfo = {
    SYSTEM: WowChatTypeInfoBody,
    SAY: WowChatTypeInfoBody,
    PARTY: WowChatTypeInfoBody,
    RAID: WowChatTypeInfoBody,
    GUILD: WowChatTypeInfoBody,
    OFFICER: WowChatTypeInfoBody,
    YELL: WowChatTypeInfoBody,
    WHISPER: WowChatTypeInfoBody,
    WHISPER_INFORM: WowChatTypeInfoBody,
    REPLY: WowChatTypeInfoBody,
    EMOTE: WowChatTypeInfoBody,
    TEXT_EMOTE: WowChatTypeInfoBody,
    MONSTER_SAY: WowChatTypeInfoBody,
    MONSTER_PARTY: WowChatTypeInfoBody,
    MONSTER_YELL: WowChatTypeInfoBody,
    MONSTER_WHISPER: WowChatTypeInfoBody,
    MONSTER_EMOTE: WowChatTypeInfoBody,
    CHANNEL: WowChatTypeInfoBody,
    CHANNEL_JOIN: WowChatTypeInfoBody,
    CHANNEL_LEAVE: WowChatTypeInfoBody,
    CHANNEL_LIST: WowChatTypeInfoBody,
    CHANNEL_NOTICE: WowChatTypeInfoBody,
    CHANNEL_NOTICE_USER: WowChatTypeInfoBody,
    AFK: WowChatTypeInfoBody,
    DND: WowChatTypeInfoBody,
    IGNORED: WowChatTypeInfoBody,
    SKILL: WowChatTypeInfoBody,
    LOOT: WowChatTypeInfoBody,
    MONEY: WowChatTypeInfoBody,
    OPENING: WowChatTypeInfoBody,
    TRADESKILLS: WowChatTypeInfoBody,
    PET_INFO: WowChatTypeInfoBody,
    COMBAT_MISC_INFO: WowChatTypeInfoBody,
    COMBAT_XP_GAIN: WowChatTypeInfoBody,
    COMBAT_HONOR_GAIN: WowChatTypeInfoBody,
    COMBAT_FACTION_CHANGE: WowChatTypeInfoBody,
    BG_SYSTEN_NEUTRAL: WowChatTypeInfoBody,
    BG_SYSTEM_ALLIANCE: WowChatTypeInfoBody,
    BG_SYSTEN_HORDE: WowChatTypeInfoBody,
    RAID_LEADER: WowChatTypeInfoBody,
    RAID_WARNING: WowChatTypeInfoBody,
    RAID_BOSS_WHISPER: WowChatTypeInfoBody,
    RAID_BOSS_EMOTE: WowChatTypeInfoBody,
    FILTERED: WowChatTypeInfoBody,
    BATTLEGROUND: WowChatTypeInfoBody,
    BATTLEGROUND_LEADER: WowChatTypeInfoBody,
    RESTRICTED: WowChatTypeInfoBody,
    CHANNEL1: WowChatTypeInfoBody,
    CHANNEL2: WowChatTypeInfoBody,
    CHANNEL3: WowChatTypeInfoBody,
    CHANNEL4: WowChatTypeInfoBody,
    CHANNEL5: WowChatTypeInfoBody,
    CHANNEL6: WowChatTypeInfoBody,
    CHANNEL7: WowChatTypeInfoBody,
    CHANNEL8: WowChatTypeInfoBody,
    CHANNEL9: WowChatTypeInfoBody,
    CHANNEL10: WowChatTypeInfoBody,
    ACHIVEMENT: WowChatTypeInfoBody,
    GUILD_ACHIVEMENT: WowChatTypeInfoBody
};
declare const WowChatTypeInfo: WowChatTypeInfo;

/**
 * Retrieves configuration information about a chat window
 * @param frameIndex The index of the chat window to get information for (starts at 1 to NUM_CHAT_WINDOWS).
 * @see https://wow.gamepedia.com/API_GetChatWindowInfo
 * @tupleReturn
 */
declare function GetChatWindowInfo(frameIndex: number): [string, number, number, number, number, WowFlag, WowFlag, number];

/**
 * Get the channels received by a chat window.
 * @param frameIndex The frame number of the chat frame to be queried (starts at 1).
 * @see https://wow.gamepedia.com/API_GetChatWindowChannels
 * @tupleReturn
 */
declare function GetChatWindowChannels(frameIndex: number): [string, number, string, number, string, number];

/**
 * Blocks further messages from a specified chat channel from appearing in a specific chat frame
 * @param frameIndex index of the chat window/frame (ascending from 1) to remove the channel from
 * @param channelName name of the chat channel to remove from the frame
 * @see https://wow.gamepedia.com/API_RemoveChatWindowChannel
 */
declare function RemoveChatWindowChannel(frameIndex: number, channelName: string): void;

/**
 * Returns chat types received by a chat window
 * @param frameIndex Chat window index, ascending from 1
 * @see https://wow.gamepedia.com/API_GetChatWindowMessages
 * @tupleReturn
 */
declare function GetChatWindowMessages(frameIndex: number): [...string[]];

/**
 * Stops the specified chat window from displaying a specified type of messages
 * @param frameIndex chat window index, ascending from 1.
 * @param messageGroup message type the chat window should no longer receive, e.g. "EMOTE", "SAY", "RAID".
 */
declare function RemoveChatWindowMessages(frameIndex: number, messageGroup: string): void;

/**
 * Changes the text color of the specified chat channel. The "color wheel" popup calls this function to do the actual work, once the user is done with the popup
 * @param channelName Name of the channel as given in chat-cache.txt files
 * @param red red value 0-1
 * @param green green value 0-1
 * @param blue blue value 0-1
 * @see https://wow.gamepedia.com/API_ChangeChatColor
 */
declare function ChangeChatColor(channelName: string, red: number, green: number, blue: number): void;

/**
 * Returns possible player names matching a given prefix string and specified requirements
 * @param text first characters of the possible names to be autocompleted
 * @param include bit mask of filters that the results must match at least one of
 * @param exclude bit mask of filters that the results must not match any of
 * @param maxResults number of results desired
 * @param cursorPosition position of the cursor within the editbox (i.e. how much of the text string should be matching)
 * @see https://wow.gamepedia.com/API_GetAutoCompleteResults
 * @tupleReturn
 */
declare function GetAutoCompleteResults(text: string, include: number, exclude: number, maxResults: number, cursorPosition?: number): [...string[]];

/**
 * Return the numeric type index for a specific chat type
 * @param typeCode The type code for the chat type (One of the key values of the ChatTypeInfo table)
 * @returns The numeric type index for that chat type, used as the ID number for coloring
 * @see https://wow.gamepedia.com/API_GetChatTypeIndex
 */
declare function GetChatTypeIndex(typeCode: keyof WowChatTypeInfo): number;

/**
 * Toggles the chat logging and returns the current state
 * @param newState toggles chat logging
 * @returns current state of logging
 * @see https://wow.gamepedia.com/API_LoggingChat
 */
declare function LoggingChat(newState?: boolean): boolean;

/**
 * Toggles logging for the combat log and returns the current state
 * @param newState Toggles combat logging
 * @returns current state of logging
 * @see https://wow.gamepedia.com/API_LoggingCombat
 */
declare function LoggingCombat(newState?: boolean): boolean;

/**
 * the chat frame instance
 */
declare interface WowChatFrame {

    /**
     * add the given message to the frame
     * @param message the message to add
     */
    AddMessage(message: string): void;
}
