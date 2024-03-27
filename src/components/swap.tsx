import { ClockCounterClockwise, GearSix } from "@phosphor-icons/react";
import { ConnectKitButton } from "connectkit";

export function Swap() {
  return (
    <div className="flex flex-col w-full max-w-md gap-1 p-2 rounded-2xl bg-slate-200">
      <div className="flex items-center justify-between px-2 py-1">
        <span>TRANSFER</span>
        <div className="flex items-center gap-2 text-2xl">
          <button onClick={() => console.log("SETTINGS")}>
            <GearSix />
          </button>
          <button onClick={() => console.log("HISTORY")}>
            <ClockCounterClockwise />
          </button>
        </div>
      </div>
      <div className="relative grid flex-grow w-full grid-rows-2 gap-1 place-items-center">
        <div className="flex flex-col w-full h-full gap-2 p-4 duration-200 border border-transparent hover:border-slate-400 bg-slate-50 rounded-2xl">
          <div className="flex items-center justify-between text-xs">
            <span>Pay</span>
            <button
              onClick={() => console.log("TOKEN SETTINGS")}
              className="flex items-center gap-2 px-1 py-1 text-base rounded-full outline outline-slate-200"
            >
              <span className="relative w-7">
                <span className="flex w-full h-full rounded-full bg-slate-300 aspect-square"></span>
                <span className="absolute w-5 rounded-full -right-1 -bottom-1 aspect-square bg-slate-200"></span>
              </span>
              USD.h
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M5.99998 8.44296C5.84636 8.44296 5.69276 8.38431 5.57564 8.26725L1.89012 4.58169C1.65567 4.34724 1.65567 3.96712 1.89012 3.73277C2.12447 3.49842 2.50451 3.49842 2.73898 3.73277L5.99998 6.99396L9.26099 3.73289C9.49544 3.49853 9.87544 3.49853 10.1098 3.73289C10.3443 3.96724 10.3443 4.34735 10.1098 4.5818L6.42431 8.26736C6.30714 8.38444 6.15354 8.44296 5.99998 8.44296Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-grow">
            <div className="flex-grow">
              <input
                type="number"
                inputMode="decimal"
                className="w-full h-full text-5xl font-medium"
                placeholder="0"
              />
            </div>
            <div className="flex flex-col items-end justify-end gap-1 text-xs min-w-max">
              <button
                onClick={() => console.log("MAX")}
                className="font-semibold py-0.5 px-2 rounded-full bg-slate-300"
              >
                MAX
              </button>
              <span className="text-slate-500/70"> 500 USD.h Available</span>
            </div>
          </div>
        </div>
        <button className="absolute w-10 border bg-slate-50 [box-shadow:0_0_0_4px_#e2e8f0] flex items-center justify-center rounded-full aspect-square">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M1.99314 11.0125C1.99778 11.1683 2.06295 11.3163 2.1748 11.425L4.57594 13.825C4.63168 13.8808 4.69786 13.9252 4.77076 13.9554C4.84365 13.9857 4.92181 14.0012 5.00073 14.0012C5.07965 14.0012 5.1578 13.9857 5.2307 13.9554C5.30359 13.9252 5.36977 13.8808 5.42551 13.825L7.82672 11.425C7.88415 11.3695 7.92993 11.3032 7.96139 11.2298C7.76786 11.1564 8.00939 11.0775 8.00998 10.9977C8.01057 10.9179 7.99523 10.8387 7.96485 10.7649C7.93448 10.6911 7.88962 10.6241 7.83302 10.5678C7.77642 10.5115 7.70922 10.4671 7.63523 10.4371C7.56124 10.4071 7.48197 10.3922 7.40215 10.3933C7.32233 10.3943 7.2435 10.4112 7.17031 10.4431C7.09712 10.475 7.03104 10.5211 6.97591 10.5789L5.59901 11.9535L5.599 2.60191C5.599 2.44263 5.53572 2.28986 5.42309 2.17723C5.31045 2.0646 5.15766 2.00132 4.99837 2.00132C4.83909 2.00132 4.68636 2.0646 4.57373 2.17723C4.4611 2.28986 4.39781 2.44263 4.39781 2.60191L4.39781 11.9476L3.02554 10.5789C2.94155 10.4915 2.83302 10.4316 2.71432 10.4071C2.59563 10.3825 2.47229 10.3945 2.36055 10.4415C2.2488 10.4884 2.15388 10.5681 2.08829 10.67C2.02271 10.7719 1.98955 10.8913 1.99314 11.0125V11.0125ZM7.99427 5.00661C7.99523 5.12528 8.03134 5.241 8.09807 5.33914C8.1648 5.43728 8.25914 5.51343 8.36915 5.55796C8.47916 5.60249 8.59994 5.6134 8.71615 5.58931C8.83235 5.56522 8.93879 5.50721 9.02203 5.42262L10.4001 4.04566L10.4001 13.3996C10.4036 13.5564 10.4683 13.7057 10.5805 13.8154C10.6926 13.9251 10.8432 13.9866 11.0001 13.9866C11.157 13.9866 11.3077 13.9251 11.4199 13.8154C11.532 13.7057 11.5967 13.5564 11.6001 13.3996L11.6001 4.04918L12.9771 5.42262C13.0309 5.48543 13.0971 5.53644 13.1715 5.57245C13.246 5.60847 13.3271 5.62871 13.4097 5.6319C13.4924 5.63509 13.5747 5.62116 13.6517 5.59099C13.7287 5.56082 13.7987 5.51506 13.8572 5.45659C13.9157 5.39811 13.9614 5.32818 13.9916 5.25118C14.0218 5.17418 14.0357 5.09177 14.0325 5.00913C14.0293 4.92649 14.0091 4.84541 13.973 4.77096C13.937 4.69652 13.886 4.63032 13.8232 4.57653L11.4232 2.17653C11.3107 2.06476 11.1587 2.00202 11.0001 2.00202C10.8416 2.00202 10.6895 2.06476 10.5771 2.17653L8.17593 4.57653C8.11845 4.63244 8.07273 4.69931 8.04153 4.77318C8.01034 4.84705 7.99427 4.92642 7.99427 5.00661V5.00661Z"
              fill="black"
            />
          </svg>
        </button>
        <div className="w-full h-full p-4 duration-200 border border-transparent hover:border-slate-400 bg-slate-50 rounded-2xl">
          <div className="flex items-center justify-between text-xs">
            <span>Receive</span>
            <button
              onClick={() => console.log("TOKEN SETTINGS")}
              className="flex items-center gap-2 px-1 py-1 text-base rounded-full outline outline-slate-200"
            >
              <span className="relative w-7">
                <span className="flex w-full h-full rounded-full bg-slate-300 aspect-square"></span>
                <span className="absolute w-5 rounded-full -right-1 -bottom-1 aspect-square bg-slate-200"></span>
              </span>
              USD.h
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M5.99998 8.44296C5.84636 8.44296 5.69276 8.38431 5.57564 8.26725L1.89012 4.58169C1.65567 4.34724 1.65567 3.96712 1.89012 3.73277C2.12447 3.49842 2.50451 3.49842 2.73898 3.73277L5.99998 6.99396L9.26099 3.73289C9.49544 3.49853 9.87544 3.49853 10.1098 3.73289C10.3443 3.96724 10.3443 4.34735 10.1098 4.5818L6.42431 8.26736C6.30714 8.38444 6.15354 8.44296 5.99998 8.44296Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-grow">
            <div className="flex-grow">
              <input
                type="number"
                inputMode="decimal"
                className="w-full h-full text-5xl font-medium"
                placeholder="0"
              />
            </div>
          </div>
        </div>
      </div>
      <ConnectKitButton.Custom>
        {({ show }) => (
          <button
            onClick={show}
            className="p-4 text-xl font-medium bg-slate-500 text-slate-50 rounded-2xl"
          >
            Connect wallet
          </button>
        )}
      </ConnectKitButton.Custom>
    </div>
  );
}
