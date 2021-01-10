import React from 'react'

class NewColor extends React.Component{
    state={
        name:"",
        color:""
    }

     handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})

    }
    handleSubmit=(e)=>{
        e.preventDefault()
        this.props.addColor({...this.state});
        this.props.history.push("/colors");
    }

    render=()=>{
        const {name,value}=this.state;
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter a name for the color"
                    onChange={this.handleChange}
                    value={name}
                    />
                    <input
                    type="color"
                    name="value"
                    id="value"
                    onChange={this.handleChange}
                    value={value}
                    />
                    <input
                    type="submit"
                    value="Add color"
                    />
                </form>
            </div>
            )
    }
       
    
}

export default NewColor;