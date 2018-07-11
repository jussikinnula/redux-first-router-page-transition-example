import * as React from 'react';
import { connect } from 'react-redux';
import Link from 'redux-first-router-link';
import { IItem } from '../../item.interface';
import './index.styl';

interface Props {
  items: IItem[];
}

const List = ({ items }: Props) => (
  <div className="List transition-item">
    <h1>Hello List</h1>
    <div className="List-items">
    {items && items.map((item) => (
      <div key={item.id} className="List-items-item">
        <Link to={`/item/${item.id}`}>{item.title}</Link>
      </div>
    ))}
    </div>
  </div>
);

const mapStateToProps = ({ items }: any) => ({ items });
export default connect(mapStateToProps, null, null, { withRef: true })(List)
