import React, { useState, useEffect, useCallback, useReducer } from "react";
import Search from "../search/search";
import BootcampForm from "../BootcampsForm/BootcampForm";
import BootcampList from "../bootcampList/bootcampList";
import ErrorModal from "../errorModal/errorModal";

// !reducerii nu trebuie pusi in componenta

const bootcampsReducer = (currentBootcamps, action) => {
  switch (action.type) {
    case "SET":
      return action.bootcamps;
    case "ADD":
      return [...currentBootcamps, action.bootcamp];
    case "DELETE":
      return currentBootcamps.filter((bootcamp) => bootcamp.id !== action.id);
    default:
      throw new Error("Should not happen");
    // return currentBootcamps;
  }
};

const httpReducer = (currentHttpState, action) => {
  switch (action.type) {
    case "SEND":
      return {
        isLoading: true,
        error: null,
      };
    case "RESPONSE":
      return {
        ...currentHttpState,
        isLoading: false,
      };
    case "ERROR":
      return {
        isLoading: false,
        error: action.errorMessage,
      };
    case "CLEAR":
      return {
        ...currentHttpState,
        error: null,
      };
    default:
      throw new Error("http error");
  }
};

const BootcampRouteComponent = () => {
  // const [bootcamps, setBootcamps] = useState([]);
  const [bootcamps, dispatchu] = useReducer(bootcampsReducer, []);
  const [httpState, dispatchHttp] = useReducer(httpReducer, {
    isLoading: false,
    error: null,
  });
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(false);
  // const [error, setError] = useState(null);
  //asta ca sa fie consistenta cu metoda de clear

  // useEffect(() => {
  //   // console.log(bootcamps, "bootcamps state");
  //   fetch("https://bootcamp-a8786.firebaseio.com/bootcamps.json")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const bootcamps = [];
  //       for (const key in data) {
  //         bootcamps.push({
  //           id: key,
  //           name: data[key].name,
  //           description: data[key].description,
  //           website: data[key].website,
  //           phone: data[key].phone,
  //           email: data[key].email,
  //         });
  //       }
  //       //   console.log(bootcamps, "bootcamps");
  //       // fara al doilea parametru([])urla browserul ca intra intr-un state infinit
  //       // la fel urla si daca le punem direct in componenta (fara sa folosim use State)
  //       setBootcamps(bootcamps);
  //     });
  // }, []);
  //arrayul gol de mai sus se comporta la fel ca si componentDidMount

  const addBootcamp = (bootcamp) => {
    // setIsLoading(true);
    dispatchHttp({ type: "SEND" });
    fetch("https://bootcamp-a8786.firebaseio.com/bootcamps.json", {
      method: "POST",
      body: JSON.stringify(bootcamp),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        // setIsLoading(false);
        dispatchHttp({ type: "RESPONSE" });
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        // setBootcamps((bootcamps) => [
        //   ...bootcamps,
        //   { ...bootcamp, id: data.name },
        // ]);
        dispatchu({ type: "ADD", bootcamp: { id: data.name } });
      });
  };
  // const onSearchHandler = (filteredBootcamps) => {
  //   setBootcamps(filteredBootcamps);
  // };
  const onSearchHandler = useCallback((filteredBootcamps) => {
    // setBootcamps(filteredBootcamps);
    dispatchu({ type: "SET", bootcamps: filteredBootcamps });
  }, []);

  const onRemoveBootcamp = (id) => {
    // setIsLoading(true);
    dispatchHttp({ type: "SEND" });
    fetch(`https://bootcamp-a8786.firebaseio.com/bootcamps/${id}.json`, {
      method: "DELETE",
    })
      .then((response) => {
        // setIsLoading(false);
        dispatchHttp({ type: "RESPONSE" });
        console.log(response, "delete response");
        // setBootcamps((prevBootcamp) =>
        //   prevBootcamp.filter((bootcamp) => bootcamp.id !== id)
        // );
        dispatchu({ type: "DELETE", id });
      })
      .catch((error) => {
        // setIsLoading(false);
        console.log(error, "eroare");
        // setError("Something went wrong");

        //Dispatchu asta face si setIsLoadingFalse si setError
        dispatchHttp({
          type: "ERROR",
          errorMEssage: "Something is wrong with delete",
        });
      });
  };

  const clearError = () => {
    // setError(null);
    dispatchHttp({ type: "CLEAR" });
  };
  return (
    <div className="bootcamps-parent">
      {/* daca sunt in error vreau sa afisez modalul */}
      {/* !!"eroare" => daca state-ul initial e false, asta va returna true */}
      {/* {error && <ErrorModal onClose={clearError}>{error}</ErrorModal>} */}
      {httpState.error && (
        <ErrorModal onClose={clearError}>{httpState.error}</ErrorModal>
      )}

      <BootcampForm loading={httpState.isLoading} onAddBootcamp={addBootcamp} />
      <section>
        <Search onSearchBootcampLoaded={onSearchHandler} />
        <BootcampList
          bootcamps={bootcamps}
          onRemoveBootcamp={onRemoveBootcamp}
        />
      </section>
    </div>
  );
};

export default BootcampRouteComponent;
