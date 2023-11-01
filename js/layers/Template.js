addLayer("s",{
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
        34:{
            title:"Initialize Qauntum",
            description:"Start generating Prima<br>",

            cost:new Decimal(1),
            /* 다른 레이어의 자원 쓸때 사용
            currencyDisplayName : "",
            currencyInternalName : "".
            currencyLocation(){ return player.points },
            */

            //effect(){},
            effectDisplay(){
                return format(getPointGen())+" Prima/s"
            },

            //onPurchase(){},

            //style:{},
            //tooltip:{},

            //unlocked(){ return true },
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
    /*
    microtabs: {
        stuff: {
            "Realm": {
                content: [tab format things],
                *subtab features*
            },
            "Foam": {
                content: [tab format things],
                *subtab features*
            }
        },
    },
    */

    // LINE-INFO: 탭(Or SubTab) 레이아웃
    tabFormat:[
        "main-display",
        "prestige-button",
        "blank",
        "upgrades",
    ],

    //Hotkey
    hotkeys: [
        {key: "q", description: "Q: Reset for Quantum", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],

    //LayerShown
    layerShown(){return true},
})