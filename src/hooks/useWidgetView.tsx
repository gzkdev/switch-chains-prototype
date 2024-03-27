import { useCallback, useState } from "react";
import { WidgetView } from "../types";

export function useWidgetView() {
  const [widgetView, setWidgetView] = useState<WidgetView>("TRANSFER");

  const updateWidgetView = useCallback(
    (view: WidgetView) => setWidgetView(view),
    [widgetView]
  );

  return { widgetView, updateWidgetView };
}
