// JavaScript source code਍ഀഀ
var Global = {};਍⼀⼀栀㼃㼀挀氀愀猀猀㼀㼀℀⨂㼅㼀        ഀഀ
Global.$ = function (ele) {਍攀氀攀 㴀 琀礀瀀攀漀昀 ⠀攀氀攀⤀ 㴀㴀 ∀猀琀爀椀渀最∀ 㼀 搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀攀氀攀⤀ 㨀 攀氀攀㬀ഀഀ
return ele;਍紀ഀഀ
Global.getByClass = function (ele, classN, tag) {਍    攀氀攀 㴀 琀礀瀀攀漀昀 ⠀攀氀攀⤀ 㴀㴀 ∀猀琀爀椀渀最∀ 㼀 搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀攀氀攀⤀ 㨀 攀氀攀㬀ഀഀ
    var target = new RegExp("\\b" + classN + "\\b", "g");਍    瘀愀爀 爀攀猀甀氀琀 㴀 嬀崀㬀ഀഀ
    var tag = tag || "*";਍    瘀愀爀 愀氀氀 㴀 攀氀攀⸀最攀琀䔀氀攀洀攀渀琀猀䈀礀吀愀最一愀洀攀⠀琀愀最⤀㬀ഀഀ
    for (var i = 0; i < all.length; i++) {਍        椀昀 ⠀愀氀氀嬀椀崀⸀挀氀愀猀猀一愀洀攀⸀洀愀琀挀栀⠀琀愀爀最攀琀⤀⤀ 笀ഀഀ
            result.push(all[i])਍        紀ഀഀ
    }਍    爀攀琀甀爀渀 爀攀猀甀氀琀㬀ഀഀ
}਍⼀⼀㼀㼀㼀㼀挀氀愀猀猀ഀഀ
Global.addClass = function (ele, classN) {਍    瘀愀爀 挀氀愀猀猀䔀砀瀀 㴀 渀攀眀 刀攀最䔀砀瀀⠀∀尀尀戀∀ ⬀ 挀氀愀猀猀一 ⬀ ∀尀尀戀∀Ⰰ ∀最∀⤀㬀ഀഀ
    if (ele.className.match(classExp)) {਍        爀攀琀甀爀渀㬀ഀഀ
    }਍    攀氀猀攀 笀ഀഀ
        ele.className += ((ele.className.length ? " " : "") + classN);਍    紀㬀ഀഀ
}਍⼀⼀縀㼂㼀挀氀愀猀猀ഀഀ
Global.removeClass = function (ele, classN) {਍    瘀愀爀 挀氀愀猀猀䔀砀瀀 㴀 渀攀眀 刀攀最䔀砀瀀⠀∀尀尀戀∀ ⬀ 挀氀愀猀猀一 ⬀ ∀尀尀戀∀Ⰰ ∀最∀⤀㬀ഀഀ
    if (ele.className.match(classExp)) {਍        攀氀攀⸀挀氀愀猀猀一愀洀攀 㴀 攀氀攀⸀挀氀愀猀猀一愀洀攀⸀爀攀瀀氀愀挀攀⠀挀氀愀猀猀䔀砀瀀Ⰰ ∀∀⤀ഀഀ
    }਍    攀氀猀攀 笀ഀഀ
        return;਍    紀㬀ഀഀ
}਍⼀⼀㼀㼀℀㼂㼀봀㼂㼀㼀㼀ഀഀ
Global.getStyle = function (ele, styleName) {਍    爀攀琀甀爀渀 瀀愀爀猀攀䘀氀漀愀琀⠀攀氀攀⸀挀甀爀爀攀渀琀匀琀礀氀攀 㼀 攀氀攀⸀挀甀爀爀攀渀琀匀琀礀氀攀嬀猀琀礀氀攀一愀洀攀崀 㨀 最攀琀䌀漀洀瀀甀琀攀搀匀琀礀氀攀⠀攀氀攀Ⰰ 渀甀氀氀⤀嬀猀琀礀氀攀一愀洀攀崀⤀㬀ഀഀ
}਍䜀氀漀戀愀氀⸀最攀琀堀 㴀 昀甀渀挀琀椀漀渀 ⠀攀氀攀⤀ 笀ഀഀ
    var x = 0;਍    眀栀椀氀攀 ⠀攀氀攀⤀ 笀ഀഀ
        x += ele.offsetLeft;਍        攀氀攀 㴀 攀氀攀⸀漀昀昀猀攀琀倀愀爀攀渀琀㬀ഀഀ
    }਍    爀攀琀甀爀渀 ⠀砀⤀ഀഀ
}਍䜀氀漀戀愀氀⸀最攀琀夀 㴀 昀甀渀挀琀椀漀渀 ⠀攀氀攀⤀ 笀ഀഀ
    var y = 0;਍    眀栀椀氀攀 ⠀攀氀攀⤀ 笀ഀഀ
        y += ele.offsetTop;਍        攀氀攀 㴀 攀氀攀⸀漀昀昀猀攀琀倀愀爀攀渀琀㬀ഀഀ
    }਍    爀攀琀甀爀渀 ⠀礀⤀ഀഀ
}਍ഀഀ
//ajax਍䜀氀漀戀愀氀⸀愀樀愀砀 㴀 昀甀渀挀琀椀漀渀 ⠀甀爀氀Ⰰ 昀渀⤀ 笀ഀഀ
    if (window.XMLHttpRequest) {਍        瘀愀爀 堀䴀䰀䠀琀琀瀀 㴀 渀攀眀 堀䴀䰀䠀琀琀瀀刀攀焀甀攀猀琀⠀⤀㬀ഀഀ
    }਍    攀氀猀攀 笀ഀഀ
        var XMLHttp = new ActiveXObject("Microsoft,XMLHTTP");਍    紀ഀഀ
    XMLHttp.open("GET", url, true);਍    堀䴀䰀䠀琀琀瀀⸀猀攀渀搀⠀⤀㬀ഀഀ
    XMLHttp.onreadystatechange = function () {਍        椀昀 ⠀堀䴀䰀䠀琀琀瀀⸀爀攀愀搀礀匀琀愀琀攀 㴀㴀 㐀 ☀☀ 堀䴀䰀䠀琀琀瀀⸀猀琀愀琀甀猀 㴀㴀 ㈀　　⤀ 笀ഀഀ
            fn(XMLHttp.responseText);਍        紀ഀഀ
    }਍紀ഀഀ
