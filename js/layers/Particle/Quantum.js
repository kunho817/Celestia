addLayer("q",{
    //레이어 정보
    name: "Quantum",
    symbol: "Q",
    color: "#2EA127",
    position: 0,
    row: 0,

    // 변수 선언
    startData(){ return{
        unlocked: true,
        points : decimalZero,
    }},

    //레이어 자원 정보
    requires: new Decimal(10),
    resource: "Quantum energy",
    baseResource: "points",
    baseAmount(){ return player.points },
    type: "normal",
    exponent: 0.5,
    
    //자원 습득량 관련 정보
    gainMult(){
        mult = decimalOne
        return mult
    },
    gainExp(){
        let exp = decimalOne
        return exp
    },

    // LINE-INFO: 업그레이드
    //#region 업그레이드
    upgrades: {
        11:{
            title:"In to the Realm",
            description:"Start generating Prima<br>",

            cost:new Decimal(1),
            // 다른 레이어의 자원 쓸때 사용
            //currencyDisplayName : "Quantum Theory",
            //currencyInternalName : "qt",
            //currencyLocation(){ return player.q },

            //effect(){},
            effectDisplay(){
                return format(getPointGen())+" Prima/s"
            },

            //onPurchase(){},

            //style:{},
            //tooltip:{},

            //unlocked(){ return true },
        },

        12:{
            title(){
                return UpgradeLockTitle('q', 11, "Quantum Resonance")
            },
            description(){
                return UpgradeLockDesc('q', 11, "Quantum Energy boost Prima gain<br><br>Currently : "+format(upgradeEffect('q', 12))+"x")
            },

            cost(){return LockedCost('q', 11, 2)},

            effect(){
                return player.q.points.add(1).log(12).add(1)
            },
            
            style(){
                return UpgradeLockStyle('q', 11)
            },
        },

        13:{
            title(){ return UpgradeLockTitle('q', 12, "Prima Resonance") },
            description(){ return UpgradeLockDesc('q', 12, "Prima boost Prima gain<br><br>Currently : "+format(upgradeEffect('q', 13))+"x") },

            cost(){return LockedCost('q', 11, 5)},

            effect(){
                return player.points.add(1).log(50).add(1)
            },

            style(){ return UpgradeLockStyle('q', 12) },
        },
    },
    //#endregion
    // LINE-INFO: 마일스톤
    //#region 마일스톤
    milestones:{

    },
    //#endregion
    // LINE-INFO: Clickable
    //#region 클릭
    clickables:{

    },
    //#endregion
    // LINE-INFO: Buyable
    //#region 지속 구매
    buyables:{

    },
    //#endregion
    // LINE-INFO: MicorTab
    
    microtabs: {
        Main: {
            "Realm": {
                content: [
                    "blank",
                    ["column", [
                        ["row", [["upgrade", 13]]],
                        ["row", [["upgrade", 12]]],
                        ["row", [["upgrade", 11]]],
                    ]],
                ],
                
            },
            "Lab": {
                content: [

                ],
                unlocked(){return false},
            }
        },
        LTab:{

        }
    },
    

    // LINE-INFO: 탭(Or SubTab) 레이아웃
    tabFormat:[
        "main-display",
        "prestige-button",
        "blank",
        ["microtabs", "Main"],
    ],

    //Hotkey
    hotkeys: [
        {key: "q", description: "Q: Reset for Quantum", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],

    //LayerShown
    layerShown(){return true},
})