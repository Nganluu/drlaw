import React from 'react'
import Body from '../../Component/Body/body'

class SearchPage extends React.Component{
  
    render(){
        return(
            <div>
                <Body data= {this.props.data} isSearching={this.props.isSearching}/>
            </div>
        )
    }
}
export default SearchPage;