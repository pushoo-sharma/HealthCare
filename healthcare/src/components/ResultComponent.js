import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {history} from 'react-router-dom';

class ResultComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={data :''};
        this.mapResponse = this.mapResponse.bind(this);
    }
    mapResponse(response,index){
        debugger
        return(<div key={index}>
            {response.id}
        </div>);
    }
    render(){
        let name,city;
       
        if(typeof(this.props.response)!="undefined" && this.props.response !== null){
        debugger
       var   aa = this.props.response;
        //  alert(aa);
        //  var keys = Object.keys(aa.data);
        //  cc = keys.map(this.mapResponse);
        name = aa.name;
        city=aa.city;
        }

    return (<div>
      {/* <label>name</label> : <input type="text" value={name} disabled></input>
      <br></br>
      <label>city</label> : <input type="text" value={city} disabled></input>  */}
      <div className="x_content">
                    <br />
                    <form className="form-horizontal form-label-left" id="demo-form2" novalidate="" data-parsley-validate="">

                      <div className="form-group">
                        <label className="control-label col-md-3 col-sm-3 col-xs-12" for="first-name">First Name <span className="required">*</span>
                        </label>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                          <input className="form-control col-md-7 col-xs-12" id="first-name" required="required" type="text"/>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-md-3 col-sm-3 col-xs-12" for="last-name">Last Name <span className="required">*</span>
                        </label>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                          <input name="last-name" className="form-control col-md-7 col-xs-12" id="last-name" required="required" type="text"/>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-md-3 col-sm-3 col-xs-12" for="middle-name">Middle Name / Initial</label>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                          <input name="middle-name" className="form-control col-md-7 col-xs-12" id="middle-name" type="text"/>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-md-3 col-sm-3 col-xs-12">Gender</label>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                          <div className="btn-group" id="gender" data-toggle="buttons">
                            <label className="btn btn-default" data-toggle-passive-className="btn-default" data-toggle-className="btn-primary">
                              <input name="gender" type="radio" value="male" data-parsley-multiple="gender"/> &nbsp; Male &nbsp;
                            </label>
                            <label className="btn btn-primary" data-toggle-passive-className="btn-default" data-toggle-className="btn-primary">
                              <input name="gender" type="radio" value="female" data-parsley-multiple="gender"/> Female
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-md-3 col-sm-3 col-xs-12">Date Of Birth <span className="required">*</span>
                        </label>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                          <input className="date-picker form-control col-md-7 col-xs-12" id="birthday" required="required" type="text"/>
                        </div>
                      </div>
                      <div className="ln_solid"></div>
                      <div className="form-group">
                        <div className="col-md-6 col-sm-6 col-xs-12 col-md-offset-3">
                          <button className="btn btn-primary" type="button">Cancel</button>
						  <button className="btn btn-primary" type="reset">Reset</button>
                          <button className="btn btn-success" type="submit">Submit</button>
                        </div>
                      </div>

                    </form>
                  </div>
      
    </div>);
    }
}
const mapStateToProps = (state, ownProps) => {
    debugger

    return {
        ...ownProps,
        response : state.response,
        successMsg: state.errorMsg,
        errorMsg: state.errorMsg,
    };
};

export default connect(mapStateToProps)(ResultComponent);
