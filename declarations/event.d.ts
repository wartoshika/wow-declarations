/** @noSelfInFile */

declare namespace WoWAPI {
    type TypedEvents = {

        /**
         * Fired when an achievement is gained
         * - **arg1**: The id of the achievement gained
         * @since 3.0.3
         * @see https://wow.gamepedia.com/ACHIEVEMENT_EARNED
         */
        ACHIEVEMENT_EARNED: [number];

        /**
         * unknown
         */
        ACHIEVEMENT_SEARCH_UPDATED: Unknown[];

        /**
         * Fired when the actionbar numbers disappear, typically when you finish dragging something to the actionbar
         * - **arg1**: the mouse button used to click the button. Known values: "LeftButton", "RightButton"
         * - **arg2**: true or false for unknown reason
         * @see https://wow.gamepedia.com/ACTIONBAR_HIDEGRID
         */
        ACTIONBAR_HIDEGRID: [MouseButton, boolean];

        /**
         * Fired when the actionbar page changes, typically when you press the pageup or pagedown button
         * - **arg1**: the mouse button used to click the button. Known values: "LeftButton", "RightButton"
         * - **arg2**: true or false for unknown reason
         * @see https://wow.gamepedia.com/ACTIONBAR_PAGE_CHANGED
         */
        ACTIONBAR_PAGE_CHANGED: [MouseButton, boolean];

        /**
         * Fired when the actionbar numbers appear, typically when you drag a spell to the actionbar
         * @see https://wow.gamepedia.com/ACTIONBAR_SHOWGRID
         */
        ACTIONBAR_SHOWGRID: null;

        /**
         * unknown
         */
        ACTIONBAR_SHOW_BOTTOMLEFT: Unknown[];

        /**
         * Fired when any actionbar slot's contents change; typically the picking up and dropping of buttons
         * - **arg1**: the number of the slot that changed
         * - **arg2**: true or false for unknown reason.
         * @see https://wow.gamepedia.com/ACTIONBAR_SLOT_CHANGED
         */
        ACTIONBAR_SLOT_CHANGED: [number, boolean];

        /**
         * Fired when the cooldown for an actionbar or inventory slot starts or stops. Also fires when you log into a new area
         * - **arg1**: if the cooldown is starting, the mouse button used to click the button. Known values: "leftButton". if the cooldown
         * is stopping or you are logging into a new zone, this is nil
         * @see https://wow.gamepedia.com/ACTIONBAR_UPDATE_COOLDOWN
         */
        ACTIONBAR_UPDATE_COOLDOWN: [MouseButton | null];

        /**
         * Fired when the state of anything on the actionbar changes. This includes cooldown and disabling
         * - **arg1**: the mouse button used to click the button. Known values: "LeftButton", "RightButton" can also be nil
         * @see https://wow.gamepedia.com/ACTIONBAR_UPDATE_STATE
         */
        ACTIONBAR_UPDATE_STATE: [MouseButton | null];

        /**
         * Fired when something in the actionbar or your inventory becomes usable (after eating or drinking a potion, or entering/leaving
         * stealth; for example). This is affected by rage/mana/energy available, but not by range
         * @see https://wow.gamepedia.com/ACTIONBAR_UPDATE_USABLE
         */
        ACTIONBAR_UPDATE_USABLE: null;

        /**
         * unknown
         */
        ACTION_WILL_BIND_ITEM: Unknown[];

        /**
         * unknown
         */
        ACTIVATE_GLYPH: Unknown[];

        /**
         * Fired when a player switches changes which talent group (dual specialization) is active
         * - **arg1**: Index of the talent group that is now active
         * - **arg2**: Index of the talent group that was active before changing. Upon logging in this returns 0.
         * @see https://wow.gamepedia.com/ACTIVE_TALENT_GROUP_CHANGED
         */
        ACTIVE_TALENT_GROUP_CHANGED: [number, number];

        /**
         * Addon unload event with unknown payload
         */
        ADDONS_UNLOADING: Unknown[];

        /**
         * (this event doesn't seem to be used anymore, use ADDON_ACTION_FORBIDDEN instead)
         * @deprecated
         * @see https://wow.gamepedia.com/ADDON_ACTION_BLOCKED
         */
        ADDON_ACTION_BLOCKED: null;

        /**
         * Fires when an AddOn tries use actions that are always forbidden (movement, targeting, etc.)
         * - **arg1**: Name of the AddOn that was last involved in the execution path
         * - **arg2**: The protected function that was called
         * @see https://wow.gamepedia.com/ADDON_ACTION_FORBIDDEN
         */
        ADDON_ACTION_FORBIDDEN: [string, string];

        /**
         * Fires when one addon load
         * - **arg1**: addon name that has been loaded
         */
        ADDON_LOADED: [string];

        /**
         * unknown
         */
        ADVENTURE_MAP_CLOSE: Unknown[];

        /**
         * unknown
         */
        ADVENTURE_MAP_OPEN: Unknown[];

        /**
         * unknown
         */
        ADVENTURE_MAP_QUEST_UPDATE: Unknown[];

        /**
         * unknown
         */
        ADVENTURE_MAP_UPDATE_INSETS: Unknown[];

        /**
         * unknown
         */
        ADVENTURE_MAP_UPDATE_POIS: Unknown[];

        /**
         * unknown
         */
        AJ_DUNGEON_ACTION: Unknown[];

        /**
         * unknown
         */
        AJ_OPEN: Unknown[];

        /**
         * unknown
         */
        AJ_PVE_LFG_ACTION: Unknown[];

        /**
         * unknown
         */
        AJ_PVP_ACTION: Unknown[];

        /**
         * unknown
         */
        AJ_PVP_LFG_ACTION: Unknown[];

        /**
         * unknown
         */
        AJ_PVP_RBG_ACTION: Unknown[];

        /**
         * unknown
         */
        AJ_PVP_SKIRMISH_ACTION: Unknown[];

        /**
         * unknown
         */
        AJ_QUEST_LOG_OPEN: Unknown[];

        /**
         * unknown
         */
        AJ_RAID_ACTION: Unknown[];

        /**
         * unknown
         */
        AJ_REFRESH_DISPLAY: Unknown[];

        /**
         * unknown
         */
        AJ_REWARD_DATA_RECEIVED: Unknown[];

        /**
         * unknown
         */
        ALLIED_RACE_CLOSE: Unknown[];

        /**
         * unknown
         */
        ALLIED_RACE_OPEN: Unknown[];

        /**
         * unknown
         */
        ALTERNATIVE_DEFAULT_LANGUAGE_CHANGED: Unknown[];

        /**
         * This event fires whenever the Archaeology window is closed, no matter
         * the method (Clicking on the X, pressing Esc, pressing the Archaeology
         * button, etc)
         * @see https://wow.gamepedia.com/ARCHAEOLOGY_CLOSED
         */
        ARCHAEOLOGY_CLOSED: null;

        /**
         * unknown
         */
        ARCHAEOLOGY_FIND_COMPLETE: Unknown[];

        /**
         * unknown
         */
        ARCHAEOLOGY_SURVEY_CAST: Unknown[];

        /**
         * This event fires whenever the Archaeology button from the spellbook is used. This includes if closing the window by pressing the button again
         * @see https://wow.gamepedia.com/ARCHAEOLOGY_TOGGLE
         */
        ARCHAEOLOGY_TOGGLE: null;

        /**
         * unknown
         */
        AREA_SPIRIT_HEALER_IN_RANGE: Unknown[];

        /**
         * unknown
         */
        AREA_SPIRIT_HEALER_OUT_OF_RANGE: Unknown[];

        /**
         * unknown
         */
        ARENA_COOLDOWNS_UPDATE: Unknown[];

        /**
         * unknown
         */
        ARENA_CROWD_CONTROL_SPELL_UPDATE: Unknown[];

        /**
         * unknown
         */
        ARENA_OPPONENT_UPDATE: Unknown[];

        /**
         * unknown
         */
        ARENA_PREP_OPPONENT_SPECIALIZATIONS: Unknown[];

        /**
         * unknown
         */
        ARENA_SEASON_WORLD_STATE: Unknown[];

        /**
         * unknown
         */
        ARTIFACT_CLOSE: Unknown[];

        /**
         * unknown
         */
        ARTIFACT_DIGSITE_COMPLETE: Unknown[];

        /**
         * unknown
         */
        ARTIFACT_ENDGAME_REFUND: Unknown[];

        /**
         * unknown
         */
        ARTIFACT_RELIC_FORGE_CLOSE: Unknown[];

        /**
         * unknown
         */
        ARTIFACT_RELIC_FORGE_PREVIEW_RELIC_CHANGED: Unknown[];

        /**
         * unknown
         */
        ARTIFACT_RELIC_FORGE_UPDATE: Unknown[];

        /**
         * unknown
         */
        ARTIFACT_RELIC_INFO_RECEIVED: Unknown[];

        /**
         * unknown
         */
        ARTIFACT_RESPEC_PROMPT: Unknown[];

        /**
         * unknown
         */
        ARTIFACT_TIER_CHANGED: Unknown[];

        /**
         * This event fires whenever the data for an artifact has been updated, such as after completing a new one
         * @see https://wow.gamepedia.com/ARTIFACT_UPDATE
         */
        ARTIFACT_UPDATE: null;

        /**
         * Event fired when gaining artifact power for the current equipped artifact weapon
         * @see https://wow.gamepedia.com/ARTIFACT_XP_UPDATE
         */
        ARTIFACT_XP_UPDATE: null;

        /**
         * @see https://wow.gamepedia.com/AUCTION_CANCELED
         */
        AUCTION_CANCELED: [number];

        /**
         * unknown
         * @see https://wow.gamepedia.com/AUCTION_HOUSE_AUCTION_CREATED
         */
        AUCTION_HOUSE_AUCTION_CREATED: [number];

        /**
         * unknown
         * @see https://wow.gamepedia.com/AUCTION_HOUSE_BROWSE_FAILURE
         */
        AUCTION_HOUSE_BROWSE_FAILURE: null;

        /**
         * @see https://wow.gamepedia.com/AUCTION_HOUSE_BROWSE_RESULTS_ADDED
         */
        AUCTION_HOUSE_BROWSE_RESULTS_ADDED: Unknown[];

        /**
         * @see https://wow.gamepedia.com/AUCTION_HOUSE_BROWSE_RESULTS_UPDATED
         */
        AUCTION_HOUSE_BROWSE_RESULTS_UPDATED: null;

        /**
         * This event is fired when the auction interface is closed. It appears to fire twice, but the reason is unknown
         * @see https://wow.gamepedia.com/AUCTION_HOUSE_CLOSED
         */
        AUCTION_HOUSE_CLOSED: null;

        /**
         * Fired when the auction house is not operational
         * @see https://wow.gamepedia.com/AUCTION_HOUSE_DISABLED
         */
        AUCTION_HOUSE_DISABLED: null;

        /**
         * @see https://wow.gamepedia.com/AUCTION_HOUSE_FAVORITES_UPDATED
         */
        AUCTION_HOUSE_FAVORITES_UPDATED: null;

        /**
         * @see https://wow.gamepedia.com/AUCTION_HOUSE_NEW_BID_RECEIVED
         */
        AUCTION_HOUSE_NEW_BID_RECEIVED: [number];

        /**
         * @see https://wow.gamepedia.com/AUCTION_HOUSE_NEW_RESULTS_RECEIVED
         */
        AUCTION_HOUSE_NEW_RESULTS_RECEIVED: Unknown[];

        /**
         * This event is fired when the auction interface is first displayed. This is generally done by right-clicking an auctioneer in a major city
         * @see https://wow.gamepedia.com/AUCTION_HOUSE_SHOW
         */
        AUCTION_HOUSE_SHOW: null;

        /**
         * @see https://wow.gamepedia.com/AUCTION_HOUSE_THROTTLED_MESSAGE_DROPPED
         */
        AUCTION_HOUSE_THROTTLED_MESSAGE_DROPPED: null;

        /**
         * @see https://wow.gamepedia.com/AUCTION_HOUSE_THROTTLED_MESSAGE_QUEUED
         */
        AUCTION_HOUSE_THROTTLED_MESSAGE_QUEUED: null;

        /**
         * @see https://wow.gamepedia.com/AUCTION_HOUSE_THROTTLED_MESSAGE_RESPONSE_RECEIVED
         */
        AUCTION_HOUSE_THROTTLED_MESSAGE_RESPONSE_RECEIVED: null;

        /**
         * @see https://wow.gamepedia.com/AUCTION_HOUSE_THROTTLED_MESSAGE_SENT
         */
        AUCTION_HOUSE_THROTTLED_MESSAGE_SENT: null;

        /**
         * @see https://wow.gamepedia.com/AUCTION_HOUSE_THROTTLED_SPECIFIC_SEARCH_READY
         */
        AUCTION_HOUSE_THROTTLED_SPECIFIC_SEARCH_READY: null;

        /**
         * @see https://wow.gamepedia.com/AUCTION_HOUSE_THROTTLED_SYSTEM_READY
         */
        AUCTION_HOUSE_THROTTLED_SYSTEM_READY: null;

        /**
         * Fired when listing of multiple stacks fails (or is aborted?).
         * @see https://wow.gamepedia.com/AUCTION_MULTISELL_FAILURE
         */
        AUCTION_MULTISELL_FAILURE: null;

        /**
         * Fired when the client begins listing of multiple stacks
         * - **arg1**: total number of stacks the client has to list
         * @see https://wow.gamepedia.com/AUCTION_MULTISELL_START
         */
        AUCTION_MULTISELL_START: [number];

        /**
         * Fired when the client lists a stack as part of listing multiple stacks
         * - **arg1**: number of stacks listed so far
         * - **arg2**: total number of stacks in the current mass-listing operation
         * @see https://wow.gamepedia.com/AUCTION_MULTISELL_UPDATE
         */
        AUCTION_MULTISELL_UPDATE: [number, number];

        /**
         * unknown
         */
        AUTH_CHALLENGE_FINISHED: Unknown[];

        /**
         * unknown
         */
        AUTH_CHALLENGE_UI_INVALID: Unknown[];

        /**
         * Fired when you begin automatically following an ally
         * - **arg1**: The unit you are following. Not necessarily your target
         *     (in case of right-clicking a group member's portrait or using the
         *     "/follow" command)
         * @see https://wow.gamepedia.com/AUTOFOLLOW_BEGIN
         */
        AUTOFOLLOW_BEGIN: [UnitId];

        /**
         * Fired when the player ceases following an ally
         * @see https://wow.gamepedia.com/AUTOFOLLOW_END
         */
        AUTOFOLLOW_END: null;

        /**
         * unknown
         */
        AVOIDANCE_UPDATE: Unknown[];

        /**
         * Fired when a bag is (re)moved from its bagslot. Fires both for player bags and bank bags
         * - **arg1**: container ID
         * @see https://wow.gamepedia.com/BAG_CLOSED
         */
        BAG_CLOSED: [number];

        /**
         * unknown
         */
        BAG_NEW_ITEMS_UPDATED: Unknown[];

        /**
         * Fired when a lootable container (not an equipped bag) is opened
         * - **arg1**: container ID
         * @see https://wow.gamepedia.com/BAG_OPEN
         */
        BAG_OPEN: [number];

        /**
         * unknown
         */
        BAG_OVERFLOW_WITH_FULL_INVENTORY: Unknown[];

        /**
         * unknown
         */
        BAG_SLOT_FLAGS_UPDATED: Unknown[];

        /**
         * Fired when a bags inventory changes. Bag zero, the sixteen slot default backpack, may not fire on login. Upon login (or reloading the console)
         * this event fires even for bank bags. When moving an item in your inventory, this fires multiple times: once each for the source and destination
         * bag. If the bag involved is the default backpack, this event will also fire with a container ID of "-2" (twice if you are moving the item inside
         * the same bag).
         * - **arg1**: container ID
         * @see https://wow.gamepedia.com/BAG_UPDATE
         */
        BAG_UPDATE: [number];

        /**
         * Fired when a cooldown update call is sent to a bag
         * - **arg1**: container ID (may also be nil)
         * @see https://wow.gamepedia.com/BAG_UPDATE_COOLDOWN
         */
        BAG_UPDATE_COOLDOWN: [number | null];

        /**
         * Fired after all applicable BAG_UPDATE events for a specific action have been fired
         * @see https://wow.gamepedia.com/BAG_UPDATE_DELAYED
         */
        BAG_UPDATE_DELAYED: null;

        /**
         * Fired twice when the bank window is closed. Only at the first one of them the bank data is still available (GetNumBankSlots(),
         * GetContainerItemLink(), ...)
         * @see https://wow.gamepedia.com/BANKFRAME_CLOSED
         */
        BANKFRAME_CLOSED: null;

        /**
         * Fired when the bank frame is opened
         * @see https://wow.gamepedia.com/BANKFRAME_OPENED
         */
        BANKFRAME_OPENED: null;

        /**
         * unknown
         */
        BANK_BAG_SLOT_FLAGS_UPDATED: Unknown[];

        /**
         * unknown
         */
        BARBER_SHOP_APPEARANCE_APPLIED: Unknown[];

        /**
         * unknown
         */
        BARBER_SHOP_CLOSE: Unknown[];

        /**
         * unknown
         */
        BARBER_SHOP_COST_UPDATE: Unknown[];

        /**
         * unknown
         */
        BARBER_SHOP_OPEN: Unknown[];

        /**
         * Fired when the battlegrounds signup window is closed
         * @see https://wow.gamepedia.com/BATTLEFIELDS_CLOSED
         */
        BATTLEFIELDS_CLOSED: null;

        /**
         * Fired when the battlegrounds signup window is opened
         * @see https://wow.gamepedia.com/BATTLEFIELDS_SHOW
         */
        BATTLEFIELDS_SHOW: null;

        /**
         * unknown
         */
        BATTLEFIELD_MGR_DROP_TIMER_CANCELED: Unknown[];

        /**
         * unknown
         */
        BATTLEFIELD_MGR_DROP_TIMER_STARTED: Unknown[];

        /**
         * unknown
         */
        BATTLEFIELD_MGR_EJECTED: Unknown[];

        /**
         * unknown
         */
        BATTLEFIELD_MGR_EJECT_PENDING: Unknown[];

        /**
         * unknown
         */
        BATTLEFIELD_MGR_ENTERED: Unknown[];

        /**
         * unknown
         */
        BATTLEFIELD_MGR_ENTRY_INVITE: Unknown[];

        /**
         * unknown
         */
        BATTLEFIELD_MGR_QUEUE_INVITE: Unknown[];

        /**
         * unknown
         */
        BATTLEFIELD_MGR_QUEUE_REQUEST_RESPONSE: Unknown[];

        /**
         * unknown
         */
        BATTLEFIELD_MGR_QUEUE_STATUS_UPDATE: Unknown[];

        /**
         * unknown
         */
        BATTLEFIELD_MGR_STATE_CHANGE: Unknown[];

        /**
         * Fired when a war game request times out without a response
         * @since 4.1.0
         * @see https://wow.gamepedia.com/BATTLEFIELD_QUEUE_TIMEOUT
         */
        BATTLEFIELD_QUEUE_TIMEOUT: null;

        /**
         * unknown
         */
        BATTLEGROUND_OBJECTIVES_UPDATE: Unknown[];

        /**
         * unknown
         */
        BATTLEGROUND_POINTS_UPDATE: Unknown[];

        /**
         * unknown
         */
        BATTLEPET_FORCE_NAME_DECLENSION: Unknown[];

        /**
         * unknown
         */
        BATTLETAG_INVITE_SHOW: Unknown[];

        /**
         * unknown
         */
        BATTLE_PET_CURSOR_CLEAR: Unknown[];

        /**
         * @see https://wow.gamepedia.com/BIDS_UPDATED
         */
        BIDS_UPDATED: null;

        /**
         * @see https://wow.gamepedia.com/BID_ADDED
         */
        BID_ADDED: [number];

        /**
         * unknown
         */
        BILLING_NAG_DIALOG: Unknown[];

        /**
         * Fired when Enchanting an unbound item
         * @see https://wow.gamepedia.com/BIND_ENCHANT
         */
        BIND_ENCHANT: null;

        /**
         * unknown
         */
        BLACK_MARKET_BID_RESULT: Unknown[];

        /**
         * unknown
         */
        BLACK_MARKET_CLOSE: Unknown[];

        /**
         * unknown
         */
        BLACK_MARKET_ITEM_UPDATE: Unknown[];

        /**
         * unknown
         */
        BLACK_MARKET_OPEN: Unknown[];

        /**
         * unknown
         */
        BLACK_MARKET_OUTBID: Unknown[];

        /**
         * unknown
         */
        BLACK_MARKET_UNAVAILABLE: Unknown[];

        /**
         * unknown
         */
        BLACK_MARKET_WON: Unknown[];

        /**
         * unknown
         */
        BN_BLOCK_LIST_UPDATED: Unknown[];

        /**
         * unknown
         */
        BN_CHAT_MSG_ADDON: Unknown[];

        /**
         * unknown
         */
        BN_CHAT_WHISPER_UNDELIVERABLE: Unknown[];

        /**
         * unknown
         */
        BN_CONNECTED: Unknown[];

        /**
         * unknown
         */
        BN_CUSTOM_MESSAGE_CHANGED: Unknown[];

        /**
         * unknown
         */
        BN_CUSTOM_MESSAGE_LOADED: Unknown[];

        /**
         * unknown
         */
        BN_DISCONNECTED: Unknown[];

        /**
         * unknown
         */
        BN_FRIEND_INFO_CHANGED: Unknown[];

        /**
         * unknown
         */
        BN_FRIEND_INVITE_ADDED: Unknown[];

        /**
         * unknown
         */
        BN_FRIEND_INVITE_LIST_INITIALIZED: Unknown[];

        /**
         * unknown
         */
        BN_FRIEND_INVITE_REMOVED: Unknown[];

        /**
         * unknown
         */
        BN_FRIEND_INVITE_SEND_RESULT: Unknown[];

        /**
         * unknown
         */
        BN_FRIEND_LIST_SIZE_CHANGED: Unknown[];

        /**
         * unknown
         */
        BN_INFO_CHANGED: Unknown[];

        /**
         * unknown
         */
        BN_NEW_PRESENCE: Unknown[];

        /**
         * unknown
         */
        BN_REQUEST_FOF_FAILED: Unknown[];

        /**
         * unknown
         */
        BN_REQUEST_FOF_SUCCEEDED: Unknown[];

        /**
         * unknown
         */
        BN_SELF_OFFLINE: Unknown[];

        /**
         * unknown
         */
        BN_SELF_ONLINE: Unknown[];

        /**
         * unknown
         */
        BN_SYSTEM_MESSAGE: Unknown[];

        /**
         * unknown
         */
        BONUS_ROLL_ACTIVATE: Unknown[];

        /**
         * unknown
         */
        BONUS_ROLL_DEACTIVATE: Unknown[];

        /**
         * unknown
         */
        BONUS_ROLL_FAILED: Unknown[];

        /**
         * unknown
         */
        BONUS_ROLL_RESULT: Unknown[];

        /**
         * unknown
         */
        BONUS_ROLL_STARTED: Unknown[];

        /**
         * Fired when the player kills a raid boss
         * - **arg1**: Numerical identifier of the boss (DungeonEncounterID)
         * - **arg2**: Name of the boss
         * @since 6.1.0
         * @see https://wow.gamepedia.com/BOSS_KILL
         */
        BOSS_KILL: [number, string];

        /**
         * Fired when the calendar API is busy or free
         * - **arg1**: busyFlag
         * @see https://wow.gamepedia.com/CALENDAR_ACTION_PENDING
         */
        CALENDAR_ACTION_PENDING: [boolean];

        /**
         * unknown
         */
        CALENDAR_CLOSE_EVENT: Unknown[];

        /**
         * unknown
         */
        CALENDAR_EVENT_ALARM: Unknown[];

        /**
         * unknown
         */
        CALENDAR_NEW_EVENT: Unknown[];

        /**
         * Fired after calling CalendarOpenEvent once the event data has been retrieved from the server
         * - **arg1**: calendar event types ("PLAYER", "GUILD", "ARENA", "HOLIDAY", "RAID_LOCKOUT")
         * @see https://wow.gamepedia.com/CALENDAR_OPEN_EVENT
         */
        CALENDAR_OPEN_EVENT: [CalendarEventType];

        /**
         * unknown
         */
        CALENDAR_UPDATE_ERROR: Unknown[];

        /**
         * unknown
         */
        CALENDAR_UPDATE_EVENT: Unknown[];

        /**
         * unknown
         */
        CALENDAR_UPDATE_EVENT_LIST: Unknown[];

        /**
         * update for guild events
         * @since 4.1.0
         * @see https://wow.gamepedia.com/CALENDAR_UPDATE_GUILD_EVENTS
         */
        CALENDAR_UPDATE_GUILD_EVENTS: null;

        /**
         * Fired after CalendarEventSortInvites once the invite list has been sorted
         * @see https://wow.gamepedia.com/CALENDAR_UPDATE_INVITE_LIST
         */
        CALENDAR_UPDATE_INVITE_LIST: null;

        /**
         * unknown
         */
        CALENDAR_UPDATE_PENDING_INVITES: Unknown[];

        /**
         * unknown
         */
        CANCEL_GLYPH_CAST: Unknown[];

        /**
         * Fired when a player cancels a roll on an item
         * - **arg1**: rollID
         * @see https://wow.gamepedia.com/CANCEL_LOOT_ROLL
         */
        CANCEL_LOOT_ROLL: [number];

        /**
         * unknown
         */
        CANCEL_SUMMON: Unknown[];

        /**
         * unknown
         */
        CHALLENGE_MODE_COMPLETED: Unknown[];

        /**
         * unknown
         */
        CHALLENGE_MODE_DEATH_COUNT_UPDATED: Unknown[];

        /**
         * unknown
         */
        CHALLENGE_MODE_KEYSTONE_RECEPTABLE_OPEN: Unknown[];

        /**
         * unknown
         */
        CHALLENGE_MODE_KEYSTONE_SLOTTED: Unknown[];

        /**
         * unknown
         */
        CHALLENGE_MODE_LEADERS_UPDATE: Unknown[];

        /**
         * unknown
         */
        CHALLENGE_MODE_MAPS_UPDATE: Unknown[];

        /**
         * unknown
         */
        CHALLENGE_MODE_NEW_RECORD: Unknown[];

        /**
         * unknown
         */
        CHALLENGE_MODE_RESET: Unknown[];

        /**
         * unknown
         */
        CHALLENGE_MODE_START: Unknown[];

        /**
         * Fired when number of players in a channel changes but only if this channel is visible in ChannelFrame (it mustn't be hidden by a
         * collapsed category header)
         * - **arg1**: channel id (item number in Blizzards ChannelFrame -> quod vide API GetChannelDisplayInfo)
         * - **arg2**: number of players in channel
         * @see https://wow.gamepedia.com/CHANNEL_COUNT_UPDATE
         */
        CHANNEL_COUNT_UPDATE: [number, number];

        /**
         * Fired when user changes selected channel in Blizzards ChannelFrame
         * - **arg1**: channel id (item number in Blizzards ChannelFrame -> quod vide API GetChannelDisplayInfo)
         * @see https://wow.gamepedia.com/CHANNEL_FLAGS_UPDATED
         */
        CHANNEL_FLAGS_UPDATED: [number];

        /**
         * unknown
         */
        CHANNEL_INVITE_REQUEST: Unknown[];

        /**
         * Fired when user is asked for a password (normally after trying to join a channel without a password or with a wrong one)
         * - **arg1**: channel name
         * @see https://wow.gamepedia.com/CHANNEL_PASSWORD_REQUEST
         */
        CHANNEL_PASSWORD_REQUEST: [string];

        /**
         * Fired when user changes selected channel in Blizzards ChannelFrame or number of players in currently selected channel changes
         * - **arg1**: channel id (item number in Blizzards ChannelFrame -> quod vide API GetChannelDisplayInfo)
         * - **arg2**: number of players in channel
         * @see https://wow.gamepedia.com/CHANNEL_ROSTER_UPDATE
         */
        CHANNEL_ROSTER_UPDATE: [number, number];

        /**
         * Fired when Channel UI should change (e.g. joining / leaving a channel causes this event to fire)
         * @see https://wow.gamepedia.com/CHANNEL_UI_UPDATE
         */
        CHANNEL_UI_UPDATE: null;

        /**
         * unknown
         */
        CHANNEL_VOICE_UPDATE: Unknown[];

        /**
         * unknown
         */
        CHARACTER_ITEM_FIXUP_NOTIFICATION: Unknown[];

        /**
         * Fired when the player's available talent points change
         * - **arg1**: indicates number of talent points changed: -1 indicates one used (learning a talent), 1 indicates one gained (leveling)
         * @see https://wow.gamepedia.com/CHARACTER_POINTS_CHANGED
         */
        CHARACTER_POINTS_CHANGED: [number];

        /**
         * unknown
         */
        CHARACTER_UPGRADE_SPELL_TIER_SET: Unknown[];

        /**
         * unknown
         */
        CHAT_COMBAT_MSG_ARENA_POINTS_GAIN: Unknown[];

        /**
         * Fired when a player in your vicinity completes an achievement
         * - **arg1**: The full body of the broadcast message
         * - **arg2-5**: The name of player who has just completed the achievement
         * - **arg7-8...**: Some integer
         * @see https://wow.gamepedia.com/CHAT_MSG_ACHIEVEMENT
         */
        CHAT_MSG_ACHIEVEMENT: [string, string, string, string, string, Unknown, ...number[]];

        /**
         * Fired when the client receives a message from SendAddonMessage
         * - **arg1**: prefix
         * - **arg2**: message
         * - **arg3**: distribution type ("PARTY", "RAID", "GUILD", "BATTLEGROUND" or "WHISPER")
         * - **arg4**: sender (e.g. "Arthas-Silvermoon")
         * @see https://wow.gamepedia.com/CHAT_MSG_ADDON
         */
        CHAT_MSG_ADDON: [string, string, AddonMessageType, string];

        /**
         * Fired when the client receives an AFK auto-response
         * - **arg1**: AFK response message
         * - **arg2**: author
         * - **arg3**: chat lineId
         * - **arg4**: sender guid
         * @see https://wow.gamepedia.com/CHAT_MSG_AFK
         */
        CHAT_MSG_AFK: [string, string, number, Guid];

        /**
         * Fired for battleground-event messages that are in blue by default because they are about Alliance actions, e.g. assaulting a
         * graveyard or capture point, or picking up a flag
         * - **arg1**: Battleground Message (eg. "The Alliance has taken the Blacksmith!")
         * @see https://wow.gamepedia.com/CHAT_MSG_BG_SYSTEM_ALLIANCE
         */
        CHAT_MSG_BG_SYSTEM_ALLIANCE: [string];

        /**
         * Fired for battleground-event messages that are in red by default because they are about Horde actions
         * - **arg1**: Battleground Message (eg. "The Horde has taken the Blacksmith!")
         * @see https://wow.gamepedia.com/CHAT_MSG_BG_SYSTEM_HORDE
         */
        CHAT_MSG_BG_SYSTEM_HORDE: [string];

        /**
         * Fired for battleground-event messages that are displayed in a faction-neutral color by default
         * - **arg1**: Battleground Message (eg. "Let the battle for Warsong Gulch begin.")
         */
        CHAT_MSG_BG_SYSTEM_NEUTRAL: [string, ...Unknown[]];

        /**
         * unknown
         */
        CHAT_MSG_BN_INLINE_TOAST_ALERT: Unknown[];

        /**
         * unknown
         */
        CHAT_MSG_BN_INLINE_TOAST_BROADCAST: Unknown[];

        /**
         * Fired when the client receives a channel message
         *
         * - **arg1**: chat message
         * - **arg2**: author
         * - **arg3**: language
         * - **arg4**: channel name with number ex: "1. General - Stormwind City"
         * - **arg5**: target
         * - **arg6**: AFK/DND/GM "CHAT_FLAG_"..arg6 flags
         * - **arg7**: zone ID used for generic system channels (1 for General, 2 for Trade, 22 for LocalDefense, 23 for WorldDefense and 26 for LFG)
         * - **arg8**: channel number
         * - **arg9**: channel name without number (this is _sometimes_ in lowercase)
         * - **arg11**: Chat lineID used for reporting the chat message
         * - **arg12**: Sender GUID
         * @see https://wow.gamepedia.com/CHAT_MSG_CHANNEL
         */
        CHAT_MSG_CHANNEL: [string, string, string, string, string, ChatFlag, number, number, string, Unknown, number, Guid];

        /**
         * Fired when someone joins a chat channel you are in
         *
         * - **arg1**: seems to be empty
         * - **arg2**: Name of the player that joined
         * - **arg3**: seems to be empty again
         * - **arg4**: Number and name of the channel (e.g. "5. MyOwnChannel")
         * - **arg5**: Channel number
         * - **arg6**: channel name without number (this is sometimes in lowercase)
         * @see https://wow.gamepedia.com/CHAT_MSG_CHANNEL_JOIN
         */
        CHAT_MSG_CHANNEL_JOIN: [Unknown, string, Unknown, string, number, string];

        /**
         * Fired when a player leaves a channel that you are currently inside
         *
         * - **arg1**: Appears to be left blank
         * - **arg2**: Player name that left
         * - **arg3**: Channel name with number
         * - **arg4**: Appears to be left zero and no longer the channel number
         * - **arg5**: Channel number
         * - **arg6**: Channel name without number
         * @see https://wow.gamepedia.com/CHAT_MSG_CHANNEL_LEAVE
         */
        CHAT_MSG_CHANNEL_LEAVE: [Unknown, string, string, 0, number, string];

        /**
         * Fired when ListChannels() or ListChannelByName() is called, and the message is displayed in the chat frame
         * - **arg1**: The list of values displayed by ListChannels() or ListChannelByName() in one string
         * - **arg4**: The number and name of the channel the message came from. ie: "1. General"
         * @see https://wow.gamepedia.com/CHAT_MSG_CHANNEL_LIST
         */
        CHAT_MSG_CHANNEL_LIST: [string, Unknown, Unknown, string];

        /**
         * Fired when you enter or leave a chat channel (or a channel was recently throttled)
         * - **arg1**: type ( "YOU_JOINED" if you joined a channel, or "YOU_LEFT" if you left, or "THROTTLED" if channel was throttled )
         * - **arg4**: Channel name with number (e.g. "6. TestChannel")
         * - **arg7**: Channel Type (e.g. 0 for any user channel, 1 for system-channel "General", 2 for "Trade")
         * - **arg8**: Channel Number
         * - **arg9**: Channel name without number
         * @see https://wow.gamepedia.com/CHAT_MSG_CHANNEL_NOTICE
         */
        CHAT_MSG_CHANNEL_NOTICE: [ChatJoinLeftType, Unknown, Unknown, string, Unknown, Unknown, number, number, string];

        /**
         * Fired when something changes in the channel like moderation enabled, user is kicked, announcements changed and so on. CHAT_*_NOTICE in
         * GlobalStrings.lua has a full list of available types
         * - **arg1**: type ("ANNOUNCEMENTS_OFF", "ANNOUNCEMENTS_ON", "BANNED", "OWNER_CHANGED", "INVALID_NAME", "INVITE", "MODERATION_OFF",
         * "MODERATION_ON", "MUTED", "NOT_MEMBER", "NOT_MODERATED", "SET_MODERATOR", "UNSET_MODERATOR" )
         * - **arg2**: If arg5 has a value then this is the user affected ( eg: "Player Foo has been kicked by Bar" ), if arg5 has no value then it's
         * the person who caused the event ( eg: "Channel Moderation has been enabled by Bar" )
         * - **arg3**: Channel name with number
         * - **arg4**: Player that caused the event (eg "Player Foo has been kicked by Bar" )
         * @see https://wow.gamepedia.com/CHAT_MSG_CHANNEL_NOTICE_USER
         */
        CHAT_MSG_CHANNEL_NOTICE_USER: [ChatUserNoticeType, string, Unknown, string, string];

        /**
         * Fires when player's faction changes. i.e.: "Your reputation with Timbermaw Hold has very slightly increased."
         * - **arg1**: chat message
         * @since 1.9
         * @see https://wow.gamepedia.com/CHAT_MSG_COMBAT_FACTION_CHANGE
         */
        CHAT_MSG_COMBAT_FACTION_CHANGE: [string, ...Unknown[]];

        /**
         * Fires when the player gains any amount of honor, anything from an honorable kill to bonus honor awarded
         * - **arg1**: chat message (format: "%s dies, honorable kill Rank: %s (Estimated Honor Points: %d)" or "You have been awarded %d honor.")
         * @see https://wow.gamepedia.com/CHAT_MSG_COMBAT_HONOR_GAIN
         */
        CHAT_MSG_COMBAT_HONOR_GAIN: [string];

        /**
         * Fires when your equipment takes durability loss from death, and likely other situations as well.(no longer fires on reputation changes as of 1.9)
         * @see https://wow.gamepedia.com/CHAT_MSG_COMBAT_MISC_INFO
         */
        CHAT_MSG_COMBAT_MISC_INFO: null;

        /**
         * Fires when you gain XP from killing a creature or finishing a quest. Does not fire if you gain no XP from killing a creature
         * - **arg1**: chat message
         * @see https://wow.gamepedia.com/CHAT_MSG_COMBAT_XP_GAIN
         */
        CHAT_MSG_COMBAT_XP_GAIN: [string];

        /**
         * Fires when you gain currency other than money (for example Chef's Awards or Champion's Seals).
         * - **arg1**: chat message (for example, "You receive currency: Chef's Award x1.").
         * @see https://wow.gamepedia.com/CHAT_MSG_CURRENCY
         */
        CHAT_MSG_CURRENCY: [string];

        /**
         * Fired when the client receives a Do-Not-Disturb auto-response
         * - **arg1**: DND response message
         * - **arg2**: author
         * @see https://wow.gamepedia.com/CHAT_MSG_DND
         */
        CHAT_MSG_DND: [string, string, ...Unknown[]];

        /**
         * Fired on sending or receiving a custom emote (one used by /e, /emote or a send chat message command with the emote flag)
         * - **arg1**: Message that was sent/received
         * - **arg2**: Name of the player who sent the message
         * @see https://wow.gamepedia.com/CHAT_MSG_DND
         */
        CHAT_MSG_EMOTE: [string, string, ...Unknown[]];

        /**
         * unknown
         */
        CHAT_MSG_FILTERED: Unknown[];

        /**
         * Fired when a message is sent or received in the Guild channel
         * - **arg1**: Message that was sent
         * - **arg2**: Author
         * - **arg3**: Language that the message was sent in
         * @see https://wow.gamepedia.com/CHAT_MSG_GUILD
         */
        CHAT_MSG_GUILD: [string, string, string, ...Unknown[]];

        /**
         * Fired when a guild member completes an achievement
         * - **arg1**: The full body of the achievement broadcast message
         * - **arg2, arg5**: Guildmember Name
         * @see https://wow.gamepedia.com/CHAT_MSG_GUILD_ACHIEVEMENT
         */
        CHAT_MSG_GUILD_ACHIEVEMENT: [string, string, Unknown, Unknown, string, ...Unknown[]];

        /**
         * unknown
         */
        CHAT_MSG_GUILD_ITEM_LOOTED: Unknown[];

        /**
         * Fired when you whisper a player that is ignoring you When testing this event the character name is sent twice as arg1 and arg2,
         * Blizzard appears to use arg2 and ignores arg1.
         * - **arg1**: Character name of who you tried to message
         * - **arg2**: Character name of who you tried to message
         * @see https://wow.gamepedia.com/CHAT_MSG_IGNORED
         */
        CHAT_MSG_IGNORED: [string, string];

        /**
         * unknown
         */
        CHAT_MSG_INSTANCE_CHAT: Unknown[];

        /**
         * unknown
         */
        CHAT_MSG_INSTANCE_CHAT_LEADER: Unknown[];

        /**
         * Fired when loot text is sent to the chat window (someone selects need, greed, passes, rolls, receives). This also fires messages like
         * "Person creates <item>" via tradeskills, and "Person receives <item>" via a trade window. Does not fire for receiving currency
         * (use CHAT_MSG_CURRENCY for this).
         * - **arg1**: chat message
         * - **arg2**: name of the player who received the loot
         * @see https://wow.gamepedia.com/CHAT_MSG_LOOT
         */
        CHAT_MSG_LOOT: [string, Unknown, Unknown, Unknown, string, ...Unknown[]];

        /**
         * Fired when a unit loots money
         * - **arg1**: chat message
         * @see https://wow.gamepedia.com/CHAT_MSG_MONEY
         */
        CHAT_MSG_MONEY: [string];

        /**
         * Fired for emotes from a monster, such as 'Murloc Forager attempts to run away in fear!'
         * - **arg1**: The body of the emote: '%s attempts to run away in fear!'
         * - **arg2**: The name of the monster: 'Murloc Forager'
         * @see https://wow.gamepedia.com/CHAT_MSG_MONSTER_EMOTE
         */
        CHAT_MSG_MONSTER_EMOTE: [string, string];

        /**
         * unknown
         */
        CHAT_MSG_MONSTER_PARTY: Unknown[];

        /**
         * Fired when a NPC says something
         * - **arg1**: message
         * - **arg2**: NPC name
         * - **arg3**: Language used
         * - **arg4**: unused
         * - **arg5**: Receiver
         * @see https://wow.gamepedia.com/CHAT_MSG_MONSTER_SAY
         */
        CHAT_MSG_MONSTER_SAY: [string, string, string, Unknown, string];

        /**
         * Fired when a NPC whispers you something
         * @see https://wow.gamepedia.com/CHAT_MSG_MONSTER_WHISPER
         */
        CHAT_MSG_MONSTER_WHISPER: null;

        /**
         * Fired when a NPC yells, example would be the yells during an Alterac Valley from the Herald or a raid boss
         * - **arg1**: message
         * - **arg2**: NPC Name (eg: Onyxia)
         * @see https://wow.gamepedia.com/CHAT_MSG_MONSTER_YELL
         */
        CHAT_MSG_MONSTER_YELL: [string, string];

        /**
         * Fired when a message is sent or received in the Guild Officer channel
         * - **arg1**: Message that was received
         * - **arg2**: Author
         * - **arg3**: Language used
         * @see https://wow.gamepedia.com/CHAT_MSG_OFFICER
         */
        CHAT_MSG_OFFICER: [string, string, string, ...Unknown[]];

        /**
         * unknown
         */
        CHAT_MSG_OPENING: Unknown[];

        /**
         * Fired when a message is sent or received in the Party channel
         * - **arg1**: Message that was received
         * - **arg2**: Author
         * - **arg3**: Language used
         * @see https://wow.gamepedia.com/CHAT_MSG_PARTY
         */
        CHAT_MSG_PARTY: [string, string, string, ...Unknown[]];

        /**
         * Fired when a message is sent or received by the party leader
         * - **arg1**: The message that was received
         * - **arg2**: Author
         * - **arg3**: Language used
         * @see https://wow.gamepedia.com/CHAT_MSG_PARTY_LEADER
         */
        CHAT_MSG_PARTY_LEADER: [string, string, string, ...Unknown[]];

        /**
         * unknown
         */
        CHAT_MSG_PET_BATTLE_COMBAT_LOG: Unknown[];

        /**
         * unknown
         */
        CHAT_MSG_PET_BATTLE_INFO: Unknown[];

        /**
         * unknown
         */
        CHAT_MSG_PET_INFO: Unknown[];

        /**
         * Fired when a message is sent or received in the Raid
         * - **arg1**: message
         * - **arg2**: author
         * - **arg3**: language
         * @see https://wow.gamepedia.com/CHAT_MSG_RAID
         */
        CHAT_MSG_RAID: [string, string, string, ...Unknown[]];

        /**
         * Emote message
         * - **arg2**: name of the boss
         * - **arg5**: name of the targeted player
         * @see https://wow.gamepedia.com/CHAT_MSG_RAID_BOSS_EMOTE
         */
        CHAT_MSG_RAID_BOSS_EMOTE: [Unknown, string, Unknown, Unknown, string, ...Unknown[]];

        /**
         * unknown
         */
        CHAT_MSG_RAID_BOSS_WHISPER: Unknown[];

        /**
         * Fired when a message is sent or received from the raid leader
         * - **arg1**: message
         * - **arg2**: author
         * - **arg3**: language
         * @see https://wow.gamepedia.com/CHAT_MSG_RAID_LEADER
         */
        CHAT_MSG_RAID_LEADER: [string, string, string, ...Unknown[]];

        /**
         * Fired when a warning message is sent or received from the raid leader
         * - **arg1**: message
         * - **arg2**: author
         * - **arg3**: language
         * @see https://wow.gamepedia.com/CHAT_MSG_RAID_WARNING
         */
        CHAT_MSG_RAID_WARNING: [string, string, string, ...Unknown[]];

        /**
         * unknown
         */
        CHAT_MSG_RESTRICTED: Unknown[];

        /**
         * Fired when a message is sent or received in the Say channel
         * - **arg1**: message
         * - **arg2**: author
         * - **arg3**: language
         * @see https://wow.gamepedia.com/CHAT_MSG_SAY
         */
        CHAT_MSG_SAY: [string, string, string, ...Unknown[]];

        /**
         * Fired when some chat messages about skills are displayed
         * - **arg1**: The content of the chat message
         * @see https://wow.gamepedia.com/CHAT_MSG_SKILL
         */
        CHAT_MSG_SKILL: [string];

        /**
         * Fired when a system chat message (they are displayed in yellow) is received
         * - **arg1**: The content of the chat message
         * @see https://wow.gamepedia.com/CHAT_MSG_SYSTEM
         */
        CHAT_MSG_SYSTEM: [string];

        /**
         * Fired when a raid target icon is set. This is used by the chat filter, if the player is watching raid icons in chat output
         * (in the Filters right-click menu, under Other, look for Target Icons).
         * - **arg1**: The formatted message to be displayed in the chat window. arg1 is formatted from the global variable TARGET_ICON_SET,
         * which by default in an English client is set to the string "|Hplayer:%s|h[%s]|h sets |TInterface\\TargetingFrame\\UI-RaidTargetingIcon_%d:0|t
         * on %s."
         * @see https://wow.gamepedia.com/CHAT_MSG_SYSTEM
         */
        CHAT_MSG_TARGETICONS: [string, ...Unknown[]];

        /**
         * Fired for emotes with an emote token. /dance, /healme, etc
         * - **arg1**: Emote Message
         * - **arg2**: Name of person who emoted
         * @see https://wow.gamepedia.com/CHAT_MSG_TEXT_EMOTE
         */
        CHAT_MSG_TEXT_EMOTE: [string, string, ...Unknown[]];

        /**
         * unknown
         */
        CHAT_MSG_TRADESKILLS: Unknown[];

        /**
         * Fired when a whisper is received from another player
         *
         * - **arg1**: Message received
         * - **arg2**: Author (e.g. "Arthas-Silvermoon")
         * - **arg3**: Language (or nil if universal, like messages from GM) (always seems to be an empty string; argument may have been kicked
         * because whispering in non-standard language doesn't seem to be possible [any more?])
         * - **arg6**: status (like "DND" or "GM")
         * - **arg7**: message id (for reporting spam purposes?) (default: 0)
         * - **arg8**: unknown (default: 0)
         * @see https://wow.gamepedia.com/CHAT_MSG_WHISPER
         */
        CHAT_MSG_WHISPER: [string, string, string, Unknown, Unknown, ChatFlag, number, number, ...Unknown[]];

        /**
         * Fired when the player sends a whisper to another player
         * - **arg1**: Message sent
         * - **arg2**: Player who was sent the whisper
         * - **arg3**: Language
         * @see https://wow.gamepedia.com/CHAT_MSG_WHISPER_INFORM
         */
        CHAT_MSG_WHISPER_INFORM: [string, string, string, ...Unknown[]];

        /**
         * Fired when a message is sent or received in the Yell channel
         * - **arg1**: Message that was received
         * - **arg2**: Author
         * - **arg3**: Language used
         * @see https://wow.gamepedia.com/https://wow.gamepedia.com/CHAT_MSG_YELL
         */
        CHAT_MSG_YELL: [string, string, string, ...Unknown[]];

        /**
         * unknown
         * @since 4.1.0
         * @see https://wow.gamepedia.com/CHAT_SERVER_DISCONNECTED
         */
        CHAT_SERVER_DISCONNECTED: null;

        /**
         * unknown
         * @since 4.1.0
         * @see https://wow.gamepedia.com/CHAT_SERVER_RECONNECTED
         */
        CHAT_SERVER_RECONNECTED: null;

        /**
         * unknown
         */
        CINEMATIC_START: Unknown[];

        /**
         * unknown
         */
        CINEMATIC_STOP: Unknown[];

        /**
         * unknown
         */
        CLEAR_BOSS_EMOTES: Unknown[];

        /**
         * unknown
         */
        CLOSE_INBOX_ITEM: Unknown[];

        /**
         * Fired when the guild dress frame is closed
         * @see https://wow.gamepedia.com/CLOSE_TABARD_FRAME
         */
        CLOSE_TABARD_FRAME: null;

        /**
         * Supposed to fire whenever the world map is closed/hidden, though it doesn't. A workaround for this is to use "WORLD_MAP_UPDATE" to
         * set a global variable to use elsewhere with an OnUpdate function
         * @see https://wow.gamepedia.com/CLOSE_WORLD_MAP
         */
        CLOSE_WORLD_MAP: null;

        /**
         * COMBAT_LOG_EVENT and COMBAT_LOG_EVENT_UNFILTERED no longer have any payload. To retrieve the information previously carried in the payload,
         * use CombatLogGetCurrentEventInfo(). The data structure is unchanged
         * @see https://wow.gamepedia.com/COMBAT_LOG_EVENT
         */
        COMBAT_LOG_EVENT: null;

        /**
         * COMBAT_LOG_EVENT and COMBAT_LOG_EVENT_UNFILTERED no longer have any payload. To retrieve the information previously carried in the payload,
         * use CombatLogGetCurrentEventInfo(). The data structure is unchanged
         * @see https://wow.gamepedia.com/COMBAT_LOG_EVENT_UNFILTERED
         */
        COMBAT_LOG_EVENT_UNFILTERED: null;

        /**
         * unknown
         */
        COMBAT_RATING_UPDATE: Unknown[];

        /**
         * Fired when the currently watched entity (as set by the CombatTextSetActiveUnit function) takes or avoids damage, receives heals, gains
         * mana/energy/rage, etc. This event is used by Blizzard's floating combat text addon
         * - **arg1**: Combat message type
         * - **arg2**: For damage, power gain and honor gains, this is the amount taken/gained. For heals, this is the healer name. For auras, the
         * aura name. For block/resist/absorb messages where arg3 is not nil (indicating a partial block/resist/absorb) this is the amount taken.
         * For faction gain, this is the faction name. For the SPELL_ACTIVE message, the name of the spell (abilities like Overpower and Riposte
         * becoming active will trigger this message).
         * - **arg3**: For heals, the amount healed. For block/resist/absorb messages, this is the amount blocked/resisted/absorbed, or nil if all
         * damage was avoided. For faction gain, the amount of reputation gained
         * @see https://wow.gamepedia.com/COMBAT_TEXT_UPDATE
         */
        COMBAT_TEXT_UPDATE: [CombatTextType, number | string, number | string];

        /**
         * Fired when the character logs in and the server sends the greeting text. (Currently "Scammers are trying harder than ever to phish for your
         * account information!...") This is not fired when reloading the UI
         * @see https://wow.gamepedia.com/COMMENTATOR_ENTER_WORLD
         */
        COMMENTATOR_ENTER_WORLD: null;

        /**
         * @see https://wow.gamepedia.com/COMMENTATOR_IMMEDIATE_FOV_UPDATE
         */
        COMMENTATOR_IMMEDIATE_FOV_UPDATE: [number];

        /**
         * unknown
         */
        COMMENTATOR_MAP_UPDATE: Unknown[];

        /**
         * unknown
         */
        COMMENTATOR_PARTY_INFO_REQUEST: Unknown[];

        /**
         * unknown
         */
        COMMENTATOR_PLAYER_NAME_OVERRIDE_UPDATE: Unknown[];

        /**
         * unknown
         */
        COMMENTATOR_PLAYER_UPDATE: Unknown[];

        /**
         * @see https://wow.gamepedia.com/COMMODITY_PRICE_UNAVAILABLE
         */
        COMMODITY_PRICE_UNAVAILABLE: null;

        /**
         * - **arg1**: Updated unit price
         * - **arg2**: Updated total price
         * @see https://wow.gamepedia.com/COMMODITY_PRICE_UPDATED
         */
        COMMODITY_PRICE_UPDATED: [number, number];

        /**
         * - **arg1**: Item ID
         * - **arg2**: Quantity
         * @see https://wow.gamepedia.com/COMMODITY_PURCHASED
         */
        COMMODITY_PURCHASED: [number, number];

        /**
         * @see https://wow.gamepedia.com/COMMODITY_PURCHASE_FAILED
         */
        COMMODITY_PURCHASE_FAILED: null;

        /**
         * @see https://wow.gamepedia.com/COMMODITY_PURCHASE_SUCCEEDED
         */
        COMMODITY_PURCHASE_SUCCEEDED: null;

        /**
         * @see https://wow.gamepedia.com/COMMODITY_SEARCH_RESULTS_ADDED
         */
        COMMODITY_SEARCH_RESULTS_ADDED: [number];

        /**
         * @see https://wow.gamepedia.com/COMMODITY_SEARCH_RESULTS_UPDATED
         */
        COMMODITY_SEARCH_RESULTS_UPDATED: [number];

        /**
         * unknown
         */
        COMPACT_UNIT_FRAME_PROFILES_LOADED: Unknown[];

        /**
         * unknown
         */
        COMPANION_LEARNED: Unknown[];

        /**
         * unknown
         */
        COMPANION_UNLEARNED: Unknown[];

        /**
         * If the type is nil, the UI should update if it's visible, regardless of which type it's managing. If the type is non-nil, then it will be
         * either "CRITTER" or "MOUNT" and that signifies that the active companion has changed and the UI should update if it's currently showing
         * that type
         * @since 3.0.3
         * @see https://wow.gamepedia.com/COMPANION_UPDATE
         */
        COMPANION_UPDATE: null;

        /**
         * unknown
         */
        CONFIRM_BEFORE_USE: Unknown[];

        /**
         * unknown
         */
        CONFIRM_BINDER: Unknown[];

        /**
         * Fires when you try to roll "disenchant" for and item which Binds on Pickup
         * - **arg1**: RollId
         * - **arg2**: roll (Need: 1, Greed: 2, Disenchant: 3; as in RollOnLoot(RollID, roll))
         * @since 3.3.0
         * @see https://wow.gamepedia.com/CONFIRM_DISENCHANT_ROLL
         */
        CONFIRM_DISENCHANT_ROLL: [number, DisenchantRollType];

        /**
         * Fires when you try to roll "need" or "greed" for and item which Binds on Pickup
         * - **arg1**: RollId
         * - **arg2**: roll (Need: 1, Greed: 2, Disenchant: 3; as in RollOnLoot(RollID, roll))
         * @see https://wow.gamepedia.com/CONFIRM_LOOT_ROLL
         */
        CONFIRM_LOOT_ROLL: [number, DisenchantRollType];

        /**
         * unknown
         */
        CONFIRM_SUMMON: Unknown[];

        /**
         * Fires when the user selects the "Yes, I do." confirmation prompt after speaking to a class trainer and choosing to unlearn their talents
         * - **arg1**: Cost (260000 is equivalent to 26g). This value is then passed to different frames, depending on where the event is
         * being handled, by calling the MoneyFrame_Update() function. In the case of this event, the cost of the transaction is displayed in
         * a small static popup, and the user prompted for confirmation one final time
         * @see https://wow.gamepedia.com/CONFIRM_TALENT_WIPE
         */
        CONFIRM_TALENT_WIPE: [number];

        /**
         * Accept durability(!) loss in exchange for his body back
         * @description History: Way back before WoW was released, you lost experience rather than durability when you resurrected at a spirit healer
         * @see https://wow.gamepedia.com/CONFIRM_XP_LOSS
         */
        CONFIRM_XP_LOSS: null;

        /**
         * unknown
         */
        CONSOLE_CLEAR: Unknown[];

        /**
         * unknown
         */
        CONSOLE_COLORS_CHANGED: Unknown[];

        /**
         * unknown
         */
        CONSOLE_FONT_SIZE_CHANGED: Unknown[];

        /**
         * unknown
         */
        CONSOLE_MESSAGE: Unknown[];

        /**
         * unknown
         */
        CONTRIBUTION_COLLECTOR_CLOSE: Unknown[];

        /**
         * unknown
         */
        CONTRIBUTION_COLLECTOR_OPEN: Unknown[];

        /**
         * unknown
         */
        CONTRIBUTION_COLLECTOR_PENDING: Unknown[];

        /**
         * unknown
         */
        CONTRIBUTION_COLLECTOR_UPDATE: Unknown[];

        /**
         * unknown
         */
        CONTRIBUTION_COLLECTOR_UPDATE_SINGLE: Unknown[];

        /**
         * unknown
         */
        CORPSE_IN_INSTANCE: Unknown[];

        /**
         * Fired when the player is in range of his body
         * @see https://wow.gamepedia.com/CORPSE_IN_RANGE
         */
        CORPSE_IN_RANGE: null;

        /**
         * Fired when the player is out of range of his body
         * @see https://wow.gamepedia.com/CORPSE_OUT_OF_RANGE
         */
        CORPSE_OUT_OF_RANGE: null;

        /**
         * unknown
         */
        CRITERIA_COMPLETE: Unknown[];

        /**
         * unknown
         */
        CRITERIA_EARNED: Unknown[];

        /**
         * Fired when the criteria for an achievement has changed. Fires several times at once, presumably for different levels of achievements
         * and yet-unknown feats of strength, but this has yet to be confirmed and there may be another use for this Event
         * @see https://wow.gamepedia.com/CRITERIA_UPDATE
         */
        CRITERIA_UPDATE: null;

        /**
         * Fired every time the UI need to draw the currencies list. So it fire on login, on every loading screen and on reloadui, this is usefull
         * to be sure that currencies informations are available after login, even on a crowded server in the evening with a lot of addons loaded
         * @description As of 5.0.5 this is no longer true. After some testing it seems currencies are available sooner than in Cataclysm, so when
         * PLAYER_ENTERING_WORLD fire your can gather currencies informations
         * @see https://wow.gamepedia.com/CURRENCY_DISPLAY_UPDATE
         */
        CURRENCY_DISPLAY_UPDATE: null;

        /**
         * Fired when the spell being cast is changed
         * @see https://wow.gamepedia.com/CURRENT_SPELL_CAST_CHANGED
         */
        CURRENT_SPELL_CAST_CHANGED: null;

        /**
         * Fired when the player right-clicks terrain, and on mouseover before UPDATE_MOUSEOVER_UNIT and on mouseout after UPDATE_MOUSEOVER_UNIT.
         * This excludes doodads, player characters, and NPCs that lack interaction
         * @see https://wow.gamepedia.com/CURSOR_UPDATE
         */
        CURSOR_UPDATE: null;

        /**
         * Fired when a CVar is changed
         * - **arg1**: cvarname
         * - **arg2**: value
         * @see https://wow.gamepedia.com/CVAR_UPDATE
         */
        CVAR_UPDATE: [string, any];

        /**
         * unknown
         */
        DEBUG_MENU_TOGGLED: Unknown[];

        /**
         * Fired when the player attempts to destroy an item
         * - **arg1**: item name
         * @see https://wow.gamepedia.com/DELETE_ITEM_CONFIRM
         */
        DELETE_ITEM_CONFIRM: [string];

        /**
         * unknown
         * @since 4.1.0
         * @see https://wow.gamepedia.com/DISABLE_DECLINE_GUILD_INVITE
         */
        DISABLE_DECLINE_GUILD_INVITE: null;

        /**
         * Fired when SetAllowLowLevelRaid is used to disable low-level raids on the character
         * @see https://wow.gamepedia.com/DISABLE_LOW_LEVEL_RAID
         */
        DISABLE_LOW_LEVEL_RAID: null;

        /**
         * unknown
         */
        DISABLE_TAXI_BENCHMARK: Unknown[];

        /**
         * unknown
         */
        DISABLE_XP_GAIN: Unknown[];

        /**
         * unknown
         */
        DISPLAY_SIZE_CHANGED: Unknown[];

        /**
         * Fired when a duel is finished
         * @see https://wow.gamepedia.com/DUEL_FINISHED
         */
        DUEL_FINISHED: null;

        /**
         * Fired when the player returns in bounds after being out of bounds during a duel
         * @see https://wow.gamepedia.com/DUEL_INBOUNDS
         */
        DUEL_INBOUNDS: null;

        /**
         * Fired when the player leaves the bounds of the duel
         * @see https://wow.gamepedia.com/DUEL_OUTOFBOUNDS
         */
        DUEL_OUTOFBOUNDS: null;

        /**
         * Fired when the player is challenged to a duel
         * - **arg1**: opponent name
         * @see https://wow.gamepedia.com/DUEL_REQUESTED
         */
        DUEL_REQUESTED: [string];

        /**
         * Encounter Journal: Fires when the Difficulty Index changes
         * - **arg1**: newDifficulty
         * @see https://wow.gamepedia.com/EJ_DIFFICULTY_UPDATE
         */
        EJ_DIFFICULTY_UPDATE: [Difficulty];

        /**
         * Encounter Journal: Fires when Item Loot Data is available
         * - **arg1**: itemId
         * @see https://wow.gamepedia.com/EJ_LOOT_DATA_RECIEVED
         */
        EJ_LOOT_DATA_RECIEVED: [number];

        /**
         * unknown
         */
        ENABLE_DECLINE_GUILD_INVITE: Unknown[];

        /**
         * Fired when SetAllowLowLevelRaid is used to enable low-level raids on the character
         * @see https://wow.gamepedia.com/ENABLE_LOW_LEVEL_RAID
         */
        ENABLE_LOW_LEVEL_RAID: null;

        /**
         * unknown
         */
        ENABLE_TAXI_BENCHMARK: Unknown[];

        /**
         * unknown
         */
        ENABLE_XP_GAIN: Unknown[];

        /**
         * Fires at the end of an instanced encounter
         * - **arg1**: ID for the specific encounter that ended (Does not match the encounterIDs used in the Encounter Journal)
         * - **arg2**: Name of the encounter that ended
         * - **arg3**: ID representing the difficulty of the encounter (DifficultyID)
         * - **arg4**: Group size for the encounter. For example, 5 for a Dungeon encounter, 20 for a Mythic raid. The number of raiders
         * participating is reflected in "flex" raids
         * - **arg5**: 1 for a successful kill. 0 for a wipe
         * @see https://wow.gamepedia.com/ENCOUNTER_END
         */
        ENCOUNTER_END: [number, string, Difficulty, number, Flag];

        /**
         * unknown
         */
        ENCOUNTER_LOOT_RECEIVED: Unknown[];

        /**
         * Fires at the start of an instanced encounter
         * - **arg1**: ID for the specific encounter started (Does not match the encounterIDs used in the Encounter Journal)
         * - **arg2**: Name of the encounter started
         * - **arg3**: ID representing the difficulty of the encounter (DifficultyID)
         * - **arg4**: Group size for the encounter. For example, 5 for a Dungeon encounter, 20 for a Mythic raid. The number of raiders
         * participating is reflected in "flex" raids
         * @see https://wow.gamepedia.com/ENCOUNTER_START
         */
        ENCOUNTER_START: [number, string, Difficulty, number];

        /**
         * unknown
         */
        END_BOUND_TRADEABLE: Unknown[];

        /**
         * unknown
         */
        ENTERED_DIFFERENT_INSTANCE_FROM_PARTY: Unknown[];

        /**
         * Fired when a new equipment set is created, an equipment set is deleted or an equipment set has changed
         * @see https://wow.gamepedia.com/EQUIPMENT_SETS_CHANGED
         */
        EQUIPMENT_SETS_CHANGED: null;

        /**
         * Fired when an equipment set has finished equipping
         * - **arg1**: True if the set change was successful
         * - **arg2**: The name of the set that was changed
         */
        EQUIPMENT_SWAP_FINISHED: [boolean, string];

        /**
         * unknown
         */
        EQUIPMENT_SWAP_PENDING: Unknown[];

        /**
         * Fired when the player attempts to equip bind on equip loot
         * @see https://wow.gamepedia.com/EQUIP_BIND_CONFIRM
         */
        EQUIP_BIND_CONFIRM: null;

        /**
         * unknown
         */
        EQUIP_BIND_TRADEABLE_CONFIRM: Unknown[];

        /**
         * unknown
         */
        EVENT_CLASS_TRIAL_TIMER_START: Unknown[];

        /**
         * unknown
         */
        EVENT_CLASS_TRIAL_UPGRADE_COMPLETE: Unknown[];

        /**
         * unknown
         */
        EVENT_TUTORIAL_HIGHLIGHT_SPELL: Unknown[];

        /**
         * unknown
         */
        EVENT_TUTORIAL_UNHIGHLIGHT_SPELL: Unknown[];

        /**
         * Fired to execute macro commands
         * - **arg1**: The "chat line" (macro command line) to execute
         * @see https://wow.gamepedia.com/EXECUTE_CHAT_LINE
         */
        EXECUTE_CHAT_LINE: [string];

        /**
         * unknown
         */
        EXPERIMENTAL_CVAR_CONFIRMATION_NEEDED: Unknown[];

        /**
         * @see https://wow.gamepedia.com/EXTRA_BROWSE_INFO_RECEIVED
         */
        EXTRA_BROWSE_INFO_RECEIVED: [number];

        /**
         * unknown
         */
        FORBIDDEN_NAME_PLATE_CREATED: Unknown[];

        /**
         * unknown
         */
        FORBIDDEN_NAME_PLATE_UNIT_ADDED: Unknown[];

        /**
         * unknown
         */
        FORBIDDEN_NAME_PLATE_UNIT_REMOVED: Unknown[];

        /**
         * Fired when, You log in
         * - Open the friends window (twice)
         * - Switch from the ignore list to the friend's list
         * - Switch from the guild, raid, or who tab back to the friends tab (twice)
         * - Add a friend
         * - Remove a friend
         * - Friend comes online
         * - Friend goes offline
         */
        FRIENDLIST_UPDATE: null;

        /**
         * Fired when the player leaves an Architect Table
         * @since: 6.0.3
         * @see https://wow.gamepedia.com/GARRISON_ARCHITECT_CLOSED
         */
        GARRISON_ARCHITECT_CLOSED: null;

        /**
         * Fired when the player opens an Architect Table
         * @since 6.0.3
         * @see https://wow.gamepedia.com/GARRISON_ARCHITECT_OPENED
         */
        GARRISON_ARCHITECT_OPENED: null;

        /**
         * unknown
         */
        GARRISON_BUILDINGS_SWAPPED: Unknown[];

        /**
         * unknown
         */
        GARRISON_BUILDING_ACTIVATABLE: Unknown[];

        /**
         * unknown
         */
        GARRISON_BUILDING_ACTIVATED: Unknown[];

        /**
         * unknown
         */
        GARRISON_BUILDING_ERROR: Unknown[];

        /**
         * unknown
         */
        GARRISON_BUILDING_LIST_UPDATE: Unknown[];

        /**
         * unknown
         */
        GARRISON_BUILDING_PLACED: Unknown[];

        /**
         * unknown
         */
        GARRISON_BUILDING_REMOVED: Unknown[];

        /**
         * unknown
         */
        GARRISON_BUILDING_UPDATE: Unknown[];

        /**
         * unknown
         */
        GARRISON_FOLLOWER_ADDED: Unknown[];

        /**
         * unknown
         */
        GARRISON_FOLLOWER_CATEGORIES_UPDATED: Unknown[];

        /**
         * unknown
         */
        GARRISON_FOLLOWER_DURABILITY_CHANGED: Unknown[];

        /**
         * unknown
         */
        GARRISON_FOLLOWER_LIST_UPDATE: Unknown[];

        /**
         * unknown
         */
        GARRISON_FOLLOWER_REMOVED: Unknown[];

        /**
         * unknown
         */
        GARRISON_FOLLOWER_UPGRADED: Unknown[];

        /**
         * unknown
         */
        GARRISON_FOLLOWER_XP_CHANGED: Unknown[];

        /**
         * unknown
         */
        GARRISON_HIDE_LANDING_PAGE: Unknown[];

        /**
         * unknown
         */
        GARRISON_INVASION_AVAILABLE: Unknown[];

        /**
         * unknown
         */
        GARRISON_INVASION_UNAVAILABLE: Unknown[];

        /**
         * unknown
         */
        GARRISON_LANDINGPAGE_SHIPMENTS: Unknown[];

        /**
         * unknown
         */
        GARRISON_MISSION_AREA_BONUS_ADDED: Unknown[];

        /**
         * Fired after player clicks bonus chest in the Garrison Missions
         * interface. This event appears to fire upon delivering mission bonus
         * rewards to the player
         * - **arg1**: Unique identifier for the mission arg2**: True if mission
         * - **was a success and the player will receive the bonuses * @since
         * - **6.0.2 * @see
         * - **https://wow.gamepedia.com/GARRISON_MISSION_BONUS_ROLL_COMPLETE
         */
        GARRISON_MISSION_BONUS_ROLL_COMPLETE: [number, boolean];

        /**
         * Fired when player receives a bonus item reward for successful Garrison Missions
         * - **arg1**: Unique identifier for item
         * @description Building a Salvage Yard in the Garrison provides a chance for successful missions to also yield a  [Crate of Salvage] or
         * [Big Crate of Salvage]. This event has a bug and fires twice when the player receives a crate
         * @since 6.0.2
         * @see https://wow.gamepedia.com/GARRISON_MISSION_BONUS_ROLL_LOOT
         */
        GARRISON_MISSION_BONUS_ROLL_LOOT: [number];

        /**
         * Fired when the player views the outcome of missions at a Command Table
         * - **arg1**: Unique identifier for the mission
         * - **arg2**: True if the mission timer is finished and the mission can be completed
         * - **arg3**: True if mission was a success and the player will receive bonus rewards
         * @description When a mission with multiple encounters fails, some may appear to have succeeded. This is an illusion; missions can only
         * fail or succeed. Blizzard's Garrison Mission UI frame randomly selects encounters to show as failed to the player, preferring ones with
         * uncountered mechanics
         * @since 6.0.2
         * @see https://wow.gamepedia.com/GARRISON_MISSION_COMPLETE_RESPONSE
         */
        GARRISON_MISSION_COMPLETE_RESPONSE: [number, boolean, boolean];

        /**
         * unknown
         */
        GARRISON_MISSION_FINISHED: Unknown[];

        /**
         * unknown
         */
        GARRISON_MISSION_LIST_UPDATE: Unknown[];

        /**
         * Fired when the player leaves a Command Table
         * @since 6.0.2
         * @see https://wow.gamepedia.com/GARRISON_MISSION_NPC_CLOSED
         */
        GARRISON_MISSION_NPC_CLOSED: null;

        /**
         * Fired when the player opens a Command Table
         * @since 6.0.2
         * @see https://wow.gamepedia.com/GARRISON_MISSION_NPC_OPENED
         */
        GARRISON_MISSION_NPC_OPENED: null;

        /**
         * unknown
         */
        GARRISON_MISSION_REWARD_INFO: Unknown[];

        /**
         * Fired when the player sends followers on a mission
         * @since 6.0.2
         * @see https://wow.gamepedia.com/GARRISON_MISSION_STARTED
         */
        GARRISON_MISSION_STARTED: null;

        /**
         * unknown
         */
        GARRISON_MONUMENT_CLOSE_UI: Unknown[];

        /**
         * unknown
         */
        GARRISON_MONUMENT_LIST_LOADED: Unknown[];

        /**
         * unknown
         */
        GARRISON_MONUMENT_REPLACED: Unknown[];

        /**
         * unknown
         */
        GARRISON_MONUMENT_SELECTED_TROPHY_ID_LOADED: Unknown[];

        /**
         * unknown
         */
        GARRISON_MONUMENT_SHOW_UI: Unknown[];

        /**
         * unknown
         */
        GARRISON_RANDOM_MISSION_ADDED: Unknown[];

        /**
         * unknown
         */
        GARRISON_RECALL_PORTAL_LAST_USED_TIME: Unknown[];

        /**
         * unknown
         */
        GARRISON_RECALL_PORTAL_USED: Unknown[];

        /**
         * unknown
         */
        GARRISON_RECRUITMENT_FOLLOWERS_GENERATED: Unknown[];

        /**
         * unknown
         */
        GARRISON_RECRUITMENT_NPC_CLOSED: Unknown[];

        /**
         * unknown
         */
        GARRISON_RECRUITMENT_NPC_OPENED: Unknown[];

        /**
         * unknown
         */
        GARRISON_RECRUITMENT_READY: Unknown[];

        /**
         * unknown
         */
        GARRISON_RECRUIT_FOLLOWER_RESULT: Unknown[];

        /**
         * unknown
         */
        GARRISON_SHIPMENT_RECEIVED: Unknown[];

        /**
         * unknown
         */
        GARRISON_SHIPYARD_NPC_CLOSED: Unknown[];

        /**
         * unknown
         */
        GARRISON_SHIPYARD_NPC_OPENED: Unknown[];

        /**
         * unknown
         */
        GARRISON_SHOW_LANDING_PAGE: Unknown[];

        /**
         * unknown
         */
        GARRISON_TALENT_COMPLETE: Unknown[];

        /**
         * unknown
         */
        GARRISON_TALENT_NPC_CLOSED: Unknown[];

        /**
         * unknown
         */
        GARRISON_TALENT_NPC_OPENED: Unknown[];

        /**
         * unknown
         */
        GARRISON_TALENT_UPDATE: Unknown[];

        /**
         * unknown
         */
        GARRISON_TRADESKILL_NPC_CLOSED: Unknown[];

        /**
         * unknown
         */
        GARRISON_UPDATE: Unknown[];

        /**
         * unknown
         */
        GARRISON_UPGRADEABLE_RESULT: Unknown[];

        /**
         * unknown
         */
        GARRISON_USE_PARTY_GARRISON_CHANGED: Unknown[];

        /**
         * Fired when a GetItemInfo call causes the client to query the server for data about an item and that data has arrived.
         * (May or may not fire for item data that is queried automatically by client when seen in world, auction house, chat link etc)
         * - **arg1**: The Item ID of received item info
         * @see https://wow.gamepedia.com/GET_ITEM_INFO_RECEIVED
         */
        GET_ITEM_INFO_RECEIVED: [number];

        /**
         * Fires whenever you press a mouse button.
         * - **arg1**: The mouse button pressed
         * @see https://wow.gamepedia.com/GLOBAL_MOUSE_DOWN
         */
        GLOBAL_MOUSE_DOWN: [MouseButton];

        /**
         * Fires whenever a mouse button gets released.
         * - **arg1**: The mouse button pressed
         * @see https://wow.gamepedia.com/GLOBAL_MOUSE_DOWN
         */
        GLOBAL_MOUSE_UP: [MouseButton];

        /**
         * Fired when a glyph is added to a socket. Also fires for a socket when changing the talent group causes that socket to change from an
         * empty to a used state
         * @see https://wow.gamepedia.com/GLYPH_ADDED
         */
        GLYPH_ADDED: null;

        /**
         * ? Probably fired when a glyph slot becomes locked? ?? (How exactly would this happen, anyway?)
         * @see https://wow.gamepedia.com/GLYPH_DISABLED
         */
        GLYPH_DISABLED: null;

        /**
         * ? Probably fired when a glyph slot becomes unlocked?
         * @see https://wow.gamepedia.com/GLYPH_ENABLED
         */
        GLYPH_ENABLED: null;

        /**
         * Fired when a glyph is removed from a socket. This can be done with either shift-right-clicking the socket, or by repalcing it with another
         * glyph. If another glyph replaces this one, this is fired at the start of (before) the cast. Also fired when changing the active talent group
         * changes a socket to empty
         * @see https://wow.gamepedia.com/GLYPH_REMOVED
         */
        GLYPH_REMOVED: null;

        /**
         * Fired for each slot that changes when the active talent group changes. Does not fire when a glyph slot retains the same glyph in the same slot
         * @see https://wow.gamepedia.com/GLYPH_UPDATED
         */
        GLYPH_UPDATED: null;

        /**
         * unknown
         */
        GMRESPONSE_RECEIVED: Unknown[];

        /**
         * unknown
         */
        GMSURVEY_DISPLAY: Unknown[];

        /**
         * unknown
         */
        GM_PLAYER_INFO: Unknown[];

        /**
         * Fired when you close the talk window for an npc
         * - **arg1**: The mouse button used to close the window (nil if closed when you go out of range)
         * @see https://wow.gamepedia.com/GOSSIP_CLOSED
         */
        GOSSIP_CLOSED: [MouseButton | null];

        /**
         * unknown
         */
        GOSSIP_CONFIRM: Unknown[];

        /**
         * unknown
         */
        GOSSIP_CONFIRM_CANCEL: Unknown[];

        /**
         * unknown
         */
        GOSSIP_ENTER_CODE: Unknown[];

        /**
         * Fired when you talk to an npc
         * @description This event typically fires when you are given several choices, including choosing to sell item, select available and active
         * quests, just talk about something, or bind to a location. Even when the the only available choices are quests, this event is often used
         * instead of QUEST_GREETING
         * @see https://wow.gamepedia.com/GOSSIP_SHOW
         */
        GOSSIP_SHOW: null;

        /**
         * unknown
         */
        GROUP_INVITE_CONFIRMATION: Unknown[];

        /**
         * unknown
         */
        GROUP_JOINED: Unknown[];

        /**
         * unknown
         */
        GROUP_LEFT: Unknown[];

        /**
         * This is the new version of RAID_ROSTER_UPDATE and PARTY_MEMBERS_CHANGED, which have been removed
         * @since 5.0.4
         * @see https://wow.gamepedia.com/GROUP_ROSTER_UPDATE
         */
        GROUP_ROSTER_UPDATE: null;

        /**
         * Fired when the guild-bank contents change
         * @see https://wow.gamepedia.com/GUILDBANKBAGSLOTS_CHANGED
         */
        GUILDBANKBAGSLOTS_CHANGED: null;

        /**
         * Fired when the guild-bank frame is closed
         * @see https://wow.gamepedia.com/GUILDBANKFRAME_CLOSED
         */
        GUILDBANKFRAME_CLOSED: null;

        /**
         * Fired when the guild-bank frame is opened
         * @see https://wow.gamepedia.com/GUILDBANKFRAME_OPENED
         */
        GUILDBANKFRAME_OPENED: null;

        /**
         * Fired when the guild-bank log is updated
         * @see https://wow.gamepedia.com/GUILDBANKLOG_UPDATE
         */
        GUILDBANKLOG_UPDATE: null;

        /**
         * unknown
         */
        GUILDBANK_ITEM_LOCK_CHANGED: Unknown[];

        /**
         * unknown
         */
        GUILDBANK_TEXT_CHANGED: Unknown[];

        /**
         * unknown
         */
        GUILDBANK_UPDATE_MONEY: Unknown[];

        /**
         * unknown
         */
        GUILDBANK_UPDATE_TABS: Unknown[];

        /**
         * unknown
         */
        GUILDBANK_UPDATE_TEXT: Unknown[];

        /**
         * unknown
         */
        GUILDBANK_UPDATE_WITHDRAWMONEY: Unknown[];

        /**
         * unknown
         */
        GUILDTABARD_UPDATE: Unknown[];

        /**
         * Fired when a guild challenge has been completed
         * @since 4.1.0
         * @see https://wow.gamepedia.com/GUILD_CHALLENGE_COMPLETED
         */
        GUILD_CHALLENGE_COMPLETED: null;

        /**
         * unknown
         * @since 4.1.0
         * @see https://wow.gamepedia.com/GUILD_CHALLENGE_UPDATED
         */
        GUILD_CHALLENGE_UPDATED: null;

        /**
         * unknown
         */
        GUILD_EVENT_LOG_UPDATE: Unknown[];

        /**
         * Fired when the guild invitation is declined
         * @see https://wow.gamepedia.com/GUILD_INVITE_CANCEL
         */
        GUILD_INVITE_CANCEL: null;

        /**
         * Fired when you are invited to join a guild
         * - **arg1**: guild inviter
         * - **arg2**: guild name
         * @see https://wow.gamepedia.com/GUILD_INVITE_REQUEST
         */
        GUILD_INVITE_REQUEST: [string, string];

        /**
         * Fired when the guild messages of the day is shown
         * - **arg1**: guild message of the day
         * @see https://wow.gamepedia.com/GUILD_MOTD
         */
        GUILD_MOTD: [string];

        /**
         * unknown
         */
        GUILD_NEWS_UPDATE: Unknown[];

        /**
         * unknown
         */
        GUILD_PARTY_STATE_UPDATED: Unknown[];

        /**
         * unknown
         */
        GUILD_PERK_UPDATE: Unknown[];

        /**
         * Fired when any changes are made to ranks or rank permission flags
         * @see https://wow.gamepedia.com/GUILD_RANKS_UPDATE
         */
        GUILD_RANKS_UPDATE: null;

        /**
         * unknown
         */
        GUILD_RECIPE_KNOWN_BY_MEMBERS: Unknown[];

        /**
         * unknown
         */
        GUILD_REGISTRAR_CLOSED: Unknown[];

        /**
         * unknown
         */
        GUILD_REGISTRAR_SHOW: Unknown[];

        /**
         * unknown
         */
        GUILD_RENAME_REQUIRED: Unknown[];
        /**
         * unknown
         */
        GUILD_REP_UPDATED: Unknown[];

        /**
         * unknown
         */
        GUILD_REWARDS_LIST: Unknown[];

        /**
         * Fired when the client's guild info cache has been updated after a call to GuildRoster() or after any data change in any of the guild's
         * data, excluding the Guild Information window
         * - **arg1**: nil if this event was triggered by the client cache being updated after a call to GuildRoster, 1 if there was a local change
         * to Guild roster data
         * @see https://wow.gamepedia.com/GUILD_ROSTER_UPDATE
         */
        GUILD_ROSTER_UPDATE: [Flag | null];

        /**
         * unknown
         */
        GUILD_TRADESKILL_UPDATE: Unknown[];

        /**
         * unknown
         */
        GUILD_XP_UPDATE: Unknown[];

        /**
         * unknown
         */
        HEARTHSTONE_BOUND: Unknown[];

        /**
         * unknown
         */
        HEIRLOOMS_UPDATED: Unknown[];

        /**
         * unknown
         */
        HEIRLOOM_UPGRADE_TARGETING_CHANGED: Unknown[];

        /**
         * unknown
         */
        HONOR_LEVEL_UPDATE: Unknown[];

        /**
         * unknown
         */
        HONOR_PRESTIGE_UPDATE: Unknown[];

        /**
         * unknown
         */
        HONOR_XP_UPDATE: Unknown[];

        /**
         * Fired when a player is added or removed from the ignore list. Event is called twice. Not certain why it is called twice
         * @see https://wow.gamepedia.com/IGNORELIST_UPDATE
         */
        IGNORELIST_UPDATE: null;

        /**
         * unknown
         */
        IGR_BILLING_NAG_DIALOG: Unknown[];

        /**
         * unknown
         */
        INCOMING_RESURRECT_CHANGED: Unknown[];

        /**
         * unknown
         */
        INITIAL_HOTFIXES_APPLIED: Unknown[];

        /**
         * unknown
         */
        INSPECT_ACHIEVEMENT_READ: Unknown[];

        /**
         * unknown
         */
        INSPECT_HONOR_UPDATE: Unknown[];

        /**
         * After a NotifyInspect(unit) is called, this is fired, indicating the Inspected player's information has been loaded
         * - **arg1**: Unit GUID
         * @see https://wow.gamepedia.com/INSPECT_READY
         */
        INSPECT_READY: [Guid];

        /**
         * Fired when the countdown to boot a player from an instance starts
         * @see https://wow.gamepedia.com/INSTANCE_BOOT_START
         */
        INSTANCE_BOOT_START: null;

        /**
         * Fired when the countdown to boot a player from an instance stops
         * @see https://wow.gamepedia.com/INSTANCE_BOOT_STOP
         */
        INSTANCE_BOOT_STOP: null;

        /**
         * unknown
         */
        INSTANCE_ENCOUNTER_ENGAGE_UNIT: Unknown[];

        /**
         * unknown
         */
        INSTANCE_GROUP_SIZE_CHANGED: Unknown[];

        /**
         * unknown
         */
        INSTANCE_LOCK_START: Unknown[];

        /**
         * Fired when quitting the game
         * @see https://wow.gamepedia.com/INSTANCE_LOCK_STOP
         */
        INSTANCE_LOCK_STOP: null;

        /**
         * unknown
         */
        INSTANCE_LOCK_WARNING: Unknown[];

        /**
         * Fired when the Inventory Search Box is updated
         * @since 4.3.0
         * @see https://wow.gamepedia.com/INVENTORY_SEARCH_UPDATE
         */
        INVENTORY_SEARCH_UPDATE: null;

        /**
         * @see https://wow.gamepedia.com/ITEM_INTERACTION_CLOSE
         */
        ITEM_INTERACTION_CLOSE: null;

        /**
         * @see https://wow.gamepedia.com/ITEM_INTERACTION_ITEM_SELECTION_UPDATED
         */
        ITEM_INTERACTION_ITEM_SELECTION_UPDATED: Unknown[];

        /**
         * @see https://wow.gamepedia.com/ITEM_INTERACTION_OPEN
         */
        ITEM_INTERACTION_OPEN: null;

        /**
         * @see https://wow.gamepedia.com/ITEM_KEY_ITEM_INFO_RECEIVED
         */
        ITEM_KEY_ITEM_INFO_RECEIVED: [number];

        /**
         * Fires when an item gets "locked" in the inventory or a container
         * - **arg1**: Bag of item
         * - **arg2**: Slot of item
         * @see https://wow.gamepedia.com/ITEM_LOCKED
         */
        ITEM_LOCKED: [CONTAINER_ID, INVENTORY_SLOT_ID];

        /**
         * Fires when the "locked" status on a container or inventory item changes, usually from but not limited to Pickup functions to move items
         * - If arg2 is non-nil
         *  - **arg1**: Bag of updated item
         *  - **arg2**: Slot of updated item
         * - If arg2 is nil
         *  - **arg1**: Equipment slot of item
         *  - **arg2**: unused
         * @see https://wow.gamepedia.com/ITEM_LOCK_CHANGED
         */
        ITEM_LOCK_CHANGED: [CONTAINER_ID | INVENTORY_SLOT_ID, INVENTORY_SLOT_ID?];

        /**
         * @see https://wow.gamepedia.com/ITEM_PURCHASED
         */
        ITEM_PURCHASED: [number];

        /**
         * Fired when an item is pushed onto the "inventory-stack". For instance when you manufacture something with your trade skills or picks something up
         * - **arg1**: the bag that has received the new item
         * - **arg2**: the path to the item's icon
         * @see https://wow.gamepedia.com/ITEM_PUSH
         */
        ITEM_PUSH: [CONTAINER_ID, TexturePath];

        /**
         * unknown
         */
        ITEM_RESTORATION_BUTTON_STATUS: Unknown[];

        /**
         * @see https://wow.gamepedia.com/ITEM_SEARCH_RESULTS_ADDED
         */
        ITEM_SEARCH_RESULTS_ADDED: Unknown[];

        /**
         * @see https://wow.gamepedia.com/ITEM_SEARCH_RESULTS_UPDATED
         */
        ITEM_SEARCH_RESULTS_UPDATED: Unknown[];

        /**
         * Fired when an items text begins displaying
         * @see https://wow.gamepedia.com/ITEM_TEXT_BEGIN
         */
        ITEM_TEXT_BEGIN: null;

        /**
         * Fired when the items text has completed its viewing and is done
         * @see https://wow.gamepedia.com/ITEM_TEXT_CLOSED
         */
        ITEM_TEXT_CLOSED: null;

        /**
         * Fired when the item's text can continue and is ready to be scrolled
         * @see https://wow.gamepedia.com/ITEM_TEXT_READY
         */
        ITEM_TEXT_READY: null;

        /**
         * Fired when an item is in the process of being translated
         * @see https://wow.gamepedia.com/ITEM_TEXT_TRANSLATION
         */
        ITEM_TEXT_TRANSLATION: null;

        /**
         * unknown
         */
        ITEM_UNLOCKED: Unknown[];

        /**
         * unknown
         */
        ITEM_UPGRADE_MASTER_CLOSED: Unknown[];

        /**
         * unknown
         */
        ITEM_UPGRADE_MASTER_OPENED: Unknown[];

        /**
         * unknown
         */
        ITEM_UPGRADE_MASTER_SET_ITEM: Unknown[];

        /**
         * unknown
         */
        ITEM_UPGRADE_MASTER_UPDATE: Unknown[];

        /**
         * unknown
         */
        KNOWLEDGE_BASE_ARTICLE_LOAD_FAILURE: Unknown[];

        /**
         * unknown
         */
        KNOWLEDGE_BASE_ARTICLE_LOAD_SUCCESS: Unknown[];

        /**
         * unknown
         */
        KNOWLEDGE_BASE_QUERY_LOAD_FAILURE: Unknown[];

        /**
         * unknown
         */
        KNOWLEDGE_BASE_QUERY_LOAD_SUCCESS: Unknown[];

        /**
         * unknown
         */
        KNOWLEDGE_BASE_SERVER_MESSAGE: Unknown[];

        /**
         * unknown
         */
        KNOWLEDGE_BASE_SETUP_LOAD_FAILURE: Unknown[];

        /**
         * unknown
         */
        KNOWLEDGE_BASE_SETUP_LOAD_SUCCESS: Unknown[];

        /**
         * unknown
         */
        KNOWLEDGE_BASE_SYSTEM_MOTD_UPDATED: Unknown[];

        /**
         * unknown
         */
        KNOWN_TITLES_UPDATE: Unknown[];

        /**
         * unknown
         */
        LANGUAGE_LIST_CHANGED: Unknown[];

        /**
         * Fired when a new spell/ability is added to the spellbook. e.g. When training a new or a higher level spell/ability
         * - **arg1**: Spell ID
         * - **arg2**: Number of the tab which the spell/ability is added to
         * @see https://wow.gamepedia.com/LEARNED_SPELL_IN_TAB
         */
        LEARNED_SPELL_IN_TAB: [number, number];

        /**
         * unknown
         */
        LEVEL_GRANT_PROPOSED: Unknown[];

        /**
         * Fired when the player updates which faction the reputation bonus for the first Dungeon Finder and Scenario of the day should be applied
         * towards. Use GetLFGBonusFactionID to retrieve the new value
         * @since 5.2.0
         * @see https://wow.gamepedia.com/LFG_BONUS_FACTION_ID_UPDATED
         */
        LFG_BONUS_FACTION_ID_UPDATED: null;

        /**
         * unknown
         */
        LFG_BOOT_PROPOSAL_UPDATE: Unknown[];

        /**
         * Fired when a random dungeon (picked by the Dungeon Finder) is completed. This event causes a window similar to the achievement alert to
         * appear, with the details of your Dungeon Finder rewards
         * @see https://wow.gamepedia.com/LFG_COMPLETION_REWARD
         */
        LFG_COMPLETION_REWARD: null;

        /**
         * unknown
         */
        LFG_INVALID_ERROR_MESSAGE: Unknown[];

        /**
         * unknown
         */
        LFG_LIST_ACTIVE_ENTRY_UPDATE: Unknown[];

        /**
         * unknown
         */
        LFG_LIST_APPLICANT_LIST_UPDATED: Unknown[];

        /**
         * unknown
         */
        LFG_LIST_APPLICANT_UPDATED: Unknown[];

        /**
         * unknown
         */
        LFG_LIST_APPLICATION_STATUS_UPDATED: Unknown[];

        /**
         * unknown
         */
        LFG_LIST_AVAILABILITY_UPDATE: Unknown[];

        /**
         * unknown
         */
        LFG_LIST_ENTRY_CREATION_FAILED: Unknown[];

        /**
         * unknown
         */
        LFG_LIST_ENTRY_EXPIRED_TIMEOUT: Unknown[];

        /**
         * unknown
         */
        LFG_LIST_ENTRY_EXPIRED_TOO_MANY_PLAYERS: Unknown[];

        /**
         * unknown
         */
        LFG_LIST_JOINED_GROUP: Unknown[];

        /**
         * unknown
         */
        LFG_LIST_SEARCH_FAILED: Unknown[];

        /**
         * unknown
         */
        LFG_LIST_SEARCH_RESULTS_RECEIVED: Unknown[];

        /**
         * unknown
         */
        LFG_LIST_SEARCH_RESULT_UPDATED: Unknown[];

        /**
         * Fired when Dungeon Lock info is received
         * @see https://wow.gamepedia.com/LFG_LOCK_INFO_RECEIVED
         */
        LFG_LOCK_INFO_RECEIVED: null;

        /**
         * unknown
         */
        LFG_OFFER_CONTINUE: Unknown[];

        /**
         * Fired when a gossip option is used to initiate a Looking-for-Dungeon interaction
         * - **arg1**: index of the dungeon the NPC wants us to queue for (index to GetLFGDungeonInfo(id)).
         * @see https://wow.gamepedia.com/LFG_OPEN_FROM_GOSSIP
         */
        LFG_OPEN_FROM_GOSSIP: [number];

        /**
         * unknown
         */
        LFG_PROPOSAL_DONE: Unknown[];

        /**
         * Fired when someone decline or don't make a choice within time in the dungeon queue invite
         * @see https://wow.gamepedia.com/LFG_PROPOSAL_FAILED
         */
        LFG_PROPOSAL_FAILED: null;

        /**
         * Fired when a dungeon group was found and the dialog to accept or decline it appears
         * @see https://wow.gamepedia.com/LFG_PROPOSAL_SHOW
         */
        LFG_PROPOSAL_SHOW: null;

        /**
         * Fired when everyone in the dungeon queue accepted the invite
         * @see https://wow.gamepedia.com/LFG_PROPOSAL_SUCCEEDED
         */
        LFG_PROPOSAL_SUCCEEDED: null;

        /**
         * Fired when someone either accept or decline the dungeon queue invite
         * @see https://wow.gamepedia.com/LFG_PROPOSAL_UPDATE
         */
        LFG_PROPOSAL_UPDATE: null;

        /**
         * unknown
         */
        LFG_QUEUE_STATUS_UPDATE: Unknown[];

        /**
         * unknown
         */
        LFG_READY_CHECK_DECLINED: Unknown[];

        /**
         * unknown
         */
        LFG_READY_CHECK_HIDE: Unknown[];

        /**
         * unknown
         */
        LFG_READY_CHECK_PLAYER_IS_READY: Unknown[];

        /**
         * unknown
         */
        LFG_READY_CHECK_SHOW: Unknown[];

        /**
         * unknown
         */
        LFG_READY_CHECK_UPDATE: Unknown[];

        /**
         * unknown
         */
        LFG_ROLE_CHECK_DECLINED: Unknown[];

        /**
         * unknown
         */
        LFG_ROLE_CHECK_HIDE: Unknown[];

        /**
         * unknown
         */
        LFG_ROLE_CHECK_ROLE_CHOSEN: Unknown[];

        /**
         * unknown
         */
        LFG_ROLE_CHECK_SHOW: Unknown[];

        /**
         * unknown
         */
        LFG_ROLE_CHECK_UPDATE: Unknown[];

        /**
         * unknown
         */
        LFG_ROLE_UPDATE: Unknown[];

        /**
         * When fired prompts the LFG UI to update the list of available LFG categories and objectives (i.e. new quests, zones, instances available
         * to LFG). See API GetLFGTypes
         * @see https://wow.gamepedia.com/LFG_UPDATE
         */
        LFG_UPDATE: null;

        /**
         * unknown
         */
        LFG_UPDATE_RANDOM_INFO: Unknown[];

        /**
         * unknown
         */
        LF_GUILD_BROWSE_UPDATED: Unknown[];

        /**
         * unknown
         */
        LF_GUILD_MEMBERSHIP_LIST_CHANGED: Unknown[];

        /**
         * unknown
         */
        LF_GUILD_MEMBERSHIP_LIST_UPDATED: Unknown[];

        /**
         * unknown
         */
        LF_GUILD_POST_UPDATED: Unknown[];

        /**
         * unknown
         */
        LF_GUILD_RECRUITS_UPDATED: Unknown[];

        /**
         * unknown
         */
        LF_GUILD_RECRUIT_LIST_CHANGED: Unknown[];

        /**
         * unknown
         */
        LIFESTEAL_UPDATE: Unknown[];

        /**
         * unknown
         */
        LOADING_SCREEN_DISABLED: Unknown[];

        /**
         * unknown
         */
        LOADING_SCREEN_ENABLED: Unknown[];

        /**
         * unknown
         */
        LOCALPLAYER_PET_RENAMED: Unknown[];

        /**
         * unknown
         */
        LOGOUT_CANCEL: Unknown[];

        /**
         * Fired when the player attempts to take 'bind-on-pickup' loot
         * @see https://wow.gamepedia.com/LOOT_BIND_CONFIRM
         */
        LOOT_BIND_CONFIRM: null;

        /**
         * Fired when a player ceases looting a corpse. Note that this will fire before the last CHAT_MSG_LOOT event for that loot
         * @see https://wow.gamepedia.com/LOOT_CLOSED
         */
        LOOT_CLOSED: null;

        /**
         * unknown
         */
        LOOT_HISTORY_AUTO_SHOW: Unknown[];

        /**
         * unknown
         */
        LOOT_HISTORY_FULL_UPDATE: Unknown[];

        /**
         * unknown
         */
        LOOT_HISTORY_ROLL_CHANGED: Unknown[];

        /**
         * unknown
         */
        LOOT_HISTORY_ROLL_COMPLETE: Unknown[];

        /**
         * unknown
         */
        LOOT_ITEM_AVAILABLE: Unknown[];

        /**
         * unknown
         */
        LOOT_ITEM_ROLL_WON: Unknown[];

        /**
         * unknown
         */
        LOOT_JOURNAL_LIST_UPDATE: Unknown[];

        /**
         * Fired when a corpse is looted
         * - **arg1**: 1 if autolooting, otherwise 0 (not nil!)
         * @see https://wow.gamepedia.com/LOOT_OPENED
         */
        LOOT_OPENED: [Flag];

        /**
         * unknown
         */
        LOOT_READY: Unknown[];

        /**
         * unknown
         */
        LOOT_ROLLS_COMPLETE: Unknown[];

        /**
         * unknown
         */
        LOOT_SLOT_CHANGED: Unknown[];

        /**
         * Fired when loot is removed from a corpse
         * - **arg1**: Slot number
         * @see https://wow.gamepedia.com/LOOT_SLOT_CLEARED
         */
        LOOT_SLOT_CLEARED: [number];

        /**
         * unknown
         */
        LOSS_OF_CONTROL_ADDED: Unknown[];

        /**
         * unknown
         */
        LOSS_OF_CONTROL_UPDATE: Unknown[];

        /**
         * unknown
         */
        LUA_WARNING: Unknown[];

        /**
         * (this event doesn't seem to be used anymore, use MACRO_ACTION_FORBIDDEN)
         * @deprecated
         * @see https://wow.gamepedia.com/MACRO_ACTION_BLOCKED
         */
        MACRO_ACTION_BLOCKED: null;

        /**
         * Sent when a macro tries use actions that are always forbidden (movement, targeting, etc.).
         * - **arg1**: As of 3.0.2 (possibly sooner) this argument appears to always be "UNKNOWN()"
         * @see https://wow.gamepedia.com/MACRO_ACTION_FORBIDDEN
         */
        MACRO_ACTION_FORBIDDEN: [string];

        /**
         * Fired when the mailbox window is closed
         * @see https://wow.gamepedia.com/MAIL_CLOSED
         */
        MAIL_CLOSED: null;

        /**
         * unknown
         */
        MAIL_FAILED: Unknown[];

        /**
         * This event is fired when the inbox changes in any way, including
         * - when the inbox list is loaded while the frame is open
         * - when a mail item changes from new to read
         * - when a mail item is opened for the first time in a session
         * -----------------
         * - **arg1**: the mouse button clicked when opening a mail item; otherwise arg1 is nil.
         * - **arg2**: always false
         * @see https://wow.gamepedia.com/MAIL_INBOX_UPDATE
         */
        MAIL_INBOX_UPDATE: [MouseButton | null, false];

        /**
         * Fired when you send an item that needs a confirmation (e.g. Heirlooms that are still refundable)
         * - **arg1**: Mail Slot
         * - **arg2**: itemLink
         * @see https://wow.gamepedia.com/MAIL_LOCK_SEND_ITEMS
         */
        MAIL_LOCK_SEND_ITEMS: [number, ItemLink];

        /**
         * Fired when an item is dragged to or from the Send Item box in an outgoing mail message
         * @see https://wow.gamepedia.com/MAIL_SEND_INFO_UPDATE
         */
        MAIL_SEND_INFO_UPDATE: null;

        /**
         * Fired when a mail has been successfully sent to the mailbox of the recipient, it is also called when the mailbox is opened for some reason ... bug?
         * @see https://wow.gamepedia.com/MAIL_SEND_SUCCESS
         */
        MAIL_SEND_SUCCESS: null;

        /**
         * Fired when the mailbox is first opened
         * - **arg1**: returns "up"
         * @see https://wow.gamepedia.com/MAIL_SHOW
         */
        MAIL_SHOW: [string];

        /**
         * unknown
         */
        MAIL_SUCCESS: Unknown[];

        /**
         * Fires when the mail confirmation is cancelled and the concerned item(s) need to be unlocked
         * @see https://wow.gamepedia.com/MAIL_UNLOCK_SEND_ITEMS
         */
        MAIL_UNLOCK_SEND_ITEMS: null;

        /**
         * unknown
         */
        MAP_BAR_UPDATE: Unknown[];

        /**
         * unknown
         */
        MASTERY_UPDATE: Unknown[];

        /**
         * unknown
         */
        MAX_EXPANSION_LEVEL_UPDATED: Unknown[];

        /**
         * unknown
         */
        MAX_SPELL_START_RECOVERY_OFFSET_CHANGED: Unknown[];

        /**
         * Fired when a merchant frame closes. (Called twice)
         * - **arg1**: button used to close the window
         * @see https://wow.gamepedia.com/MERCHANT_CLOSED
         */
        MERCHANT_CLOSED: [MouseButton | null];

        /**
         * unknown
         */
        MERCHANT_CONFIRM_TRADE_TIMER_REMOVAL: Unknown[];

        /**
         * unknown
         */
        MERCHANT_FILTER_ITEM_UPDATE: Unknown[];

        /**
         * Fired when the merchant frame is shown
         * @see https://wow.gamepedia.com/MERCHANT_SHOW
         */
        MERCHANT_SHOW: null;

        /**
         * Fired when a merchant updates
         * @see https://wow.gamepedia.com/MERCHANT_UPDATE
         */
        MERCHANT_UPDATE: null;

        /**
         * Fired when the minimap is pinged
         * - **arg1**: UnitId of the one that created the ping (ie "player" or any of the group members)
         * - **arg2**: x coordinate
         * - **arg3**: y coordinate
         * @see https://wow.gamepedia.com/MINIMAP_PING
         */
        MINIMAP_PING: [UnitId, number, number];

        /**
         * Fired when the player selects a different tracking type from the menu attached to the mini map. There seems to be no useful arguments
         * as of the time of this writing
         * - **arg1**: Mouse button used to click the tracking button (i.e. "LEFTBUTTON")
         * @since 2.3.0
         * @see https://wow.gamepedia.com/MINIMAP_UPDATE_TRACKING
         */
        MINIMAP_UPDATE_TRACKING: [MouseButton];

        /**
         * Fired when the minimap scaling factor is changed. This happens, generally, whenever the player moves indoors from outside, or vice versa.
         * There are no arguments to this event. To test the player's location, compare the minimapZoom and minimapInsideZoom CVars with the current
         * minimap zoom level (see GetZoom)
         * @description This event does not relate to the + and - minimap zoom buttons
         * @see https://wow.gamepedia.com/MINIMAP_UPDATE_ZOOM
         */
        MINIMAP_UPDATE_ZOOM: null;

        /**
         * unknown
         */
        MIN_EXPANSION_LEVEL_UPDATED: Unknown[];

        /**
         * Fired when the mirror timer is paused.
         * - **arg1**: pause duration
         * @see https://wow.gamepedia.com/MIRROR_TIMER_PAUSE
         */
        MIRROR_TIMER_PAUSE: [number];

        /**
         * Fired when some sort of timer starts
         * - **arg1**: timer ( for ex. "BREATH" )
         * - **arg2**: value ( start-time in ms, for ex. 180000 )
         * - **arg3**: maxvalue ( max-time in ms, for ex. 180000 )
         * - **arg4**:  ( time added per second in seconds, for ex. -1 )
         * - **arg5**: paused
         * - **arg6**: label ( for ex. "Breath" )
         */
        MIRROR_TIMER_START: [string, number, number, number, boolean, string];

        /**
         * Fired when a mirror timer is stopped
         * - **arg1**: timer ( for ex. "BREATH" )
         * @see https://wow.gamepedia.com/MIRROR_TIMER_STOP
         */
        MIRROR_TIMER_STOP: [string];

        /**
         * Fired when shift/ctrl/alt keys are pressed or released. Does not fire when an EditBox has keyboard focus
         * - **arg1**: "LSHIFT", "RSHIFT", "LCTRL", "RCTRL", "LALT", "RALT"
         * - **arg2**: 1 for pressed, 0 (not nil!) for released
         * @see https://wow.gamepedia.com/MODIFIER_STATE_CHANGED
         */
        MODIFIER_STATE_CHANGED: [string, Flag];

        /**
         * unknown
         */
        MOUNT_CURSOR_CLEAR: Unknown[];

        /**
         * unknown
         */
        MOUNT_JOURNAL_SEARCH_UPDATED: Unknown[];

        /**
         * unknown
         */
        MOUNT_JOURNAL_USABILITY_CHANGED: Unknown[];

        /**
         * unknown
         */
        MOVIE_COMPRESSING_PROGRESS: Unknown[];

        /**
         * unknown
         */
        MOVIE_RECORDING_PROGRESS: Unknown[];

        /**
         * unknown
         */
        MOVIE_UNCOMPRESSED_MOVIE: Unknown[];

        /**
         * unknown
         */
        MUTELIST_UPDATE: Unknown[];

        /**
         * unknown
         */
        NAME_PLATE_CREATED: Unknown[];

        /**
         * unknown
         */
        NAME_PLATE_UNIT_ADDED: Unknown[];

        /**
         * unknown
         */
        NAME_PLATE_UNIT_REMOVED: Unknown[];

        /**
         * unknown
         */
        NEUTRAL_FACTION_SELECT_RESULT: Unknown[];

        /**
         * unknown
         */
        NEW_MOUNT_ADDED: Unknown[];

        /**
         * unknown
         */
        NEW_PET_ADDED: Unknown[];

        /**
         * unknown
         */
        NEW_RECIPE_LEARNED: Unknown[];

        /**
         * unknown
         */
        NEW_TITLE_EARNED: Unknown[];

        /**
         * unknown
         */
        NEW_WMO_CHUNK: Unknown[];

        /**
         * unknown
         */
        NPC_PVPQUEUE_ANYWHERE: Unknown[];

        /**
         * unknown
         */
        NPE_TUTORIAL_UPDATE: Unknown[];

        /**
         * unknown
         */
        OBLITERUM_FORGE_CLOSE: Unknown[];

        /**
         * unknown
         */
        OBLITERUM_FORGE_PENDING_ITEM_CHANGED: Unknown[];

        /**
         * unknown
         */
        OBLITERUM_FORGE_SHOW: Unknown[];

        /**
         * unknown
         */
        OLD_TITLE_LOST: Unknown[];

        /**
         * unknown
         */
        OPEN_MASTER_LOOT_LIST: Unknown[];

        /**
         * Fired when interacting with an NPC allowing guild tabard customization
         */
        OPEN_TABARD_FRAME: null;

        /**
         * @see https://wow.gamepedia.com/OWNED_AUCTIONS_UPDATED
         */
        OWNED_AUCTIONS_UPDATED: null;

        /**
         * unknown
         */
        PARTY_CONVERTED_TO_RAID: Unknown[];

        /**
         * Fired when you decline a party invite
         * @see https://wow.gamepedia.com/PARTY_INVITE_CANCEL
         */
        PARTY_INVITE_CANCEL: null;

        /**
         * Fired when a player invite you to party
         * - **arg1**: player that invited you
         * - **arg2**: tank slot available
         * - **arg3**: healer slot available
         * - **arg4**: DPS slot available
         * - **arg5**: invite is cross realm
         * - **arg6**: unknown
         * @see https://wow.gamepedia.com/PARTY_INVITE_REQUEST
         */
        PARTY_INVITE_REQUEST: [string, boolean, boolean, boolean, boolean, Unknown];

        /**
         * Fired when the player's leadership changed
         * @see https://wow.gamepedia.com/PARTY_LEADER_CHANGED
         */
        PARTY_LEADER_CHANGED: null;

        /**
         * unknown
         */
        PARTY_LFG_RESTRICTED: Unknown[];

        /**
         * Fired when the party's loot method changes
         * @see https://wow.gamepedia.com/PARTY_LOOT_METHOD_CHANGED
         */
        PARTY_LOOT_METHOD_CHANGED: null;

        /**
         * In Mists of Pandaria, this event is no longer generated. It has been replaced by GROUP_ROSTER_UPDATE
         * @deprecated
         * @see https://wow.gamepedia.com/PARTY_MEMBERS_CHANGED
         */
        PARTY_MEMBERS_CHANGED: null;

        /**
         * Fired when a specific party member is offline or dead
         * - **arg1**: Player Name
         * @see https://wow.gamepedia.com/PARTY_MEMBER_DISABLE
         */
        PARTY_MEMBER_DISABLE: [string];

        /**
         * Fired when a specific party member is still connected
         * - **arg1**: Player Name
         * @see https://wow.gamepedia.com/PARTY_MEMBER_ENABLE
         */
        PARTY_MEMBER_ENABLE: [string];

        /**
         * unknown
         */
        PARTY_REFER_A_FRIEND_UPDATED: Unknown[];

        /**
         * Fired when a petition is closed, e.g. by you signing it. See PETITION_SHOW
         * @see https://wow.gamepedia.com/PETITION_CLOSED
         */
        PETITION_CLOSED: null;

        /**
         * Fired when you are shown a petition to create a guild or arena team. This can be due to someone offering you to sign it, or because of
         * you clicking your own charter in your inventory. GetPetitionInfo() will tell you more
         * @see https://wow.gamepedia.com/PETITION_SHOW
         */
        PETITION_SHOW: null;

        /**
         * unknown
         */
        PETITION_VENDOR_CLOSED: Unknown[];

        /**
         * unknown
         */
        PETITION_VENDOR_SHOW: Unknown[];

        /**
         * unknown
         */
        PETITION_VENDOR_UPDATE: Unknown[];

        /**
         * Fired when the player's pet begins attacking
         * @see https://wow.gamepedia.com/PET_ATTACK_START
         */
        PET_ATTACK_START: null;

        /**
         * Fired when the player's pet ceases attack
         * @see https://wow.gamepedia.com/PET_ATTACK_STOP
         */
        PET_ATTACK_STOP: null;

        /**
         * unknown
         */
        PET_BAR_HIDE: Unknown[];

        /**
         * Fired when pet spells are dropped into the PetActionBar
         * @see https://wow.gamepedia.com/PET_BAR_HIDEGRID
         */
        PET_BAR_HIDEGRID: null;

        /**
         * Fired when pet spells are dragged from the pet spellbook or the PetActionBar
         * - **arg1**: MouseButton used (e.g. "LeftButton","RightButton")
         * @see https://wow.gamepedia.com/PET_BAR_SHOWGRID
         */
        PET_BAR_SHOWGRID: [MouseButton];

        /**
         * Fired when the pet bar is updates
         * @see https://wow.gamepedia.com/PET_BAR_UPDATE
         */
        PET_BAR_UPDATE: null;

        /**
         * Fired when a pet spell cooldown starts. It is not called when cooldown ends
         * @see https://wow.gamepedia.com/PET_BAR_UPDATE_COOLDOWN
         */
        PET_BAR_UPDATE_COOLDOWN: null;

        /**
         * unknown
         */
        PET_BAR_UPDATE_USABLE: null;

        /**
         * unknown
         */
        PET_BATTLE_ABILITY_CHANGED: Unknown[];

        /**
         * unknown
         */
        PET_BATTLE_ACTION_SELECTED: Unknown[];

        /**
         * unknown
         */
        PET_BATTLE_AURA_APPLIED: Unknown[];

        /**
         * unknown
         */
        PET_BATTLE_AURA_CANCELED: Unknown[];

        /**
         * unknown
         */
        PET_BATTLE_AURA_CHANGED: Unknown[];

        /**
         * Fired when a pet battle ends, if the player successfully captured a battle pet
         * - **arg1**: fromPlayer
         * - **arg2**: activePetSlot
         * @description This event does not fire when a trap successfully snares a pet during a battle. This event is meant to signify when a
         * player snares a pet, wins the battle, and is able to add the pet to their Pet Journal
         * @see https://wow.gamepedia.com/PET_BATTLE_CAPTURED
         */
        PET_BATTLE_CAPTURED: [number, number];

        /**
         * Fired twice when the client exists a Pet Battle
         * @description This event fires twice at the very end of a pet battle, instructing the client to transition back to normal character controls.
         * The [petbattle] macro conditional evaluates to true during the first firing, and false during the second.
         * @since 5.0.4
         */
        PET_BATTLE_CLOSE: null;

        /**
         * Fired at the end of the final round of a pet battle
         * - **arg1**: Team index of the team that won the pet battle; 1 for the player's team, 2 for the opponent
         * @description This event is followed by HP recovery/XP gain notifications, and eventually PET_BATTLE_OVER and PET_BATTLE_CLOSE
         * @since 5.0.4
         * @see https://wow.gamepedia.com/PET_BATTLE_FINAL_ROUND
         */
        PET_BATTLE_FINAL_ROUND: [1 | 2];

        /**
         * unknown
         */
        PET_BATTLE_HEALTH_CHANGED: Unknown[];

        /**
         * Fired when a battle pet levels
         * - **arg1**: Active player the battle pet belongs to
         * - **arg2**: Active slot the battle pet is in
         * - **arg3**: New level for the battle pet
         * @see https://wow.gamepedia.com/PET_BATTLE_LEVEL_CHANGED
         */
        PET_BATTLE_LEVEL_CHANGED: [string, number, number];

        /**
         * unknown
         */
        PET_BATTLE_LOOT_RECEIVED: Unknown[];

        /**
         * unknown
         */
        PET_BATTLE_MAX_HEALTH_CHANGED: Unknown[];

        /**
         * Event fired at the end of camera transitioning for the pet battle
         * @description The transition is started with PET_BATTLE_OPENING_START. After this event the player is able to pet fight
         * @see https://wow.gamepedia.com/PET_BATTLE_OPENING_DONE
         */
        PET_BATTLE_OPENING_DONE: null;

        /**
         * Begins the transition between the current UI to the Pet Battle one
         * @description The payer is able to battle after PET_BATTLE_OPENING_DONE
         * @see https://wow.gamepedia.com/PET_BATTLE_OPENING_START
         */
        PET_BATTLE_OPENING_START: null;

        /**
         * Fired when the pet battle is over, and all combat actions have been resolved
         * @description This event follows the post-battle healing and XP gain events after PET_BATTLE_FINAL_ROUND, and precedes PET_BATTLE_CLOSE
         * @since 5.0.4
         * @see https://wow.gamepedia.com/PET_BATTLE_OVER
         */
        PET_BATTLE_OVER: null;

        /**
         * Fired when a team's active battle pet changes
         * - **arg1**: index of the team the active pet of which has changed
         * @description C_PetBattles.GetActivePet returns the index of the new front-line pet when this event fires
         * @since 5.0.4
         * @see https://wow.gamepedia.com/PET_BATTLE_PET_CHANGED
         */
        PET_BATTLE_PET_CHANGED: [number];

        /**
         * unknown
         */
        PET_BATTLE_PET_ROUND_PLAYBACK_COMPLETE: Unknown[];

        /**
         * unknown
         */
        PET_BATTLE_PET_ROUND_RESULTS: Unknown[];

        /**
         * unknown
         */
        PET_BATTLE_PET_TYPE_CHANGED: Unknown[];

        /**
         * unknown
         */
        PET_BATTLE_PVP_DUEL_REQUESTED: Unknown[];

        /**
         * unknown
         */
        PET_BATTLE_PVP_DUEL_REQUEST_CANCEL: Unknown[];

        /**
         * unknown
         */
        PET_BATTLE_QUEUE_PROPOSAL_ACCEPTED: Unknown[];

        /**
         * unknown
         */
        PET_BATTLE_QUEUE_PROPOSAL_DECLINED: Unknown[];

        /**
         * unknown
         */
        PET_BATTLE_QUEUE_PROPOSE_MATCH: Unknown[];

        /**
         * unknown
         */
        PET_BATTLE_QUEUE_STATUS: Unknown[];

        /**
         * unknown
         */
        PET_BATTLE_TURN_STARTED: Unknown[];

        /**
         * Fired when a battle pet gains experience during a pet battle
         * - **arg1**: team to which the pet belongs, 1 for the player's team, 2 for the opponent
         * - **arg2**: pet index within the team
         * - **arg3**: amount of XP gained
         * @description The PetJournal and PetBattles APIs still return the old level/experience information for the pet when this event fires
         * @since 5.0.4
         * @see https://wow.gamepedia.com/PET_BATTLE_XP_CHANGED
         */
        PET_BATTLE_XP_CHANGED: [number, number, number];

        /**
         * unknown
         */
        PET_DISMISS_START: Unknown[];

        /**
         * unknown
         */
        PET_FORCE_NAME_DECLENSION: Unknown[];

        /**
         * unknown
         */
        PET_JOURNAL_AUTO_SLOTTED_PET: Unknown[];

        /**
         * unknown
         */
        PET_JOURNAL_CAGE_FAILED: Unknown[];

        /**
         * Fired when the pet journal is updated
         * @description Fired whenever the information returned by C_PetJournal.GetPetInfoByIndex might have been updated, for instance by the
         * user changing the pet journal filters. Also fired when the player learns, cages or releases a battle pet, even if that pet is currently
         * filtered out of the displayed pet list.
         * @see https://wow.gamepedia.com/PET_JOURNAL_LIST_UPDATE
         */
        PET_JOURNAL_LIST_UPDATE: null;

        /**
         * unknown
         */
        PET_JOURNAL_NEW_BATTLE_SLOT: Unknown[];

        /**
         * unknown
         */
        PET_JOURNAL_PETS_HEALED: Unknown[];

        /**
         * Fired when a pet in the journal is caged
         * - **arg1**: GUID of the pet removed from the journal
         * @description Does not fire when a pet is released
         * @see https://wow.gamepedia.com/PET_JOURNAL_PET_DELETED
         */
        PET_JOURNAL_PET_DELETED: [Guid];

        /**
         * unknown
         */
        PET_JOURNAL_PET_RESTORED: Unknown[];

        /**
         * unknown
         */
        PET_JOURNAL_PET_REVOKED: Unknown[];

        /**
         * unknown
         */
        PET_JOURNAL_TRAP_LEVEL_SET: Unknown[];

        /**
         * unknown
         */
        PET_RENAMEABLE: Unknown[];

        /**
         * unknown
         */
        PET_SPECIALIZATION_CHANGED: Unknown[];

        /**
         * Fires when the pet's spell power bonus changes. Use GetPetSpellBonusDamage() to retrieve the new value
         * @see https://wow.gamepedia.com/PET_SPELL_POWER_UPDATE
         */
        PET_SPELL_POWER_UPDATE: null;

        /**
         * unknown
         */
        PET_STABLE_CLOSED: Unknown[];

        /**
         * unknown
         */
        PET_STABLE_SHOW: Unknown[];

        /**
         * unknown
         */
        PET_STABLE_UPDATE: Unknown[];

        /**
         * unknown
         */
        PET_STABLE_UPDATE_PAPERDOLL: Unknown[];

        /**
         * unknown
         */
        PET_UI_CLOSE: Unknown[];

        /**
         * unknown
         */
        PET_UI_UPDATE: Unknown[];

        /**
         * This event only fires when bank bags slots are purchased. It no longer fires when bags in the slots are changed. Instead, when the
         * bags are changed, PLAYERBANKSLOTS_CHANGED will fire, and arg1 will be NUM_BANKGENERIC_SLOTS + BagIndex
         * @see https://wow.gamepedia.com/PLAYERBANKBAGSLOTS_CHANGED
         */
        PLAYERBANKBAGSLOTS_CHANGED: null;

        /**
         * Fired when the One of the slots in the player's 24 bank slots has changed, or when any of the equipped bank bags have changed. Does not
         * fire when an item is added to or removed from a bank bag
         * - **arg1**: When (arg1 <= NUM_BANKGENERIC_SLOTS), arg1 is the index of the generic bank slot that changed. When (arg1 > NUM_BANKGENERIC_SLOTS)
         * , (arg1 - NUM_BANKGENERIC_SLOTS) is the index of the equipped bank bag that changed
         * @see https://wow.gamepedia.com/PLAYERBANKSLOTS_CHANGED
         */
        PLAYERBANKSLOTS_CHANGED: [number];

        /**
         * unknown
         */
        PLAYERREAGENTBANKSLOTS_CHANGED: Unknown[];

        /**
         * Fired when the player
         * - Releases from death to a graveyard
         * - Accepts a resurrect before releasing their spirit
         * @description Does not fire when the player is alive after being a ghost. PLAYER_UNGHOST is triggered in that case
         * @see https://wow.gamepedia.com/PLAYER_ALIVE
         */
        PLAYER_ALIVE: null;

        /**
         * unknown
         */
        PLAYER_AVG_ITEM_LEVEL_UPDATE: Unknown[];

        /**
         * Fired when the player is camping
         * @see https://wow.gamepedia.com/PLAYER_CAMPING
         */
        PLAYER_CAMPING: null;

        /**
         * unknown
         */
        PLAYER_CHARACTER_UPGRADE_TALENT_COUNT_CHANGED: Unknown[];

        /**
         * Fires after the PLAYER_CONTROL_LOST event, when control has been restored to the player
         * @see https://wow.gamepedia.com/PLAYER_CONTROL_GAINED
         */
        PLAYER_CONTROL_GAINED: null;

        /**
         * Fires whenever the player is unable to control the character. Examples are when afflicted by fear, mind controlled, or when using a taxi
         * @see https://wow.gamepedia.com/PLAYER_CONTROL_LOST
         */
        PLAYER_CONTROL_LOST: null;

        /**
         * Known to fire when Spell Healing (e.g. Earthliving Weapon effect) changes (4.3.4)
         * @see https://wow.gamepedia.com/PLAYER_DAMAGE_DONE_MODS
         */
        PLAYER_DAMAGE_DONE_MODS: null;

        /**
         * Fired when the player has died
         * @see https://wow.gamepedia.com/PLAYER_DEAD
         */
        PLAYER_DEAD: null;

        /**
         * unknown
         */
        PLAYER_DIFFICULTY_CHANGED: Unknown[];

        /**
         * unknown
         */
        PLAYER_ENTERING_BATTLEGROUND: Unknown[];

        /**
         * Fired when the player enters the world, enters/leaves an instance, or respawns at a graveyard. Also fires any other time the player sees a loading
         * screen.  To check if the player is entering an instance, check GetPlayerMapPosition to see if both X and Y are zero.  Correction on the above
         * comment: When PLAYER_ENTERING_WORLD fires, you'll notice that WORLD_MAP_UPDATE fires just before it. My instincts tell that leaving an instance puts
         * the player in void space momentarily. So for the case that you are entering AND leaving an instance, GetPlayerMapPosition always returns the
         * coordinates [0,0] and hence there is no way to determine using the event PLAYER_ENTERING_WORLD if the player is entering an instance or not. When
         * leaving an instance the following events fire (ignoring party/raid events).
         *
         * - WORLD_MAP_UPDATE
         * - PLAYER_ENTERING_WORLD
         * - WORLD_MAP_UPDATE <--- Player coordinates are non-zero here
         *
         * Instances do have coordinates for units once the second WORLD_MAP_UPDATE event has fired. For the case of entering a battleground such as * WSG,
         * WORLD_MAP_UPDATE won't fire until you leave Silverwing Hold or Warsong Lumber Mill and you are outside.
         * @see https://wow.gamepedia.com/PLAYER_ENTERING_WORLD
         */
        PLAYER_ENTERING_WORLD: null;

        /**
         * Fired when a player engages auto-attack. Note that firing a gun or a spell, or getting aggro, does NOT trigger this event
         * @see https://wow.gamepedia.com/PLAYER_ENTER_COMBAT
         */
        PLAYER_ENTER_COMBAT: null;

        /**
         * unknown
         */
        PLAYER_FARSIGHT_FOCUS_CHANGED: Unknown[];

        /**
         * This event fires when a Unit's flags change (eg: due to /afk, /dnd, etc.)
         * - **arg1**: The UnitId affected, eg: "player"
         * @see https://wow.gamepedia.com/PLAYER_FLAGS_CHANGED
         */
        PLAYER_FLAGS_CHANGED: [UnitId];

        /**
         * This event is fired whenever the player's focus target (/focus) is changed, including when the focus target is lost or cleared
         * @see https://wow.gamepedia.com/PLAYER_FOCUS_CHANGED
         */
        PLAYER_FOCUS_CHANGED: null;

        /**
         * unknown
         */
        PLAYER_GAINS_VEHICLE_DATA: Unknown[];

        /**
         * This appears to be fired when a player is gkicked, gquits, etc
         * @see https://wow.gamepedia.com/PLAYER_GUILD_UPDATE
         */
        PLAYER_GUILD_UPDATE: null;

        /**
         * unknown
         */
        PLAYER_LEARN_PVP_TALENT_FAILED: Unknown[];

        /**
         * unknown
         */
        PLAYER_LEARN_TALENT_FAILED: Unknown[];

        /**
         * Fired when the player leaves combat through death, defeat of opponents, or an ability. Does not fire if a player flees from combat on foot
         * @see https://wow.gamepedia.com/PLAYER_LEAVE_COMBAT
         */
        PLAYER_LEAVE_COMBAT: null;

        /**
         * Fired when a player logs out and possibly at other situations as well
         * @see https://wow.gamepedia.com/PLAYER_LEAVING_WORLD
         */
        PLAYER_LEAVING_WORLD: null;

        /**
         * Fired when a player levels up.
         * - **arg1**: New player level. Note that UnitLevel("player") will most likely return an incorrect value when called in this event handler
         * or shortly after, so use this value
         * - **arg2**: Hit points gained from leveling
         * - **arg3**: Mana points gained from leveling
         * - **arg4**: Talent points gained from leveling
         * - **arg5-9**: Attribute score increases from leveling. Strength (5) / Agility (6) / Stamina (7) / Intellect (8) / Spirit (9)
         * @see https://wow.gamepedia.com/PLAYER_LEVEL_UP
         */
        PLAYER_LEVEL_UP: [number, number, number, number, number, number, number, number, number];

        /**
         * Triggered immediately before PLAYER_ENTERING_WORLD on login and UI Reload, but NOT when entering/leaving instances
         * @see https://wow.gamepedia.com/PLAYER_LOGIN
         */
        PLAYER_LOGIN: null;

        /**
         * Sent when the player logs out or the UI is reloaded, just before SavedVariables are saved. The event fires after PLAYER_LEAVING_WORLD
         * @see https://wow.gamepedia.com/PLAYER_LOGOUT
         */
        PLAYER_LOGOUT: null;

        /**
         * unknown
         */
        PLAYER_LOOT_SPEC_UPDATED: Unknown[];

        /**
         * unknown
         */
        PLAYER_LOSES_VEHICLE_DATA: Unknown[];

        /**
         * Fired whenever the player gains or loses money
         * @see https://wow.gamepedia.com/PLAYER_MONEY
         */
        PLAYER_MONEY: null;

        /**
         * unknown
         */
        PLAYER_MOUNT_DISPLAY_CHANGED: Unknown[];

        /**
         * Fired when you get credit for killing an enemy player. According to wowprogramming.com, only honorable kills will trigger this event
         * @see https://wow.gamepedia.com/PLAYER_PVP_KILLS_CHANGED
         */
        PLAYER_PVP_KILLS_CHANGED: null;

        /**
         * unknown
         */
        PLAYER_PVP_RANK_CHANGED: Unknown[];

        /**
         * unknown
         */
        PLAYER_PVP_TALENT_UPDATE: Unknown[];

        /**
         * Fired when the player tries to quit, as opposed to logout, while outside an inn. This event does not indicate that the "player has quit",
         * but instead that the "player has the quitting option"
         * @see https://wow.gamepedia.com/PLAYER_QUITING
         */
        PLAYER_QUITING: null;

        /**
         * Fired whenever you enter combat, as normal regen rates are disabled during combat. This means that either you are in the hate list of a NPC
         * or that you've been taking part in a pvp action (either as attacker or victim).
         * @see https://wow.gamepedia.com/PLAYER_REGEN_DISABLED
         */
        PLAYER_REGEN_DISABLED: null;

        /**
         * Fired after ending combat, as regen rates return to normal. Useful for determining when a player has left combat. This occurs when you are
         * not on the hate list of any NPC, or a few seconds after the latest pvp attack that you were involved with
         * @see https://wow.gamepedia.com/PLAYER_REGEN_ENABLED
         */
        PLAYER_REGEN_ENABLED: null;

        /**
         * unknown
         */
        PLAYER_REPORT_SUBMITTED: Unknown[];

        /**
         * unknown
         */
        PLAYER_ROLES_ASSIGNED: Unknown[];

        /**
         * Fired when the player's insignia is removed in a Battleground
         * @see https://wow.gamepedia.com/PLAYER_SKINNED
         */
        PLAYER_SKINNED: null;

        /**
         * Fired after unlearning a profession, learning a talent
         * @see https://wow.gamepedia.com/PLAYER_SPECIALIZATION_CHANGED
         */
        PLAYER_SPECIALIZATION_CHANGED: null;

        /**
         * unknown
         */
        PLAYER_STARTED_MOVING: Unknown[];

        /**
         * unknown
         */
        PLAYER_STOPPED_MOVING: Unknown[];

        /**
         * Fired when the player changes between dual talent specs, and possibly when learning or unlearning talents(?). The event is also fired when
         * a player levels up, before PLAYER_LEVEL_UP is fired
         * @see https://wow.gamepedia.com/PLAYER_TALENT_UPDATE
         */
        PLAYER_TALENT_UPDATE: null;

        /**
         * This event fires whenever a totem is dropped (cast) or destroyed (either recalled or killed)
         * - **arg1**: The number of the totem slot (1-4) affected by the update. See for example GetTotemInfo() for the uses of the totem slot number
         * @see https://wow.gamepedia.com/PLAYER_TOTEM_UPDATE
         */
        PLAYER_TOTEM_UPDATE: [number];

        /**
         * unknown
         */
        PLAYER_TRADE_CURRENCY: Unknown[];

        /**
         * Fired when the player trades money
         */
        PLAYER_TRADE_MONEY: null;

        /**
         * unknown
         */
        PLAYER_TRIAL_XP_UPDATE: Unknown[];

        /**
         * Fired when the player is alive after being a ghost. Called after one of
         * - Performing a successful corpse run and the player accepts the 'Resurrect Now' box
         * - Accepting a resurrect from another player after releasing from a death
         * - Zoning into an instance where the player is dead
         * - When the player accept a resurrect from a Spirit Healer
         * @description The player is alive when this event happens. Does not fire when the player is resurrected before releasing. PLAYER_ALIVE
         * is triggered in that case
         * @see https://wow.gamepedia.com/PLAYER_UNGHOST
         */
        PLAYER_UNGHOST: null;

        /**
         * Fired when the player starts or stops resting, i.e. when entering/leaving inns/major towns
         * @see https://wow.gamepedia.com/PLAYER_UPDATE_RESTING
         */
        PLAYER_UPDATE_RESTING: null;

        /**
         * Fired when the player's XP is updated (due quest completion or killing)
         * - **arg1**: The UnitId affected, eg: "player"
         * @see https://wow.gamepedia.com/PLAYER_XP_UPDATE
         */
        PLAYER_XP_UPDATE: [UnitId];

        /**
         * Fired when the playtime state changes
         * @see https://wow.gamepedia.com/PLAYTIME_CHANGED
         */
        PLAYTIME_CHANGED: null;

        /**
         * movie plays
         * - **arg1**: File name (without extension) & path, eg: "INTERFACE\CINEMATICS\FOTLK_1024"
         * - **arg2**: Sound volume (0-150)
         * @see https://wow.gamepedia.com/PLAY_MOVIE
         */
        PLAY_MOVIE: [string, number];

        /**
         * unknown
         */
        PRESTIGE_AND_HONOR_INVOLUNTARILY_CHANGED: Unknown[];

        /**
         * unknown
         */
        PREVIEW_TALENT_POINTS_CHANGED: Unknown[];

        /**
         * unknown
         */
        PREVIEW_TALENT_PRIMARY_TREE_CHANGED: Unknown[];

        /**
         * unknown
         */
        PRODUCT_ASSIGN_TO_TARGET_FAILED: Unknown[];

        /**
         * unknown
         */
        PRODUCT_CHOICE_UPDATE: Unknown[];

        /**
         * unknown
         */
        PRODUCT_DISTRIBUTIONS_UPDATED: Unknown[];

        /**
         * unknown
         */
        PROVING_GROUNDS_SCORE_UPDATE: Unknown[];

        /**
         * unknown
         */
        PVPQUEUE_ANYWHERE_SHOW: Unknown[];

        /**
         * unknown
         */
        PVPQUEUE_ANYWHERE_UPDATE_AVAILABLE: Unknown[];

        /**
         * unknown
         */
        PVP_BRAWL_INFO_UPDATED: Unknown[];

        /**
         * unknown
         */
        PVP_POWER_UPDATE: Unknown[];

        /**
         * unknown
         */
        PVP_RATED_STATS_UPDATE: Unknown[];

        /**
         * unknown
         */
        PVP_REWARDS_UPDATE: Unknown[];

        /**
         * unknown
         */
        PVP_ROLE_UPDATE: Unknown[];

        /**
         * unknown
         */
        PVP_TIMER_UPDATE: Unknown[];

        /**
         * unknown
         */
        PVP_TYPES_ENABLED: Unknown[];

        /**
         * unknown
         */
        PVP_WORLDSTATE_UPDATE: Unknown[];

        /**
         * unknown
         */
        QUESTLINE_UPDATE: Unknown[];

        /**
         * This event fires whenever the player accepts a quest
         * - **arg1**: Quest log index. You may pass this to GetQuestLogTitle() for information about the accepted quest
         * - **arg2**: QuestID of the quest accepted
         * @see https://wow.gamepedia.com/QUEST_ACCEPTED
         */
        QUEST_ACCEPTED: [number, number];

        /**
         * This event fires when an escort quest is started by another player. A dialog appears asking if the player also wants to start the quest
         * - **arg1**: Name of player who is starting escort quest
         * - **arg2**: Title of escort quest. Eg. "Protecting the Shipment"
         * @see https://wow.gamepedia.com/QUEST_ACCEPT_CONFIRM
         */
        QUEST_ACCEPT_CONFIRM: [string, string];

        /**
         * Fires when a quest that can be auto-completed is completed
         * - **arg1**: quest ID of the quest the objectives of which the player has just completed
         * @description Quests eligible for auto-completion do not need to be handed in to a specific NPC; instead, the player can complete the quest,
         * receive the rewards, and remove it from their quest log anywhere in the world. Use ShowQuestComplete in conjunction with GetQuestLogIndexByID
         * to display the quest completion dialog, allowing use of GetQuestReward after QUEST_COMPLETE has fired
         * @since 4.0.1
         * @see https://wow.gamepedia.com/QUEST_AUTOCOMPLETE
         */
        QUEST_AUTOCOMPLETE: [number];

        /**
         * unknown
         */
        QUEST_BOSS_EMOTE: Unknown[];

        /**
         * unknown
         */
        QUEST_CHOICE_CLOSE: Unknown[];

        /**
         * unknown
         */
        QUEST_CHOICE_UPDATE: Unknown[];

        /**
         * Fired after the player hits the "Continue" button in the quest-information page, before the "Complete Quest" button. In other words it
         * fires when you are given the option to complete a quest, but just before you actually complete the quest (as stated above).
         * @see https://wow.gamepedia.com/QUEST_COMPLETE
         */
        QUEST_COMPLETE: null;

        /**
         * Fired when the player is given a more detailed view of his quest
         * - **arg1**: questStartItemID. If not nil or zero, the ItemID of the item which begins the quest displayed in the quest detail view
         * @see https://wow.gamepedia.com/QUEST_DETAIL
         */
        QUEST_DETAIL: [number];

        /**
         * Fired whenever the quest frame changes (Detail to Progress to Reward, etc.) or is closed
         * @see https://wow.gamepedia.com/QUEST_FINISHED
         */
        QUEST_FINISHED: null;

        /**
         * Fired when talking to an NPC that offers or accepts more than one quest, i.e. has more than one active or available quest
         * @see https://wow.gamepedia.com/QUEST_GREETING
         */
        QUEST_GREETING: null;

        /**
         * Fired when the quest items are updated
         * @see https://wow.gamepedia.com/QUEST_ITEM_UPDATE
         */
        QUEST_ITEM_UPDATE: null;

        /**
         * unknown
         */
        QUEST_LOG_CRITERIA_UPDATE: Unknown[];

        /**
         * This event is fired very often. This includes, but is not limited to: viewing a quest for the first time in a session in the Quest Log;
         * (once for each quest?) every time the player changes zones across an instance boundary; every time the player picks up a non-grey item;
         * every time after the player completes a quest goal, such as killing a mob for a quest. It also fires whenever the player (or addon using
         * the CollapseQuestHeader or ExpandQuestHeader() functions) collapses or expands any zone header in the quest log
         * @see https://wow.gamepedia.com/QUEST_LOG_UPDATE
         */
        QUEST_LOG_UPDATE: null;

        /**
         * Fired whenever Quest POIs change. For example after accepting an quest
         * @see https://wow.gamepedia.com/QUEST_POI_UPDATE
         */
        QUEST_POI_UPDATE: null;

        /**
         * Fired when a player is talking to an NPC about the status of a quest and has not yet clicked the complete button
         * @see https://wow.gamepedia.com/QUEST_PROGRESS
         */
        QUEST_PROGRESS: null;

        /**
         * Fired when a quest is removed from your quest log by abandoning it.
         * - **arg1**: QuestID of the quest accepted
         * @see https://wow.gamepedia.com/QUEST_REMOVED
         */
        QUEST_REMOVED: [number];

        /**
         * This event fires whenever the player turns in a quest, whether automatically with a Task-type quest (Bonus Objectives/World Quests), or by
         * pressing the Complete button in a quest dialog window
         * - **arg1**: QuestID of the quest accepted
         * - **arg2**: Number of Experience point awarded, if any. Zero if character is max level
         * - **arg3**: Amount of Money awarded, if any. Amount in coppers
         * @since 8.0.1
         * @see https://wow.gamepedia.com/QUEST_TURNED_IN
         */
        QUEST_TURNED_IN: [number, number, number];

        /**
         * unknown
         */
        QUEST_WATCH_LIST_CHANGED: Unknown[];

        /**
         * unknown
         */
        QUEST_WATCH_OBJECTIVES_CHANGED: Unknown[];

        /**
         * Fired just before a quest goal was completed. At this point the game client's quest data is not yet updated, but will be after a subsequent
         * QUEST_LOG_UPDATE event
         * - **arg1**: questIndex (not watch index)
         * @see https://wow.gamepedia.com/QUEST_WATCH_UPDATE
         */
        QUEST_WATCH_UPDATE: [number];

        /**
         * unknown
         */
        QUICK_TICKET_SYSTEM_STATUS: Unknown[];

        /**
         * unknown
         */
        QUICK_TICKET_THROTTLE_CHANGED: Unknown[];

        /**
         * unknown
         */
        RAID_BOSS_EMOTE: Unknown[];

        /**
         * unknown
         */
        RAID_BOSS_WHISPER: Unknown[];

        /**
         * Fired when the player enters an instance that saves raid members after a boss is killed
         * - **arg1**: instance name
         * - **arg2**: seconds until reset
         * @see https://wow.gamepedia.com/RAID_INSTANCE_WELCOME
         */
        RAID_INSTANCE_WELCOME: [string, number];

        /**
         * Fired whenever a raid is formed or disbanded, players are leaving or joining a raid (unsure if rejected join requests also fire the event),
         * or when looting rules are changed (regardless of being in raid or party!)
         * @see https://wow.gamepedia.com/RAID_ROSTER_UPDATE
         */
        RAID_ROSTER_UPDATE: null;

        /**
         * Fired when a raid target icon is changed or removed. Also fired when player join or leave a party or raid. arg1 is who gets updated
         * @since 1.11
         * @see https://wow.gamepedia.com/RAID_TARGET_UPDATE
         */
        RAID_TARGET_UPDATE: null;

        /**
         * unknown
         */
        RAISED_AS_GHOUL: Unknown[];

        /**
         * Fired when a Ready Check is performed by the raid (or party) leader
         * - **arg1**: name of character requesting ready check (ie., "Ansu")
         * - **arg2**: variable number (usually 30). Denotes time before automatic check completion
         * @see https://wow.gamepedia.com/READY_CHECK
         */
        READY_CHECK: [string, number];

        /**
         * Fired when a player confirms ready status
         * - **arg1**: UnitID (raid1, party1). Fires twice if the confirming player is in your raid sub-group
         * - **arg2**: status (1=ready, 0=not ready)
         * @see https://wow.gamepedia.com/READY_CHECK_CONFIRM
         */
        READY_CHECK_CONFIRM: [UnitId, 1 | 0];

        /**
         * Fired when the ready check completes
         * @see https://wow.gamepedia.com/READY_CHECK_FINISHED
         */
        READY_CHECK_FINISHED: null;

        /**
         * unknown
         */
        REAGENTBANK_PURCHASED: Unknown[];

        /**
         * unknown
         */
        REAGENTBANK_UPDATE: Unknown[];

        /**
         * unknown
         */
        RECEIVED_ACHIEVEMENT_LIST: Unknown[];

        /**
         * unknown
         */
        RECEIVED_ACHIEVEMENT_MEMBER_LIST: Unknown[];

        /**
         * unknown
         */
        RECRUIT_A_FRIEND_CAN_EMAIL: Unknown[];

        /**
         * unknown
         */
        RECRUIT_A_FRIEND_INVITATION_FAILED: Unknown[];

        /**
         * unknown
         */
        RECRUIT_A_FRIEND_INVITER_FRIEND_ADDED: Unknown[];

        /**
         * unknown
         */
        RECRUIT_A_FRIEND_SYSTEM_STATUS: Unknown[];

        /**
         * Fired when the player must confirm an enchantment replacement
         * - **arg1**: new enchantment
         * - **arg2**: current enchantment
         * @see https://wow.gamepedia.com/REPLACE_ENCHANT
         */
        REPLACE_ENCHANT: Unknown[];

        /**
         * @see https://wow.gamepedia.com/REPLICATE_ITEM_LIST_UPDATE
         */
        REPLICATE_ITEM_LIST_UPDATE: null;

        /**
         * unknown
         */
        REQUEST_CEMETERY_LIST_RESPONSE: Unknown[];

        /**
         * unknown
         */
        REQUIRED_GUILD_RENAME_RESULT: Unknown[];

        /**
         * Fired when an item is solved via Archaeology
         * - **arg1**: the name of the completed artifact
         * @see https://wow.gamepedia.com/RESEARCH_ARTIFACT_COMPLETE
         */
        RESEARCH_ARTIFACT_COMPLETE: [string];

        /**
         * unknown
         */
        RESEARCH_ARTIFACT_DIG_SITE_UPDATED: Unknown[];

        /**
         * unknown
         */
        RESEARCH_ARTIFACT_HISTORY_READY: Unknown[];

        /**
         * unknown
         */
        RESEARCH_ARTIFACT_UPDATE: Unknown[];

        /**
         * unknown
         */
        RESTRICTED_ACCOUNT_WARNING: Unknown[];

        /**
         * Fired when another player resurrects you
         * - **arg1**: player name
         * @see https://wow.gamepedia.com/RESURRECT_REQUEST
         */
        RESURRECT_REQUEST: [string];

        /**
         * triggered when the role chanes
         * - **arg1**: player name
         * - **arg2**: source of change
         * - **arg3**: previous role
         * - **arg4**: new role
         * @see https://wow.gamepedia.com/ROLE_CHANGED_INFORM
         */
        ROLE_CHANGED_INFORM: [string, string, string, string];

        /**
         * unknown
         */
        ROLE_POLL_BEGIN: Unknown[];

        /**
         * Fired when a rune's state switches from usable to un-usable or visa-versa
         * - **arg1**: the rune that it's referencing to
         * - **arg2**: is the rune usable (if usable, it's not cooling, if not usable it's cooling)
         * @since 3.0.1
         * @see https://wow.gamepedia.com/RUNE_POWER_UPDATE
         */
        RUNE_POWER_UPDATE: [string, boolean];

        /**
         * Fired when a rune's type is changed / updated
         * - **arg1**: the rune that it's referencing to
         * @since 3.0.1
         * @see https://wow.gamepedia.com/RUNE_TYPE_UPDATE
         */
        RUNE_TYPE_UPDATE: [string];

        /**
         * Fired immediately after ADDON_LOADED if either its Account or Character SavedVariables file failed to load due to an out-of-memory error.
         * See Saved Variables Loading for more details
         * - **arg1**: name of the AddOn whose SavedVariables failed to load
         * @see https://wow.gamepedia.com/SAVED_VARIABLES_TOO_LARGE
         */
        SAVED_VARIABLES_TOO_LARGE: [string];

        /**
         * unknown
         */
        SCENARIO_COMPLETED: Unknown[];

        /**
         * unknown
         */
        SCENARIO_CRITERIA_SHOW_STATE_UPDATE: Unknown[];

        /**
         * unknown
         */
        SCENARIO_CRITERIA_UPDATE: Unknown[];

        /**
         * unknown
         */
        SCENARIO_POI_UPDATE: Unknown[];

        /**
         * unknown
         */
        SCENARIO_SPELL_UPDATE: Unknown[];

        /**
         * unknown
         */
        SCENARIO_UPDATE: Unknown[];

        /**
         * Fired when a screenshot fails
         * @see https://wow.gamepedia.com/SCREENSHOT_FAILED
         */
        SCREENSHOT_FAILED: null;

        /**
         * unknown
         */
        SCREENSHOT_STARTED: Unknown[];

        /**
         * Fired when a screenshot is successfully taken
         * @see https://wow.gamepedia.com/SCREENSHOT_SUCCEEDED
         */
        SCREENSHOT_SUCCEEDED: null;

        /**
         * unknown
         */
        SCRIPT_ACHIEVEMENT_PLAYER_NAME: Unknown[];

        /**
         * unknown
         */
        SEARCH_DB_LOADED: Unknown[];

        /**
         * unknown
         */
        SECURE_TRANSFER_CANCEL: Unknown[];

        /**
         * unknown
         */
        SECURE_TRANSFER_CONFIRM_SEND_MAIL: Unknown[];

        /**
         * unknown
         */
        SECURE_TRANSFER_CONFIRM_TRADE_ACCEPT: Unknown[];

        /**
         * unknown
         */
        SELF_RES_SPELL_CHANGED: Unknown[];

        /**
         * unknown
         */
        SEND_MAIL_COD_CHANGED: Unknown[];

        /**
         * unknown
         */
        SEND_MAIL_MONEY_CHANGED: Unknown[];

        /**
         * unknown
         */
        SESSION_TIME_ALERT: Unknown[];

        /**
         * unknown
         */
        SHIPMENT_CRAFTER_CLOSED: Unknown[];

        /**
         * unknown
         */
        SHIPMENT_CRAFTER_INFO: Unknown[];

        /**
         * unknown
         */
        SHIPMENT_CRAFTER_OPENED: Unknown[];

        /**
         * unknown
         */
        SHIPMENT_CRAFTER_REAGENT_UPDATE: Unknown[];

        /**
         * unknown
         */
        SHIPMENT_UPDATE: Unknown[];

        /**
         * unknown
         */
        SHOW_FACTION_SELECT_UI: Unknown[];

        /**
         * Fired upon receiving fancy loot (LFR, bonus rolls, certain containers like pet battle supplies in 5.3).
         * - **arg1**: either "item" or "money"
         * - **arg2**: item link of the item received
         * - **arg3**: quantity of item/money (in copper) received
         * @see https://wow.gamepedia.com/SHOW_LOOT_TOAST
         */
        SHOW_LOOT_TOAST: [string, ItemLink, number, 0];

        /**
         * unknown
         */
        SHOW_LOOT_TOAST_LEGENDARY_LOOTED: Unknown[];

        /**
         * unknown
         */
        SHOW_LOOT_TOAST_UPGRADE: Unknown[];

        /**
         * unknown
         */
        SHOW_PVP_FACTION_LOOT_TOAST: Unknown[];

        /**
         * unknown
         */
        SHOW_RATED_PVP_REWARD_TOAST: Unknown[];

        /**
         * unknown
         */
        SIMPLE_BROWSER_WEB_ERROR: Unknown[];

        /**
         * unknown
         */
        SIMPLE_BROWSER_WEB_PROXY_FAILED: Unknown[];

        /**
         * unknown
         */
        SIMPLE_CHECKOUT_CLOSED: Unknown[];

        /**
         * Fired when the content of the player's skill list changes. It only fires for major changes to the list, such as learning or unlearning a
         * skill or raising one's level from Journeyman to Master. It doesn't fire for skill rank increases. Using 'RegisterUnitEvent' to register for
         * this event does not appear to work
         * @see https://wow.gamepedia.com/SKILL_LINES_CHANGED
         */
        SKILL_LINES_CHANGED: null;

        /**
         * unknown
         */
        SOCIAL_ITEM_RECEIVED: Unknown[];

        /**
         * unknown
         */
        SOCIAL_QUEUE_CONFIG_UPDATED: Unknown[];

        /**
         * unknown
         */
        SOCIAL_QUEUE_UPDATE: Unknown[];

        /**
         * unknown
         */
        SOCKET_INFO_ACCEPT: Unknown[];

        /**
         * unknown
         */
        SOCKET_INFO_CLOSE: Unknown[];

        /**
         * unknown
         */
        SOCKET_INFO_FAILURE: Unknown[];

        /**
         * unknown
         */
        SOCKET_INFO_SUCCESS: Unknown[];

        /**
         * unknown
         */
        SOCKET_INFO_UPDATE: Unknown[];

        /**
         * unknown
         */
        SOR_BY_TEXT_UPDATED: Unknown[];

        /**
         * unknown
         */
        SOR_COUNTS_UPDATED: Unknown[];

        /**
         * unknown
         */
        SOR_START_EXPERIENCE_INCOMPLETE: Unknown[];

        /**
         * unknown
         */
        SOUNDKIT_FINISHED: Unknown[];

        /**
         * unknown
         */
        SOUND_DEVICE_UPDATE: Unknown[];

        /**
         * unknown
         */
        SPEC_INVOLUNTARILY_CHANGED: Unknown[];

        /**
         * unknown
         */
        SPEED_UPDATE: Unknown[];

        /**
         * No arguments. Fires when spells in the spellbook change in any way. Can be trivial (eg: icon changes only)
         * @see https://wow.gamepedia.com/SPELLS_CHANGED
         */
        SPELLS_CHANGED: null;

        /**
         * unknown
         */
        SPELL_ACTIVATION_OVERLAY_GLOW_HIDE: Unknown[];

        /**
         * unknown
         */
        SPELL_ACTIVATION_OVERLAY_GLOW_SHOW: Unknown[];

        /**
         * Added in 4.0 for the Spell Alert overlay feature
         * - **arg1**: spellId
         * @see https://wow.gamepedia.com/SPELL_ACTIVATION_OVERLAY_HIDE
         */
        SPELL_ACTIVATION_OVERLAY_HIDE: [number];

        /**
         * Added in 4.0 for the Spell Alert overlay feature
         * - **arg1**: spellID
         * - **arg2**: texture
         * - **arg3**: position, Possible values include simple points such as "CENTER" or "LEFT", or complex positions such as "RIGHT (FLIPPED)"
         * or "TOP + BOTTOM (FLIPPED)", which are defined in a local table in SpellActivationOverlay.lua
         * - **arg4**: scale
         * - **arg5**: red
         * - **arg6**: green
         * - **arg7**: blue
         * @see https://wow.gamepedia.com/SPELL_ACTIVATION_OVERLAY_SHOW
         */
        SPELL_ACTIVATION_OVERLAY_SHOW: [number, TexturePath, string, number, number, number, number];

        /**
         * Fires when a spell confirmation prompt might be presented to the player. After this event has fired, the client can respond with the functions
         * AcceptSpellConfirmationPrompt and DeclineSpellConfirmationPrompt. Notably, the event does not guarantee that the player can actually cast the
         * spell
         * - **arg1**: Spell ID for the Confirmation Prompt Spell. These are very specific spells that only appear during this event
         * - **arg2**: The possible values for this are not entirely known, however, 1 does seem to be the confirmType when the prompt triggers a bonus roll
         * - **arg3**: So far, I've only seen this value be a blank string of "". Presumably, it will contain text if text is needed, but with bonus rolls,
         * it is not needed
         * - **arg4**: This number is in seconds. Typically, it is 180 seconds
         * - **arg5**: The ID of the currency required if the prompt requires a currency (it does for bonus rolls)
         * @see https://wow.gamepedia.com/SPELL_CONFIRMATION_PROMPT
         */
        SPELL_CONFIRMATION_PROMPT: [number, number, string, number, number];

        /**
         * Fires when a spell confirmation prompt was not accepted via AcceptSpellConfirmationPrompt or declined via DeclineSpellConfirmationPrompt within
         * the allotted time (usually 3 minutes).
         * @see https://wow.gamepedia.com/SPELL_CONFIRMATION_TIMEOUT
         */
        SPELL_CONFIRMATION_TIMEOUT: null;

        /**
         * unknown
         */
        SPELL_FLYOUT_UPDATE: Unknown[];

        /**
         * Fired when the player's Spell Power changes
         * @description Does not fire when Spell Healing changes. For that use PLAYER_DAMAGE_DONE_MODS
         * @since 5.0.4
         * @see https://wow.gamepedia.com/SPELL_POWER_CHANGED
         */
        SPELL_POWER_CHANGED: null;

        /**
         * unknown
         */
        SPELL_PUSHED_TO_ACTIONBAR: Unknown[];

        /**
         * unknown
         */
        SPELL_UPDATE_CHARGES: Unknown[];

        /**
         * This event is fired every three seconds for no apparent reason (correct as of patch 3.3.3).
         * @see https://wow.gamepedia.com/SPELL_UPDATE_COOLDOWN
         */
        SPELL_UPDATE_COOLDOWN: null;

        /**
         * unknown
         */
        SPELL_UPDATE_ICON: Unknown[];

        /**
         * This event is fired when a spell becomes useable or unusable. However the definition of useable and unusable is somewhat confusing. Firstly, range is
         * not taken into account. Secondly if a spell requires a valid target and doesn't have one it gets marked as useable. If it requires mana or rage and
         * there isn't enough then it gets marked as unusable. This results in the following behaviour:
         * - Start) Feral druid in bear form out of combat, no target selected
         * - 1) Target enemy. Event is fired as some spells that require rage become marked as unusable. On the action bar the spell is marked in red as
         *   unusable.
         * - 2) Use Enrage to gain rage. Event is fired as we now have enough rage. On the action bar the spell is marked unusable as out of range.
         * - 3) Move into range. Event is not fired. On the action bar the spell is marked usable.
         * - 4) Rage runs out. Event is fired as we no longer have enough rage.
         * - 5) Remove target. Event is fired and spell is marked as useable on action bar.
         * @description It appears that the definition of useable is a little inaccurate and relates more to how it is displayed on the action bar than
         * whether you can use the spell. Also after being attacked the event started firing every two seconds and this continued until well after the
         * attacker was dead. Targetting a fresh enemy seemed to stop it.
         * @see https://wow.gamepedia.com/SPELL_UPDATE_USABLE
         */
        SPELL_UPDATE_USABLE: null;

        /**
         * unknown
         */
        START_AUTOREPEAT_SPELL: Unknown[];

        /**
         * Fired when a group loot item is being rolled on
         * - **arg1**: The rollID of the item being rolled on.
         * - **arg2**: The roll time
         * @see https://wow.gamepedia.com/START_LOOT_ROLL
         */
        START_LOOT_ROLL: [number, number];

        /**
         * unknown
         */
        START_TIMER: Unknown[];

        /**
         * unknown
         */
        STOP_AUTOREPEAT_SPELL: Unknown[];

        /**
         * unknown
         */
        STORE_BOOST_AUTO_CONSUMED: Unknown[];

        /**
         * unknown
         */
        STORE_CHARACTER_LIST_RECEIVED: Unknown[];

        /**
         * unknown
         */
        STORE_CLOSE_SIMPLE_CHECKOUT: Unknown[];

        /**
         * unknown
         */
        STORE_CONFIRM_PURCHASE: Unknown[];

        /**
         * unknown
         */
        STORE_OPEN_SIMPLE_CHECKOUT: Unknown[];

        /**
         * unknown
         */
        STORE_ORDER_INITIATION_FAILED: Unknown[];

        /**
         * unknown
         */
        STORE_PRODUCTS_UPDATED: Unknown[];

        /**
         * unknown
         */
        STORE_PRODUCT_DELIVERED: Unknown[];

        /**
         * unknown
         */
        STORE_PURCHASE_ERROR: Unknown[];

        /**
         * unknown
         */
        STORE_PURCHASE_LIST_UPDATED: Unknown[];

        /**
         * unknown
         */
        STORE_REFRESH: Unknown[];

        /**
         * unknown
         */
        STORE_STATUS_CHANGED: Unknown[];

        /**
         * unknown
         */
        STORE_VAS_PURCHASE_COMPLETE: Unknown[];

        /**
         * unknown
         */
        STORE_VAS_PURCHASE_ERROR: Unknown[];

        /**
         * Fires when the streaming client state is updated
         * - **arg1**: Streaming state, from 0 to 3
         *  - 0 - Nothing is currently being downloaded
         *  - 1 - Game data is currently being downloaded (green)
         *  - 2 - Important game data is currently being downloaded (yellow
         *  - 3 - Core game data is currently being downloaded (red)
         * @since 4.0.1
         * @see https://wow.gamepedia.com/STREAMING_ICON
         */
        STREAMING_ICON: [StreamingState];

        /**
         * unknown
         */
        STURDINESS_UPDATE: Unknown[];

        /**
         * unknown
         */
        SUBSCRIPTION_CHANGED_KICK_IMMINENT: Unknown[];

        /**
         * unknown
         */
        SUPER_TRACKED_QUEST_CHANGED: Unknown[];

        /**
         * unknown
         */
        SYNCHRONIZE_SETTINGS: Unknown[];

        /**
         * Fired when a system message occurs. Gets displayed in the UI error frame (the default red text in the top half of the screen) in the default UI
         * - **arg1**: message
         * - **arg2**: red
         * - **arg3**: green
         * - **arg4**: blue
         * @see https://wow.gamepedia.com/SYSMSG
         */
        SYSMSG: null;

        /**
         * Fired when it is possible to save a tabard
         * @see https://wow.gamepedia.com/TABARD_CANSAVE_CHANGED
         */
        TABARD_CANSAVE_CHANGED: null;

        /**
         * unknown
         */
        TABARD_SAVE_PENDING: Unknown[];

        /**
         * unknown
         */
        TALENTS_INVOLUNTARILY_RESET: Unknown[];

        /**
         * unknown
         */
        TALKINGHEAD_CLOSE: Unknown[];

        /**
         * unknown
         */
        TALKINGHEAD_REQUESTED: Unknown[];

        /**
         * unknown
         */
        TASK_PROGRESS_UPDATE: Unknown[];

        /**
         * Fired when the taxi frame is closed
         * @see https://wow.gamepedia.com/TAXIMAP_CLOSED
         */
        TAXIMAP_CLOSED: null;

        /**
         * Fired when the taxi viewer is opened
         * @see https://wow.gamepedia.com/TAXIMAP_OPENED
         */
        TAXIMAP_OPENED: null;

        /**
         * Fired when the client received a time played message
         * - **arg1**: total time
         * - **arg2**: current time at this level
         * @see https://wow.gamepedia.com/TIME_PLAYED_MSG
         */
        TIME_PLAYED_MSG: [number, number];

        /**
         * unknown
         */
        TOGGLE_CONSOLE: Unknown[];

        /**
         * unknown
         */
        TOKEN_AUCTION_SOLD: Unknown[];

        /**
         * unknown
         */
        TOKEN_BUY_CONFIRM_REQUIRED: Unknown[];

        /**
         * unknown
         */
        TOKEN_BUY_RESULT: Unknown[];

        /**
         * unknown
         */
        TOKEN_DISTRIBUTIONS_UPDATED: Unknown[];

        /**
         * unknown
         */
        TOKEN_MARKET_PRICE_UPDATED: Unknown[];

        /**
         * unknown
         */
        TOKEN_REDEEM_BALANCE_UPDATED: Unknown[];

        /**
         * unknown
         */
        TOKEN_REDEEM_CONFIRM_REQUIRED: Unknown[];

        /**
         * unknown
         */
        TOKEN_REDEEM_FRAME_SHOW: Unknown[];

        /**
         * unknown
         */
        TOKEN_REDEEM_GAME_TIME_UPDATED: Unknown[];

        /**
         * unknown
         */
        TOKEN_REDEEM_RESULT: Unknown[];

        /**
         * @see https://wow.gamepedia.com/TOKEN_SELL_CONFIRMED
         */
        TOKEN_SELL_CONFIRMED: null;

        /**
         * unknown
         */
        TOKEN_SELL_CONFIRM_REQUIRED: Unknown[];

        /**
         * unknown
         */
        TOKEN_SELL_RESULT: Unknown[];

        /**
         * unknown
         */
        TOKEN_STATUS_CHANGED: Unknown[];

        /**
         * unknown
         */
        TOYS_UPDATED: Unknown[];

        /**
         * unknown
         */
        TRACKED_ACHIEVEMENT_LIST_CHANGED: Unknown[];

        /**
         * Fired when a timed event for an achievement begins or ends. The achievement does not have to be actively tracked for this to trigger
         * - **arg1**: achievmentID
         * - **arg2**: criteriaID
         * - **arg3**: Actual time
         * - **arg4**: Time limit
         * @see https://wow.gamepedia.com/TRACKED_ACHIEVEMENT_UPDATE
         */
        TRACKED_ACHIEVEMENT_UPDATE: [number, number, number, number];

        /**
         * Fired when the status of the player and target accept buttons has changed. Target agree status only shown when he has done it first.
         * By this, player and target agree status is only shown together (arg1 == 1 and arg2 == 1), when player agreed after target
         * - **arg1**: Player has agreed to the trade (1) or not (0)
         * - **arg2**: Target has agreed to the trade (1) or not (0)
         * @see https://wow.gamepedia.com/TRADE_ACCEPT_UPDATE
         */
        TRADE_ACCEPT_UPDATE: [Flag, Flag];

        /**
         * Fired when the trade window is closed by the trade being accepted, or the player or target closes the window
         * @see https://wow.gamepedia.com/TRADE_CLOSED
         */
        TRADE_CLOSED: null;

        /**
         * unknown
         */
        TRADE_CURRENCY_CHANGED: Unknown[];

        /**
         * Fired when the trade window's money value is changed
         * @see https://wow.gamepedia.com/TRADE_MONEY_CHANGED
         */
        TRADE_MONEY_CHANGED: null;

        /**
         * Fired when an item in the target's trade window is changed (items added or removed from trade). First call not fired when start trading
         * by dropping item on target
         * - **arg1**: index of the trade slot changed
         * @see https://wow.gamepedia.com/TRADE_PLAYER_ITEM_CHANGED
         */
        TRADE_PLAYER_ITEM_CHANGED: [number];

        /**
         * unknown
         */
        TRADE_POTENTIAL_BIND_ENCHANT: Unknown[];

        /**
         * unknown
         */
        TRADE_POTENTIAL_REMOVE_TRANSMOG: Unknown[];

        /**
         * Fired when the player must confirm an enchantment replacement in the trade window
         * - **arg1**: new enchantment
         * - **arg2**: current enchantment
         * @see https://wow.gamepedia.com/TRADE_REPLACE_ENCHANT
         */
        TRADE_REPLACE_ENCHANT: [Unknown, Unknown];

        /**
         * It appears that this event was removed from the game. It was once used to ask you if you wanted to accept or reject a trade. It no longer
         * triggers, not even when "Block Trades" is enabled. Fired when another player wishes to trade with you
         * - **arg1**: player name
         * @see https://wow.gamepedia.com/TRADE_REQUEST
         */
        TRADE_REQUEST: [string];

        /**
         * Fired when a trade attempt is cancelled. Fired after TRADE_CLOSE when aborted by player, before TRADE_CLOSE when done by target
         * @see https://wow.gamepedia.com/TRADE_REQUEST_CANCEL
         */
        TRADE_REQUEST_CANCEL: null;

        /**
         * Fired when the Trade window appears after a trade request has been accepted or auto-accepted
         * @see https://wow.gamepedia.com/TRADE_SHOW
         */
        TRADE_SHOW: null;

        /**
         * Fired when a trade skill window is closed
         * @see https://wow.gamepedia.com/TRADE_SKILL_CLOSE
         */
        TRADE_SKILL_CLOSE: null;

        /**
         * unknown
         */
        TRADE_SKILL_DATA_SOURCE_CHANGED: Unknown[];

        /**
         * unknown
         */
        TRADE_SKILL_DATA_SOURCE_CHANGING: Unknown[];

        /**
         * unknown
         */
        TRADE_SKILL_DETAILS_UPDATE: Unknown[];

        /**
         * unknown
         */
        TRADE_SKILL_FILTER_UPDATE: Unknown[];

        /**
         * unknown
         */
        TRADE_SKILL_LIST_UPDATE: Unknown[];

        /**
         * unknown
         */
        TRADE_SKILL_NAME_UPDATE: Unknown[];

        /**
         * Fired when a trade skill window is opened
         * @see https://wow.gamepedia.com/TRADE_SKILL_SHOW
         */
        TRADE_SKILL_SHOW: null;

        /**
         * Fired when an item in the target's trade window is changed (items added or removed from trade).
         * - **arg1**: index of the trade slot changed
         * @see https://wow.gamepedia.com/TRADE_TARGET_ITEM_CHANGED
         */
        TRADE_TARGET_ITEM_CHANGED: [number];

        /**
         * Fired when the trade window is changed
         * @see https://wow.gamepedia.com/TRADE_UPDATE
         */
        TRADE_UPDATE: null;

        /**
         * Fired when the trainer is closed
         * @see https://wow.gamepedia.com/TRAINER_CLOSED
         */
        TRAINER_CLOSED: null;

        /**
         * unknown
         */
        TRAINER_DESCRIPTION_UPDATE: Unknown[];

        /**
         * Fired when the class trainer frame is shown
         * @see https://wow.gamepedia.com/TRAINER_SHOW
         */
        TRAINER_SHOW: null;

        /**
         * Fired when the trainer window needs to update
         * @see https://wow.gamepedia.com/TRAINER_UPDATE
         */
        TRAINER_UPDATE: null;

        /**
         * Fired when the TransmogrifyFrame is closed
         * @see https://wow.gamepedia.com/TRANSMOGRIFY_CLOSE
         */
        TRANSMOGRIFY_CLOSE: null;

        /**
         * unknown
         */
        TRANSMOGRIFY_ITEM_UPDATE: Unknown[];

        /**
         * Fired when the TransmogrifyFrame is opened
         * @see https://wow.gamepedia.com/TRANSMOGRIFY_OPEN
         */
        TRANSMOGRIFY_OPEN: null;

        /**
         * Fired when an item has been successfully tranmogrified
         * - **arg1**: slotId
         * @see https://wow.gamepedia.com/TRANSMOGRIFY_SUCCESS
         */
        TRANSMOGRIFY_SUCCESS: [INVENTORY_SLOT_ID];

        /**
         * Fired when an item is set for (de)transmogrification
         * - **arg1**: slotId
         * @see https://wow.gamepedia.com/TRANSMOGRIFY_UPDATE
         */
        TRANSMOGRIFY_UPDATE: [INVENTORY_SLOT_ID];

        /**
         * unknown
         */
        TRANSMOG_COLLECTION_CAMERA_UPDATE: Unknown[];

        /**
         * unknown
         */
        TRANSMOG_COLLECTION_ITEM_UPDATE: Unknown[];

        /**
         * unknown
         */
        TRANSMOG_COLLECTION_LOADED: Unknown[];

        /**
         * unknown
         */
        TRANSMOG_COLLECTION_SOURCE_ADDED: Unknown[];

        /**
         * unknown
         */
        TRANSMOG_COLLECTION_SOURCE_REMOVED: Unknown[];

        /**
         * unknown
         */
        TRANSMOG_COLLECTION_UPDATED: Unknown[];

        /**
         * unknown
         */
        TRANSMOG_OUTFITS_CHANGED: Unknown[];

        /**
         * unknown
         */
        TRANSMOG_SEARCH_UPDATED: Unknown[];

        /**
         * unknown
         */
        TRANSMOG_SETS_UPDATE_FAVORITE: Unknown[];

        /**
         * unknown
         */
        TRANSMOG_SOURCE_COLLECTABILITY_UPDATE: Unknown[];

        /**
         * unknown
         */
        TRIAL_CAP_REACHED_LEVEL: Unknown[];

        /**
         * unknown
         */
        TRIAL_CAP_REACHED_MONEY: Unknown[];

        /**
         * unknown
         */
        TRIAL_STATUS_UPDATE: Unknown[];

        /**
         * Fired when the tutorial/tips are shown. Will not fire if tutorials are turned off
         * @see https://wow.gamepedia.com/TUTORIAL_TRIGGER
         */
        TUTORIAL_TRIGGER: null;

        /**
         * unknown
         */
        TWITTER_LINK_RESULT: Unknown[];

        /**
         * unknown
         */
        TWITTER_POST_RESULT: Unknown[];

        /**
         * unknown
         */
        TWITTER_STATUS_UPDATE: Unknown[];

        /**
         * Fired when the interface creates an error message. These are the red messages that show in the top middle of the screen.
         * "Your inventory is full." is one example
         * - **arg1**: message_string
         * - **arg2**: message_type, see GetGameMessageInfo
         * - **arg3**: message_string
         * @see https://wow.gamepedia.com/UI_ERROR_MESSAGE
         */
        UI_ERROR_MESSAGE: [string, string, string];

        /**
         * Fired when the interface generates a message. These are the yellow messages in the top middle of the window. "No fish are hooked." is one example
         * - **arg1**: message_string
         * - **arg2**: message_type, see GetGameMessageInfo
         * - **arg3**: message_string
         * @see https://wow.gamepedia.com/UI_INFO_MESSAGE
         */
        UI_INFO_MESSAGE: [string, string, string];

        /**
         * unknown
         */
        UI_MODEL_SCENE_INFO_UPDATED: Unknown[];

        /**
         * unknown
         */
        UI_SCALE_CHANGED: Unknown[];

        /**
         * Fired when a unit's absorb amount changes (for example, when he gains/loses an absorb effect such as Power Word: Shield, or when he
         * gains/loses some of his absorb via getting hit or through an ability).Will only fire for existing units, and not for targets of units
         * (focustarget, targettarget, etc)
         * @see  https://wow.gamepedia.com/UNIT_ABSORB_AMOUNT_CHANGED
         */
        UNIT_ABSORB_AMOUNT_CHANGED: null;

        /**
         * Fired when a units attack is affected (such as the weapon being swung). First argument returned appears to be which unit this event applies
         * to (for example, 'player')
         * @see https://wow.gamepedia.com/UNIT_ATTACK
         */
        UNIT_ATTACK: null;

        /**
         * Fired when a unit's attack power changes
         * @see https://wow.gamepedia.com/UNIT_ATTACK_POWER
         */
        UNIT_ATTACK_POWER: null;

        /**
         * Fired when your attack speed is being listed or affected
         * @see https://wow.gamepedia.com/UNIT_ATTACK_SPEED
         */
        UNIT_ATTACK_SPEED: null;

        /**
         * Fired when a buff, debuff, status, or item bonus was gained by or faded from an entity (player, pet, NPC, or mob.)
         * - **arg1**: the UnitID of the entity
         * @see https://wow.gamepedia.com/UNIT_AURA
         */
        UNIT_AURA: [UnitId];

        /**
         * unknown
         */
        UNIT_CLASSIFICATION_CHANGED: Unknown[];

        /**
         * Fired when an npc or player participates in combat and takes damage
         * - **arg1**: the UnitID of the entity
         * - **arg2**: Action,Damage,etc (e.g. HEAL, DODGE, BLOCK, WOUND, MISS, PARRY, RESIST, ...)
         * - **arg3**: Critical/Glancing indicator (e.g. CRITICAL, CRUSHING, GLANCING)
         * - **arg4**: The numeric damage
         * - **arg5**: Damage type in numeric value (1 - physical; 2 - holy; 4 - fire; 8 - nature; 16 - frost; 32 - shadow; 64 - arcane)
         * @see https://wow.gamepedia.com/UNIT_COMBAT
         */
        UNIT_COMBAT: [UnitId, CombatTextType, CombatCriticalIndicator, number, CombatDamageType];

        /**
         * unknown
         */
        UNIT_CONNECTION: Unknown[];

        /**
         * Fired when the units melee damage changes. Be warned that this often gets fired multiple times, for example when you change weapons
         * @see https://wow.gamepedia.com/UNIT_DAMAGE
         */
        UNIT_DAMAGE: null;

        /**
         * Fired when a units defense is affected
         * @see https://wow.gamepedia.com/UNIT_DEFENSE
         */
        UNIT_DEFENSE: null;

        /**
         * Fired when the unit's mana stype is changed. Occurs when a druid shapeshifts as well as in certain other cases
         * - **arg1**: unitId
         * @see https://wow.gamepedia.com/UNIT_DISPLAYPOWER
         */
        UNIT_DISPLAYPOWER: [UnitId];

        /**
         * Fired when a unit enters a vehicle
         * - **arg1**: the UnitID of the entity entering a vehicle
         * - **arg2**: Vehicle has vehicle UI boolean
         * - **arg3**: Unknown string
         * - **arg4**: vehicleType (possible values are 'Natural' and 'Mechanical' and 'VehicleMount' and 'VehicleMount_Organic' or empty string)
         * - **arg5**: Vehicle can attack boolean
         * - **arg6**: Vehicle ID
         * - **arg7**: Vehicle GUID
         * - **arg8**: Vehicle is player controlled boolean
         * - **arg9**: Vehicle can aim boolean
         * @see https://wow.gamepedia.com/UNIT_ENTERED_VEHICLE
         */
        UNIT_ENTERED_VEHICLE: [UnitId, boolean, string, VehicleType, boolean, number, Guid, boolean, boolean];

        /**
         * unknown
         */
        UNIT_ENTERING_VEHICLE: Unknown[];

        /**
         * Fired when a unit exited a vehicle
         * - **arg1**: the UnitID of the entity exited a vehicle
         * @see https://wow.gamepedia.com/UNIT_EXITED_VEHICLE
         */
        UNIT_EXITED_VEHICLE: [UnitId];

        /**
         * unknown
         */
        UNIT_EXITING_VEHICLE: Unknown[];

        /**
         * Fired when a target's faction is announced
         * - **arg1**: the name of the unit whose faction changed
         * @see https://wow.gamepedia.com/UNIT_FACTION
         */
        UNIT_FACTION: [string];

        /**
         * unknown
         */
        UNIT_FLAGS: Unknown[];

        /**
         * Fired whenever a units health is affected. This event may be sent more than once to represent the same change if the affected entity
         * can be accessed through multiple UnitIDs. For example, two UNIT_HEALTH events will be sent for raid party members who are also in your party
         * group. UNIT_HEALTH events are sent for raid and party members regardless of their distance from the character of the host. This makes
         * UNIT_HEALTH extremely valuable to monitor party and raid members
         * - **arg1**: the UnitID of the unit whose health is affected
         * @see https://wow.gamepedia.com/UNIT_HEALTH
         */
        UNIT_HEALTH: [UnitId];

        /**
         * Same event as UNIT_HEALTH, but not throttled as aggressively by the client
         * @since 4.1.0
         * @see https://wow.gamepedia.com/UNIT_HEALTH_FREQUENT
         */
        UNIT_HEALTH_FREQUENT: null;

        /**
         * unknown
         */
        UNIT_HEAL_ABSORB_AMOUNT_CHANGED: Unknown[];

        /**
         * unknown
         */
        UNIT_HEAL_PREDICTION: Unknown[];

        /**
         * Fired when the player equips or unequips an item. This can also be called if your target, mouseover or party member changes equipment
         * (untested for hostile targets).
         * - This event is also raised when a new item is placed in the player's containers, taking up a new slot. If the new item(s) are placed onto
         * an existing stack or when two stacks already in the containers are merged, the event is not raised. When an item is moved inside the container
         * or to the bank, the event is not raised. The event is raised when an existing stack is split inside the player's containers.
         * - This event is also raised when a temporary enhancement (poison, lure, etc..) is applied to the player's weapon (untested for other units).
         * It will again be raised when that enhancement is removed, including by manual cancellation or buff expiration.
         * - If multiple slots are equipped/unequipped at once it only fires once now.
         * - This event is no longer triggered when changing zones or logging in. Inventory information is available when PLAYER_ENTERING_WORLD is triggered
         * ------
         * - **arg1**: the UnitID of the entity
         * @see https://wow.gamepedia.com/UNIT_INVENTORY_CHANGED
         */
        UNIT_INVENTORY_CHANGED: [UnitId];

        /**
         * Fired whenever the level of a unit is submitted (e.g. when clicking a unit or someone joins the party)
         * - **arg1**: the UnitID of the entity whose level is submitted
         * @see https://wow.gamepedia.com/UNIT_LEVEL
         */
        UNIT_LEVEL: [UnitId];

        /**
         * Fired whenever a unit's mana changes. Removed in Patch 4.0, use UNIT_POWER instead
         * @deprecated
         * @see https://wow.gamepedia.com/UNIT_MANA
         */
        UNIT_MANA: [UnitId];

        /**
         * Fired when a unit's maximum health changes
         * - **arg1**: unitID of the unit whose health is affected
         * @see https://wow.gamepedia.com/UNIT_MAXHEALTH
         */
        UNIT_MAXHEALTH: [UnitId];

        /**
         * Fired when a unit's maximum power (mana, rage, focus, energy, runic power, ...) changes
         * - **arg1**: UnitId whose resource maximum changed
         * - **arg2**: String representation of the resource whose maximum value changed: "MANA", "RAGE", "ENERGY", "FOCUS", "HAPPINESS", "RUNIC_POWER"
         * @since 4.0.1
         * @see https://wow.gamepedia.com/UNIT_MAXPOWER
         */
        UNIT_MAXPOWER: [UnitId, UnitPowerType];

        /**
         * Fired when the unit's 3d model changes
         * @see https://wow.gamepedia.com/UNIT_MODEL_CHANGED
         */
        UNIT_MODEL_CHANGED: null;

        /**
         * Fired when a unit's name changes
         * - **arg1**: the UnitID of the entity whose name changed
         * @see https://wow.gamepedia.com/UNIT_NAME_UPDATE
         */
        UNIT_NAME_UPDATE: [UnitId];

        /**
         * unknown
         */
        UNIT_OTHER_PARTY_CHANGED: Unknown[];

        /**
         * Fired when a unit's pet changes
         * - **arg1**: The UnitID of the entity whose pet changed
         * @see https://wow.gamepedia.com/UNIT_PET
         */
        UNIT_PET: [UnitId];

        /**
         * Fired when the pet's experience changes
         * @see https://wow.gamepedia.com/UNIT_PET_EXPERIENCE
         */
        UNIT_PET_EXPERIENCE: null;

        /**
         * unknown
         */
        UNIT_PHASE: Unknown[];

        /**
         * Fired when a units portrait changes
         * - **arg1**: Unit name
         * @see https://wow.gamepedia.com/UNIT_PORTRAIT_UPDATE
         */
        UNIT_PORTRAIT_UPDATE: [string];

        /**
         * Fired when a unit's current power (mana, rage, focus, energy, runic power, holy power, ...) changes
         * - **arg1**: UnitId whose resource value changed
         * - **arg2**: String representation of the resource whose value changed: "MANA", "RAGE", "ENERGY", "FOCUS", "HAPPINESS", "RUNIC_POWER", "HOLY_POWER"
         * @deprecated Renamed from UNIT_POWER to UNIT_POWER_UPDATE
         * @see https://wow.gamepedia.com/UNIT_POWER
         */
        UNIT_POWER: [UnitId, UnitPowerType];

        /**
         * Fired when a unit's current power (mana, rage, focus, energy, runic power, holy power, ...) changes
         * - **arg1**: UnitId whose resource value changed
         * - **arg2**: String representation of the resource whose value changed: "MANA", "RAGE", "ENERGY", "FOCUS", "HAPPINESS", "RUNIC_POWER", "HOLY_POWER"
         * @see https://wow.gamepedia.com/UNIT_POWER
         * @since 8.0.1
         */
        UNIT_POWER_UPDATE: TypedEvents["UNIT_POWER"];

        /**
         * unknown
         */
        UNIT_POWER_BAR_HIDE: Unknown[];

        /**
         * unknown
         */
        UNIT_POWER_BAR_SHOW: Unknown[];

        /**
         * unknown
         */
        UNIT_POWER_BAR_TIMER_UPDATE: Unknown[];

        /**
         * unknown
         */
        UNIT_POWER_FREQUENT: Unknown[];

        /**
         * Fired whenever the quest log changes. (Frequently, but not as frequently as QUEST_LOG_UPDATE)
         * - **arg1**: unit name
         * @see https://wow.gamepedia.com/UNIT_QUEST_LOG_CHANGED
         */
        UNIT_QUEST_LOG_CHANGED: [string];

        /**
         * Fired when a unit's ranged damage changes
         * @see https://wow.gamepedia.com/UNIT_RANGEDDAMAGE
         */
        UNIT_RANGEDDAMAGE: null;

        /**
         * Fired when a unit's ranged attack power changes
         * @see https://wow.gamepedia.com/UNIT_RANGED_ATTACK_POWER
         */
        UNIT_RANGED_ATTACK_POWER: null;

        /**
         * Fired when the units resistance changes
         * @see https://wow.gamepedia.com/UNIT_RESISTANCES
         */
        UNIT_RESISTANCES: null;

        /**
         * Fired when a unit begins channeling in the course of casting a spell. Received for party/raid members as well as the player
         * - **arg1**: Unit casting the spell
         * - **arg2**: Spell lineID counter
         * - **arg3**: Spell ID
         * @since 2.0.1
         * @see https://wow.gamepedia.com/UNIT_SPELLCAST_CHANNEL_START
         */
        UNIT_SPELLCAST_CHANNEL_START: [UnitId, number, number];

        /**
         * Fired when a unit stops channeling. Received for party/raid members as well as the player
         * - **arg1**: Unit casting the spell
         * - **arg2**: Spell lineID counter
         * - **arg3**: Spell ID
         * @since 2.0.1
         */
        UNIT_SPELLCAST_CHANNEL_STOP: [UnitId, number, number];

        /**
         * Received for party/raid members, as well as the player
         * - **arg1**: Unit casting the spell
         * - **arg2**: Spell lineID counter
         * - **arg3**: Spell ID
         * @since 2.0.1
         */
        UNIT_SPELLCAST_CHANNEL_UPDATE: [UnitId, number, number];

        /**
         * Fired when a unit's spellcast is delayed, including party/raid members or the player
         * - **arg1**: Unit casting the spell
         * - **arg2**: Spell lineID counter
         * - **arg3**: Spell ID
         * @since 2.0.1
         */
        UNIT_SPELLCAST_DELAYED: [UnitId, number, number];

        /**
         * Fired when a unit's spellcast fails, including party/raid members or the player
         * - **arg1**: Unit casting the spell
         * - **arg2**: Spell lineID counter
         * - **arg3**: Spell ID
         * @since 2.0.1
         */
        UNIT_SPELLCAST_FAILED: [UnitId, number, number];

        /**
         * - **arg1**: Unit casting the spell
         * - **arg2**: Spell lineID counter
         * - **arg3**: Spell ID
         * @since 2.0.1
         */
        UNIT_SPELLCAST_FAILED_QUIET: [UnitId, number, number];

        /**
         * Fired when a unit's spellcast is interrupted, including party/raid members or the player
         * - **arg1**: Unit casting the spell
         * - **arg2**: Spell lineID counter
         * - **arg3**: Spell ID
         * @since 2.0.1
         */
        UNIT_SPELLCAST_INTERRUPTED: [UnitId, number, number];

        /**
         * - **arg1**: Unit casting the spell
         * - **arg2**: Spell lineID counter
         * - **arg3**: Spell ID
         * @since 2.0.1
         */
        UNIT_SPELLCAST_INTERRUPTIBLE: [UnitId, number, number];

        /**
         * - **arg1**: Unit casting the spell
         * - **arg2**: Spell lineID counter
         * - **arg3**: Spell ID
         * @since 2.0.1
         */
        UNIT_SPELLCAST_NOT_INTERRUPTIBLE: [UnitId, number, number];

        /**
         * Fired when a unit attempts to cast a spell regardless of the success of the cast. Fired when a unit tries to cast an instant, non-instant,
         * or channeling spell even if out of range or out of line-of-sight (unless the unit is attempting to cast a non-instant spell while already
         * casting or attempting to cast a spell that is on cooldown).
         * - **arg1**: Unit casting the spell
         * - **arg2**: unused
         * - **arg3**: Complex string similar to a GUID. For Flare this appeared: Cast-3-3783-1-7-1543-000197DD84. 1543 is the SpellID. Identification
         * of the rest of that string is needed
         * - **arg4**: Varies. Occasionally the Spell ID, but not always. Occasionally the target, but not always
         * @since 2.0.1
         */
        UNIT_SPELLCAST_SENT: [UnitId, Unknown, string, number | UnitId];

        /**
         * Fired when a unit begins casting a non-instant cast spell, including party/raid members or the player
         * - **arg1**: Unit casting the spell
         * - **arg2**: Spell lineID counter
         * - **arg3**: Spell ID
         * @since 2.0.1
         */
        UNIT_SPELLCAST_START: [UnitId, number, number];

        /**
         * Fired when a unit begins casting a non-instant cast spell, including party/raid members or the player
         * - **arg1**: Unit casting the spell
         * - **arg2**: Spell lineID counter
         * - **arg3**: Spell ID
         * @since 2.0.1
         */
        UNIT_SPELLCAST_STOP: [UnitId, number, number];

        /**
         * Fired when a spell is cast successfully. Event is received even if spell is resisted
         * - **arg1**: Unit casting the spell
         * - **arg2**: Spell lineID counter
         * - **arg3**: Spell ID
         * @since 2.0.1
         */
        UNIT_SPELLCAST_SUCCEEDED: [UnitId, number, number];

        /**
         * unknown
         */
        UNIT_SPELL_HASTE: Unknown[];

        /**
         * Fired when a units stats are being passed to the player/thing
         * - **arg1**: Unit Name
         * @see https://wow.gamepedia.com/UNIT_STATS
         */
        UNIT_STATS: [string];

        /**
         * Fired when the target of yourself, raid, and party members change: 'target', 'party1target', 'raid1target', etc.. Should also work for
         * 'pet' and 'focus'. This event only fires when the triggering unit is within the player's visual range
         * - **arg1**: unitId of the unit which changed targets
         * @see https://wow.gamepedia.com/UNIT_TARGET
         */
        UNIT_TARGET: [UnitId];

        /**
         * unknown
         */
        UNIT_TARGETABLE_CHANGED: Unknown[];

        /**
         * Fired when the client receives updated threat information from the server, if an available mob's threat list has changed at all
         * (ie anybody in combat with it has done anything).
         * - **arg1**: unitId of the mob whose threat list changed
         * @see https://wow.gamepedia.com/UNIT_THREAT_LIST_UPDATE
         */
        UNIT_THREAT_LIST_UPDATE: [UnitId];

        /**
         * Fired when an available unit on an available mob's threat list moves past another unit on that list
         * - **arg1**: unitId of the unit whose threat situation changed
         * @see https://wow.gamepedia.com/UNIT_THREAT_SITUATION_UPDATE
         */
        UNIT_THREAT_SITUATION_UPDATE: [UnitId];

        /**
         * unknown
         */
        UPDATE_ACTIVE_BATTLEFIELD: Unknown[];

        /**
         * Fired whenever new battlefield score data has been recieved, this is usually fired after RequestBattlefieldScoreData() is called
         * @see https://wow.gamepedia.com/UPDATE_BATTLEFIELD_SCORE
         */
        UPDATE_BATTLEFIELD_SCORE: null;

        /**
         * Fired whenever joining a queue, leaving a queue, battlefield to join is changed, when you can join a battlefield, or if somebody wins the
         * battleground
         * @see https://wow.gamepedia.com/UPDATE_BATTLEFIELD_STATUS
         */
        UPDATE_BATTLEFIELD_STATUS: null;

        /**
         * Fired when the keybindings are changed. Fired after completion of LoadBindings(), SaveBindings(), and SetBinding() (and its derivatives)
         * @see https://wow.gamepedia.com/UPDATE_BINDINGS
         */
        UPDATE_BINDINGS: null;

        /**
         * unknown
         */
        UPDATE_BONUS_ACTIONBAR: Unknown[];

        /**
         * Fired when the chat colour needs to be updated. Refer to the ChangeChatColor API call for details on the parameters
         * - **arg1**: chat type
         * - **arg2**: red
         * - **arg3**: green
         * - **arg4**: blue
         * @see https://wow.gamepedia.com/UPDATE_CHAT_COLOR
         */
        UPDATE_CHAT_COLOR: [string, number, number, number];

        /**
         * unknown
         */
        UPDATE_CHAT_COLOR_NAME_BY_CLASS: Unknown[];

        /**
         * Fired on load when chat settings are available for chat windows
         * @see https://wow.gamepedia.com/UPDATE_CHAT_WINDOWS
         */
        UPDATE_CHAT_WINDOWS: null;

        /**
         * Fired when your character's XP exhaustion (i.e. the amount of your character's rested bonus) changes. Use GetXPExhaustion() to query the current
         * value
         * @see https://wow.gamepedia.com/UPDATE_EXHAUSTION
         */
        UPDATE_EXHAUSTION: null;

        /**
         * unknown
         */
        UPDATE_EXPANSION_LEVEL: Unknown[];

        /**
         * unknown
         */
        UPDATE_EXTRA_ACTIONBAR: Unknown[];

        /**
         * Fired when your character's reputation of some faction has changed
         * @see https://wow.gamepedia.com/UPDATE_FACTION
         */
        UPDATE_FACTION: null;

        /**
         * Fired on load when chat settings are available for a certain chat window
         * @see https://wow.gamepedia.com/UPDATE_FLOATING_CHAT_WINDOWS
         */
        UPDATE_FLOATING_CHAT_WINDOWS: null;

        /**
         * unknown
         */
        UPDATE_GM_STATUS: Unknown[];

        /**
         * Fired when data from RequestRaidInfo() is available
         * @see https://wow.gamepedia.com/UPDATE_INSTANCE_INFO
         */
        UPDATE_INSTANCE_INFO: null;

        /**
         * Fires whenever an item's durability status becomes yellow (low) or red (broken). Signals that the durability frame needs to be updated.
         * May also fire on any durability status change, even if that change doesn't require an update to the durability frame
         * @see https://wow.gamepedia.com/UPDATE_INVENTORY_ALERTS
         */
        UPDATE_INVENTORY_ALERTS: null;

        /**
         * Should fire whenever the durability of an item in the character's possession changes
         * @see https://wow.gamepedia.com/UPDATE_INVENTORY_DURABILITY
         */
        UPDATE_INVENTORY_DURABILITY: null;

        /**
         * When fired prompts the LFG UI to update the list of LFG players. Signals LFG query results are available. See API LFGQuery
         * @see https://wow.gamepedia.com/UPDATE_LFG_LIST
         */
        UPDATE_LFG_LIST: null;

        /**
         * unknown
         */
        UPDATE_LFG_LIST_INCREMENTAL: Unknown[];

        /**
         * unknown
         */
        UPDATE_LFG_TYPES: Unknown[];

        /**
         * unknown
         */
        UPDATE_MACROS: Unknown[];

        /**
         * unknown
         */
        UPDATE_MASTER_LOOT_LIST: Unknown[];

        /**
         * Fired when the mouseover object needs to be updated
         * @see https://wow.gamepedia.com/UPDATE_MOUSEOVER_UNIT
         */
        UPDATE_MOUSEOVER_UNIT: null;

        /**
         * Fired when the shaman totem multicast bar needs an update
         * @see https://wow.gamepedia.com/UPDATE_MULTI_CAST_ACTIONBAR
         */
        UPDATE_MULTI_CAST_ACTIONBAR: null;

        /**
         * unknown
         */
        UPDATE_OVERRIDE_ACTIONBAR: Unknown[];

        /**
         * - Fired when the player enters the world and enters/leaves an instance, if there is mail in the player's mailbox
         * - Fired when new mail is received
         * - Fired when mailbox window is closed if the number of mail items in the inbox changed (I.E. you deleted mail)
         * - Does not appear to trigger when auction outbid mail is received... may not in other cases as well
         * @see https://wow.gamepedia.com/UPDATE_PENDING_MAIL
         */
        UPDATE_PENDING_MAIL: null;

        /**
         * unknown
         */
        UPDATE_POSSESS_BAR: Unknown[];

        /**
         * unknown
         */
        UPDATE_SHAPESHIFT_COOLDOWN: Unknown[];

        /**
         * Fired when the current form changes
         * @see https://wow.gamepedia.com/UPDATE_SHAPESHIFT_FORM
         */
        UPDATE_SHAPESHIFT_FORM: null;

        /**
         * Fired when the available set of forms changes (i.e. on skill gain)
         * @see https://wow.gamepedia.com/UPDATE_SHAPESHIFT_FORMS
         */
        UPDATE_SHAPESHIFT_FORMS: null;

        /**
         * unknown
         */
        UPDATE_SHAPESHIFT_USABLE: Unknown[];

        /**
         * unknown
         */
        UPDATE_STEALTH: Unknown[];

        /**
         * Fired when a battle pet-summoning action might need to be updated
         * - Fired when the player learns a new battle pet
         * - Fired when the player's battle pets die or are healed outside a pet battle
         * @see https://wow.gamepedia.com/UPDATE_SUMMONPETS_ACTION
         */
        UPDATE_SUMMONPETS_ACTION: null;

        /**
         * unknown
         */
        UPDATE_TICKET: Unknown[];

        /**
         * unknown
         */
        UPDATE_TRADESKILL_RECAST: Unknown[];

        /**
         * unknown
         */
        UPDATE_VEHICLE_ACTIONBAR: Unknown[];

        /**
         * unknown
         */
        UPDATE_WEB_TICKET: Unknown[];

        /**
         * Fired within Battlefields when certain things occur such as a flag being captured
         * @see https://wow.gamepedia.com/UPDATE_WORLD_STATES
         */
        UPDATE_WORLD_STATES: null;

        /**
         * unknown
         */
        USE_BIND_CONFIRM: Unknown[];

        /**
         * unknown
         */
        USE_GLYPH: Unknown[];

        /**
         * unknown
         */
        USE_NO_REFUND_CONFIRM: Unknown[];

        /**
         * Fired in response to the CVars, Keybindings and other associated "Blizzard" variables being loaded. Since key bindings and macros in
         * particular may be stored on the server they event may be delayed a bit beyond the original loading sequence
         * - Previously (prior to 3.0.1) this event was part of the loading sequence. Although it still occurs within the same general timeframe
         * as the other events, it no longer has a guaranteed order that can be relied on. This may be problematic to addons that relied on the order
         * of VARIABLES_LOADED, specifically that it would fire before PLAYER_ENTERING_WORLD
         * - Addons should not use this event to check if their addon's saved variables have loaded. They can use ADDON_LOADED (testing for arg1
         * being the name of the addon) or another appropriate event to initialize, ensuring that the addon works when loaded on demand
         * @see https://wow.gamepedia.com/VARIABLES_LOADED
         */
        VARIABLES_LOADED: null;

        /**
         * unknown
         */
        VEHICLE_ANGLE_SHOW: Unknown[];

        /**
         * unknown
         */
        VEHICLE_ANGLE_UPDATE: Unknown[];

        /**
         * unknown
         */
        VEHICLE_PASSENGERS_CHANGED: Unknown[];

        /**
         * unknown
         */
        VEHICLE_POWER_SHOW: Unknown[];

        /**
         * unknown
         */
        VEHICLE_UPDATE: Unknown[];

        /**
         * Fires when a vignette (such as a skull icon or chest icon) is added to your minimap
         * - **arg1**: vignette instance ID specific to the instance of the object represented by the vignette
         * - **arg2**: Unknown purpose. It appears to be always 0?
         * @since 5.4.0
         * @see https://wow.gamepedia.com/VIGNETTE_ADDED
         */
        VIGNETTE_ADDED: [number, number];

        /**
         * Fire when a vignette (such as a skull icon or chest icon) is removed from your minimap
         * - **arg1**: vignette instance ID of the vignette that is no longer visible to the player. You cannot retrieve additional information
         * about this vignette when this event fires
         * @since 5.4.0
         * @see https://wow.gamepedia.com/VIGNETTE_REMOVED
         */
        VIGNETTE_REMOVED: [number];

        /**
         * unknown
         */
        VOICE_CHANNEL_STATUS_UPDATE: Unknown[];

        /**
         * Fired when you enable or disable voice chat
         * @see https://wow.gamepedia.com/VOICE_CHAT_ENABLED_UPDATE
         */
        VOICE_CHAT_ENABLED_UPDATE: null;

        /**
         * unknown
         */
        VOICE_LEFT_SESSION: Unknown[];

        /**
         * unknown
         */
        VOICE_PLATE_START: Unknown[];

        /**
         * unknown
         */
        VOICE_PLATE_STOP: Unknown[];

        /**
         * Fired when you click the Push-To-Talk hotkey to activate voice chat
         * @see https://wow.gamepedia.com/VOICE_PUSH_TO_TALK_START
         */
        VOICE_PUSH_TO_TALK_START: null;

        /**
         * Fired when you release the Push-To-Talk hotkey
         * @see https://wow.gamepedia.com/VOICE_PUSH_TO_TALK_STOP
         */
        VOICE_PUSH_TO_TALK_STOP: null;

        /**
         * unknown
         */
        VOICE_SELF_MUTE: Unknown[];

        /**
         * unknown
         */
        VOICE_SESSIONS_UPDATE: Unknown[];

        /**
         * Fired when someone starts using Voice Chat
         * - **arg1**: The UnitId of the person who started talking
         * @see https://wow.gamepedia.com/VOICE_START
         */
        VOICE_START: [UnitId];

        /**
         * Fired when someone in your group or raid updates their voice status. Triggers extremely frequently
         * @see https://wow.gamepedia.com/VOICE_STATUS_UPDATE
         */
        VOICE_STATUS_UPDATE: null;

        /**
         * Fired when someone stops using Voice Chat
         * - **arg1**: The UnitId of the person who stopped talking
         * @see https://wow.gamepedia.com/VOICE_STOP
         */
        VOICE_STOP: [UnitId];

        /**
         * Fired when attempting to deposit an item with enchants/gems/reforges/etc into the Void Storage
         * - **arg1**: slotIndex
         * - **arg2**: itemLink
         * @see https://wow.gamepedia.com/VOID_DEPOSIT_WARNING
         */
        VOID_DEPOSIT_WARNING: [number, ItemLink];

        /**
         * unknown
         */
        VOID_STORAGE_CLOSE: Unknown[];

        /**
         * Fired when one the Void Storage slots is changed
         * @see https://wow.gamepedia.com/VOID_STORAGE_CONTENTS_UPDATE
         */
        VOID_STORAGE_CONTENTS_UPDATE: null;

        /**
         * Fired when one the Void Transfer deposit slots is changed
         * - **arg1**: slotIndex
         * @see https://wow.gamepedia.com/VOID_STORAGE_DEPOSIT_UPDATE
         */
        VOID_STORAGE_DEPOSIT_UPDATE: [number];

        /**
         * unknown
         */
        VOID_STORAGE_OPEN: Unknown[];

        /**
         * Fired when the Void Storage "tutorial" is progressed, or when the Void Storage hasn't been activated yet
         * @see https://wow.gamepedia.com/VOID_STORAGE_UPDATE
         */
        VOID_STORAGE_UPDATE: null;

        /**
         * Fired when an item has been successfully deposited or withdrawn from the Void Storage
         * @see https://wow.gamepedia.com/VOID_TRANSFER_DONE
         */
        VOID_TRANSFER_DONE: null;

        /**
         * Fires when you need to supply a reason for the kick vote you wish to initiate. Use UninviteUnit("name", "reason") to provide the reason
         * - **arg1**: name of the player you wanted to initiate a kick vote for
         * @see https://wow.gamepedia.com/VOTE_KICK_REASON_NEEDED
         */
        VOTE_KICK_REASON_NEEDED: [string];

        /**
         * unknown
         */
        WARGAME_REQUESTED: Unknown[];

        /**
         * unknown
         */
        WEAR_EQUIPMENT_SET: Unknown[];

        /**
         * unknown
         */
        WEIGHTED_SPELL_UPDATED: Unknown[];

        /**
         * Fired when the client receives the result of a SendWho() request from the server. use API SetWhoToUI to manipulate this functionality.
         * This event is only triggered if the Who panel was open at the time the Who data was received (this includes the case where the Blizzard
         * UI opens it automatically because the return data was too big to display in the chat frame).
         * @see https://wow.gamepedia.com/WHO_LIST_UPDATE
         */
        WHO_LIST_UPDATE: null;

        /**
         * @see https://wow.gamepedia.com/WORLD_MAP_CLOSE
         */
        WORLD_MAP_CLOSE: null;

        /**
         * @see https://wow.gamepedia.com/WORLD_MAP_OPEN
         */
        WORLD_MAP_OPEN: [number];

        /**
         * Fired when the world map should be updated. When entering a battleground, this event won't fire until the zone is changed (i.e. in
         *  WSG when you walk outside of Warsong Lumber Mill or Silverwing Hold
         * @see https://wow.gamepedia.com/WORLD_MAP_UPDATE
         */
        WORLD_MAP_UPDATE: null;

        /**
         * unknown
         */
        WORLD_QUEST_COMPLETED_BY_SPELL: Unknown[];

        /**
         * unknown
         */
        WORLD_STATE_TIMER_START: Unknown[];

        /**
         * unknown
         */
        WORLD_STATE_TIMER_STOP: Unknown[];

        /**
         * unknown
         */
        WORLD_STATE_UI_TIMER_UPDATE: Unknown[];

        /**
         * Possibly fired after failing to DetectWowMouse()
         * @see https://wow.gamepedia.com/MOUSE_NOT_FOUND
         */
        MOUSE_NOT_FOUND: null;

        /**
         * Fired when the player enters a new subzone. e.g. While in Vale of Eternal Blossoms, moving from "The Summer Fields" to "The Golden Padoga"
         * @see https://wow.gamepedia.com/ZONE_CHANGED
         */
        ZONE_CHANGED: null;

        /**
         * Fired when a player enters a new zone within a city. e.g. While in Shrine of the Two Moons, moving from "Hall of the Crescent Moon" to "Summer's
         * Rest"
         * @see https://wow.gamepedia.com/ZONE_CHANGED_INDOORS
         */
        ZONE_CHANGED_INDOORS: null;

        /**
         * Fired when the user enters a new zone or city. e.g. moving from Duskwood to Stranglethorn Vale or Durotar into Orgrimmar. In interface
         * terms, this is anytime you get a new set of channels
         * @description Note: When this event fires, the UI may still think you're in the zone you just left. Don't depend on GetRealZoneText()
         * and similar functions to report the new zone in reaction to ZONE_CHANGED_NEW_AREA. (untested for similar events)
         * @see https://wow.gamepedia.com/ZONE_CHANGED_NEW_AREA
         */
        ZONE_CHANGED_NEW_AREA: null;

    };

    type Event = keyof TypedEvents;
}
