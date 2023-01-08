import { Tooltip, OverlayTrigger, Form, InputGroup } from 'react-bootstrap';

const SearchFormDisabled = () => (
  <OverlayTrigger
    overlay={
      <Tooltip id="tooltip-disabled">
        Paid version of News API required to search
      </Tooltip>
    }
  >
    <Form.Group>
      <InputGroup>
        <Form.Control
          type="text"
          placeholder="Search to find articles..."
          className="search-bar search-disabled"
          disabled
        />
        <InputGroup.Text
          disabled
          role="button"
          type="submit"
          className="btn btn-search search-btn-disabled"
          to="/"
        >
          Search
        </InputGroup.Text>
      </InputGroup>
    </Form.Group>
  </OverlayTrigger>
);

export default SearchFormDisabled;
