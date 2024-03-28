import { useBridgeProvider } from "../../hooks/useBridgeProvider";
import { SelectWidget } from "./select-widget";
import { TransferWidget } from "./transfer-widget";

export function Widget() {
  const { widgetView } = useBridgeProvider();

  switch (widgetView.view) {
    case "SELECT": {
      return <SelectWidget />;
    }
    default: {
      return <TransferWidget />;
    }
  }
}
