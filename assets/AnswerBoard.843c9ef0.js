import{_ as O,r as l,o as a,c as r,b as u,t as m,a as s,w as o,d as _,e as x,f as v,F as c,g}from"./index.798cf9cb.js";const T={name:"AnswerBoard",data(){return{originalStemList:[],StemList:[],Total:0,CurrentCnt:0,SingleOption:"",MultipleOptions:[],CurrentPage:1,RightAnswer:"",ConditionQueryForm:{Count:""}}},mounted(){const i=(this.$route||{}).name;i=="das_answer"&&this.$axios("/data/das.json").then(t=>{this.originalStemList=[...t.data.data],this.StemList=t.data.data,this.Total=t.data.data.length,console.log(this.originalStemList)}),i=="saa_answer"&&this.$axios("/data/saa.json").then(t=>{this.originalStemList=[...t.data.data],this.StemList=t.data.data,this.Total=t.data.data.length,console.log(this.originalStemList)}),i=="clf_answer"&&this.$axios("/data/clf.json").then(t=>{this.originalStemList=[...t.data.data],this.StemList=t.data.data,this.Total=t.data.data.length,console.log(this.originalStemList)}),i=="sap_answer"&&this.$axios("/data/sap.json").then(t=>{this.originalStemList=[...t.data.data],this.StemList=t.data.data,this.Total=t.data.data.length,console.log(this.originalStemList)})},methods:{submitSingleOption(){this.SingleOption==((this.StemList[this.CurrentCnt]||{}).answer||[])[0]?this.$notify({type:"success",message:"\u7B54\u6848\u6B63\u786E,\u6B63\u786E\u7B54\u6848\u662F"+((this.StemList[this.CurrentCnt]||{}).answer||[]).join(","),title:"\u606D\u559C\uFF0C\u56DE\u7B54\u6B63\u786E",showClose:!1}):this.$notify({type:"error",message:"\u7B54\u6848\u9519\u8BEF,\u6B63\u786E\u7B54\u6848\u662F"+((this.StemList[this.CurrentCnt]||{}).answer||[]).join(","),title:"\u606D\u559C\uFF0C\u56DE\u7B54\u9519\u8BEF",showClose:!1})},submitMultipOptions(){const i=(this.StemList[this.CurrentCnt]||{}).answer||[];i.length===this.MultipleOptions.length&&i.sort().toString()===this.MultipleOptions.sort().toString()?this.$notify({type:"success",message:"\u7B54\u6848\u6B63\u786E,\u6B63\u786E\u7B54\u6848\u662F"+((this.StemList[this.CurrentCnt]||{}).answer||[]).join(","),title:"\u606D\u559C\uFF0C\u56DE\u7B54\u6B63\u786E",showClose:!1}):this.$notify({type:"error",message:"\u7B54\u6848\u9519\u8BEF,\u6B63\u786E\u7B54\u6848\u662F"+((this.StemList[this.CurrentCnt]||{}).answer||[]).join(","),title:"\u5F88\u53EF\u60DC\uFF0C\u56DE\u7B54\u9519\u8BEF",showClose:!1})},handlePageChange(i){this.CurrentPage=i,this.CurrentCnt=i-1,this.SingleOption="",this.MultipleOptions=[]},jumpToTheNext(){this.CurrentCnt+=1,this.CurrentPage=this.CurrentCnt+1,this.SingleOption="",this.MultipleOptions=[]},jumpToTheFirst(){this.CurrentCnt=0,this.CurrentPage=1,this.SingleOption="",this.MultipleOptions=[]},onSubmit(){const i=[...this.originalStemList];i.sort(function(){return Math.random()-.5}),this.StemList=[...i.splice(0,this.ConditionQueryForm.Count)],this.jumpToTheFirst()}}},V={id:"answer-board",style:{width:"100%"}},j=u("\u67E5\u8BE2"),M={class:"stem"},F=u("confirmed"),B={key:0},P={key:1},A={key:2},N=u("Primary"),Q={key:3},z=u("\u63D0\u4EA4"),U={class:"example-pagination-block"};function D(i,t,E,I,e,p){const C=l("el-input"),h=l("el-form-item"),d=l("el-button"),f=l("el-form"),S=l("el-tag"),y=l("el-radio"),L=l("el-radio-group"),w=l("el-checkbox"),b=l("el-checkbox-group"),k=l("el-pagination");return a(),r("div",V,[u(" \u603B\u9898\u6570: "+m(e.Total)+" ",1),s(f,{inline:!0,model:e.ConditionQueryForm,class:"demo-form-inline"},{default:o(()=>[s(h,{label:"Approved by"},{default:o(()=>[s(C,{modelValue:e.ConditionQueryForm.Count,"onUpdate:modelValue":t[0]||(t[0]=n=>e.ConditionQueryForm.Count=n),placeholder:"Approved by"},null,8,["modelValue"])]),_:1}),s(h,null,{default:o(()=>[s(d,{type:"primary",onClick:p.onSubmit},{default:o(()=>[j]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"]),_("div",M,[u(m((e.StemList[e.CurrentCnt]||{}).stem||"")+" ",1),(e.StemList[e.CurrentCnt]||{}).is_confirm?(a(),x(S,{key:0,type:"success"},{default:o(()=>[F]),_:1})):v("",!0)]),((e.StemList[e.CurrentCnt]||{}).is_multiple||!1)==!1?(a(),r("div",B,[s(L,{modelValue:e.SingleOption,"onUpdate:modelValue":t[1]||(t[1]=n=>e.SingleOption=n)},{default:o(()=>[(a(!0),r(c,null,g((e.StemList[e.CurrentCnt]||{}).choices||[],n=>(a(),r("div",{key:n,style:{width:"100%",margin:"10px"}},[s(y,{label:n.option,size:"large"},{default:o(()=>[u(m(n.option)+"\u3001"+m(n.content),1)]),_:2},1032,["label"])]))),128))]),_:1},8,["modelValue"])])):(a(),r("div",P,[s(b,{modelValue:e.MultipleOptions,"onUpdate:modelValue":t[2]||(t[2]=n=>e.MultipleOptions=n)},{default:o(()=>[(a(!0),r(c,null,g((e.StemList[e.CurrentCnt]||{}).choices||[],n=>(a(),r("div",{key:n},[s(w,{label:n.option,size:"large"},{default:o(()=>[u(m(n.option)+"\u3001"+m(n.content),1)]),_:2},1032,["label"])]))),128))]),_:1},8,["modelValue"])])),((e.StemList[e.CurrentCnt]||{}).is_multiple||!1)==!0?(a(),r("div",A,[s(d,{type:"primary",onClick:p.submitMultipOptions},{default:o(()=>[N]),_:1},8,["onClick"])])):(a(),r("div",Q,[s(d,{type:"primary",onClick:p.submitSingleOption},{default:o(()=>[z]),_:1},8,["onClick"])])),_("div",U,[s(k,{ref:"page","current-page":e.CurrentPage,layout:" prev, pager, next, jumper",total:e.StemList.length,"page-size":1,onCurrentChange:p.handlePageChange},null,8,["current-page","total","onCurrentChange"])])])}const q=O(T,[["render",D],["__scopeId","data-v-53a66ee2"]]);export{q as default};