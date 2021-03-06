import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core";
import { KeyboardArrowDown } from "@material-ui/icons";
import CheckIcon from "@material-ui/icons/Check";
import clsx from "clsx";
import PropTypes from "prop-types";

const data = [
  "Lorem ipsum dolor sit amet,.5555555555555555555555555555555555555555555555555",
  20,
  30,
  40,
  50,
];

const useStyles = makeStyles(() => ({
  root: {
    // "& :focus": {
    //   border: "solid 1px #1a7ae5",
    //   borderRadius: "8px",
    // },
  },
  focused: {
    // border: "solid 1px #1a7ae5",
    // borderRadius: "8px",
  },

  field: {
    "& .MuiInputBase-root": {
      width: "368px",
      minHeight: "44px",
      padding: "10px 16px 10px 8px",
      borderRadius: "8px",
      fontSize: "16px",
      color: "#212529",
      fontFamily: "SourceSansPro",
      border: "solid 1px #e9ecef",

      "&:hover fieldset": {
        border: "solid 1px #1a7ae5",
      },
      "&.Mui-focused fieldset": {
        border: "solid 1px #1a7ae5",
      },
    },

    "& .MuiSvgIcon-root": {
      color: "#212529",
    },
  },

  popper: {
    width: "auto !important",
    marginTop: "6px",
    transform: "translate3d(16px, 60px, 0px) !important",
  },
  paper: {
    minWidth: "368px !important",
    maxWidth: "506px !important",

    margin: "0",
    padding: "8px 0",
    boxShadow: "0 8px 32px 0 rgba(33, 37, 41, 0.16)",
    backgroundColor: "#ffffff",
    "& .MuiAutocomplete-listbox": {
      padding: "0",
      overflow: "overlay",
      // minHeight: "264px",

      '& .MuiAutocomplete-option[aria-selected="true"] ': {
        color: "#1a7ae5",
        backgroundColor: "#ebf1f9",
      },
      "&::-webkit-scrollbar": {
        width: "6px",
      },
      "&::-webkit-scrollbar *": {
        background: "transparent",
      },
      "&::-webkit-scrollbar-track": {
        // boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
        // webkitBoxShadow: " 0 0 6px rgba(0,0,0,0.00)",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#ced4da",
        borderRadius: "8px",
      },
    },
  },

  option: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    height: "auto",
    alignItems: "center",
    minHeight: "44px !important",
    margin: "0",
    paddingTop: "0",
    paddingBottom: "0",

    "& li": {
      paddingBottom: "0",
      paddingTop: "0",
    },
    "& p": {
      width: "80%",
      maxWidth: "442px",
      wordBreak: "break-all",
      whiteSpace: "normal",
      marginRight: "16px",
    },
  },

  shortText: {
    height: "44px",
  },
  inputFocused: {
    border: "solid 1px #1a7ae5",
  },
}));
function CustomSelect({ multiple }) {
  const classes = useStyles();
  console.log("classes :>> ", classes);
  console.log("multiple", multiple);
  return (
    <Autocomplete
      id="combo-box-demo"
      multiple={multiple}
      options={data}
      style={{ width: 368 }}
      popupIcon={<KeyboardArrowDown />}
      size="small"
      classes={{
        root: classes.root,
        popper: classes.popper,
        paper: classes.paper,
        option: classes.option,
        focused: classes.focused,
      }}
      // debug={true}
      getOptionLabel={(option) => option.toString()}
      renderOption={(option, { selected }) => (
        <div
          className={clsx(
            classes.option,
            option.toString().length < 30 ? classes.shortText : null
          )}
        >
          <p> {option} </p>
          {selected ? <CheckIcon /> : null}
        </div>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          classes={{
            root: classes.field,
          }}
          placeholder="Please Select..."
          variant="outlined"
        />
      )}
    />
  );
}

CustomSelect.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  withLongText: PropTypes.bool,
  multiple: PropTypes.bool,
  /**
   * What background color to use
   */
};

export default CustomSelect;
