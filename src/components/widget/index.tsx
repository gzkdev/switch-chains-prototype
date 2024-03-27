import { useBridgeProvider } from "../../hooks/useBridgeProvider";
import { Networks } from "./networks";
import { Swap } from "./transfer";

export function Widget() {
  const { widgetView } = useBridgeProvider();

  switch (widgetView.view) {
    case "SELECT": {
      return <Networks />;
    }
    default: {
      return <Swap />;
    }
  }
}
