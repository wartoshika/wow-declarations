/** @noSelfInFile */

/**
 * Passes its arguments to the current print output handler. By default, this will output them all to the default chat frame
 *
 * @param args any number of any type of values
 * @see https://wow.gamepedia.com/API_print
 */
declare function print(...args: any[]): void;

/**
 * Returns the function currently handling print() output
 *
 * @returns Current function responsible for outputting values passed to the print() function
 * @see https://wow.gamepedia.com/API_getprinthandler
 */
declare function getprinthandler(): (...args: any[]) => any;

/**
 * Sets a new print() output handler function
 *
 * @param handler The function that will be called with all of print(...)'s arguments when print(...) is called.
 * This function is responsible for converting the values into a form it can present to the user
 * @see https://wow.gamepedia.com/API_setprinthandler
 */
declare function setprinthandler(handler: (...args: any[]) => any): void;

/**
 * Wipes a table of all contents
 *
 * @param table The table to be cleared
 * @see https://wow.gamepedia.com/API_wipe
 */
declare function wipe<T extends object>(table: T): T;
