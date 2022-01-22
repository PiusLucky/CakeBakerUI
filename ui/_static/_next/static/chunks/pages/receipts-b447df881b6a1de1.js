(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[215],{6266:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/receipts",function(){return s(6233)}])},6233:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return u}});var a=s(5893),l=s(7294),r=s(916),n=s(381),d=s.n(n),i=function(e){var t=e.setOpen,s=e.setCurrentOrderId;return(0,a.jsx)("div",{className:"flex flex-col",children:(0,a.jsx)("div",{className:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-6",children:(0,a.jsx)("div",{className:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8",children:(0,a.jsx)("div",{className:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg",children:(0,a.jsxs)("table",{className:"min-w-full divide-y divide-gray-200",children:[(0,a.jsx)("thead",{className:"bg-gray-50",children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Invoice ID"}),(0,a.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Date"}),(0,a.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Verdict"}),(0,a.jsx)("th",{scope:"col",className:"relative px-6 py-3",children:(0,a.jsx)("span",{className:"sr-only",children:"Edit"})})]})}),(0,a.jsx)("tbody",{className:"bg-white divide-y divide-gray-200",children:e.ordersArr&&e.ordersArr.map((function(e){return(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:(0,a.jsx)("div",{className:"flex items-center",children:e.reference})}),(0,a.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:(0,a.jsx)("div",{className:"text-sm text-gray-900",children:e.createdAt&&d()(e.createdAt).calendar()})}),(0,a.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:(0,a.jsx)("span",{className:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800",children:e.paid?(0,a.jsx)("span",{children:"successful"}):(0,a.jsx)("span",{children:"failure"})})}),(0,a.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium",children:(0,a.jsx)("span",{onClick:function(a){return l=e._id,s(l),void t(!0);var l},className:"text-indigo-600 hover:text-indigo-900 text-hover",children:"See Invoice"})})]},e._id)}))})]})})})})})},c=function(e){var t;return(0,a.jsx)("section",{className:"text-gray-400 bg-gray-900 body-font",children:(0,a.jsx)("div",{className:"container px-5 py-24 mx-auto flex flex-wrap",children:(0,a.jsxs)("div",{className:"flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10",children:[(0,a.jsxs)("div",{className:"w-full sm:p-4 px-4 mb-6",children:[(0,a.jsx)("h1",{className:"title-font font-medium text-xl mb-2 text-white",children:"Check Receipts"}),(0,a.jsx)("div",{className:"leading-relaxed",children:'Click on the "See Invoice" button to generate receipt.'})]}),(0,a.jsxs)("div",{className:"p-4 sm:w-1/2 lg:w-1/4 w-1/2",children:[(0,a.jsx)("h2",{className:"title-font font-medium text-3xl text-white",children:null===e||void 0===e||null===(t=e.ordersArr)||void 0===t?void 0:t.length}),(0,a.jsx)("p",{className:"leading-relaxed",children:"Total Receipts"})]})]})})})},x=s(332),o=s(5131),m=s(2489),h=s(3801),p=function(e){var t,s,r,n,i,c,x,p,u,j,y,v=e.open,g=e.setOpen,f=e.currentOrderId,N=e.ordersArr,w=function(){return N.find((function(e){return e._id===f}))};return(0,a.jsx)(o.u.Root,{show:v,as:l.Fragment,children:(0,a.jsx)(m.V,{as:"div",className:"fixed z-10 inset-0 overflow-y-auto",onClose:g,children:(0,a.jsxs)("div",{className:"flex min-h-screen text-center md:block md:px-2 lg:px-4",style:{fontSize:0},children:[(0,a.jsx)(o.u.Child,{as:l.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,a.jsx)(m.V.Overlay,{className:"hidden fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block"})}),(0,a.jsx)("span",{className:"hidden md:inline-block md:align-middle md:h-screen","aria-hidden":"true",children:"\u200b"}),(0,a.jsx)(o.u.Child,{as:l.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 md:translate-y-0 md:scale-95",enterTo:"opacity-100 translate-y-0 md:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 md:scale-100",leaveTo:"opacity-0 translate-y-4 md:translate-y-0 md:scale-95",children:(0,a.jsx)("div",{className:"flex text-base text-left transform transition w-full md:inline-block md:max-w-2xl md:px-4 md:my-8 md:align-middle lg:max-w-4xl",children:(0,a.jsxs)("div",{className:"w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8",children:[(0,a.jsxs)("button",{type:"button",className:"absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8",onClick:function(){return g(!1)},children:[(0,a.jsx)("span",{className:"sr-only",children:"Close"}),(0,a.jsx)(h.b0D,{className:"h-6 w-6","aria-hidden":"true"})]}),(0,a.jsx)("div",{className:"p-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-6",children:(0,a.jsxs)("div",{className:"border-b border-gray-200 shadow",children:[(0,a.jsxs)("div",{className:"pl-2 pt-1 pb-1",children:["Invoice ~ #",null===(t=w())||void 0===t?void 0:t.reference]}),(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{className:"bg-gray-50",children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{className:"px-4 py-2 text-xs text-gray-500 ",children:"#"}),(0,a.jsx)("th",{className:"px-4 py-2 text-xs text-gray-500 ",children:"Type"}),(0,a.jsx)("th",{className:"px-4 py-2 text-xs text-gray-500 ",children:"Quantity"}),(0,a.jsx)("th",{className:"px-4 py-2 text-xs text-gray-500 ",children:"Cost"}),(0,a.jsx)("th",{className:"px-4 py-2 text-xs text-gray-500 ",children:"Size"}),(0,a.jsx)("th",{className:"px-4 py-2 text-xs text-gray-500 ",children:"Color"}),(0,a.jsx)("th",{className:"px-4 py-2 text-xs text-gray-500 ",children:"Delivery"}),(0,a.jsx)("th",{className:"px-4 py-2 text-xs text-gray-500 ",children:"Total"})]})}),(0,a.jsxs)("tbody",{className:"bg-white",children:[(0,a.jsxs)("tr",{className:"whitespace-nowrap",children:[(0,a.jsx)("td",{className:"px-6 py-4 text-sm text-gray-500",children:"1"}),(0,a.jsx)("td",{className:"px-6 py-4",children:(0,a.jsx)("div",{className:"text-sm text-gray-900",children:"Custom Cake"})}),(0,a.jsx)("td",{className:"px-6 py-4",children:(0,a.jsx)("div",{className:"text-sm text-gray-500",children:"1"})}),(0,a.jsxs)("td",{className:"px-6 py-4 text-sm text-gray-500",children:["\u20a6",null===(s=w())||void 0===s?void 0:s.amount]}),(0,a.jsx)("td",{className:"px-6 py-4",children:null===(r=w())||void 0===r?void 0:r.size}),(0,a.jsx)("td",{className:"px-6 py-4",children:null===(n=w())||void 0===n?void 0:n.color}),(0,a.jsx)("td",{className:"px-6 py-4",children:(null===(i=w())||void 0===i?void 0:i.delivery_date)&&d()(null===(c=w())||void 0===c?void 0:c.delivery_date).calendar()}),(0,a.jsx)("td",{className:"px-6 py-4",children:(null===(x=w())||void 0===x?void 0:x.amount)+.01*(null===(p=w())||void 0===p?void 0:p.amount)})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{colSpan:6}),(0,a.jsx)("td",{className:"text-sm font-bold",children:"Sub Total"}),(0,a.jsx)("td",{className:"text-sm font-bold tracking-wider",children:(0,a.jsxs)("b",{children:["\u20a6",null===(u=w())||void 0===u?void 0:u.amount]})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{colSpan:6}),(0,a.jsx)("td",{className:"text-sm font-bold",children:(0,a.jsx)("b",{children:"Tax Rate"})}),(0,a.jsx)("td",{className:"text-sm font-bold",children:(0,a.jsx)("b",{children:"1%"})})]}),(0,a.jsxs)("tr",{className:"text-white bg-gray-800",children:[(0,a.jsx)("th",{colSpan:6}),(0,a.jsx)("td",{className:"text-sm font-bold",children:(0,a.jsx)("b",{children:"Total"})}),(0,a.jsx)("td",{className:"text-sm font-bold",children:(0,a.jsxs)("b",{children:["\u20a6",(null===(j=w())||void 0===j?void 0:j.amount)+.01*(null===(y=w())||void 0===y?void 0:y.amount)]})})]})]})]})]})})]})})})]})})})},u=function(){var e=(0,l.useContext)(r.Z),t=e.loggedIn,s=e.setTriggerRender,n=(0,l.useState)(""),d=n[0],o=n[1],m=(0,l.useState)(!1),h=m[0],u=m[1],j=[{name:"",color:"",amount:0,size:"",note:"",delivery_date:new Date,reference:"",paid:!1,user:"",createdAt:new Date,updatedAt:new Date,_id:null,__v:null}],y=(0,l.useState)(j),v=y[0],g=y[1];return(0,l.useEffect)((function(){x.Z.orders().then((function(e){g(null===e||void 0===e?void 0:e.data.reverse())})).catch((function(e){console.log(e)})),s(Math.random().toString())}),[]),t&&null!==t?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(p,{open:h,setOpen:u,ordersArr:v,currentOrderId:d}),(0,a.jsx)(c,{ordersArr:v}),(0,a.jsx)(i,{ordersArr:v,setOpen:u,setCurrentOrderId:o})]}):(0,a.jsx)("h1",{children:"Loading..."})}}},function(e){e.O(0,[885,756,774,888,179],(function(){return t=6266,e(e.s=t);var t}));var t=e.O();_N_E=t}]);