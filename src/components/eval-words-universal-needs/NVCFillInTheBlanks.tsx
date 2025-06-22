import { FC, useState } from "react";

/**
 * State of the component
 */
type NvcFillInTheBlanksState = {
  /**
   * Observation input field value
   */
  observation: string;
  /**
   * Evaluative word input field value
   */
  evaluativeWord: string;
  /**
   * Universal need input field value
   */
  universalNeed: string;
  /**
   * Request input field value
   */
  request: string;
};

/**
 * Component that displays the NVC prompt with text inputs
 * @returns React FC
 */
export const NvcFillInTheBlanks: FC = () => {
  const [state, setState] = useState<NvcFillInTheBlanksState>({
    observation: "",
    evaluativeWord: "",
    universalNeed: "",
    request: "",
  });

  /**
   * Event handler for text input changing
   * @param e change event for input changing
   * @param input name of the input changing
   */
  const handleChangeValue = (
    e: React.ChangeEvent<HTMLInputElement>,
    input: keyof NvcFillInTheBlanksState
  ) => {
    setState((cur) => ({
      ...cur,
      [input]: e.target.value,
    }));
  };

  /**
   * Event handler for the user clicking the reset button.
   */
  const handleClickReset = () => {
    setState({
      observation: "",
      evaluativeWord: "",
      universalNeed: "",
      request: "",
    });
  };

  return (
    <div>
      <p>
        When{" "}
        <input
          placeholder="observation"
          value={state.observation}
          onChange={(e) => handleChangeValue(e, "observation")}
        />{" "}
        ,
      </p>
      <p>
        I feel{" "}
        <input
          placeholder="feeling (evaluative word)"
          value={state.evaluativeWord}
          onChange={(e) => handleChangeValue(e, "evaluativeWord")}
        />{" "}
        ,
      </p>
      <p>
        because I'm needing some{" "}
        <input
          placeholder="universal need"
          value={state.universalNeed}
          onChange={(e) => handleChangeValue(e, "universalNeed")}
        />{" "}
        .
      </p>
      <p>
        Can you{" "}
        <input
          placeholder="request"
          value={state.request}
          onChange={(e) => handleChangeValue(e, "request")}
        />{" "}
        ?
      </p>
      <button style={{ marginBottom: 16 }} onClick={handleClickReset}>
        reset
      </button>
    </div>
  );
};
