import React, { Component } from 'react';
import CustService from '../Service/CustService';
 
export default class WelcomeCust extends Component {
    constructor() {
        super();

        this.state = {

            users: []
        }
    }

    componentDidMount() {
        CustService.getCust().then((response) => {
            this.setState({ users: response.data })
        }
        );
    }

    render() {
        return (
            <div>{this.state.users}</div>
        )
    }
}
