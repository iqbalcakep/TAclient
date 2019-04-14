import React, { Component } from 'react'
import Select from 'react-select';



class Filter extends Component {
    constructor(props){
        super(props)
       this.state = {
        selectedOption: "Otomatis",
        jangkauan:null
      }
    }
    
    handleChange = async (selectedOption) => {
    await this.setState({ selectedOption });
    this.state.selectedOption.value === "Otomatis" ?
    document.getElementsByClassName("manual")[0].style.display = "none"
   : document.getElementsByClassName("manual")[0].style.display = "block"

    
    }
    handleJangkauan = (e) =>{
        this.setState({
            jangkauan : e.target.value
        })
    }

    handleSubmit = (e)=>{
        this.state.selectedOption.value === "Otomatis" ?
         this.props.filter(15)
        :  this.props.filter(this.state.jangkauan)

    }

  render() {
    const options = [
        { value: 'Otomatis', label: 'Otomatis' },
        { value: 'Manual', label: 'Manual' }
      ];

      const { selectedOption } = this.state;
 
      return (
          <div>
        <Select  value={selectedOption} onChange={this.handleChange} options={options}/>
            <div style={{display:"none"}} className="manual">
            <div className="input-field">
                <label htmlFor="username">Jangkauan/KM</label>
                <input type="text" id="jangkauan" onChange={this.handleJangkauan}/>
            </div>
            </div>
            <br/>
            <button onClick={this.handleSubmit} className="btn btn-success">Cari...!!!</button>
        </div>
      );
  }
}

export default Filter
