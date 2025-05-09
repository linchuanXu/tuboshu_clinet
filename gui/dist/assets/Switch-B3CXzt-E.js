import{i as Ee,a as Fr,p as _e,d as O}from"./headers-D3M31qvl.js";import{K as Ie,V as Ge,j as M,a6 as zr,J as Qe,cw as Mr,x as j,C as a,cx as $r,Q as S,T as z,R as l,ab as De,Y as Ze,L as Pe,af as et,cu as ge,cy as ke,ag as tt,G as rt,cz as Rr,I as Se,r as P,w as We,cA as Tr,S as k,U as Q,z as ot,y as Fe,M as nt,O as je,q as _r,be as Ar,ai as Ue,A as Br,W as at,X as D,an as Dr,F as Wr,cv as Vr,a8 as Ke,cB as qe,P as F,D as I,cC as Xe,cD as Er,ae as Ae}from"./index-C6W50b9y.js";const Ye=Qe("n-form-item");function it(e,{defaultSize:n="medium",mergedSize:r,mergedDisabled:h}={}){const i=Ie(Ye,null);Ge(Ye,null);const u=M(r?()=>r(i):()=>{const{size:d}=e;if(d)return d;if(i){const{mergedSize:s}=i;if(s.value!==void 0)return s.value}return n}),c=M(h?()=>h(i):()=>{const{disabled:d}=e;return d!==void 0?d:i?i.disabled.value:!1}),f=M(()=>{const{status:d}=e;return d||(i==null?void 0:i.mergedValidationStatus.value)});return zr(()=>{i&&i.restoreValidation()}),{mergedSizeRef:u,mergedDisabledRef:c,mergedStatusRef:f,nTriggerFormBlur(){i&&i.handleContentBlur()},nTriggerFormChange(){i&&i.handleContentChange()},nTriggerFormFocus(){i&&i.handleContentFocus()},nTriggerFormInput(){i&&i.handleContentInput()}}}const Ir={name:"en-US",global:{undo:"Undo",redo:"Redo",confirm:"Confirm",clear:"Clear"},Popconfirm:{positiveText:"Confirm",negativeText:"Cancel"},Cascader:{placeholder:"Please Select",loading:"Loading",loadingRequiredMessage:e=>`Please load all ${e}'s descendants before checking it.`},Time:{dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss"},DatePicker:{yearFormat:"yyyy",monthFormat:"MMM",dayFormat:"eeeeee",yearTypeFormat:"yyyy",monthTypeFormat:"yyyy-MM",dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss",quarterFormat:"yyyy-qqq",weekFormat:"yyyy-w",clear:"Clear",now:"Now",confirm:"Confirm",selectTime:"Select Time",selectDate:"Select Date",datePlaceholder:"Select Date",datetimePlaceholder:"Select Date and Time",monthPlaceholder:"Select Month",yearPlaceholder:"Select Year",quarterPlaceholder:"Select Quarter",weekPlaceholder:"Select Week",startDatePlaceholder:"Start Date",endDatePlaceholder:"End Date",startDatetimePlaceholder:"Start Date and Time",endDatetimePlaceholder:"End Date and Time",startMonthPlaceholder:"Start Month",endMonthPlaceholder:"End Month",monthBeforeYear:!0,firstDayOfWeek:6,today:"Today"},DataTable:{checkTableAll:"Select all in the table",uncheckTableAll:"Unselect all in the table",confirm:"Confirm",clear:"Clear"},LegacyTransfer:{sourceTitle:"Source",targetTitle:"Target"},Transfer:{selectAll:"Select all",unselectAll:"Unselect all",clearAll:"Clear",total:e=>`Total ${e} items`,selected:e=>`${e} items selected`},Empty:{description:"No Data"},Select:{placeholder:"Please Select"},TimePicker:{placeholder:"Select Time",positiveText:"OK",negativeText:"Cancel",now:"Now",clear:"Clear"},Pagination:{goto:"Goto",selectionSuffix:"page"},DynamicTags:{add:"Add"},Log:{loading:"Loading"},Input:{placeholder:"Please Input"},InputNumber:{placeholder:"Please Input"},DynamicInput:{create:"Create"},ThemeEditor:{title:"Theme Editor",clearAllVars:"Clear All Variables",clearSearch:"Clear Search",filterCompName:"Filter Component Name",filterVarName:"Filter Variable Name",import:"Import",export:"Export",restore:"Reset to Default"},Image:{tipPrevious:"Previous picture (←)",tipNext:"Next picture (→)",tipCounterclockwise:"Counterclockwise",tipClockwise:"Clockwise",tipZoomOut:"Zoom out",tipZoomIn:"Zoom in",tipDownload:"Download",tipClose:"Close (Esc)",tipOriginalSize:"Zoom to original size"}},Lr=Ir;function Be(e){return function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=n.width?String(n.width):e.defaultWidth,h=e.formats[r]||e.formats[e.defaultWidth];return h}}function fe(e){return function(n,r){var h=r!=null&&r.context?String(r.context):"standalone",i;if(h==="formatting"&&e.formattingValues){var u=e.defaultFormattingWidth||e.defaultWidth,c=r!=null&&r.width?String(r.width):u;i=e.formattingValues[c]||e.formattingValues[u]}else{var f=e.defaultWidth,d=r!=null&&r.width?String(r.width):e.defaultWidth;i=e.values[d]||e.values[f]}var s=e.argumentCallback?e.argumentCallback(n):n;return i[s]}}function ve(e){return function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},h=r.width,i=h&&e.matchPatterns[h]||e.matchPatterns[e.defaultMatchWidth],u=n.match(i);if(!u)return null;var c=u[0],f=h&&e.parsePatterns[h]||e.parsePatterns[e.defaultParseWidth],d=Array.isArray(f)?Or(f,function(p){return p.test(c)}):Nr(f,function(p){return p.test(c)}),s;s=e.valueCallback?e.valueCallback(d):d,s=r.valueCallback?r.valueCallback(s):s;var m=n.slice(c.length);return{value:s,rest:m}}}function Nr(e,n){for(var r in e)if(e.hasOwnProperty(r)&&n(e[r]))return r}function Or(e,n){for(var r=0;r<e.length;r++)if(n(e[r]))return r}function Hr(e){return function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},h=n.match(e.matchPattern);if(!h)return null;var i=h[0],u=n.match(e.parsePattern);if(!u)return null;var c=e.valueCallback?e.valueCallback(u[0]):u[0];c=r.valueCallback?r.valueCallback(c):c;var f=n.slice(i.length);return{value:c,rest:f}}}var jr={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Ur=function(n,r,h){var i,u=jr[n];return typeof u=="string"?i=u:r===1?i=u.one:i=u.other.replace("{{count}}",r.toString()),h!=null&&h.addSuffix?h.comparison&&h.comparison>0?"in "+i:i+" ago":i};const Kr=Ur;var qr={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Xr={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Yr={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Jr={date:Be({formats:qr,defaultWidth:"full"}),time:Be({formats:Xr,defaultWidth:"full"}),dateTime:Be({formats:Yr,defaultWidth:"full"})};const Gr=Jr;var Qr={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Zr=function(n,r,h,i){return Qr[n]};const eo=Zr;var to={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},ro={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},oo={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},no={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},ao={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},io={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},lo=function(n,r){var h=Number(n),i=h%100;if(i>20||i<10)switch(i%10){case 1:return h+"st";case 2:return h+"nd";case 3:return h+"rd"}return h+"th"},so={ordinalNumber:lo,era:fe({values:to,defaultWidth:"wide"}),quarter:fe({values:ro,defaultWidth:"wide",argumentCallback:function(n){return n-1}}),month:fe({values:oo,defaultWidth:"wide"}),day:fe({values:no,defaultWidth:"wide"}),dayPeriod:fe({values:ao,defaultWidth:"wide",formattingValues:io,defaultFormattingWidth:"wide"})};const co=so;var uo=/^(\d+)(th|st|nd|rd)?/i,ho=/\d+/i,fo={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},vo={any:[/^b/i,/^(a|c)/i]},mo={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},go={any:[/1/i,/2/i,/3/i,/4/i]},po={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},bo={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},yo={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},wo={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},xo={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Co={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},So={ordinalNumber:Hr({matchPattern:uo,parsePattern:ho,valueCallback:function(n){return parseInt(n,10)}}),era:ve({matchPatterns:fo,defaultMatchWidth:"wide",parsePatterns:vo,defaultParseWidth:"any"}),quarter:ve({matchPatterns:mo,defaultMatchWidth:"wide",parsePatterns:go,defaultParseWidth:"any",valueCallback:function(n){return n+1}}),month:ve({matchPatterns:po,defaultMatchWidth:"wide",parsePatterns:bo,defaultParseWidth:"any"}),day:ve({matchPatterns:yo,defaultMatchWidth:"wide",parsePatterns:wo,defaultParseWidth:"any"}),dayPeriod:ve({matchPatterns:xo,defaultMatchWidth:"any",parsePatterns:Co,defaultParseWidth:"any"})};const Po=So;var ko={code:"en-US",formatDistance:Kr,formatLong:Gr,formatRelative:eo,localize:co,match:Po,options:{weekStartsOn:0,firstWeekContainsDate:1}};const Fo=ko,zo={name:"en-US",locale:Fo},Mo=zo;function $o(e){const{mergedLocaleRef:n,mergedDateLocaleRef:r}=Ie(Mr,null)||{},h=M(()=>{var u,c;return(c=(u=n==null?void 0:n.value)===null||u===void 0?void 0:u[e])!==null&&c!==void 0?c:Lr[e]});return{dateLocaleRef:M(()=>{var u;return(u=r==null?void 0:r.value)!==null&&u!==void 0?u:Mo}),localeRef:h}}const Ro=j({name:"Eye",render(){return a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},a("path",{d:"M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),a("circle",{cx:"256",cy:"256",r:"80",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"}))}}),To=j({name:"EyeOff",render(){return a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},a("path",{d:"M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",fill:"currentColor"}),a("path",{d:"M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",fill:"currentColor"}),a("path",{d:"M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",fill:"currentColor"}),a("path",{d:"M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",fill:"currentColor"}),a("path",{d:"M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",fill:"currentColor"}))}}),_o=j({name:"ChevronDown",render(){return a("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a("path",{d:"M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",fill:"currentColor"}))}}),Ao=$r("clear",a("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},a("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},a("g",{fill:"currentColor","fill-rule":"nonzero"},a("path",{d:"M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"}))))),Bo=S("base-clear",`
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`,[z(">",[l("clear",`
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `,[z("&:hover",`
 color: var(--n-clear-color-hover)!important;
 `),z("&:active",`
 color: var(--n-clear-color-pressed)!important;
 `)]),l("placeholder",`
 display: flex;
 `),l("clear, placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[De({originalTransform:"translateX(-50%) translateY(-50%)",left:"50%",top:"50%"})])])]),Ve=j({name:"BaseClear",props:{clsPrefix:{type:String,required:!0},show:Boolean,onClear:Function},setup(e){return Ze("-base-clear",Bo,Pe(e,"clsPrefix")),{handleMouseDown(n){n.preventDefault()}}},render(){const{clsPrefix:e}=this;return a("div",{class:`${e}-base-clear`},a(et,null,{default:()=>{var n,r;return this.show?a("div",{key:"dismiss",class:`${e}-base-clear__clear`,onClick:this.onClear,onMousedown:this.handleMouseDown,"data-clear":!0},ge(this.$slots.icon,()=>[a(ke,{clsPrefix:e},{default:()=>a(Ao,null)})])):a("div",{key:"icon",class:`${e}-base-clear__placeholder`},(r=(n=this.$slots).placeholder)===null||r===void 0?void 0:r.call(n))}}))}}),Do=j({name:"InternalSelectionSuffix",props:{clsPrefix:{type:String,required:!0},showArrow:{type:Boolean,default:void 0},showClear:{type:Boolean,default:void 0},loading:{type:Boolean,default:!1},onClear:Function},setup(e,{slots:n}){return()=>{const{clsPrefix:r}=e;return a(tt,{clsPrefix:r,class:`${r}-base-suffix`,strokeWidth:24,scale:.85,show:e.loading},{default:()=>e.showArrow?a(Ve,{clsPrefix:r,show:e.showClear,onClear:e.onClear},{placeholder:()=>a(ke,{clsPrefix:r,class:`${r}-base-suffix__arrow`},{default:()=>ge(n.default,()=>[a(_o,null)])})}):null})}}}),Wo=Ee&&"chrome"in window;Ee&&navigator.userAgent.includes("Firefox");const Vo=Ee&&navigator.userAgent.includes("Safari")&&!Wo,Eo=e=>{const{textColor2:n,textColor3:r,textColorDisabled:h,primaryColor:i,primaryColorHover:u,inputColor:c,inputColorDisabled:f,borderColor:d,warningColor:s,warningColorHover:m,errorColor:p,errorColorHover:g,borderRadius:$,lineHeight:x,fontSizeTiny:oe,fontSizeSmall:H,fontSizeMedium:ne,fontSizeLarge:A,heightTiny:L,heightSmall:U,heightMedium:W,heightLarge:Z,actionColor:R,clearColor:b,clearColorHover:T,clearColorPressed:B,placeholderColor:V,placeholderColorDisabled:N,iconColor:K,iconColorDisabled:ae,iconColorHover:q,iconColorPressed:ie}=e;return Object.assign(Object.assign({},Rr),{countTextColorDisabled:h,countTextColor:r,heightTiny:L,heightSmall:U,heightMedium:W,heightLarge:Z,fontSizeTiny:oe,fontSizeSmall:H,fontSizeMedium:ne,fontSizeLarge:A,lineHeight:x,lineHeightTextarea:x,borderRadius:$,iconSize:"16px",groupLabelColor:R,groupLabelTextColor:n,textColor:n,textColorDisabled:h,textDecorationColor:n,caretColor:i,placeholderColor:V,placeholderColorDisabled:N,color:c,colorDisabled:f,colorFocus:c,groupLabelBorder:`1px solid ${d}`,border:`1px solid ${d}`,borderHover:`1px solid ${u}`,borderDisabled:`1px solid ${d}`,borderFocus:`1px solid ${u}`,boxShadowFocus:`0 0 0 2px ${Se(i,{alpha:.2})}`,loadingColor:i,loadingColorWarning:s,borderWarning:`1px solid ${s}`,borderHoverWarning:`1px solid ${m}`,colorFocusWarning:c,borderFocusWarning:`1px solid ${m}`,boxShadowFocusWarning:`0 0 0 2px ${Se(s,{alpha:.2})}`,caretColorWarning:s,loadingColorError:p,borderError:`1px solid ${p}`,borderHoverError:`1px solid ${g}`,colorFocusError:c,borderFocusError:`1px solid ${g}`,boxShadowFocusError:`0 0 0 2px ${Se(p,{alpha:.2})}`,caretColorError:p,clearColor:b,clearColorHover:T,clearColorPressed:B,iconColor:K,iconColorDisabled:ae,iconColorHover:q,iconColorPressed:ie,suffixTextColor:n})},Io={name:"Input",common:rt,self:Eo},Lo=Io,lt=Qe("n-input");function No(e){let n=0;for(const r of e)n++;return n}function Ce(e){return e===""||e==null}function Oo(e){const n=P(null);function r(){const{value:u}=e;if(!(u!=null&&u.focus)){i();return}const{selectionStart:c,selectionEnd:f,value:d}=u;if(c==null||f==null){i();return}n.value={start:c,end:f,beforeText:d.slice(0,c),afterText:d.slice(f)}}function h(){var u;const{value:c}=n,{value:f}=e;if(!c||!f)return;const{value:d}=f,{start:s,beforeText:m,afterText:p}=c;let g=d.length;if(d.endsWith(p))g=d.length-p.length;else if(d.startsWith(m))g=m.length;else{const $=m[s-1],x=d.indexOf($,s-1);x!==-1&&(g=x+1)}(u=f.setSelectionRange)===null||u===void 0||u.call(f,g,g)}function i(){n.value=null}return We(e,i),{recordCursor:r,restoreCursor:h}}const Je=j({name:"InputWordCount",setup(e,{slots:n}){const{mergedValueRef:r,maxlengthRef:h,mergedClsPrefixRef:i,countGraphemesRef:u}=Ie(lt),c=M(()=>{const{value:f}=r;return f===null||Array.isArray(f)?0:(u.value||No)(f)});return()=>{const{value:f}=h,{value:d}=r;return a("span",{class:`${i.value}-input-word-count`},Tr(n.default,{value:d===null||Array.isArray(d)?"":d},()=>[f===void 0?c.value:`${c.value} / ${f}`]))}}}),Ho=S("input",`
 max-width: 100%;
 cursor: text;
 line-height: 1.5;
 z-index: auto;
 outline: none;
 box-sizing: border-box;
 position: relative;
 display: inline-flex;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 --n-padding-vertical: calc((var(--n-height) - 1.5 * var(--n-font-size)) / 2);
`,[l("input, textarea",`
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),l("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder",`
 box-sizing: border-box;
 font-size: inherit;
 line-height: 1.5;
 font-family: inherit;
 border: none;
 outline: none;
 background-color: #0000;
 text-align: inherit;
 transition:
 -webkit-text-fill-color .3s var(--n-bezier),
 caret-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 `),l("input-el, textarea-el",`
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `,[z("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),z("&::placeholder",`
 color: #0000;
 -webkit-text-fill-color: transparent !important;
 `),z("&:-webkit-autofill ~",[l("placeholder","display: none;")])]),k("round",[Q("textarea","border-radius: calc(var(--n-height) / 2);")]),l("placeholder",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `,[z("span",`
 width: 100%;
 display: inline-block;
 `)]),k("textarea",[l("placeholder","overflow: visible;")]),Q("autosize","width: 100%;"),k("autosize",[l("textarea-el, input-el",`
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),S("input-wrapper",`
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `),l("input-mirror",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre;
 pointer-events: none;
 `),l("input-el",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[z("&[type=password]::-ms-reveal","display: none;"),z("+",[l("placeholder",`
 display: flex;
 align-items: center; 
 `)])]),Q("textarea",[l("placeholder","white-space: nowrap;")]),l("eye",`
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `),k("textarea","width: 100%;",[S("input-word-count",`
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `),k("resizable",[S("input-wrapper",`
 resize: vertical;
 min-height: var(--n-height);
 `)]),l("textarea-el, textarea-mirror, placeholder",`
 height: 100%;
 padding-left: 0;
 padding-right: 0;
 padding-top: var(--n-padding-vertical);
 padding-bottom: var(--n-padding-vertical);
 word-break: break-word;
 display: inline-block;
 vertical-align: bottom;
 box-sizing: border-box;
 line-height: var(--n-line-height-textarea);
 margin: 0;
 resize: none;
 white-space: pre-wrap;
 scroll-padding-block-end: var(--n-padding-vertical);
 `),l("textarea-mirror",`
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),k("pair",[l("input-el, placeholder","text-align: center;"),l("separator",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 white-space: nowrap;
 `,[S("icon",`
 color: var(--n-icon-color);
 `),S("base-icon",`
 color: var(--n-icon-color);
 `)])]),k("disabled",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[l("border","border: var(--n-border-disabled);"),l("input-el, textarea-el",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `),l("placeholder","color: var(--n-placeholder-color-disabled);"),l("separator","color: var(--n-text-color-disabled);",[S("icon",`
 color: var(--n-icon-color-disabled);
 `),S("base-icon",`
 color: var(--n-icon-color-disabled);
 `)]),S("input-word-count",`
 color: var(--n-count-text-color-disabled);
 `),l("suffix, prefix","color: var(--n-text-color-disabled);",[S("icon",`
 color: var(--n-icon-color-disabled);
 `),S("internal-icon",`
 color: var(--n-icon-color-disabled);
 `)])]),Q("disabled",[l("eye",`
 color: var(--n-icon-color);
 cursor: pointer;
 `,[z("&:hover",`
 color: var(--n-icon-color-hover);
 `),z("&:active",`
 color: var(--n-icon-color-pressed);
 `)]),z("&:hover",[l("state-border","border: var(--n-border-hover);")]),k("focus","background-color: var(--n-color-focus);",[l("state-border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),l("border, state-border",`
 box-sizing: border-box;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: inherit;
 border: var(--n-border);
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),l("state-border",`
 border-color: #0000;
 z-index: 1;
 `),l("prefix","margin-right: 4px;"),l("suffix",`
 margin-left: 4px;
 `),l("suffix, prefix",`
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `,[S("base-loading",`
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `),S("base-clear",`
 font-size: var(--n-icon-size);
 `,[l("placeholder",[S("base-icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]),z(">",[S("icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]),S("base-icon",`
 font-size: var(--n-icon-size);
 `)]),S("input-word-count",`
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),["warning","error"].map(e=>k(`${e}-status`,[Q("disabled",[S("base-loading",`
 color: var(--n-loading-color-${e})
 `),l("input-el, textarea-el",`
 caret-color: var(--n-caret-color-${e});
 `),l("state-border",`
 border: var(--n-border-${e});
 `),z("&:hover",[l("state-border",`
 border: var(--n-border-hover-${e});
 `)]),z("&:focus",`
 background-color: var(--n-color-focus-${e});
 `,[l("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)]),k("focus",`
 background-color: var(--n-color-focus-${e});
 `,[l("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),jo=S("input",[k("disabled",[l("input-el, textarea-el",`
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]),Uo=Object.assign(Object.assign({},Fe.props),{bordered:{type:Boolean,default:void 0},type:{type:String,default:"text"},placeholder:[Array,String],defaultValue:{type:[String,Array],default:null},value:[String,Array],disabled:{type:Boolean,default:void 0},size:String,rows:{type:[Number,String],default:3},round:Boolean,minlength:[String,Number],maxlength:[String,Number],clearable:Boolean,autosize:{type:[Boolean,Object],default:!1},pair:Boolean,separator:String,readonly:{type:[String,Boolean],default:!1},passivelyActivated:Boolean,showPasswordOn:String,stateful:{type:Boolean,default:!0},autofocus:Boolean,inputProps:Object,resizable:{type:Boolean,default:!0},showCount:Boolean,loading:{type:Boolean,default:void 0},allowInput:Function,renderCount:Function,onMousedown:Function,onKeydown:Function,onKeyup:[Function,Array],onInput:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClick:[Function,Array],onChange:[Function,Array],onClear:[Function,Array],countGraphemes:Function,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],textDecoration:[String,Array],attrSize:{type:Number,default:20},onInputBlur:[Function,Array],onInputFocus:[Function,Array],onDeactivate:[Function,Array],onActivate:[Function,Array],onWrapperFocus:[Function,Array],onWrapperBlur:[Function,Array],internalDeactivateOnEnter:Boolean,internalForceFocus:Boolean,internalLoadingBeforeSuffix:{type:Boolean,default:!0},showPasswordToggle:Boolean}),Zo=j({name:"Input",props:Uo,setup(e){const{mergedClsPrefixRef:n,mergedBorderedRef:r,inlineThemeDisabled:h,mergedRtlRef:i}=ot(e),u=Fe("Input","-input",Ho,Lo,e,n);Vo&&Ze("-input-safari",jo,n);const c=P(null),f=P(null),d=P(null),s=P(null),m=P(null),p=P(null),g=P(null),$=Oo(g),x=P(null),{localeRef:oe}=$o("Input"),H=P(e.defaultValue),ne=Pe(e,"value"),A=nt(ne,H),L=it(e),{mergedSizeRef:U,mergedDisabledRef:W,mergedStatusRef:Z}=L,R=P(!1),b=P(!1),T=P(!1),B=P(!1);let V=null;const N=M(()=>{const{placeholder:t,pair:o}=e;return o?Array.isArray(t)?t:t===void 0?["",""]:[t,t]:t===void 0?[oe.value.placeholder]:[t]}),K=M(()=>{const{value:t}=T,{value:o}=A,{value:v}=N;return!t&&(Ce(o)||Array.isArray(o)&&Ce(o[0]))&&v[0]}),ae=M(()=>{const{value:t}=T,{value:o}=A,{value:v}=N;return!t&&v[1]&&(Ce(o)||Array.isArray(o)&&Ce(o[1]))}),q=je(()=>e.internalForceFocus||R.value),ie=je(()=>{if(W.value||e.readonly||!e.clearable||!q.value&&!b.value)return!1;const{value:t}=A,{value:o}=q;return e.pair?!!(Array.isArray(t)&&(t[0]||t[1]))&&(b.value||o):!!t&&(b.value||o)}),le=M(()=>{const{showPasswordOn:t}=e;if(t)return t;if(e.showPasswordToggle)return"click"}),_=P(!1),ze=M(()=>{const{textDecoration:t}=e;return t?Array.isArray(t)?t.map(o=>({textDecoration:o})):[{textDecoration:t}]:["",""]}),pe=P(void 0),E=()=>{var t,o;if(e.type==="textarea"){const{autosize:v}=e;if(v&&(pe.value=(o=(t=x.value)===null||t===void 0?void 0:t.$el)===null||o===void 0?void 0:o.offsetWidth),!f.value||typeof v=="boolean")return;const{paddingTop:w,paddingBottom:C,lineHeight:y}=window.getComputedStyle(f.value),Y=Number(w.slice(0,-2)),J=Number(C.slice(0,-2)),G=Number(y.slice(0,-2)),{value:ue}=d;if(!ue)return;if(v.minRows){const he=Math.max(v.minRows,1),Te=`${Y+J+G*he}px`;ue.style.minHeight=Te}if(v.maxRows){const he=`${Y+J+G*v.maxRows}px`;ue.style.maxHeight=he}}},X=M(()=>{const{maxlength:t}=e;return t===void 0?void 0:Number(t)});_r(()=>{const{value:t}=A;Array.isArray(t)||Re(t)});const Me=Ar().proxy;function ee(t,o){const{onUpdateValue:v,"onUpdate:value":w,onInput:C}=e,{nTriggerFormInput:y}=L;v&&F(v,t,o),w&&F(w,t,o),C&&F(C,t,o),H.value=t,y()}function te(t,o){const{onChange:v}=e,{nTriggerFormChange:w}=L;v&&F(v,t,o),H.value=t,w()}function se(t){const{onBlur:o}=e,{nTriggerFormBlur:v}=L;o&&F(o,t),v()}function ce(t){const{onFocus:o}=e,{nTriggerFormFocus:v}=L;o&&F(o,t),v()}function de(t){const{onClear:o}=e;o&&F(o,t)}function st(t){const{onInputBlur:o}=e;o&&F(o,t)}function ct(t){const{onInputFocus:o}=e;o&&F(o,t)}function dt(){const{onDeactivate:t}=e;t&&F(t)}function ut(){const{onActivate:t}=e;t&&F(t)}function ht(t){const{onClick:o}=e;o&&F(o,t)}function ft(t){const{onWrapperFocus:o}=e;o&&F(o,t)}function vt(t){const{onWrapperBlur:o}=e;o&&F(o,t)}function mt(){T.value=!0}function gt(t){T.value=!1,t.target===p.value?be(t,1):be(t,0)}function be(t,o=0,v="input"){const w=t.target.value;if(Re(w),t instanceof InputEvent&&!t.isComposing&&(T.value=!1),e.type==="textarea"){const{value:y}=x;y&&y.syncUnifiedContainer()}if(V=w,T.value)return;$.recordCursor();const C=pt(w);if(C)if(!e.pair)v==="input"?ee(w,{source:o}):te(w,{source:o});else{let{value:y}=A;Array.isArray(y)?y=[y[0],y[1]]:y=["",""],y[o]=w,v==="input"?ee(y,{source:o}):te(y,{source:o})}Me.$forceUpdate(),C||Ke($.restoreCursor)}function pt(t){const{countGraphemes:o,maxlength:v,minlength:w}=e;if(o){let y;if(v!==void 0&&(y===void 0&&(y=o(t)),y>Number(v))||w!==void 0&&(y===void 0&&(y=o(t)),y<Number(v)))return!1}const{allowInput:C}=e;return typeof C=="function"?C(t):!0}function bt(t){st(t),t.relatedTarget===c.value&&dt(),t.relatedTarget!==null&&(t.relatedTarget===m.value||t.relatedTarget===p.value||t.relatedTarget===f.value)||(B.value=!1),ye(t,"blur"),g.value=null}function yt(t,o){ct(t),R.value=!0,B.value=!0,ut(),ye(t,"focus"),o===0?g.value=m.value:o===1?g.value=p.value:o===2&&(g.value=f.value)}function wt(t){e.passivelyActivated&&(vt(t),ye(t,"blur"))}function xt(t){e.passivelyActivated&&(R.value=!0,ft(t),ye(t,"focus"))}function ye(t,o){t.relatedTarget!==null&&(t.relatedTarget===m.value||t.relatedTarget===p.value||t.relatedTarget===f.value||t.relatedTarget===c.value)||(o==="focus"?(ce(t),R.value=!0):o==="blur"&&(se(t),R.value=!1))}function Ct(t,o){be(t,o,"change")}function St(t){ht(t)}function Pt(t){de(t),Le()}function Le(){e.pair?(ee(["",""],{source:"clear"}),te(["",""],{source:"clear"})):(ee("",{source:"clear"}),te("",{source:"clear"}))}function kt(t){const{onMousedown:o}=e;o&&o(t);const{tagName:v}=t.target;if(v!=="INPUT"&&v!=="TEXTAREA"){if(e.resizable){const{value:w}=c;if(w){const{left:C,top:y,width:Y,height:J}=w.getBoundingClientRect(),G=14;if(C+Y-G<t.clientX&&t.clientX<C+Y&&y+J-G<t.clientY&&t.clientY<y+J)return}}t.preventDefault(),R.value||Ne()}}function Ft(){var t;b.value=!0,e.type==="textarea"&&((t=x.value)===null||t===void 0||t.handleMouseEnterWrapper())}function zt(){var t;b.value=!1,e.type==="textarea"&&((t=x.value)===null||t===void 0||t.handleMouseLeaveWrapper())}function Mt(){W.value||le.value==="click"&&(_.value=!_.value)}function $t(t){if(W.value)return;t.preventDefault();const o=w=>{w.preventDefault(),Xe("mouseup",document,o)};if(qe("mouseup",document,o),le.value!=="mousedown")return;_.value=!0;const v=()=>{_.value=!1,Xe("mouseup",document,v)};qe("mouseup",document,v)}function Rt(t){e.onKeyup&&F(e.onKeyup,t)}function Tt(t){switch(e.onKeydown&&F(e.onKeydown,t),t.key){case"Escape":$e();break;case"Enter":_t(t);break}}function _t(t){var o,v;if(e.passivelyActivated){const{value:w}=B;if(w){e.internalDeactivateOnEnter&&$e();return}t.preventDefault(),e.type==="textarea"?(o=f.value)===null||o===void 0||o.focus():(v=m.value)===null||v===void 0||v.focus()}}function $e(){e.passivelyActivated&&(B.value=!1,Ke(()=>{var t;(t=c.value)===null||t===void 0||t.focus()}))}function Ne(){var t,o,v;W.value||(e.passivelyActivated?(t=c.value)===null||t===void 0||t.focus():((o=f.value)===null||o===void 0||o.focus(),(v=m.value)===null||v===void 0||v.focus()))}function At(){var t;!((t=c.value)===null||t===void 0)&&t.contains(document.activeElement)&&document.activeElement.blur()}function Bt(){var t,o;(t=f.value)===null||t===void 0||t.select(),(o=m.value)===null||o===void 0||o.select()}function Dt(){W.value||(f.value?f.value.focus():m.value&&m.value.focus())}function Wt(){const{value:t}=c;t!=null&&t.contains(document.activeElement)&&t!==document.activeElement&&$e()}function Vt(t){if(e.type==="textarea"){const{value:o}=f;o==null||o.scrollTo(t)}else{const{value:o}=m;o==null||o.scrollTo(t)}}function Re(t){const{type:o,pair:v,autosize:w}=e;if(!v&&w)if(o==="textarea"){const{value:C}=d;C&&(C.textContent=(t??"")+`\r
`)}else{const{value:C}=s;C&&(t?C.textContent=t:C.innerHTML="&nbsp;")}}function Et(){E()}const Oe=P({top:"0"});function It(t){var o;const{scrollTop:v}=t.target;Oe.value.top=`${-v}px`,(o=x.value)===null||o===void 0||o.syncUnifiedContainer()}let we=null;Ue(()=>{const{autosize:t,type:o}=e;t&&o==="textarea"?we=We(A,v=>{!Array.isArray(v)&&v!==V&&Re(v)}):we==null||we()});let xe=null;Ue(()=>{e.type==="textarea"?xe=We(A,t=>{var o;!Array.isArray(t)&&t!==V&&((o=x.value)===null||o===void 0||o.syncUnifiedContainer())}):xe==null||xe()}),Ge(lt,{mergedValueRef:A,maxlengthRef:X,mergedClsPrefixRef:n,countGraphemesRef:Pe(e,"countGraphemes")});const Lt={wrapperElRef:c,inputElRef:m,textareaElRef:f,isCompositing:T,clear:Le,focus:Ne,blur:At,select:Bt,deactivate:Wt,activate:Dt,scrollTo:Vt},Nt=Br("Input",i,n),He=M(()=>{const{value:t}=U,{common:{cubicBezierEaseInOut:o},self:{color:v,borderRadius:w,textColor:C,caretColor:y,caretColorError:Y,caretColorWarning:J,textDecorationColor:G,border:ue,borderDisabled:he,borderHover:Te,borderFocus:Ot,placeholderColor:Ht,placeholderColorDisabled:jt,lineHeightTextarea:Ut,colorDisabled:Kt,colorFocus:qt,textColorDisabled:Xt,boxShadowFocus:Yt,iconSize:Jt,colorFocusWarning:Gt,boxShadowFocusWarning:Qt,borderWarning:Zt,borderFocusWarning:er,borderHoverWarning:tr,colorFocusError:rr,boxShadowFocusError:or,borderError:nr,borderFocusError:ar,borderHoverError:ir,clearSize:lr,clearColor:sr,clearColorHover:cr,clearColorPressed:dr,iconColor:ur,iconColorDisabled:hr,suffixTextColor:fr,countTextColor:vr,countTextColorDisabled:mr,iconColorHover:gr,iconColorPressed:pr,loadingColor:br,loadingColorError:yr,loadingColorWarning:wr,[I("padding",t)]:xr,[I("fontSize",t)]:Cr,[I("height",t)]:Sr}}=u.value,{left:Pr,right:kr}=Fr(xr);return{"--n-bezier":o,"--n-count-text-color":vr,"--n-count-text-color-disabled":mr,"--n-color":v,"--n-font-size":Cr,"--n-border-radius":w,"--n-height":Sr,"--n-padding-left":Pr,"--n-padding-right":kr,"--n-text-color":C,"--n-caret-color":y,"--n-text-decoration-color":G,"--n-border":ue,"--n-border-disabled":he,"--n-border-hover":Te,"--n-border-focus":Ot,"--n-placeholder-color":Ht,"--n-placeholder-color-disabled":jt,"--n-icon-size":Jt,"--n-line-height-textarea":Ut,"--n-color-disabled":Kt,"--n-color-focus":qt,"--n-text-color-disabled":Xt,"--n-box-shadow-focus":Yt,"--n-loading-color":br,"--n-caret-color-warning":J,"--n-color-focus-warning":Gt,"--n-box-shadow-focus-warning":Qt,"--n-border-warning":Zt,"--n-border-focus-warning":er,"--n-border-hover-warning":tr,"--n-loading-color-warning":wr,"--n-caret-color-error":Y,"--n-color-focus-error":rr,"--n-box-shadow-focus-error":or,"--n-border-error":nr,"--n-border-focus-error":ar,"--n-border-hover-error":ir,"--n-loading-color-error":yr,"--n-clear-color":sr,"--n-clear-size":lr,"--n-clear-color-hover":cr,"--n-clear-color-pressed":dr,"--n-icon-color":ur,"--n-icon-color-hover":gr,"--n-icon-color-pressed":pr,"--n-icon-color-disabled":hr,"--n-suffix-text-color":fr}}),re=h?at("input",M(()=>{const{value:t}=U;return t[0]}),He,e):void 0;return Object.assign(Object.assign({},Lt),{wrapperElRef:c,inputElRef:m,inputMirrorElRef:s,inputEl2Ref:p,textareaElRef:f,textareaMirrorElRef:d,textareaScrollbarInstRef:x,rtlEnabled:Nt,uncontrolledValue:H,mergedValue:A,passwordVisible:_,mergedPlaceholder:N,showPlaceholder1:K,showPlaceholder2:ae,mergedFocus:q,isComposing:T,activated:B,showClearButton:ie,mergedSize:U,mergedDisabled:W,textDecorationStyle:ze,mergedClsPrefix:n,mergedBordered:r,mergedShowPasswordOn:le,placeholderStyle:Oe,mergedStatus:Z,textAreaScrollContainerWidth:pe,handleTextAreaScroll:It,handleCompositionStart:mt,handleCompositionEnd:gt,handleInput:be,handleInputBlur:bt,handleInputFocus:yt,handleWrapperBlur:wt,handleWrapperFocus:xt,handleMouseEnter:Ft,handleMouseLeave:zt,handleMouseDown:kt,handleChange:Ct,handleClick:St,handleClear:Pt,handlePasswordToggleClick:Mt,handlePasswordToggleMousedown:$t,handleWrapperKeydown:Tt,handleWrapperKeyup:Rt,handleTextAreaMirrorResize:Et,getTextareaScrollContainer:()=>f.value,mergedTheme:u,cssVars:h?void 0:He,themeClass:re==null?void 0:re.themeClass,onRender:re==null?void 0:re.onRender})},render(){var e,n;const{mergedClsPrefix:r,mergedStatus:h,themeClass:i,type:u,countGraphemes:c,onRender:f}=this,d=this.$slots;return f==null||f(),a("div",{ref:"wrapperElRef",class:[`${r}-input`,i,h&&`${r}-input--${h}-status`,{[`${r}-input--rtl`]:this.rtlEnabled,[`${r}-input--disabled`]:this.mergedDisabled,[`${r}-input--textarea`]:u==="textarea",[`${r}-input--resizable`]:this.resizable&&!this.autosize,[`${r}-input--autosize`]:this.autosize,[`${r}-input--round`]:this.round&&u!=="textarea",[`${r}-input--pair`]:this.pair,[`${r}-input--focus`]:this.mergedFocus,[`${r}-input--stateful`]:this.stateful}],style:this.cssVars,tabindex:!this.mergedDisabled&&this.passivelyActivated&&!this.activated?0:void 0,onFocus:this.handleWrapperFocus,onBlur:this.handleWrapperBlur,onClick:this.handleClick,onMousedown:this.handleMouseDown,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd,onKeyup:this.handleWrapperKeyup,onKeydown:this.handleWrapperKeydown},a("div",{class:`${r}-input-wrapper`},D(d.prefix,s=>s&&a("div",{class:`${r}-input__prefix`},s)),u==="textarea"?a(Dr,{ref:"textareaScrollbarInstRef",class:`${r}-input__textarea`,container:this.getTextareaScrollContainer,triggerDisplayManually:!0,useUnifiedContainer:!0,internalHoistYRail:!0},{default:()=>{var s,m;const{textAreaScrollContainerWidth:p}=this,g={width:this.autosize&&p&&`${p}px`};return a(Wr,null,a("textarea",Object.assign({},this.inputProps,{ref:"textareaElRef",class:[`${r}-input__textarea-el`,(s=this.inputProps)===null||s===void 0?void 0:s.class],autofocus:this.autofocus,rows:Number(this.rows),placeholder:this.placeholder,value:this.mergedValue,disabled:this.mergedDisabled,maxlength:c?void 0:this.maxlength,minlength:c?void 0:this.minlength,readonly:this.readonly,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,style:[this.textDecorationStyle[0],(m=this.inputProps)===null||m===void 0?void 0:m.style,g],onBlur:this.handleInputBlur,onFocus:$=>{this.handleInputFocus($,2)},onInput:this.handleInput,onChange:this.handleChange,onScroll:this.handleTextAreaScroll})),this.showPlaceholder1?a("div",{class:`${r}-input__placeholder`,style:[this.placeholderStyle,g],key:"placeholder"},this.mergedPlaceholder[0]):null,this.autosize?a(Vr,{onResize:this.handleTextAreaMirrorResize},{default:()=>a("div",{ref:"textareaMirrorElRef",class:`${r}-input__textarea-mirror`,key:"mirror"})}):null)}}):a("div",{class:`${r}-input__input`},a("input",Object.assign({type:u==="password"&&this.mergedShowPasswordOn&&this.passwordVisible?"text":u},this.inputProps,{ref:"inputElRef",class:[`${r}-input__input-el`,(e=this.inputProps)===null||e===void 0?void 0:e.class],style:[this.textDecorationStyle[0],(n=this.inputProps)===null||n===void 0?void 0:n.style],tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[0],disabled:this.mergedDisabled,maxlength:c?void 0:this.maxlength,minlength:c?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[0]:this.mergedValue,readonly:this.readonly,autofocus:this.autofocus,size:this.attrSize,onBlur:this.handleInputBlur,onFocus:s=>{this.handleInputFocus(s,0)},onInput:s=>{this.handleInput(s,0)},onChange:s=>{this.handleChange(s,0)}})),this.showPlaceholder1?a("div",{class:`${r}-input__placeholder`},a("span",null,this.mergedPlaceholder[0])):null,this.autosize?a("div",{class:`${r}-input__input-mirror`,key:"mirror",ref:"inputMirrorElRef"}," "):null),!this.pair&&D(d.suffix,s=>s||this.clearable||this.showCount||this.mergedShowPasswordOn||this.loading!==void 0?a("div",{class:`${r}-input__suffix`},[D(d["clear-icon-placeholder"],m=>(this.clearable||m)&&a(Ve,{clsPrefix:r,show:this.showClearButton,onClear:this.handleClear},{placeholder:()=>m,icon:()=>{var p,g;return(g=(p=this.$slots)["clear-icon"])===null||g===void 0?void 0:g.call(p)}})),this.internalLoadingBeforeSuffix?null:s,this.loading!==void 0?a(Do,{clsPrefix:r,loading:this.loading,showArrow:!1,showClear:!1,style:this.cssVars}):null,this.internalLoadingBeforeSuffix?s:null,this.showCount&&this.type!=="textarea"?a(Je,null,{default:m=>{var p;return(p=d.count)===null||p===void 0?void 0:p.call(d,m)}}):null,this.mergedShowPasswordOn&&this.type==="password"?a("div",{class:`${r}-input__eye`,onMousedown:this.handlePasswordToggleMousedown,onClick:this.handlePasswordToggleClick},this.passwordVisible?ge(d["password-visible-icon"],()=>[a(ke,{clsPrefix:r},{default:()=>a(Ro,null)})]):ge(d["password-invisible-icon"],()=>[a(ke,{clsPrefix:r},{default:()=>a(To,null)})])):null]):null)),this.pair?a("span",{class:`${r}-input__separator`},ge(d.separator,()=>[this.separator])):null,this.pair?a("div",{class:`${r}-input-wrapper`},a("div",{class:`${r}-input__input`},a("input",{ref:"inputEl2Ref",type:this.type,class:`${r}-input__input-el`,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[1],disabled:this.mergedDisabled,maxlength:c?void 0:this.maxlength,minlength:c?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[1]:void 0,readonly:this.readonly,style:this.textDecorationStyle[1],onBlur:this.handleInputBlur,onFocus:s=>{this.handleInputFocus(s,1)},onInput:s=>{this.handleInput(s,1)},onChange:s=>{this.handleChange(s,1)}}),this.showPlaceholder2?a("div",{class:`${r}-input__placeholder`},a("span",null,this.mergedPlaceholder[1])):null),D(d.suffix,s=>(this.clearable||s)&&a("div",{class:`${r}-input__suffix`},[this.clearable&&a(Ve,{clsPrefix:r,show:this.showClearButton,onClear:this.handleClear},{icon:()=>{var m;return(m=d["clear-icon"])===null||m===void 0?void 0:m.call(d)},placeholder:()=>{var m;return(m=d["clear-icon-placeholder"])===null||m===void 0?void 0:m.call(d)}}),s]))):null,this.mergedBordered?a("div",{class:`${r}-input__border`}):null,this.mergedBordered?a("div",{class:`${r}-input__state-border`}):null,this.showCount&&u==="textarea"?a(Je,null,{default:s=>{var m;const{renderCount:p}=this;return p?p(s):(m=d.count)===null||m===void 0?void 0:m.call(d,s)}}):null)}}),Ko=e=>{const{primaryColor:n,opacityDisabled:r,borderRadius:h,textColor3:i}=e;return Object.assign(Object.assign({},Er),{iconColor:i,textColor:"white",loadingColor:n,opacityDisabled:r,railColor:"rgba(0, 0, 0, .14)",railColorActive:n,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:h,railBorderRadiusMedium:h,railBorderRadiusLarge:h,buttonBorderRadiusSmall:h,buttonBorderRadiusMedium:h,buttonBorderRadiusLarge:h,boxShadowFocus:`0 0 0 2px ${Se(n,{alpha:.2})}`})},qo={name:"Switch",common:rt,self:Ko},Xo=qo,Yo=S("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[l("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),l("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),l("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),S("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[De({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),l("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),l("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),l("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),z("&:focus",[l("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),k("round",[l("rail","border-radius: calc(var(--n-rail-height) / 2);",[l("button","border-radius: calc(var(--n-button-height) / 2);")])]),Q("disabled",[Q("icon",[k("rubber-band",[k("pressed",[l("rail",[l("button","max-width: var(--n-button-width-pressed);")])]),l("rail",[z("&:active",[l("button","max-width: var(--n-button-width-pressed);")])]),k("active",[k("pressed",[l("rail",[l("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),l("rail",[z("&:active",[l("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),k("active",[l("rail",[l("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),l("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[l("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[De()]),l("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),k("active",[l("rail","background-color: var(--n-rail-color-active);")]),k("loading",[l("rail",`
 cursor: wait;
 `)]),k("disabled",[l("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),Jo=Object.assign(Object.assign({},Fe.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let me;const en=j({name:"Switch",props:Jo,setup(e){me===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?me=CSS.supports("width","max(1px)"):me=!1:me=!0);const{mergedClsPrefixRef:n,inlineThemeDisabled:r}=ot(e),h=Fe("Switch","-switch",Yo,Xo,e,n),i=it(e),{mergedSizeRef:u,mergedDisabledRef:c}=i,f=P(e.defaultValue),d=Pe(e,"value"),s=nt(d,f),m=M(()=>s.value===e.checkedValue),p=P(!1),g=P(!1),$=M(()=>{const{railStyle:b}=e;if(b)return b({focused:g.value,checked:m.value})});function x(b){const{"onUpdate:value":T,onChange:B,onUpdateValue:V}=e,{nTriggerFormInput:N,nTriggerFormChange:K}=i;T&&F(T,b),V&&F(V,b),B&&F(B,b),f.value=b,N(),K()}function oe(){const{nTriggerFormFocus:b}=i;b()}function H(){const{nTriggerFormBlur:b}=i;b()}function ne(){e.loading||c.value||(s.value!==e.checkedValue?x(e.checkedValue):x(e.uncheckedValue))}function A(){g.value=!0,oe()}function L(){g.value=!1,H(),p.value=!1}function U(b){e.loading||c.value||b.key===" "&&(s.value!==e.checkedValue?x(e.checkedValue):x(e.uncheckedValue),p.value=!1)}function W(b){e.loading||c.value||b.key===" "&&(b.preventDefault(),p.value=!0)}const Z=M(()=>{const{value:b}=u,{self:{opacityDisabled:T,railColor:B,railColorActive:V,buttonBoxShadow:N,buttonColor:K,boxShadowFocus:ae,loadingColor:q,textColor:ie,iconColor:le,[I("buttonHeight",b)]:_,[I("buttonWidth",b)]:ze,[I("buttonWidthPressed",b)]:pe,[I("railHeight",b)]:E,[I("railWidth",b)]:X,[I("railBorderRadius",b)]:Me,[I("buttonBorderRadius",b)]:ee},common:{cubicBezierEaseInOut:te}}=h.value;let se,ce,de;return me?(se=`calc((${E} - ${_}) / 2)`,ce=`max(${E}, ${_})`,de=`max(${X}, calc(${X} + ${_} - ${E}))`):(se=_e((O(E)-O(_))/2),ce=_e(Math.max(O(E),O(_))),de=O(E)>O(_)?X:_e(O(X)+O(_)-O(E))),{"--n-bezier":te,"--n-button-border-radius":ee,"--n-button-box-shadow":N,"--n-button-color":K,"--n-button-width":ze,"--n-button-width-pressed":pe,"--n-button-height":_,"--n-height":ce,"--n-offset":se,"--n-opacity-disabled":T,"--n-rail-border-radius":Me,"--n-rail-color":B,"--n-rail-color-active":V,"--n-rail-height":E,"--n-rail-width":X,"--n-width":de,"--n-box-shadow-focus":ae,"--n-loading-color":q,"--n-text-color":ie,"--n-icon-color":le}}),R=r?at("switch",M(()=>u.value[0]),Z,e):void 0;return{handleClick:ne,handleBlur:L,handleFocus:A,handleKeyup:U,handleKeydown:W,mergedRailStyle:$,pressed:p,mergedClsPrefix:n,mergedValue:s,checked:m,mergedDisabled:c,cssVars:r?void 0:Z,themeClass:R==null?void 0:R.themeClass,onRender:R==null?void 0:R.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:n,checked:r,mergedRailStyle:h,onRender:i,$slots:u}=this;i==null||i();const{checked:c,unchecked:f,icon:d,"checked-icon":s,"unchecked-icon":m}=u,p=!(Ae(d)&&Ae(s)&&Ae(m));return a("div",{role:"switch","aria-checked":r,class:[`${e}-switch`,this.themeClass,p&&`${e}-switch--icon`,r&&`${e}-switch--active`,n&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},a("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:h},D(c,g=>D(f,$=>g||$?a("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},a("div",{class:`${e}-switch__rail-placeholder`},a("div",{class:`${e}-switch__button-placeholder`}),g),a("div",{class:`${e}-switch__rail-placeholder`},a("div",{class:`${e}-switch__button-placeholder`}),$)):null)),a("div",{class:`${e}-switch__button`},D(d,g=>D(s,$=>D(m,x=>a(et,null,{default:()=>this.loading?a(tt,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&($||g)?a("div",{class:`${e}-switch__button-icon`,key:$?"checked-icon":"icon"},$||g):!this.checked&&(x||g)?a("div",{class:`${e}-switch__button-icon`,key:x?"unchecked-icon":"icon"},x||g):null})))),D(c,g=>g&&a("div",{key:"checked",class:`${e}-switch__checked`},g)),D(f,g=>g&&a("div",{key:"unchecked",class:`${e}-switch__unchecked`},g)))))}});export{en as _,Zo as a,Vo as i,it as u};
