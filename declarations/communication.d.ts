/** @noSelfInFile */

declare namespace WoWAPI {
    type EmoteToken = "AGREE" | "AMAZE" | "ANGRY" | "APOLOGIZE" | "APPLAUD" | "ATTACKMYTARGET" | "BARK" | "BASHFUL" | "BECKON" |
        "BEG" | "BURP" | "BITE" | "BLEED" | "BLINK" | "KISS" | "BLUSH" | "BOGGLE" | "BONK" | "BORED" | "BOUNCE" | "BOW" | "BRB" | "BYE" | "CACKLE" |
        "CALM" | "SCRATCH" | "CHARGE" | "CHEER" | "EAT" | "CHICKEN" | "CHUCKLE" | "CLAP" | "COLD" | "COMFORT" | "COMMEND" | "CONFUSED" |
        "CONGRATULATE" | "COUGH" | "COWER" | "CRACK" | "CRINGE" | "CRY" | "CUDDLE" | "CURIOUS" | "CURTSEY" | "DANCE" | "FROWN" | "BONK" |
        "THREATEN" | "DRINK" | "DROOL" | "DUCK" | "EAT" | "TALKEX" | "EYE" | "FART" | "FIDGET" | "FLEE" | "FLEX" | "FLIRT" | "FLOP" | "FOLLOW" |
        "HUNGRY" | "GASP" | "GAZE" | "GIGGLE" | "HAPPY" | "GLARE" | "GLOAT" | "GOLFCAP" | "GREET" | "GRIN" | "GROAN" | "GROVEL" | "GROWL" |
        "GUFFAW" | "HAIL" | "HEALME" | "HELLO" | "HELPME" | "HUG" | "INCOMING" | "INSULT" | "INTRODUCE" | "JK" | "KNEEL" | "LAUGH" | "PRAISE" |
        "LAYDOWN" | "LICK" | "LISTEN" | "LOST" | "LOVE" | "MASSAGE" | "MOAN" | "MOCK" | "MOO" | "MOON" | "MOURN" | "NO" | "NOD" | "NOSEPICK" |
        "OOM" | "OPENFIRE" | "PANIC" | "PAT" | "PEER" | "SHOO" | "PITY" | "PLEAD" | "POINT" | "POKE" | "PONDER" | "POUNCE" | "PRAY" | "PURR" |
        "PUZZLE" | "TALKQ" | "RAISE" | "RASP" | "READY" | "SHAKE" | "ROAR" | "ROFL" | "RUDE" | "SALUTE" | "SCARED" | "SCRATCH" | "SEXY" | "SHAKE" |
        "SHIMMY" | "SHIVER" | "SHRUG" | "SHY" | "SIGH" | "JOKE" | "SLAP" | "SLEEP" | "STINK" | "SMILE" | "SMIRK" | "SNARL" | "SNICKER" | "SNIFF" |
        "SNUB" | "SOOTHE" | "SPIT" | "STARE" | "STAND" | "SURPRISED" | "SURRENDER" | "TAP" | "TALK" | "TAUNT" | "TEASE" | "THANK" | "THIRSTY" |
        "TICKLE" | "TIRED" | "TRAIN" | "VETO" | "VICTORY" | "VIOLIN" | "WAIT" | "WAVE" | "WELCOME" | "WHINE" | "WHISTLE" | "WINK" | "WORK" | "YAWN";
}

/**
 * Executes one of the emotes based on the given token, including vocal emotes and animations. The list of currently valid emotes is
 * given in ChatFrame.lua, defined as one of the EMOTEx_TOKEN constants. x starts at 1 and goes up to ChatFrame.lua's local variable
 * MAXEMOTEINDEX (which is 452 in WotLK 3.3.0).
 * @param emote the token that describes which emote is being used. See Emotes Tokens
 * @param target  UnitId of who the emote will be performed on. If nil, then it performs the emote on your current target, or yourself
 * if you don't have a target. If the specified target does not exist or is out of range, then it performs the emote on yourself.
 * @see https://wow.gamepedia.com/API_DoEmote
 */
declare function DoEmote(emote: WoWAPI.EmoteToken, target?: WoWAPI.UnitId): void;

/**
 * Returns the Language used by the indicated Player
 * @param unit unit whose default language you wish to query
 * @returns the default language of the indicated object, usually the faction's common language (i.e. "Common" and "Orcish").
 * @see https://wow.gamepedia.com/API_GetDefaultLanguage
 */
declare function GetDefaultLanguage(unit: WoWAPI.UnitId): string;

/**
 * Returns the language specified by the index that your character can speak
 * @param index The index starting at 1.
 * @returns Returns the LanguageID
 * @see https://wow.gamepedia.com/API_GetLanguageByIndex
 */
declare function GetLanguageByIndex(index: number): WoWAPI.ChannelLanguageId;

/**
 * Returns the number of languages your character can speak
 * @returns Returns the number of languages your character can speak
 * @see https://wow.gamepedia.com/API_GetNumLanguages
 */
declare function GetNumLanguages(): number;

/**
 * Performs a random roll between two numbers
 * @param low lowest number (default 1)
 * @param high highest number (default 100)
 * @see https://wow.gamepedia.com/API_RandomRoll
 */
declare function RandomRoll(low?: number, high?: number): void;
