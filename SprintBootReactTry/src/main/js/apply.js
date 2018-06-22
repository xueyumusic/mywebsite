'use strict';

// tag::vars[]
const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');
const jq = require('jquery')
// end::vars[]

// tag::app[]
class App extends React.Component {

	constructor(props) {
		super(props);
		//this.state = {employees: []};
		this.state = {a: ""};
		this.onClick = this.onClick.bind(this);
	}

	componentDidMount() {
//		client({method: 'GET', path: '/api/clientInfos'}).done(response => {
//			this.setState({employees: response.entity._embedded.employees});
//		});
	}
 
	onClick() {
		console.log("##onclick");
		jq.post("/applyPerm", 
				{ 
					serviceName: jq("#serviceName").val(),
					groupId: jq("#groupId").val(),
					topic: jq("#topic").val(),
					clientType: jq("#clientType").val(),
					clusterType: jq("#clusterType").val()
					}, result => {
			console.log("##result",result);
			console.log("##serviceName:", jq("#serviceName").val())
			console.log("##groupId:", jq("#groupId").val())
			console.log("##clientType:", jq("#clientType").val())
			console.log("##clusterType:", jq("#clusterType").val())
			this.setState({a:result["clientId"]})
		})
	}
	
	render() {
		return (
			<div>
				<p>Kafka topic权限申请</p>
				<p>{this.state.a}</p>
				<p><label>服务名1:</label><input type="text" id="serviceName"></input></p>
				<p display><label>goupId:</label><input type="text" id="groupId"></input></p>
				<p><label>topic:</label><input type="text" id="topic"></input></p>
				<p>
					<label>客户端类型:</label>
					<select id="clientType">
						<option value="consumer" selected="selected">CONSUMER</option>
						<option value="producer">PRODUCER</option>
					</select>
				</p>
				<p>
					<label>集群类型</label>
					<select id="clusterType">
						<option value="log" selected="selected">Log</option>
						<option value="push">push</option>
						<option value="algo">Algo</option>
					</select>
				</p>
				<button type="submit" onClick={this.onClick}>提交</button>
			</div>
		)
	}
}
// end::app[]

// tag::render[]
ReactDOM.render(
	<App />,
	document.getElementById('react')
)
// end::render[]

