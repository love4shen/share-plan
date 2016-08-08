import React from 'react';

const styles = {
  wrapperStyle: {
    backgroundColor: '#ffcc33',
    borderRadius: '4px',
    margin: '0.5rem',
    padding: '0.5rem',
  },
};

const PlanListItem = ({ event }) => {
  const { summary, start, end } = event;
  const transformedTime = `${start.join(':')} - ${end.join(':')}`;

  const startInNumber = Number(start[0]) + (Number(start[1]) / 60);
  const endInNumber = Number(end[0]) + (Number(end[1]) / 60);

  const computedStyle = {
    height: `${(endInNumber - startInNumber)*2}rem`,
  };

  return (
    <div style={Object.assign({}, styles.wrapperStyle, computedStyle)}>
      <div>{summary}</div>
      <div>{transformedTime}</div>
    </div>
  );
};

PlanListItem.propTypes = {
  event: React.PropTypes.object,
};

export default PlanListItem;
