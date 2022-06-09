import "./Button.scss";
import classnames from "classnames";

export interface Props {
  /**
   * Is this a Icon present in the button
   */
  icon?: JSX.Element;
  /**
   * A label to show in the button
   */
  label?: string;
  /**
   * This is the class of button, the color
   */
  type?: string;
  /**
   * Pass an aditional class
   */
  className?: string;
  /**
   * How large should the button be?
   */
  size?: "xsmall" | "small" | "medium" | "large" | "xlarge";
  fullWidth?: boolean;
}

const Button: React.FC<Props> = ({
  icon,
  type = "primary",
  className = "",
  size = "small",
  fullWidth = false,
  label = "button",
}) => {
  const typeClass = `Button_${type}`;
  const sizeClass = `Button_${size}`;
  const fullwidthClass = fullWidth ? `Button_isFullWidth` : "";
  return (
    <button
      className={classnames(
        "Button",
        className,
        typeClass,
        sizeClass,
        fullwidthClass
      )}
    >
      {icon ? icon : null}
      <span>{label}</span>
    </button>
  );
};

export default Button;
