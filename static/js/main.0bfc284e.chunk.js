(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),o=a.n(c),s=(a(14),a(1)),i=a.n(s),l=a(4),m=a(5),u=a(6),p=a(8),h=a(7),d=(a(16),a(17),a(18),function(e,t){if(e&&t)return r.a.createElement("h3",null,r.a.createElement("h4",null," Min and Max Temperature "),r.a.createElement("span",{className:"px-4"},e,"\xb0C"),r.a.createElement("span",{className:"px-4"},t,"\xb0C"))}),f=function(e){var t=e.city,a=(e.country,e.celsius),c=e.temp_min,o=e.temp_max,s=e.icon,i=e.description;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"cards"},r.a.createElement("h1",null," ",t," "),r.a.createElement("h5",{className:"py-4"},r.a.createElement("i",{className:"wi ".concat(s," display-1")})),a?r.a.createElement("h1",{className:"py-2"},a,"\xb0C"):null,r.a.createElement("div",{className:"py-3"},d(c,o)),r.a.createElement("h4",{className:"py-3"},i)),"npm"))},w=(a(19),function(e){var t=e.loadWeatherInfo,a=e.error;return r.a.createElement("div",{className:"container h-100"},r.a.createElement("form",{onSubmit:t},r.a.createElement("div",null,a?r.a.createElement("div",{className:"alert alert-danger mx-5",role:"alert"},"Erreur de champs ! Informations invalides :("):""),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3 offset-md-2"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Ville",name:"city",autoComplete:"off"})),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Pays",name:"country",autoComplete:"off"})),r.a.createElement("div",{className:"col-md-3 mt-md-0 mt-2 text-md-left "},r.a.createElement("button",{className:"btn btn-warning"}," Info Meteo")))))}),E=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).getCelsius=function(e){return Math.floor(e-273)},e.getWeatherIcon=function(t,a){switch(!0){case a>=200&&a<=232:e.setState({icon:e.weatherIcon.Thunderstorm});break;case a>=300&&a<=321:e.setState({icon:e.weatherIcon.Drizzle});break;case a>=500&&a<=531:e.setState({icon:e.weatherIcon.Rain});break;case a>=600&&a<=622:e.setState({icon:e.weatherIcon.Snow});break;case a>=700&&a<=781:e.setState({icon:e.weatherIcon.Atmosphere});break;case 800===a:e.setState({icon:e.weatherIcon.Clear});break;case a>=801&&a<=804:e.setState({icon:e.weatherIcon.Clouds});break;default:e.setState({icon:""})}},e.getWeather=function(){var t=Object(l.a)(i.a.mark((function t(a){var n,r,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),n=a.target.elements.city.value,r=a.target.elements.country.value,!n||!r){t.next=11;break}return t.next=5,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(n,",").concat(r,"&appid=").concat("493ae353fc1ae41fd2b138d7f904d186")).then((function(e){return e.json()}));case 5:c=t.sent,console.log(c),e.setState({city:"".concat(c.name," , ").concat(c.sys.country),celsius:e.getCelsius(c.main.temp),temp_max:e.getCelsius(c.main.temp_max),temp_min:e.getCelsius(c.main.temp_min),description:c.weather[0].description}),e.getWeatherIcon(e.weatherIcon,c.weather[0].id),t.next=12;break;case 11:e.setState({isError:!0});case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={city:"",main:"",icon:"",celsius:"",temp_max:"",temp_min:"",description:"",isError:!1},e.weatherIcon={Thunderstorm:"wi-thunderstorm",Snow:"wi-snow",Rain:"wi-storm-showers",Atmosphere:"wi-fog",Drizzle:"wi-sleet",Clear:"wi-day-sunny",Clouds:"wi-day-fog"},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state,t=e.city,a=e.celsius,n=e.temp_max,c=e.temp_min,o=e.description,s=e.icon,i=e.isError;return r.a.createElement("div",{className:"App"},r.a.createElement(w,{loadWeatherInfo:this.getWeather,error:i}),r.a.createElement(f,{city:t,celsius:a,temp_max:n,temp_min:c,icon:s,description:o}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(20)}},[[9,1,2]]]);
//# sourceMappingURL=main.0bfc284e.chunk.js.map