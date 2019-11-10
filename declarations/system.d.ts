/** @noSelfInFile */

/**
 * Execute a console command
 *
 * @param command The console command to execute
 * @see https://wow.gamepedia.com/API_ConsoleExec
 */
declare function ConsoleExec(command: string): WoWAPI.Unknown;

/**
 * Attempts to detect the world of warcraft MMO mouse.
 *
 * @see https://wow.gamepedia.com/API_DetectWowMouse
 */
declare function DetectWowMouse(): WoWAPI.Unknown;

/**
 * Returns information about current client build
 *
 * @returns version, build, date, tocversion
 * @see https://wow.gamepedia.com/API_GetBuildInfo
 * @tupleReturn
 */
declare function GetBuildInfo(): [string, string, string, number];

/**
 * Returns the currently set error handler
 *
 * @returns Unknown
 * @see https://wow.gamepedia.com/API_geterrorhandler
 */
declare function geterrorhandler(): (...args: any[]) => any | null;

/**
 * Retrieve the current framerate (frames / second).
 *
 * @returns The current framerate in frames per second
 * @see https://wow.gamepedia.com/API_GetFramerate
 */
declare function GetFramerate(): number;

/**
 * Returns the current server time in hours and minutes
 *
 * @returns hours, minutes
 * @see https://wow.gamepedia.com/API_GetGameTime
 * @tupleReturn
 */
declare function GetGameTime(): [number, number];

/**
 * Returns the system uptime of your computer in seconds, with millisecond
 * precision.
 *
 * @returns hours, minutes
 * @see https://wow.gamepedia.com/API_GetTime
 */
declare function GetTime(): number;

/**
 * Returns information about the client locale
 *
 * @returns
 * - deDE: German (Germany)
 * - enGB: English (United Kingdom)
 * - enGB clients return enUS
 * - enUS: English (United States)
 * - esES: Spanish (Spain)
 * - esMX: Spanish (Mexico)
 * - frFR: French (France)
 * - itIT: Italian (Italy)
 * - koKR: Korean (Korea)
 * - ptBR: Portuguese (Brazil)
 * - ruRU: Russian (Russia) - UI AddOn
 * - zhCN: Chinese (Simplified, PRC)
 * - zhTW: Chinese (Traditional, Taiwan)
 */
declare function GetLocale(): string;

/**
 * Returns the name of the character's realm
 * @see https://wow.gamepedia.com/API_GetRealmName
 */
declare function GetRealmName(): string;
