import Content from '../components/Content'
import { connect } from 'react-redux'
import { toggleListVisibility } from '../actions/listAction.js'

const mapStateToProps = (state) => {
    return {
      showList: state.showList,
      movieIndex: state.movieIndex
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleListVisibility: (visibility, movieIndex) => dispatch(toggleListVisibility(visibility, movieIndex))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);