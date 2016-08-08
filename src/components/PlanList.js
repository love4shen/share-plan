import React from 'react';
import PlanListItem from './PlanListItem';

const styles = {
  wrapperStyle: {
    border: '1px solid black',
    margin: '1rem',
    width: '500px',
  },
};

const PlanList = ({ events }) => (
  <div>
    <div style={styles.wrapperStyle}>
    {events.map(event => <PlanListItem event={event} />)}
    </div>
  </div>
);

PlanList.propTypes = {
  events: React.PropTypes.array,
};

export default PlanList;
