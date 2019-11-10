/** @noSelfInFile */

declare namespace WoWAPI {
    type CurrentBindingWhich = 1 | 2;
    type BindingSetType = 0 | CurrentBindingWhich;
}

/**
 * Returns the command name and all keys currently bound to the specified binding
 * @param bindingIndex index of the binding to query, from 1 to GetNumBindings().
 * @param mode Unknown, defaults to 1
 * @see https://wow.gamepedia.com/API_GetBinding
 * @tupleReturn
 */
declare function GetBinding(bindingIndex: number, mode?: WoWAPI.Unknown): [string, string, string];

/**
 * Returns the name of the action performed by the specified binding
 * @param binding The name of the key (eg. "BUTTON1", "1", "CTRL-G")
 * @param checkOverride if true, override bindings will be checked, otherwise, only default (bindings.xml/SetBinding) bindings are consulted
 * @returns action command performed by the binding. If no action is bound to the key, an empty string is returned
 * @see https://wow.gamepedia.com/API_GetBindingAction
 */
declare function GetBindingAction(binding: string, checkOverride?: boolean): string;

/**
 * Returns all keys currently bound to the command specified by command. This function is almost identical to GetBinding(index)
 * except it takes the command name as an argument instead of the index and doesn't return the command name along with the key bindings
 * @param command The name of the command to get key bindings for (e.g. MOVEFORWARD, TOGGLEFRIENDSTAB)
 * @returns The string representation(s) of all the key(s) bound to this command (e.g. W, CTRL-F)
 * @see https://wow.gamepedia.com/API_GetBindingKey
 * @tupleReturn
 */
declare function GetBindingKey(command: string): [...string[]];

/**
 * Returns the localized string value for the given key and prefix. Essentially a glorified getglobal() function
 * @param key The name of the key (e.g. "UP", "SHIFT-PAGEDOWN")
 * @param prefix The prefix of the variable name you're looking for. Usually "KEY_" or "BINDING_NAME_"
 * @param abbreviate Whether to return an abbreviated version of the modifier keys
 * @returns The value of the global variable derived from the prefix and key name you specified. For example, "UP" and "KEY_"
 * would return the value of the global variable KEY_UP which is "Up Arrow" in the english locale. If the global variable doesn't exist for
 * the combination specified, it appears to just return the key name you specified. Modifier key prefixes are stripped from the input and added
 * back in to the output
 * @see https://wow.gamepedia.com/API_GetBindingText
 */
declare function GetBindingText(key: string, prefix: string, abbreviate?: boolean): string;

/**
 * Returns whether account- or character-specific bindings are active.
 * @returns ACCOUNT_BINDINGS = 1 (indicates that account-wide bindings are currently active), CHARACTER_BINDINGS = 2
 * (indicates that per-character bindings are currently active)
 * @see https://wow.gamepedia.com/API_GetCurrentBindingSet
 */
declare function GetCurrentBindingSet(): WoWAPI.CurrentBindingWhich;

/**
 * Returns the total number of key bindings listed in the key bindings window. This includes not only actions that can be bound,
 * but also the category headers in the window. This would generally be used in conjunction with GetBinding to loop through and set/get
 * all of the key bindings available
 * @returns The total number of key bindings (including headers) listed in the key bindings window.
 * @see https://wow.gamepedia.com/API_GetNumBindings
 */
declare function GetNumBindings(): WoWAPI.Unknown;

/**
 * Loads a binding set into memory, activating those bindings
 * @param bindingSet Which binding set to load; one of the following three numeric constants: DEFAULT_BINDINGS (0), ACCOUNT_BINDINGS (1), CHARACTER_BINDINGS (2)
 * @event UPDATE_BINDINGS
 * @see https://wow.gamepedia.com/API_LoadBindings
 */
declare function LoadBindings(bindingSet: WoWAPI.BindingSetType): void;

/**
 * Executes a key binding as if a key was pressed
 * @param command Name of the key binding to be executed
 * @param up if "up", the binding is run as if the key was released
 * @description The "command" argument must match one of the (usually capitalized) binding names in a Bindings.xml file.
 * This can be a name that appears in the Blizzard FrameXML Bindings.xml, or one that is specified in an AddOn. RunBinding cannot be used
 * to call a Protected Function from insecure execution paths. By default, the key binding is executed as if the key was pressed down, in other
 * words the keystate variable will have value "down" during the binding's execution. By specifying the optional second argument
 * (the actual string "up"), the binding is instead executed as if the key was released, in other words the keystate variable will have value
 * "up" during the binding's execution
 * @see https://wow.gamepedia.com/API_RunBinding
 */
declare function RunBinding(command: string, up?: string): void;

/**
 * Writes the current in-memory key bindings to disk
 * @param bindingSafeType Can be the values 1 or 2. This value indicates whether the current key bindings set should be saved as account or character specific
 * @event UPDATE_BINDINGS
 * @see https://wow.gamepedia.com/API_SaveBindings
 */
declare function SaveBindings(bindingSafeType: WoWAPI.CurrentBindingWhich): void;

/**
 * @todo: SetBinding() ...
 */
