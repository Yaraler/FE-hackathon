import React from "react";

export interface CountButtomProps {
  handlerAdd: () => void
  handlerMinus: () => void
  count?: number | null
}

