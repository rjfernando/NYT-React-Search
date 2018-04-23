import React from "react";
import './SavedArticles.css';


const SavedArticles = (props) => 
  	<div className="card bg-light" style={{marginTop: 30, marginBottom: 30}}>
	  <div className="card-header text-center">
	  <h1>SAVED ARTICLES</h1>
	  </div>
	  <div className="card-body bg-light">
	  	<div>
		{props.results.map(result =>
			<div className="card bg-info" key={result._id} style={{marginTop: 20}} >
				<div className="card-header">
					<div className="row">
					<div className="col-sm-8">
						<a href={result.url} target="_blank">{result.title}</a>
					</div>
					<div className="col-sm-3">
						Date Saved: {result.date.slice(0, 15)}
					</div>
					<div className="col-sm-1">
						<button onClick={()=> props.deleteArticle(result._id)} className="btn btn-danger">X</button>
					</div>
					</div>
				</div>
				
			</div>
		
			)}
			</div>
		</div>
	</div>;

export default SavedArticles;