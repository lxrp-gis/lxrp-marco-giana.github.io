var elementHead =  top.document.getElementsByTagName('head')[0];
var elementStyle = document.createElement("style");
var layerCSS = '.esri-icon-non-visible::before {content: "\\e610"!important;}';
layerCSS += '.esri-icon-visible::before {content: "\\e611"!important;}';
elementStyle .type = "text/css";
elementHead.appendChild(elementStyle);
elementStyle.innerHTML = layerCSS;
console.log(elementHead);