import { useState, FC } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays, subDays, isWeekend, format } from "date-fns";

const DateRangePicker: FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
    if (date && endDate && date > endDate) {
      setEndDate(null);
    }
  };

  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
  };

  const isWeekday = (date: Date) => {
    return !isWeekend(date);
  };

  const formattedStartDate = startDate ? format(startDate, "dd/MM/yyyy") : "";
  const formattedEndDate = endDate ? format(endDate, "dd/MM/yyyy") : "";

  return (
    <div>
      <h2>Date Range Picker</h2>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ marginRight: "10px" }}>
          <label>Start Date: </label>
          <DatePicker
            selected={startDate || undefined}
            onChange={handleStartDateChange}
            selectsStart
            startDate={startDate || undefined}
            endDate={endDate || undefined}
            filterDate={isWeekday} 
            minDate={subDays(new Date(), 7)} 
            maxDate={addDays(new Date(), 30)} 
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div>
          <label>End Date: </label>
          <DatePicker
            selected={endDate || undefined}
            onChange={handleEndDateChange}
            selectsEnd
            startDate={startDate || undefined}
            endDate={endDate || undefined}
            filterDate={isWeekday} 
            minDate={startDate || new Date()} 
            maxDate={addDays(new Date(), 30)} 
            dateFormat="dd/MM/yyyy"
            disabled={!startDate} 
          />
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <h3>Selected Date Range</h3>
        <p>Start Date: {formattedStartDate}</p>
        <p>End Date: {formattedEndDate}</p>
      </div>
    </div>
  );
};

export default DateRangePicker;
