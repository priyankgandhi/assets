var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MasterForm = function (_React$Component) {
  _inherits(MasterForm, _React$Component);

  function MasterForm(props) {
    _classCallCheck(this, MasterForm);

    var _this = _possibleConstructorReturn(this, (MasterForm.__proto__ || Object.getPrototypeOf(MasterForm)).call(this, props));

    _this.handleChange = function (event) {
      var _event$target = event.target,
          name = _event$target.name,
          value = _event$target.value;

      _this.setState(_defineProperty({}, name, value));
    };

    _this.handleSubmit = function (event) {
      event.preventDefault();
      var body = new FormData();
      for (var key in _this.state) {
        body.append(key, _this.state[key]);
      }
      fetch('http://yardmatters.storeupon.com/store/ordersubmit', {
        method: 'POST',
        body: body,
        redirect: 'follow'
      }).then(function (res) {
        return window.location.replace(res.url);
      });
    };

    _this._next = function () {
      var currentStep = _this.state.currentStep;
      currentStep = currentStep >= 2 ? 3 : currentStep + 1;
      _this.setState({
        currentStep: currentStep
      });
    };

    _this._prev = function () {
      var currentStep = _this.state.currentStep;
      currentStep = currentStep <= 1 ? 1 : currentStep - 1;
      _this.setState({
        currentStep: currentStep
      });
    };

    _this.state = {
      currentStep: 1,
      productCode: 'fac6010d-c261-4705-a722-773b83dbd3f2'
    };
    return _this;
  }

  _createClass(MasterForm, [{
    key: 'previousButton',


    /*
    * the functions for our button
    */
    value: function previousButton() {
      var currentStep = this.state.currentStep;
      if (currentStep !== 1) {
        return React.createElement(
          'button',
          {
            className: 'btn btn-secondary float-left',
            type: 'button', onClick: this._prev },
          'Back'
        );
      }
      return null;
    }
  }, {
    key: 'nextButton',
    value: function nextButton() {
      var currentStep = this.state.currentStep;
      if (currentStep == 1) {
        return React.createElement(
          'button',
          {
            className: 'btn btn-primary float-right',
            type: 'button', onClick: this._next },
          'Get started'
        );
      } else if (currentStep == 2) {
        return React.createElement(
          'button',
          {
            className: 'btn btn-primary float-right',
            type: 'button', onClick: this._next },
          'Next'
        );
      }

      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        React.Fragment,
        null,
        React.createElement(
          'form',
          { onSubmit: this.handleSubmit },
          React.createElement(Step1, {
            currentStep: this.state.currentStep,
            handleChange: this.handleChange,
            email: this.state.email
          }),
          React.createElement(Step2, {
            currentStep: this.state.currentStep,
            handleChange: this.handleChange,
            username: this.state.username
          }),
          React.createElement(Step3, {
            currentStep: this.state.currentStep,
            handleChange: this.handleChange,
            password: this.state.password
          }),
          this.previousButton(),
          this.nextButton()
        )
      );
    }
  }]);

  return MasterForm;
}(React.Component);

function Step1(props) {
  if (props.currentStep !== 1) {
    return null;
  }
  return React.createElement(
    'div',
    { className: 'row align-items-center text-center text-md-left' },
    React.createElement(
      'div',
      { className: '' },
      React.createElement(
        'h1',
        null,
        'Smart Yard Maintenance'
      ),
      React.createElement(
        'h2',
        null,
        'An affordable, quality gardening service that you can manage online '
      ),
      React.createElement('br', null),
      React.createElement(
        'div',
        { className: 'form-inline' },
        React.createElement(
          'label',
          { htmlFor: 'zip' },
          'My home is located at \xA0\xA0'
        ),
        React.createElement('input', { className: 'form-control', id: 'zip', name: 'zip', type: 'text', placeholder: 'Enter Your Zip', value: props.zip, onChange: props.handleChange })
      )
    ),
    React.createElement(
      'div',
      { className: 'col-md-6 col-lg-7 col-xl-6 offset-xl-1' },
      React.createElement('img', { className: 'img-fluid', src: 'img/home/hero-img.png', alt: '' })
    )
  );
}

