import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

function SortProduct(props) {
  const [option, setOption] = React.useState(0);

  const handleChange = (event: SelectChangeEvent) => {
    setOption(event.target.value);
  };

  React.useEffect(() => {
    // console.log(option);
    func3();
  }, [option]);

  function func3() {
    console.log(option);
    props.func(option);
  }

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel style={{ textAlign: "left" }} id="demo-simple-select-autowidth-label">
          Sorting
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={option}
          onChange={handleChange}
          autoWidth
          label="Sorting"
          // onClick={func3}
        >
          <MenuItem value={0}>None</MenuItem>
          <MenuItem value={10}>Increasing Price</MenuItem>
          <MenuItem value={20}>Decreasing Price</MenuItem>
          <MenuItem value={30}>Ending Soon</MenuItem>
          <MenuItem value={40}>Newly Listed</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default SortProduct;
