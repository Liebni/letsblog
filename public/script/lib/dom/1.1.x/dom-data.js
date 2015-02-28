/*!
 * JRaiser 2 Javascript Library
 * dom-data - v1.1.0 (2015-01-30T14:37:23+0800)
 * http://jraiser.org/ | Released under MIT license
 */
define("dom/1.1.x/dom-data",["base/1.0.x/","dom/1.1.x/dom-base",null],function(e){"use strict";function n(e){var n=new u(e||{});return s.add(n),n}function t(e,n){return f.get(e,n)}function r(e,n,t){f.set(e,n,t)}function i(e,n){null==n?f.clear(e):n.forEach(function(n){f.remove(e,n)})}var a=e("base/1.0.x/"),o=e("./dom-base"),c=function(){function e(e){return o.isWindow(e)||!o.isNode(e)?2:null==e||1!==e.nodeType&&9!==e.nodeType?0:o.isXMLNode(e)||t[e.nodeName]?2:1}function n(e){if(e[r])try{delete e[r]}catch(n){e[r]=null}}var t={OBJECT:!0,EMBED:!0,APPLET:!0},r="_jraiser_nodeid_"+ +new Date+"_",i=0,a={};return{get:function(n,t){var o;switch(e(n)){case 1:o=n[r],o||t||(o=n[r]=new Number(++i));break;case 2:for(var c in a)if(a[c]===n){o=c;break}o||t||(o=++i,a[o]=n)}return o?o.valueOf():void 0},remove:function(t){switch(e(t)){case 1:n(t);break;case 2:for(var r in a)if(a[r]===t){delete a[r];break}}}}}(),s=function(){var e=[];return{add:function(n){return e.push(n)-1},clear:function(n){for(var t=e.length-1;t>=0;t--)e[t].clear(n)},clone:function(n,t){for(var r=e.length-1;r>=0;r--)e[r].clone(n,t)}}}(),u=a.createClass(function(e){this._space={},this._cloneable=e.cloneable!==!1,this._onClone=e.onClone},{_findData:function(e){return this._space[c.get(e,!0)]},keys:function(e){var n=this._findData(e),t=[];if(n)for(var r in n)n.hasOwnProperty(r)&&t.push(r);return t},get:function(e,n){var t=this._findData(e);return t&&t.hasOwnProperty(n)?t[n]:void 0},set:function(e,n,t){var r=c.get(e);if(r){var i=this._space;i[r]||(i[r]={}),i[r][n]=t}},remove:function(e,n){var t=this._findData(e);t&&(delete t[n],a.isEmptyObject(t)&&this.clear(e))},clear:function(e){delete this._space[c.get(e,!0)]},clone:function(e,n){if(this._cloneable){var t=this._findData(n);if(t){var r=c.get(e),i=this._space[r]=this._space[r]||{};for(var a in t)t.hasOwnProperty(a)&&(i[a]=t[a]);this._onClone&&this._onClone(e,n)}}}}),f=n();return{createDataSpace:n,clearAll:function(e){s.clear(e),c.remove(e)},cloneAll:function(e,n){return s.clone(e,n)},removeUniqueId:function(e){c.remove(e)},shortcuts:{data:function(e,n){return o.access(this,e,n,!0,{get:t,set:r})},removeData:function(e){return null!=e&&(e=o.splitBySpace(e)),this.forEach(function(n){i(n,e)}),this}}}});