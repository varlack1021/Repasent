import React from 'react'
//pure javascript is wrapped inside of a {}
//React class names must follow pascal case

/*What Ive Learned 
The form does things slightly differently and tbh looks for superior than input as it is more superior
Really depends what you are building

im not sure what value does
i believe the event refers to the component you are workinh with

react forms by default do a post request and refreshes the whole page

*/
class CreateCard extends React.Component {

	constructor(props) {

		super();
		this.handleInput = this.handleInput.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)

		this.state = {
			street : " ",
			city: " ",
			state: " ",
			data: ""
		};
	}

	handleInput(event){
		event.persist()
			console.log(event.target.value)

			this.setState({
			[event.target.name]: event.target.value
			})
		}

	handleSubmit = (event) => {
		//this prevents the page from refreshing
		event.preventDefault()
		
		const header = "http://127.0.0.1:5000/getRepresentatives?"
		const args = "address=" + this.state.address + " city=" + this.state.city + " state=" + this.state.state
		const url = header + args
		console.log(url)
		
		fetch(url).then(	results => {
			return results.json();
		}).then(data => {
			const officials = data.officials[3]
			//console.log(officials)
			console.log(officials)
			this.setState({data: officials.name})
			
		} )


	}

	

		render() {
		return (
		<div>
		<form onSubmit={this.handleSubmit} className="new-card-form">

			<h4>Enter your information </h4>
			<div>
				<label for="city"> Enter your city or town </label> 
				<input  onChange={this.handleInput} className="new-card-input" name="city" type="text"  />
				
				<label for='address'> Enter your address </label>
				<input onChange={this.handleInput} className="new-card-input" name="address" type="text" />
				
				<label for="state"> Enter your state </label>
				<input onChange={this.handleInput} className="new-card-input" name="state" type="text"/>
			</div>

			<div>
				<input className= "new-card-input" type="submit" value ="Enter"/>
			</div>

			<p> Your voting representative is {this.state.data}</p>

		</form>
					


		</div>

		)
	}

}

export default CreateCard;