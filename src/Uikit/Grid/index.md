---
group:
  title: 基础组件
  path: /uikit
  order: 0

order: 3
---

# Grid

```tsx
import { Box, Grid } from 'glass';
import React from 'react';

const Template: React.FC = () => (
  <Grid
    gridGap="10px"
    gridTemplateColumns="repeat(3, 1fr)"
    height="200px"
    padding="10px"
    border="1px solid #ddd"
    borderRadius="8px"
  >
    <Box height="100%" bg="#ddd" borderRadius="8px" />
    <Box height="100%" bg="#ddd" borderRadius="8px" />
    <Box height="100%" bg="#ddd" borderRadius="8px" />
  </Grid>
);

export default Template;
```
