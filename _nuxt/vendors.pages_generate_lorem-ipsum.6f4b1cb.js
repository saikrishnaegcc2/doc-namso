(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{192:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"capitalize",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"isNode",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"isReactNative",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"isWindows",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"makeArrayOfLength",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"makeArrayOfStrings",{enumerable:!0,get:function(){return l.default}});var r=m(n(227)),o=m(n(228)),c=m(n(229)),d=m(n(230)),f=m(n(232)),l=m(n(233));function m(e){return e&&e.__esModule?e:{default:e}}},194:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WORDS=void 0;t.WORDS=["ad","adipisicing","aliqua","aliquip","amet","anim","aute","cillum","commodo","consectetur","consequat","culpa","cupidatat","deserunt","do","dolor","dolore","duis","ea","eiusmod","elit","enim","esse","est","et","eu","ex","excepteur","exercitation","fugiat","id","in","incididunt","ipsum","irure","labore","laboris","laborum","Lorem","magna","minim","mollit","nisi","non","nostrud","nulla","occaecat","officia","pariatur","proident","qui","quis","reprehenderit","sint","sit","sunt","tempor","ullamco","ut","velit","veniam","voluptate"]},222:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoremIpsum",{enumerable:!0,get:function(){return c.default}}),t.loremIpsum=void 0;var r,o=n(194),c=(r=n(223))&&r.__esModule?r:{default:r};t.loremIpsum=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.count,n=void 0===t?1:t,r=e.format,d=void 0===r?"plain":r,f=e.paragraphLowerBound,l=void 0===f?3:f,m=e.paragraphUpperBound,v=void 0===m?7:m,h=e.random,P=e.sentenceLowerBound,O=void 0===P?5:P,y=e.sentenceUpperBound,_=void 0===y?15:y,w=e.units,R=void 0===w?"sentences":w,M=e.words,S=void 0===M?o.WORDS:M,j=e.suffix,A=void 0===j?"":j,I={random:h,sentencesPerParagraph:{max:v,min:l},words:S,wordsPerSentence:{max:_,min:O}},L=new c.default(I,d,A);switch(R){case"paragraphs":case"paragraph":return L.generateParagraphs(n);case"sentences":case"sentence":return L.generateSentences(n);case"words":case"word":return L.generateWords(n);default:return""}}},223:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=n(224),c=n(225),d=(r=n(226))&&r.__esModule?r:{default:r},f=n(192);function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.FORMAT_PLAIN,r=arguments.length>2?arguments[2]:void 0;if(l(this,e),v(this,"generator",void 0),v(this,"format",void 0),v(this,"suffix",void 0),-1===o.FORMATS.indexOf(n.toLowerCase()))throw new Error("".concat(n," is an invalid format. Please use ").concat(o.FORMATS.join(" or "),"."));this.format=n.toLowerCase(),this.suffix=r,this.generator=new d.default(t)}var t,n,r;return t=e,(n=[{key:"getLineEnding",value:function(){return this.suffix?this.suffix:!(0,f.isReactNative)()&&(0,f.isNode)()&&(0,f.isWindows)()?c.LINE_ENDINGS.WIN32:c.LINE_ENDINGS.POSIX}},{key:"formatString",value:function(e){return this.format===o.FORMAT_HTML?"<p>".concat(e,"</p>"):e}},{key:"formatStrings",value:function(e){var t=this;return e.map((function(e){return t.formatString(e)}))}},{key:"generateWords",value:function(e){return this.formatString(this.generator.generateRandomWords(e))}},{key:"generateSentences",value:function(e){return this.formatString(this.generator.generateRandomParagraph(e))}},{key:"generateParagraphs",value:function(e){var t=this.generator.generateRandomParagraph.bind(this.generator);return this.formatStrings((0,f.makeArrayOfStrings)(e,t)).join(this.getLineEnding())}}])&&m(t.prototype,n),r&&m(t,r),e}();t.default=h},224:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FORMATS=t.FORMAT_PLAIN=t.FORMAT_HTML=void 0;t.FORMAT_HTML="html";t.FORMAT_PLAIN="plain";var r=["html","plain"];t.FORMATS=r},225:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LINE_ENDINGS=void 0;t.LINE_ENDINGS={POSIX:"\n",WIN32:"\r\n"}},226:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(194),o=n(192);function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.sentencesPerParagraph,o=void 0===n?{max:7,min:3}:n,d=t.wordsPerSentence,l=void 0===d?{max:15,min:5}:d,m=t.random,v=(t.seed,t.words),h=void 0===v?r.WORDS:v;if(c(this,e),f(this,"sentencesPerParagraph",void 0),f(this,"wordsPerSentence",void 0),f(this,"random",void 0),f(this,"words",void 0),o.min>o.max)throw new Error("Minimum number of sentences per paragraph (".concat(o.min,") cannot exceed maximum (").concat(o.max,")."));if(l.min>l.max)throw new Error("Minimum number of words per sentence (".concat(l.min,") cannot exceed maximum (").concat(l.max,")."));this.sentencesPerParagraph=o,this.words=h,this.wordsPerSentence=l,this.random=m||Math.random}var t,n,l;return t=e,(n=[{key:"generateRandomInteger",value:function(e,t){return Math.floor(this.random()*(t-e+1)+e)}},{key:"generateRandomWords",value:function(e){var t=this,n=this.wordsPerSentence,r=n.min,c=n.max,d=e||this.generateRandomInteger(r,c);return(0,o.makeArrayOfLength)(d).reduce((function(e,n){return"".concat(t.pluckRandomWord()," ").concat(e)}),"").trim()}},{key:"generateRandomSentence",value:function(e){return"".concat((0,o.capitalize)(this.generateRandomWords(e)),".")}},{key:"generateRandomParagraph",value:function(e){var t=this,n=this.sentencesPerParagraph,r=n.min,c=n.max,d=e||this.generateRandomInteger(r,c);return(0,o.makeArrayOfLength)(d).reduce((function(e,n){return"".concat(t.generateRandomSentence()," ").concat(e)}),"").trim()}},{key:"pluckRandomWord",value:function(){var e=this.words.length-1,t=this.generateRandomInteger(0,e);return this.words[t]}}])&&d(t.prototype,n),l&&d(t,l),e}();t.default=l},227:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){var t=e.trim();return t.charAt(0).toUpperCase()+t.slice(1)};t.default=r},228:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(){return!!e.exports};t.default=r},229:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(){return"undefined"!=typeof navigator&&"ReactNative"===navigator.product};t.default=r},230:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(231),o=function(){return void 0!==e&&e.platform===r.SUPPORTED_PLATFORMS.WIN32};t.default=o}).call(this,n(80))},231:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SUPPORTED_PLATFORMS=void 0;t.SUPPORTED_PLATFORMS={DARWIN:"darwin",LINUX:"linux",WIN32:"win32"}},232:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return Array.apply(null,Array(e)).map((function(e,t){return t}))};t.default=r},233:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(192),o=function(e,t){return(0,r.makeArrayOfLength)(e).map((function(){return t()}))};t.default=o}}]);