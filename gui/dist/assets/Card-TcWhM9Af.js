import{T as t,Q as c,a1 as G,S as d,R as n,a2 as J,a3 as U,x as Y,y as x,z as Z,A as ee,j as u,W as oe,C as s,X as i,P as re,a4 as te,D as h,a5 as ne}from"./index-ry8bg5re.js";import{a as ae}from"./headers-B5gsRP4F.js";const de=t([c("card",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[G({background:"var(--n-color-modal)"}),d("hoverable",[t("&:hover","box-shadow: var(--n-box-shadow);")]),d("content-segmented",[t(">",[n("content",{paddingTop:"var(--n-padding-bottom)"})])]),d("content-soft-segmented",[t(">",[n("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),d("footer-segmented",[t(">",[n("footer",{paddingTop:"var(--n-padding-bottom)"})])]),d("footer-soft-segmented",[t(">",[n("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),t(">",[c("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[n("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),n("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),n("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),n("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),n("content","flex: 1; min-width: 0;"),n("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[t("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),n("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),c("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[t("img",`
 display: block;
 width: 100%;
 `)]),d("bordered",`
 border: 1px solid var(--n-border-color);
 `,[t("&:target","border-color: var(--n-color-target);")]),d("action-segmented",[t(">",[n("action",[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),d("content-segmented, content-soft-segmented",[t(">",[n("content",{transition:"border-color 0.3s var(--n-bezier)"},[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),d("footer-segmented, footer-soft-segmented",[t(">",[n("footer",{transition:"border-color 0.3s var(--n-bezier)"},[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),d("embedded",`
 background-color: var(--n-color-embedded);
 `)]),J(c("card",`
 background: var(--n-color-modal);
 `,[d("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),U(c("card",`
 background: var(--n-color-popover);
 `,[d("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),se={title:String,contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],headerExtraClass:String,headerExtraStyle:[Object,String],footerClass:String,footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"}},le=Object.assign(Object.assign({},x.props),se),be=Y({name:"Card",props:le,setup(r){const f=()=>{const{onClose:o}=r;o&&re(o)},{inlineThemeDisabled:b,mergedClsPrefixRef:e,mergedRtlRef:m}=Z(r),l=x("Card","-card",de,te,r,e),p=ee("Card",m,e),g=u(()=>{const{size:o}=r,{self:{color:v,colorModal:z,colorTarget:C,textColor:S,titleTextColor:y,titleFontWeight:k,borderColor:$,actionColor:w,borderRadius:_,lineHeight:T,closeIconColor:R,closeIconColorHover:E,closeIconColorPressed:P,closeColorHover:B,closeColorPressed:j,closeBorderRadius:O,closeIconSize:M,closeSize:I,boxShadow:F,colorPopover:H,colorEmbedded:V,colorEmbeddedModal:W,colorEmbeddedPopover:A,[h("padding",o)]:D,[h("fontSize",o)]:L,[h("titleFontSize",o)]:K},common:{cubicBezierEaseInOut:N}}=l.value,{top:Q,left:X,bottom:q}=ae(D);return{"--n-bezier":N,"--n-border-radius":_,"--n-color":v,"--n-color-modal":z,"--n-color-popover":H,"--n-color-embedded":V,"--n-color-embedded-modal":W,"--n-color-embedded-popover":A,"--n-color-target":C,"--n-text-color":S,"--n-line-height":T,"--n-action-color":w,"--n-title-text-color":y,"--n-title-font-weight":k,"--n-close-icon-color":R,"--n-close-icon-color-hover":E,"--n-close-icon-color-pressed":P,"--n-close-color-hover":B,"--n-close-color-pressed":j,"--n-border-color":$,"--n-box-shadow":F,"--n-padding-top":Q,"--n-padding-bottom":q,"--n-padding-left":X,"--n-font-size":L,"--n-title-font-size":K,"--n-close-size":I,"--n-close-icon-size":M,"--n-close-border-radius":O}}),a=b?oe("card",u(()=>r.size[0]),g,r):void 0;return{rtlEnabled:p,mergedClsPrefix:e,mergedTheme:l,handleCloseClick:f,cssVars:b?void 0:g,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){const{segmented:r,bordered:f,hoverable:b,mergedClsPrefix:e,rtlEnabled:m,onRender:l,embedded:p,tag:g,$slots:a}=this;return l==null||l(),s(g,{class:[`${e}-card`,this.themeClass,p&&`${e}-card--embedded`,{[`${e}-card--rtl`]:m,[`${e}-card--content${typeof r!="boolean"&&r.content==="soft"?"-soft":""}-segmented`]:r===!0||r!==!1&&r.content,[`${e}-card--footer${typeof r!="boolean"&&r.footer==="soft"?"-soft":""}-segmented`]:r===!0||r!==!1&&r.footer,[`${e}-card--action-segmented`]:r===!0||r!==!1&&r.action,[`${e}-card--bordered`]:f,[`${e}-card--hoverable`]:b}],style:this.cssVars,role:this.role},i(a.cover,o=>o&&s("div",{class:`${e}-card-cover`,role:"none"},o)),i(a.header,o=>o||this.title||this.closable?s("div",{class:[`${e}-card-header`,this.headerClass],style:this.headerStyle},s("div",{class:`${e}-card-header__main`,role:"heading"},o||this.title),i(a["header-extra"],v=>v&&s("div",{class:[`${e}-card-header__extra`,this.headerExtraClass],style:this.headerExtraStyle},v)),this.closable?s(ne,{clsPrefix:e,class:`${e}-card-header__close`,onClick:this.handleCloseClick,absolute:!0}):null):null),i(a.default,o=>o&&s("div",{class:[`${e}-card__content`,this.contentClass],style:this.contentStyle,role:"none"},o)),i(a.footer,o=>o&&[s("div",{class:[`${e}-card__footer`,this.footerClass],style:this.footerStyle,role:"none"},o)]),i(a.action,o=>o&&s("div",{class:`${e}-card__action`,role:"none"},o)))}});export{be as _};
