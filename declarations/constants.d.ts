/** @noSelfInFile */

declare const MAX_PLAYER_LEVEL_TABLE: {
    LE_EXPANSION_CLASSIC: 60,
    LE_EXPANSION_BURNING_CRUSADE: 70,
    LE_EXPANSION_WRATH_OF_THE_LICH_KING: 80,
    LE_EXPANSION_CATACLYSM: 85,
    LE_EXPANSION_MISTS_OF_PANDARIA: 90,
    LE_EXPANSION_WARLORDS_OF_DRAENOR: 100,
    LE_EXPANSION_LEGION: 110,
    LE_EXPANSION_BATTLE_FOR_AZEROTH: 120,
    LE_EXPANSION_9_0: 120,
    LE_EXPANSION_10_0: 120,
    LE_EXPANSION_11_0: 120
};

declare const NPE_TUTORIAL_COMPLETE_LEVEL = 10;

declare const NORMAL_FONT_COLOR_CODE = "|cffffd200";
declare const HIGHLIGHT_FONT_COLOR_CODE = "|cffffffff";
declare const RED_FONT_COLOR_CODE = "|cffff2020";
declare const GREEN_FONT_COLOR_CODE = "|cff20ff20";
declare const GRAY_FONT_COLOR_CODE = "|cff808080";
declare const YELLOW_FONT_COLOR_CODE = "|cffffff00";
declare const LIGHTYELLOW_FONT_COLOR_CODE = "|cffffff9a";
declare const ORANGE_FONT_COLOR_CODE = "|cffff7f3f";
declare const ACHIEVEMENT_COLOR_CODE = "|cffffff00";
declare const BATTLENET_FONT_COLOR_CODE = "|cff82c5ff";
declare const DISABLED_FONT_COLOR_CODE = "|cff7f7f7f";
declare const FONT_COLOR_CODE_CLOSE = "|r";

declare const FACTION_BAR_COLORS: {
    1: { r: .8, g: .3, b: .22 },
    2: { r: .8, g: .3, b: .22 },
    3: { r: .75, g: .27, b: 0 },
    4: { r: .9, g: .7, b: 0 },
    5: { r: 0, g: .6, b: .1 },
    6: { r: 0, g: .7, b: .1 },
    7: { r: 0, g: .7, b: .1 },
    8: { r: 0, g: .7, b: .1 }
};

declare const WORLD_QUEST_ICONS_BY_PROFESSION: {
    129: "worldquest-icon-firstaid",
    164: "worldquest-icon-blacksmithing",
    165: "worldquest-icon-leatherworking",
    171: "worldquest-icon-alchemy",
    182: "worldquest-icon-herbalism",
    186: "worldquest-icon-mining",
    202: "worldquest-icon-engineering",
    333: "worldquest-icon-enchanting",
    755: "worldquest-icon-jewelcrafting",
    773: "worldquest-icon-inscription",
    794: "worldquest-icon-archaeology",
    356: "worldquest-icon-fishing",
    185: "worldquest-icon-cooking",
    197: "worldquest-icon-tailoring",
    393: "worldquest-icon-skinning"
};

declare const CHAT_FONT_HEIGHTS: {
    1: 12,
    2: 14,
    3: 16,
    4: 18
};

declare const MATERIAL_TEXT_COLOR_TABLE: {
    "Default": [.18, .12, .06],
    "Stone": [1, 1, 1],
    "Parchment": [.18, .12, .06],
    "Marble": [0, 0, 0],
    "Silver": [.12, .12, .12],
    "Bronze": [.18, .12, .06],
    "ParchmentLarge": [.141, 0, 0]
};

declare const MATERIAL_TITLETEXT_COLOR_TABLE: {
    "Default": [0, 0, 0],
    "Stone": [.93, .82, 0],
    "Parchment": [0, 0, 0],
    "Marble": [.93, .82, 0],
    "Silver": [.93, .82, 0],
    "Bronze": [.93, .82, 0],
    "ParchmentLarge": [.208, 0, 0]
};

declare const CLASS_SORT_ORDER: [
    "WARRIOR", "DEATHKNIGHT", "PALADIN", "MONK", "PRIEST", "SHAMAN", "DRUID",
    "ROGUE", "MAGE", "WARLOCK", "HUNTER", "DEMONHUNTER"
];

