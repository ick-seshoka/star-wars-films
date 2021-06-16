import React, { memo } from "react";

import { Container } from "./styles";

const InvalidPage = memo(() => <Container>Page not found</Container>);

export default InvalidPage;
