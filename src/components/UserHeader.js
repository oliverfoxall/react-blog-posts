import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component {

    render () {
        const { user } = this.props;

        if (!user){
            return null;
        }

        return <div className='has-text-dark'><strong>{user.name}</strong></div>
    }
}

// get data out of redux store
const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);