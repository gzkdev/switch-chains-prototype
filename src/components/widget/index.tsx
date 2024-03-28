import { useBridgeProvider } from "../../hooks/useBridgeProvider";
import { SelectWidget } from "./select-widget";
import SettingsWidget from "./settings-widget";
import { TransferWidget } from "./transfer-widget";

export function Widget() {
  const { widgetView } = useBridgeProvider();

  switch (widgetView.view) {
    case "SELECT": {
      return <SelectWidget />;
    }
    case "SETTINGS": {
      return <SettingsWidget />;
    }
    default: {
      return <TransferWidget />;
    }
  }
}
