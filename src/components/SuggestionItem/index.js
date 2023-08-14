// Write your code here
const SuggestionItem = props => {
  const {suggestionDetails, updateSearchInput} = props
  const {suggestions} = suggestionDetails
  const onUpdate = () => {
    updateSearchInput(suggestions)
  }
  return (
    <li>
      <p>{suggestions} </p>
      <button type="button" onClick={onUpdate}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
