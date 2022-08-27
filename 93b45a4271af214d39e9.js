import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _regeneratorRuntime from "@babel/runtime/regenerator";
var API_key = '498f85b6371fd0085d2ad9c9787077ce';
var button = document.getElementById('button');
var clear = document.querySelector('.button2');
var results = document.querySelector('.section__results');
var API = "https://api.openweathermap.org/data/2.5/weather?";

var GetInfo = /*#__PURE__*/function () {
  function GetInfo() {
    _classCallCheck(this, GetInfo);
  }

  _createClass(GetInfo, [{
    key: "fetchInfo",
    value: function () {
      var _fetchInfo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        var city, response, data, container;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                city = document.getElementById('text');
                _context.next = 3;
                return fetch("".concat(API, "q=").concat(city.value, "&appid=").concat(API_key));

              case 3:
                response = _context.sent;
                _context.next = 6;
                return response.json();

              case 6:
                data = _context.sent;
                console.log(data);

                if (data.cod !== 200) {
                  container = document.createElement('div');
                  container.innerHTML = "\n        <div>\n            <h2> Please, enter a valid name </h2>\n        </div>";
                  results.appendChild(container);
                } else {
                  this.showData(data);
                }

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fetchInfo() {
        return _fetchInfo.apply(this, arguments);
      }

      return fetchInfo;
    }()
  }, {
    key: "showData",
    value: function showData(data) {
      var degree = Math.trunc(data.main.temp - 273);
      var container = document.createElement('div');
      container.innerHTML = "\n        <div>\n            <h3 class=\"data--name\">".concat(data.name, ", ").concat(data.sys.country, "</h3>\n            <div class= \"data--temp\">\n                <p class=\"temp--number\">").concat(degree, "  <span class=\"temp--unit\">o</span></p>\n            </div>\n            <img class=\"weather-image\" src=\"http://openweathermap.org/img/w/").concat(data.weather[0].icon, ".png\" alt=\"partly_cloudy\">\n            <p class=\"data--info\">").concat(data.weather[0].description, "<br> \n            Humidity: ").concat(data.main.humidity, "</p>\n        </div>");
      container.classList.add('results--container');
      results.appendChild(container);
    }
  }]);

  return GetInfo;
}();

button.onclick = function () {
  var user = new GetInfo().fetchInfo();
};

clear.onclick = function () {
  results.textContent = '';
};