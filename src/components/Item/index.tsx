import * as React from 'react';
import Link from 'redux-first-router-link';
import { connect } from 'react-redux';
import { IItem } from '../../item.interface';
import './index.styl';

interface Props {
  item: IItem;
}

const Item = ({ item }: Props) => (
  <div className="Item transition-item">
    <p><Link to="/">Go back</Link></p>
    {item && (<>
      <h1>{item.title}</h1>
      <p>{item.body}</p>
    </>)}
  </div>
);

const mapStateToProps = ({ item }: any) => ({ item });
export default connect(mapStateToProps, null, null, { withRef: true })(Item)
