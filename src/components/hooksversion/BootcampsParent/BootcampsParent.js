import React, { useState, useEffect, useCallback } from "react";
import Search from "../search/search";
import BootcampForm from "../BootcampsForm/BootcampForm";
import BootcampList from "../bootcampList/bootcampList";

const BootcampRouteComponent = () => {
  const [bootcamps, setBootcamps] = useState([]);

  useEffect(() => {
    // console.log(bootcamps, "bootcamps state");
    fetch("https://bootcamp-a8786.firebaseio.com/bootcamps.json")
      .then((response) => response.json())
      .then((data) => {
        const bootcamps = [];
        for (const key in data) {
          bootcamps.push({
            id: key,
            name: data[key].name,
            description: data[key].description,
            website: data[key].website,
            phone: data[key].phone,
            email: data[key].email,
          });
        }
        //   console.log(bootcamps, "bootcamps");
        // fara al doilea parametru([])urla browserul ca intra intr-un state infinit
        // la fel urla si daca le punem direct in componenta (fara sa folosim use State)
        setBootcamps(bootcamps);
      });
  }, []);
  //arrayul gol de mai sus se comporta la fel ca si componentDidMount

  const addBootcamp = (bootcamp) => {
    fetch("https://bootcamp-a8786.firebaseio.com/bootcamps.json", {
      method: "POST",
      body: JSON.stringify(bootcamp),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setBootcamps((bootcamps) => [
          ...bootcamps,
          { ...bootcamp, id: data.name },
        ]);
      });
  };
  // const onSearchHandler = (filteredBootcamps) => {
  //   setBootcamps(filteredBootcamps);
  // };
  const onSearchHandler = useCallback((filteredBootcamps) => {
    setBootcamps(filteredBootcamps);
  }, []);
  return (
    <div className="bootcamps-parent">
      <BootcampForm onAddBootcamp={addBootcamp} />
      <section>
        <Search onSearchBootcampLoaded={onSearchHandler} />
        <BootcampList bootcamps={bootcamps} />
      </section>
    </div>
  );
};

export default BootcampRouteComponent;
