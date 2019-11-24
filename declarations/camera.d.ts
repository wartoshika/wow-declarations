/** @noSelfInFile */

/**
 * Begin "Left click" in the 3D world
 * @protected
 * @deprecated
 * @see https://wow.gamepedia.com/API_CameraOrSelectOrMoveStart
 */
declare function CameraOrSelectOrMoveStart(): void;

/**
 * End "Left click" in the 3D game world
 * @param stickyFlag If present and set then any camera offset is 'sticky' and remains until explicitly cancelled
 * @protected
 * @deprecated
 * @see https://wow.gamepedia.com/API_CameraOrSelectOrMoveStop
 */
declare function CameraOrSelectOrMoveStop(stickyFlag?: boolean): void;

/**
 * Zooms the camera into the viewplane
 * @param increment float increment
 * @description Zooms the camera into the viewplane by increment. The increment must be between 0.0 and 50 with 0.0 indicating no
 * zoom relative to current view and 50 being maximum zoom. From a completely zoomed out position, an increment of 50 will result in
 * a first person camera angle
 * @see https://wow.gamepedia.com/API_CameraZoomIn
 */
declare function CameraZoomIn(increment: number): void;

/**
 * Zooms the camera out of the viewplane
 * @param increment float increment
 * @description Zooms the camera out of the viewplane by increment. The increment must be between 0.0 and the max camera distance.
 * As of patch 1.9.0 if the 'Interface Options > Advanced Options > Max Camera Distance' setting is set to Low, then the largest
 * value for increment is 15. If this setting is set to High, then the largest value for increment is 30. You can test for the max camera
 * distance by zooming in to first person and counting the number of times you can call this function with increment set to 1.0 and still zoom out
 * @see https://wow.gamepedia.com/API_CameraZoomOut
 */
declare function CameraZoomOut(increment: number): void;

/**
 * Rotates the camera about the Z-axis
 * @param angle float angle
 * @description Rotates the camera about the Z-axis by the angle amount specified in degrees
 * @see https://wow.gamepedia.com/API_FlipCameraYaw
 */
declare function FlipCameraYaw(angle: number): void;

/**
 * Gets the current zoom level of the camera
 * @returns float, the currently set zoom level
 * @description Doesn't take camera collisions with the environment into account and will return what the camera would be at. If the
 * camera is in motion, the zoom level that is set that frame is used, not the zoom level that the camera is traveling to.
 * @see https://wow.gamepedia.com/API_GetCameraZoom
 */
declare function GetCameraZoom(): number;

/**
 * For checking whether mouselook mode is currently active
 * @returns true if mouselook mode is active, false otherwise
 * @see https://wow.gamepedia.com/API_IsMouselooking
 */
declare function IsMouselooking(): boolean;

/**
 * Enters mouse look mode, during which mouse movement is used to alter the character's movement/facing direction
 * @see https://wow.gamepedia.com/API_MouselookStart
 */
declare function MouselookStart(): void;

/**
 * Exits mouse look mode; allows mouse input to move the mouse cursor
 * @see https://wow.gamepedia.com/API_MouselookStop
 */
declare function MouselookStop(): void;

/**
 * Begins rotating the camera down around your character
 * - Speed is a multiplier on the CVar 'cameraPitchMoveSpeed', which is in degrees/second
 * - If speed is omitted, it is assumed to be 1.0.
 * - Negative numbers go the opposite way, a speed of 0.0 will stop it.
 * - This is not canceled by moving your character or interacting with the camera
 * - Applying a negative speed is not the same as using the other function to go the opposite way, both vectors are applied
 * simultaneously. If you rotate both ways equally, it will appear to stop, but the rotations are still being applied, though canceling each other
 * @param speed Speed at which to begin rotating
 * @see https://wow.gamepedia.com/API_MoveViewDownStart
 */
declare function MoveViewDownStart(speed: number): void;

/**
 * Stops rotating the camera Down
 * @see https://wow.gamepedia.com/API_MoveViewDownStop
 */
declare function MoveViewDownStop(): void;

/**
 * Begins zooming the camera in
 * - Speed is a multiplier on the CVar 'cameraZoomSpeed', which is in increments/second. A zoom increment appears to be about a yard from the character
 * - If speed is omitted, it is assumed to be 1.0
 * - Negative numbers go the opposite way, a speed of 0.0 will stop it.
 * - This is not canceled by moving your character, but is canceled by using the mousewheel to zoom
 * - Applying a negative speed is not the same as using the other function to go the opposite way, both vectors are applied
 * simultaneously. If you zoom both ways equally, it will appear to stop, but the rotations are still being applied, though canceling each other
 * @param speed Speed at which to begin zooming
 * @see https://wow.gamepedia.com/API_MoveViewInStart
 */
declare function MoveViewInStart(speed: number): void;

/**
 * Stops moving the camera In
 * @see https://wow.gamepedia.com/API_MoveViewInStop
 */
declare function MoveViewInStop(): void;

