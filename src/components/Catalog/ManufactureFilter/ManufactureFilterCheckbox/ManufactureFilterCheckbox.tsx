import s from "./ManufactureFilter.module.css";

const ManufactureFilterCheckbox = (props: {
  manufacture: string;

  selectManufactureFilter: (manufacture: string) => void;
}) => {

  return (
    <div>
      <div className={s.checkbox__wrapper}>
        <input
          className={s.chekbox}
          onClick={() => {
            props.selectManufactureFilter(props.manufacture);
          }}
          type="checkbox"
          name="a"
          value=""
        />
        <div className={s.checkbox__name}>{props.manufacture}</div>
        <div className={s.remainder}>(56)</div>
      </div>
    </div>
  );
};

export default ManufactureFilterCheckbox;