function Step2(props) {
  if (props.currentStep !== 2) {
    return null;
  }
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      'h2',
      null,
      'Tell us about your maintenance needs'
    ),
    React.createElement(
      'div',
      { className: 'form-group col-xs-4' },
      React.createElement(
        'label',
        { htmlFor: 'google-address' },
        'Your address'
      ),
      React.createElement('input', { className: 'form-control', id: 'google-address', name: 'address', value: props.address, onChange: props.handleChange })
    ),
    React.createElement(
      'div',
      { className: 'form-group col-xs-2' },
      React.createElement(
        'label',
        { htmlFor: 'yardsize' },
        'Yard Size'
      ),
      React.createElement(
        'select',
        { className: 'custom-select form-control', id: 'yardsize', name: 'custom_yardsize', value: props.yardsize, onChange: props.handleChange },
        React.createElement(
          'option',
          null,
          'Open this select menu'
        ),
        React.createElement(
          'option',
          { value: '1' },
          'Under 1000 sqft'
        ),
        React.createElement(
          'option',
          { value: '2' },
          '100-2500 sqft'
        ),
        React.createElement(
          'option',
          { value: '3' },
          '2500+ sqft'
        )
      )
    ),
    React.createElement(
      'div',
      { className: 'form-group' },
      React.createElement(
        'label',
        { htmlFor: 'frequency' },
        'Service Frequency'
      ),
      React.createElement(
        'div',
        { className: 'custom-control custom-radio' },
        React.createElement('input', { type: 'radio', id: 'customRadio1', name: 'custom_frequency', className: 'custom-control-input form-control', value: props.frequency, onChange: props.handleChange }),
        React.createElement(
          'label',
          { className: 'custom-control-label', htmlFor: 'customRadio1' },
          'Weekly'
        )
      ),
      React.createElement(
        'div',
        { className: 'custom-control custom-radio' },
        React.createElement('input', { type: 'radio', id: 'customRadio2', name: 'custom_frequency', className: 'custom-control-input form-control', value: props.frequency, onChange: props.handleChange }),
        React.createElement(
          'label',
          { className: 'custom-control-label', htmlFor: 'customRadio2' },
          'Bi-weekly'
        )
      ),
      React.createElement(
        'div',
        { className: 'custom-control custom-radio' },
        React.createElement('input', { type: 'radio', id: 'customRadio2', name: 'custom_frequency', className: 'custom-control-input form-control', value: props.frequency, onChange: props.handleChange }),
        React.createElement(
          'label',
          { className: 'custom-control-label', htmlFor: 'customRadio2' },
          'Monthly'
        )
      )
    )
  );
}

function Step3(props) {
  if (props.currentStep !== 3) {
    return null;
  }
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      'h2',
      null,
      'Last step'
    ),
    React.createElement(
      'div',
      { className: 'form-group' },
      React.createElement(
        'label',
        { htmlFor: 'email' },
        'Email'
      ),
      React.createElement('input', { className: 'form-control', id: 'email', name: 'email', type: 'text', placeholder: 'Email', value: props.email, onChange: props.handleChange })
    ),
    React.createElement(
      'div',
      { className: 'form-group' },
      React.createElement(
        'label',
        { htmlFor: 'password' },
        'Password'
      ),
      React.createElement('input', { className: 'form-control', id: 'password', name: 'password', type: 'password', placeholder: 'Password', value: props.password, onChange: props.handleChange })
    ),
    React.createElement(
      'button',
      { className: 'btn btn-success' },
      'Sign up'
    )
  );
}

ReactDOM.render(React.createElement(MasterForm, null), document.getElementById('root'));

// <div className="container">
//   <ul className="list-unstyled">
//     <li className="col-xs-6 col-sm-4 col-md-3">Mowing, edging, trimming your lawn</li>
//     <li className="col-xs-6 col-sm-4 col-md-3">Weeding</li>
//     <li className="col-xs-6 col-sm-4 col-md-3">Hedge trimming and pruning;</li>
//     <li className="col-xs-6 col-sm-4 col-md-3">Yard cleanup</li>
//     <li className="col-xs-6 col-sm-4 col-md-3">Leaf Removal</li>
//     <li className="col-xs-6 col-sm-4 col-md-3">Aenean sit amet erat nunc</li>
//     <li className="col-xs-6 col-sm-4 col-md-3">Eget porttitor lorem</li>
//   </ul>
// </div>