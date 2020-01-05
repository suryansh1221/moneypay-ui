import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../actions/index'

class SongList extends Component{
    renderList(){
        return this.props.songs.map((song) => {
            return (
                <div className='item' key={song.title}>
                    <div className="right floated content">
                        <button 
                        className="ui button primary"
                        onClick={() => this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                </div>
            )
        })
    }
    render(){
        console.log(this.props)
        return <div className="ui divided list">{this.renderList()}</div>
    }
}
const mapStateToProps = state => {
    console.log(state)
    return state
}
export default connect(mapStateToProps)(SongList)