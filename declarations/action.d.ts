/** @noSelfInFile */

/// <reference path="global.d.ts" />
/// <reference path="ui/ui.d.ts" />

/**
 * Presses the specified FrameXML action button
 *
 * @param buttonId The button ID of the button to push
 * @see https://wow.gamepedia.com/API_ActionButtonDown
 * @private PROTECTED UI
 */
declare function ActionButtonDown(buttonId: number): void;

/**
 * Releases the specified action button
 *
 * @param buttonId The button ID of the button to release (Integers from 1 to 12)
 * @see https://wow.gamepedia.com/API_ActionButtonUp
 * @private PROTECTED UI
 */
declare function ActionButtonUp(buttonId: number): void;

/**
 * Returns true if the action has a numeric range requirement.
 *
 * @param slotId The slot ID to test
 * @returns True if the specified slot contains an action which has a numeric range requirement
 * @see https://wow.gamepedia.com/API_ActionHasRange
 */
declare function ActionHasRange(slotId: ActionBarSlotId): boolean;

/**
 * Begin "Left click" in the 3D world
 *
 * @see https://wow.gamepedia.com/API_CameraOrSelectOrMoveStart
 * @private PROTECTED
 */
declare function CameraOrSelectOrMoveStart(): void;

/**
 * End "Left click" in the 3D game world
 *
 * @param stickyFlag If present and set then any camera offset is 'sticky' and remains until explicitly cancelled
 * @see https://wow.gamepedia.com/API_CameraOrSelectOrMoveStop
 * @private PROTECTED
 */
declare function CameraOrSelectOrMoveStop(stickyFlag?: WoWAPI.Unknown): void;

/**
 * Changes the current action button to the one specified in the arguments
 *
 * @param actionBarPage Which page of your action bar to switch to. Expects an integer 1-6.
 * @see https://wow.gamepedia.com/API_ChangeActionBarPage
 * @private NOCOMBAT
 */
declare function ChangeActionBarPage(actionBarPage: ActionBarPage): void;

/**
 * Returns the index of the currently-selected action bar page
 *
 * @returns integer index of the current action bar page, ascending from 1.
 * @see https://wow.gamepedia.com/API_GetActionBarPage
 */
declare function GetActionBarPage(): ActionBarPage;

/**
 * Gets the toggle states of the extra action bars.
 *
 * @returns bottomLeftState, bottomRightState, sideRightState, sideRight2State
 * @see https://wow.gamepedia.com/API_GetActionBarToggles
 * @tupleReturn
 */
declare function GetActionBarToggles(): [boolean, boolean, boolean, boolean];

/**
 * Returns information about the charges of a charge-accumulating player ability
 *
 * @param slotId The action slot to retrieve data from
 * @returns currentCharges, maxCharges, cooldownStart, cooldownDuration, chargeModRate
 * @see https://wow.gamepedia.com/API_GetActionCharges
 * @tupleReturn
 */
declare function GetActionCharges(slotId: ActionBarSlotId): [number, number, number, number, number];

/**
 * Retrieves the cooldown data of the action specified
 *
 * @param slotId The action slot to retrieve data from
 * @returns start, duration, enable, modRate
 * @see https://wow.gamepedia.com/API_GetActionCooldown
 * @tupleReturn
 */
declare function GetActionCooldown(slotId: ActionBarSlotId): [number, number, number, number];

/**
 * Gets the available count for an action, if applicable
 *
 * @param slotId The action slot to retrieve data from
 * @returns The action's count as displayed on the action's icon; e.g. for a potion action, returns the number of potions left.
 * 0, if the action has no count or if the specified action slot is empty
 * @see https://wow.gamepedia.com/API_GetActionCount
 */
declare function GetActionCount(slotId: ActionBarSlotId): string | number;

/**
 * Returns information about a specific action
 *
 * @param slotId Action slot to retrieve information about.
 * @returns actionType, id, subType
 * @see https://wow.gamepedia.com/API_GetActionInfo
 * @tupleReturn
 */
