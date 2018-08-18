import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
  render() {
    return (
      <FlatList
        data={this.props.libraries}
        renderItem={library => <ListItem library={library.item} />}
        keyExtractor={library => library.id.toString()}
      />
    );
  }
}

const mapStateToProps = (storeState) => ({ libraries: storeState.libraries });

export default connect(mapStateToProps)(LibraryList);
