import { ActionContext } from "vuex";
import { Device, DeviceInfo } from "@capacitor/device";

export interface PageState {
  device?: DeviceInfo;
  activeAlert: any;
}

const PageState: PageState = {
  device: undefined,
  activeAlert: null,
};

export default {
  state: PageState,
  mutations: {
    SET_DEVICE: (state: PageState, device: DeviceInfo): void => {
      state.device = device;
    },
  },
  actions: {
    setDevice(context: ActionContext<PageState, any>): void {
      Device.getInfo().then((device: any) => context.commit("SET_DEVICE", device));
    },
  },
  getters: {
    deviceInfo: (state: PageState): DeviceInfo | undefined => state.device,
    isMobile: (state: PageState): boolean =>
      state.device
        ? state.device.operatingSystem.includes("ios") || state.device.operatingSystem.includes("android") || window.screen.width <= 720
        : false,
    isNative: (state: PageState): boolean =>
      state.device ? state.device.platform.includes("ios") || state.device.platform.includes("android") : false,
  },
};
