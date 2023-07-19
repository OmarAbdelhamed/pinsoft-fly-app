import React, { useState, useEffect } from "react";
import FlyListScreen from "./FlyListScreen";
import axios from "axios";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { getPorts } from "../app/flyDataSlice";

const HomeScreen = () => {
  const [ticketType, setTicketType] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [selectedOptionFrom, setSelectedOptionFrom] = useState();
  const [selectedOptionTo, setSelectedOptionTo] = useState();

  const dispatch = useDispatch();
  const portList = useSelector((state) => state.data.ports);

  useEffect(() => {
    dispatch(getPorts());
  }, []);

  const ports = portList.map((p) => ({
    label: p.explanation,
    value: p.code,
  }));
  console.log(ports);

  function handleSelectFrom(data) {
    setSelectedOptionFrom(data);
  }

  function handleSelectTo(data) {
    setSelectedOptionTo(data);
  }

  const filteredOptionsTo = ports.filter(
    (p) => p.value !== selectedOptionFrom?.value
  );
  const filteredOptionsFrom = ports.filter(
    (p) => p.value !== selectedOptionTo?.value
  );

  console.log("filteredfrom", filteredOptionsTo);

  const ticketTypeHandler = (e) => {
    setTicketType(e.target.value);
  };

  return (
    <div className="px-[200px]">
      <h5 className=" text-center text-2xl pt-2 "> FLYBilet</h5>
      <h1 className=" text-center text-4xl p-4">
        {" "}
        Fly to the place of your dreams{" "}
      </h1>
      <div className=" bg-[#d9d9d9] rounded">
        <h2 className="text-lg font-bold mb-4  text-center ">
          Search for Flights
        </h2>
        <form className="flex flex-row gap-4 max-w-auto mb-4 ">
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
          />

          <label htmlFor="to">To:</label>
          <Select
            options={filteredOptionsTo}
            placeholder="select your destination"
            value={selectedOptionTo}
            onChange={handleSelectTo}
            isSearchable={true}
            className="min-w-[150px]"
          />

          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" required className="input" />

          {ticketType === "round-trip" && (
            <>
              <label htmlFor="returnDate">Return Date:</label>
              <input
                type="date"
                id="returnDate"
                name="returnDate"
                required
                className="border border-gray-300 rounded-md p-2"
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
            className="input"
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
          <FlyListScreen from={selectedOptionFrom} to={selectedOptionTo} />
        )}
        <footer className="bg-gray-100 p-2 text-center">
          <p>&copy; 2023 flyBilet Website. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default HomeScreen;
