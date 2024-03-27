import { useReducer } from "react";
import { WidgetView, WidgetViewAction } from "../types";

const initialState: WidgetView = {
  view: "TRANSFER",
  select: "SOURCE",
};

function widgetViewReducer(state: WidgetView, action: WidgetViewAction) {
  switch (action.type) {
    case "SELECT": {
      const { type, payload } = action;
      return { view: type, select: payload };
    }
    default: {
      return { ...state, view: action.type };
    }
  }
}

export function useWidgetView() {
  const [widgetView, widgetViewDispatch] = useReducer(
    widgetViewReducer,
    initialState
  );

  return { widgetView, widgetViewDispatch };
}
