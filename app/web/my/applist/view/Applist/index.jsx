import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../action/app';

const mapStateToProps = ({ app }) => ({ app });
const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators(actions, dispatch) });

@connect(mapStateToProps, mapDispatchToProps)
export default class Applist extends Component {
    static propTypes = {
        app: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired
    }

    render() {
        const { apps } = this.props.app;
        return (<div>
            {
                apps.map(item => `${item.name}`)
            }
        </div>)
    }
}
