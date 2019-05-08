class MasterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      productCode:'fac6010d-c261-4705-a722-773b83dbd3f2'
    }
  }

  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const body = new FormData();
    for ( var key in this.state ) {
        body.append(key, this.state[key]);
    }
    fetch('http://yardmatters.storeupon.com/store/ordersubmit', {
       method: 'POST',
       body: body,
       redirect: 'follow'
     }).then(res => window.location.replace(res.url));
  }

  _next = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep >= 2? 3: currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }

  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1? 1: currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }

  /*
  * the functions for our button
  */
  previousButton() {
    let currentStep = this.state.currentStep;
    if(currentStep !==1){
      return (
        <button
          className="btn btn-secondary float-left"
          type="button" onClick={this._prev}>
        Back
        </button>
      )
    }
    return null;
  }

  nextButton(){
    let currentStep = this.state.currentStep;
    if(currentStep ==1){
      return (
        <button
          className="btn btn-primary float-right"
          type="button" onClick={this._next}>
        Get started
        </button>
      )
    } else if (currentStep == 2) {
      return (
        <button
          className="btn btn-primary float-right"
          type="button" onClick={this._next}>
        Next
        </button>
      )
    }

    return null;
  }

  render() {
    return (
      <React.Fragment>
      <form onSubmit={this.handleSubmit}>
      {/*
        render the form steps and pass required props in
      */}
        <Step1
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
          email={this.state.email}
        />
        <Step2
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
          username={this.state.username}
        />
        <Step3
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
          password={this.state.password}
        />
        {this.previousButton()}
        {this.nextButton()}

      </form>
      </React.Fragment>
    );
  }
}

function Step1(props) {
  if (props.currentStep !== 1) {
    return null
  }
  return(
    <div className="row align-items-center text-center text-md-left">
       <div className="">
         <h1>Smart Yard Maintenance</h1>
         <h2>An affordable, quality gardening service that you can manage online </h2>
         <br/>
         <div className="form-inline">
           <label htmlFor="zip">My home is located at &nbsp;&nbsp;</label>
           <input className="form-control" id="zip" name="zip" type="text" placeholder="Enter Your Zip" value={props.zip} onChange={props.handleChange}/>
         </div>
       </div>
       <div className="col-md-6 col-lg-7 col-xl-6 offset-xl-1">
         <img className="img-fluid" src="img/home/hero-img.png" alt=""/>
       </div>
   </div>
  );
}

function Step2(props) {
  if (props.currentStep !== 2) {
    return null
  }
  return(<React.Fragment>
    <h2>Tell us about your maintenance needs</h2>
    <div className="form-group col-xs-4">
      <label htmlFor="google-address">Your address</label>
      <input className="form-control" id="google-address" name="address" value={props.address} onChange={props.handleChange}/>
    </div>
    <div className="form-group col-xs-2">
      <label htmlFor="yardsize">Yard Size</label>
      <select className="custom-select form-control" id="yardsize" name="custom_yardsize" value={props.yardsize} onChange={props.handleChange}>
        <option>Open this select menu</option>
        <option value="1">Under 1000 sqft</option>
        <option value="2">100-2500 sqft</option>
        <option value="3">2500+ sqft</option>
      </select>

    </div>
    <div className="form-group">
      <label htmlFor="frequency">Service Frequency</label>
      <div className="custom-control custom-radio">
        <input type="radio" id="customRadio1" name="custom_frequency" className="custom-control-input form-control" value={props.frequency} onChange={props.handleChange} />
        <label className="custom-control-label" htmlFor="customRadio1">Weekly</label>
      </div>
      <div className="custom-control custom-radio">
        <input type="radio" id="customRadio2" name="custom_frequency" className="custom-control-input form-control" value={props.frequency} onChange={props.handleChange} />
        <label className="custom-control-label" htmlFor="customRadio2">Bi-weekly</label>
      </div>
      <div className="custom-control custom-radio">
        <input type="radio" id="customRadio2" name="custom_frequency" className="custom-control-input form-control" value={props.frequency} onChange={props.handleChange} />
        <label className="custom-control-label" htmlFor="customRadio2">Monthly</label>
      </div>
    </div>
    </React.Fragment>
  );
}

function Step3(props) {
  if (props.currentStep !== 3) {
    return null
  }
  return(
    <React.Fragment>
    <h2>Last step</h2>
    <div className="form-group">
      <label htmlFor="email">Email</label>
      <input className="form-control" id="email" name="email" type="text" placeholder="Email" value={props.email} onChange={props.handleChange} />
    </div>
    <div className="form-group">
      <label htmlFor="password">Password</label>
      <input className="form-control" id="password" name="password" type="password" placeholder="Password" value={props.password} onChange={props.handleChange} />
    </div>
    <button className="btn btn-success">Sign up</button>
    </React.Fragment>
  );
}

ReactDOM.render(<MasterForm />, document.getElementById('root'))

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
