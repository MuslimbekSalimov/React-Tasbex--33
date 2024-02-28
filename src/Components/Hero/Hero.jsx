// import { count } from "console";
import "./Hero.scss";
import React from "react";
// import Languages from "../Localization/Loacalization";

// function Hero() {

//   const Increment = React.memo(({increment}) => {

//     console.log("render");
//     return (
//       <div>
//         <button onClick={() => increment(1)}>Count</button>
//       </div>
//     );
//   });

//   return (
//     <>
//       <section className="hero">
//         <div className="container">


//             {/* <div>
//                <button onClick={() => increment(1)}>Count</button>
//             </div> */}
//         </div>
//       </section>
//     </>
//   );
// }
// const handle = () => {
//   setState(countss => (countss === 33 ? 0 : countss + 1))
// }

  const Context = (state, action) => {
    switch (action.type) {
      case "INCREMENTS":
        return { count: state.count === 33 ? 0 : state.count + 1 };
      case "Plus":
        return { count: state.count + 1 };
      case "DECREMENTS":
        return { count: state.count - 1 };
      default:
        return state;
    }
  };


  const Reducer = () => {
    const [state, setState] = React.useReducer(Context, { count: 0 });

    return (
      <div>
        <h1>{state.count}</h1>

        <button onClick={() => setState({ type: "INCREMENTS" })}>
          Count =  - 33
        </button>
        <button onClick={() => setState({ type: "Plus" })}>
          Count +++++
        </button>
        {/* <button onClick={() => setState({ type: "DECREMENTS" })}>
          Count - 1
        </button> */}
      </div>
    );
  };

export default Reducer;
