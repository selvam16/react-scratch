import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './component.css';
import StaffsComponent from './components/Staffs';
import Students from './components/Students';

const Users = ({ staffs, handleOnclick }) => {

  const [staff, setStaff] = useState(null);

  handleOnclick = id => {
    const selectedStaff = _.find(staffs, { 'id': id });
    setStaff(selectedStaff)
  }

  return <>
    <div className='row'>
      <div className='col-sm-6 details_pane'>
        <h5 className='text-center'>Staffs Details</h5>
        <StaffsComponent staffs={staffs} handleOnclick={id => handleOnclick(id)} />
      </div>
      {staff &&
        <div className='col-sm-6 details_pane'>
          <h5 className='text-center'>Students Details</h5>
          <Students students={staff.students} />
        </div>
      }
    </div>
  </>
}

Users.propTypes = {
  staffs: PropTypes.arrayOf(PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    students: PropTypes.arrayOf(PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
    })),
  })),
}

Users.defaultProps = {
  staffs: null,
}
export default Users;
