/** @noSelfInFile */

declare const CR_DEFENSE_SKILL = 2;
declare const CR_DODGE = 3;
declare const CR_PARRY = 4;
declare const CR_BLOCK = 5;
declare const CR_HIT_MELEE = 6;
declare const CR_HIT_RANGED = 7;
declare const CR_HIT_SPELL = 8;
declare const CR_CRIT_MELEE = 9;
declare const CR_CRIT_RANGED = 10;
declare const CR_CRIT_SPELL = 11;
declare const CR_MULTISTRIKE = 12;
declare const CR_READINESS = 13;
declare const CR_SPEED = 14;
declare const COMBAT_RATING_RESILIENCE_CRIT_TAKEN = 15;
declare const COMBAT_RATING_RESILIENCE_PLAYER_DAMAGE_TAKEN = 16;
declare const CR_LIFESTEAL = 17;
declare const CR_HASTE_MELEE = 18;
declare const CR_HASTE_RANGED = 19;
declare const CR_HASTE_SPELL = 20;
declare const CR_AVOIDANCE = 21;
declare const CR_WEAPON_SKILL_RANGED = 23;
declare const CR_EXPERTISE = 24;
declare const CR_ARMOR_PENETRATION = 25;
declare const CR_MASTERY = 26;
declare const CR_VERSATILITY_DAMAGE_DONE = 29;
declare const CR_VERSATILITY_DAMAGE_TAKEN = 31;

declare namespace WoWAPI {
    type CombatRatingIdentifier = 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 23 | 24 | 25 | 26 | 29 | 31;
}

/**
 * Returns attack power granted by particular amount of a particular stat
 * @param statIndex Index of the stat (Strength, Agility, ...) to check the bonus AP of
 * @param amount Amount of the stat to check the AP value of
 * @returns Amount of attack power granted by the specified amount of the specified stat
 * @see https://wow.gamepedia.com/API_GetAttackPowerForStat
 */
declare function GetAttackPowerForStat(statIndex: number, amount: number): number;

/**
 * Player's block chance in percentage
 * @see https://wow.gamepedia.com/API_GetBlockChance
 */
declare function GetBlockChance(): number;

/**
 * Returns the number of points of a specific combat rating the player has
 * @param combatRatingIdentifier A combat rating identifier from PaperDollFrame.lua
 * @see https://wow.gamepedia.com/API_GetCombatRating
 */
declare function GetCombatRating(combatRatingIdentifier: WoWAPI.CombatRatingIdentifier): number;

/**
 * Returns the bonus, in percent (or other converted units, such as skill points), of a specific combat rating for the player
 * @param combatRatingIdentifier A combat rating identifier from PaperDollFrame.lua
 * @see https://wow.gamepedia.com/API_GetCombatRatingBonus
 */
declare function GetCombatRatingBonus(combatRatingIdentifier: WoWAPI.CombatRatingIdentifier): number;

/**
 * Returns the player's critical hit chance
 * @returns The player's melee critical hit chance, as a percentage; e.g. 5.3783211 corresponding to a ~5.38% crit chance
 * @see https://wow.gamepedia.com/API_GetCritChance
 */
declare function GetCritChance(): number;

/**
 * Returns the player's dodge change
 * @see https://wow.gamepedia.com/API_GetDodgeChance
 */
declare function GetDodgeChance(): number;

/**
 * Returns the player's expertise percentage for main hand, offhand and ranged attacks
 * - **arg1**: Expertise percentage for swings with your main hand weapon
 * - **arg2**: Expertise percentage for swings with your offhand weapon
 * - **arg3**: Expertise percentage for your ranged weapon
 * @description Expertise reduces the chance that the player's attacks are dodged or parried by an enemy.
 * This function returns the amount of percentage points Experise reduces the dodge/parry chance by (e.g. a return value of 3.5 means a
 * 3.5% reduction to both dodge and parry probabilities).
 * @see https://wow.gamepedia.com/API_GetExpertise
 * @tupleReturn
 */
declare function GetExpertise(): [number, number, number];

/**
 * Returns the player's haste
 */
declare function GetHaste(): number;

/**
 * Returns the amount of Melee Hit %, not from Melee Hit Rating, that your character has
 * @returns hit modifier (e.g. 16 for 16%)
 * @see https://wow.gamepedia.com/API_GetHitModifier
 */
declare function GetHitModifier(): number;

