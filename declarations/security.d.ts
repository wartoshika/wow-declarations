/** @noSelfInFile */

/// <reference path="global.d.ts" />

/**
 * Determines whether the current execution path is secure
 *
 * @returns 1 if the current path is secure (and able to call protected functions), nil otherwise.
 * @see https://wow.gamepedia.com/API_issecure
 */
declare function issecure(): WoWAPI.Flag;

/**
 * Taints the current execution path.
 *
 * @see https://wow.gamepedia.com/API_forceinsecure
 * @since 3.0.2
 */
declare function forceinsecure(): void;

/**
 * Determines whether the given table key is secure
 *
 * @param table table to check the the key in; if omitted, defaults to the globals table (_G).
 * @param variableName string key to check the taint of. Numbers will be converted to a string; other types will throw an error
 * @returns isSecure, taint
 * @see https://wow.gamepedia.com/API_issecurevariable
 * @tupleReturn
 */
declare function issecurevariable(table?: object, variableName?: string): [boolean, string];

/**
 * Calls the specified function without propagating taint to the caller
 *
 * @param call function to call, either a direct reference or a string used as a key into _G.
 * @param args any number of arguments to pass the function
 * @returns the function's return values
 * @see https://wow.gamepedia.com/API_securecall
 */
declare function securecall(call: string | ((...args: any[]) => any), ...args: any[]): any;

/**
 * Creates a secure "post hook" for the specified function. Your hook will be called with the same arguments after the original call is performed
 *
 * @param table Table to hook the functionName key in; if omitted, defaults to the global table (_G).
 * @param functionName name of the function being hooked
 * @param handler your hook function
 * @see https://wow.gamepedia.com/API_hooksecurefunc
 */
declare function hooksecurefunc(table?: object, functionName?: string, handler?: (...args: any[]) => any): void;

/**
 * Determines whether in-combat lockdown restrictions are active
 *
 * @returns true if lockdown restrictions are currently in effect, false otherwise
 * @see https://wow.gamepedia.com/API_InCombatLockdown
 */
declare function InCombatLockdown(): boolean;
