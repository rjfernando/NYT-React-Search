import React from "react";
import "./SearchArticles.css";

const SearchArticles = props =>
	<form>
  	<div className="card bg-light" style={{marginTop: 30}}>
	  <div className="card-header text-center"> 
	  <h1>SEARCH</h1>
	  </div>
	  <div className="card-body bg-invert">
		
		  <div className="form-group">
		    <label htmlFor="topic">Topic</label>
		    <input onChange={props.handleInputChange} value={props.topic} type="text" className="form-control" id="topic" name="topic"/>
		  </div>
		  <div className="form-group">
		    <label htmlFor="beginDate">Start Year</label>
		    <input onChange={props.handleInputChange} value={props.beginDate} type="date" className="form-control" id="beginDate" name="beginDate"/>
		  </div>
		  <div className="form-group">
		    <label htmlFor="endDate">End Year</label>
		    <input onChange={props.handleInputChange} value={props.endDate} type="date" className="form-control" id="endDate" name="endDate"/>
		  </div>
	  	<button onClick={props.handleFormSubmit} className="btn btn-info" style={{backgroundColor: "grey"}} type="button">SEARCH</button>
		
	  </div> 
	</div>
	</form>;

export default SearchArticles;