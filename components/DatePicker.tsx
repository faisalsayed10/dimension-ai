import DatePickerLib from "react-datepicker";

interface Props {
  startDate: Date | null;
  setStartDate: React.Dispatch<React.SetStateAction<Date | null>>;
}

const DatePicker: React.FC<Props> = ({ startDate, setStartDate }) => {
  return (
    <div className="absolute">
      <DatePickerLib
        customInput={
          <input contentEditable={false} className="w-[inherit] h-[inherit] left-0 focus:outline-none opacity-0" />
        }
        minDate={new Date()}
        selected={startDate}
        onChange={(date: any) => setStartDate(date)}
      />
    </div>
  );
};

export default DatePicker;
