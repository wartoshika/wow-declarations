/** @noSelfInFile */

declare namespace WoWAPI {
    type ChannelChatType = "SAY" | "EMOTE" | "YELL" | "PARTY" | "GUILD" | "OFFICER" | "RAID" | "RAID_WARNING" | "INSTANCE_CHAT" | "WHISPER" | "CHANNEL" |
                           "AFK" | "DND";
    type ChannelLanguageId = 1 | 2 | 3 | 6 | 7 | 8 | 10 | 13 | 14 | 33 | 35 | 40 | 43 | 44;
}

/**
 * Makes messages from a specified chat channel output in a specific chat frame
 * - A single channel may be configured to display in multiple chat windows/frames
 * - Chat output architecture has changed since release; calling this function alone is no longer sufficient to add a channel
 * to a particular frame in the default UI. Use ChatFrame_AddChannel(chatFrame, "channelName") instead, like so
 * @param windowId index of the chat window/frame (ascending from 1) to add the channel to
 * @param channelName name of the chat channel to add to the frame
 * @see https://wow.gamepedia.com/API_AddChatWindowChannel
 */
declare function AddChatWindowChannel(windowId: number, channelName: string): void;

/**
 * Bans a player from the specified channel
 * @param channelName The name of the channel to ban on
 * @param playerName The name of the player to ban
 * @see https://wow.gamepedia.com/API_ChannelBan
 */
declare function ChannelBan(channelName: string, playerName: string): void;

/**
 * Invites the specified user to the channel
 * @param channelName The name of the channel to invite to
 * @param playerName The name of the player to invite
 * @see https://wow.gamepedia.com/API_ChannelInvite
 */
declare function ChannelInvite(channelName: string, playerName: string): void;

/**
 * Kicks the specified user to the channel
 * @param channelName The name of the channel to kick from
 * @param playerName The name of the player to kick
 * @see https://wow.gamepedia.com/API_ChannelKick
 */
declare function ChannelKick(channelName: string, playerName: string): void;

/**
 * Sets the specified player as the channel moderator
 * @param channelName The name of the channel to set moderator status on
 * @param playerName The name of the player to set as a moderator
 * @see https://wow.gamepedia.com/API_ChannelModerator
 */
declare function ChannelModerator(channelName: string, playerName: string): void;

/**
 * Turns off the specified player's ability to speak in a channel
 * @param channelName The name of the channel to mute on
 * @param playerName The name of the player to mute
 * @see https://wow.gamepedia.com/API_ChannelMute
 */
declare function ChannelMute(channelName: string, playerName: string): void;

/**
 * Toggles the channel to display announcements either on or off
 * @param channelName The name of the channel to toggle announcements on
 * @param name unknown
 * @see https://wow.gamepedia.com/API_ChannelToggleAnnouncements
 */
declare function ChannelToggleAnnouncements(channelName: string, name: string): void;

/**
 * Unbans a player from the specified channel
 * @param channelName The name of the channel to remove the ban on
 * @param playerName The name of the player to unban
 * @see https://wow.gamepedia.com/API_ChannelUnban
 */
declare function ChannelUnban(channelName: string, playerName: string): void;

/**
 * Takes the specified user away from the moderator status
 * @param channelName The name of the channel to remove moderator status on
 * @param playerName The name of the player to remove moderator status from
 * @see https://wow.gamepedia.com/API_ChannelUnmoderator
 */
declare function ChannelUnmoderator(channelName: string, playerName: string): void;

/**
 * Unmutes the specified user on the channel
 * @param channelName The name of the channel to remove mute on
 * @param playerName The name of the player to remove mute from (allow to speak)
 * @see https://wow.gamepedia.com/API_ChannelUnmute
 */
declare function ChannelUnmute(channelName: string, playerName: string): void;

/**
 * Displays the name of the owner of the specified channel in the Default Chat Frame. Same as typing "/owner <channel>" in chat
 * @param channelName The name of the channel
 * @see https://wow.gamepedia.com/API_DisplayChannelOwner
 */
declare function DisplayChannelOwner(channelName: string): void;

/**
 * Retrieves all available server channels (zone dependent).
 * @returns channel1, channel2, ...
 * @see https://wow.gamepedia.com/API_EnumerateServerChannels
 * @tupleReturn
 */
declare function EnumerateServerChannels(): [...string[]];

/**
 * Retrieves joined channels
 * @returns id1, name1, disabled1, ...
 * @see https://wow.gamepedia.com/API_GetChannelList
 * @tupleReturn
 */
// tslint:disable-next-line max-line-length
declare function GetChannelList(): [number, string, boolean, number, string, boolean, number, string, boolean, number, string, boolean, number, string, boolean, number, string, boolean];

/**
 * Returns information about the specified channel
 * - **return1**: the id of the channel, or 0 if the channel is not found
 * - **return2**: the name of the channel, e.g. "Trade - Stormwind", or nil if the player is not in the queried channel
 * - **return3**: ?, usually 0
 * @param channelIdOrName Channel id to query, e.g. 1 for the chat channel currently addressable using /1 or Name of the channel to query, e.g. "Trade - City".
 * @see https://wow.gamepedia.com/API_GetChannelName
 * @tupleReturn
 */
declare function GetChannelName(channelIdOrName: number | string): [number, string, number];

/**
 * Get the channels received by a chat window
 * @param frameId The frame number of the chat frame to be queried (starts at 1).
 * @returns name1, zone1, name2, zone2, ...
 * @see https://wow.gamepedia.com/API_GetChatWindowChannels
 * @tupleReturn
 */
