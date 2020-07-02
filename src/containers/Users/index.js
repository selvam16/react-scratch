import { connect } from 'react-redux'
import Users from './component'
import { staffsSelector } from './selectors';

const mapStateToProps = state => ({
  staffs: staffsSelector(state),
})
const mapDispatchToProps = dispatch => ({
  loadUsers: () => dispatch(actions.loadUsers()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Users)
