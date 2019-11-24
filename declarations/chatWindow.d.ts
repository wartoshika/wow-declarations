/** @noSelfInFile */

declare const AUTOCOMPLETE_FLAG_NONE = 0x00000000;
declare const AUTOCOMPLETE_FLAG_IN_GROUP = 0x00000001;
declare const AUTOCOMPLETE_FLAG_IN_GUILD = 0x00000002;
declare const AUTOCOMPLETE_FLAG_FRIEND = 0x00000004;
declare const AUTOCOMPLETE_FLAG_INTERACTED_WITH = 0x00000010;
declare const AUTOCOMPLETE_FLAG_ONLINE = 0x00000020;
declare const AUTOCOMPLETE_FLAG_ALL = 0xffffffff;

declare namespace WoWAPI {
    type ChatTypeInfoBody = { r: number, g: number, b: number, id: string, sticky: boolean };

    type ChatTypeInfo = {
        SYSTEM: ChatTypeInfoBody,
        SAY: ChatTypeInfoBody,
        PARTY: ChatTypeInfoBody,
        RAID: ChatTypeInfoBody,
        GUILD: ChatTypeInfoBody,
        OFFICER: ChatTypeInfoBody,
        YELL: ChatTypeInfoBody,
        WHISPER: ChatTypeInfoBody,
        WHISPER_INFORM: ChatTypeInfoBody,
        REPLY: ChatTypeInfoBody,
        EMOTE: ChatTypeInfoBody,
        TEXT_EMOTE: ChatTypeInfoBody,
        MONSTER_SAY: ChatTypeInfoBody,
        MONSTER_PARTY: ChatTypeInfoBody,
        MONSTER_YELL: ChatTypeInfoBody,
        MONSTER_WHISPER: ChatTypeInfoBody,
        MONSTER_EMOTE: ChatTypeInfoBody,
        CHANNEL: ChatTypeInfoBody,
        CHANNEL_JOIN: ChatTypeInfoBody,
        CHANNEL_LEAVE: ChatTypeInfoBody,
        CHANNEL_LIST: ChatTypeInfoBody,
        CHANNEL_NOTICE: ChatTypeInfoBody,
        CHANNEL_NOTICE_USER: ChatTypeInfoBody,
        AFK: ChatTypeInfoBody,
        DND: ChatTypeInfoBody,
        IGNORED: ChatTypeInfoBody,
        SKILL: ChatTypeInfoBody,
        LOOT: ChatTypeInfoBody,
        MONEY: ChatTypeInfoBody,
        OPENING: ChatTypeInfoBody,
        TRADESKILLS: ChatTypeInfoBody,
        PET_INFO: ChatTypeInfoBody,
        COMBAT_MISC_INFO: ChatTypeInfoBody,
        COMBAT_XP_GAIN: ChatTypeInfoBody,
        COMBAT_HONOR_GAIN: ChatTypeInfoBody,
        COMBAT_FACTION_CHANGE: ChatTypeInfoBody,
        BG_SYSTEN_NEUTRAL: ChatTypeInfoBody,
        BG_SYSTEM_ALLIANCE: ChatTypeInfoBody,
        BG_SYSTEN_HORDE: ChatTypeInfoBody,
        RAID_LEADER: ChatTypeInfoBody,
        RAID_WARNING: ChatTypeInfoBody,
        RAID_BOSS_WHISPER: ChatTypeInfoBody,
        RAID_BOSS_EMOTE: ChatTypeInfoBody,
        FILTERED: ChatTypeInfoBody,
        BATTLEGROUND: ChatTypeInfoBody,
        BATTLEGROUND_LEADER: ChatTypeInfoBody,
        RESTRICTED: ChatTypeInfoBody,
        CHANNEL1: ChatTypeInfoBody,
        CHANNEL2: ChatTypeInfoBody,
        CHANNEL3: ChatTypeInfoBody,
        CHANNEL4: ChatTypeInfoBody,
        CHANNEL5: ChatTypeInfoBody,
        CHANNEL6: ChatTypeInfoBody,
        CHANNEL7: ChatTypeInfoBody,
        CHANNEL8: ChatTypeInfoBody,
        CHANNEL9: ChatTypeInfoBody,
        CHANNEL10: ChatTypeInfoBody,
        ACHIVEMENT: ChatTypeInfoBody,
        GUILD_ACHIVEMENT: ChatTypeInfoBody
    };

    /**
     * the chat frame instance
     */
    interface ChatFrame {

        /**
         * add the given message to the frame
         * @param message the message to add
         */
        AddMessage(message: string): void;
    }
}

declare const ChatTypeInfo: WoWAPI.ChatTypeInfo;

/**
 * Retrieves configuration information about a chat window
 * @param frameIndex The index of the chat window to get information for (starts at 1 to NUM_CHAT_WINDOWS).
 * @see https://wow.gamepedia.com/API_GetChatWindowInfo
 * @tupleReturn
 */
declare function GetChatWindowInfo(frameIndex: number): [string, number, number, number, number, WoWAPI.Flag, WoWAPI.Flag, number];

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
declare function GetChatTypeIndex(typeCode: keyof WoWAPI.ChatTypeInfo): number;

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
