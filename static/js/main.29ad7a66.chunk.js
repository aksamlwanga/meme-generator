(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(8),o=a.n(c),r=(a(16),a(2)),m=a(3),i=a(5),s=a(4),u=a(6);a(17);var h=function(){return l.a.createElement("header",null,l.a.createElement("img",{src:"http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png",alt:"TrollFace"}),l.a.createElement("p",null,"Meme-Generator"))},p=a(9),d=a(1),b=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(i.a)(this,Object(s.a)(t).call(this))).state={topText:"",bottomText:"",randomImg:"http://i.imgflip.com/1bij.jpg",allMemeImgs:[]},e.handleChange=e.handleChange.bind(Object(d.a)(Object(d.a)(e))),e.handleClick=e.handleClick.bind(Object(d.a)(Object(d.a)(e))),e}return Object(u.a)(t,e),Object(m.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(p.a)({},a,n))}},{key:"handleClick",value:function(){var e=Math.floor(Math.random()*this.state.allMemeImgs.length);this.setState(function(t){return{randomImg:t.allMemeImgs[e].url}})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://api.imgflip.com/get_memes").then(function(e){return e.json()}).then(function(t){var a=t.data.memes;e.setState({allMemeImgs:a})})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"meme-form"},l.a.createElement("input",{onChange:this.handleChange,type:"text",name:"topText",value:this.state.topText}),l.a.createElement("input",{onChange:this.handleChange,type:"text",name:"bottomText",value:this.state.bottomText}),l.a.createElement("button",{onClick:this.handleClick},"Generate")),l.a.createElement("div",{className:"meme"},l.a.createElement("img",{src:this.state.randomImg,alt:"randomMeme"}),l.a.createElement("h2",{className:"top"},this.state.topText),l.a.createElement("h2",{className:"bottom"},this.state.bottomText)))}}]),t}(n.Component),g=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(h,null),l.a.createElement(b,null))}}]),t}(n.Component);o.a.render(l.a.createElement(g,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.29ad7a66.chunk.js.map