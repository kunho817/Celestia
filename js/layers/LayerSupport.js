//업그레이드 잠금 상태 - Title
function UpgradeLockTitle(layer, previd, title){
    if(hasUpgrade(layer, previd))
        return title
    else
        return "Locked<br>"
}

//업그레이드 잠금 상태 - Description
function UpgradeLockDesc(layer, previd, desc){
    if(hasUpgrade(layer, previd))
        return desc
    else
        return "Buy <b>"+tmp[layer].upgrades[previd].title+"</b> to unlock"
}

//업그레이드 잠금 상태 - Style
function UpgradeLockStyle(layer, previd){
    if(!hasUpgrade(layer, previd)){
        return {
            'border-style':'dashed',
            'border-color':'white',
            'border-size':'2px',
            'background-color':'black',
            'color':'white',
        }
    }
}

function LockedCost(layer, previd, cost){
    return (!hasUpgrade(layer, previd))?decimalInf:cost
}