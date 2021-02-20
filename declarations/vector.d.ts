declare namespace WoWAPI {

    /**
     * @see https://wow.gamepedia.com/Vector2DMixin
     */
    interface Vector2D {

        /**
         * compares to vectors for equalness
         * @param other
         * @see https://www.townlong-yak.com/framexml/live/go/Vector2DMixin:IsEqualTo
         * @since 7.2.0 (2017-03-28)
         */
        IsEqualTo(other: Vector2D): boolean;

        /**
         * returns x and y coordinate from the vector
         * @see https://www.townlong-yak.com/framexml/live/go/Vector2DMixin:GetXY
         * @returns x and y
         * @since 7.2.0 (2017-03-28)
         */
        GetXY(): [number, number];

        /**
         * sets x and y coordinate
         * @see https://www.townlong-yak.com/framexml/live/go/Vector2DMixin:SetXY
         * @since 7.2.0 (2017-03-28)
         */
        SetXY(x: number, y: number): void;

        /**
         * multiplies x and y by the given scale number
         * @see https://www.townlong-yak.com/framexml/live/go/Vector2DMixin:ScaleBy
         * @since 7.2.0 (2017-03-28)
         */
        ScaleBy(scale: number): void;

        /**
         * divides x and y by the given number
         * @see https://www.townlong-yak.com/framexml/live/go/Vector2DMixin:DivideBy
         * @since 7.2.0 (2017-03-28)
         */
        DivideBy(scale: number): void;

        /**
         * adds another vector to the current
         * @see https://www.townlong-yak.com/framexml/live/go/Vector2DMixin:Add
         * @since 7.2.0 (2017-03-28)
         */
        Add(other: Vector2D): void;

        /**
         * subtracts another vector from the current
         * @see https://www.townlong-yak.com/framexml/live/go/Vector2DMixin:Subtract
         * @since 7.2.0 (2017-03-28)
         */
        Subtract(other: Vector2D): void;

        /**
         * cross products the given vector into the current one
         * @see https://www.townlong-yak.com/framexml/live/go/Vector2DMixin:Cross
         * @since 7.2.0 (2017-03-28)
         */
        Cross(other: Vector2D): void;

        /**
         * dot products the given vector into the current one
         * @see https://www.townlong-yak.com/framexml/live/go/Vector2DMixin:Dot
         * @since 7.2.0 (2017-03-28)
         */
        Dot(other: Vector2D): void;

        /**
         * tests if the current vector is zero
         * @see https://www.townlong-yak.com/framexml/live/go/Vector2DMixin:IsZero
         * @since 9.0.1 (2020-10-13)
         */
        IsZero(): boolean;

        /**
         * get the squared magnitude (length) of the vector
         * @see https://www.townlong-yak.com/framexml/live/go/Vector2DMixin:GetLengthSquared
         * @since 7.2.0 (2017-03-28)
         */
        GetLengthSquared(): number;

        /**
         * get the magnitude (length) of the vector
         * @see https://www.townlong-yak.com/framexml/live/go/Vector2DMixin:GetLength
         * @since 7.2.0 (2017-03-28)
         */
        GetLength(): number;

        /**
         * normalizes the current vector
         * @see https://www.townlong-yak.com/framexml/live/go/Vector2DMixin:Normalize
         * @since 7.2.0 (2017-03-28)
         */
        Normalize(): void;

        /**
         * rotates the vector by the given amount of radians
         * @see https://www.townlong-yak.com/framexml/live/go/Vector2DMixin:RotateDirection
         * @since 8.0.1 (2018-07-17)
         */
        RotateDirection(rotationRadians: number): void;

        /**
         * Clones this vector into a new instance
         * @see https://www.townlong-yak.com/framexml/live/go/Vector2DMixin:Clone
         * @since 7.2.0 (2017-03-28)
         */
        Clone(): Vector2D;
    }
}

/**
 * creates a new two dimensional vector from the given x and y coordinates
 * @param x x value
 * @param y y value
 * @see https://www.townlong-yak.com/framexml/live/go/CreateVector2D
 * @since 7.2.0 (2017-03-28)
 */
declare function CreateVector2D(x: number, y: number): WoWAPI.Vector2D;

/**
 * checks if the two given vectors are considered equal
 * @param first the first vector
 * @param second the second vector
 * @see https://www.townlong-yak.com/framexml/live/go/AreVector2DEqual
 * @since 7.2.0 (2017-03-28)
 */
declare function AreVector2DEqual(first: WoWAPI.Vector2D, second: WoWAPI.Vector2D): boolean;
