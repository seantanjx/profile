"use strict";(self.webpackChunkprofile=self.webpackChunkprofile||[]).push([[478],{5478:function(a,e,r){r.r(e),r.d(e,{default:function(){return L}});var t=r(1413),n=r(2791),s=r(5987),c=r(1694),o=r.n(c),i=r(162),d=r(6543),l=r(7472),f=r(184),u=["bsPrefix","className","variant","as"],b=n.forwardRef((function(a,e){var r=a.bsPrefix,n=a.className,c=a.variant,d=a.as,l=void 0===d?"img":d,b=(0,s.Z)(a,u),v=(0,i.vE)(r,"card-img");return(0,f.jsx)(l,(0,t.Z)({ref:e,className:o()(c?"".concat(v,"-").concat(c):v,n)},b))}));b.displayName="CardImg";var v=b,x=r(6040),m=["bsPrefix","className","as"],p=n.forwardRef((function(a,e){var r=a.bsPrefix,c=a.className,d=a.as,l=void 0===d?"div":d,u=(0,s.Z)(a,m),b=(0,i.vE)(r,"card-header"),v=(0,n.useMemo)((function(){return{cardHeaderBsPrefix:b}}),[b]);return(0,f.jsx)(x.Z.Provider,{value:v,children:(0,f.jsx)(l,(0,t.Z)((0,t.Z)({ref:e},u),{},{className:o()(c,b)}))})}));p.displayName="CardHeader";var y=p,g=["bsPrefix","className","bg","text","border","body","children","as"],Z=(0,l.Z)("h5"),h=(0,l.Z)("h6"),N=(0,d.Z)("card-body"),j=(0,d.Z)("card-title",{Component:Z}),P=(0,d.Z)("card-subtitle",{Component:h}),C=(0,d.Z)("card-link",{Component:"a"}),S=(0,d.Z)("card-text",{Component:"p"}),k=(0,d.Z)("card-footer"),T=(0,d.Z)("card-img-overlay"),w=n.forwardRef((function(a,e){var r=a.bsPrefix,n=a.className,c=a.bg,d=a.text,l=a.border,u=a.body,b=a.children,v=a.as,x=void 0===v?"div":v,m=(0,s.Z)(a,g),p=(0,i.vE)(r,"card");return(0,f.jsx)(x,(0,t.Z)((0,t.Z)({ref:e},m),{},{className:o()(n,p,c&&"bg-".concat(c),d&&"text-".concat(d),l&&"border-".concat(l)),children:u?(0,f.jsx)(N,{children:b}):b}))}));w.displayName="Card",w.defaultProps={body:!1};var B=Object.assign(w,{Img:v,Title:j,Subtitle:P,Body:N,Link:C,Text:S,Header:y,Footer:k,ImgOverlay:T}),R=["bsPrefix","bg","pill","text","className","as"],E=n.forwardRef((function(a,e){var r=a.bsPrefix,n=a.bg,c=a.pill,d=a.text,l=a.className,u=a.as,b=void 0===u?"span":u,v=(0,s.Z)(a,R),x=(0,i.vE)(r,"badge");return(0,f.jsx)(b,(0,t.Z)((0,t.Z)({ref:e},v),{},{className:o()(l,x,c&&"rounded-pill",d&&"text-".concat(d),n&&"bg-".concat(n))}))}));E.displayName="Badge",E.defaultProps={bg:"primary",pill:!1};var F=E,I=r(2677),V=r(3360),z=r(6031),H=r(2021),D={badgeStyle:{paddingLeft:10,paddingRight:10,paddingTop:5,paddingBottom:5,margin:5},cardStyle:{borderRadius:10},cardTitleStyle:{fontSize:24,fontWeight:700},cardTextStyle:{textAlign:"left"},linkStyle:{textDecoration:"none",padding:10},buttonStyle:{margin:5}},L=function(a){var e,r,s=(0,n.useContext)(z.Ni),c=a.project;return(0,f.jsx)(I.Z,{children:(0,f.jsxs)(B,{style:(0,t.Z)((0,t.Z)({},D.cardStyle),{},{backgroundColor:s.cardBackground,borderColor:s.cardBorderColor}),text:s.bsSecondaryVariant,children:[(0,f.jsx)(B.Img,{variant:"top",src:null===c||void 0===c?void 0:c.image}),(0,f.jsxs)(B.Body,{children:[(0,f.jsx)(B.Title,{style:D.cardTitleStyle,children:c.title}),(0,f.jsx)(B.Text,{style:D.cardTextStyle,children:(r=c.bodyText,(0,f.jsx)(H.D,{children:r}))})]}),(0,f.jsx)(B.Body,{children:null===c||void 0===c||null===(e=c.links)||void 0===e?void 0:e.map((function(a){return(0,f.jsx)(V.Z,{style:D.buttonStyle,variant:"outline-"+s.bsSecondaryVariant,onClick:function(){return window.open(a.href,"_blank")},children:a.text},a.href)}))}),c.tags&&(0,f.jsx)(B.Footer,{style:{backgroundColor:s.cardFooterBackground},children:c.tags.map((function(a){return(0,f.jsx)(F,{pill:!0,bg:s.bsSecondaryVariant,text:s.bsPrimaryVariant,style:D.badgeStyle,children:a},a)}))})]})})}},3360:function(a,e,r){var t=r(1413),n=r(9439),s=r(5987),c=r(1694),o=r.n(c),i=r(2791),d=r(5341),l=r(162),f=r(184),u=["as","bsPrefix","variant","size","active","className"],b=i.forwardRef((function(a,e){var r=a.as,c=a.bsPrefix,i=a.variant,b=a.size,v=a.active,x=a.className,m=(0,s.Z)(a,u),p=(0,l.vE)(c,"btn"),y=(0,d.FT)((0,t.Z)({tagName:r},m)),g=(0,n.Z)(y,2),Z=g[0],h=g[1].tagName;return(0,f.jsx)(h,(0,t.Z)((0,t.Z)((0,t.Z)({},Z),m),{},{ref:e,className:o()(x,p,v&&"active",i&&"".concat(p,"-").concat(i),b&&"".concat(p,"-").concat(b),m.href&&m.disabled&&"disabled")}))}));b.displayName="Button",b.defaultProps={variant:"primary",active:!1,disabled:!1},e.Z=b},2677:function(a,e,r){var t=r(9439),n=r(1413),s=r(5987),c=r(1694),o=r.n(c),i=r(2791),d=r(162),l=r(184),f=["as","bsPrefix","className"],u=["className"];var b=i.forwardRef((function(a,e){var r=function(a){var e=a.as,r=a.bsPrefix,t=a.className,c=(0,s.Z)(a,f);r=(0,d.vE)(r,"col");var i=(0,d.pi)(),l=[],u=[];return i.forEach((function(a){var e,t,n,s=c[a];delete c[a],"object"===typeof s&&null!=s?(e=s.span,t=s.offset,n=s.order):e=s;var o="xs"!==a?"-".concat(a):"";e&&l.push(!0===e?"".concat(r).concat(o):"".concat(r).concat(o,"-").concat(e)),null!=n&&u.push("order".concat(o,"-").concat(n)),null!=t&&u.push("offset".concat(o,"-").concat(t))})),[(0,n.Z)((0,n.Z)({},c),{},{className:o().apply(void 0,[t].concat(l,u))}),{as:e,bsPrefix:r,spans:l}]}(a),c=(0,t.Z)(r,2),i=c[0],b=i.className,v=(0,s.Z)(i,u),x=c[1],m=x.as,p=void 0===m?"div":m,y=x.bsPrefix,g=x.spans;return(0,l.jsx)(p,(0,n.Z)((0,n.Z)({},v),{},{ref:e,className:o()(b,!g.length&&y)}))}));b.displayName="Col",e.Z=b}}]);
//# sourceMappingURL=478.7b77c0d9.chunk.js.map