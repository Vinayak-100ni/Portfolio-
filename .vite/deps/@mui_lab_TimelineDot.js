import "./chunk-MNXATF5D.js";
import {
  clsx_default
} from "./chunk-FHXOWIRB.js";
import "./chunk-POS3CKTV.js";
import {
  capitalize_default
} from "./chunk-SLIK4ZAH.js";
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
import "./chunk-OTY6O57J.js";
import {
  require_react
} from "./chunk-2PA4WPI3.js";
import {
  __toESM
} from "./chunk-ROME4SDB.js";

// node_modules/@mui/lab/TimelineDot/TimelineDot.js
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// node_modules/@mui/lab/TimelineDot/timelineDotClasses.js
function getTimelineDotUtilityClass(slot) {
  return generateUtilityClass("MuiTimelineDot", slot);
}
var timelineDotClasses = generateUtilityClasses("MuiTimelineDot", ["root", "filled", "outlined", "filledGrey", "outlinedGrey", "filledPrimary", "outlinedPrimary", "filledSecondary", "outlinedSecondary"]);
var timelineDotClasses_default = timelineDotClasses;

// node_modules/@mui/lab/TimelineDot/TimelineDot.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var _excluded = ["className", "color", "variant"];
var useUtilityClasses = (ownerState) => {
  const {
    color,
    variant,
    classes
  } = ownerState;
  const slots = {
    root: ["root", variant, color !== "inherit" && `${variant}${capitalize_default(color)}`]
  };
  return composeClasses(slots, getTimelineDotUtilityClass, classes);
};
var TimelineDotRoot = styled_default("span", {
  name: "MuiTimelineDot",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.color !== "inherit" && `${ownerState.variant}${capitalize_default(ownerState.color)}`], styles[ownerState.variant]];
  }
})(({
  ownerState,
  theme
}) => _extends({
  display: "flex",
  alignSelf: "baseline",
  borderStyle: "solid",
  borderWidth: 2,
  padding: 4,
  borderRadius: "50%",
  boxShadow: (theme.vars || theme).shadows[1],
  margin: "11.5px 0"
}, ownerState.variant === "filled" && _extends({
  borderColor: "transparent"
}, ownerState.color !== "inherit" && _extends({}, ownerState.color === "grey" ? {
  color: (theme.vars || theme).palette.grey[50],
  backgroundColor: (theme.vars || theme).palette.grey[400]
} : {
  color: (theme.vars || theme).palette[ownerState.color].contrastText,
  backgroundColor: (theme.vars || theme).palette[ownerState.color].main
})), ownerState.variant === "outlined" && _extends({
  boxShadow: "none",
  backgroundColor: "transparent"
}, ownerState.color !== "inherit" && _extends({}, ownerState.color === "grey" ? {
  borderColor: (theme.vars || theme).palette.grey[400]
} : {
  borderColor: (theme.vars || theme).palette[ownerState.color].main
}))));
var TimelineDot = React.forwardRef(function TimelineDot2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTimelineDot"
  });
  const {
    className,
    color = "grey",
    variant = "filled"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const ownerState = _extends({}, props, {
    color,
    variant
  });
  const classes = useUtilityClasses(ownerState);
  return (0, import_jsx_runtime.jsx)(TimelineDotRoot, _extends({
    className: clsx_default(classes.root, className),
    ownerState,
    ref
  }, other));
});
true ? TimelineDot.propTypes = {
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
   * The dot can have a different colors.
   * @default 'grey'
   */
  color: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["error", "grey", "info", "inherit", "primary", "secondary", "success", "warning"]), import_prop_types.default.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object]),
  /**
   * The dot can appear filled or outlined.
   * @default 'filled'
   */
  variant: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["filled", "outlined"]), import_prop_types.default.string])
} : void 0;
var TimelineDot_default = TimelineDot;
export {
  TimelineDot_default as default,
  getTimelineDotUtilityClass,
  timelineDotClasses_default as timelineDotClasses
};
//# sourceMappingURL=@mui_lab_TimelineDot.js.map
