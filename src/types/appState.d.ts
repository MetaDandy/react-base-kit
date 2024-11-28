export type ThemeType = "dark" | "light" | "system";

export type AlertType =
  | {
      isOpen: boolean;
      title: string;
      description: string | JSX.Element;
      btnAction: React.ReactNode | null;
      btnCancel: React.ReactNode | null;
    }
  | false;

export type LockScreenType =
  | {
      isVisible: boolean;
      type: "jsx" | "reload" | "loading";
      content: string | JSX.Element;
    }
  | false;

export type ModaTypel =
  | {
      isOpen: boolean;
      title: string;
      description: string;
      content: string | JSX.Element;
      btnAction: React.ReactNode | null;
      btnCancel: React.ReactNode | null;
    }
  | false;

export type AppState = {
  theme: ThemeType;
  alert: AlertType;
  lockScreen: LockScreenType;
  modal: ModalType;
  setTheme: (theme: ThemeType) => void;
  setAlert: (alert: AlertType) => void;
  setLockScreen: (lock: LockScreenType) => void;
  setModal: (modal: ModalType) => void;
};