//cookie਍䜀氀漀戀愀氀⸀挀漀漀欀椀攀 㴀 笀紀㬀ഀഀ
//????cookie਍䜀氀漀戀愀氀⸀挀漀漀欀椀攀⸀猀攀琀 㴀 昀甀渀挀琀椀漀渀 ⠀渀愀洀攀Ⰰ 瘀愀氀Ⰰ 琀椀洀攀⤀ 笀ഀഀ
    var exdate = new Date();਍    攀砀搀愀琀攀⸀猀攀琀䐀愀琀攀⠀攀砀搀愀琀攀⸀最攀琀䐀愀琀攀⠀⤀ ⬀ 琀椀洀攀⤀㬀ഀഀ
    document.cookie = name + "=" + encodeURIComponent(val) + (time ? "" : ";expires=" + exdate.toString);਍紀ഀഀ
//??ȡcookie਍䜀氀漀戀愀氀⸀挀漀漀欀椀攀⸀最攀琀 㴀 昀甀渀挀琀椀漀渀 ⠀渀愀洀攀⤀ 笀ഀഀ
    var cell = decodeURIComponent(document.cookie).split(";");਍    昀漀爀 ⠀瘀愀爀 椀 㴀 　㬀 椀 㰀 挀攀氀氀⸀氀攀渀最琀栀㬀 椀⬀⬀⤀ 笀ഀഀ
        var cookie = cell[i].split("=");਍        椀昀 ⠀渀愀洀攀 㴀㴀 挀漀漀欀椀攀嬀　崀⤀ 笀ഀഀ
            return cookie[1];਍        紀ഀഀ
    }਍紀ഀഀ