declare const SCHOOL_MASK_NONE = 0x00;
declare const SCHOOL_MASK_PHYSICAL = 0x01;
declare const SCHOOL_MASK_HOLY = 0x02;
declare const SCHOOL_MASK_FIRE = 0x04;
declare const SCHOOL_MASK_NATURE = 0x08;
declare const SCHOOL_MASK_FROST = 0x10;
declare const SCHOOL_MASK_SHADOW = 0x20;
declare const SCHOOL_MASK_ARCANE = 0x40;

declare const LOOT_ROLL_TYPE_PASS = 0;
declare const LOOT_ROLL_TYPE_NEED = 1;
declare const LOOT_ROLL_TYPE_GREED = 2;
declare const LOOT_ROLL_TYPE_DISENCHANT = 3;

declare const INVSLOT_AMMO = 0;
declare type INVSLOT_AMMO = 0;
declare const INVSLOT_HEAD = 1;
declare type INVSLOT_HEAD = 1;
declare const INVSLOT_NECK = 2;
declare type INVSLOT_NECK = 2;
declare const INVSLOT_SHOULDER = 3;
declare type INVSLOT_SHOULDER = 3;
declare const INVSLOT_BODY = 4;
declare type INVSLOT_BODY = 4;
declare const INVSLOT_CHEST = 5;
declare type INVSLOT_CHEST = 5;
declare const INVSLOT_WAIST = 6;
declare type INVSLOT_WAIST = 6;
declare const INVSLOT_LEGS = 7;
declare type INVSLOT_LEGS = 7;
declare const INVSLOT_FEET = 8;
declare type INVSLOT_FEET = 8;
declare const INVSLOT_WRIST = 9;
declare type INVSLOT_WRIST = 9;
declare const INVSLOT_HAND = 10;
declare type INVSLOT_HAND = 10;
declare const INVSLOT_FINGER1 = 11;
declare type INVSLOT_FINGER1 = 11;
declare const INVSLOT_FINGER2 = 12;
declare type INVSLOT_FINGER2 = 12;
declare const INVSLOT_TRINKET1 = 13;
declare type INVSLOT_TRINKET1 = 13;
declare const INVSLOT_TRINKET2 = 14;
declare type INVSLOT_TRINKET2 = 14;
declare const INVSLOT_BACK = 15;
declare type INVSLOT_BACK = 15;
declare const INVSLOT_MAINHAND = 16;
declare type INVSLOT_MAINHAND = 16;
declare const INVSLOT_OFFHAND = 17;
declare type INVSLOT_OFFHAND = 17;
declare const INVSLOT_RANGED = 18;
declare type INVSLOT_RANGED = 18;
declare const INVSLOT_TABARD = 19;
declare type INVSLOT_TABARD = 19;

declare const DIFFICULTY_DUNGEON_NORMAL = 1;
declare const DIFFICULTY_DUNGEON_HEROIC = 2;
declare const DIFFICULTY_RAID10_NORMAL = 3;
declare const DIFFICULTY_RAID25_NORMAL = 4;
declare const DIFFICULTY_RAID10_HEROIC = 5;
declare const DIFFICULTY_RAID25_HEROIC = 6;
declare const DIFFICULTY_RAID_LFR = 7;
declare const DIFFICULTY_DUNGEON_CHALLENGE = 8;
declare const DIFFICULTY_RAID40 = 9;
declare const DIFFICULTY_PRIMARYRAID_NORMAL = 14;
declare const DIFFICULTY_PRIMARYRAID_HEROIC = 15;
declare const DIFFICULTY_PRIMARYRAID_MYTHIC = 16;
declare const DIFFICULTY_PRIMARYRAID_LFR = 17;

declare const NUM_CHAT_WINDOWS: number;

declare namespace WoWAPI {
    type InventoryId = INVSLOT_AMMO | INVSLOT_HEAD | INVSLOT_NECK | INVSLOT_SHOULDER | INVSLOT_BODY | INVSLOT_CHEST |
        INVSLOT_WAIST | INVSLOT_LEGS | INVSLOT_FEET | INVSLOT_WRIST | INVSLOT_HAND | INVSLOT_FINGER1 | INVSLOT_FINGER2 | INVSLOT_TRINKET1 |
        INVSLOT_TRINKET2 | INVSLOT_BACK | INVSLOT_MAINHAND | INVSLOT_OFFHAND | INVSLOT_RANGED | INVSLOT_TABARD;
}
