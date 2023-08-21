import {
  TimelineContext_default,
  convertTimelinePositionToClass
} from "./chunk-GTPJDXIH.js";
import {
  clsx_default
} from "./chunk-FHXOWIRB.js";
import {
  Typography_default
} from "./chunk-L4XTSOOK.js";
import {
  _extends,
  _objectWithoutPropertiesLoose,
  composeClasses,
  generateUtilityClass,
  generateUtilityClasses,
  require_jsx_runtime,
  require_prop_types,
  styled_default,
  useThemeProps2 as useThemeProps
} from "./chunk-EHFNACBP.js";
import {
  require_react
} from "./chunk-2PA4WPI3.js";
import {
  __toESM
} from "./chunk-ROME4SDB.js";

// node_modules/@mui/lab/TimelineOppositeContent/TimelineOppositeContent.js
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// node_modules/@mui/lab/TimelineOppositeContent/timelineOppositeContentClasses.js
function getTimelineOppositeContentUtilityClass(slot) {
  return generateUtilityClass("MuiTimelineOppositeContent", slot);
}
var timelineOppositeContentClasses = generateUtilityClasses("MuiTimelineOppositeContent", ["root", "positionLeft", "positionRight", "positionAlternate", "positionAlternateReverse"]);
var timelineOppositeContentClasses_default = timelineOppositeContentClasses;

// node_modules/@mui/lab/TimelineOppositeContent/TimelineOppositeContent.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var _excluded = ["className"];
var useUtilityClasses = (ownerState) => {
  const {
    position,
    classes
  } = ownerState;
  const slots = {
    root: ["root", convertTimelinePositionToClass(position)]
  };
  return composeClasses(slots, getTimelineOppositeContentUtilityClass, classes);
};
var TimelineOppositeContentRoot = styled_default(Typography_default, {
  name: "MuiTimelineOppositeContent",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[convertTimelinePositionToClass(ownerState.position)]];
  }
})(({
  ownerState
}) => _extends({
  padding: "6px 16px",
  marginRight: "auto",
  textAlign: "right",
  flex: 1
}, ownerState.position === "left" && {
  textAlign: "left"
}));
var TimelineOppositeContent = React.forwardRef(function TimelineOppositeContent2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTimelineOppositeContent"
  });
  const {
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const {
    position: positionContext
  } = React.useContext(TimelineContext_default);
  const ownerState = _extends({}, props, {
    position: positionContext || "left"
  });
  const classes = useUtilityClasses(ownerState);
  return (0, import_jsx_runtime.jsx)(TimelineOppositeContentRoot, _extends({
    component: "div",
    className: clsx_default(classes.root, className),
    ownerState,
    ref
  }, other));
});
true ? TimelineOppositeContent.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types.default.object,
  /**
   * @ignore
   */
  className: import_prop_types.default.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object])
} : void 0;
TimelineOppositeContent.muiName = "TimelineOppositeContent";
var TimelineOppositeContent_default = TimelineOppositeContent;

export {
  getTimelineOppositeContentUtilityClass,
  timelineOppositeContentClasses_default,
  TimelineOppositeContent_default
};
//# sourceMappingURL=chunk-CCGW4W6E.js.map