//?Ƴ?cookie਍䜀氀漀戀愀氀⸀挀漀漀欀椀攀⸀爀攀洀漀瘀攀 㴀 昀甀渀挀琀椀漀渀 ⠀渀愀洀攀⤀ 笀ഀഀ
    Global.cookie.set(name, null, -1);਍紀ഀഀ
//?˶?????਍䜀氀漀戀愀氀⸀洀漀瘀攀 㴀 昀甀渀挀琀椀漀渀⠀攀氀攀Ⰰ 樀猀漀渀Ⰰ 琀椀洀攀Ⰰ 琀礀瀀攀Ⰰ 挀愀氀氀䘀渀⤀ 笀ഀഀ
    clearTimeout(ele.timer);਍    昀漀爀 ⠀瘀愀爀 愀琀琀 椀渀 樀猀漀渀⤀ 笀ഀഀ
        var frames = time / 20;਍        瘀愀爀 挀甀爀䘀爀愀洀攀 㴀 ㄀㬀ഀഀ
        var start = Global.getStyle(ele, att);਍        昀甀渀挀琀椀漀渀 爀甀渀⠀挀甀爀䘀爀愀洀攀Ⰰ 昀爀愀洀攀猀Ⰰ 猀琀愀爀琀⤀ 笀ഀഀ
            if (curFrame < frames) {਍                挀甀爀䘀爀愀洀攀 ⬀㴀 ㄀㬀ഀഀ
                if (att == "opacity") {਍                    攀氀攀⸀猀琀礀氀攀⸀漀瀀愀挀椀琀礀 㴀 猀琀愀爀琀 ⬀ 琀礀瀀攀⠀挀甀爀䘀爀愀洀攀Ⰰ 昀爀愀洀攀猀Ⰰ ⠀樀猀漀渀嬀愀琀琀崀 ⴀ 猀琀愀爀琀⤀⤀㬀ഀഀ
                    ele.style.filter = "(opacity=" + (start + type(curFrame, frames, (json[att] - start))) * 100 + ")";਍                紀ഀഀ
                else {਍                    攀氀攀⸀猀琀礀氀攀嬀愀琀琀崀 㴀 猀琀愀爀琀 ⬀ 琀礀瀀攀⠀挀甀爀䘀爀愀洀攀Ⰰ 昀爀愀洀攀猀Ⰰ ⠀樀猀漀渀嬀愀琀琀崀 ⴀ 猀琀愀爀琀⤀⤀ ⬀ ∀瀀砀∀㬀ഀഀ
                }਍                攀氀攀⸀琀椀洀攀爀 㴀 猀攀琀吀椀洀攀漀甀琀⠀昀甀渀挀琀椀漀渀 ⠀⤀ 笀ഀഀ
                    run(curFrame, frames, start);਍                紀Ⰰ ㈀　⤀㬀ഀഀ
            }਍            攀氀猀攀 笀ഀഀ
                if (att == "opacity") {਍                    攀氀攀⸀猀琀礀氀攀⸀漀瀀愀挀椀琀礀 㴀 樀猀漀渀嬀愀琀琀崀 ⬀ ∀瀀砀∀㬀ഀഀ
                    ele.style.filter = "(opacity=" + json[att] * 100 + ")";਍                紀ഀഀ
                else {਍                    攀氀攀⸀猀琀礀氀攀嬀愀琀琀崀 㴀 樀猀漀渀嬀愀琀琀崀 ⬀ ∀瀀砀∀㬀ഀഀ
                    if (callFn) {਍                        挀愀氀氀䘀渀⠀⤀㬀ഀഀ
                    }਍                紀ഀഀ
            }਍        紀ഀഀ
        run(curFrame, frames, start);਍    紀ഀഀ
}//?˶?????਍⼀⼀㼀㼀㼀㼀㼀㼂ഀഀ
Global.move.linear=function(curFrame, frames, target) {਍    爀攀琀甀爀渀 挀甀爀䘀爀愀洀攀 ⨀ 琀愀爀最攀琀 ⼀ 昀爀愀洀攀猀㬀ഀഀ
}਍⼀⼀㼀㼀㼀뜀㼃ഀഀ
Global.move.twice= function(curFrame, frames, target) {਍    爀攀琀甀爀渀 ⠀挀甀爀䘀爀愀洀攀 ⼀㴀 昀爀愀洀攀猀⤀ ⨀ 挀甀爀䘀爀愀洀攀 ⨀ 琀愀爀最攀琀㬀ഀഀ
}਍⼀⼀㼀㼀㼀뜀㼃ഀഀ
Global.move.three= function(curFrame, frames, target) {਍    爀攀琀甀爀渀 ⠀挀甀爀䘀爀愀洀攀 ⼀㴀 昀爀愀洀攀猀⤀ ⨀ 挀甀爀䘀爀愀洀攀 ⨀ 挀甀爀䘀爀愀洀攀 ⨀ 琀愀爀最攀琀㬀ഀഀ
}਍⼀⼀猀椀渀ഀഀ
Global.move.sin1= function(curFrame, frames, target) {਍    爀攀琀甀爀渀 䴀愀琀栀⸀猀椀渀⠀挀甀爀䘀爀愀洀攀 ⼀ 昀爀愀洀攀猀 ⨀ 䴀愀琀栀⸀倀䤀 ⨀ ㌀ ⼀ 㐀⤀ ⨀ 琀愀爀最攀琀 ⨀ 䴀愀琀栀⸀猀焀爀琀⠀㈀⤀㬀ഀഀ
}਍䜀氀漀戀愀氀⸀洀漀瘀攀⸀猀椀渀㈀㴀 昀甀渀挀琀椀漀渀⠀挀甀爀䘀爀愀洀攀Ⰰ 昀爀愀洀攀猀Ⰰ 琀愀爀最攀琀⤀ 笀ഀഀ
    return (1 - Math.cos(curFrame / frames * Math.PI / 2)) * target;਍紀ഀഀ
//????਍䜀氀漀戀愀氀⸀洀漀瘀攀⸀戀漀甀渀挀攀㴀 昀甀渀挀琀椀漀渀⠀挀甀爀䘀爀愀洀攀Ⰰ 昀爀愀洀攀猀Ⰰ 琀愀爀最攀琀⤀ 笀ഀഀ
    {਍        椀昀 ⠀⠀挀甀爀䘀爀愀洀攀 ⼀㴀 昀爀愀洀攀猀⤀ 㰀 ⠀㄀ ⼀ ㈀⸀㜀㔀⤀⤀ 笀ഀഀ
            return target * (7.5625 * curFrame * curFrame);਍        紀 攀氀猀攀 椀昀 ⠀挀甀爀䘀爀愀洀攀 㰀 ⠀㈀ ⼀ ㈀⸀㜀㔀⤀⤀ 笀ഀഀ
            return target * (7.5625 * (curFrame -= (1.5 / 2.75)) * curFrame + 0.75);਍        紀 攀氀猀攀 椀昀 ⠀挀甀爀䘀爀愀洀攀 㰀 ⠀㈀⸀㔀 ⼀ ㈀⸀㜀㔀⤀⤀ 笀ഀഀ
            return target * (7.5625 * (curFrame -= (2.25 / 2.75)) * curFrame + 0.9375);਍        紀 攀氀猀攀 笀ഀഀ
            return target * (7.5625 * (curFrame -= (2.625 / 2.75)) * curFrame + 0.984375);਍        紀ഀഀ
    }਍紀ഀഀ
Global.addEvent=function(ele,eventType,handle){਍ऀ椀昀⠀攀氀攀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⤀笀ഀഀ
	ele.addEventListener(eventType,handle);਍ऀ紀ഀഀ
	else{਍ऀऀ攀氀攀⸀愀琀琀愀挀栀䔀瘀攀渀琀⠀∀漀渀∀⬀攀瘀攀渀琀吀礀瀀攀Ⰰ栀愀渀搀氀攀⤀ഀഀ
		}਍ऀ紀ഀഀ
