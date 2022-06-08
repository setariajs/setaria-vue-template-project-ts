import { defineStore } from "pinia";
import { store } from "@setaria/setaria-ts";

import type { TestInfo } from "../../../types/store";

interface TestState {
  testInfo: Nullable<TestInfo>;
}
export const useTestStore = defineStore({
  id: "app-test",
  state: (): TestState => ({
    testInfo: null,
  }),
  getters: {
    getTestInfo(): Nullable<TestInfo> {
      return this.testInfo;
    },
  },
  actions: {
    setTestInfo(info: TestInfo | null) {
      this.testInfo = info;
    },
  },
});

// Need to be used outside the setup
export function useTestStoreWithOut() {
  return useTestStore(store);
}
