import * as React from 'react';
import { PatternFormat } from "react-number-format";
import {useMediaQuery} from "@mui/material";

import PropTypes from 'prop-types';

const NumericFormatCustom = React.forwardRef(function NumericFormatCustom(
    props,
    ref,
  ) {
    const { onChange, ...other } = props;

    const matches = useMediaQuery('(max-width:800px)');

  
    return (
      <PatternFormat
        {...other}
        getInputRef={ref}
        inputMode="numeric"
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        format="####  -  ####  -  ####  -  ####"
        style={{
            fontWeight:"500",
            fontSize: matches ? "0.7em" : "1em",
            color:"#A1A9BB",
            width:"100%"
        }}

      />
    );
  });

  NumericFormatCustom.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  export default NumericFormatCustom;