/**
 * Retrieves configuration information about a chat window
 * @param frameIndex The index of the chat window to get information for (starts at 1 to NUM_CHAT_WINDOWS).
 * @see https://wow.gamepedia.com/API_GetChatWindowInfo
 */
declare function GetChatWindowInfo(frameIndex: number): [string, number, number, number, number, WowFlag, WowFlag, number];

/**
 * Get the channels received by a chat window.
 * @param frameIndex The frame number of the chat frame to be queried (starts at 1).
 * @see https://wow.gamepedia.com/API_GetChatWindowChannels
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
 */
declare function GetChatWindowMessages(frameIndex: number): [...string[]];

/**
 * Stops the specified chat window from displaying a specified type of messages
 * @param frameIndex chat window index, ascending from 1.
 * @param messageGroup message type the chat window should no longer receive, e.g. "EMOTE", "SAY", "RAID".
 */
declare function RemoveChatWindowMessages(frameIndex: number, messageGroup: string): void;

/**
 * the chat frame instance
 */
declare interface WowChatFrame {

    /**
     * add the given message to the frame
     * @param message the message to add
     */
    AddMessage(message: string): void
}