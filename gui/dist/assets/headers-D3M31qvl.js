import{G,cG as D,aa as m,I as x,Q as y,R as f,S as T,cH as K,T as $,x as W,y as S,z as E,A as J,j as P,W as _,r as Q,C as c,am as X,a5 as q,cu as U,X as Y,ac as Z,D as a,cy as ee,cI as oe,cJ as re,cK as ne,cL as te,a0 as se}from"./index-C6W50b9y.js";function Ce(e){return typeof e=="string"?e.endsWith("px")?Number(e.slice(0,e.length-2)):Number(e):e}function pe(e){if(e!=null)return typeof e=="number"?`${e}px`:e.endsWith("px")?e:`${e}px`}function ie(e,o){const r=e.trim().split(/\s+/g),n={top:r[0]};switch(r.length){case 1:n.right=r[0],n.bottom=r[0],n.left=r[0];break;case 2:n.right=r[1],n.left=r[1],n.bottom=r[0];break;case 3:n.right=r[1],n.bottom=r[2],n.left=r[1];break;case 4:n.right=r[1],n.bottom=r[2],n.left=r[3];break;default:throw new Error("[seemly/getMargin]:"+e+" is not a valid value.")}return o===void 0?n:n[o]}function ve(e,o){const[r,n]=e.split(" ");return o?o==="row"?r:n:{row:r,col:n||r}}const me=typeof document<"u"&&typeof window<"u",le=e=>{const{lineHeight:o,borderRadius:r,fontWeightStrong:n,baseColor:s,dividerColor:d,actionColor:h,textColor1:g,textColor2:l,closeColorHover:u,closeColorPressed:C,closeIconColor:p,closeIconColorHover:v,closeIconColorPressed:i,infoColor:t,successColor:I,warningColor:z,errorColor:w,fontSize:R}=e;return Object.assign(Object.assign({},D),{fontSize:R,lineHeight:o,titleFontWeight:n,borderRadius:r,border:`1px solid ${d}`,color:h,titleTextColor:g,iconColor:l,contentTextColor:l,closeBorderRadius:r,closeColorHover:u,closeColorPressed:C,closeIconColor:p,closeIconColorHover:v,closeIconColorPressed:i,borderInfo:`1px solid ${m(s,x(t,{alpha:.25}))}`,colorInfo:m(s,x(t,{alpha:.08})),titleTextColorInfo:g,iconColorInfo:t,contentTextColorInfo:l,closeColorHoverInfo:u,closeColorPressedInfo:C,closeIconColorInfo:p,closeIconColorHoverInfo:v,closeIconColorPressedInfo:i,borderSuccess:`1px solid ${m(s,x(I,{alpha:.25}))}`,colorSuccess:m(s,x(I,{alpha:.08})),titleTextColorSuccess:g,iconColorSuccess:I,contentTextColorSuccess:l,closeColorHoverSuccess:u,closeColorPressedSuccess:C,closeIconColorSuccess:p,closeIconColorHoverSuccess:v,closeIconColorPressedSuccess:i,borderWarning:`1px solid ${m(s,x(z,{alpha:.33}))}`,colorWarning:m(s,x(z,{alpha:.08})),titleTextColorWarning:g,iconColorWarning:z,contentTextColorWarning:l,closeColorHoverWarning:u,closeColorPressedWarning:C,closeIconColorWarning:p,closeIconColorHoverWarning:v,closeIconColorPressedWarning:i,borderError:`1px solid ${m(s,x(w,{alpha:.25}))}`,colorError:m(s,x(w,{alpha:.08})),titleTextColorError:g,iconColorError:w,contentTextColorError:l,closeColorHoverError:u,closeColorPressedError:C,closeIconColorError:p,closeIconColorHoverError:v,closeIconColorPressedError:i})},ae={name:"Alert",common:G,self:le},ce=ae,de=y("alert",`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[f("border",`
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),T("closable",[y("alert-body",[f("title",`
 padding-right: 24px;
 `)])]),f("icon",{color:"var(--n-icon-color)"}),y("alert-body",{padding:"var(--n-padding)"},[f("title",{color:"var(--n-title-text-color)"}),f("content",{color:"var(--n-content-text-color)"})]),K({originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.9)"}}),f("icon",`
 position: absolute;
 left: 0;
 top: 0;
 align-items: center;
 justify-content: center;
 display: flex;
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 margin: var(--n-icon-margin);
 `),f("close",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),T("show-icon",[y("alert-body",{paddingLeft:"calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))"})]),T("right-adjust",[y("alert-body",{paddingRight:"calc(var(--n-close-size) + var(--n-padding) + 2px)"})]),y("alert-body",`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[f("title",`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[$("& +",[f("content",{marginTop:"9px"})])]),f("content",{transition:"color .3s var(--n-bezier)",fontSize:"var(--n-font-size)"})]),f("icon",{transition:"color .3s var(--n-bezier)"})]),he=Object.assign(Object.assign({},S.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:"default"},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function}),xe=W({name:"Alert",inheritAttrs:!1,props:he,setup(e){const{mergedClsPrefixRef:o,mergedBorderedRef:r,inlineThemeDisabled:n,mergedRtlRef:s}=E(e),d=S("Alert","-alert",de,ce,e,o),h=J("Alert",s,o),g=P(()=>{const{common:{cubicBezierEaseInOut:i},self:t}=d.value,{fontSize:I,borderRadius:z,titleFontWeight:w,lineHeight:R,iconSize:B,iconMargin:H,iconMarginRtl:k,closeIconSize:A,closeBorderRadius:L,closeSize:j,closeMargin:O,closeMarginRtl:F,padding:M}=t,{type:b}=e,{left:N,right:V}=ie(H);return{"--n-bezier":i,"--n-color":t[a("color",b)],"--n-close-icon-size":A,"--n-close-border-radius":L,"--n-close-color-hover":t[a("closeColorHover",b)],"--n-close-color-pressed":t[a("closeColorPressed",b)],"--n-close-icon-color":t[a("closeIconColor",b)],"--n-close-icon-color-hover":t[a("closeIconColorHover",b)],"--n-close-icon-color-pressed":t[a("closeIconColorPressed",b)],"--n-icon-color":t[a("iconColor",b)],"--n-border":t[a("border",b)],"--n-title-text-color":t[a("titleTextColor",b)],"--n-content-text-color":t[a("contentTextColor",b)],"--n-line-height":R,"--n-border-radius":z,"--n-font-size":I,"--n-title-font-weight":w,"--n-icon-size":B,"--n-icon-margin":H,"--n-icon-margin-rtl":k,"--n-close-size":j,"--n-close-margin":O,"--n-close-margin-rtl":F,"--n-padding":M,"--n-icon-margin-left":N,"--n-icon-margin-right":V}}),l=n?_("alert",P(()=>e.type[0]),g,e):void 0,u=Q(!0),C=()=>{const{onAfterLeave:i,onAfterHide:t}=e;i&&i(),t&&t()};return{rtlEnabled:h,mergedClsPrefix:o,mergedBordered:r,visible:u,handleCloseClick:()=>{var i;Promise.resolve((i=e.onClose)===null||i===void 0?void 0:i.call(e)).then(t=>{t!==!1&&(u.value=!1)})},handleAfterLeave:()=>{C()},mergedTheme:d,cssVars:n?void 0:g,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),c(Z,{onAfterLeave:this.handleAfterLeave},{default:()=>{const{mergedClsPrefix:o,$slots:r}=this,n={class:[`${o}-alert`,this.themeClass,this.closable&&`${o}-alert--closable`,this.showIcon&&`${o}-alert--show-icon`,!this.title&&this.closable&&`${o}-alert--right-adjust`,this.rtlEnabled&&`${o}-alert--rtl`],style:this.cssVars,role:"alert"};return this.visible?c("div",Object.assign({},X(this.$attrs,n)),this.closable&&c(q,{clsPrefix:o,class:`${o}-alert__close`,onClick:this.handleCloseClick}),this.bordered&&c("div",{class:`${o}-alert__border`}),this.showIcon&&c("div",{class:`${o}-alert__icon`,"aria-hidden":"true"},U(r.icon,()=>[c(ee,{clsPrefix:o},{default:()=>{switch(this.type){case"success":return c(te,null);case"info":return c(ne,null);case"warning":return c(re,null);case"error":return c(oe,null);default:return null}}})])),c("div",{class:[`${o}-alert-body`,this.mergedBordered&&`${o}-alert-body--bordered`]},Y(r.header,s=>{const d=s||this.title;return d?c("div",{class:`${o}-alert-body__title`},d):null}),r.default&&c("div",{class:`${o}-alert-body__content`},r))):null}})}}),fe=y("h",`
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 margin: var(--n-margin);
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[$("&:first-child",{marginTop:0}),T("prefix-bar",{position:"relative",paddingLeft:"var(--n-prefix-width)"},[T("align-text",{paddingLeft:0},[$("&::before",{left:"calc(-1 * var(--n-prefix-width))"})]),$("&::before",`
 content: "";
 width: var(--n-bar-width);
 border-radius: calc(var(--n-bar-width) / 2);
 transition: background-color .3s var(--n-bezier);
 left: 0;
 top: 0;
 bottom: 0;
 position: absolute;
 `),$("&::before",{backgroundColor:"var(--n-bar-color)"})])]),ge=Object.assign(Object.assign({},S.props),{type:{type:String,default:"default"},prefix:String,alignText:Boolean}),ue=e=>W({name:`H${e}`,props:ge,setup(o){const{mergedClsPrefixRef:r,inlineThemeDisabled:n}=E(o),s=S("Typography","-h",fe,se,o,r),d=P(()=>{const{type:g}=o,{common:{cubicBezierEaseInOut:l},self:{headerFontWeight:u,headerTextColor:C,[a("headerPrefixWidth",e)]:p,[a("headerFontSize",e)]:v,[a("headerMargin",e)]:i,[a("headerBarWidth",e)]:t,[a("headerBarColor",g)]:I}}=s.value;return{"--n-bezier":l,"--n-font-size":v,"--n-margin":i,"--n-bar-color":I,"--n-bar-width":t,"--n-font-weight":u,"--n-text-color":C,"--n-prefix-width":p}}),h=n?_(`h${e}`,P(()=>o.type[0]),d,o):void 0;return{mergedClsPrefix:r,cssVars:n?void 0:d,themeClass:h==null?void 0:h.themeClass,onRender:h==null?void 0:h.onRender}},render(){var o;const{prefix:r,alignText:n,mergedClsPrefix:s,cssVars:d,$slots:h}=this;return(o=this.onRender)===null||o===void 0||o.call(this),c(`h${e}`,{class:[`${s}-h`,`${s}-h${e}`,this.themeClass,{[`${s}-h--prefix-bar`]:r,[`${s}-h--align-text`]:n}],style:d},h)}}),Ie=ue("3");export{Ie as N,xe as _,ie as a,Ce as d,ve as g,me as i,pe as p};
