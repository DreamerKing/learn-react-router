/**
 * Created by DreamerKing on 2017/4/25.
 */
import React, { Component } from 'react';

class Message extends Component {
    render() {
        return (
            <div>
                <h3>Messgae {this.props.params.id}</h3>
            </div>
        )
    }
}

export  default Message;