import { Panel } from "../enums/Panel.enum";

import { ActionPanels } from "../types/ActionPanels.type";
import { ActivePanels } from "../types/ActivePanels.type";

export const initialPanels: ActivePanels = {
  markerId: "",
  aboutPanel: false,
  filterPanel: false,
  makerPanel: false,
};

export const panelsReducer = (
  panels: ActivePanels,
  action: ActionPanels,
): ActivePanels => {
  const { markerId, panel } = action;

  switch (panel) {
    case Panel.ABOUT: {
      return {
        markerId: "",
        aboutPanel: !panels.aboutPanel,
        filterPanel: false,
        makerPanel: false,
      };
    }
    case Panel.FILTERS: {
      return {
        markerId: "",
        aboutPanel: false,
        filterPanel: !panels.filterPanel,
        makerPanel: false,
      };
    }
    case Panel.MARKER: {
      return {
        markerId: markerId,
        aboutPanel: false,
        filterPanel: false,
        makerPanel: markerId === panels.markerId ? !panels.makerPanel : true,
      };
    }
    default: {
      return initialPanels;
    }
  }
};
