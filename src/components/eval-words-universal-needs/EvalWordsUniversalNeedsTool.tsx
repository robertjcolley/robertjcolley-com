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
  /**
   * Event handler for the user changing the form
   */
  const handleChangeForm = (e: React.ChangeEvent<HTMLFormElement>) => {
    // console.log("[handleChangeForm] event", e);
    setSelectedEvaluativeWords((cur) => new Set([...cur, e.target.name]));
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

  return (
    <div>
      <h2>Evaluative Words</h2>
      <form onChange={handleChangeForm}>
        {Object.keys(EVALUATIVE_WORDS_MAPPING).map((item) => (
          <label key={item + "-label"}>
            <input
              type="checkbox"
              id={item + "-checkbox"}
              name={item}
              value={item}
              key={item + "-input"}
            />

            {item}
          </label>
        ))}
      </form>

      {selectedEvaluativeWords.size > 0 ? (
        <div style={{ marginTop: 16 }}>
          <h2>Chosen Evaluative Words</h2>
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
          <h2>Common Unmet Needs</h2>
          <ul>
            {Object.keys(commonUnmetNeedsCount)
              .sort(
                (a, b) => commonUnmetNeedsCount[b] - commonUnmetNeedsCount[a]
              )
              .slice(0, 10)
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
