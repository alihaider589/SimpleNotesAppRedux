import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import Reducers from './reducers/index'
import Header from './components/common/Header'
import LibraryList from './components/LibraryList'
export default class App extends Component {
    render() {
        return (
           <Provider store={createStore(Reducers)
        
        }>
        <View style={{flex:1}}>
        <Header headerText="List App"/>
        <LibraryList />
        </View>
       
           </Provider>
        )
    }
}
