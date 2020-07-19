import React from 'react';
 

class Summary extends React.Component {
	render() {
		const {summary, currentDate} = this.props;
		return (
			<div className="row">
            <div className="NewConfirmed">
            <h2>New Confirmed</h2>
            <h3>{summary.NewConfirmed}</h3>
            <h4>{new Date(currentDate).toDateString()}</h4>
            </div>

            <div className="TotalConfirmed">
            <h2>Total Confirmed</h2>
            <h3>{summary.TotalConfirmed}</h3>
              <h4>{new Date(currentDate).toDateString()}</h4>
            </div>

            <div className="NewDeaths">
            <h2>New Deaths</h2>
            <h3>{summary.NewDeaths}</h3>
              <h4>{new Date(currentDate).toDateString()}</h4>
            </div>

            <div className="TotalRecovered">
            <h2>Total Recovered</h2>
            <h3>{summary.TotalRecovered}</h3>
              <h4>{new Date(currentDate).toDateString()}</h4>
            </div>
			</div>
		);
	}
}

export default Summary;