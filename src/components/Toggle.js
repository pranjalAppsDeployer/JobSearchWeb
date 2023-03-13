import "../css/toggle.css";

export const Toggle = ({ label = "", isToggled, handleToggleClick }) => {
  return (
    <label>
      <input
        className="toggle-input"
        type="checkbox"
        defaultChecked={isToggled}
        onClick={handleToggleClick}
      />
      <span />
      <strong>{label}</strong>
    </label>
  );
};
