/*
document.querySelector(".box")
<div class=​"box">​Hey I am a box​</div>​

document.querySelector(".box").innerHTML
'Hey I am a box'

document.querySelector(".container").innerHTML
'\n        <div class="box">Hey I am a box</div>\n    '

document.querySelector(".box").innerText
'Hey I am a box'

document.querySelector(".container").innerText
'Hey I am a box'

document.querySelector(".container").innerText
'Hey I am a box\nHey I am a box'

document.querySelector(".container").outerHTML
'<div class="container">\n        <div class="box">Hey I am a box</div>\n        <div class="box">Hey I am a box</div>\n    </div>'

document.querySelector(".container").tagName
'DIV'

document.querySelector(".container").nodeName
'DIV'

document.querySelector(".container").textContent
'\n        Hey I am a box\n        Hey I am a box\n    '

document.querySelector(".container").hidden
false

document.querySelector(".container").hidden = true
true

document.querySelector(".box").hasAttribute("style")
true

document.querySelector(".box").getAttribute("style")
'display: flex;'

document.querySelector(".box").setAttribute("style", "display: inline")
undefined

document.querySelector(".box").attributes

document.querySelector(".box").removeAttribute("style")
undefined

document.designMode = "on"
'on'

document.querySelector(".box").dataset
DOMStringMap {createdby: 'Harry', conceptby: 'Rohan'}

document.querySelector(".container").classList
DOMTokenList(3) ['container', 'red', 'bg-green', value: 'container red bg-green']
document.querySelector(".container").className
'container red bg-green'
document.querySelector(".container").classList.add("harry")
undefined
document.querySelector(".container").classList.remove("harry")
undefined
document.querySelector(".container").classList.remove("red")
undefined
document.querySelector(".container").classList.add("red")
undefined
document.querySelector(".container").classList.add("red")
undefined
document.querySelector(".container").classList.add("red")
undefined

document.querySelector(".container").classList.toggle("red")
false
document.querySelector(".container").classList.toggle("red")
true

*/