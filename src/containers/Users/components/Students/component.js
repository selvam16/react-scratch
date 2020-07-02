import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table from '../../../../components/Table';
const Students = ({ students }) => {
  return (
    <Table items={students}
      renderRow={student => (
        <tr key={Math.random()}><td>{student.firstName}</td><td>{student.lastName}</td></tr>
      )}
      renderHeader={props => (
        <tr><th>First Name</th><th>Last Name</th></tr>
      )}
      renderMessage={"Not yet assigned any students"}
    />
  )
}

Students.propTypes = {
  students: PropTypes.arrayOf(PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  })),
}

Students.defaultProps = {
  students: [],
}

export default Students;
