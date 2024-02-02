import { Panel } from "../enums/Panel.enum";
import { ActivePanels } from "../types/ActivePanels.type";

export const initialPanels: ActivePanels = {
  aboutPanel: true,
  filterPanel: false,
  makerPanel: false,
};

export const panelsReducer = (
  panels: ActivePanels,
  panel: Panel | null,
): ActivePanels => {
  switch (panel) {
    case Panel.ABOUT: {
      return {
        aboutPanel: !panels.aboutPanel,
        filterPanel: false,
        makerPanel: false,
      };
    }
    case Panel.FILTERS: {
      return {
        aboutPanel: false,
        filterPanel: !panels.filterPanel,
        makerPanel: false,
      };
    }
    case Panel.MARKER: {
      return {
        aboutPanel: false,
        filterPanel: false,
        makerPanel: !panels.makerPanel,
      };
    }
    default: {
      return {
        aboutPanel: false,
        filterPanel: false,
        makerPanel: false,
      };
    }
  }
};
