/*
addLayer("p", {
    name: "prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "P", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#4BDC13",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "prestige points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true}
})
*/

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

    // NOTE: 업그레이드 관련 코드
    //#region 업그레이드
    upgrades: {
        11:{
            title:"11",
            description:"generate Prima",

            cost:new Decimal(1),
            /* 다른 레이어의 자원 쓸때 사용
            currencyDisplayName : "",
            currencyInternalName : "".
            currencyLocation(){ return player.points },
            */

            //effect(){},
            //effectDisplay(){},

            //onPurchase(){},

            //style:{},
            //tooltip:{},

            //unlocked(){ return true },
        },
    },
    //#endregion

    //#region 마일스톤
    milestones:{

    },
    //#endregion

    //#region 클릭
    clickables:{

    },
    //#endregion

    //#region 지속 구매
    buyables:{

    },
    //#endregion

    // NOTE: 탭 레이아웃 / 추가 탭
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
