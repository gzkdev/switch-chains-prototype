import { ArrowLeft } from "@phosphor-icons/react";
import { useBridgeProvider } from "../../hooks/useBridgeProvider";

export function Networks() {
  const { updateWidgetView } = useBridgeProvider();

  return (
    <div className="widget-container min-h-96">
      <div className="widget-header">
        <span className="text-2xl font-medium tracking-tight">
          Select Token
        </span>
        <div className="flex items-center gap-2 text-2xl">
          <button
            className="widget-nav-btn"
            onClick={() => updateWidgetView("TRANSFER")}
          >
            <ArrowLeft weight="bold" size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
