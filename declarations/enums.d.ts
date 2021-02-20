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
        Unavailable  = 0,
        Unselected = 1,
        Selectable = 2,
        Selected = 3,
    }

    enum SoulbindConduitTransactionType {
        Install = 0,
        Uninstall = 1
    }
}
