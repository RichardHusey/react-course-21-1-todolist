
import { FaPlus, FaSearch } from "react-icons/fa"

import styled from "styled-components";

const StyledFaPlus = styled(FaPlus)`
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

const StyledFaSearch = styled(FaSearch)`
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

export {StyledFaPlus, StyledFaSearch};