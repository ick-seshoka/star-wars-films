import { useMediaQuery } from "react-responsive";

import { breakpoints } from "@styles";

export function isMobile() {
  return useMediaQuery({ maxWidth: breakpoints.mobile });
}