declare function GetActionInfo(slotId: ActionBarSlotId): [string, WoWAPI.Unknown, WoWAPI.Unknown];

/**
 * Gets the text label for an action
 *
 * @param slotId Action slot to retrieve information about
 * @returns The action's text, if present. Macro actions use their names for their action text. nil, if the slot has no action text,
 * or is empty. Most standard WoW action icons don't have action text
 * @see https://wow.gamepedia.com/API_GetActionText
 */
declare function GetActionText(slotId: ActionBarSlotId): string | null;

/**
 * Returns the filepath for an action's texture
 *
 * @param slotId Action slot to retrieve information about
 * @returns The texture filepath for the action's icon image. nil, if the slot is empty
 * @see https://wow.gamepedia.com/API_GetActionTexture
 */
declare function GetActionTexture(slotId: ActionBarSlotId): WoWAPI.TexturePath | null;

/**
 * Returns the current bonus action bar index
 *
 * @returns The current bonus action bar index
 * @see https://wow.gamepedia.com/API_GetBonusBarOffset
 */
declare function GetBonusBarOffset(): number;

/**
 * Returns the name of the button responsible causing the OnClick handler to fire
 *
 * @returns name of the button responsible for the innermost OnClick event. For example, "LeftButton"
 * @see https://wow.gamepedia.com/API_GetMouseButtonClicked
 */
declare function GetMouseButtonClicked(): WoWAPI.MouseButton;

/**
 * Tests if an action slot is occupied
 *
 * @param slotId The tested action slot
 * @returns 1, if the slot contains an action. nil, if the slot is empty
 * @see https://wow.gamepedia.com/API_HasAction
 */
declare function HasAction(slotId: ActionBarSlotId): WoWAPI.Flag | null;

/**
 * Returns whether an action is in range for use
 *
 * @param slotId The action slot to test
 * @returns nil if the slot has no action, or if the action cannot be used on the current target; 0 if the action is out of range, and 1 otherwise
 * @see https://wow.gamepedia.com/API_IsActionInRange
 */
declare function IsActionInRange(slotId: ActionBarSlotId): WoWAPI.Flag | null;

/**
 * Determine whether action slot is an attack action
 *
 * @param slotId The action slot to test
 * @returns nil if the specified slot is not an attack action, or is empty. 1 if the slot is an attack action and should flash red during combat
 * @see https://wow.gamepedia.com/API_IsAttackAction
 */
declare function IsAttackAction(slotId: ActionBarSlotId): WoWAPI.Flag | null;

/**
 * Determine whether action slot is auto repeating
 *
 * @param slotId The action slot to test
 * @returns 1 if the action in the slot is currently auto-repeating, nil if it is not auto-repeating or the slot is empty
 * @see https://wow.gamepedia.com/API_IsAutoRepeatAction
 */
declare function IsAutoRepeatAction(slotId: ActionBarSlotId): WoWAPI.Flag | null;

/**
 * Determine whether an action is currently executing
 *
 * @param slotId action slot ID to query.
 * @returns 1 if the action in the slot is currently executing, nil otherwise
 * @see https://wow.gamepedia.com/API_IsCurrentAction
 */
declare function IsCurrentAction(slotId: ActionBarSlotId): WoWAPI.Flag | null;

/**
 * Tests if the action is linked to a consumable item
 *
 * @param slotId The tested action slot
 * @returns True if the action in the specified slot is linked to a consumable, e.g. a potion action. Consumable actions have a small number
 * displayed in the bottom right corner of their action icon. False if the action is not consumable or if the action is empty
 * @see https://wow.gamepedia.com/API_IsConsumableAction
 */
declare function IsConsumableAction(slotId: ActionBarSlotId): boolean;

/**
 * An equip action is created if you drag a weapon from the Inventory to an action bar slot. If you click this action to
 * equip the weapon, the action icon will obtain a green outline. It is in this case that IsEquippedAction() returns 1.
 * All other cases (e.g. empty slot, non-equip action, equip action is of the current weapon but hasn't been used yet) will return nil.
 *
 * @param slotId The tested action
 * @returns 1 if the specified action is an action that equips a weapon and if the action has been used to equip the current weapon. nil otherwise
 * @see https://wow.gamepedia.com/API_IsEquippedAction
 */
