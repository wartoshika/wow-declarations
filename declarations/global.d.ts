/** @noSelfInFile */

declare type EXPANSION_CLASSIC = 0;
declare type EXPANSION_BURNING_CRUSADE = 1;
declare type EXPANSION_WRATH_OF_THE_LICH_KING = 2;
declare type EXPANSION_CATACLYSM = 3;
declare type EXPANSION_MISTS_OF_PANDARIA = 4;
declare type EXPANSION_WARLORDS_OF_DRAENOR = 5;
declare type EXPANSION_LEGION = 6;
declare type EXPANSION_BATTLE_FOR_AZEROTH = 7;

declare namespace WoWAPI {
    type Unknown = any;
    type UnknownStringKeyTable = { [anyKey: string]: any };
    type UnknownNumberKeyTable = { [anyKey: number]: any };

    type Flag = 0 | 1;

    /**
     * a texture can be a path to a blp file or a number as fileID
     */
    type TexturePath = string | number;

    /**
     * the base type for all clickable ingame links in the chat
     */
    type Hyperlink = string;

    /**
     * TYPES THAT SHOULD BE STORED SEPERATLY!!!!
     */

    type CombatTextType = "DAMAGE" | "SPELL_DAMAGE" | "DAMAGE_CRIT" | "HEAL" | "PERIODIC_HEAL" | "HEAL_CRIT" | "MISS" |
        "DODGE" | "PARRY" | "BLOCK" | "RESIST" | "SPELL_RESISTED" | "ABSORB" | "SPELL_ABSORBED" | "MANA" | "ENERGY" | "RAGE" | "FOCUS" |
        "SPELL_ACTIVE" | "COMBO_POINTS" | "AURA_START" | "AURA_END" | "AURA_START_HARMFUL" | "AURA_END_HARMFUL" | "HONOR_GAINED" | "FACTION";

    type CombatCriticalIndicator = "CRITICAL" | "CRUSHING" | "GLANCING";

    type CombatDamageType = 1 | 2 | 4 | 8 | 16 | 32 | 64;

    type DisenchantRollType = 1 | 2 | 3;

    type Difficulty = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22
        | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34;

    type StreamingState = 0 | 1 | 2 | 3;

    type VehicleType = "Natural" | "Mechanical" | "VehicleMount" | "VehicleMount_Organic" | "";

    type UnitPowerType = "MANA" | "RAGE" | "ENERGY" | "FOCUS" | "HAPPINESS" | "RUNIC_POWER" | "HOLY_POWER";

    type SpellTreeId = 1 | 2 | 3 | 4 | 5 | 6 | 7;
}

declare type ActionBarPage1 = 1;
declare type ActionBarPage2 = 2;
declare type ActionBarPage3 = 3;
declare type ActionBarPage4 = 4;
declare type ActionBarPage5 = 5;
declare type ActionBarPage6 = 6;
declare type ActionBarPage = ActionBarPage1 | ActionBarPage2 | ActionBarPage3 | ActionBarPage4 | ActionBarPage5 | ActionBarPage6;

declare type SlotActionBarPet = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
declare type SlotActionBarPage1 = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
declare type SlotActionBarPage2 = 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24;
declare type SlotActionBarPage3 = 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36;
declare type SlotActionBarPage4 = 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48;
declare type SlotActionBarPage5 = 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60;
declare type SlotActionBarPage6 = 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72;
declare type SlotActionBarMisc = 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 | 81 | 82 | 83 | 84 | 85 | 86 | 87 | 88 | 89 | 90 |
                                 91 | 92 | 93 | 94 | 95 | 96 | 97 | 98 | 99 | 100 | 101 | 102 | 103 | 104 | 105 | 106 | 107 | 108 | 109 | 110 | 111 |
                                 112 | 113 | 114 | 115 | 116 | 117 | 118 | 119 | 120;
declare type SlotActionBarPossess = 121 | 122 | 123 | 124 | 125 | 126 | 127 | 128 | 129 | 130 | 131 | 132;
declare type ActionBarSlotId = SlotActionBarPage1 | SlotActionBarPage2 | SlotActionBarPage3 | SlotActionBarPage4 |
                               SlotActionBarPage5 | SlotActionBarPage6 | SlotActionBarMisc | SlotActionBarPossess;
