import React, { Component } from 'react'
import { Text, View,StyleSheet ,TouchableWithoutFeedback} from 'react-native'
import CardSection from './common/CardSection'
import * as actions from '../actions'
import {connect} from 'react-redux'

class ListItem extends Component {

    renderDescription(){
        if(this.props.Library.item.title===this.props.Library.item.title){
            return (
                <Text>{this.props.Library.item.description}</Text>
            )
        }
    }
    render() {
        console.log(this.props)
        const {title,id} = this.props.Library.item
        return (

            <TouchableWithoutFeedback onPress={()=>this.props.SelectLibrary(title)}>
            <View>
            <CardSection >
            <Text style={styles.titleStyle}>{title}</Text>
            
            </CardSection>
            {this.renderDescription()}
            </View>
            </TouchableWithoutFeedback>
         
        )
    }
}



const styles = StyleSheet.create({
    titleStyle:{
fontSize:18,
paddingLeft:15
    }
})

const mapStateToProps=state=>{
    return {selectedLibrary:state.SelectionId}
}

export default connect(mapStateToProps,actions)(ListItem)