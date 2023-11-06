//Opacity 수치 변경용 함수
function UpgOpac(mainop, opch){
    return (mainop-opch <= 0)?0:mainop-opch
}

//업그레이드 효과 Format 단순화
function getFormatUpgEffect(target, mant=2){
    return format(upgradeEffect(target.layer, target.id), mant)
}

//업그레이드 잠금
function OpenUpg(layer, id){
    return tmp[layer].upgrades[id].OpenUpg && !tmp[layer].upgrades[id].Locked
}

function UnUpg(layer, id){
    if (!player[layer].unlocked) return
	if (!tmp[layer].upgrades[id].OpenUpg) return
    if(tmp[layer].upgrades[id].unlocked) return
    let upg = tmp[layer].upgrades[id]
    if(!upg.unlockUpg) return
    upg.unlocked = true
}

function LockedUpgStyle(isLock){
    if(isLock){
        return {
            'border-style':'dashed',
            'border-color':'white',
            'border-size':'2px',
            'background-color':'black',
            'color':'white',
        }
    }else{
        return {
            'border-style':'dashed',
            'border-color':'black',
            'border-size':'2px',
            'background-color':'white',
            'color':'black',
        }
    }
}