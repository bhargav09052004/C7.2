// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  updateSearchInput = value => {
    this.setState({searchInput: value})
  }

  onChangeButton = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const searchList = suggestionsList.filter(each =>
      each.suggestions.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
        />
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            alt="search icon"
          />
          <input
            type="search"
            value={searchInput}
            onChange={this.onChangeButton}
          />
        </div>
        <ul>
          {searchList.map(each => (
            <SuggestionItem
              key={each.id}
              suggestionDetails={each}
              updateSearchInput={this.updateSearchInput}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default GoogleSuggestions
