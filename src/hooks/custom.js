import { useState } from "react";

export default function useEdgeCase() {
  return useState(`Yes, that's really edge case`);
}
