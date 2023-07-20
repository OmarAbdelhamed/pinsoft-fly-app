import React, { useState, useEffect } from "react";
import Select from "react-select";
import FlyListScreen from "../../screens/FlyListScreen";
import { useDispatch, useSelector } from "react-redux";
import { getPorts } from "../../app/flyDataSlice";

const HomeForm = () => {
  const [ticketType, setTicketType] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [selectedOptionFrom, setSelectedOptionFrom] = useState();
  const [selectedOptionTo, setSelectedOptionTo] = useState();
  const [selectedDate, setSelectedDate] = useState("");

  const dispatch = useDispatch();
  const portList = useSelector((state) => state.data.ports);

  useEffect(() => {
    dispatch(getPorts());
  }, []);

  const ports = portList.map((p) => ({
    label: p.explanation,
    value: p.code,
  }));

  const ticketTypeHandler = (e) => {
    setTicketType(e.target.value);
  };

  function handleSelectFrom(data) {
    setSelectedOptionFrom(data);
  }

  function handleSelectTo(data) {
    setSelectedOptionTo(data);
  }
  function handleSelectedDate(e) {
    setSelectedDate(e.target.value);
  }

  const filteredOptionsTo = ports.filter(
    (p) => p.value !== selectedOptionFrom?.value
  );
  const filteredOptionsFrom = ports.filter(
    (p) => p.value !== selectedOptionTo?.value
  );

  return (
    <>
      <form className="flex flex-col gap-4 sm:flex-row sm:gap-6 max-w-auto mb-4  ">
        <label htmlFor="trip">Trip Type:</label>
        <select
          id="trip"
          name="trip"
          required
          onChange={ticketTypeHandler}
          className="border border-gray-300 rounded-md p-2"
        >
          <option value="one-way">One-way</option>
          <option value="round-trip">Round Trip</option>
        </select>

        <label htmlFor="from">From:</label>
        <Select
          options={filteredOptionsFrom}
          placeholder="select your destination"
          value={selectedOptionFrom}
          onChange={handleSelectFrom}
          isSearchable={true}
          className="border border-gray-300 rounded-md p-2"
        />

        <label htmlFor="to">To:</label>
        <Select
          options={filteredOptionsTo}
          placeholder="select your destination"
          value={selectedOptionTo}
          onChange={handleSelectTo}
          isSearchable={true}
          className="border border-gray-300 rounded-md p-2"
        />

        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          onChange={(event) => {
            handleSelectedDate(event);
          }}
          required
          className="border border-gray-300 rounded-md p-2"
        />

        {ticketType === "round-trip" && (
          <>
            <label htmlFor="returnDate">Return Date:</label>
            <input
              type="date"
              id="returnDate"
              name="returnDate"
              required
              className="border border-gray-300 h-[41px] rounded-md p-2"
            />
          </>
        )}

        <label htmlFor="passengers">Number of Passengers:</label>
        <input
          type="number"
          id="passengers"
          name="passengers"
          min="1"
          required
          className="border border-gray-300 rounded-md p-2"
        />

        <button
          type="button"
          className="bg-gray-900 text-white p-2 rounded-md"
          onClick={() => setIsSearch(true)}
        >
          Search
        </button>
      </form>
      {isSearch && (
        <FlyListScreen
          from={selectedOptionFrom}
          to={selectedOptionTo}
          Date={selectedDate}
        />
      )}
    </>
  );
};

export default HomeForm;
