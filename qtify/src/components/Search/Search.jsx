import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Search.css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Search = () => {
  return (
    <div className="search">

      <InputGroup className="mb-3">
        <Form.Control
          placeholder="search for an album of your choice"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          id = "search-bar"
          />
        <Button variant="outline-secondary" id="button-addon2">
          <SearchOutlinedIcon />
        </Button>
      </InputGroup>
          </div>
  );
}

export default Search;