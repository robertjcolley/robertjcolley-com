export const EVALUATIVE_WORDS_MAPPING = {
  Abandoned: {
    mistakenEmotions: "Terrified, hurt, bewildered, sad, frightened, lonely"
      .split(",")
      .map((item) => item.trim()),
    universalNeeds: "Nurturing, connection, belonging, support, caring"
      .split(",")
      .map((item) => item.trim()),
  },

  Abused: {
    mistakenEmotions: "Angry, frustrated, frightened"
      .split(",")
      .map((item) => item.trim()),
    universalNeeds:
      "Caring, nurturing, support, emotional safety, physical safety, consideration, for livings things to flourish"
        .split(",")
        .map((item) => item.trim()),
  },

  "(Un) accepted": {
    mistakenEmotions: "Scared, lonely, hurt, anxious"
      .split(",")
      .map((item) => item.trim()),
    universalNeeds:
      "Inclusion, connection, community, belonging, contribution, respect"
        .split(",")
        .map((item) => item.trim()),
  },

  Attacked: {
    mistakenEmotions: "Scared, angry, defiant, hostile"
      .split(",")
      .map((item) => item.trim()),
    universalNeeds: "Safety, consideration"
      .split(",")
      .map((item) => item.trim()),
  },

  Belittled: {
    mistakenEmotions: "Angry, frustrated, tense, distressed"
      .split(",")
      .map((item) => item.trim()),
    universalNeeds:
      "Respect, autonomy, seen for true self, acknowledgement, appreciation"
        .split(",")
        .map((item) => item.trim()),
  },

  Betrayed: {
    mistakenEmotions: "Angry, hurt, disappointed, enraged"
      .split(",")
      .map((item) => item.trim()),
    universalNeeds: "Trust, dependability, honesty, honor, commitment, clarity"
      .split(",")
      .map((item) => item.trim()),
  },

  Blamed: {
    mistakenEmotions:
      "Angry, scared, confused, antagonized, hostile, bewildered, hurt"
        .split(",")
        .map((item) => item.trim()),
    universalNeeds: "Accountability, causality, fairness, justice"
      .split(",")
      .map((item) => item.trim()),
  },

  Bullied: {
    mistakenEmotions: "Angry, scared, pressured"
      .split(",")
      .map((item) => item.trim()),
    universalNeeds: "Autonomy, choice, safety, consideration"
      .split(",")
      .map((item) => item.trim()),
  },

  "Caged/boxed in": {
    mistakenEmotions: "Angry, thwarted, scared, anxious"
      .split(",")
      .map((item) => item.trim()),
    universalNeeds: "Autonomy, choice, freedom"
      .split(",")
      .map((item) => item.trim()),
  },

  Cheated: {
    mistakenEmotions: "Resentful, hurt, angry"
      .split(",")
      .map((item) => item.trim()),
    universalNeeds: "Honesty, fairness, justice, trust, reliability"
      .split(",")
      .map((item) => item.trim()),
  },

  Coerced: {
    mistakenEmotions: "Angry, frustrated, frightened, thwarted, scared"
      .split(",")
      .map((item) => item.trim()),
    universalNeeds: "Autonomy, choice, freedom"
      .split(",")
      .map((item) => item.trim()),
  },

  Cornered: {
    mistakenEmotions: "Angry, scared, anxious, thwarted"
      .split(",")
      .map((item) => item.trim()),
    universalNeeds: "Autonomy, freedom".split(",").map((item) => item.trim()),
  },

  Criticized: {
    mistakenEmotions:
      "In pain, scared, anxious, frustrated, humiliated, angry, embarrassed"
        .split(",")
        .map((item) => item.trim()),
    universalNeeds:
      "Understanding, acknowledgement, recognition, accountability, respectful communication"
        .split(",")
        .map((item) => item.trim()),
  },

  "Discounted/diminished": {
    mistakenEmotions: "Hurt, angry, embarrassed, frustrated"
      .split(",")
      .map((item) => item.trim()),
    universalNeeds: "Acknowledgement, inclusion, recognition, respect"
      .split(",")
      .map((item) => item.trim()),
  },

  Disliked: {
    mistakenEmotions: "Sad, lonely, hurt".split(",").map((item) => item.trim()),
    universalNeeds:
      "Connection, appreciation, understanding, acknowledgement, friendship, inclusion"
        .split(",")
        .map((item) => item.trim()),
  },

  Distrusted: {
    mistakenEmotions: "Sad, frustrated".split(",").map((item) => item.trim()),
    universalNeeds: "Trust, honesty".split(",").map((item) => item.trim()),
  },

  "Dumped on": {
    mistakenEmotions: "Angry, overwhelmed"
      .split(",")
      .map((item) => item.trim()),
    universalNeeds: "Respect, consideration"
      .split(",")
      .map((item) => item.trim()),
  },

  Harassed: {
    mistakenEmotions: "Angry, frustrated, pressured, frightened"
      .split(",")
      .map((item) => item.trim()),
    universalNeeds: "Respect, space, consideration, peace"
      .split(",")
      .map((item) => item.trim()),
  },

  Hassled: {
    mistakenEmotions: "Irritated, distressed, angry, frustrated"
      .split(",")
      .map((item) => item.trim()),
    universalNeeds: "Serenity, autonomy, choice of pace and method, calm, space"
      .split(",")
      .map((item) => item.trim()),
  },

  Ignored: {
    mistakenEmotions: "Lonely, scared, hurt, sad, embarrassed"
      .split(",")
      .map((item) => item.trim()),
    universalNeeds: "Connection, belonging, inclusion, community, participation"
      .split(",")
      .map((item) => item.trim()),
  },

  Insulted: {
    mistakenEmotions: "Angry, embarrassed"
      .split(",")
      .map((item) => item.trim()),
    universalNeeds: "Respect, consideration, acknowledgement, recognition"
      .split(",")
      .map((item) => item.trim()),
  },

  Interrupted: {
    mistakenEmotions: "Angry, frustrated, resentful, hurt"
      .split(",")
      .map((item) => item.trim()),
    universalNeeds: "Respect, to be heard, consideration"
      .split(",")
      .map((item) => item.trim()),
  },

  Intimidated: {
    mistakenEmotions: "Scared, anxious".split(",").map((item) => item.trim()),
    universalNeeds: "Safety, equality, empowerment"
      .split(",")
      .map((item) => item.trim()),
  },

  Invalidated: {
    mistakenEmotions: "Angry, hurt, resentful"
      .split(",")
      .map((item) => item.trim()),
    universalNeeds: "Appreciation, respect, acknowledgement, recognition"
      .split(",")
      .map((item) => item.trim()),
  },

  Invisible: {
    mistakenEmotions: "Sad, angry, lonely, scared"
      .split(",")
      .map((item) => item.trim()),
    universalNeeds:
      "To be seen and heard, inclusion, belonging, community, inclusion, companionship"
        .split(",")
        .map((item) => item.trim()),
  },

  Isolated: {
    mistakenEmotions: "Lonely, afraid, scared"
      .split(",")
      .map((item) => item.trim()),
    universalNeeds: "Community, inclusion, belonging, contribution"
      .split(",")
      .map((item) => item.trim()),
  },

  Judged: {
    mistakenEmotions: "Resentful, scared, hurt, angry"
      .split(",")
      .map((item) => item.trim()),
    universalNeeds: "to be seen, consideration, fairness, equality, justice"
      .split(",")
      .map((item) => item.trim()),
  },

  "Left out": {
    mistakenEmotions: "Sad, lonely, anxious"
      .split(",")
      .map((item) => item.trim()),
    universalNeeds: "inclusion, belonging, community, connection"
      .split(",")
      .map((item) => item.trim()),
  },

  "Let down": {
    mistakenEmotions: "Sad, disappointed, frightened"
      .split(",")
      .map((item) => item.trim()),
    universalNeeds: "Trust, dependability"
      .split(",")
      .map((item) => item.trim()),
  },

  Manipulated: {
    mistakenEmotions: "Angry, scared, powerless, thwarted, frustrated"
      .split(",")
      .map((item) => item.trim()),
    universalNeeds:
      "Autonomy, empowerment, trust, equality, freedom, connection, authenticity"
        .split(",")
        .map((item) => item.trim()),
  },

  Mistrusted: {
    mistakenEmotions: "Sad, angry".split(",").map((item) => item.trim()),
    universalNeeds: "Trust".split(",").map((item) => item.trim()),
  },

  Misunderstood: {
    mistakenEmotions: "Upset, angry, frustrated"
      .split(",")
      .map((item) => item.trim()),
    universalNeeds: "To be heard, understanding, clarity"
      .split(",")
      .map((item) => item.trim()),
  },

  Neglected: {
    mistakenEmotions: "Lonely, scared".split(",").map((item) => item.trim()),
    universalNeeds:
      "Connection, inclusion, contribution, community, care, consideration"
        .split(",")
        .map((item) => item.trim()),
  },

  Overpowered: {
    mistakenEmotions: "Angry, helpless, confused"
      .split(",")
      .map((item) => item.trim()),
    universalNeeds: "Equality, justice, autonomy, freedom"
      .split(",")
      .map((item) => item.trim()),
  },

  Overworked: {
    mistakenEmotions: "Angry, tired, frustrated, exhausted"
      .split(",")
      .map((item) => item.trim()),
    universalNeeds: "Respect, consideration, rest, nurturing"
      .split(",")
      .map((item) => item.trim()),
  },

  Patronized: {
    mistakenEmotions: "Angry, frustrated, resentful"
      .split(",")
      .map((item) => item.trim()),
    universalNeeds: "Recognition, equality, respect, mutuality"
      .split(",")
      .map((item) => item.trim()),
  },

  Pressured: {
    mistakenEmotions: "Anxious, resentful, overwhelmed"
      .split(",")
      .map((item) => item.trim()),
    universalNeeds: "Relaxation, clarity, space, consideration"
      .split(",")
      .map((item) => item.trim()),
  },

  Provoked: {
    mistakenEmotions: "Angry, frustrated, hostile, antagonistic, resentful"
      .split(",")
      .map((item) => item.trim()),
    universalNeeds: "Respect, consideration"
      .split(",")
      .map((item) => item.trim()),
  },

  "Put down": {
    mistakenEmotions: "Angry, sad, embarrassed"
      .split(",")
      .map((item) => item.trim()),
    universalNeeds: "Respect, acknowledgement, understanding"
      .split(",")
      .map((item) => item.trim()),
  },

  Rejected: {
    mistakenEmotions: "Hurt, scared, angry, defiant"
      .split(",")
      .map((item) => item.trim()),
    universalNeeds:
      "Belonging, inclusion, closeness, to be seen, acknowledgement, connection"
        .split(",")
        .map((item) => item.trim()),
  },

  "Ripped off/screwed": {
    mistakenEmotions: "Angry, resentment, disappointed"
      .split(",")
      .map((item) => item.trim()),
    universalNeeds: "Consideration, justice, acknowledgement, trust"
      .split(",")
      .map((item) => item.trim()),
  },

  "Smothered/suffocated": {
    mistakenEmotions: "Frustrated, desperate, fear"
      .split(",")
      .map((item) => item.trim()),
    universalNeeds: "Space, freedom, autonomy, authenticity, self-expression"
      .split(",")
      .map((item) => item.trim()),
  },

  "Taken for granted": {
    mistakenEmotions: "Sad, angry, hurt, disappointed"
      .split(",")
      .map((item) => item.trim()),
    universalNeeds: "Appreciation, acknowledgement, recognition, consideration"
      .split(",")
      .map((item) => item.trim()),
  },

  Threatened: {
    mistakenEmotions: "Scared, frightened, alarmed, agitated, defiant"
      .split(",")
      .map((item) => item.trim()),
    universalNeeds: "Safety, autonomy".split(",").map((item) => item.trim()),
  },

  "Trampled/walked on": {
    mistakenEmotions: "Angry, frustrated, overwhelmed"
      .split(",")
      .map((item) => item.trim()),
    universalNeeds:
      "Empowerment, connection, community, to be seen, consideration, equality, respect, acknowledgement"
        .split(",")
        .map((item) => item.trim()),
  },

  Tricked: {
    mistakenEmotions: "Embarrassed, angry, resentful"
      .split(",")
      .map((item) => item.trim()),
    universalNeeds: "Integrity, honesty, trust"
      .split(",")
      .map((item) => item.trim()),
  },

  Unappreciated: {
    mistakenEmotions: "Sad, angry, hostile, hurt"
      .split(",")
      .map((item) => item.trim()),
    universalNeeds: "Appreciation, respect, acknowledgement, consideration"
      .split(",")
      .map((item) => item.trim()),
  },

  Unheard: {
    mistakenEmotions: "Sad, hostile, frustrated"
      .split(",")
      .map((item) => item.trim()),
    universalNeeds: "Understanding, consideration, empathy"
      .split(",")
      .map((item) => item.trim()),
  },

  Unloved: {
    mistakenEmotions: "Sad, bewildered, frustrated"
      .split(",")
      .map((item) => item.trim()),
    universalNeeds:
      "Love, appreciation, empathy, connection, community, compassion"
        .split(",")
        .map((item) => item.trim()),
  },

  Unseen: {
    mistakenEmotions: "Sad, anxious, frustrated"
      .split(",")
      .map((item) => item.trim()),
    universalNeeds: "Acknowledgement, to be seen, appreciation, to be heard"
      .split(",")
      .map((item) => item.trim()),
  },

  Unsupported: {
    mistakenEmotions: "Sad, hurt, resentful"
      .split(",")
      .map((item) => item.trim()),
    universalNeeds: "Support, understanding"
      .split(",")
      .map((item) => item.trim()),
  },

  Unwanted: {
    mistakenEmotions: "Sad, anxious, frustrated"
      .split(",")
      .map((item) => item.trim()),
    universalNeeds: "Belonging, inclusion, caring, nurturing"
      .split(",")
      .map((item) => item.trim()),
  },

  Used: {
    mistakenEmotions: "Sad, angry, resentful"
      .split(",")
      .map((item) => item.trim()),
    universalNeeds: "Autonomy, equality, consideration, mutuality"
      .split(",")
      .map((item) => item.trim()),
  },

  Victimized: {
    mistakenEmotions: "Frightened, helpless"
      .split(",")
      .map((item) => item.trim()),
    universalNeeds: "Empowerment, mutuality, safety, justice"
      .split(",")
      .map((item) => item.trim()),
  },

  Violated: {
    mistakenEmotions: "Sad, anxious, agitated"
      .split(",")
      .map((item) => item.trim()),
    universalNeeds: "Privacy, safety, trust, space, respect"
      .split(",")
      .map((item) => item.trim()),
  },

  Wronged: {
    mistakenEmotions: "Angry, hurt, resentful, irritated"
      .split(",")
      .map((item) => item.trim()),
    universalNeeds: "Respect, justice, trust, safety, fairness, equality"
      .split(",")
      .map((item) => item.trim()),
  },
};
