import App from '../App'
// import dependencies
import { connect } from 'react-redux'
// import actions
import { addFilms } from '../actions/filmsAction'


const mapStateToProps = (state) => {
    return {
      films: state.films
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
      addFilms: () => dispatch(addFilms())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
