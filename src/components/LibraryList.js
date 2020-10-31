import React, { Component } from 'react'
import { Text, View,FlatList } from 'react-native'
import {connect} from 'react-redux'

import ListItem from './ListItem'

class LibraryList extends Component {
    
    renderItem (library){
return( <ListItem Library={library} />)
    }
    render() {
        console.log(this.props)
        return (
           <FlatList 
           data={this.props.libraries}
           keyExtractor={library=>library.id}
           renderItem={this.renderItem}
           />
        )
    }
}

const mapStateToProps= state=>{
return {libraries:state.libraries};
}

export default connect(mapStateToProps) (LibraryList)