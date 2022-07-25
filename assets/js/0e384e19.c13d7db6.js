"use strict";(self.webpackChunkweb_print_service=self.webpackChunkweb_print_service||[]).push([[671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),b=i,f=d["".concat(s,".").concat(b)]||d[b]||u[b]||o;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function b(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const o={sidebar_position:1},a="Introduction",l={unversionedId:"intro",id:"intro",title:"Introduction",description:"Printing from a web page is often limiting as the web application cannot diretly access your available printers and can only really print web page content.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/Web-Print-Service-Docs/docs/intro",draft:!1,editUrl:"https://github.com/jdcryer/web-print-service-docs/tree/main/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"User - Guide",permalink:"/Web-Print-Service-Docs/docs/category/user---guide"}},s={},c=[{value:"Possible Uses",id:"possible-uses",level:2},{value:"Barcode Label Printing",id:"barcode-label-printing",level:3},{value:"PDF Print Jobs",id:"pdf-print-jobs",level:3},{value:"Version History",id:"version-history",level:2},{value:"Credits",id:"credits",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Printing from a web page is often limiting as the web application cannot diretly access your available printers and can only really print web page content."),(0,i.kt)("p",null,"The Web Print Service provides a desk top application that can manage complex server side reports printing directly to selected printers."),(0,i.kt)("p",null,"Any user who has the application running on their desktop machine (Mac or Widows) can receive print jobs generated via the web.  The user can choos to make their printer public allowing multiple users to initiate print jobs frm a web page to print on a selected printer."),(0,i.kt)("h2",{id:"possible-uses"},"Possible Uses"),(0,i.kt)("p",null,"There are a number of posible uses for the service.  Below are a couple of reasons why we created the service."),(0,i.kt)("h3",{id:"barcode-label-printing"},"Barcode Label Printing"),(0,i.kt)("p",null,"A long barcode label run can be generated from a job or a list of products and sent to a label printer in the warehouse without the need to be diretly connected to the printer or download a PDF file to send to print."),(0,i.kt)("h3",{id:"pdf-print-jobs"},"PDF Print Jobs"),(0,i.kt)("p",null,"PDF files for invoices, quotes, reports and other jobs would usually have to be downloaded and the printed.  You then have to file or delete the files that you have downloaded.  The print web service will receive the PDF document specified by the print job and clear up the file after printing."),(0,i.kt)("h2",{id:"version-history"},"Version History"),(0,i.kt)("p",null,"v1.0.0 - TBA - Initial Release - August 2020"),(0,i.kt)("h2",{id:"credits"},"Credits"),(0,i.kt)("p",null,"Web Print Service was create by Telekinetix Limited."),(0,i.kt)("p",null,"Pimary developers are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Joseph Cryer"),(0,i.kt)("li",{parentName:"ul"},"Samuel Guard")),(0,i.kt)("p",null,"Design and server side support by:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"J Douglas Cryer"),(0,i.kt)("li",{parentName:"ul"},"Tom Bartram")))}u.isMDXComponent=!0}}]);