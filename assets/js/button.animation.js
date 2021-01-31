(function(window){
    if ('ontouchstart' in window) document.body.addEventListener('touchstart', show, false)
    document.body.addEventListener('mousedown', show, false)
})(window)

function show(e){
    var element = null
    var target = e.target || e.srcElement

    while(target.parentElement !== null){
        if(target.classList.contains('wave-effect')){
            element = target
            break
        }
        target = target.parentElement
    }

    if(element === null) return false

    var wave = document.createElement('div')
    wave.className = 'wave'
    element.appendChild(wave)

    var position = getRelativeEventPostion(element, e)
    var radius = getRadius(element, position)
    var scale = 'scale(1)'

    wave.style.top = (position.y - radius) + 'px'
    wave.style.left = (position.x - radius) + 'px'
    wave.style.width = (radius * 2) + 'px'
    wave.style.height = (radius * 2) + 'px'
    wave.style.transform = scale

    element.addEventListener('mouseup', hide, false)
    element.addEventListener('mouseleave', hide, false)
    
    if('ontouchstart' in window) document.body.addEventListener('touchend', hide, false)
}

function getRelativeEventPostion(element, e){
    var offset = {
        top: element.getBoundingClientRect().top + window.pageYOffset - element.clientTop,
        left: element.getBoundingClientRect().left + window.pageXOffset - element.clientLeft
    }

    return {
        y: e.pageY - offset.top,
        x: e.pageX - offset.left
    }
}

function getRadius(element, position){
    var w = Math.max(position.x, element.clientWidth - position.x)
    var h = Math.max(position.y, element.clientHeight - position.y)

    return Math.ceil(Math.sqrt(Math.pow(w, 2) + Math.pow(h, 2)))
}

function hide(e){
    var element = this
    
    var wave = null
    var waves = element.getElementsByClassName('wave')

    if(0 === waves.length) return false

    wave = waves[waves.length - 1]
    wave.style.opacity = 0

    setTimeout(function(){
        try {
            element.removeChild(wave)
        } catch(e){ return false }
    }, 2000)
}