/**
 * Gets the player's current mana regeneration rates (in mana per 1 seconds).
 * - **arg1**: mana regeneration when not casting spells
 * - **arg2**: mana regeneration while casting spells
 * @see https://wow.gamepedia.com/API_GetManaRegen
 * @tupleReturn
 */
declare function GetManaRegen(): [number, number];

/**
 * Returns the (raw) mastery of the player
 * @returns sum of player's base and rating bonus mastery
 * @description Mastery does not suffer diminishing returns, but the value returns by GetMastery is not, necessarily, your final Mastery value.
 * Different classes, in different forms, can have a multiplier performed against the value returned by GetMastery. To find your true Mastery,
 * and the multiplier factor used to calculate it, see GetMasteryEffect
 * @see https://wow.gamepedia.com/API_GetMastery
 */
declare function GetMastery(): number;

/**
 * Returns the effect of player's current Mastery
 * - **arg1**: Current effect of the player's mastery, typically a damage increase percentage, or a percentage chance to trigger some
 * specialization-specific effect
 * - **arg2**: A spec-dependent coefficient multiplied onto the player's raw mastery effect (as returned by GetMastery) to yield the actual
 * effect of the mastery
 * @see https://wow.gamepedia.com/API_GetMasteryEffect
 * @since 5.0.4
 * @tupleReturn
 */
declare function GetMasteryEffect(): [number, number];

/**
 * unknown
 * @param combatRatingIdentifier unknown
 */
declare function GetMaxCombatRatingBonus(combatRatingIdentifier: WoWAPI.CombatRatingIdentifier): WoWAPI.Unknown;

/**
 * Returns player's Melee attack haste
 */
declare function GetMeleeHaste(): WoWAPI.Unknown;

/**
 * unknown
 */
declare function GetModResilienceDamageReduction(): WoWAPI.Unknown;

/**
 * unknown
 */
declare function GetOverrideAPBySpellPower(): WoWAPI.Unknown;

/**
 * unknown
 */
declare function GetOverrideSpellPowerByAP(...args: WoWAPI.Unknown[]): WoWAPI.Unknown;

/**
 * Player's parry chance in percentage
 * @see https://wow.gamepedia.com/API_GetParryChance
 */
declare function GetParryChance(): number;

/**
 * unknown
 */
declare function GetPetMeleeHaste(): WoWAPI.Unknown;

/**
 * unknown
 */
declare function GetPetSpellBonusDamage(): WoWAPI.Unknown;

/**
 * unknown
 */
declare function GetPowerRegenForPowerType(powerType: WoWAPI.UnitPowerType): WoWAPI.Unknown;

/**
 * The players critical strike chance with the currently equipped range weapon as a floating point figure
 * @description If you are displaying this figure in a UI element and want it to update, hook to the UNIT_INVENTORY_CHANGED and
 * SPELLS_CHANGED events as well as any other that effect equipment and buffs
 * @see https://wow.gamepedia.com/API_GetRangedCritChance
 */
declare function GetRangedCritChance(): number;

/**
 * Returns the percentage of damage blocked by your shield
 * @returns the percentage of damage reduced your shield
 * @see https://wow.gamepedia.com/API_GetShieldBlock
 */
declare function GetShieldBlock(): number;

/**
 * Returns the raw spell damage bonus of the player for a given spell tree
 * @param spellTreeId the spell tree
 * - 1 for Physical
 * - 2 for Holy
 * - 3 for Fire
 * - 4 for Nature
 * - 5 for Frost
 * - 6 for Shadow
 * - 7 for Arcane
 * @see https://wow.gamepedia.com/API_GetSpellBonusDamage
 */
declare function GetSpellBonusDamage(spellTreeId: WoWAPI.SpellTreeId): number;

/**
 * Returns the raw bonus healing of the player
 * @returns The raw bonus healing of the player
 * @see https://wow.gamepedia.com/API_GetSpellBonusHealing
 */
declare function GetSpellBonusHealing(): number;

/**
 * Returns the amount of Spell Hit %, not from Spell Hit Rating, that your character has
 * @returns hit modifier (e.g. 16 for 16%)
 * @see https://wow.gamepedia.com/API_GetSpellHitModifier
 * @since 4.0.1
 */
declare function GetSpellHitModifier(): number;

/**
 * unknown
 */
declare function GetSpellPenetration(): WoWAPI.Unknown;
