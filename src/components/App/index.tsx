import * as React from 'react';
import { NOT_FOUND } from 'redux-first-router';
import { connect } from 'react-redux';
import * as classNames from 'classnames';
import { PageTransition } from 'react-router-page-transition-v2';

import Err from '../Error';
import Item from '../Item';
import List from '../List';
import NotFound from '../NotFound';

import './index.styl';

const TRANSITION_SLIDE_LEFT = 'transition-slide-left';
const TRANSITION_SLIDE_RIGHT = 'transition-slide-right';
const TRANSITION_ACTIVE = 'transition-active';

interface Props {
  page: string;
  direction: string;
  location: any;
  transitionActive: boolean;
  dispatch: Function;
}

interface State {
  transitionActive: boolean;
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { transitionActive: false };
  }

  renderComponent() {
    const { page } = this.props;

    try {
      if (page === 'Item') return <Item />;
      if (page === 'List') return <List />;
      return <NotFound />;
    } catch (error) {
      return <Err error={error} />;
    }
  }

  render() {
    const { page, direction, transitionActive, location, dispatch } = this.props;

    return (
      <PageTransition
        timeout={500}
        location={location}
        onTransitionStart={() => dispatch({ type: 'TRANSITION_START' })}
        onTransitionEnd={() => dispatch({ type: 'TRANSITION_END' })}
        className={classNames({
          [TRANSITION_SLIDE_LEFT]: direction === 'next',
          [TRANSITION_SLIDE_RIGHT]: direction === 'back',
          [TRANSITION_ACTIVE]: transitionActive
        })}
      >
        {this.renderComponent()}
      </PageTransition>
    );
  }
}

const mapStateToProps = ({ page, direction, location, transitionActive }: any) => ({
  page, direction, location, transitionActive
});
const mapDispatchToProps = (dispatch: Function) => ({ dispatch });
export default connect(mapStateToProps, mapDispatchToProps)(App)
