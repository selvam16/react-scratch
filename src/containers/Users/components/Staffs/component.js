import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table from '../../../../components/Table';
import Students from '../Students'
const Staffs = ({ staffs, handleOnclick }) => {
  return (
    <Table items={staffs}
      renderRow={staff => (
        <tr key={Math.random()} onClick={() => handleOnclick(staff.id)}><td>{staff.firstName}</td><td>{staff.lastName}</td></tr>
      )}
      renderHeader={props => (
        <tr><th>First Name</th><th>Last Name</th></tr>
      )}
      renderMessage={"No records found"}
    />
  )
}

Staffs.propTypes = {
  staffs: PropTypes.arrayOf(PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    students: PropTypes.arrayOf(PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
    })),
  })),
}

Staffs.defaultProps = {
  staffs: [],
}

export default Staffs;