declare function IsEquippedAction(slotId: ActionBarSlotId): WoWAPI.Flag | null;

/**
 * Determine if an action can be used (you have sufficient mana, reagents and the action is not on cooldown).
 *
 * @param slotId Action slot to query
 * @returns isUsable, notEnoughMana
 * @see https://wow.gamepedia.com/API_IsUsableAction
 * @tupleReturn
 */
declare function IsUsableAction(slotId: ActionBarSlotId): [boolean, boolean];

/**
 * Determine if player has a pet with an action bar.
 *
 * @returns nil if the player has no pet (or the pet has no action bar), 1 if a pet action bar should be shown
 * @see https://wow.gamepedia.com/API_PetHasActionBar
 */
declare function PetHasActionBar(): WoWAPI.Flag | null;

/**
 * Pick up an action for drag-and-drop
 *
 * @param slotId The action slot to pick the action up from
 * @see https://wow.gamepedia.com/API_PickupAction
 * @private PROTECTED NOCOMBAT
 */
declare function PickupAction(slotId: ActionBarSlotId): void;

/**
 * Pick up a pet action for drag-and-drop
 *
 * @param petSlotId The pet action slot to pick the action up from (1-10).
 * @see https://wow.gamepedia.com/API_PickupPetAction
 * @private PROTECTED NOCOMBAT
 */
declare function PickupPetAction(petSlotId: SlotActionBarPet): void;

/**
 * Place the drag-and-drop item as an action
 *
 * @param slotId The action slot to place the action into.
 * @see https://wow.gamepedia.com/API_PlaceAction
 */
declare function PlaceAction(slotId: ActionBarSlotId): void;

/**
 * Set the desired state of the extra action bars
 *
 * @param bottomLeftState 1 if the left-hand bottom action bar is to be shown, 0 or nil otherwise.
 * @param bottomRightState 1 if the right-hand bottom action bar is to be shown, 0 or nil otherwise.
 * @param sideRightState 1 if the first (outer) right side action bar is to be shown, 0 or nil otherwise.
 * @param sideRight2State 1 if the second (inner) right side action bar is to be shown, 0 or nil otherwise
 * @param alwaysShow 1 if the bars are always shown, 0 or nil otherwise.
 * @see https://wow.gamepedia.com/API_SetActionBarToggles
 */
// tslint:disable-next-line max-line-length
declare function SetActionBarToggles(bottomLeftState: WoWAPI.Flag, bottomRightState: WoWAPI.Flag, sideRightState: WoWAPI.Flag, sideRight2State: WoWAPI.Flag, alwaysShow: WoWAPI.Flag): void;

/**
 * Begin "Right click" in the 3D game world.
 *
 * @see https://wow.gamepedia.com/API_TurnOrActionStart
 * @private PROTECTED
 */
declare function TurnOrActionStart(): void;

/**
 * End "Right click" in the 3D game world
 *
 * @see https://wow.gamepedia.com/API_TurnOrActionStop
 * @private PROTECTED
 */
declare function TurnOrActionStop(): void;

/**
 * Perform the action in the specified action slot
 *
 * @param slot The action action slot to use
 * @param checkCursor Can be 0, 1, or nil. Appears to indicate whether the action button was clicked (1) or used via hotkey (0);
 * probably involved in placing skills/items in the action bar after they've been picked up. I can confirm this. If you pass 0 for checkCursor,
 * it will use the action regardless of whether another item/skill is on the cursor. If you pass 1 for checkCursor,
 * it will replace the spell/action on the slot with the new one.
 * @param onSelf Can be 0, 1, or nil. If present and 1, then the action is performed on the player, not the target. If "true" is passed instead
 * of 1, Blizzard produces a Lua error.
 * @private PROTECTED
 */
declare function UseAction(slot: ActionBarSlotId, checkCursor?: WoWAPI.Flag, onSelf?: WoWAPI.Flag): void;
