import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import ListData from '../Data/ListData'
import {getData,addData,delData} from '../../store/actions/dataActions'
import AddData from '../Data/AddData'



class Data extends React.Component{

    componentDidMount(){
        this.props.getData()
    }

  
    componentWillReceiveProps(nextProps){
        if(nextProps.data!==this.props.data){
            this.props = nextProps
           
        }
    }

    hapusData = (id) =>{
        this.props.hapus(id)
    }

render(){

  return (
  
    <div style={{"marginTop":"3%"}} className="container page">
        <ListData hapus={this.hapusData} data={this.props.data}/>
        <hr/>
        <AddData tambah={this.props.tambah}/>
    </div>
   
  )
}
}

const mapDistpatchToProps = (dispatch) =>{

    return{
        getData : () => {dispatch(getData())},
        tambah : (cred) => dispatch(addData(cred)),
        hapus : (id) =>dispatch(delData(id))
    }
}

const mapStateToProps = (state) =>{
    return {
      error : state.data.error,
      loading: state.data.loading,  
      data : state.data.data
    }
}


export default withRouter(connect(mapStateToProps,mapDistpatchToProps)(Data))
