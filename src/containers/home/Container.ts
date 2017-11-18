import { connect } from 'react-redux'
import { loadItems } from './action'
import { bindActionCreators } from 'redux'
import { Dispatch } from 'redux'
import HomeLayout from './Layout'

const mapStateToProps = (state: any) => {
  return {
    isLoading: state.itemsIsLoading,
  }
}

const mapDispatchToProps = (dispatch: Dispatch<any>) =>
  bindActionCreators({ loadItems }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HomeLayout as any)