// tslint:disable-next-line max-line-length
declare function GetChatWindowChannels(frameId: number): [string, number, string, number, string, number, string, number, string, number, string, number, string, number];

/**
 * Joins the channel with the specified name. A player can be in a maximum of 10 chat channels. In opposite to API_JoinTemporaryChannel
 * the channel will be re-joined after relogging
 * @param channelName The name of the channel to join
 * @param password The channel password, nil if none
 * @param frameId The chat frame ID number to add the channel to. Use Frame:GetID() to retrieve it for chat frame objects
 * @param hasVoice Enable voice chat for this channel
 * @returns **
 *  - The type of channel. 0 for a undefined channel, 1 for the zone General channel, etc
 *  - The name of the channel (Ohklus: seems to be nil for most channels)
 * @see https://wow.gamepedia.com/API_JoinChannelByName
 */
declare function JoinChannelByName(channelName: string, password?: string, frameId?: number, hasVoice?: boolean): [number, string];

/**
 * Joins the channel with the specified name. A player can be in a maximum of 10 chat channels. In opposite to API_JoinTemporaryChannel
 * the channel will be re-joined after relogging
 * @param channelName The name of the channel to join
 * @param password The channel password, nil if none
 * @param frameId The chat frame ID number to add the channel to. Use Frame:GetID() to retrieve it for chat frame objects
 * @param hasVoice Enable voice chat for this channel
 * @returns **
 *  - The type of channel. 0 for a undefined channel, 1 for the zone General channel, etc
 *  - The name of the channel (Ohklus: seems to be nil for most channels)
 * @see https://wow.gamepedia.com/API_JoinPermanentChannel
 * @tupleReturn
 */
declare function JoinPermanentChannel(channelName: string, password?: string, frameId?: number, hasVoice?: boolean): [number, string];

/**
 * Joins the channel with the specified name. A player can be in a maximum of 10 chat channels. In opposite to API_JoinPermanentChannel
 * the channel will be left at logout
 * @param channelName The name of the channel to join
 * @param password The channel password, nil if none
 * @param frameId The chat frame ID number to add the channel to. Use Frame:GetID() to retrieve it for chat frame objects
 * @param hasVoice Enable voice chat for this channel
 * @returns **
 *  - The type of channel. 0 for a undefined channel, 1 for the zone General channel, etc
 *  - The name of the channel (Ohklus: seems to be nil for most channels)
 * @see https://wow.gamepedia.com/API_JoinTemporaryChannel
 * @tupleReturn
 */
declare function JoinTemporaryChannel(channelName: string, password?: string, frameId?: number, hasVoice?: boolean): [number, string];

/**
 * Leaves the channel with the specified name
 * @param channelName The name of the channel to leave
 * @see https://wow.gamepedia.com/API_LeaveChannelByName
 */
declare function LeaveChannelByName(channelName: string): void;

/**
 * Lists members in the given channel to the chat window
 * @param channelName Case-insensitive channel name or channel number from which to list the members, e.g. "trade - city". If no argument
 * is given, list all of the numbered channels you are a member of
 * @see https://wow.gamepedia.com/API_ListChannelByName
 */
declare function ListChannelByName(channelName?: string | number): WoWAPI.Unknown;

/**
 * Lists all of the channels
 * @see https://wow.gamepedia.com/API_ListChannels
 */
declare function ListChannels(): void;

/**
 * Blocks further messages from a specified chat channel from appearing in a specific chat frame
 * @param windowId index of the chat window/frame (ascending from 1) to remove the channel from
 * @param channelName name of the chat channel to remove from the frame
 * @description Chat output architecture has changed since release; calling this function alone is no longer sufficient to block a channel
 * from a particular frame in the default UI. Use ChatFrame_RemoveChannel(chatFrame, "channelName") instead
 * @see https://wow.gamepedia.com/API_RemoveChatWindowChannel
 */
declare function RemoveChatWindowChannel(windowId: number, channelName: string): void;

/**
 * Sends a chat message
 * @param message The message to be sent, maximum length of 255 characters. (Not all characters in this string are allowed: See list of valid
 * chat message characters)
 * @param chatType The type of chat message to be sent, "SAY", "PARTY", etc. See the list of chatTypeIds. If chatType is nil or omitted then "SAY" will be used
 * @param languageId The languageID used to translate the message. If languageID is nil or omitted the default language will be used:
 * Orcish for the Horde, and Common for the Alliance, as returned by GetDefaultLanguage("player").
 * @param channelOrName The channel or player receiving the message for "CHANNEL"/"WHISPER" communication. If sending to a channel you must
 * use the number (eg. "1"); obtain it using GetChannelName("channelName"). This field is required for the "CHANNEL"/"WHISPER" chat types and
 * ignored for any other chat type
 * @see https://wow.gamepedia.com/API_SendChatMessage
 */
declare function SendChatMessage(message: string, chatType?: WoWAPI.ChannelChatType, languageId?: WoWAPI.ChannelLanguageId, channelOrName?: string): void;

/**
 * Sets the channel owner
 * @param channelName channel name to be changed
 * @param newOwner the new owner of the channel
 * @see https://wow.gamepedia.com/API_SetChannelOwner
 */
declare function SetChannelOwner(channelName: string, newOwner: string): void;

/**
 * Changes the password of the current channel
 * @param channelName The name of the channel
 * @param password The password to assign to the channel
 * @see https://wow.gamepedia.com/API_SetChannelPassword
 */
declare function SetChannelPassword(channelName: string, password: string): void;
