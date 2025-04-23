import{G as ao,cF as no,I as o,Q as so,S as p,R as x,U as I,T as z,x as to,r as io,z as ho,y as V,V as go,L as Co,A as bo,j as L,W as vo,X as U,C as y,a5 as uo,J as po,P as fo,D as d}from"./index-B5w9V5Ff.js";import{a as ko}from"./headers-C19R71cM.js";function D(l){return l.replace(/#|\(|\)|,|\s|\./g,"_")}const mo=l=>{const{textColor2:h,primaryColorHover:r,primaryColorPressed:f,primaryColor:a,infoColor:i,successColor:s,warningColor:n,errorColor:t,baseColor:k,borderColor:m,opacityDisabled:g,tagColor:v,closeIconColor:e,closeIconColorHover:c,closeIconColorPressed:u,borderRadiusSmall:C,fontSizeMini:b,fontSizeTiny:S,fontSizeSmall:B,fontSizeMedium:$,heightMini:H,heightTiny:R,heightSmall:_,heightMedium:M,closeColorHover:T,closeColorPressed:E,buttonColor2Hover:W,buttonColor2Pressed:j,fontWeightStrong:w}=l;return Object.assign(Object.assign({},no),{closeBorderRadius:C,heightTiny:H,heightSmall:R,heightMedium:_,heightLarge:M,borderRadius:C,opacityDisabled:g,fontSizeTiny:b,fontSizeSmall:S,fontSizeMedium:B,fontSizeLarge:$,fontWeightStrong:w,textColorCheckable:h,textColorHoverCheckable:h,textColorPressedCheckable:h,textColorChecked:k,colorCheckable:"#0000",colorHoverCheckable:W,colorPressedCheckable:j,colorChecked:a,colorCheckedHover:r,colorCheckedPressed:f,border:`1px solid ${m}`,textColor:h,color:v,colorBordered:"rgb(250, 250, 252)",closeIconColor:e,closeIconColorHover:c,closeIconColorPressed:u,closeColorHover:T,closeColorPressed:E,borderPrimary:`1px solid ${o(a,{alpha:.3})}`,textColorPrimary:a,colorPrimary:o(a,{alpha:.12}),colorBorderedPrimary:o(a,{alpha:.1}),closeIconColorPrimary:a,closeIconColorHoverPrimary:a,closeIconColorPressedPrimary:a,closeColorHoverPrimary:o(a,{alpha:.12}),closeColorPressedPrimary:o(a,{alpha:.18}),borderInfo:`1px solid ${o(i,{alpha:.3})}`,textColorInfo:i,colorInfo:o(i,{alpha:.12}),colorBorderedInfo:o(i,{alpha:.1}),closeIconColorInfo:i,closeIconColorHoverInfo:i,closeIconColorPressedInfo:i,closeColorHoverInfo:o(i,{alpha:.12}),closeColorPressedInfo:o(i,{alpha:.18}),borderSuccess:`1px solid ${o(s,{alpha:.3})}`,textColorSuccess:s,colorSuccess:o(s,{alpha:.12}),colorBorderedSuccess:o(s,{alpha:.1}),closeIconColorSuccess:s,closeIconColorHoverSuccess:s,closeIconColorPressedSuccess:s,closeColorHoverSuccess:o(s,{alpha:.12}),closeColorPressedSuccess:o(s,{alpha:.18}),borderWarning:`1px solid ${o(n,{alpha:.35})}`,textColorWarning:n,colorWarning:o(n,{alpha:.15}),colorBorderedWarning:o(n,{alpha:.12}),closeIconColorWarning:n,closeIconColorHoverWarning:n,closeIconColorPressedWarning:n,closeColorHoverWarning:o(n,{alpha:.12}),closeColorPressedWarning:o(n,{alpha:.18}),borderError:`1px solid ${o(t,{alpha:.23})}`,textColorError:t,colorError:o(t,{alpha:.1}),colorBorderedError:o(t,{alpha:.08}),closeIconColorError:t,closeIconColorHoverError:t,closeIconColorPressedError:t,closeColorHoverError:o(t,{alpha:.12}),closeColorPressedError:o(t,{alpha:.18})})},xo={name:"Tag",common:ao,self:mo},yo=xo,Po={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},Io=so("tag",`
 --n-close-margin: var(--n-close-margin-top) var(--n-close-margin-right) var(--n-close-margin-bottom) var(--n-close-margin-left);
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[p("strong",`
 font-weight: var(--n-font-weight-strong);
 `),x("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),x("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),x("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),x("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),p("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[x("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),x("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),p("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),p("icon, avatar",[p("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),p("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),p("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[I("disabled",[z("&:hover","background-color: var(--n-color-hover-checkable);",[I("checked","color: var(--n-text-color-hover-checkable);")]),z("&:active","background-color: var(--n-color-pressed-checkable);",[I("checked","color: var(--n-text-color-pressed-checkable);")])]),p("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[I("disabled",[z("&:hover","background-color: var(--n-color-checked-hover);"),z("&:active","background-color: var(--n-color-checked-pressed);")])])])]),zo=Object.assign(Object.assign(Object.assign({},V.props),Po),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),So=po("n-tag"),Ho=to({name:"Tag",props:zo,setup(l){const h=io(null),{mergedBorderedRef:r,mergedClsPrefixRef:f,inlineThemeDisabled:a,mergedRtlRef:i}=ho(l),s=V("Tag","-tag",Io,yo,l,f);go(So,{roundRef:Co(l,"round")});function n(e){if(!l.disabled&&l.checkable){const{checked:c,onCheckedChange:u,onUpdateChecked:C,"onUpdate:checked":b}=l;C&&C(!c),b&&b(!c),u&&u(!c)}}function t(e){if(l.triggerClickOnClose||e.stopPropagation(),!l.disabled){const{onClose:c}=l;c&&fo(c,e)}}const k={setTextContent(e){const{value:c}=h;c&&(c.textContent=e)}},m=bo("Tag",i,f),g=L(()=>{const{type:e,size:c,color:{color:u,textColor:C}={}}=l,{common:{cubicBezierEaseInOut:b},self:{padding:S,closeMargin:B,borderRadius:$,opacityDisabled:H,textColorCheckable:R,textColorHoverCheckable:_,textColorPressedCheckable:M,textColorChecked:T,colorCheckable:E,colorHoverCheckable:W,colorPressedCheckable:j,colorChecked:w,colorCheckedHover:N,colorCheckedPressed:K,closeBorderRadius:A,fontWeightStrong:G,[d("colorBordered",e)]:J,[d("closeSize",c)]:Q,[d("closeIconSize",c)]:X,[d("fontSize",c)]:q,[d("height",c)]:O,[d("color",e)]:Y,[d("textColor",e)]:Z,[d("border",e)]:oo,[d("closeIconColor",e)]:F,[d("closeIconColorHover",e)]:eo,[d("closeIconColorPressed",e)]:ro,[d("closeColorHover",e)]:lo,[d("closeColorPressed",e)]:co}}=s.value,P=ko(B);return{"--n-font-weight-strong":G,"--n-avatar-size-override":`calc(${O} - 8px)`,"--n-bezier":b,"--n-border-radius":$,"--n-border":oo,"--n-close-icon-size":X,"--n-close-color-pressed":co,"--n-close-color-hover":lo,"--n-close-border-radius":A,"--n-close-icon-color":F,"--n-close-icon-color-hover":eo,"--n-close-icon-color-pressed":ro,"--n-close-icon-color-disabled":F,"--n-close-margin-top":P.top,"--n-close-margin-right":P.right,"--n-close-margin-bottom":P.bottom,"--n-close-margin-left":P.left,"--n-close-size":Q,"--n-color":u||(r.value?J:Y),"--n-color-checkable":E,"--n-color-checked":w,"--n-color-checked-hover":N,"--n-color-checked-pressed":K,"--n-color-hover-checkable":W,"--n-color-pressed-checkable":j,"--n-font-size":q,"--n-height":O,"--n-opacity-disabled":H,"--n-padding":S,"--n-text-color":C||Z,"--n-text-color-checkable":R,"--n-text-color-checked":T,"--n-text-color-hover-checkable":_,"--n-text-color-pressed-checkable":M}}),v=a?vo("tag",L(()=>{let e="";const{type:c,size:u,color:{color:C,textColor:b}={}}=l;return e+=c[0],e+=u[0],C&&(e+=`a${D(C)}`),b&&(e+=`b${D(b)}`),r.value&&(e+="c"),e}),g,l):void 0;return Object.assign(Object.assign({},k),{rtlEnabled:m,mergedClsPrefix:f,contentRef:h,mergedBordered:r,handleClick:n,handleCloseClick:t,cssVars:a?void 0:g,themeClass:v==null?void 0:v.themeClass,onRender:v==null?void 0:v.onRender})},render(){var l,h;const{mergedClsPrefix:r,rtlEnabled:f,closable:a,color:{borderColor:i}={},round:s,onRender:n,$slots:t}=this;n==null||n();const k=U(t.avatar,g=>g&&y("div",{class:`${r}-tag__avatar`},g)),m=U(t.icon,g=>g&&y("div",{class:`${r}-tag__icon`},g));return y("div",{class:[`${r}-tag`,this.themeClass,{[`${r}-tag--rtl`]:f,[`${r}-tag--strong`]:this.strong,[`${r}-tag--disabled`]:this.disabled,[`${r}-tag--checkable`]:this.checkable,[`${r}-tag--checked`]:this.checkable&&this.checked,[`${r}-tag--round`]:s,[`${r}-tag--avatar`]:k,[`${r}-tag--icon`]:m,[`${r}-tag--closable`]:a}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},m||k,y("span",{class:`${r}-tag__content`,ref:"contentRef"},(h=(l=this.$slots).default)===null||h===void 0?void 0:h.call(l)),!this.checkable&&a?y(uo,{clsPrefix:r,class:`${r}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:s,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?y("div",{class:`${r}-tag__border`,style:{borderColor:i}}):null)}});export{Ho as _,D as c,So as t};
