---
group:
  title: 基础组件
  path: /uikit
  order: 0

order: 2
---

# Flex

## flex-direction: row

```tsx
import { Box, Flex } from 'glass';
import React from 'react';

const Template: React.FC = () => (
  <Flex
    justifyContent="space-between"
    height="200px"
    padding="10px"
    border="1px solid #ddd"
    borderRadius="8px"
  >
    <Box height="100%" style={{ flex: 0.3 }} bg="#ddd" borderRadius="8px" />
    <Box height="100%" style={{ flex: 0.3 }} bg="#ddd" borderRadius="8px" />
    <Box height="100%" style={{ flex: 0.3 }} bg="#ddd" borderRadius="8px" />
  </Flex>
);

export default Template;
```
