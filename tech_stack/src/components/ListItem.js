import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { library, expanded } = this.props;
    if (expanded) {
      return (
        <CardSection>
          <Text style={styles.descStyle}>
            {library.description}
          </Text>
        </CardSection>
      );
    }
  }

  render() {
    const { id, title } = this.props.library;
    const { titleStyle } = styles;
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const expanded = ownProps.library.id === state.selectLibraryId;
  return { expanded };
};

const styles = {
  titleStyle: {
    fontSize: 20,
    paddingLeft: 15
  },
  descStyle: {
    flex: 1,
    color: 'blue',
    fontSize: 16,
    paddingLeft: 15
  }
};

export default connect(mapStateToProps, actions)(ListItem);
