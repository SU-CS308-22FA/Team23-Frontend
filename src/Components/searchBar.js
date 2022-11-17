import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import serverURI from "../Constants/connection";
import axios, * as others from "axios";
import { SearchService } from "../Service/ProductService";


export default function SearchBar() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = React.useState([]);

  const handleSubmit = (event) => {
    navigate(`/search/${searchQuery}`);
  };

  return (
    <div
      style={{
        display: "flex",
        alignSelf: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: 20
      }}
    >
      <form>
        <TextField
          id="search-bar"
          className="text"
          onInput={(e) => {
            setSearchQuery(e.target.value);
          }}
          label="Search..."
          name="search"
          variant="outlined"
          placeholder="Search..."
          size="small"
        />
        <IconButton onClick={handleSubmit} aria-label="search">
          <SearchIcon style={{ fill: "black" }}>
          </SearchIcon>
        </IconButton>
      </form>
      <div style={{ padding: 3 }}>

      </div>
    </div>
  );
}