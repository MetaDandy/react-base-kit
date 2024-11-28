import useAppStore from "@/store/app.store";
import { Repeat } from "lucide-react";

const LockScreen = () => {
  const { lockScreen } = useAppStore();

  if (!lockScreen) {
    return null;
  }

  let renderContent;

  switch (lockScreen.type) {
    case "jsx":
      renderContent = lockScreen.content;
      break;

    case "reload":
      renderContent = (
        <div className="flex flex-col items-center justify-center">
          <div className="my-3 text-center font-bold">
            <button type="button">
              <Repeat className="mr-2 h-4 w-4 fill-current" />
              Recargar la pagina
            </button>
          </div>
        </div>
      );
      break;

    case "loading":
      renderContent = (
        <div className="flex flex-col items-center justify-center">
          <div className="border h-16 w-16 animate-spin rounded-full border-t-4 border-blue-600"></div>
          <div className="mt-5 text-center font-bold">{lockScreen.content}</div>
        </div>
      );
      break;

    default:
      renderContent = null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div className="rounded-xl bg-opacity-75">
        <div className="p-5 text-white">{renderContent}</div>
      </div>
    </div>
  );
};
export default LockScreen;
