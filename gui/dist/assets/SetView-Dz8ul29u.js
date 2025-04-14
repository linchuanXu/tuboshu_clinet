import{G as be,H as pe,I as ee,J as ge,r as f,K as fe,L as Y,M as le,O as te,z as de,P as G,Q as Z,R as H,S as P,T as q,U as oe,x as ue,y as ce,V as me,A as _e,i as ne,W as xe,B as ye,C as L,D as ae,X as we,_ as Ce,q as Se,o as Q,c as X,b as d,d as r,e as v,a as n,u as x,n as U,F as se,s as ie,t as re,p as ze,k as ke}from"./index-BnyCCVeo.js";import{_ as Re}from"./Card-COemwTmD.js";import{u as ve,a as Be,_ as Ve}from"./Switch-DSWevnAZ.js";import{g as Ae}from"./get-slot-Bk_rJcZu.js";import{_ as Te}from"./Tag-Dmj3tNI1.js";import{u as $e}from"./use-message-DxjjG3lD.js";import{_ as Me,N as Ie}from"./headers-LS-Q2jUc.js";import{_ as Ue}from"./InputGroup-eO0X3mh0.js";const Fe=e=>{const{borderColor:o,primaryColor:t,baseColor:h,textColorDisabled:u,inputColorDisabled:y,textColor2:a,opacityDisabled:b,borderRadius:m,fontSizeSmall:C,fontSizeMedium:w,fontSizeLarge:_,heightSmall:p,heightMedium:T,heightLarge:V,lineHeight:g}=e;return Object.assign(Object.assign({},pe),{labelLineHeight:g,buttonHeightSmall:p,buttonHeightMedium:T,buttonHeightLarge:V,fontSizeSmall:C,fontSizeMedium:w,fontSizeLarge:_,boxShadow:`inset 0 0 0 1px ${o}`,boxShadowActive:`inset 0 0 0 1px ${t}`,boxShadowFocus:`inset 0 0 0 1px ${t}, 0 0 0 2px ${ee(t,{alpha:.2})}`,boxShadowHover:`inset 0 0 0 1px ${t}`,boxShadowDisabled:`inset 0 0 0 1px ${o}`,color:h,colorDisabled:y,colorActive:"#0000",textColor:a,textColorDisabled:u,dotColorActive:t,dotColorDisabled:o,buttonBorderColor:o,buttonBorderColorActive:t,buttonBorderColorHover:o,buttonColor:h,buttonColorActive:h,buttonTextColor:a,buttonTextColorActive:t,buttonTextColorHover:t,opacityDisabled:b,buttonBoxShadowFocus:`inset 0 0 0 1px ${t}, 0 0 0 2px ${ee(t,{alpha:.3})}`,buttonBoxShadowHover:"inset 0 0 0 1px #0000",buttonBoxShadow:"inset 0 0 0 1px #0000",buttonBorderRadius:m})},De={name:"Radio",common:be,self:Fe},Oe=De,He={name:String,value:{type:[String,Number,Boolean],default:"on"},checked:{type:Boolean,default:void 0},defaultChecked:Boolean,disabled:{type:Boolean,default:void 0},label:String,size:String,onUpdateChecked:[Function,Array],"onUpdate:checked":[Function,Array],checkedValue:{type:Boolean,default:void 0}},he=ge("n-radio-group");function Ee(e){const o=ve(e,{mergedSize(c){const{size:S}=e;if(S!==void 0)return S;if(a){const{mergedSizeRef:{value:k}}=a;if(k!==void 0)return k}return c?c.mergedSize.value:"medium"},mergedDisabled(c){return!!(e.disabled||a!=null&&a.disabledRef.value||c!=null&&c.disabled.value)}}),{mergedSizeRef:t,mergedDisabledRef:h}=o,u=f(null),y=f(null),a=fe(he,null),b=f(e.defaultChecked),m=Y(e,"checked"),C=le(m,b),w=te(()=>a?a.valueRef.value===e.value:C.value),_=te(()=>{const{name:c}=e;if(c!==void 0)return c;if(a)return a.nameRef.value}),p=f(!1);function T(){if(a){const{doUpdateValue:c}=a,{value:S}=e;G(c,S)}else{const{onUpdateChecked:c,"onUpdate:checked":S}=e,{nTriggerFormInput:k,nTriggerFormChange:z}=o;c&&G(c,!0),S&&G(S,!0),k(),z(),b.value=!0}}function V(){h.value||w.value||T()}function g(){V(),u.value&&(u.value.checked=w.value)}function F(){p.value=!1}function D(){p.value=!0}return{mergedClsPrefix:a?a.mergedClsPrefixRef:de(e).mergedClsPrefixRef,inputRef:u,labelRef:y,mergedName:_,mergedDisabled:h,renderSafeChecked:w,focus:p,mergedSize:t,handleRadioInputChange:g,handleRadioInputBlur:F,handleRadioInputFocus:D}}const Ne=Z("radio-group",`
 display: inline-block;
 font-size: var(--n-font-size);
`,[H("splitor",`
 display: inline-block;
 vertical-align: bottom;
 width: 1px;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 background: var(--n-button-border-color);
 `,[P("checked",{backgroundColor:"var(--n-button-border-color-active)"}),P("disabled",{opacity:"var(--n-opacity-disabled)"})]),P("button-group",`
 white-space: nowrap;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[Z("radio-button",{height:"var(--n-height)",lineHeight:"var(--n-height)"}),H("splitor",{height:"var(--n-height)"})]),Z("radio-button",`
 vertical-align: bottom;
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-block;
 box-sizing: border-box;
 padding-left: 14px;
 padding-right: 14px;
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background: var(--n-button-color);
 color: var(--n-button-text-color);
 border-top: 1px solid var(--n-button-border-color);
 border-bottom: 1px solid var(--n-button-border-color);
 `,[Z("radio-input",`
 pointer-events: none;
 position: absolute;
 border: 0;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 opacity: 0;
 z-index: 1;
 `),H("state-border",`
 z-index: 1;
 pointer-events: none;
 position: absolute;
 box-shadow: var(--n-button-box-shadow);
 transition: box-shadow .3s var(--n-bezier);
 left: -1px;
 bottom: -1px;
 right: -1px;
 top: -1px;
 `),q("&:first-child",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 border-left: 1px solid var(--n-button-border-color);
 `,[H("state-border",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 `)]),q("&:last-child",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 border-right: 1px solid var(--n-button-border-color);
 `,[H("state-border",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 `)]),oe("disabled",`
 cursor: pointer;
 `,[q("&:hover",[H("state-border",`
 transition: box-shadow .3s var(--n-bezier);
 box-shadow: var(--n-button-box-shadow-hover);
 `),oe("checked",{color:"var(--n-button-text-color-hover)"})]),P("focus",[q("&:not(:active)",[H("state-border",{boxShadow:"var(--n-button-box-shadow-focus)"})])])]),P("checked",`
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `),P("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `)])]);function Pe(e,o,t){var h;const u=[];let y=!1;for(let a=0;a<e.length;++a){const b=e[a],m=(h=b.type)===null||h===void 0?void 0:h.name;m==="RadioButton"&&(y=!0);const C=b.props;if(m!=="RadioButton"){u.push(b);continue}if(a===0)u.push(b);else{const w=u[u.length-1].props,_=o===w.value,p=w.disabled,T=o===C.value,V=C.disabled,g=(_?2:0)+(p?0:1),F=(T?2:0)+(V?0:1),D={[`${t}-radio-group__splitor--disabled`]:p,[`${t}-radio-group__splitor--checked`]:_},c={[`${t}-radio-group__splitor--disabled`]:V,[`${t}-radio-group__splitor--checked`]:T},S=g<F?c:D;u.push(L("div",{class:[`${t}-radio-group__splitor`,S]}),b)}}return{children:u,isButtonGroup:y}}const Le=Object.assign(Object.assign({},ce.props),{name:String,value:[String,Number,Boolean],defaultValue:{type:[String,Number,Boolean],default:null},size:String,disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),Ge=ue({name:"RadioGroup",props:Le,setup(e){const o=f(null),{mergedSizeRef:t,mergedDisabledRef:h,nTriggerFormChange:u,nTriggerFormInput:y,nTriggerFormBlur:a,nTriggerFormFocus:b}=ve(e),{mergedClsPrefixRef:m,inlineThemeDisabled:C,mergedRtlRef:w}=de(e),_=ce("Radio","-radio-group",Ne,Oe,e,m),p=f(e.defaultValue),T=Y(e,"value"),V=le(T,p);function g(z){const{onUpdateValue:B,"onUpdate:value":E}=e;B&&G(B,z),E&&G(E,z),p.value=z,u(),y()}function F(z){const{value:B}=o;B&&(B.contains(z.relatedTarget)||b())}function D(z){const{value:B}=o;B&&(B.contains(z.relatedTarget)||a())}me(he,{mergedClsPrefixRef:m,nameRef:Y(e,"name"),valueRef:V,disabledRef:h,mergedSizeRef:t,doUpdateValue:g});const c=_e("Radio",w,m),S=ne(()=>{const{value:z}=t,{common:{cubicBezierEaseInOut:B},self:{buttonBorderColor:E,buttonBorderColorActive:J,buttonBorderRadius:l,buttonBoxShadow:s,buttonBoxShadowFocus:A,buttonBoxShadowHover:M,buttonColor:R,buttonColorActive:O,buttonTextColor:I,buttonTextColorActive:W,buttonTextColorHover:j,opacityDisabled:K,[ae("buttonHeight",z)]:N,[ae("fontSize",z)]:i}}=_.value;return{"--n-font-size":i,"--n-bezier":B,"--n-button-border-color":E,"--n-button-border-color-active":J,"--n-button-border-radius":l,"--n-button-box-shadow":s,"--n-button-box-shadow-focus":A,"--n-button-box-shadow-hover":M,"--n-button-color":R,"--n-button-color-active":O,"--n-button-text-color":I,"--n-button-text-color-hover":j,"--n-button-text-color-active":W,"--n-height":N,"--n-opacity-disabled":K}}),k=C?xe("radio-group",ne(()=>t.value[0]),S,e):void 0;return{selfElRef:o,rtlEnabled:c,mergedClsPrefix:m,mergedValue:V,handleFocusout:D,handleFocusin:F,cssVars:C?void 0:S,themeClass:k==null?void 0:k.themeClass,onRender:k==null?void 0:k.onRender}},render(){var e;const{mergedValue:o,mergedClsPrefix:t,handleFocusin:h,handleFocusout:u}=this,{children:y,isButtonGroup:a}=Pe(ye(Ae(this)),o,t);return(e=this.onRender)===null||e===void 0||e.call(this),L("div",{onFocusin:h,onFocusout:u,ref:"selfElRef",class:[`${t}-radio-group`,this.rtlEnabled&&`${t}-radio-group--rtl`,this.themeClass,a&&`${t}-radio-group--button-group`],style:this.cssVars},y)}}),We=ue({name:"RadioButton",props:He,setup:Ee,render(){const{mergedClsPrefix:e}=this;return L("label",{class:[`${e}-radio-button`,this.mergedDisabled&&`${e}-radio-button--disabled`,this.renderSafeChecked&&`${e}-radio-button--checked`,this.focus&&[`${e}-radio-button--focus`]]},L("input",{ref:"inputRef",type:"radio",class:`${e}-radio-input`,value:this.value,name:this.mergedName,checked:this.renderSafeChecked,disabled:this.mergedDisabled,onChange:this.handleRadioInputChange,onFocus:this.handleRadioInputFocus,onBlur:this.handleRadioInputBlur}),L("div",{class:`${e}-radio-button__state-border`}),we(this.$slots.default,o=>!o&&!this.label?null:L("div",{ref:"labelRef",class:`${e}-radio__label`},o||this.label)))}}),$=e=>(ze("data-v-b6a494cd"),e=e(),ke(),e),je={id:"content-main"},Ke=$(()=>n("br",null,null,-1)),Ze={class:"wrap"},qe={class:"card"},Je=$(()=>n("div",{class:"vleft"},"启动窗口：",-1)),Qe={class:"vright"},Xe={class:"card"},Ye=$(()=>n("div",{class:"vleft"},"调试模式：",-1)),et={class:"vright"},tt={class:"card"},ot=$(()=>n("div",{class:"vleft"},"边缘吸附：",-1)),nt={class:"vright"},at={class:"card"},st=$(()=>n("div",{class:"vleft"},"内存优化：",-1)),it={class:"vright"},rt={class:"card"},lt=$(()=>n("div",{class:"vleft"},"页面缩放：",-1)),dt={class:"vright"},ut={class:"card"},ct=$(()=>n("div",{class:"vleft"},"右键菜单：",-1)),vt={class:"vright"},ht={class:"card"},bt=$(()=>n("div",{class:"vleft"},"显示边栏：",-1)),pt={class:"vright"},gt={class:"card"},ft=$(()=>n("div",{class:"vleft"},"边栏位置：",-1)),mt={class:"vright"},_t={class:"card"},xt=$(()=>n("div",{class:"vleft"},"系统主题：",-1)),yt={class:"vright"},wt={style:{"padding-right":"20px"}},Ct={style:{"padding-right":"20px"}},St=["href"],zt=["href"],kt={__name:"SetView",setup(e){const o=$e(),t=f({}),h=f(!1),u=f(!1),y=f("system"),a=f("left"),b=f(!0),m=f(!1),C=f(!0),w=f(!0),_=f({width:800,height:600}),p=f({version:"加载中...",electron:"--",chrome:"--"}),T=[{label:"跟随系统",value:"system"},{label:"普通模式",value:"light"},{label:"深度模式",value:"dark"}],V=[{label:"左侧",value:"left"},{label:"右侧",value:"right"}],g=(l,s)=>{let A=s.value.find(M=>M.name===l);return typeof A.value=="number"?A.value!==0:typeof A.value=="string"&&A.value==="0"?!1:A.value};Se(async()=>{p.value=await window.myApi.getVersion(),t.value=await window.myApi.getSettings(),h.value=g("isWindowEdgeAdsorption",t),u.value=g("isMemoryOptimizationEnabled",t),a.value=g("leftMenuPosition",t),y.value=g("systemTheme",t),b.value=g("isMenuVisible",t),m.value=g("isOpenDevTools",t),C.value=g("isOpenZoom",t),w.value=g("isOpenContextMenu",t),_.value=g("defaultWindowSize",t)});const F=async l=>{const s={name:"isWindowEdgeAdsorption",value:l?1:0};window.myApi.updateSetting(s),o.success("设置已更新,请重新启动")},D=async l=>{const s={name:"isMemoryOptimizationEnabled",value:l?1:0};window.myApi.updateSetting(s),o.success("设置已更新,请重新启动")},c=l=>{window.myApi.updateSetting({name:"isMenuVisible",value:l?1:0}),o.success("设置已更新,请重新启动")},S=l=>{window.myApi.updateSetting({name:"isOpenDevTools",value:l?1:0}),o.success("设置已更新,请重新启动")},k=l=>{window.myApi.updateSetting({name:"isOpenZoom",value:l?1:0}),o.success("设置已更新,请重新启动")},z=l=>{window.myApi.updateSetting({name:"isOpenContextMenu",value:l?1:0}),o.success("设置已更新,请重新启动")},B=l=>{window.myApi.updateSetting({name:"systemTheme",value:l.target.value}),o.success("设置已更新,请重新启动")},E=l=>{window.myApi.updateSetting({name:"leftMenuPosition",value:l.target.value}),o.success("设置已更新,请重新启动")},J=l=>{const{value:s,placeholder:A}=l.target,M=A==="width"?"width":"height",R=Number(s);let O={};if(isNaN(R)||R<=0){o.error("请输入有效的正数");return}if(M==="width"){if(R>3e3){o.error("宽度不能超过3000px");return}if(R<300){o.error("宽度不能小于300px");return}O={width:R,height:Number(_.value.height)}}if(M==="height"){if(R>2e3){o.error("高度不能超过2000px");return}if(R<300){o.error("高度不能小于300px");return}O={width:Number(_.value.width),height:R}}window.myApi.updateSetting({name:"defaultWindowSize",value:O}),o.success("设置已更新,请重新启动")};return(l,s)=>{const A=Ie,M=Me,R=Be,O=Ue,I=Ve,W=We,j=Ge,K=Re,N=Te;return Q(),X("div",je,[d(M,{"show-icon":!1,type:"info",style:{"margin-bottom":"1rem"}},{default:r(()=>[d(A,{style:{"margin-bottom":"0"}},{default:r(()=>[v("通用设置")]),_:1})]),_:1}),d(M,{"show-icon":!1},{default:r(()=>[v(" 1.设置改变后，重启程序才能生效。"),Ke]),_:1}),d(K,{embedded:"",bordered:!0,style:{"margin-top":"1rem"}},{default:r(()=>[n("div",Ze,[n("div",qe,[Je,n("div",Qe,[d(O,{onChange:J},{default:r(()=>[d(R,{size:"small",value:x(_).width,"onUpdate:value":s[0]||(s[0]=i=>x(_).width=i),style:{width:"20%"},placeholder:"width"},null,8,["value"]),v(" x "),d(R,{size:"small",value:x(_).height,"onUpdate:value":s[1]||(s[1]=i=>x(_).height=i),style:{width:"20%"},placeholder:"height"},null,8,["value"])]),_:1})])]),n("div",Xe,[Ye,n("div",et,[d(I,{size:"medium",value:x(m),"onUpdate:value":[s[2]||(s[2]=i=>U(m)?m.value=i:null),S],style:{"font-size":"12px"}},{checked:r(()=>[v("开启")]),unchecked:r(()=>[v("关闭")]),_:1},8,["value"])])]),n("div",tt,[ot,n("div",nt,[d(I,{size:"medium",value:x(h),"onUpdate:value":[s[3]||(s[3]=i=>U(h)?h.value=i:null),F],style:{"font-size":"12px"}},{checked:r(()=>[v("开启")]),unchecked:r(()=>[v("关闭")]),_:1},8,["value"])])]),n("div",at,[st,n("div",it,[d(I,{size:"medium",value:x(u),"onUpdate:value":[s[4]||(s[4]=i=>U(u)?u.value=i:null),D],style:{"font-size":"12px"}},{checked:r(()=>[v("开启")]),unchecked:r(()=>[v("关闭")]),_:1},8,["value"])])]),n("div",rt,[lt,n("div",dt,[d(I,{size:"medium",value:x(C),"onUpdate:value":[s[5]||(s[5]=i=>U(C)?C.value=i:null),k],style:{"font-size":"12px"}},{checked:r(()=>[v("开启")]),unchecked:r(()=>[v("关闭")]),_:1},8,["value"])])]),n("div",ut,[ct,n("div",vt,[d(I,{size:"medium",value:x(w),"onUpdate:value":[s[6]||(s[6]=i=>U(w)?w.value=i:null),z],style:{"font-size":"12px"}},{checked:r(()=>[v("显示")]),unchecked:r(()=>[v("关闭")]),_:1},8,["value"])])]),n("div",ht,[bt,n("div",pt,[d(I,{size:"medium",value:x(b),"onUpdate:value":[s[7]||(s[7]=i=>U(b)?b.value=i:null),c],style:{"font-size":"12px"}},{checked:r(()=>[v("显示")]),unchecked:r(()=>[v("隐藏")]),_:1},8,["value"])])]),n("div",gt,[ft,n("div",mt,[d(j,{size:"small",onChange:E,value:x(a),"onUpdate:value":s[8]||(s[8]=i=>U(a)?a.value=i:null),name:"menuPoss",style:{"font-size":"12px"}},{default:r(()=>[(Q(),X(se,null,ie(V,i=>d(W,{key:i.value,value:i.value,label:i.label},null,8,["value","label"])),64))]),_:1},8,["value"])])]),n("div",_t,[xt,n("div",yt,[d(j,{size:"small",onChange:B,value:x(y),"onUpdate:value":s[9]||(s[9]=i=>U(y)?y.value=i:null),name:"themegroup1",style:{"font-size":"12px"}},{default:r(()=>[(Q(),X(se,null,ie(T,i=>d(W,{key:i.value,value:i.value,label:i.label},null,8,["value","label"])),64))]),_:1},8,["value"])])])])]),_:1}),d(K,{embedded:"",bordered:!0,style:{"margin-top":"20px"}},{default:r(()=>[n("span",wt,[v(" 当前版本: "),d(N,{bordered:!1,type:"info",size:"medium"},{default:r(()=>[v(re(x(p).version),1)]),_:1})]),n("span",Ct,[v(" 最新版本: "),d(N,{bordered:!1,type:"info",size:"medium"},{default:r(()=>[v(re(x(p).newVersion),1)]),_:1})]),n("span",null,[v(" 获取新版： "),d(N,{bordered:!1,type:"info",size:"medium",style:{"margin-right":"20px"}},{default:r(()=>[n("a",{target:"_blank",href:x(p).github},"GitHub下载",8,St)]),_:1}),d(N,{bordered:!1,type:"error",size:"medium"},{default:r(()=>[n("a",{target:"_blank",href:x(p).download},"国内下载",8,zt)]),_:1})])]),_:1})])}}},Ut=Ce(kt,[["__scopeId","data-v-b6a494cd"]]);export{Ut as default};
