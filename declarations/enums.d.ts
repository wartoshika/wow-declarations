declare namespace Enum {

    enum SubscriptionInterstitialResponseType {
        Clicked = 0,
        Closed = 1,
        WebRedirect = 2,
    }

    enum AnimaDiversionNodeState {
        Unavailable = 0,
        Available = 1,
        SelectedTemporary = 2,
        SelectedPermanent = 3,
        Cooldown = 4,
    }

    enum CovenantType {
        None = 0,
        Kyrian = 1,
        Venthyr = 2,
        NightFae = 3,
        Necrolord = 4,
    }

    enum CovenantAbilityType {
        Class = 0,
        Signature = 1,
        Soulbind = 2,
    }

    enum GarrTalentFeatureSubtype {
        Generic = 0,
        Bastion = 1,
        Revendreth = 2,
        Ardenweald = 3,
        Maldraxxus = 4,
    }

    enum RuneforgePowerFilter {
        All = 0,
        Available = 1,
        Unavailable = 2
    }

    enum SoulbindConduitType {
        Finesse = 0,
        Potency = 1,
        Endurance = 2,
        Flex = 3,
    }

    enum SoulbindNodeState {
        Unavailable = 0,
        Unselected = 1,
        Selectable = 2,
        Selected = 3,
    }

    enum SoulbindConduitTransactionType {
        Install = 0,
        Uninstall = 1
    }

    enum InventoryType {
        IndexNonEquipType = 0,
        IndexHeadType = 1,
        IndexNeckType = 1,
        IndexShoulderType = 3,
        IndexBodyType = 4,
        IndexChestType = 5,
        IndexWaistType = 6,
        IndexLegsType = 7,
        IndexFeetType = 8,
        IndexWristType = 9,
        IndexHandType = 10,
        IndexFingerType = 11,
        IndexTrinketType = 12,
        IndexWeaponType = 13,
        IndexShieldType = 14,
        IndexRangedType = 15,
        IndexCloakType = 16,
        Index2HWeaponType = 17,
        IndexBagType = 18,
        IndexTabardType = 19,
        IndexRobeType = 20,
        IndexWeaponmainhandType = 21,
        IndexWeaponoffhandType = 22,
        IndexHoldableType = 23,
        IndexAmmoType = 24,
        IndexThrownType = 25,
        IndexRangedrightType = 26,
        IndexQuiverType = 27,
        IndexRelicType = 28,
    }

    enum ItemQuality {
        Poor = 0,
        Common = 1,
        Uncommon = 2,
        Rare = 3,
        Epic = 4,
        Legendary = 5,
        Artifact06,
        Heirloom = 7,
        WoWToken = 8,
    }

    enum ItemInteractionFrameType {
        CleanseCorruption = 0
    }

    enum MapCanvasPosition {
        None = 0,
        BottomLeft = 1,
        BottomRight = 2,
        TopLeft = 3,
        TopRight = 4
    }
}
