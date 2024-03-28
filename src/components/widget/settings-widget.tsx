import { X } from "@phosphor-icons/react";
import { useBridgeProvider } from "../../hooks/useBridgeProvider";

export default function SettingsWidget() {
  const { widgetViewDispatch } = useBridgeProvider();

  return (
    <div className="widget-container">
      <div className="widget-header">
        <span className="text-2xl font-medium tracking-tight">Settings</span>
        <div className="flex items-center gap-3 text-2xl">
          <button
            className="widget-nav-btn"
            onClick={() => widgetViewDispatch({ type: "TRANSFER" })}
          >
            <X weight="bold" size={20} />
          </button>
        </div>
      </div>
      <div className="p-2 pb-6 space-y-2">
        <div className="p-3 space-y-2 duration-200 border rounded-xl bg-slate-100 focus-within:border-slate-400 hover:border-slate-400">
          <div className="flex items-center gap-1">Relayer fee</div>
          <div className="relative flex items-end justify-end">
            <input
              type="number"
              inputMode="decimal"
              placeholder="0"
              className="w-full h-full text-2xl rounded-md"
            />
            <div className="absolute flex flex-col items-end gap-1">
              <span className="opacity-50 pointer-events-none">USD</span>
            </div>
          </div>
          <div className="text-xs pt-3 [border-top:1px_solid_currentColor] opacity-50">
            The amount that is offered to relayers for transaction delivery and
            execution. If the amount is too small such that it is unprofitable
            to deliver, relayers will ignore your transaction.
          </div>
        </div>
        <div className="p-3 space-y-2 duration-200 border rounded-xl bg-slate-100 focus-within:border-slate-400 hover:border-slate-400">
          <div className="flex items-center gap-1">Transaction timeout</div>
          <div className="relative flex items-end justify-end">
            <input
              type="number"
              inputMode="decimal"
              placeholder="0"
              className="w-full h-full text-2xl rounded-md"
            />
            <div className="absolute flex flex-col items-end gap-1">
              <button className="px-3 py-1 text-xs duration-200 rounded-full hover:bg-slate-300 right-3 bottom-3 bg-slate-200">
                MAX
              </button>
            </div>
          </div>
          <div className="text-xs pt-3 [border-top:1px_solid_currentColor] opacity-50">
            This is the maximum time you want your transaction to stay pending
            for. Once this timeout is elapsed, your transaction will be reverted
            and your funds recovered. This value should be roughly the same as
            the estimated transfer time, otherwise your requests will not get a
            chance to be delivered.
          </div>
        </div>
      </div>
    </div>
  );
}
