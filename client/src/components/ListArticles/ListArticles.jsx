import React from "react";
import "./ListArticle.css";


const ListArticles = (props) => 
  	<div className="card bg-light" style={{marginTop: 15, marginBottom: 15, backgroundColor: "gray"}}>
	  <div className="card-header text-center">
	  <h1>RESULTS</h1>
	  </div>
	  <div className="card-body bg-light">
	  	<div>
		{props.results.map(result =>
			<div className="card bg-light" key={result.web_url} style={{marginTop: 20}} >
				<div className="card-header">
					<div className="row">
					<div className="col-sm-9">
						<h3>{result.headline.main}</h3> 
					</div>
					<div className="col-sm-3">
						<button className="btn btn-success" style={{width: 100, marginTop: 15}} onClick={()=> props.saveArticle({
							title:result.headline.main,
							date: Date(Date.now()).toString(),
							url: result.web_url
						})}>Save</button>
                        <p><a href={result.web_url} target="_blank" className="btn btn-primary" style={{width: 100, marginTop: 15 }}>ARTICLE</a></p>
					</div>
					</div>
				</div>
				<div className="card-body bg-light">
					<p>Publish Date : {result.pub_date.slice(0, 10)}</p>
					<p>{result.snippet}</p>
				</div>
			</div>
		
			)}
			</div>
			
		</div>
	</div>

export default ListArticles;