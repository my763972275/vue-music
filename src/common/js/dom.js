export function addClass(el,className){
    if(hasClass(el,className)){
        return
    }
    let newClass = el.className.split(' ')
    newClass.push(className)
    el.className = newClass.join(' ')
}

// 判断是否存在标签
export function hasClass(el,className){
    let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
    return reg.test(el.className)
}

export function getData(el, name, val) {
    const prefix = 'data-'
    if (val) {
      return el.setAttribute(prefix + name, val)
    }
    return el.getAttribute(prefix + name)
}

let elementStyle = document.createElement('div').style

let vendor = (() => {
    let transformNames = {
        webkit:'webkitTransform',
        Mox:'MozTransform',
        O:'OTransform',
        ms:'msTransform',
        standard:'transform'
    }
    for(let key in transformNames){
        if(elementStyle[transformNames]){
            return key
        }
    }
    return false
})()

export function prefixStyle(style){
    if(vendor == false){
        return false
    }
    if(vendor == 'standard'){
        return style
    }
    return vendor + style.charAt(0).toUpperCase()+style.substr(1)
}