import { FC, Fragment, useState } from "react";
import { EVALUATIVE_WORDS_MAPPING } from "./constants/Mapping";

/**
 * What
 *
 * Why
 *
 * How
 */
export const EvalWordsUniversalNeedsTool: FC = () => {
  const [selectedEvaluativeWords, setSelectedEvaluativeWords] = useState<
    Set<string>
  >(new Set());

  const [feelingSearchTerm, setFeelingSearchTerm] = useState("");

  /**
   * Event handler for the user changing the form
   */
  const handleChangeForm = (e: React.ChangeEvent<HTMLFormElement>) => {
    // console.log("[handleChangeForm] event", e);
    if (selectedEvaluativeWords.has(e.target.name)) {
      setSelectedEvaluativeWords(
        (cur) => new Set([...cur].filter((item) => item !== e.target.name))
      );
    } else {
      setSelectedEvaluativeWords((cur) => new Set([...cur, e.target.name]));
    }
  };

  let commonUnmetNeedsCount = {};

  for (const evaluativeWord of selectedEvaluativeWords) {
    for (const need of EVALUATIVE_WORDS_MAPPING[
      evaluativeWord as keyof typeof EVALUATIVE_WORDS_MAPPING
    ].universalNeeds) {
      const needEntry = need.toLowerCase();
      if (commonUnmetNeedsCount[needEntry] === undefined) {
        commonUnmetNeedsCount[needEntry] = 1;
      } else {
        commonUnmetNeedsCount[needEntry] += 1;
      }
    }
  }

  const feelingButtonSet = new Set<string>();
  for (const evaluativeWord of Object.keys(EVALUATIVE_WORDS_MAPPING)) {
    for (const mistakenEmotion of EVALUATIVE_WORDS_MAPPING[
      evaluativeWord as keyof typeof EVALUATIVE_WORDS_MAPPING
    ].mistakenEmotions) {
      feelingButtonSet.add(mistakenEmotion.toLowerCase());
    }
  }

  /**
   *
   * @param e event fired when the user changes the search input
   */
  const handleChangeFeelingSearch = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFeelingSearchTerm(e.target.value);
  };

  /**
   * Event handler for the user clicking the clear feeling search button
   */
  const handleClickClearFeelingSearchButton = () => {
    setFeelingSearchTerm("");
  };

  /**
   * Event handler for the user clicking a "mistaken emotion" button.
   * @param text text to set the feeling search term to
   */
  const handleChangeFeelingSearchText = (text: string) => {
    setFeelingSearchTerm(text);
  };

  /**
   * Event handler for the user clicking the reset button
   */
  const handleClickReset = () => {
    setSelectedEvaluativeWords(new Set());
    setFeelingSearchTerm("");
  };

  return (
    <div>
      <h2>Emotions and Needs Tool</h2>
      <div style={{ marginBottom: 16 }}>
        <button onClick={handleClickReset}>reset</button>
      </div>
      <h3>Mistaken Feeling Search</h3>
      <div style={{ marginBottom: 16 }}>
        <input value={feelingSearchTerm} onChange={handleChangeFeelingSearch} />
        <button onClick={handleClickClearFeelingSearchButton}>clear</button>
      </div>
      <div style={{ marginBottom: 16 }}>
        {[...feelingButtonSet].map((item) => (
          <button
            key={item + "-button"}
            onClick={() => handleChangeFeelingSearchText(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <h3>Evaluative Words</h3>
      <form onChange={handleChangeForm} style={{ marginBottom: 16 }}>
        <ul style={{ listStyleType: "none" }}>
          {Object.keys(EVALUATIVE_WORDS_MAPPING)
            .filter((item) =>
              EVALUATIVE_WORDS_MAPPING[
                item as keyof typeof EVALUATIVE_WORDS_MAPPING
              ].mistakenEmotions.some((item) =>
                item.toLowerCase().includes(feelingSearchTerm.toLowerCase())
              )
            )
            .map((item) => (
              <li key={item + "-label"}>
                <label>
                  <input
                    type="checkbox"
                    id={item + "-checkbox"}
                    name={item}
                    value={item}
                    checked={selectedEvaluativeWords.has(item)}
                    key={item + "-input"}
                  />

                  {item}
                </label>
              </li>
            ))}
        </ul>
      </form>

      {selectedEvaluativeWords.size > 0 ? (
        <div style={{ marginTop: 16 }}>
          <h3>Chosen Evaluative Words</h3>
          <ul>
            {[...selectedEvaluativeWords].map((item) => (
              <li key={item + "-list-item"}>
                <b>{item}</b>:{" "}
                {EVALUATIVE_WORDS_MAPPING[
                  item as keyof typeof EVALUATIVE_WORDS_MAPPING
                ].universalNeeds.join(", ")}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {/* Mapping of words to unmet needs */}
      {selectedEvaluativeWords.size > 0 ? (
        <div style={{ marginTop: 16 }}>
          <h3>Common Unmet Needs</h3>
          <ul>
            {Object.keys(commonUnmetNeedsCount)
              .sort(
                (a, b) => commonUnmetNeedsCount[b] - commonUnmetNeedsCount[a]
              )
              // .slice(0, 10)
              .map((item) => (
                <li key={item + "-list-item"}>
                  <b>{item}</b>: {commonUnmetNeedsCount[item]}
                </li>
              ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};
