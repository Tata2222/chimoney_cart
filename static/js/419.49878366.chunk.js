"use strict";(self.webpackChunkchimoney_cart=self.webpackChunkchimoney_cart||[]).push([[419],{8419:function(t,c,e){e.r(c),e.d(c,{default:function(){return u}});var s=e(9439),r=e(2791),a=e(9434),n=e(7689),i=e(2724),l=e(5827),o=function(t,c){return t.map((function(t){var e=t.productId,s=t.count;return{cartProduct:c.find((function(t){return t.productId===e})),count:s}}))},d=e(184),u=function(){var t=(0,a.v9)((function(t){return t.products})).products,c=(0,a.v9)((function(t){return t.cart.cart})),e=(0,r.useState)(null),u=(0,s.Z)(e,2),h=u[0],_=u[1],m=(0,r.useState)([]),p=(0,s.Z)(m,2),x=p[0],j=p[1],f=(0,l.Z)().cartProductCount.totalPrice,v=(0,r.useMemo)((function(){return f.toFixed(2).toString().split(".")}),[f]),N=(0,n.s0)();return(0,r.useEffect)((function(){var e=o(c,t);_(e)}),[c,t]),(0,r.useEffect)((function(){if(t[1]){var c=new Array(4).fill(0).map((function(){return Math.floor(Math.random()*t.length)})),e=t.filter((function(t,e){return c.includes(e)}));j(e)}}),[t]),(0,d.jsx)(d.Fragment,{children:h?(0,d.jsxs)("div",{className:"cart_page",children:[(0,d.jsx)("div",{className:"cart_list",children:(null===h||void 0===h?void 0:h.length)>0?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:"cart_list__header",children:[(0,d.jsx)("p",{className:"cart_title",children:"Shopping Cart"}),(0,d.jsx)("span",{className:"cart_selected",children:"No items selected."}),(0,d.jsx)("button",{type:"button",className:"cart_button--selected",onClick:function(){},children:"Select all items"})]}),(0,d.jsxs)("div",{className:"cart_list__body",children:[h.map((function(t){var c=t.cartProduct,e=t.count;return(0,d.jsxs)("div",{children:[(0,d.jsx)(i.rX,{cartProduct:c,count:e}),(0,d.jsx)("div",{className:"cart_list__divider"})]},c.productId+(new Date).toString)})),(0,d.jsxs)("div",{className:"cart_list__subtotal",children:[(0,d.jsx)("span",{className:"checkout_text",children:"Subtotal"}),(0,d.jsxs)("span",{"aria-hidden":"true",children:[(0,d.jsx)("span",{className:"checkout_price__symbol",children:"$"}),(0,d.jsx)("span",{className:"checkout_price__whole",children:v[0]}),(0,d.jsx)("span",{className:"checkout_price__fraction",children:v[1]?v[1]:"00"})]})]})]})]}):(0,d.jsx)("p",{className:"cart_list__empty",children:"Your Cart is empty"})}),(0,d.jsxs)("div",{className:"cart_checkout",children:[(0,d.jsx)("span",{className:"checkout_text",children:"Subtotal"}),(0,d.jsxs)("span",{"aria-hidden":"true",children:[(0,d.jsx)("span",{className:"checkout_price__symbol",children:"$"}),(0,d.jsx)("span",{className:"checkout_price__whole",children:v[0]}),(0,d.jsx)("span",{className:"checkout_price__fraction",children:v[1]?v[1]:"00"})]}),(0,d.jsx)("button",{type:"button",className:"cart_button--checkout",onClick:function(){N("/confirm",{state:{cartProducts:h,totalCartPrice:v}})},children:"Proceed to checkout"})]}),(0,d.jsxs)("div",{className:"cart_recommend",children:[(0,d.jsx)("p",{className:"cart_recommend__title",children:"Products related to items in your cart"}),(0,d.jsx)("div",{className:"cart_recommend__list",children:null===x||void 0===x?void 0:x.map((function(t){return(0,d.jsxs)("div",{children:[(0,d.jsx)(i.WZ,{good:t}),(0,d.jsx)("div",{className:"cart_recommend__divider"})]},t.productId)}))})]})]}):(0,d.jsx)(i.aN,{})})}}}]);
//# sourceMappingURL=419.49878366.chunk.js.map