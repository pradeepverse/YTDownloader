function parse_str(e,t){var n,r,i,l,f,o,c,s,h,p,u,a,d,g=String(e).replace(/^&/,"").replace(/&$/,"").split("&"),y=g.length,b=function(e){return decodeURIComponent(e.replace(/\+/g,"%20"))};for(t||(t=this.window),n=0;n<y;n++){for(h=b((s=g[n].split("="))[0]),p=s.length<2?"":b(s[1]);" "===h.charAt(0);)h=h.slice(1);if(h.indexOf("\0")>-1&&(h=h.slice(0,h.indexOf("\0"))),h&&"["!==h.charAt(0)){for(a=[],u=0,r=0;r<h.length;r++)if("["!==h.charAt(r)||u){if("]"===h.charAt(r)&&u&&(a.length||a.push(h.slice(0,u-1)),a.push(h.substr(u,r-u)),u=0,"["!==h.charAt(r+1)))break}else u=r+1;for(a.length||(a=[h]),r=0;r<a[0].length&&(" "!==(c=a[0].charAt(r))&&"."!==c&&"["!==c||(a[0]=a[0].substr(0,r)+"_"+a[0].substr(r+1)),"["!==c);r++);for(o=t,r=0,d=a.length;r<d;r++)if(f=o,""!==(h=a[r].replace(/^['"]/,"").replace(/['"]$/,""))&&" "!==h||0===r)void 0===o[h]&&(o[h]={}),o=o[h];else{for(l in i=-1,o)o.hasOwnProperty(l)&&+l>i&&l.match(/^\d+$/g)&&(i=+l);h=i+1}f[h]=p}}return t}function explode(e,t,n){if(arguments.length<2||"undefined"==typeof e||"undefined"==typeof t)return null;if(""===e||!1===e||null===e)return!1;if("function"==typeof e||"object"==typeof e||"function"==typeof t||"object"==typeof t)return{0:""};!0===e&&(e="1");var r=(t+="").split(e+="");return"undefined"==typeof n?r:(0===n&&(n=1),n>0?n>=r.length?r:r.slice(0,n-1).concat([r.slice(n-1).join(e)]):-n>=r.length?[]:(r.splice(r.length+n),r))}