/**
 * Begins rotating the camera to the left around your character
 * - Speed is a multiplier on the CVar 'cameraYawMoveSpeed', which is in degrees/second
 * - If speed is omitted, it is assumed to be 1.0
 * - Negative numbers go the opposite way, a speed of 0.0 will stop it.
 * - This is not canceled by moving your character or interacting with the camera
 * - Applying a negative speed is not the same as using the other function to go the opposite way, both vectors are applied simultaneously.
 * If you zoom both ways equally, it will appear to stop, but the rotations are still being applied, though canceling each other
 * @param speed Speed at which to begin rotating
 * @see https://wow.gamepedia.com/API_MoveViewLeftStart
 */
declare function MoveViewLeftStart(speed: number): void;

/**
 * Stops rotating the camera to the Left
 * @see https://wow.gamepedia.com/API_MoveViewLeftStop
 */
declare function MoveViewLeftStop(): void;

/**
 * Begins zooming the camera out
 * - Speed is a multiplier on the CVar 'cameraZoomSpeed', which is in increments/second. A zoom increment appears to be about a yard from the character
 * - If speed is omitted, it is assumed to be 1.0
 * - Negative numbers go the opposite way, a speed of 0.0 will stop it
 * - This is not canceled by moving your character, but is canceled by using the mousewheel to zoom
 * - Applying a negative speed is not the same as using the other function to go the opposite way, both vectors are applied simultaneously.
 * If you zoom both ways equally, it will appear to stop, but the rotations are still being applied, though canceling each other
 * @param speed Speed at which to begin zooming
 * @see https://wow.gamepedia.com/API_MoveViewOutStart
 */
declare function MoveViewOutStart(speed: number): void;

/**
 * Stops moving the camera out
 * @see https://wow.gamepedia.com/API_MoveViewOutStop
 */
declare function MoveViewOutStop(): void;

/**
 * Begins rotating the camera to the right around your character
 * - Speed is a multiplier on the CVar 'cameraYawMoveSpeed', which is in degrees/second
 * - If speed is omitted, it is assumed to be 1.0.
 * - Negative numbers go the opposite way, a speed of 0.0 will stop it
 * - This is not canceled by moving your character or interacting with the camera
 * - Applying a negative speed is not the same as using the other function to go the opposite way, both vectors are applied simultaneously.
 * If you rotate both ways equally, it will appear to stop, but the rotations are still being applied, though canceling each other
 * @param speed Speed at which to begin rotating
 * @see https://wow.gamepedia.com/API_MoveViewRightStart
 */
declare function MoveViewRightStart(speed: number): void;

/**
 * Stops rotating the camera to the Right
 * @see https://wow.gamepedia.com/API_MoveViewRightStop
 */
declare function MoveViewRightStop(): void;

/**
 * Begins rotating the camera up around your character
 * - Speed is a multiplier on the CVar 'cameraPitchMoveSpeed', which is in degrees/second
 * - If speed is omitted, it is assumed to be 1.0
 * - Negative numbers go the opposite way, a speed of 0.0 will stop it
 * - This is not canceled by moving your character or interacting with the camera
 * - Applying a negative speed is not the same as using the other function to go the opposite way, both vectors are applied simultaneously.
 * If you rotate both ways equally, it will appear to stop, but the rotations are still being applied, though canceling each other
 * @param speed Speed at which to begin rotating
 * @see https://wow.gamepedia.com/API_MoveViewUpStart
 */
declare function MoveViewUpStart(speed: number): void;

/**
 * Stops rotating the camera Up
 * @see https://wow.gamepedia.com/API_MoveViewUpStop
 */
declare function MoveViewUpStop(): void;

/**
 * unknown
 * @param args unknown
 * @protected
 * @deprecated
 */
declare function PitchDownStart(...args: WoWAPI.Unknown[]): void;

/**
 * unknown
 * @param args unknown
 * @protected
 * @deprecated
 */
declare function PitchDownStop(...args: WoWAPI.Unknown[]): void;

/**
 * unknown
 * @param args unknown
 * @protected
 * @deprecated
 */
declare function PitchUpStart(...args: WoWAPI.Unknown[]): void;

/**
 * unknown
 * @param args unknown
 * @protected
 * @deprecated
 */
declare function PitchUpStop(...args: WoWAPI.Unknown[]): void;

/**
 * Cycles forward through the five predefined camera positions
 */
declare function NextView(): void;

/**
 * Cycles backward through the five predefined camera positions
 */
declare function PrevView(): void;

/**
 * Resets the specified (1-5) predefined camera position to it's default if it was changed using SaveView(index)
 * @param index the index set to
 */
declare function ResetView(index: 1 | 2 | 3 | 4 | 5): void;

/**
 * Saves a camera angle for later retrieval with SetView. The last position loaded is stored in the CVar cameraView
 * @param viewIndex The index (2-5) to save the camera angle to. (1 is reserved for first person view)
 * @see https://wow.gamepedia.com/API_SaveView
 */
declare function SaveView(viewIndex: 2 | 3 | 4 | 5): void;

/**
 * Sets a camera perspective from one previously saved with SaveView. The last position loaded is stored in the CVar cameraView
 * @param viewIndex The view index (1-5) to return to (1 is always first person, and cannot be saved with SaveView)
 * @see https://wow.gamepedia.com/API_SetView
 */
declare function SetView(viewIndex: 1 | 2 | 3 | 4 | 5): void;
